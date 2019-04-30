export default {
    state: {
        todos: []
    },
    mutations: {
        setTodos(state, todos){
            state.todos = todos
        },
        newTodo(state, todo){
            const record = state.todos.find(element => element.title == todo.title)
            if(!record){
                state.todos.push(todo)
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }
                
        },
        removeTodo(state, todoTitle){
            const record = state.todos.find(element => element.title == todoTitle)
            if(record){
                state.todos.splice(state.todos.indexOf(record), 1)
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }
                
        },
        updateTodo(state, todo){
            const record = state.todos.find(element => element.title == todo.title)
            if(record){
                todo.done = !todo.done
                state.todos[state.todos.indexOf(record)] = todo
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }
            
        }
    },
    actions: {
        async setTodos({ commit }){
            const todos = JSON.parse(localStorage.getItem('todos'));
            commit('setTodos', todos)
        },
        createTodo({ commit }, todo){
            commit('newTodo', todo)
        },
        updateTodo({ commit }, todo){
            commit('updateTodo', todo)
        },
        deleteTodo({ commit }, todoTitle){
            commit('removeTodo', todoTitle)
        }
    },
    getters:{
        todos(state){
            return state.todos
        }
    }
}