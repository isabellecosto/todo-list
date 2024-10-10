import { ref } from "vue"

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}
const closeModal = () => {
  showModal.value = false
}

export function useModals() {
    return {
        showModal,
        openModal,
        closeModal
    }
}