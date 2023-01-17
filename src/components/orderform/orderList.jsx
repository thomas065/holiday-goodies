import { Badge, Button } from "reactstrap";
import {useState, useEffect} from "react";

const goodies = [
	"Ginger Snaps",
	"Sugar Cookies",
	"Snickerdoodles",
	"Hot Pickles",
	"Sweet Pickles",
	"Cinnamon Rolls",
	"Pecan Puffs",
	"Olive Tapenade",
	"Pumpkin Bread",
	"Apple Sauce Cake",
	"English Muffins",
	"Raisin Scones",
	"Strawberry Butter",
	"Cinnamon Honey Butter",
	"Double Chocolate Cookies",
	"Chocolate Chip Cookies w/ Mocha Cream Filling",
	"No Bake Chocolate Peanut Butter Cookies",
	"Vanilla Orange Cranberry Cookies",
	"Rice Krispie Treats (Regular)",
	"Rice Krispie Treats (Chocolate)",
	"Other",
];

const OrderList = (props) => {
	const initialToastCounts = JSON.parse(localStorage.getItem("toastCounts")) || {};
	const [toastCounts, setToastCounts] = useState(initialToastCounts);

	useEffect(() => {
		localStorage.setItem("toastCounts", JSON.stringify(toastCounts));
	}, [toastCounts]);

	const listTreat = goodies.map((item) => (
		<div className="row d-inline-block w-25 me-2">
			<div className="col mb-3 text-start">
				<Button
					color="primary"
					onClick={() => {
						setToastCounts((prevToastCounts) => {
							return { ...prevToastCounts, [item]: ((prevToastCounts[item] || 0) + 1) % 3 };
						});
					}}
				>
					{item}
					<Badge color="dark">
						{toastCounts[item] !== undefined
							? toastCounts[item]
							: 0}
					</Badge>
				</Button>
			</div>
		</div>
	));
	return <div>{listTreat}</div>;
};

export default OrderList;