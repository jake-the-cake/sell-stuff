export const slide = () => {
	const el = document.getElementById('links-top')
	const pageHeight = document.body.offsetHeight
	el!.style.bottom = pageHeight + el!.offsetTop - 62 + 'px'
}