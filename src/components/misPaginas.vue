<template>
  <div class="misPaginas">
      <div v-if="paid==false">
        <h2>¡Vaya! Parece que no tienes ninguna página todavía. Accede al <router-link to="builder">Builder</router-link> para crear tu primera página</h2>
      </div>
      <h1>
          MIS PÁGINAS
      </h1>  
      
      <div v-if="plan==1&&paid">
        <h3>Home Básico</h3>
        <basicHome :coleccion=coleccion />
      </div>
      <div v-if="plan==2&&paid">
        <TabMenu :model="numPaginas" />

        <div v-if="pagina==1">
          <avanHome/>
        </div>
        <div v-if="pagina==2">
          <avanProducto/>
        </div>
        <div v-if="pagina==3">
          <avanAboutUs/>
        </div>
      </div>
      
      
  </div>
</template>

<script>
import {db} from'../db.js';
import Firebase from '../db.js';

import basicHome from '@/components/Basico/basicHome.vue';
import avanHome from '@/components/Avanzado/avanHome.vue';
import avanProducto from '@/components/Avanzado/avanProducto.vue';
import avanAboutUs from '@/components/Avanzado/avanAboutUs.vue';

import TabMenu from 'primevue/tabmenu';

export default {
  name: 'misPaginas',
  components:{
     basicHome,
     avanHome,
     avanProducto,
     avanAboutUs,
     TabMenu
  },data(){
    return{
      email:'',
      paid:true,
      plan:'',
      pagina:1,
      coleccion:{},
      numPaginas:[{label:'Página 1',command: ()=>{this.pagina=1}},{label:'Página 2',command: ()=>{this.pagina=2}},{label:'Página 3',command: ()=>{this.pagina=3}}]
  }
  },
    mounted: function() {
    Firebase.auth.onAuthStateChanged( user => {
      if (user) {
        //establecer que el usuario está logueado y determinar su email
        this.email=user.email;
        //cargar la colección del usuario
        this.bajar(user.email,'datos')
      }    
    })   
    },
    methods:{
      bajar(coleccion,documento){
        var docRef=db.collection(coleccion).doc(documento);
        docRef.get().then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            //carga los datos de la colección en la variable this.coleccion, y comprueba si ha pagado y qué plan ha seleccionado
            this.coleccion=doc.data();
            this.paid=doc.data().Datos.pagado
            this.plan=doc.data().Datos.plan
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
          }).catch((error) => {
          console.log("Error getting document:", error);
      });
      }
    }
    

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
