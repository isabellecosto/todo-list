<script setup>
import { defineEmits, defineProps, ref } from 'vue';

const props = defineProps({
    todos: {
        type: Array,
        required: true
    }
});
const emit = defineEmits();

const newTask = ref('');

const addTarefa = () => {
  if (newTask.value.trim() !== '') {
    const novaTarefa = {
        id: Date.now(),
        title: newTask.value,
        completed: false
    };

    emit('nova-tarefa', novaTarefa);

    newTask.value = '';
  }
}; 
</script>

<template>
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
</template>

<style lang="scss">
</style>
