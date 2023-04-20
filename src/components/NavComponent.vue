<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/">MENUs !</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
                </li>
                
                <RouterLink class="col nav-link nav-item" 
                v-for="menu in menus" 
                :key="menu.id" 
                :to="{
                name:'menu.show',
                params:{id:menu.id,
                    slug:menu.slug}
                }"
                >{{ menu.name }}</RouterLink>
            </ul>
            </div>
        </div>
    </nav>
        
    
</template>
<script>
    import menuData from "@/data.json";
    export default {
  data(){
    return{
      menus:menuData.menus
    }
  }
}
</script>
<style>
.linkActive{
    border-bottom: red 1px solid;
}
</style>