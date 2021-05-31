<template>
  <div>
    <button @click="handleClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'FunButton',
  methods: {
    handleClick(e) {
      this.$emit('click', e)
      e.preventDefault()
    },
  },
}
</script>

<style></style>
