<script setup>
import { ref } from 'vue';
import { useNilaiStore } from './stores/nilai';

const nilaiStore = useNilaiStore() 

// const formData = ref({
//   nama: "",
//   nilai: 0,
// });

function onSubmitForm() {
  if (nilaiStore.formData.id === -1) {
    // Tambah ID baru (misalnya berdasarkan waktu atau increment manual)
    const newId = Date.now()
    nilaiStore.nilai.push({
      ...nilaiStore.formData,
      id: newId
    })
  } else {
    let index = nilaiStore.nilai.findIndex(item => item.id === nilaiStore.formData.id)
    if (index !== -1) {
      nilaiStore.nilai[index] = { ...nilaiStore.formData }
    }
  }

  nilaiStore.resetForm()
}

</script>
<template>
  <form @submit.prevent="onSubmitForm">
    <input type="text" v-model="nilaiStore.formData.nama" placeholder="masukan nama" />
    <br />
    <input type="number" v-model="nilaiStore.formData.nilai" placeholder="masukan nilai" />
    <br />
    <button type="submit">simpan</button>
  </form>
</template>
