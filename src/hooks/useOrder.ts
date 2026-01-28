import { useState, useEffect } from "react";
import type { MenuItem, OrderItem } from "../types/index";




export default function useOrder() {

	const initialOrder = (): OrderItem[] => {
		const localStorageCart = localStorage.getItem('order')
		return localStorageCart ? JSON.parse(localStorageCart) : []
	}

	const [order, setOrder] = useState<OrderItem[]>(initialOrder)

	useEffect(() => {
		localStorage.setItem('order', JSON.stringify(order))
	}, [order])

	const addItem = (item: MenuItem) => {

		const itemExist = order.find(OrderItem => OrderItem.id === item.id)

		if (itemExist) {
			const updatedOrder = order.map(orderItem =>
				orderItem.id === item.id
					? { ...orderItem, quantity: orderItem.quantity + 1 }
					: orderItem
			)

			setOrder(updatedOrder)
		} else {
			const newItem: OrderItem = { ...item, quantity: 1 }
			setOrder([...order, newItem])
		}

	}

	const increaseQuantity = (id: number) => {
		const updatedOrder = order.map(item =>
			item.id === id
				? { ...item, quantity: item.quantity + 1 }
				: item
		)

		setOrder(updatedOrder)
	}

	const decreaseQuantity = (id: number) => {
		const updatedOrder = order.map(item =>
			item.id === id
				? { ...item, quantity: item.quantity - 1 }
				: item
		)

		const filteredOrder = updatedOrder.filter(item => item.quantity > 0)


		setOrder(filteredOrder)
	}




	return {
		addItem, order, setOrder, increaseQuantity, decreaseQuantity
	}
}