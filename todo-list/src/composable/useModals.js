import { ref } from 'vue';

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = (emit) => {
  showModal.value = false;
  if (typeof emit === 'function') emit('close');
};

const saveChanges = (emit) => {
  if (typeof emit === 'function') emit('saveChanges');
  closeModal(emit); 
};

export function useModals() {
  return {
    showModal,
    openModal,
    closeModal,
    saveChanges,
  };
}
