/* 澈澈 */
<template>
  <div class="login">
    <!-- 左侧 -->
    <div class="left" style="width:65%">
      欢迎光临
    </div>
    <!-- 右侧 -->
    <div style="width:35%" class="text_center">
      <div>
        <!-- 右侧上方文字 -->
        <div class="text">
          <h2>欢迎回来</h2>
          <div style="margin-bottom:15px">
            <span class="transverseLine" style="margin-right:15px"></span>
            <span>账号密码登录</span>
            <span class="transverseLine" style="margin-left:15px"></span>
          </div>
        </div>
        <div>
          <!-- 表格 -->
          <el-form :model="loginForm" :rules="loginRules" ref="loginFromRef">
            <el-form-item>
              <el-input v-model="loginForm.username" :prefix-icon="User" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item>
              <el-input v-model="loginForm.passwprd" :prefix-icon="Unlock" placeholder="请输入密码" type="password" />
            </el-form-item>
            <el-form-item>
              <el-button @click="onSubmit">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { Unlock, User } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const loginForm = reactive({
  username: 'admin',
  passwprd: 'admin'
})

const loginRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

// 登录
const router = useRouter()
const store = useStore()
const loginFromRef = ref(null)

const onSubmit = () => {
  if (!loginFromRef.value) return
  loginFromRef.value.validate(async (valid) => {
    if (valid) {
      console.log(valid)
      const res = await store.dispatch('user/login', loginForm)
      console.log(res)
      router.push('/')
    }
  })
}
</script>
<style scoped lang='scss'>
.login {
  display: flex;

  .left {
    background-color: #6366f1;
    height: 100vh;
    color: #fff;
    text-align: center;
    line-height: 100vh;
    font-size: 35px;
    font-weight: 600;
  }
}

.text_center {
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    text-align: center;

    h2 {
      font-weight: 600;
    }

    span {
      vertical-align: middle;
      color: #ccc;
    }

    .transverseLine {
      width: 68px;
      height: 0.5px;
      display: inline-block;
      background-color: #e9ebef;
    }
  }
}

.el-button {
  background-color: #6366f1;
  width: 100%;
  color: #fff;
  border-radius: 20px;
}
</style>