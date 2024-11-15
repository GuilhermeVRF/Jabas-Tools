<template>
    <SideBar />
    <div class="content">
        <AppHeader />
        <div class="main-generatePDF">
            <div id="createPDF">
                <AppService
                title="Criar novo PDF"
                imgSrc="create.png"
                href="/PDF/create" />
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../../components/sidebar/Sidebar.vue'
import AppHeader from '@/components/appHeader/AppHeader.vue';
import AppService from '@/components/appService/AppService.vue';

export default {
  name: 'GeneratePDF',
  components: {
    SideBar,
    AppHeader,
    AppService
  }
}
</script>

<style scoped>
.main-generatePDF{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100vh;
    margin: 50px;
}

#createPDF{
    display: flex;
    justify-content: start;
}
</style>