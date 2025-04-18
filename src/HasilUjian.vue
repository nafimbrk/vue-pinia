<script setup>
import { useNilaiStore } from './stores/nilai';

const nilaiStore = useNilaiStore()

function onClickEdit(index) {
  nilaiStore.formData.id = nilaiStore.nilai[index].id
  nilaiStore.formData.nama = nilaiStore.nilai[index].nama
  nilaiStore.formData.nilai = nilaiStore.nilai[index].nilai
}


</script>
<template>
  <div>
    <table class="" border="1">
      <thead>
        <tr>
          <th>no</th>
          <th>nama</th>
          <th>nilai</th>
          <th>aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(nilai, index) in nilaiStore.nilai">
            <td>{{ index+1 }}</td>
            <td>{{ nilai.nama }}</td>
            <td>{{ nilai.nilai }}</td>
            <td>
              <button @click="onClickEdit(index)">edit</button>
            </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
