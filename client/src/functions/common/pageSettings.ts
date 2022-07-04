interface TitleProps {
	(pageName: string): void
}

export const pageTitle:TitleProps = (pageName) => {
	document.title = `${pageName} @ Sell Stuff :: The Online Garage Sale`
}