<template>
  <div class="underConstruction">
      <h1> ¡UPS! Este servicio aún no está disponible</h1>  
      <h3> Tristemente nuestro <i>Plan Profesional</i>  está todavía en desarrollo. Cuando esté disponible podrás disfrutar de:</h3>
      <hr>
      <ul>
        <h1>Plan Profesional - 49,95€/mes</h1>
        <li v-for="producto in productos" :key="producto"><i class="pi pi-check"></i> {{producto}}</li>
      </ul>

      <h2>Vuelve a la página de inicio <router-link to="/home" > aquí </router-link> </h2>
  </div>
</template>

<script>
export default {
  name: 'coUnderConstruction',
   data() {
    return{      
      productos:['5 páginas: Landing page, Productos, Detalle de productos, Sobre Nosotros, Login'
      ,'Hosting dedicado','Barra de navegación y pie de página.', 'Iconografía e imágenes del negocio.', 
      'Hasta 60 imágenes de productos.', 'Gama personalizada de colores.' ]
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.underConstruction{
  font-size: 1.3rem;
}
 ul{
   list-style: none;
 }
</style>