<template>
  <div class="main-sidebar">
    <ul>
      <li class="siderbar-home">
        <RouterLink to="/PDF/generate">Página Inicial</RouterLink>
      </li>
      <li class="sidebar-services">
        <RouterLink to="/PDF/generate">Gerar PDF</RouterLink>
      </li>
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
a{
  text-decoration: none;
  color: white;
  padding: 5px;
}

a:hover{
  background-color: white;
  color: black;
  border-radius: 5px;
  transition: 0.75s;
}
</style>
