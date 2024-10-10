<script setup>
import { useModals } from '../../composable/useModals';
import { defineEmits } from 'vue';

const { showModal, openModal, closeModal, saveChanges } = useModals()
const emit = defineEmits(['saveChanges', 'close'])

const handleCloseModal = () => {
  closeModal(emit);
};

const handleSaveChanges = () => {
  saveChanges(emit);
};
</script>

<template>
<div>
    <button type="button" class="btn btn-danger" @click="openModal">
      Deletar
    </button>

    <div v-if="showModal" class="modal" tabindex="-1" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="handleCloseModal">Close</button>
            <button type="button" class="btn btn-primary" @click="handleSaveChanges">Save changes</button>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5); 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;
}
</style>
