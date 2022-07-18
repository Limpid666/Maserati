/* 澈澈 */
<template>
  <div class="header">
    <div style="width:18%">
      <svg-icon icon="platform-eleme"></svg-icon>
      <span style="margin-left:5px">积云编程</span>
    </div>
    <div class="header_center">
      <div class="left">
        <svg-icon icon="s-fold"></svg-icon>
        <svg-icon icon="refresh"></svg-icon>
      </div>
      <div class="right">
        <svg-icon icon="full-screen"></svg-icon>
        <img src="" alt="" style="margin-left:30px">
        <el-dropdown>
          <span class="el-dropdown-link">
            admin
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>
<style scoped lang='scss'>
.header {
  display: flex;
  height: 70px;
}

.header_center {
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;

  .right {
    display: flex;
    align-items: center;

    .el-dropdown-link {
      color: #fff;
    }
  }

}
::v-deep .svg-icon{
  margin-left: 20px;
}
</style>