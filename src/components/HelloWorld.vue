<template>
  <div class="hello">
    <slot name="greeting">
    </slot>
    <h1>{{ message }}</h1>
    <button @click="callEmit">Reverse</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    message: {
      type: String,
      required: true
    }
  },
  methods: {
    callEmit () {
      const splitMessage = this.message.split(' ')
      const newMessage = splitMessage[1] + ' ' + splitMessage[0]
      this.$emit('add', newMessage)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
