import { ref, computed, onMounted, onUnmounted } from 'vue';

export default function useIsMobile() {
  const isMobile = ref(window.innerWidth <= 768);

  const handleResize = () => {
    isMobile.value = window.innerWidth <= 768;
  };

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  return {
    isMobile: computed(() => isMobile.value)
  };
}
