import Master from "./../pages/layout/master.vue";
import Auth from "./../pages/auth";
import Dashboard from "./../pages/dashboard";
import ManageUser from "./../pages/user_and_role";
import Document from "./../pages/document";
import Users from "./../pages/user";
import Policy from "./../pages/role";
import store from "./../store";

export default [
  {
    name: "Login",
    component: Auth,
    path: "/login",
    children: [],
  },
  {
    name: "Master",
    path: "/",
    component: Master,
    redirect: "/dashboard",
    meta: {
      middleware: ["auth", "check-auth", "central"],
    },
    children: [
      {
        name: "Dashboard",
        component: Dashboard,
        path: "/dashboard",
      },
      {
        name: "Manage user",
        component: ManageUser,
        path: "/manage-user",
      },
      {
        name: "Document",
        component: Document,
        path: "/document",
      },
      {
        name: "Users",
        component: Users,
        path: "/user",
      },
      {
        name: "Policy",
        component: Policy,
        path: "/policy",
      },
    ],
  },
  {
    path: "/auth",
    name: "Auth",
    component: {
      beforeRouteEnter(to, from, next) {
        Promise.all([
          store.dispatch("auth/fetchUser"),
        ])
          .then(() => {
            next({ name: "Dashboard" });
          })
          .catch(() => {
            next({ name: "Dashboard" });
          });
      },
    },
  },

  {
    name: "not found",
    path: "/:pathMatch(.*)*",
    component:
      "<h1 class='w-full h-full flex items-center justify-center'>Not found</h1>",
  },
];
