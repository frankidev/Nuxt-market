<template>
    <main>
        <p>{{data}}</p>
    </main>
</template>

<script setup>
const { data } = await useFetch('/api/ninja')

definePageMeta({
    layout: 'about'
})

</script>