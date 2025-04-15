<script setup>
import { ref } from 'vue';
import { useNilaiStore } from './stores/nilai';

const nilaiStore = useNilaiStore() 

// const formData = ref({
//   nama: "",
//   nilai: 0,
// });

function onSubmitForm() {
  // console.log(formData.value);

  if (nilaiStore.formData.id === -1) {
    nilaiStore.nilai.push({...nilaiStore.formData})
  } else {
    let index = nilaiStore.nilai.map(item => item.id).indexOf(nilaiStore.formData.id)
    if (index != -1) {
      nilaiStore.nilai[index] = {...nilaiStore.formData}
    }
  }
  nilaiStore.formData = {
    id: -1,
    nama: "",
    nilai: 0
  }
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
