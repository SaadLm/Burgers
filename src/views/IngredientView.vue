<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <h1 class="text-center">{{ ingredient.slug }}</h1>
            <p class="text-center">{{ ingredient.name }}</p>
            <p class="text-center">{{ ingredient.description }}</p>
            <img class="offset-md-2 img-fluid" :src="`/images/${ingredient.image}`" :alt="menu.slug"/>
        </div>
    </div>
</template>
<script>
import menuData from '@/data.json'

export default {
    data(){return{};},
    props:{
    id:{type:Number,required:true},
    slug:{type:String,required:true}
    },
    computed:{
    
    menu(){
        return menuData.menus.find(menu => menu.id===this.id)
    },
    ingredient(){
        return this.menu.ingredients.find(ingredient => ingredient.slug===this.slug)
    },
    }
    ,
}
</script>