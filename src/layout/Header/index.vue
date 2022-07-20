/* 澈澈 */
<template>
  <div class="header">
    <div style="width:230px;text-align:center">
      <svg-icon icon="platform-eleme"></svg-icon>
      <span style="font-size:18px;font-weight: 100;margin-left:-5px">路从今夜白</span>
    </div>
    <!-- 伸缩 -->
    <svg-icon icon="s-fold"></svg-icon>
    <!-- 刷新 -->
    <div @click="refresh">
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
            <el-dropdown-item @click="change()">修改密码</el-dropdown-item>
            <el-dropdown-item @click='logout()'>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useStore } from 'vuex'

const store = useStore()

// 退出登录
const logout = () => {
  ElMessageBox.confirm(
    '是否要退出登录',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning'
    }
  )
    .then(() => {
      store.dispatch('user/logout')
      ElMessage({
        type: 'success',
        message: '退出登录成功'
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '退出登录失败'
      })
    })
}

const change = () => {
  alert('请修改密码')
}

const refresh = () => {
  window.location.reload()
}

</script>
<style scoped lang='scss'>
.header {
  display: flex;
  height: 65px;
  align-items: center;
}

::v-deep .svg-icon {
  width: 42px;
  line-height: 65px;
  cursor: pointer;
}

.right {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.el-dropdown {
  color: #fff;
}
</style>