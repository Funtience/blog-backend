import FunForm from '../'
import FunFormItem from '../../formItem'
import FunInput from '../../input'
import FunButton from '../../button'

export default {
  title: 'FunForm',
  component: FunForm,
}

export const Login = () => ({
  components: { FunForm, FunFormItem, FunInput, FunButton },
  template: `
  <fun-form class="form" ref="form" :model="user" :rules="rules">
  <fun-form-item label="用户名" prop="username">
    <fun-input v-model="user.username" placeholder="请输入用户名"></fun-input>
  </fun-form-item>
  <fun-form-item label="密码" prop="password">
    <fun-input
      type="password"
      v-model="user.password"
      placeholder="请输入密码"
    ></fun-input>
  </fun-form-item>
  <fun-form-item>
    <fun-button type="primary" @click="login">登 录</fun-button>
  </fun-form-item>
</fun-form>
  `,
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码',
          },
        ],
      },
    }
  },
  methods: {
    login() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    },
  },
})
