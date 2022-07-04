import { VisibilityOffOutlined } from '@mui/icons-material'
import React, { FC } from 'react'


export const QuickTools:FC = () => {
    const handleToolHide = () => {
		console.log('clicked "Hide Tools"')
		const box = document.getElementById('quick-tools')
        box!.style.left = '200%'
		box!.style.height = '0px'
		box!.style.padding = '0px'
		// box!.style.opacity = '0'
		box!.style.marginTop = '0px'
		box!.style.marginBottom = '-1rem'
		// box!.style.overflow = 'hidden'
		// const hideHide = box!.children[box!.children.length - 1] as HTMLElement
		// const hideBox =	box!.children[box!.children.length - 2] as HTMLElement
		// hideHide.style.height = '0px'
		// hideHide.style.padding = '0px'
		// hideBox.style.height = '0px'
		// hideBox.style.padding = '0px'
	}

	const iconStyle = {
		height: '1rem',
		width: '1rem',
	}

    return (
        <div className="quick-tools-block" id='quick-tools'>
            <button>Sell</button>
            <button>Sell</button>
            <button>Sell</button>
            <button>Sell</button>
            <div className="quick-tools-title">Quick Tool Menu</div>
            <div className="quick-tools-hide" onClick={handleToolHide}><VisibilityOffOutlined style={iconStyle} /> Hide Tools</div>
        </div>
    )
}