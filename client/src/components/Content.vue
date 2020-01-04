<template>
  <el-container>
    <router-view :key="$route.fullPath"></router-view>
  </el-container>
</template>


<script>
export default {
  name: "Content",
  data() {
    return {};
  }
};
</script>


<style scoped>
#Content {
  margin: 0;
}
</style>
