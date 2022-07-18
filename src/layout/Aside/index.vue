/* 澈澈 */
<template>
  <div>
    <el-aside width="200px">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>后台面板</span>
          </template>
          <el-menu-item index="1-1">主控台</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>商品管理</span>
          </template>
          <el-menu-item index="2-1">商品管理</el-menu-item>
          <el-menu-item index="2-2">分类管理</el-menu-item>
          <el-menu-item index="2-3">规格管理</el-menu-item>
          <el-menu-item index="2-4-1">优惠券管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>用户管理</span>
          </template>
          <el-menu-item index="4-1">会员等级</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>订单管理</span>
          </template>
          <el-menu-item index="5-1">订单管理</el-menu-item>
          <el-menu-item index="5-2">评论管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>管理员管理</span>
          </template>
          <el-menu-item index="6-1">权限管理</el-menu-item>
          <el-menu-item index="6-2">角色管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="7">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>系统设置</span>
          </template>
          <el-menu-item index="1-1">基础设置</el-menu-item>
          <el-menu-item index="1-2">交易设置</el-menu-item>
          <el-menu-item index="1-3">物流设置</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="8">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>分销模块</span>
          </template>
          <el-menu-item index="1-1">分销员管理</el-menu-item>
          <el-menu-item index="1-2">分销设置</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="9">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>其他模块</span>
          </template>
          <el-menu-item index="1-1">图库管理</el-menu-item>
          <el-menu-item index="1-2">公告管理</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
  </div>
</template>
<script setup>

</script>
<style scoped lang='scss'>
</style>