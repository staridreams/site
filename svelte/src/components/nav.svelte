<script lang="ts">
   import { theme } from '@/stores/theme';
   import Icon from '@iconify/svelte';

   const routes = [
      {
         name: 'projects',
         path: '/projects'
      },
      {
         name: 'blog',
         path: '/'
      },
      {
         name: 'about',
         path: '/about'
      }
   ];

   import { page } from '$app/stores';
   import ThemeToggle from './theme-toggle.svelte';
</script>

<nav class="h-16 w-full p-1 py-5 md:flex md:items-center md:justify-center">
   <h1 class="text-bold text-primary text-xl md:absolute md:left-4">Logo</h1>
   <ul class="max-h-16 md:flex md:items-center md:justify-between">
      {#each routes as route}
         <li
            class="text-primary normal:duration-200 relative cursor-pointer select-none overflow-hidden transition-all duration-300 after:absolute after:bottom-0 after:right-full after:h-[2px] after:w-full after:rounded-lg after:bg-black after:duration-300 hover:after:translate-x-full dark:after:bg-[#b8c0e0] sm:my-3 md:mx-14 md:my-0"
            class:[font-weight:550]={route.path === $page.url.pathname}
         >
            <a href={route.path}>{route.name}</a>
         </li>
      {/each}
   </ul>
   <ThemeToggle />
</nav>
