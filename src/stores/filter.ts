import { writable } from 'svelte/store';

const currentFilter = writable('All');

export default currentFilter;
