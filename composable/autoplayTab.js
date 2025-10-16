export function useAutoplayTab(
    {
        tabSource,
        getScrollElements = () => ({ btnElement: null })
    }
){
    const featuretabs = tabSource
    const featureIndex = ref(0);
    const featureActive = ref(1);
    const speed = 2000;
    const delay = 10000;
    const featureInterval = ref(null);

    const handleFeatureLoop = () => {
        if (featureInterval.value) clearInterval(featureInterval.value)
        featureInterval.value = setInterval(() => {
            featureIndex.value = (featureIndex.value + 1) % featuretabs.value.length
            featureActive.value = featuretabs.value[featureIndex.value].id
            nextTick(()=> {
                handleFeatureScroll()
            })
        }, speed)
    }                                                                                                                                                       
    const handleFeatureShow = (featureId,event) => {
        if (featureInterval.value) clearInterval(featureInterval.value)
        featureActive.value = featureId
        featureIndex.value = featuretabs.value.findIndex(f => f.id === featureId)             
        handleFeatureScroll()
    
        setTimeout(() => {
            handleFeatureLoop()
        }, delay)
    }                                                                                                                                                                                               
    const handleFeatureScroll = () => {
        const {btnElement} = getScrollElements()
        const navElement = btnElement?.parentElement
        if (btnElement && navElement) {
            const navRect = navElement.getBoundingClientRect()
            const btnRect = btnElement.getBoundingClientRect()
            if (btnRect.left < navRect.left || btnRect.right > navRect.right) {
                const offset = btnRect.left - navRect.left
                navElement.scrollLeft += offset
            }
        }
    }
    onMounted(() => {
        featureActive.value = featuretabs.value[0].id
        handleFeatureLoop()})
    return{
        featuretabs,
        featureActive,
        featureIndex,
        handleFeatureShow,
        handleFeatureLoop
    }
}