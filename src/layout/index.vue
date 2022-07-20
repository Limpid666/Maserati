/* 澈澈 */
<template>
  <div>
    <!-- 头部 -->
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <!-- 左侧 -->
      <el-aside width="250px">
        <Aside></Aside>
      </el-aside>
      <!-- 右侧部分 -->
      <el-main>
        <Main></Main>
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import Aside from './Aside/index.vue'
import Main from './Main/index.vue'
import Header from './Header/index.vue'
import { useStore } from 'vuex'
const store = useStore()
onMounted(() => {
  store.dispatch('user/getUserInfo')
})
</script>

<style scoped lang='scss'>
.el-header {
  background-color: #4338ca;
  color: #fff;
  height: 65px;
  font-size: 19px;
  padding-left: 20px;
  line-height: 65px;
}
</style>