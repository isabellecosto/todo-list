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
    <button type="button" class="btn btn-primary" @click="openModal">
      Editar
    </button>

    <div v-if="showModal" class="modal" tabindex="-1" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Digite a nova tarefa</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
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

</style>
