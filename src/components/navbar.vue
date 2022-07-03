  <template>
  <div class="border-b flex flex-row items-center select-none" id="navbar">
    <router-link to="/dashboard" class="py-3 px-5 cursor-pointer flex">Dashboard</router-link>
    <router-link to="/document" class="py-3 px-5 cursor-pointer flex">Documents</router-link>
    <router-link to="/user" class="py-3 px-5 cursor-pointer flex">Users</router-link>
    <router-link to="/policy" class="py-3 px-5 cursor-pointer flex">Policy</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
};
</script>

<style scoped>
#navbar {
  height: 3rem;
}
</style>
