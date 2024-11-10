<template>
    <header class="header">
      <p>Jabas</p>
    </header>
</template>
  
  <script>
  export default {
    name: 'AppHeader'
  }
  </script>
  
  <style scoped>
  .header{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid black;
  }

  p {
    font-size: 30px;
    font-weight: 600;
    margin-right: 5%;
  }
  </style>
  