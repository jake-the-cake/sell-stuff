import React from "react"
import { BarProps } from "../types/NavAndSideBars"

export const Sidebar:React.FC<BarProps> = (props:BarProps) => {
	return (
		<div className="sidebar-container bg-danger">
			{props.logo}
		</div>
	)
}