<script lang="ts">
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

<nav
   class="h-16 max-w-sm p-1 py-5 md:flex md:w-full md:max-w-none md:items-center md:justify-center"
>
   <h1
      class="text-bold text-primary font-code text-xl italic md:absolute md:left-4"
   >
      Logo
   </h1>
   <ThemeToggle />
   <ul class="max-h-16 md:flex md:items-center md:justify-between">
      {#each routes as route}
         <li
            class="text-primary normal:duration-200 relative my-3 ml-5 cursor-pointer select-none overflow-hidden italic transition-all duration-300 hover:font-semibold md:mx-14 md:my-0 md:ml-0 md:after:absolute md:after:bottom-0 md:after:right-full md:after:h-[2px] md:after:w-16 md:after:md:w-full md:after:rounded-lg md:after:bg-black md:after:duration-300 hover:md:after:translate-x-full dark:md:after:bg-[#b8c0e0]"
            class:[font-weight:550]={route.path === $page.url.pathname}
         >
            <a href={route.path}>{route.name}</a>
         </li>
      {/each}
   </ul>
</nav>
