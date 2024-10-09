<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    todoId: {
        type: Number,
        required: true
    }
});

const emit = defineEmits();

function editTask() {
    emit('edit-button', props.todoId);
}
</script>

<template>
    <button @click="editTask">Editar Tarefa</button>
</template>
