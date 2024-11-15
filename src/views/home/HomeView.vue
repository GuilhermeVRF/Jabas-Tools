<template>
<SideBar/>
  <div class="content">
    <AppHeader />
    <div class="main-services">
      <AppServices 
        title="PDF" 
        :services="[
          {title: 'Gerar PDF', href: '/PDF/generate'},
          {title: 'HTML para PDF', href: '/html-to-pdf'},
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

.main-services{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  margin: 50px;
}
</style>
