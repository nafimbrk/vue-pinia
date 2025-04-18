import { defineStore } from "pinia"
import { ref } from "vue"

export const useNilaiStore = defineStore('nilai', () => {
    const nilai = ref([
        {id: 1, nama: "eko", nilai: 80},
        {id: 2, nama: "putri", nilai: 100}
    ])

    const formData = ref({
        id: -1,
        nama: "",
        nilai: 0
    }) 

    function resetForm() {
        formData.value = {
            id: -1,
            nama: "",
            nilai: 0
        }
    }

    return {
        nilai,
        formData,
        resetForm
    }
})
