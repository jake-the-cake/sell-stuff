interface TitleProps {
	pageName: string,
}

export const pageTitle = (pageName: string) => {
	document.title = `Sell Stuff :: The Online Garage Sale -- ${pageName}`
}