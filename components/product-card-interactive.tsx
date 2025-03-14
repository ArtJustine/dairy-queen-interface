"use client"

import { Search, Bell, Settings, FileText, ClipboardList, History, ChevronDown, Edit, Trash2 } from 'lucide-react'
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

type CartItem = {
  id: string
  name: string
  quantity: number
  size: string
  toppings: string
  image: string
}

export default function ProductCardInteractive({ name = "Unnamed Product", image = "/placeholder.svg" }) {
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState("No")
  const sizes = ["No", "Mini", "S", "M", "L"]

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    // In a real app, this would add the item to a cart
    alert(`Added ${name} (Size: ${selectedSize}, Quantity: ${quantity || 1})`)
  }

  return (
    <div className="bg-[#eaf2fa] rounded-lg p-4 flex flex-col">
      <div className="flex justify-center mb-2">
        <Image src={image || "/placeholder.svg"} alt={name} width={120} height={120} className="rounded-md" />
      </div>
      <button
        className="bg-white border border-[#c7dfff] text-[#327dc2] rounded-md py-1 text-sm font-medium mb-3 hover:bg-[#f1f5fa] transition-colors"
        onClick={handleAddToCart}
      >
        Add
      </button>

      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-medium text-[#123358]">{name}</h3>
        <div className="flex items-center">
          <button
            className="w-6 h-6 flex items-center justify-center text-[#327dc2] font-bold hover:bg-[#eaf3fb] rounded-full"
            onClick={decreaseQuantity}
          >
            −
          </button>
          <span className="w-6 text-center">{quantity}</span>
          <button
            className="w-6 h-6 flex items-center justify-center text-[#327dc2] font-bold hover:bg-[#eaf3fb] rounded-full"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
      </div>

      <div className="flex space-x-1">
        {sizes.map((size) => (
          <button
            key={size}
            className={`text-xs py-1 px-2 rounded-md ${
              selectedSize === size
                ? "bg-[#123358] text-white"
                : "bg-white text-[#123358] border border-[#c7dfff] hover:bg-[#f1f5fa]"
            }`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
      <div className="text-center text-xs text-[#777777] mt-1">Sizes</div>
    </div>
  )
}

