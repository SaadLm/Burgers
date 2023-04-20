
<template>
  <main>

<div class="album py-5 bg-light">
  <div class="container">

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> 
    <!-- haad l3iiiba kat9ssem l row men lwel bla manb9a ndiir lkolla we7da col-md-3 -->

       <RouterLink class="col" 
       v-for="menu in menus" 
       :key="menu.id" 
       :to="{
          name:'menu.show',
          params:{
            id:menu.id,
            slug:menu.slug
            }
       }"
       ><!--:to="menu.slug" -->
        
        <div class="card shadow-sm">
          <img :src="`/images/${menu.image}`" alt="" srcset="">

          <div class="card-body">
            <h3>{{menu.name}}</h3>
          </div>
        </div>
      </RouterLink>


    </div>
  </div>
</div>

</main>
</template>

<script>
import menusData from '@/data.json'

export default {
  data(){
    return{
      menus:menusData.menus
    }
  }
}
</script>
