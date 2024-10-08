<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    todos: {
        type: Array,
        required: true
    }
});

const tarefasPendentes = computed(() => {
    return props.todos.filter(todo => !todo.completed);
});
</script>

<template>
<div class="pendentes">
    <h1>Tarefas Pendentes:</h1>
    <div
        v-for="(todo, index) in tarefasPendentes"
        :key="todo.id || index" 
    >
        <input type="checkbox" v-model="todo.completed">
        {{ todo.title }} 
    </div>
</div>
</template>
