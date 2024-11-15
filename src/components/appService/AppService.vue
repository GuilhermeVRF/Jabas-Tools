<template>
    <a class="service">
        <RouterLink :to="href">
            <div class="service-image"></div>
            <p>{{ title }}</p>
        </RouterLink>
    </a> 
</template>
  
<script>
export default {
    name: 'AppService',
    props: {
        title: String,
        href: String
    }
}
</script>
  
<style scoped>
    .service{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .service-image{
        width: 150px;
        height: 150px;
        background-color: lightgray;
        -webkit-box-shadow: 5px 5px 15px -5px rgba(0,0,0,0.75);
        -moz-box-shadow: 5px 5px 15px -5px rgba(0,0,0,0.75);
        box-shadow: 5px 5px 15px -5px rgba(0,0,0,0.75);
    }

    p{
        margin-top: 10px;
    }
  </style>
  