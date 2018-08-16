<template>
  <div>
    <!-- <HelloWorld :message="fullName" @add='addTodo'>
      <template slot="greeting">
        Hello
      </template>
    </HelloWorld> -->
    <div>
      firstName :
      <input type="text" v-model="firstName"/>
    </div>
    <div>
      lastName :
      <input type="text" v-model="lastName"/>
    </div>
    <div>
      fullName : {{fullName}}
    </div>
    <button @click="goToTest">Go to test</button>
    <button @click="addTodo">add Todo</button>
    <List/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import List from '@/pages/list'
import { mapActions } from 'vuex'

export default {
  name: 'Todo',
  data () {
    return {
      firstName: '',
      lastName: '',
      todoList: []
    }
  },
  computed: {
    fullName () {
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: {
    firstName (newValue, oldValue) {
      console.log('newValue = ' + newValue)
      console.log('oldValue = ' + oldValue)
    }
  },
  methods: {
    ...mapActions({
      setList: 'setList'
    }),
    addTodo () {
      // this.todoList.push(name)
      this.setList(this.firstName)
    },
    goToTest () {
      this.$router.push({name: 'Test', params: {id: 100}})
    }
  },
  components: {
    HelloWorld,
    List
  },
  created () {
    console.log('created working')
  },
  mounted () {
    console.log('mounted working')
  }
}
</script>
<style scroped>

</style>
