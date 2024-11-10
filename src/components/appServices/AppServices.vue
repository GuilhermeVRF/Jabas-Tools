<template>
    <h1>{{ title }}</h1>
    <div class="services">
        <AppService 
            v-for="(service, index) in services"
            :key="index"
            :title="service.title || 'Sem título'"
            :href="service.href || '#'"
        />
    </div>
</template>
  
<script>
import AppService from '../appService/AppService.vue';

export default {
    name: 'AppServices',
    props: {
        title: String,
        services: Array
    },
    components: {
        AppService
    }
}
</script>
  
<style scoped>
    .services{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }

    h1{
        text-align: center;
        width: 100%;
    }
  </style>
  