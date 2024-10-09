<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    todoId: {
        type: Number,
        required: true
    }
});

const emit = defineEmits();

function deleteTask() {
    emit('delete-button', props.todoId);
}
</script>

<template>
    <button @click="deleteTask">Deletar</button>
</template>
