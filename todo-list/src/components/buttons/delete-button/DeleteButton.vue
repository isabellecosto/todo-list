<script setup>
import { defineProps, defineEmits } from 'vue';

const emits = defineEmits()
const props = defineProps({
    todos: {
        type: Object,
        required: true
    }
});

function deleteTask() {
    emits('delete-button', props.todos.id)
}

</script>
<template>
    <button @click="deleteTask">Deletar</button>
</template>