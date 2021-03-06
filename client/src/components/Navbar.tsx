import React from "react"
import { BarProps } from "../types/NavAndSideBars"
import { PageLinks } from "./PageLinks"
import { slide } from "../functions/animations/slideMenu"

export const Navbar:React.FC<BarProps> = (props:BarProps) => {	
	return (
	<>
		<div className="navbar-container bg-danger">
			{props.logo}
			<div className="navbar-user">User</div>
			<div onClick={slide} className="navbar-sandwich">
				<div className="navbar-sandwich-outline">
					<div className="navbar-sandwich-line"></div>
					<div className="navbar-sandwich-line"></div>
					<div className="navbar-sandwich-line"></div>
				</div>
			</div>
		</div>
		<PageLinks view='top' />
	</>
	)
}