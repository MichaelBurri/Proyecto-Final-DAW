<template>
  <div class="avanzado">
    <h1>Plan Avanzado - 24,95€/mes</h1>
    <hr>
    <h3>Con el plan avanzado disfrutarás de los siguientes aspectos:</h3>
      <ul>        
        <li v-for="producto in productos" :key="producto"><i class="pi pi-check"></i> {{producto}}</li>
      </ul>
      <router-link to="/Planes"><Button label="CONTRATAR" /></router-link> 
      
  </div>
</template>

<script>
import Button from 'primevue/button';
export default {
  name: 'coAvanzado',
  data() {
      return{      
        productos:['3 páginas: Landing page, Productos, Sobre Nosotros.', 'Plantillas personalizables','Barra de navegación y pie de página.', 'Iconografía e imágenes del negocio.', 
        'Hasta 20 imágenes de productos.', 'Gama personalizada de hasta 3 colores.' ]
      }
    },
    components:{
      'Button':Button
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avanzado{
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