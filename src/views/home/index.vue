<template>
  <div class="home">
    <el-container>
      <el-header>
        <MainHeader/>
      </el-header>
      <el-container>
        <el-aside>
          <NavBar/>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import NavBar from "@/components/NavBar";

export default {
  name: "home",
  components: {
    MainHeader,
    NavBar
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  .el-header {
    padding: 0;
  }
  .el-aside {
    width: 250px !important;
  }
}
</style>

