import { VisibilityOffOutlined } from "@mui/icons-material"
import React, { FC } from "react"
import { QuickTools } from "../components/QuickTools"
import { pageTitle } from "../functions/common/pageSettings"

interface HomeProps {
	title: string,
}

export const Home: FC<HomeProps> = ({title}) => {
	pageTitle(title)



	return (
		<div className="home-content">
			<QuickTools />
			<div className="category-block">Category Tiles</div>
			<div className="featured-items-block">Featured Items</div>
		</div>
	)
}