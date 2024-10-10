<script setup>
import { defineEmits, defineProps, watch, ref } from 'vue';
import { useModals } from '../../composable/useModals';

const { closeModal } = useModals()

const props = defineProps({
    todos: {
        type: Object,
        required: true
    },
    visible: {
        type: Boolean,
        required: true,
        default: false
    }
})
const emit = defineEmits('close')

const isVisible = ref(props.visible)

watch(
    () => props.visible,
    (newValue) => {
        isVisible.value = newValue;
    }
)

</script>
<template>
    <!--Modal-->
    <div 
        v-if="isVisible" 
        class="modal-overlay"
        @click="closeModal"
    >
        <div class="modal-content" @click.stop>
            <header class="modal-header">
                <h2>Editar Tarefa</h2>
                <button @click="closeModal" class="close-button">&times;</button>
            </header>
            <section class="modal-body">
                <slot></slot> 
            </section>
            <footer class="modal-footer">
                <button @click="closeModal">Fechar</button>
            </footer>
        </div>
    </div>
</template>