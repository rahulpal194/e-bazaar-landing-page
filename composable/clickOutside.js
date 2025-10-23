export function useClickOutside() {
    const isOpen = ref(false)
    const dropdownContainer = ref(null)
  
    const handleClickOutside = (event) => {
      if (
      isOpen.value &&
      dropdownContainer.value &&
      !dropdownContainer.value.contains(event.target)
    ) {
      isOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
  })

  return { isOpen, dropdownContainer }
}