type LinkData = {
	display: string,
	isActive: boolean,
	name: string,
	target?: string,
	url: string
}[]

export const linkData:LinkData = [
	{
		display:'Return Home',
		isActive: false,
		name: 'home',
		url: '/sell-stuff'
	},
	{
		display:'View Cart',
		isActive: false,
		name: 'cart',
		url: '/sell-stuff/cart'
	},
	{
		display:'Item View',
		isActive: false,
		name: 'item',
		url: '/sell-stuff/item/a'
	},
	{
		display:'Item List',
		isActive: false,
		name: 'browse',
		url: '/sell-stuff/browse'
	},
]