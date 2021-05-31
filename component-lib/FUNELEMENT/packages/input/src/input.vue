<template>
  <div>
    <input :type="type" :value="value" @input="handleInput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: 'FunInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)

      const findParent = (parent) => {
        while (parent) {
          if (parent.$options.name === 'FunFormItem') {
            break
          } else {
            parent = parent.$parent
          }
        }
        return parent
      }

      const parent = findParent(this.$parent)

      if (parent) {
        parent.$emit('validate')
      }
    },
  },
  inheritAttrs: false,
}
</script>

<style></style>
