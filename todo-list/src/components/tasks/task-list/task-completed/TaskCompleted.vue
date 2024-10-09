<script setup>
import { computed, defineProps } from 'vue';
import DeleteButton from '../../../buttons/delete-button/DeleteButton.vue';

const props = defineProps({
  todos: {
    type: Object,
    required: true
  }
});

const tarefasCompletadas = computed(() => {
  return props.todos.data.filter(todo => todo.completed);
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
      <DeleteButton :todo-id="todo.id" @delete-button="$emit('delete-task', $event)" />
    </div>
  </div>
</template>
