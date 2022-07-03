<template>
  <header
    class="w-full border-fao-primary border"
    id="header"
    style="padding-right: 1rem"
  >
    <div class="w-full h-full flex items-center justify-between flex-row px-3">
      <div class="select-none h-full flex items-center">
        <h1 class="text-xl font-bold">Manage document</h1>
      </div>

      <div class="select-none h-full flex items-center">
        <h1 class="text-lg">{{ user.userName }}</h1>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
  components: {},
  computed: {
    user() {
      const userdata = this.$store.getters["auth/user"];
      if (userdata != null) {
        const user = JSON.parse(userdata);
        return user.value;
      } else return {};
    },
  },
  mounted() {
    this.onload();
  },
  methods: {
    onload() {},
  },
};
</script>

<style scoped>
#header {
  height: 3rem;
}
</style>
