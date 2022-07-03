<template>
  <div class="text-white py-5 select-none" id="sidebar">
    <router-link to="/dashboard" class="py-3 px-5 cursor-pointer flex">Dashboard</router-link>
    <router-link to="/document" class="py-3 px-5 cursor-pointer flex">Documents</router-link>
    <router-link to="/manage-user" class="py-3 px-5 cursor-pointer flex">Manage user</router-link>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  components: {},
};
</script>

<style scoped>
#sidebar {
  width: 17rem !important;
  height: calc(100vh - 3rem);
  background-color: rgb(0 139 139);
}
</style>
