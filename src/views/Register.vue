<template>
  <section>
    
    <div class="login">
      <img src="MLOPS.png" class="center">
    <form @submit.prevent="submit">
      <div v-if="error" class="alert aler-danger" role="alert">
          {{ error }}
        </div>
      <div class="mb-3">

        <input placeholder="Username" type="text" name="name" v-model="user.name"  />
      </div>
      <div class="mb-3">

        <input placeholder="Email" type="text" name="email" v-model="user.email" />
      </div>
      <div class="mb-3">

        <input placeholder="Password" type="password" name="password" v-model="user.password"  />
      </div>
      <button type="submit" class="btn btn-primary btn-block btn-large">Submit</button>
    </form>
    </div>
  </section>
</template>

<script>
// import axios from 'axios';
import { mapActions } from 'vuex';
export default {
  name: 'RegisterVue',
  data() {
    return {
      
      user: {
        name: "",
        email: "",
        password: ""
      },
      error:''
    };
  },
  methods: {
    ...mapActions(['register']),
    async submit() {
      try {
        await this.register(this.user);
        this.$router.push('/dashboard');
      } catch (e) {
        this.error = 'Name Or Email Already Taken'
      }
    },
  },
};
</script>
