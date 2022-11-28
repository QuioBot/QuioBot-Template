<template>
    <div>
      <section>


       

        <h3>Hello <span style="color:#0fa2b8 ;">{{ stateUser.name }}</span></h3>
  
        <h4>This is demo for Platform with Authentication </h4>
        <h5>Vue js , FastApi , Postgresql ,Docker and Google Kubernetes Engine</h5>

        <hr/><br/>

        <img src="data.png" class="center">
        

      </section>
    </div>
  </template>
  
  <script>
   import { mapGetters} from 'vuex';

  export default {

    name: 'DashboardVue',
    data() {
      return {
        form: {
          title: '',
          content: '',
        },
      };
    },
    computed: {
      ...mapGetters(['stateUser']),
    },

    

  };
  </script>


  