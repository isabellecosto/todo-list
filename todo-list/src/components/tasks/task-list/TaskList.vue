<script setup>
import TaskCompleted from './task-completed/TaskCompleted.vue';
import TaskUncompleted from './task-uncompleted/TaskUncompleted.vue'

const props = defineProps({
  todos: Array
});
</script>

<template>
<div class="main">
    <TaskUncompleted :todos="todos" />
    <TaskCompleted :todos="todos" />
</div>
</template>
<style>

</style>
