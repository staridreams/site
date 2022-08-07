<script>
	import '../app.css';
	import { classList } from 'svelte-body';
	import { theme } from '@/stores/theme';
</script>

<svelte:body use:classList={`${$theme}`} />
<slot />
