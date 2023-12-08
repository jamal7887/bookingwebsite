<script lang="ts">
	import search from '../stores/search';

	import { edittableProducts } from '../stores/products';
	import { products } from '../stores/products';
	import { readable } from 'svelte/store';

	let filteredProducts = readable($edittableProducts);

	// $: console.log(filteredProducts);
	// $: {
	// 	if ($search == '') {
	// 		$edittableProducts = $filteredProducts;
	// 	} else {
	// 		$edittableProducts = $filteredProducts.filter((item) => {
	// 			return item.location.toLocaleLowerCase().includes($search.toLowerCase());
	// 		});
	// 	}
	// }
</script>

<form
	action=""
	class="flex items-center w-full md:w-80 flex-shrink-0 bg-default px-5 py-3 md:py-0 rounded-md"
>
	<input
		class="w-full h-full bg-none bg-default active: outline-none"
		placeholder="Find your dream house"
		bind:value={$search}
	/>
	<span class="material-icons-outlined opacity-80">search</span>
</form>
