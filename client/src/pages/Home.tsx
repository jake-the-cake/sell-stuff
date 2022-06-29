import React, { FC } from "react"
import { pageTitle } from "../functions/common/pageSettings"

interface HomeProps {
	title: string,
}

export const Home: FC<HomeProps> = ({title}) => {
	pageTitle(title)

	return (
		<div className="home-content">
			<div className="quick-tools-block">
				<button>Sell</button>
				<button>Sell</button>
				<button>Sell</button>
				<button>Sell</button>
				<div className="quick-tools-title">Quick Tool Menu</div>
			</div>
			<div className="category-block">Category Tiles</div>
			<div className="featured-items-block">Featured Items</div>
		</div>
	)
}