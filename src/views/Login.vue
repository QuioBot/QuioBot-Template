<template>
    <section>
      
      <div class="login">
        <img src="MLOPS.png" class="center">
        
      <form @submit.prevent="submit">
        <div class="mb-3">
          <span>Email : quiobot-test@email.com</span> <br>
        <span>Password : test1234</span>
       </div>
        
        <div v-if="error" class="alert aler-danger" role="alert">
          {{ error }}
        </div>
        <div class="mb-3">
         
          <input placeholder="Email" type="text" name="username" v-model="form.username" />
        </div>
        <div class="mb-3">
      
          <input placeholder="Password" type="password" name="password" v-model="form.password"  />
        </div>
        <button type="submit" class="btn btn-primary btn-block btn-large">Submit</button>
      </form>
    </div>
    </section>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  export default {
    name: 'LoginVue',
    data() {
      return {
        form: {
          username: '',
          password:'',
        },
        error : '',
      };
    },
    methods: {
      ...mapActions(['logIn']),
      async submit() {
        try{
          const User = new FormData();
          User.append('username', this.form.username);
          User.append('password', this.form.password);
          await this.logIn(User)
          this.$router.push('/dashboard');
        } catch(e){
          this.error = 'Invalid Authentication'
        }
        
      }
    }
  }
  </script>


  