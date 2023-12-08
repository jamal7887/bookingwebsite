<script lang="ts">
	type productData = {
		location: string;
		id: string;
		price: number;
		rating: number;
		date: string;
		image: string;
		description: string;
		tags: string[];
	};

	export let productData: productData;

	const { location, date, id, price, rating, description, image } = productData;
</script>

<a class="flex w-full flex-col gap-6" href="#">
	<div class=" flex flex-col gap-1">
		<div class="relative w-full pb-[65%]">
			<img
				src={image}
				alt=""
				class="absolute h-full w-full object-cover object-center rounded-md"
			/>
		</div>
		<h3 class="font-medium text-lg md:text-xl capitalize">
			{location}
		</h3>
		<p class="text-sm md:text-base text-secondaryGrey">{description}</p>
		<p class="text-xs text-secondaryGrey">
			{date}
		</p>
	</div>

	<h3>
		<span class="text-brandOrange">€{price} </span>/ night
	</h3>
</a>
