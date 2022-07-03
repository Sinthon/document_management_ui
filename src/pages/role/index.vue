<template>
  <DataTable>
    <template #header>
      <div class="table-header flex items-center justify-between">
        <div class="">
          <div class="p-inputgroup">
            <InputText placeholder="Search" class="p-inputtext-sm" />
            <Button icon="pi pi-search" class="p-button-info p-button-sm" />
          </div>
        </div>
        <div class="">
          <Button icon="pi pi-search" class="p-button-info p-button-sm" />
        </div>
      </div>
    </template>
    <Column></Column>
  </DataTable>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default {
  name: "RolePage",
  components: {
    DataTable,
    Column,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>