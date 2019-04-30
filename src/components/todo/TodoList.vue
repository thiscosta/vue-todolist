<template>
<div>
    <v-layout row wrap justify-center>
        <v-flex xs12 md8 lg6 text-xs-center>
            <p class="display-1 mb-5">Lista de tarefas</p>
            <v-text-field label="Digite o nome da tarefa" v-model="stateTodo.title" @keypress.enter="newTodo"/>
        </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
        <Todo v-for="todo in todos" :key="todo.title" :todo="todo"/>
    </v-layout>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Todo from './Todo'

export default {
    components: {
        Todo
    },
    data(){
        return{
            stateTodo: {
                title: '',
                done: false
            }
        }
    },
    computed: {
        todos(){
            return this.$store.getters.todos
        }
    },
    methods: {
        ...mapActions(['createTodo']),
        newTodo(){
            const todo = {
                title: this.stateTodo.title,
                done: false
            }
            this.stateTodo.title.length > 0 && this.createTodo(todo)
            this.stateTodo.title = ''
        }
    }
}
</script>

<style>

</style>
