let menuOpen: boolean = false

export const slide = ():void => {
	const slidingElement:HTMLElement | null = document.getElementById('links-top')
	menuOpen = !menuOpen
	switch (menuOpen) {
		case true:
			slidingElement!.style.top = '60px'
			break
		case false:
			slidingElement!.style.top = '-100%'
			break
		default:
			console.log('Oops, big time error!\n@ slideMenu.ts : did not get a true or false response')
			break
		}
}