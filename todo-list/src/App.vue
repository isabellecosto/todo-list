<script setup>
import { reactive, onMounted } from 'vue';
import TaskList from './components/tasks/task-list/TaskList.vue';
import TaskForm from './components/tasks/task-form/TaskForm.vue';
import { useLocalStorage } from './composable/local-storage/use-localstorage';

const { setItemLocalStorage, getItemLocalStorage } = useLocalStorage();

let todos = reactive({ data: [] });
let nextId = 1

const adicionarTarefa = (novaTarefa) => {
  novaTarefa.id = nextId++
  todos.data.unshift(novaTarefa);
  setItemLocalStorage('newtask', JSON.stringify(todos.data));
}

const deletarTarefa = (id) => {
  const index = todos.data.findIndex(task => task.id === id);
  if (index !== -1) {
    todos.data.splice(index, 1);
    setItemLocalStorage('newtask', JSON.stringify(todos.data))
  }
};

const editarTarefa = (id) => {
  return console.log(`botão funcionou! Tarefa ID: ${id}`)
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
    <TaskList :todos="todos" @delete-task="deletarTarefa" @edit-tasks="editarTarefa"/>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  gap: 50px;
}
</style>
