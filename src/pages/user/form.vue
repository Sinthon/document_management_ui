<template>
  <Form
    :validation-schema="schema"
    @submit="Login"
    name="frm"
    id="frm"
    ref="form"
  >
  Test{{PropData}}
    <div class="flex flex-col">
      <div class="w-full flex flex-row space-x-3">
        <div
          class="
            p-fluid
            flex flex-col
            justify-start
            items-start
            space-y-1
            bg-transparent
            w-1/2
          "
        >
          <label for="surname">Surname</label>
          <Field
            name="surname"
            class="p-inputtext p-inputtext-sm w-full bg-transparent"
          >
          </Field>
        </div>
        <div
          class="
            p-fluid
            flex flex-col
            justify-start
            items-start
            space-y-1
            bg-transparent
            w-1/2
          "
        >
          <label for="email">Given Name</label>
          <Field
            name="email"
            class="p-inputtext p-inputtext-sm w-full bg-transparent"
          >
          </Field>
        </div>
      </div>
      <div class="w-full flex flex-row space-x-3">
        <div
          class="
            p-fluid
            flex flex-col
            justify-start
            items-start
            space-y-1
            bg-transparent
            w-1/2
          "
        >
          <label for="username">Username</label>
          <Field
            name="username"
            class="p-inputtext p-inputtext-sm w-full bg-transparent"
          >
          </Field>
          <ErrorMessage name="username" class="text-red-400"></ErrorMessage>
        </div>
        <div
          class="
            p-fluid
            flex flex-col
            justify-start
            items-start
            space-y-1
            bg-transparent
            w-1/2
          "
        >
          <label for="emailAddress">Email Address</label>
          <Field
            name="emailAddress"
            class="p-inputtext p-inputtext-sm w-full bg-transparent"
          >
          </Field>
          <ErrorMessage name="emailAddress" class="text-red-400"></ErrorMessage>
        </div>
      </div>
      <div class="w-full flex flex-row space-x-3">
        <div
          class="
            p-fluid
            flex flex-col
            justify-start
            items-start
            space-y-1
            bg-transparent
            w-1/2
          "
        >
          <label for="password">Password</label>
          <Field
            name="password"
            type="password"
            class="p-inputtext p-inputtext-sm w-full bg-transparent"
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
            space-y-1
            bg-transparent
            w-1/2
          "
        >
          <label for="role">Role</label>
          <Field
            name="role"
            class="p-inputtext p-inputtext-sm w-full bg-transparent"
          >
          </Field>
          <ErrorMessage name="role" class="text-red-400"></ErrorMessage>
        </div>
      </div>
      <div class="w-full flex flex-row space-x-3 pr-3">
        <div
          class="
            p-fluid
            flex flex-col
            justify-start
            items-start
            my-4
            space-y-1
            bg-transparent
            w-1/2
          "
        >
          <label for="cm_password">Confirm password</label>
          <Field
            name="cm_password"
            type="password"
            class="p-inputtext p-inputtext-sm w-full bg-transparent"
          >
          </Field>
          <ErrorMessage name="cm_password" class="text-red-400"></ErrorMessage>
        </div>
      </div>
      <div class="w-full flex flex-row space-x-3 pr-3">
        <button type="submit" id="btn-save">Test</button>
      </div>
    </div>
  </Form>
</template>

<script>
import * as Yup from "yup";
import { Field, Form, ErrorMessage } from "vee-validate";

export default {
  name: "FormUser",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  props: {
    PropData: Object,
    callback: {
      type: Function,
    },
  },
  data() {
    const schema = Yup.object().shape({
      username: Yup.string()
        .required("Username address is a required field")
        .nullable(),
      emailAddress: Yup.string()
        .required("Email address is a required field")
        .nullable(),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is a required field")
        .nullable(),
      cm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
      role: Yup.string().required("Role is a required field").nullable(),
    });
    return {
      schema,
    };
  },
};
</script>

<style>
</style>