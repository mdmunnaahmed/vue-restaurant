<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light justify-content-center"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul class="navbar-nav justify-content-center">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Sign In</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/signup">Sign Up</router-link>
          </li>
          <li class="nav-item">
            <buttonn
              type="button"
              class="nav-link"
              :class="{ disabled: logoutDisable }"
              @click="logout"
              >Logout</buttonn
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      logoutDisable: false,
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LogIn" });
      this.logoutDisable = true;
    },
  },
};
</script>

<style scoped>
.router-link-exact-active {
  color: green !important;
  font-weight: 600;
}
</style>