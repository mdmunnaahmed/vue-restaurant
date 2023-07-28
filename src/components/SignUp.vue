<template>
  <div class="container">
    <h3>Sign Up</h3>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input
          v-model="name"
          type="text"
          class="form-control"
          id=""
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id=""
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Phone Number</label>
        <input
          v-model="phone"
          type="tel"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="Phone"
        />
        <div id="Phone" class="form-text">
          We'll never share your phone with anyone else.
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
      <button type="button" class="btn btn-primary" @click="signUp">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        phone: this.phone,
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        localStorage.setItem('user-info', JSON.stringify(result.data))
        alert("yesss, your data has been added to our database");
      }
    },
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
