<script setup>
import { ref } from 'vue';
import TaskList from './components/tasks/task-list/TaskList.vue';
import TaskForm from './components/tasks/task-form/TaskForm.vue';

const todos = ref([]);

const adicionarTarefa = (novaTarefa) => {
  todos.value.push(novaTarefa);
};
</script>

<template>
  <div class="wrapper">
    <TaskForm :todos="todos" @nova-tarefa="adicionarTarefa" /> 
    <TaskList :todos="todos" />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  gap: 50px;
}
</style>
