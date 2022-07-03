<template>
  <Form
    :validation-schema="schema"
    @submit="Login"
    name="frm"
    id="frm"
    ref="form"
  >
    <div class="w-full flex flex-col space-y-4">
      <div class="w-full">
        <div
          class="
            p-fluid
            flex flex-col
            justify-start
            items-start
            space-y-1
            bg-transparent
          "
        >
          <label for="username">Title</label>
          <Field
            name="title"
            class="p-inputtext p-inputtext-sm w-full bg-transparent"
          >
          </Field>
          <ErrorMessage name="title" class="text-red-400"></ErrorMessage>
        </div>
      </div>
      <div class="w-full">
        <div class="border-dashed border-2 border-sky-500 hover:bg-gray-50 w-full rounded p-10 flex items-center justify-center space-x-5">
            <span>Upload</span>
          <span class="pi pi-upload" style="font-size: 2rem"></span>
        </div>
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
      title: Yup.string().required("Title is a required field").nullable(),
    });
    return {
      schema,
    };
  },
};
</script>

<style>
</style>