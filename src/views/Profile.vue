<template>
    <section>
      <h1>Your Profile</h1>
      <hr/><br/>
      <div>
        <p><strong>Usename:</strong> <span style="color:#0fa2b8 ;">{{ user.name }}</span></p>
        <p><strong>Email:</strong> <span style="color:#0fa2b8 ;">{{ user.email }}</span></p>
        <!-- <p><button @click="deleteAccount()" class="btn btn-primary">Delete Account</button></p> -->
      </div>
    </section>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'ProfileVue',
    created: function() {
      return this.$store.dispatch('viewMe');
    },
    computed: {
      ...mapGetters({user: 'stateUser' }),
    },
    methods: {
      ...mapActions(['deleteUser']),
      async deleteAccount() {
        try {
          await this.deleteUser(this.user.id);
          await this.$store.dispatch('logOut');
          this.$router.push('/');
        } catch (error) {
          console.error(error);
        }
      }
    },
  }
  </script>
  