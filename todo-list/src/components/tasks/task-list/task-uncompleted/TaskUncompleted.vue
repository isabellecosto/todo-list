<script setup>
import { defineProps, computed } from 'vue';
import EditButton from '../../../buttons/edit-button/EditButton.vue';

const props = defineProps({
    todos: {
        type: Object,
        required: true
    }
});

const tarefasPendentes = computed(() => {
    return props.todos.data.filter(todo => !todo.completed);
});

</script>

<template>
<div class="pendentes">
    <h1>Tarefas Pendentes:</h1>
    <span>Quantidade de tarefas pendentes: {{ tarefasPendentes.length }}</span>
    <div
        v-for="(todo, index) in tarefasPendentes"
        :key="todo.id || index" 
    >
        <input type="checkbox" v-model="todo.completed">
        {{ todo.title }}
        <EditButton :todo-id="todo.id" @edit-button="$emit('edit-task', $event)" />
    </div>
</div>
</template>
