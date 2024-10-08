<script setup>
import { ref, computed } from 'vue';

const todos = ref([]);

const newTask = ref('');

const tarefasNaoCompletadas = computed(() => {
  return todos.value.filter(todo => !todo.completed);
});

const tarefasCompletadas = computed(() => {
  return todos.value.filter(todo => todo.completed);
});

const addTarefa = () => {
  if (newTask.value.trim() !== '') {
    todos.value.push({
      title: newTask.value,
      completed: false
    });
    newTask.value = '';
  }
};
</script>

<template>
  <div class="wrapper">
    <div class="cabecalho">
      <form @submit.prevent="addTarefa">
        <input 
          type="text" 
          name="addTarefa" 
          id="addTarefa" 
          placeholder="Adicionar uma tarefa"
          v-model="newTask"
        >
        <button type="submit">Adicionar</button>
      </form>
    </div>
    <div class="main">
      <div class="pendentes">
        <h1>Tarefas Pendentes:</h1>
        <div
          v-for="todo in tarefasNaoCompletadas"
          :key="todo.id"
        >
          <input type="checkbox" v-model="todo.completed">
          {{ todo.title }}
        </div>
      </div>
      <div class="complete">
        <h1>Tarefas Concluídas:</h1>
        <div
          v-for="todo in tarefasCompletadas"
          :key="todo.id"
        >
          <span style="text-decoration: line-through;">{{ todo.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  gap: 50px;
}
</style>
