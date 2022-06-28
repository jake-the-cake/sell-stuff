import React from "react"
import { Link } from "react-router-dom"
import { slide } from "../functions/animations/slideMenu"

interface PageLinkProps {
	view: string,
	animation?: ()=>void | undefined,
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
		url: '/sell-stuff'
	},
	{
		display:'Browse Items',
		isActive: false,
		name: 'browse',
		url: '/sell-stuff/browse'
	},
	{
		display:'View Cart',
		isActive: false,
		name: 'cart',
		url: '/sell-stuff/cart'
	},
]

export const PageLinks:React.FC<PageLinkProps> = (props: PageLinkProps) => {
 	return (
		<div id={`links-${props.view}`} className={`link-container link-${props.view}`}>
			{linkData.map(link => {
				return (
					<Link
						key={link.name}
						className="text-decoration-none"
						onClick={props.view === 'top' ? slide : ()=>{return false}}
						to={link.url}
					>
						<div className={`link-cell-${props.view}${link.isActive ? ' active-link' : ''}`} >
							<span className="link-style">{link.display}</span>
						</div>
					</Link>
				)
			})}
		</div>
	)
}