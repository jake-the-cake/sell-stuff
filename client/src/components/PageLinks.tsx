import React from "react"
import { Link } from "react-router-dom"

interface PageLinkProps {
	view: string,
}

type LinkData = {
	display: string,
	isActive: boolean,
	name: string,
	target?: string,
	url: string
}[]

const linkData:LinkData = [
	{
		display:'Return Home',
		isActive: false,
		name: 'home',
		url: '/'
	},
	{
		display:'Browse Items',
		isActive: false,
		name: 'browse',
		url: '/browse'
	},
]

export const PageLinks:React.FC<PageLinkProps> = (props: PageLinkProps) => {
 	return (
		<div id={`links-${props.view}`} className={`link-container link-${props.view}`}>
			{linkData.map(link => {
				return (
					<div key={link.name} className={`link-cell-${props.view}${link.isActive ? ' active-link' : ''}`} >
						<Link className='link-style' to={link.url}>{link.display}</Link>
					</div>
				)
			})}
		</div>
	)
}