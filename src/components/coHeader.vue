<template>
  <div class="header">
    <div class="p-d-flex">
      <router-link to="/home" ><img src="../assets/iWorld.png" alt="icono" width="50px"></router-link>
      <h2>WEB BUILDER</h2>
    </div>
    <div>
      <Menubar :model="items" > 
        <template #end>
          <router-link v-if="!user.loggedIn" to="/login" tag="button"><i class="pi pi-sign-in"></i> Iniciar Sesión</router-link>
          <router-link v-if="user.loggedIn" to="/login"> <h5> <i class="pi pi-user"></i>{{emailLogin}}</h5></router-link>
        </template>
      </Menubar>
    </div>     
  </div>
</template>

<script>
import Firebase from '../db.js';
import Menubar from 'primevue/menubar';
export default {
  name: 'coHeader',
  mounted: function() {
    Firebase.auth.onAuthStateChanged( user => {
      if (user) {
        this.user.loggedIn = true;
        this.user.data = user;
        this.emailLogin=user.email;
      }
      else {
        this.user.loggedIn = false;
        this.user.data = {};
      }
    })
  },
  data() {
    return {
      user: {
          loggedIn: false,
          data: {}
        },
      items: [
        {label: 'Home', icon: 'pi pi-home', to:"/home"}, 
        {label: 'Builder', icon: 'pi pi-forward', to:"/builder"}, 
        {label: 'Nuestros Servicios', 
        items:[
          {
              label:'Plan básico',
              icon:'pi pi-fw pi-bookmark',
              to:'/planes'
          },
          {
              label:'Plan avanzado',
              icon:'pi pi-fw pi-bookmark',
              to:'/planes'
          },{separator:true},
          {
              label:'Plan profesional',
              icon:'pi pi-fw pi-bookmark',
              to:'/oops'
          }

        ]        
        },
        {label: 'Contacto', to: '/contacto'},        
        {label: 'Mis Páginas', to: '/misPaginas'}
         
      ]
    }
  },
  components: {
    'Menubar': Menubar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>