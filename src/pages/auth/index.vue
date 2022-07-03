<template>
  <div
    class="flex flex-row w-screen h-screen"
    style="background-color: rgb(0 139 139)"
  >
    <div id="form-login" class="grid">
      <div
        class="place-self-center h-auto py-2"
        style="width: 300px; padding-bottom: 150px"
      >
        <Form
          :validation-schema="schema"
          @submit="Login"
          name="frm"
          id="frm"
          ref="form"
        >
          <div class="flex flex-col justify-start items-start mb-5">
            <h1 class="text-3xl font-bold">Login</h1>
          </div>
          <div
            class="
              p-fluid
              flex flex-col
              justify-start
              items-start
              my-4
              space-y-1
              bg-transparent
            "
          >
            '
            <transition-group name="p-message" tag="div">
              <Message
                v-for="msg of messages"
                severity="error"
                :key="msg"
                :life="3000"
                :sticky="false"
                class="w-full"
              >
                <span>{{ msg }}</span>
              </Message> </transition-group
            >'
            <label for="email">Email Address</label>
            <Field
              name="email"
              class="p-inputtext p-inputtext-sm w-full bg-transparent"
            >
            </Field>
            <ErrorMessage name="email" class="text-red-400"></ErrorMessage>
          </div>
          <div
            class="
              p-fluid
              flex flex-col
              justify-start
              items-start
              my-4
              space-y-1
              bg-transparent
            "
          >
            <label for="password">Password</label>
            <Field
              name="password"
              type="password"
              class="p-inputtext p-inputtext-sm w-full bg-transparent"
              :class="{ 'p-invalid': true }"
            >
            </Field>
            <ErrorMessage name="password" class="text-red-400"></ErrorMessage>
          </div>
          <div
            class="
              p-fluid
              flex flex-col
              justify-start
              items-start
              my-4
              space-y-1
            "
          >
            <span class="space-x-3">
              <Checkbox v-model="rememberMe" />
              <label for="remember-me">Remember me</label>
            </span>
          </div>
          <div class="flex flex-col justify-start items-start mt-8">
            <button
              type="submit"
              class="
                relative
                w-full
                cursor-pointer
                select-none
                border-sky-600
                hover:bg-sky-700
                inline-flex
                items-center
                justify-center
                px-5
                py-2
                border border-transparent
                rounded
                text-white
                focus:outline-none focus:ring focus:ring-opacity-50
                disabled:opacity-25
                transition
              "
              style="background-color: rgb(0 139 139)"
            >
              Login
            </button>
          </div>
        </Form>
      </div>
    </div>
    <div class="w-full flex items-center justify-center">
      <h1 class="text-6xl text-white font-bold">Manage document</h1>
    </div>
  </div>
</template>

<script>
import * as Yup from "yup";
import { Field, Form, ErrorMessage } from "vee-validate";
import Message from "primevue/message";
import Checkbox from "primevue/checkbox";
// import AuthService from "./../../services/AuthenticationService";

export default {
  name: "AuthPage",
  components: {
    Field,
    Form,
    ErrorMessage,
    Message,
    Checkbox,
  },
  setup() {
    const schema = Yup.object().shape({
      email: Yup.string().required("Email is a required field").nullable(),
      password: Yup.string()
        .required("Password is a required field")
        .nullable(),
    });
    return {
      schema,
      rememberMe: false,
    };
  },
  data() {
    return {
      messages: Object,
    };
  },
  created() {},
  methods: {
    Login: function (frmdata) {
      this.$store
        .dispatch("auth/login", frmdata)
        .then(() => {
          this.$router.push({ path: "/auth" });
        })
        .catch((error) => {
          this.messages = error;
        });
    },
  },
};
</script>

<style scoped>
#form-login {
  height: 100vh;
  width: 500px;
  /* width: 100%; */
  min-width: 400px;
  background-color: aliceblue;
}
</style>