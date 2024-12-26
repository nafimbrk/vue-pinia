<template>
    <h1>ini halaman todolist</h1>

    <!-- {{ todoStore.name }}
    <br>
    {{ todoStore.doubleCount }} -->

    {{ todoStore.count }}
    <br>
    <button @click="todoStore.increment">Add</button>
</template>

<script>
import { useTodoStore } from '../stores/todoStore'

export default {
    setup() {
        const todoStore = useTodoStore()

        return { todoStore }
    }
}
</script>