import type { MenuItem } from "../types";

type MenuItemProps = {
	item: MenuItem, 
	addItem: () => void
}

export function MenuItem({ item }: MenuItemProps) {

	return (
		<button className="border-2 border-teal-400 w-full p-3 flex justify-between rounded-md 
		hover:text-primary  hover:bg-teal-200
  	active:scale-95
	">
			<span>{item.name}</span>
			<span className="font-black">${item.price}</span>
		</button>
	)

}