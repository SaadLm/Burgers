<script>
import menuData from "@/data.json";
import IngredientList from "../components/IngredientList.vue";
import BackComponent from "../components/BackComponent.vue";

export default {
  data() {
    return {
    };
  },
  components:{ IngredientList, BackComponent },
  props:{
    id:{type:Number,required:true}
  },
  computed: {
    // menuId() {
    //   return parseInt(this.$route.params.id);
    // },
    menu(){
        return menuData.menus.find(menu => menu.id===this.id)
    }
  },
}
</script>

<template>
  
  <div class="row ">
    <div class="col-md-6 offset-md-4">
      <h1> {{menu.name}} !!!!!!!!!!!!!</h1>
    <img class="ms-5" :src="`/images/${menu.image}`" :alt="menu.slug"/>
    <p>Description : {{ menu.description }}</p>
    </div>
  </div>
  <BackComponent/>
  <div class="row">
    <RouterLink v-for="ingre in menu.ingredients" :key="ingre.slug" :to="{
                name:'ingredient.show',
                params:{id:menu.id,
                    slug:ingre.slug}
                }"
    >
    <IngredientList 
    :ingredients="ingre"
    />
    </RouterLink>
    
  </div>
  <!-- <div class="row">
    <IngredientList 
    v-for="ingre in menu.ingredients" :key="ingre.slug"
    :ingredients="ingre"
    />
  </div> -->
 
  
        
</template>
<style>
  .card{
    width: 100px
  }
</style>