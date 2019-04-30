<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>TODO</span>
        <span class="font-weight-light">LIST</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
    <v-container>
      <TodoList />
    </v-container> 
    </v-content>
  </v-app>
</template>

<script>
import TodoList from './components/todo/TodoList'

export default {
  components: {
    TodoList
  },
  created(){
    this.$store.dispatch('setTodos')
  }
}
</script>
