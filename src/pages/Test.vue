<template>
  <div>{{id}}</div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      id: ''
    }
  },
  created () {
    const id = this.$route.params.id
    this.id = id
  }
}
</script>

<style>

</style>
