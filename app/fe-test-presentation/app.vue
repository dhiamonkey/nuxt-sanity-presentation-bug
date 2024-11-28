<script setup lang="ts">
const query = groq`*[_type == "event"]`
const { data, refresh } = useSanityQuery(query)
watchEffect(() => console.log(data.value))
</script>

<template>
  <div>
    <h1>{{data[0].name}}</h1>
  </div>
</template>