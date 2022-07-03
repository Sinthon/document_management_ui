<template>
  <div class="w-full p-4">
    <DataTable
      :value="test"
      class="p-datatable-sm text-12"
      showGridlines
      selectionMode="single"
      scrollHeight="flex"
      :paginator="true"
      :lazy="true"
      scrollable="true"
      :rows="10"
      @row-dblclick="onDoubleClick"
      :rowsPerPageOptions="[10, 20, 30, 40, 50]"
      ref="dt"
      dataKey="id"
      :resizableColumns="true"
      responsiveLayout="scroll"
      scrollDirection="both"
    >
      <template #header>
        <div class="table-header flex items-center justify-between">
          <div class="">
            <div class="p-inputgroup">
              <InputText placeholder="Search" class="p-inputtext-sm" />
              <Button icon="pi pi-search" class="p-button-info p-button-sm" />
            </div>
          </div>
          <div class="">
            <Button
              @click="toggleDialog"
              icon="pi pi-plus"
              label="Add new"
              iconPos="right"
              class="p-button-info p-button-sm"
            />
          </div>
        </div>
      </template>
      <Column
        header="TITLE"
        field="title"
        style="
          flex-grow: 1;
          flex-basis: 150px;
          display: block;
          white-space: nowrap;
          overflow: hidden !important;
          text-overflow: ellipsis;
        "
      />
      <Column
        header="EXTENTIONS"
        field="extention"
        style="
          flex-grow: 1;
          flex-basis: 150px;
          display: block;
          white-space: nowrap;
          overflow: hidden !important;
          text-overflow: ellipsis;
        "
      />
      <Column
        header="FILE SIZE"
        field="fileSize"
        style="
          flex-grow: 1;
          flex-basis: 150px;
          display: block;
          white-space: nowrap;
          overflow: hidden !important;
          text-overflow: ellipsis;
        "
      />
      <Column
        header="FILE PATH"
        field="filePath"
        style="
          flex-grow: 1;
          flex-basis: 150px;
          display: block;
          white-space: nowrap;
          overflow: hidden !important;
          text-overflow: ellipsis;
        "
      />
      <Column
        style="
          flex-grow: 1;
          flex-basis: 50px;
          display: block;
          white-space: nowrap;
          overflow: hidden !important;
          text-overflow: ellipsis;
        "
      >
        <template #header>
          <div class="w-full flex items-center justify-end px-3">ACTION</div>
        </template>
        <template #body>
          <div
            class="flex items-center space-x-2 justify-end h-5"
            @click="clickGetID()"
          >
            <span class="text-blue-400">Edit</span>
            <span>|</span>
            <SplitButton :model="Action" class="dropAction relative">
              <div class="absolute cursor-pointer">
                <div class="">&nbsp;</div>
              </div>
            </SplitButton>
          </div>
        </template>
      </Column></DataTable
    >
  </div>
  <Dialog
    :header="headerDialog"
    v-model:visible="dialogVisible"
    :breakpoints="{ '1025px': '85vw' }"
    :style="{ width: '50vw' }"
    :modal="true"
  >
    <keep-alive>
      <component :is="form" :PropData="PropData" :callback="SuccessData" />
    </keep-alive>
    <template #footer>
      <div
        class="border-t border-gray-200 pt-3 flex justify-between items-center"
      >
        <Button
          label="Cancel"
          icon="pi pi-times"
          @click="toggleDialog"
          class="p-button-secondary p-button-sm"
        />
        <Button
          label="Save & Close"
          icon="pi pi-save"
          class="p-button-sm p-button-info"
          @click="onSendSubmit"
          :model="btnList"
        ></Button>
      </div> </template
  ></Dialog>
</template>

<script>
import UserService from "./../../services/UserService";
// import axios from 'axios';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import SplitButton from "primevue/splitbutton";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Form from './form.vue'
export default {
  name: "DocumentPage",
  UserService: null,
  components: {
    DataTable,
    Column,
    SplitButton,
    InputText,
    Button,
    Dialog,
  },
  computed: {

  },
  data() {
    const test = [
      {
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        title: "string",
        extention: "string",
        fileSize: "string",
        filePath: "string",
      },
    ];
    return {
      test,
      dialogVisible: false,
      headerDialog: "Add new",
      form: Form,
    };
  },
  created() {
    this.UserService = new UserService();
  },
  mounted() {
    // this.onLoad();
  },
  methods: {
    // onLoad() {
    // },
    toggleDialog() {
      this.dialogVisible = !this.dialogVisible;
    },
  },
};
</script>

<style scoped>
</style>