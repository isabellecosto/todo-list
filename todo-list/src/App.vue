<script setup>
import { reactive, onMounted, ref } from 'vue';
import TaskList from './components/tasks/task-list/TaskList.vue';
import TaskForm from './components/tasks/task-form/TaskForm.vue';
import { useLocalStorage } from './composable/local-storage/use-localstorage';

const { setItemLocalStorage, getItemLocalStorage } = useLocalStorage();

let todos = reactive({ data: [] });
let nextId = 1

const adicionarTarefa = (novaTarefa) => {
  todos.data.push(novaTarefa);
  setItemLocalStorage('newtask', JSON.stringify(todos.data));
  novaTarefa.id = nextId++
}

const deletarTarefa = (id) => {
  todos.data.value = todos.data.value.filter(task => task.id !== id);
}

const initData = () => {
  const todoData = getItemLocalStorage("newtask");
  todos.data = todoData ? JSON.parse(todoData) : [];
  console.log(todos.data);

  if (todos.data.length > 0) {
    nextId = Math.max(...todos.data.map(todo => todo.id)) + 1;
  }
}

onMounted(() => {
  initData();
});
</script>

<template>
  <div class="wrapper">
    <TaskForm :todos="todos" @nova-tarefa="adicionarTarefa" /> 
    <TaskList :todos="todos" @delete-task="deletarTarefa"/>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  gap: 50px;
}
</style>
