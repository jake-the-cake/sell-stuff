import React from "react"
import { BarProps } from "../types/NavAndSideBars"

export const Navbar:React.FC<BarProps> = (props:BarProps) => {
	return (
	<div className="navbar-container bg-danger">
		{props.logo}
		<div className="navbar-user">User</div>
		<div className="navbar-sandwich">
			<div className="navbar-sandwich-outline">
				<div className="navbar-sandwich-line"></div>
				<div className="navbar-sandwich-line"></div>
				<div className="navbar-sandwich-line"></div>
			</div>
		</div>
	</div>
	)
}