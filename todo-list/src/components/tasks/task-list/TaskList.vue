<script setup>
import { defineProps } from 'vue';
import TaskCompleted from './task-completed/TaskCompleted.vue';
import TaskUncompleted from './task-uncompleted/TaskUncompleted.vue'

const props = defineProps({
  todos: {
    type: Object,
    required: true
  }
});
</script>

<template>
<div class="main">
    <TaskUncompleted :todos="todos" @edit-task="$emit('edit-tasks', $event)" />
    <TaskCompleted :todos="todos" @delete-task="$emit('delete-task', $event)"  />
</div>
</template>
<style>

</style>
