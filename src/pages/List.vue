<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      {{index}} : {{item}}
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'List',
  computed: {
    ...mapGetters({
      list: 'getList'
    })
  }
}
</script>
