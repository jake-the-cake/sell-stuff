interface TitleProps {
	pageName: string,
}

export const pageTitle = (pageName: string) => {
	document.title = `${pageName} @ Sell Stuff :: The Online Garage Sale`
}