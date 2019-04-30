<template>
        <v-flex xs12 md4 lg6 justify-center text-xs-center>
            <v-card :class="['white--text', {'green' : todo.done}, {'red' : !todo.done}, 'darken-2', 'mb-3', 'mr-3']" @click="updateTodo">
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{ todo.title }}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark @click.stop="deleteTodo">Excluir</v-btn>
              </v-card-actions>
            </v-card>
        </v-flex>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['todo'],
    methods: {
        ...mapActions(['updateTodo', 'deleteTodo']),
        ...mapActions({ updateTodoAction: 'updateTodo', deleteTodoAction: 'deleteTodo' }),
        updateTodo(){
            this.updateTodoAction(this.todo)
        },
        deleteTodo(){
            this.deleteTodoAction(this.todo.title)
        }
    }
}
</script>

<style>

</style>
