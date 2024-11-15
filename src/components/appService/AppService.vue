<template>
    <RouterLink :to="href" class="service">
        <img class="service-image" :src="require(`../../assets/images/${imgSrc}`)">
        <p>{{ title }}</p>
    </RouterLink>
</template>
  
<script>
export default {
    name: 'AppService',
    props: {
        title: {
            type: String,
            required: true, 
        },
        imgSrc: {
            type: String,
            default: 'notFound.png', 
        },
        href: {
            type: String,
            required: true, 
        },
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
        text-decoration: none;
        color: black;
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
  