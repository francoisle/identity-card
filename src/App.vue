<template>
  <div id="app">
    <identity-card></identity-card>
  </div>
</template>

<script>
import IdentityCard from "./components/IdentityCard";

export default {
  name: "app",
  components: { IdentityCard }
};
</script>

<style>
#app {
}
</style>
