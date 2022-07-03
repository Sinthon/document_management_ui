<template>
  <div class="w-full justify-center flex items-center">
    this is dashboard
    {{ user }}
  </div>
</template>

<script>
import UserService from "./../../services/UserService";
// import axios from "axios";

export default {
  name: "DashboardPage",
  UserService: null,
  computed: {
    user() {
      const user = this.$store.getters
      return user
    },
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.UserService = new UserService();
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    onLoad() {  
      this.UserService.getUsers().then((res) => {
          this.users = res.data
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>

<style scoped>
</style>