import FunInput from '../'

export default {
  title: 'FunInput',
  component: FunInput,
}

export const Text = () => ({
  components: { FunInput },
  template: '<fun-input v-model="value"></fun-input>',
  data() {
    return {
      value: 'admin',
    }
  },
})

export const Password = () => ({
  components: { FunInput },
  template: '<fun-input type="password" v-model="value"></fun-input>',
  data() {
    return {
      value: 'admin',
    }
  },
})
