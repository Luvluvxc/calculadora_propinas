import { useState, useMemo} from "react";
import type { MenuItem, OrderItem } from "../types/index";




export default function useOrder() {

	const initialOrder = () : OrderItem[] => { 
		const localStorageCart = localStorage.getItem('order')
		return localStorageCart ? JSON.parse(localStorageCart) : []
	}
	
	const [order, setOrder] = useState<OrderItem[]>(initialOrder)
	
	const addItem = (item : MenuItem) => {
		
		const itemExist = order.find(OrderItem => OrderItem.id === item.id)
		if (!itemExist) {
  		const newItem: OrderItem = { ...item, quantity: 1 }
  		setOrder([...order, newItem])
		} else{
  		setOrder([...order, { ...item, quantity: 1 }])
		}

	}
	
	const isEmpty = useMemo(() => order.length === 0, [order])

	return {
		addItem, order, setOrder, isEmpty
	}
}