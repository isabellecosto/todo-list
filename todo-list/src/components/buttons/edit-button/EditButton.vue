<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import EditModal from '../../modals/EditModal.vue';
import { useModals } from '../../../composable/useModals';
import { useTodos } from '../../../composable/useTodos';

const {newTitle} = useTodos()

const props = defineProps({
    todoId: {
        type: Number,
        required: true
    }
});
const emit = defineEmits();
const { showModal, closeModal } = useModals()

function editTask() {
    emit('edit-button', props.todoId);
    showModal.value = true
}
</script>

<template>
    <button @click="editTask" class="btn btn-success">Editar Tarefa</button>
    <EditModal 
      v-if="showModal"
      :todos="todos"
      :visible="showModal"
      @close="closeModal"
    >
      <input type="text" v-model="newTitle">
    </EditModal>
</template>
