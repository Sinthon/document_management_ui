import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const globalMiddleware = [];

const routeMiddleware = resolveMiddleware(
    require.context("../middleware", false, /.*\.js$/)
);

const router = Router();

export default router;

function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
        linkExactActiveClass: "active-link-menu",
    });
    router.afterEach(afterEach);
    return router;
}

async function afterEach(to, from, next) {
    const middleware = getMiddleware(to.meta);

    callMiddleware(middleware, to, from, (...args) => {
        next(...args);
    });
}

function getMiddleware(meta) {

    const middleware = [...globalMiddleware];

    if(!("middleware" in meta)){
        return middleware;
    }

    if (Array.isArray(meta.middleware)) {
        middleware.push(...meta.middleware);
    } else {
        middleware.push(meta.middleware);
    }

    return middleware
}

function callMiddleware(middleware, to, from, next) {
    const stack = middleware.reverse();

    const _next = (...args) => {
        if (args.length > 0 || stack.length === 0) {
            return next;
        }

        const { middleware, params } = parseMiddleware(stack.pop());

        if (typeof middleware === "function") {
            middleware(to, from, _next, params);
        } else if (routeMiddleware[middleware]) {
            routeMiddleware[middleware](to, from, _next, params);
        } else {
            throw Error(`Undefined middleware [${middleware}]`);
        }
    };

    _next();
}

function parseMiddleware(middleware) {
    if (typeof middleware === "function") {
        return { middleware };
    }

    const [name, params] = middleware.split(":");

    return { middleware: name, params };
}

function resolveMiddleware(requireContext) {
    return requireContext
        .keys()
        .map((file) => [
            file.replace(/(^.\/)|(\.js$)/g, ""),
            requireContext(file),
        ])
        .reduce(
            (guards, [name, guard]) => ({ ...guards, [name]: guard.default }),
            {}
        );
}
