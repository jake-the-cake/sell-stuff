import React from "react"
import { BarProps } from "../types/NavAndSideBars"
import { PageLinks } from "./PageLinks"

export const Sidebar:React.FC<BarProps> = (props:BarProps) => {
	return (
		<div className="sidebar-container bg-danger">
			{props.logo}
			<PageLinks view='side' />
		</div>
	)
}