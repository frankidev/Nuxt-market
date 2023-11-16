<template>
    <div>                
        <div class="grid grid-cols-4 gap-5">
            <div v-for="(p, index) in products" :key={index} >
                <product-card :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    const {data: products} = await useFetch('https://fakestoreapi.com/products/');

    useHead({
        title: 'Nuxt Market | Merch',
        meta: [
            { name: 'description', content: 'Nuxt Market merch'}
        ]
    })
</script>
