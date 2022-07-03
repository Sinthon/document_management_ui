<template>
  <div class="w-full pl-2 pt-2">
    <TabView :activeIndex="active">
      <TabPanel header="Users">
        <Users />
      </TabPanel>
      <TabPanel header="Roles">
        <Roles />
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Users from "./../user";
import Roles from "./../role";

export default {
  name: "UserAndRole",
  components: {
    TabView,
    TabPanel,
    Users,
    Roles,
  },
  setup() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
.p-tabview .p-tabview-panels {
  padding: 0px !important;
}
.p-tabview-nav-content {
  padding-bottom: 0 !important;
}
</style>