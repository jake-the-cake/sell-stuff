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
						<div className="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet repudiandae error, corrupti eligendi pariatur eveniet! Adipisci velit non ad laboriosam aperiam autem natus atque nesciunt fugiat iste! Hic, reprehenderit!</div>
						<div className="item-price">$1</div>
					</div>
					<div className="item-blob d-none">
						<div className="item-title">{display.name}</div>
						<div className="item-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut amet repudiandae error, corrupti eligendi pariatur eveniet! Adipisci velit non ad laboriosam aperiam autem natus atque nesciunt fugiat iste! Hic, reprehenderit!</div>
						<div className="item-price"></div>
					</div>
				</div>
				<div className="item-image"><img src='https://toppng.com/uploads/preview/coming-soon-115233721348zjfnigegk.png' /></div>
			</div>
			<div className="purchase-block">
				<button>Buy Now</button>
				<button>Add To Cart</button>
				<Add />
				<input type='text' />
				<Remove />
			</div>
		</div>
	)
} 