<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <slot></slot>
    </div>
    <p v-if="errMessage">{{ errMessage }}</p>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
export default {
  name: 'FunFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      errMessage: '',
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate() {
      if (!this.prop) return

      const value = this.form.model[this.prop]
      const rule = this.form.rules[this.prop]
      const validator = new AsyncValidator({ [this.prop]: rule })

      return validator.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.errMessage = errors[0].message
        } else {
          this.errMessage = ''
        }
      })
    },
  },
}
</script>

<style></style>
