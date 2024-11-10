<template>
  <div class="main-sidebar">
    <ul>
      <li class="siderbar-home">Página Inicial</li>
      <li class="sidebar-services">Gerar PDF</li>
      <li class="sidebar-services">Imagens</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-sidebar{
  width: 200px;
  height: 100%;
  background-color: black;
  color: white
}

.sidebar-services{
  margin-left: 10%;
}

ul{
  margin-top: 70px;
  padding: 10px;
  list-style: none;
}

li{
  cursor: pointer;
  padding: 5px;
  font-size: 18px;
}

li:hover{
  background-color: white;
  color: black;
  border-radius: 5px;
  transition: 0.5s;
}
</style>
