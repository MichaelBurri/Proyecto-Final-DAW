<template>
    <div class="home">
    <div>
      <ScrollTop :threshold="100" style="height: 50px;width: 50px;background-color:blue" />
    </div>
    <div class="p-grid">
      <img src="" alt="icono" width="50px" class="p-col-2">
      <h1>
          <input v-if="edicion" type="text" v-model="basico.titulo">
          {{basico.titulo}}
      </h1>
    </div>
      
      <div class="jumbotron">          
          <img class="imagenTitulo" :src="basico.imagen" alt=""><input v-if="edicion" type="text" v-model="basico.imagen">
         
        <h2><input v-if="edicion" type="text" v-model="basico.subtitulo">{{basico.subtitulo}}</h2>
        <p class="lead">
          <input v-if="edicion" type="text" v-model="basico.boton">
          <a href="#enlaceProd"><Button :label="basico.boton" icon="pi pi-arrow-down" class="p-button-danger"></Button></a>
        </p>
      </div>     

      <hr> 
      
      <div class=" " id="enlaceProd">

         <h1 ><input v-if="edicion" type="text" v-model="basico.tituloProd">{{basico.tituloProd}}</h1>
         <div class="productos">
          <Card class="card"  v-for="(item,name) in basico.productos" :key="name">
            <template #header>
            </template>
            <template #title >
                <input v-if="edicion" type="text" v-model="item.nombre">
                <h3>{{item.nombre}}</h3>
                <input v-if="edicion" type="text" v-model="item.precio">
                <h4>{{item.precio}}</h4>
            </template>
            <template #content>
                <img class="imagenProd" :src="item.imagen" alt="">
                <p>  
                    <textarea v-if="edicion" type="text" v-model="item.descripcion"> </textarea>   <br>            
                    {{item.descripcion}}
                </p>
            </template>
            <template #footer>
                <input v-if="edicion" type="text" v-model="item.etiqueta">
                <Button icon="pi pi-shopping-cart" :label="item.etiqueta" />
            </template>
          </Card>
         </div>
        
      </div>
  </div>
</template>
<script>

import Button from 'primevue/button';
import ScrollTop from 'primevue/scrolltop';
import Card from 'primevue/card';
export default {
    name:'basicHome',
    props: {
    coleccion: Object,
    edicion: Boolean
    },
    data(){
        return{
            basico:this.coleccion.Basico   
        }
    },
    components: {
    'ScrollTop': ScrollTop,
    'Button':Button,
    'Card':Card
  }
}
</script>
<style scoped>
  .home{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    border: ridge red;
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
  .productos{
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 90vw;
    margin: 2rem 0 6rem 0;
    border-style: ridge;
    padding: 10px;
  }
  .card{
    min-width: 30%;    
    padding: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 3px;
  }
  .imagenProd{
      max-width: 200px;
  }
  .imagenTitulo{
      width: 100%;
  }
</style>