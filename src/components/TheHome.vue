<template>
  <h1 class="text-center">Welcome to our Restaurant</h1>
  <router-link to="/signup" v-if="!loggedIn">Sign Up Now</router-link>
  <h2 v-else>You are logged In as {{ user }}</h2>
</template>

<script>
export default {
  name: "TheHome",
  data() {
    return {
      loggedIn: false,
      user: "",
    };
  },
  mounted() {
    let userIn = localStorage.getItem("user-info");
    if (!userIn) {
      this.$router.push({
        name: "SignUp",
      });
    } else {
      this.loggedIn = true;
      this.user = JSON.parse(userIn).name;
    }
  },
};
</script>