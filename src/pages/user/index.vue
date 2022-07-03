<template>
  <div
    class="w-full p-4"
    :style="{
      height: `${dataTableHeight}px`,
    }"
  >
    <DataTable
      :value="UserData"
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
              @click="onAddnew"
              icon="pi pi-plus"
              label="Add new"
              iconPos="right"
              class="p-button-info p-button-sm"
            />
          </div>
        </div>
      </template>
      <Column
        header="USERNAME"
        field="userName"
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
        header="Email"
        field="email"
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
        header="EMAIL ADDRESS"
        field="phoneNumber"
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
        header="ROLE"
        field="role"
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
          flex-basis: 100px;
          display: block;
          white-space: nowrap;
          overflow: hidden !important;
          text-overflow: ellipsis;
        "
      >
        <template #header>
          <div class="w-full flex items-center justify-end px-3">ACTION</div>
        </template>
        <template #body="slotProp">
          <div
            class="flex items-center space-x-2 justify-end h-5"
            @click="selectUser(slotProp.data.email)"
          >
            <span @click="onEdit(slotProp.data.id)" class="text-blue-400 cursor-pointer">Edit</span>
            <span>|</span>
            <SplitButton :model="Action" class="dropAction relative">
              <div class="absolute cursor-pointer">
                <div class="">&nbsp;</div>
              </div>
            </SplitButton>
          </div>
        </template>
      </Column>
    </DataTable>
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
      </div>
    </template>
  </Dialog>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import SplitButton from "primevue/splitbutton";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import From from "./form.vue";
import UserService from "./../../services/UserService";

export default {
  name: "UserPage",
  UserService: null,
  components: {
    DataTable,
    Column,
    SplitButton,
    InputText,
    Button,
    Dialog,
  },
  data() {
    const Action = [
      {
        label: "Edit",
        icon: "pi pi-pencil",
        command: () => {
          this.onEdit(this.userEmail);
        },
      },
      {
        label: "Delete",
        icon: "pi pi-trash",
        command: () => {
          this.onDelete(this.userEmail);
        },
      },
    ];
    return {
      userEmail: "",
      Action,
      UserData: null,
      totalRecords: null,
      dataTableHeight: "",

      //dialog
      headerDialog: "Add new",
      dialogVisible: false,
      form: From,
      PropData: Object,
    };
  },
  mounted() {
    this.getContianerHeight();
    this.onLoad();
  },
  created() {
    window.addEventListener("resize", this.getContianerHeight);
    this.UserService = new UserService();
  },
  
  methods: {
    onLoad() {  
      this.$store.commit("setLoadingState", { value: true });
      this.UserService.getUsers().then((res) => {
          this.UserData = res.data
          this.$store.commit("setLoadingState", { value: false });
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    onDoubleClick() {
      console.log("Test");
    },
    getContianerHeight() {
      this.dataTableHeight = window.innerHeight - 120;
      console.log(this.dataTableHeight);
    },
    toggleDialog() {
      this.dialogVisible = !this.dialogVisible;
    },
    onSendSubmit() {
      const btn = document.getElementById("btn-save")
      if(btn != null){
        btn.click();
      }
    },
    selectUser(value) {
      this.userEmail = value;
    },
    onDelete(email) {
      console.log(email);
    },
    onEdit(email) {
      this.headerDialog = "Edit user";
      this.UserService.getUser(email).then(res =>{
          console.log(res)
          this.PropData = res.data
          this.toggleDialog();
      })
    },
    onAddnew(id) {
      this.headerDialog = "Add new user";
      this.toggleDialog();
      console.log(id);
    },
  },
};
</script>

<style>
</style>