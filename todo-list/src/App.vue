<script setup>
import TaskList from './components/tasks/task-list/TaskList.vue';
import TaskForm from './components/tasks/task-form/TaskForm.vue';
import { useTodos } from './composable/useTodos';
import { onMounted } from 'vue';
import EditModal from './components/modals/EditModal.vue';
import DeleteModal from './components/modals/DeleteModal.vue';

const {todos, adicionarTarefa, deletarTarefa, editarTarefa, initData} = useTodos()

onMounted(() => {
  initData();
});
</script>

<template>
  <div class="wrapper">
    <TaskForm :todos="todos" @nova-tarefa="adicionarTarefa" /> 
    <TaskList :todos="todos" @delete-task="deletarTarefa" @edit-tasks="editarTarefa"/>
    <EditModal />
    <DeleteModal />
  </div>
</template>

<style scoped>
.main {
  display: flex;
  gap: 50px;
}
</style>
