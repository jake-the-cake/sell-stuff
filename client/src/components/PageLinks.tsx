import React from "react"
import { Link } from "react-router-dom"
import { linkData } from "../data/links"
import { slide } from "../functions/animations/slideMenu"

interface PageLinkProps {
	view: string,
	animation?: ()=>void | undefined,
}

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