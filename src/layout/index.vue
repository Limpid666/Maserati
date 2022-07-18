/* 澈澈 */
<template>
  <div>
    <!-- 头部 -->
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <!-- 左侧 -->
      <Aside></Aside>
      <!-- 右侧部分 -->
      <Main></Main>
    </el-container>
  </div>
</template>
<script setup>
import Aside from './Aside/index.vue'
import Main from './Main/index.vue'
import Header from './Header/index.vue'

</script>

<style scoped lang='scss'>
.el-header {
  background-color: #4338ca;
  color: #fff;
  height: 70px;
  font-size: 19px;
  padding-left: 20px;
  line-height: 70px;
}

.el-main {
  background-color: #f3f4f6;
  height: calc(100vh - 70px);
}

.el-menu {
  border-right: none;
}
</style>