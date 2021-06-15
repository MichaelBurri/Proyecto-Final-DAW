<template>
  <div class="home">
    <div>
      <ScrollTop :threshold="100" style="height: 50px;width: 50px;background-color:blue" />
    </div>
      <h1>
          ¡BIENVENIDO A WEB-BUILDER!
      </h1>
      <div class="jumbotron">
        <h2 class="display-4">Construye tu propia Web</h2>
        <img src="../assets/jumboWorld.png" alt="">
        <p class="lead">Construye tu propia página web con un sencillo editor de plantillas.</p>
        <hr class="my-4">
        <p>Nosotros te damos la plantilla y tu le das el contenido</p>
        <p class="lead">
          <a href="#enlaceProd"><Button label="Descubre cómo" icon="pi pi-arrow-down" class="p-button-success"></Button></a>
        </p>
      </div>

      <div class="descanso">
      </div>
      
      <h1 id="enlaceProd">Nuestros planes</h1>
      <div class="productos" >
        <Card class="card"  v-for="item in items" :key="item.titulo">
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
          <template #footer>
              <router-link :to="item.link"><Button icon="pi pi-shopping-cart" label="Contratar" /> </router-link>
          </template>
        </Card>
      </div>
      <div class="descanso">

      </div>
      <div class="Testimonios">
        <h1>TESTIMONIOS</h1>
      </div>
  </div>
</template>

<script>
import Button from 'primevue/button';
import ScrollTop from 'primevue/scrolltop';
import Card from 'primevue/card';
export default {
  name: 'Home',
  data() {
    return{
      items: [
        {titulo: 'Plan básico', precio: '9,95€/mes', 
        productos:['1 página: Home page.', 'Iconografía e imágenes del negocio.', 
        'Plantilla personalizable','Hasta 3 imágenes de productos.' ],
        link: '/basico'},

        {titulo: 'Plan avanzado', precio: '24,95€/mes', 
        productos:['3 páginas: Home page, Productos, Sobre Nosotros.', 'Barra de navegación y pie de página.', 'Iconografía e imágenes del negocio.', 
        'Hasta 5 imágenes de productos.', 'Gama personalizada de hasta 3 colores.' ],
        link: '/avanzado'},

        {titulo: 'Plan profesional', precio: '49,95€/mes', 
        productos:['5 páginas: Home page, Productos, Detalle de productos, Sobre Nosotros, Login'
        ,'Hosting dedicado','Barra de navegación y pie de página.', 'Iconografía e imágenes del negocio.', 
        'Hasta 60 imágenes de productos.', 'Gama personalizada de colores.' ],
        link:'/oops'}
      ]
    }
  },
  components: {
    'ScrollTop': ScrollTop,
    'Button':Button,
    'Card':Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .jumbotron{
    padding: 10px;
    margin-bottom: 5%;
  }
  .descanso{
    height: 20vh;
    width: 98.1vw;
    background-color: rgb(233, 231, 241);
  }
  Button{
    padding: 15px;
  }
  img{
    min-width: 500px;
    width: 700px;
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
  .productos{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 90%;
    margin: 2rem 0 6rem 0;
  }
  .card{
    padding: 5px;
    justify-content: flex-start;
    align-items: center;
    max-width: 38%;
  }
  @media (max-width: 800px){
    .productos{
      flex-direction: column;
      width: 100%;
      margin: 0 0 0 0;
    }
    .card{
    padding: 5px;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 100%;
  }
  img{
    width: 100%;
  }
  }
</style>
