<script lang="ts">
	import { get } from 'svelte/store';
	import SingleProduct from './elements/singleProduct.svelte';
	import { edittableProducts } from '../stores/products';
	import currentFilter from '../stores/filter';
	import { products } from '../stores/products';

	// $: {
	// 	console.log('yes');
	// 	if ($currentFilter == 'All') {
	// 		$edittableProducts = get(products);
	// 	} else {
	// 		$edittableProducts = get(products).filter((item) => {
	// 			return item.tags.includes($currentFilter);
	// 		});
	// 	}
	// }
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
	{#each $edittableProducts as product}
		<div>
			{#key $edittableProducts}
				<SingleProduct
					productData={{
						...product
					}}
				/>
			{/key}
		</div>
	{/each}
</div>
