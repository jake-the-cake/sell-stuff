import { Add, Remove } from "@mui/icons-material"
import React, { FC } from "react"
import { pageTitle } from "../functions/common/pageSettings"

interface ItemProps {
	title: string,
	display: {
		name: string
	}
}


export const Item: FC<ItemProps> = ({title, display}) => {
	let variable = display.name
	pageTitle(title.replace("''",`'${variable}'`))

	const handleUpClick = () => {
		const quantityInput = document.getElementById('selector-quantity') as HTMLInputElement
		if (quantityInput !== null) {
			quantityInput.value = String(1 + Number(quantityInput.value))
		}
	}

	const handleDownClick = () => {
		const quantityInput = document.getElementById('selector-quantity') as HTMLInputElement
		if (quantityInput !== null && Number(quantityInput.value) > 1) {
			quantityInput.value = String(Number(quantityInput.value) - 1)
		}
	}

	return (
		<div className="item-content">
			<div className="item-full-block" id="item-info">
				<div className="item-info">
					<div className="item-tabs">
						<div className="item-tab active-item-tab">Overview</div>
						<div className="item-tab">Features</div>
					</div>
					<div className="item-blob">
						<div className="item-title">{display.name}</div>
						<div className="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet repudiandae error, corrupti eligendi pariatur eveniet! Adipisci velit non ad laboriosam aperiam autem natus atque nesciunt fugiat iste! Hic, reprehenderit!
						 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam accusamus voluptatem in eveniet tenetur facilis soluta, fugit, neque hic tempora laudantium. Sed, blanditiis corporis veritatis soluta laborum reiciendis voluptatibus aliquam.</div>
						<div className="item-price">$1</div>
					</div>
					<div className="item-blob d-none">
						<div className="item-title">{display.name}</div>
						<div className="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet repudiandae error, corrupti eligendi pariatur eveniet! Adipisci velit non ad laboriosam aperiam autem natus atque nesciunt fugiat iste! Hic, reprehenderit!</div>
						<div className="item-price"></div>
					</div>
				</div>
				<div className="item-image"><img src='https://toppng.com/uploads/preview/coming-soon-115233721348zjfnigegk.png' alt='product' /></div>
			</div>
			<div className="purchase-block">
				<div className="quantity-selector">
					<div className="selector-box" id="up">
						<Add onClick={handleUpClick} type='up' />
					</div>
					<input type='text' defaultValue={'1'} style={{width: '50px', fontSize: '1.5rem'}} className="text-center p-2" id="selector-quantity"/>
					<div className="selector-box" id="down">
						<Remove onClick={handleDownClick} type='up'  />
					</div>
				</div>
				<button>Buy Now</button>
				<button>Add To Cart</button>
			</div>
		</div>
	)
} 