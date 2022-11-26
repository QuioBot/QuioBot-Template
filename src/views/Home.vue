<template>
    <section>

      <hr/><br/>
      
      <h4>This is demo for Vue js , FastApi and Postgresql Template </h4>
      <div v-if="isLoggedIn" id="logout">
        
      </div>
      <p v-else>
        <span><a href="/register">Register</a></span>
        <span> or </span>
        <span><a href="/login">Log In</a></span>
      </p>
    </section>
  </template>
  <script>
  
  export default {
    name: 'HomeView',
    computed : {
      isLoggedIn: function() {
        return this.$store.getters.isAuthenticated;
      }
    },
  }
  </script>