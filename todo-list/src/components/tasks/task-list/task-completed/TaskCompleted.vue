<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  todos: {
    type: Array,
    required: true
  }
});

const tarefasCompletadas = computed(() => {
  return props.todos.filter(todo => todo.completed);
});
</script>

<template>
  <div class="complete">
    <h1>Tarefas Concluídas:</h1>
    <div
      v-for="todo in tarefasCompletadas"
      :key="todo.id" 
    >
      <span style="text-decoration: line-through;">{{ todo.title }}</span>
    </div>
  </div>
</template>

<style scoped>
</style>
