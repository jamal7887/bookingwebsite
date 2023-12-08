import { readable, writable, derived, get } from 'svelte/store';
import currentFilter from './filter';
import search from './search';

const initialProducts = [
	{
		location: 'Oosterpark, Groningen',
		price: 128,
		rating: 4.5,
		date: 'nov 3, 23',
		image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
		id: 'Hom_3452N366ZX56F',
		description: 'Modern property with great mountain view',
		tags: ['Safe Home', 'Bombaclaat', 'Nearby']
	},
	{
		location: 'Vondelpark, Amsterdam',
		price: 150,
		rating: 4.7,
		date: 'nov 4, 23',
		image:
			'https://plus.unsplash.com/premium_photo-1661964475795-f0cb85767a88?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		id: 'Hom_B4537N378ZX59F',
		description: 'Spacious accommodation with garden',
		tags: ['Unsafe home', 'Musical Home', 'Nearby']
	},
	{
		location: 'Zuiderpark, Den haag',
		price: 124,
		rating: 4.2,
		date: 'nov 5, 23',
		image:
			'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		id: 'Hom_C4578N388ZX61F',
		description: 'Cozy and comfortable with parking',
		tags: ['Safe Home', 'Bomboclaat', 'Ghengis Khan', 'Bombaclaat']
	},

	{
		location: 'Vroesenpark, Rotterdam',
		price: 213,
		rating: 4.9,
		date: 'nov 6, 23',
		image:
			'https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		id: 'Hom_D4619N399ZX72F',
		description: 'Luxurious property with pool and backyard',
		tags: ['No roof house', 'Nearby', 'Genghis Khan']
	},
	{
		location: 'Westerpark, Amsterdam',
		price: 182,
		rating: 4.8,
		date: 'nov 7, 23',
		image:
			'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		id: 'Hom_E4782N411ZX84F',
		description: 'Urban styled property, close to city center',
		tags: ['Musical home', 'Nearby', 'Ghengis Khan']
	},
	{
		location: 'Beatrixpark, Amsterdam',
		price: 145,
		rating: 4.3,
		date: 'nov 8, 23',
		image:
			'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		id: 'Hom_F4846N424ZX96F',
		description: 'Peaceful neighborhood and close to the park',
		tags: ['Musical home', 'Nearby', 'Ghengis Khan']
	},
	{
		location: 'Zaanse Schans, Zaandam',
		price: 175,
		rating: 4.5,
		date: 'nov 21, 23',
		image:
			'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGhvbWV8ZW58MHx8MHx8fDA%3D',
		id: 'Hom_S5739N580ZX252F',
		description: 'Quaint cottage with a musical touch',
		tags: ['Musical home', 'Nearby', 'Ghengis Khan']
	},
	{
		location: 'Amsterdam, Amsterdam',
		price: 200,
		rating: 4.8,
		date: 'nov 22, 23',
		image:
			'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D',
		id: 'Hom_T5803N592ZX264F',
		description: 'Rooftop retreat with panoramic city views',
		tags: ['No roof house', 'Nearby', 'Ghengis Khan']
	},
	{
		location: 'Giethoorn, Overijssel',
		price: 150,
		rating: 4.2,
		date: 'nov 23, 23',
		image:
			'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		id: 'Hom_U5867N604ZX276F',
		description: 'Charming house in the Venice of the North',
		tags: ['Musical Home', 'Unsafe home', 'Bombaclaat']
	},
	{
		location: 'Wadden zee, Harlingen',
		price: 185,
		rating: 4.7,
		date: 'nov 24, 23',
		image:
			'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		id: 'Hom_V5931N616ZX288F',
		description: 'Seaside escape with a Ghengis Khan theme',
		tags: ['Ghengis Khan', 'No roof house', 'Nearby']
	},
	{
		location: 'Kinderdijk, Alblasserdam',
		price: 210,
		rating: 4.9,
		date: 'nov 25, 23',
		image:
			'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvbWV8ZW58MHx8MHx8fDA%3D',
		id: 'Hom_W5995N628ZX300F',
		description: 'Windmill residence with bombaclaat vibes',
		tags: ['Bombaclaat', 'Musical home', 'Unsafe home']
	}
];

export const products = readable(initialProducts);

export const edittableProducts = derived([currentFilter, search], ([$currentFilter, $search]) => {
	let filteredProducts: any;

	if ($currentFilter == 'All') filteredProducts = get(products);
	else {
		filteredProducts = get(products).filter((item) => {
			return item.tags.includes($currentFilter);
		});
	}

	if ($search != '') {
		filteredProducts = filteredProducts.filter((item: any) => {
			return item.location.toLocaleLowerCase().includes($search.toLowerCase());
		});
	}

	return filteredProducts;
});
