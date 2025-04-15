import { defineStore } from "pinia"
import { ref } from "vue"

export const useNilaiStore = defineStore('nilai', () => {
    const nilai = ref([
        // {
        //     nama: "eko",
        //     nilai: 90
        // },
        // {
        //     nama: "putri",
        //     nilai: 70
        // }

        {id: 1, nama: "eko", nilai: 80},
        {id: 2, nama: "putri", nilai: 100}
    ])
    const formData = ref({
        id: -1,
        nama: "",
        nilai: 0
    }) 
 
    return {
        nilai,
        formData
    }
})