<template>
  <el-row class="tac">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1" @click="goHome">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>一级导航</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">
            <router-link tag="span" to="setting">设置</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">二级导航</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-menu-item index="4" @click="goSetting">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
  </el-row>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String
  },
  data() {
    return {
      nav_list: [
        {
          name: "首页",
          icon: "fa fa-home fa-fw"
        },
        {
          name: "设置",
          icon: "fa fa-cog fa-fw"
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goHome() {
      this.$router.push("overview");
    },
    goSetting(){
      this.$router.push('setting')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  height: 100%;
  background-color: #eee;
  .top_wrap {
    h1 {
      height: 100px;
      text-align: center;
      font-size: 20px;
      font-weight: 700;
      background-color: #ddd;
      line-height: 100px;
    }
  }
  .main_list {
    padding: 50px 0;
    .el-button {
      width: 100%;
      margin: 3px 0;
    }
  }
}
</style>
