<script lang="ts">
   import Icon from '@iconify/svelte';

   export let icon: string;
   export let href: string | undefined;
   export let target = '_blank';
</script>

<a
   {href}
   {target}
   class="text-lg transition-all duration-300 hover:text-slate-500 hover:duration-200 md:text-xl"
>
   <Icon {icon} />
</a>
