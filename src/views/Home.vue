<template>
    <section>

      <hr/><br/>
      
      <h4>This demo is for Vue js , FastApi , Postgresql ,Docker and Google Kubernetes Engine </h4>
      <div v-if="isLoggedIn" id="logout">
        
      </div>
      <p v-else>
        <ul >
              <li class="nav-item">
                <router-link  to="/register">Register</router-link>
              </li>
              <li class="nav-item">
                <router-link  to="/login">Log In</router-link>
              </li>
          </ul>
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