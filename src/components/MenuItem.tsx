import type { MenuItem } from "../types";

type MenuItemProps = { item: MenuItem }

export function MenuItem({ item }: MenuItemProps) {

	return (
		<li className="hover:text-primary flex ">
			<span>{item.name}</span>
			<span className="font-black">${item.price}</span>
		</li>
	)

}