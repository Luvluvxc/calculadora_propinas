import { useState } from "react";
import type { OrderItem } from "../types/index";




export default function useOrder() {
	
	const [order, setOrder] = useState<OrderItem[]>([])

	const addItem = () => {
		
	}

	return {
		addItem
	}
}