<template>
  <div class="basico">
    <h1>Plan Básico - 9,95€/mes</h1>
    <hr>
    <h3>Con el plan básico disfrutarás de los siguientes aspectos:</h3>
      <ul>        
        <li v-for="producto in productos" :key="producto"><i class="pi pi-check"></i> {{producto}}</li>
      </ul> 
      <router-link to="/Planes"><Button label="CONTRATAR" /></router-link> 
  </div>
</template>

<script>
import Button from 'primevue/button';
export default {
  name: 'coBasico'
,
data() {
    return{      
      productos:['1 página: Landing page.', 'Iconografía e imágenes del negocio.', 
      'Plantilla personalizable','Hasta 5 imágenes de productos.']
    }
  },
  components:{
    'Button':Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.basico{
  font-size: 1.3rem;
}
ul{
   list-style: none;
 }
 li{
   padding: 0.35rem;
 }
 Button{
   padding: 1rem;
 }
</style>