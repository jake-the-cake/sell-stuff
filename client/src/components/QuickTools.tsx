import { VisibilityOffOutlined } from '@mui/icons-material'
import React, { FC } from 'react'


export const QuickTools:FC = () => {
    const handleToolHide = () => {
		console.log('clicked "Hide Tools"')
		const box = document.getElementById('quick-tools')
		box!.style.marginLeft = '200%'
        setTimeout(()=>{box!.style.display = 'none'},300)
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