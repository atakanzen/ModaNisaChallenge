<template>
  <div>
    <AppHeader />
    <ToDos />
  </div>
</template>

 <script>
import ToDos from "./components/ToDos";
import AppHeader from "./components/AppHeader";

export default {
  name: "App",
  components: {
    ToDos,
    AppHeader
  }
};
</script>

<style>
</style>
