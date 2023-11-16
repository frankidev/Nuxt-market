<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt Market</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                        <NuxtLink to="/about">About</NuxtLink>
                        <NuxtLink to="/products" class="btn">Products</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
    <!-- -->
    <div class="container mx-auto p-4">
        <slot />
    </div>
    <footer class="container mx-auto p-4 flex justify-betwwen border-t-2">
        <ul class="flex gap-4">
           <li>
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
                <NuxtLink to="/products">Products</NuxtLink>
            </li> 
        </ul>
    </footer>
</template>


<style scoped> 
    li a {
        margin: 20px 15px;
    }
</style>