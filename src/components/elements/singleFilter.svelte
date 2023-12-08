<script lang="ts">
	import currentFilter from '../../stores/filter';

	export let title: any;

	let color = 'bg-default text-black';
	$: if ($currentFilter == title) {
		color = 'bg-active text-white';
	} else {
		color = 'bg-default text-black';
	}

	const clickHandler = () => {
		if ($currentFilter == title) {
			$currentFilter = 'All';
			return;
		}
		$currentFilter = title;
	};
</script>

<button
	class="px-4 {color} text-sm lg:px-7 py-3 rounded-md flex-shrink-0"
	on:click={() => clickHandler()}
>
	{title}
</button>
