<script>
	import Hero from '@components/hero.svelte';
	import Searchbar from '@components/searchbar.svelte';
	import Filters from '@components/filterList.svelte';
	import ProductList from '@components/productList.svelte';
</script>

<div class="">
	<Hero />

	<div class="max-w-[1800px] mx-auto">
		<div class="flex flex-col md:flex-row py-10 px-6 gap-10 md:px-12 justify-between">
			<Filters />
			<Searchbar />
		</div>

		<div class="py-5 px-6 md:px-12">
			<ProductList />
		</div>
	</div>
</div>
