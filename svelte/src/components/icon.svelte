<script lang="ts">
   import Icon from '@iconify/svelte';

   export let icon: string;
   export let href: string | undefined;
   export let target = '_blank';
</script>

<a {href} {target} class="transition duration-200 hover:text-slate-700">
   <Icon {icon} />
</a>
