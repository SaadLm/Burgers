<template>
    
        <img class="img-fluid" :src="`/images/${ingredients.image}`" :alt="ingredients.slug" >
        <h5 class="text-center">{{ ingredients.name }}</h5>
  
</template>
<script>
    // import menuData from "@/data.json";
export default {
    // name:"IngredientList.vue",
    props:{
        ingredients:{type:Object,required:true}
    }
    
}
// menu=menuData.menus.find(ingre =>ingre.id=id)
</script>