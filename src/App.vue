<template>
  <main>
    <RouterView />
  </main>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
main{
  display: flex;
  flex-direction: row;
  height: 100vh;
}
</style>