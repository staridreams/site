<script>
   import { theme } from '@/stores/theme';
   import Icon from '@iconify/svelte';
</script>

<button
   class="text-primary absolute top-4 right-10 h-fit w-fit text-xl transition-all duration-300 hover:text-slate-500 hover:duration-200 dark:hover:text-slate-200 md:top-auto"
   aria-label="Toggle theme"
   data-test-id="theme-toggle"
   on:click={() => theme.set($theme === 'light' ? 'dark' : 'light')}
   ><Icon
      icon="akar-icons:{$theme === 'light' ? 'moon-fill' : 'sun-fill'}"
   /></button
>
