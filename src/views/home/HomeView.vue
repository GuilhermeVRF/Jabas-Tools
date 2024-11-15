<template>
<SideBar msg="Welcome to Your Vue.js App"/>
  <div class="content">
    <AppHeader></AppHeader>
    <div class="main-services">
      <AppServices 
        title="PDF" 
        :services="[
          {title: 'Gerar PDF',href: '/generate-pdf'},
          {title: 'HTML para PDF',href: '/html-to-pdf'},
        ]"
      />
      <AppServices title="Imagens"
        :services="[
          {title: 'PNG para JPEG', href: '/png-to-jpeg'}
        ]"
      />
    </div>
  </div>
</template>

<script>
import SideBar from '../../components/sidebar/Sidebar.vue'
import AppHeader from '../../components/appHeader/AppHeader.vue'
import AppServices from '../../components/appServices/AppServices.vue';

export default {
  name: 'HomeView',
  components: {
    SideBar,
    AppHeader,
    AppServices
  }
}
</script>

<style>
*{
  font-family: 'Times New Roman';
  padding: 0;
  margin: 0;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.main-services{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100vh
}
</style>
