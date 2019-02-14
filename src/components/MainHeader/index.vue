<template>
  <div class="MainHeader">
    <el-row :gutter="24">
      <el-col :span="5">
        <div>
          <h1 class="top_logo"><i class="fa fa-bar-chart"></i> Element Admine</h1>
        </div>
      </el-col>
      <el-col :span="5" :offset="14">
        <div>
          <el-button>登录</el-button>
          <el-button>注册</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MainHeader"
};
</script>

<style scoped lang="scss">
.MainHeader {
  height: 100%;
  background-color: rgb(35, 118, 212);
  color: #fff;

  .el-row{
    line-height: 60px;

    .top_logo{
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    }
  }
}
</style>