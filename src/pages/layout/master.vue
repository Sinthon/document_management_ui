<template>
  <div class="progressbar bg-gray-400" v-if="loading">
    <ProgressBar mode="indeterminate" style="height: 3px" />
  </div>

  <div class="w-full flex flex-col">
    <Header></Header>
    <div class="flex flex-row">
      <!-- <SideBar ></SideBar> -->
      <div class="w-full h-full">
        <NavBar></NavBar>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "primevue/progressbar";
import Header from "./../../components/header.vue";

// import SideBar from "./../../components/sidebar.vue";
import NavBar from "./../../components/navbar.vue";

export default {
  name: "MasterPage",
  components: {
    Header,
    // SideBar,
    NavBar,
    ProgressBar,
  },
  computed: {
    loading() {
      const loadingstate = this.$store.getters.loadingState
      return loadingstate;
    },
  },
};
</script>

<style>
.dropAction {
  border: 0 !important;
  width: 20px;
}
.dropAction .p-button-icon-only {
  border: 0 !important;
  outline: none !important;
  background: none !important;
  padding-left: 0 !important ;
  padding-right: 0 !important ;
}
.dropAction .p-button-icon-only:focus {
  border: 0 !important;
  outline: none !important;
  background: none !important;
  padding-left: 0 !important ;
  padding-right: 0 !important ;
  box-shadow: none !important;
}
.dropAction .p-button-icon-only .p-button-icon {
  color: #000 !important;
}
.progressbar {
  border-radius: 0px !important;
  top: 95px;
  left: 0px;
  position: absolute;
  width: 100%;
}
</style>