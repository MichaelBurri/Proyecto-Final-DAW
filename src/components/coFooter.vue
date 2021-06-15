<template>
  <div class="footer">
    <hr>
    <div class="footerdiv p-d-flex p-flex-row" >
      <div class="p-d-flex p-flex-column" >
        <h3>Sobre Nosotros</h3>
        <ul>
          <li v-for="item in nosotros" :key="item.nombre"> 
            <i :class="item.icono"></i>{{item.nombre}}             
          </li>
        </ul>
      </div>      
      <div class="p-d-flex p-flex-column">
        <h3>Nuestros planes</h3>
        <ul>
          <li v-for="plan in planes" :key="plan.nombre"> 
            <router-link :to="plan.link">
              <i class="pi pi-caret-right"></i>{{plan.nombre}}
            </router-link>  
          </li>
        </ul>
      </div>
      <div class="p-d-flex p-flex-column">
        <h3>Redes sociales</h3>
        <ul>
          <li v-for="red in redes" :key="red.nombre">  
            <a :href="red.link" target="_blank"><i :class="red.icono"></i>{{red.nombre}}</a>
          </li>
        </ul>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  },
  data() {
    return{
      nosotros: [
       {nombre:'Teléfono: 633 044 568', icono:'pi pi-phone'},
       {nombre:'E-mail: tecumseh1993@gmail.com', icono:'pi pi-envelope'},
       {nombre:'Dirección: Calle Gracia s/n', icono:'pi pi-home'}
      ],
      planes:[
        {nombre:'Plan básico',link:'basico'},
        {nombre:'Plan avanzado',link:'avanzado'},
        {nombre:'Plan profesional',link:'oops'}        
      ]     
      ,
      redes:[
       {nombre:'Github', icono:'pi pi-github',link:'https://github.com/'},
       {nombre:'Twitter', icono:'pi pi-twitter',link:'https://twitter.com/home'},
       {nombre:'Google', icono:'pi pi-google',link:'https://www.google.com/'},
       {nombre:'Discord', icono:'pi pi-discord',link:'https://discord.com/'}        
      ]
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
    margin-top: 10%;
    width: 100%;
    background-color: aliceblue ;
    color: purple;
    font-size: 1.2rem;
  }
  .footerdiv{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .footerdiv>div{
    min-width: 20%;
    max-width: 33%;
    padding: 1rem;
    margin-left: 10%;
  }
  
  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  h3{
    text-align: left;
  }
  a{
    text-decoration: none;
  }
  @media (max-width: 800px){
    .footer{
      display: none;
    }
  }
</style>
