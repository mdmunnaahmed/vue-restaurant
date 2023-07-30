<template>
  <h1>Login Here</h1>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        v-model="email"
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        v-model="password"
        type="password"
        class="form-control"
        id="exampleInputPassword1"
      />
    </div>
    <p class="text-danger" v-if="credentialFalse">Your username or password is wrong</p>
    <button @click="login" type="button" class="btn btn-primary">Login</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
      credentialFalse: false,
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );

      if (result.status == 200 && result.data.length > 0) {
        console.log("okay");
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({
          name: "TheHome",
        });
      } else {
        console.log("jamela ace");
        this.credentialFalse = true;
      }
    },
  },
  mounted() {
    let userIn = localStorage.getItem("user-info");
    if (userIn) {
      this.$router.push({
        name: "TheHome",
      });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  max-width: 400px;
  text-align: left;
  margin: 0 auto;
}
</style>
