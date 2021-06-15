<template>
    <div class="planes">
        <h1>NUESTROS PLANES</h1>
        <div class="divMain">
        <h2>Selecciona un plan para continuar con el proceso de pago</h2>
        <div class="productos">
        <Card class="card"  v-for="(item,index) in items" :key="item.titulo">
          <template #header>
          </template>
          <template #title >
              <h3>{{item.titulo}} - {{item.precio}}</h3>
          </template>
          <template #content>
              <ul>
                <li v-for="producto in item.productos" :key="producto">
                  <i class="pi pi-check"></i> {{producto}}
                </li>
              </ul>
          </template>
          <template v-if="loggedIn" #footer>
              <Button v-if="index==0" @click="selectBasico" icon="pi pi-shopping-cart" label="Contratar" />
              <Button v-if="index==1" @click="selectAvanzado" icon="pi pi-shopping-cart" label="Contratar" />
          </template>
        </Card>
      </div>
        </div>       
        
        <coPagos v-if="plan=='1'||plan=='2'" :plan=plan />
    </div>
</template>
<script>
import coPagos from '@/components/coPagos.vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Firebase from '../db.js';

export default {
    name:'planes',
    components:{
        coPagos,        
        'Button':Button,
        'Card':Card
    },
    mounted: function() {
    Firebase.auth.onAuthStateChanged( user => {
      if (user) {
        //establecer que el usuario está logueado y determinar su email
        this.loggedIn = true;
      }
      else {
        this.loggedIn = false;
      }
    })
    },
    data(){
        return{
            plan:'', 
            loggedIn:false,
            items: [
        {titulo: 'Plan básico', precio: '9,95€/mes', 
        productos:['1 página: Home page.', 'Iconografía e imágenes del negocio.', 
        'Plantilla personalizable','Hasta 3 imágenes de productos.' ],
         plan:'selectAvanzado'},

        {titulo: 'Plan avanzado', precio: '24,95€/mes', 
        productos:['3 páginas: Home page, Productos, Sobre Nosotros.', 'Barra de navegación y pie de página.', 'Iconografía e imágenes del negocio.', 
        'Hasta 5 imágenes de productos.', 'Gama personalizada de hasta 3 colores.' ],
        plan:'selectAvanzado'}]
        }
    },
    methods:{
        selectBasico(){
            this.plan='1'
        },
        selectAvanzado(){
            this.plan='2'
        }
    } 
}
</script>
<style scoped>
    .planes{
    min-height: 100vh;
  }
  Button{
    padding: 15px;
  }
  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  li{
    padding: 0.3rem;
  }
  a{
    text-decoration: none;
  }
  .divMain{
      display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .productos{
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 90vw;
    margin: 2rem 0 2rem 0;
    border-style: ridge;
    padding: 10px;
  }
  .card{
    width: "25em";    
    padding: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 32%;
    margin: 3px;
  }
  .imagenProd{
      max-width: 200px;
  }
  .imagenTitulo{
      width: 100%;
  }
</style>