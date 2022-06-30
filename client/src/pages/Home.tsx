import { VisibilityOffOutlined } from "@mui/icons-material"
import React, { FC } from "react"
import { pageTitle } from "../functions/common/pageSettings"

interface HomeProps {
	title: string,
}

export const Home: FC<HomeProps> = ({title}) => {
	pageTitle(title)

	const handleToolHide = () => {
		console.log('clicked "Hide Tools"')
		const box = document.getElementById('quick-tools')
		box!.style.height = '0px'
		box!.style.padding = '0px'
		box!.style.opacity = '0'
		box!.style.overflow = 'hidden'
		box!.style.marginTop = '0px'
		box!.style.marginBottom = '-1rem'
	}

	const iconStyle = {
		height: '1rem',
		width: '1rem',
	}

	return (
		<div className="home-content">
			<div className="quick-tools-block" id='quick-tools'>
				<button>Sell</button>
				<button>Sell</button>
				<button>Sell</button>
				<button>Sell</button>
				<div className="quick-tools-title">Quick Tool Menu</div>
				<div className="quick-tools-hide" onClick={handleToolHide}><VisibilityOffOutlined style={iconStyle} /> Hide Tools</div>
			</div>
			<div className="category-block">Category Tiles</div>
			<div className="featured-items-block">Featured Items</div>
		</div>
	)
}