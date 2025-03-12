"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Bell, Settings, FileText, ClipboardList, History, ChevronDown, Edit, Trash2 } from "lucide-react"
import ProductCardInteractive from "@/components/product-card-interactive"

export default function InteractiveOrderInterface() {
  const [activeCategory, setActiveCategory] = useState("Blizzards")
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Oreo Blizzard", size: "No Size", toppings: "No Toppings" },
  ])

  const categories = ["All", "Blizzards", "Blended", "Cones", "Chicken Basket", "Sandwich", "Sides"]

  const products = [
    { id: 1, name: "Oreo Blizzard", image: "/products/mint-oreo-blizzard-treat.png?height=120&width=120", category: "Blizzards" },
    {
      id: 2,
      name: "Reese's Peanut Buttercup Blizzard",
      image: "/placeholder.svg?height=120&width=120",
      category: "Blizzards",
    },
    { id: 3, name: "Butterfinger Blizzard", image: "/placeholder.svg?height=120&width=120", category: "Blizzards" },
    { id: 4, name: "M&M Blizzard", image: "/placeholder.svg?height=120&width=120", category: "Blizzards" },
    { id: 5, name: "Heath Blizzard", image: "/placeholder.svg?height=120&width=120", category: "Blizzards" },
    { id: 6, name: "Snickers Blizzard", image: "/placeholder.svg?height=120&width=120", category: "Blizzards" },
    {
      id: 7,
      name: "Royal Reese's Flutternutter",
      image: "/placeholder.svg?height=120&width=120",
      category: "Blizzards",
    },
    { id: 8, name: "Royal New York Cheesecake", image: "/placeholder.svg?height=120&width=120", category: "Blizzards" },
    {
      id: 9,
      name: "Chocolate Chip Cookie Dough",
      image: "/placeholder.svg?height=120&width=120",
      category: "Blizzards",
    },
    { id: 10, name: "Mint Oreo Blizzard", image: "/placeholder.svg?height=120&width=120", category: "Blizzards" },
    { id: 11, name: "Turtle Pecan Blizzard", image: "/placeholder.svg?height=120&width=120", category: "Blizzards" },
    { id: 12, name: "Choco Brownie Extreme", image: "/placeholder.svg?height=120&width=120", category: "Blizzards" },
  ]

  const filteredProducts =
    activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory)

const removeFromCart = (id: number) => {
  setCartItems(cartItems.filter((item) => item.id !== id));
};

  return (
    <div className="flex h-screen bg-[#f9fbfc]">
      {/* Sidebar */}
      <div className="w-[210px] bg-white border-r border-[#eaf2fa] flex flex-col">
        <div className="p-6">
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="hoptix logo"
            width={120}
            height={40}
            className="text-[#123358]"
          />
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <button className="flex items-center w-full px-4 py-3 text-white bg-[#123358] rounded-md">
            <ClipboardList className="w-5 h-5 mr-3" />
            <span className="font-medium">Monitoring Form</span>
          </button>
          <button className="flex items-center w-full px-4 py-3 text-[#123358] hover:bg-[#eaf2fa] rounded-md">
            <FileText className="w-5 h-5 mr-3" />
            <span className="font-medium">Guide</span>
          </button>
          <button className="flex items-center w-full px-4 py-3 text-[#123358] hover:bg-[#eaf2fa] rounded-md">
            <History className="w-5 h-5 mr-3" />
            <span className="font-medium">History</span>
          </button>
          <button className="flex items-center w-full px-4 py-3 text-[#123358] hover:bg-[#eaf2fa] rounded-md">
            <ClipboardList className="w-5 h-5 mr-3" />
            <span className="font-medium">Audits</span>
          </button>
        </nav>
        <div className="mt-auto px-4 pb-6 space-y-2">
          <button className="flex items-center w-full px-4 py-3 text-[#123358] hover:bg-[#eaf2fa] rounded-md">
            <Bell className="w-5 h-5 mr-3" />
            <span className="font-medium">Notifications</span>
          </button>
          <button className="flex items-center w-full px-4 py-3 text-[#123358] hover:bg-[#eaf2fa] rounded-md">
            <Settings className="w-5 h-5 mr-3" />
            <span className="font-medium">Settings</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Filters */}
        <div className="bg-white p-4 border-b border-[#eaf2fa] flex items-center space-x-4">
          <div className="flex items-center border rounded-md px-3 py-2 bg-white">
            <FileText className="w-4 h-4 text-[#123358] mr-2" />
            <span className="text-sm text-[#123358] font-medium">Event Date</span>
            <ChevronDown className="w-4 h-4 text-[#123358] ml-2" />
          </div>
          <div className="flex items-center border rounded-md px-3 py-2 bg-white">
            <FileText className="w-4 h-4 text-[#123358] mr-2" />
            <span className="text-sm text-[#123358] font-medium">Start Time</span>
            <ChevronDown className="w-4 h-4 text-[#123358] ml-2" />
          </div>
          <div className="flex items-center border rounded-md px-3 py-2 bg-white">
            <FileText className="w-4 h-4 text-[#123358] mr-2" />
            <span className="text-sm text-[#123358] font-medium">End Time</span>
            <ChevronDown className="w-4 h-4 text-[#123358] ml-2" />
          </div>
          <div className="flex-1"></div>
          <div className="flex items-center border rounded-md px-3 py-2 bg-white">
            <FileText className="w-4 h-4 text-[#123358] mr-2" />
            <span className="text-sm text-[#123358] font-medium">Location</span>
            <ChevronDown className="w-4 h-4 text-[#123358] ml-2" />
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white px-4 py-3 border-b border-[#eaf2fa] flex items-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-1 text-sm font-medium ${
                activeCategory === category ? "bg-[#123358] text-white rounded-full" : "text-[#123358]"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
          <div className="flex-1"></div>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#777777]" />
            <input type="text" placeholder="Search" className="pl-9 pr-4 py-2 border rounded-md w-64 text-sm" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1 overflow-auto p-4 grid grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCardInteractive key={product.id} name={product.name} image={product.image} />
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[290px] bg-white border-l border-[#eaf2fa] flex flex-col">
        <div className="p-4 border-b border-[#eaf2fa]">
          <h2 className="font-bold text-lg text-[#123358]">Event Summary</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="mt-4 bg-[#eaf2fa] p-3 rounded-md flex items-start">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt={item.name}
                width={60}
                height={60}
                className="rounded-md"
              />
              <div className="ml-3 flex-1">
                <div className="flex justify-between">
                  <h3 className="font-medium text-sm">{item.name}</h3>
                  <div className="flex space-x-1">
                    <button className="text-[#327dc2]">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-[#327dc2]" onClick={() => removeFromCart(item.id)}>
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="text-xs text-[#777777]">{item.size}</p>
                <p className="text-xs text-[#777777]">{item.toppings}</p>
              </div>
            </div>
          ))}

          <div className="mt-6">
            <div className="flex justify-between text-sm py-1">
              <span className="text-[#777777]">Items upsold and not upsized:</span>
              <span className="font-medium">0</span>
            </div>

            <div className="mt-4">
              <h3 className="font-medium text-sm">Upsell</h3>
              <div className="flex justify-between text-xs py-1">
                <span className="text-[#777777] pl-4">Chance:</span>
                <span>0</span>
              </div>
              <div className="flex justify-between text-xs py-1">
                <span className="text-[#777777] pl-4">Offered:</span>
                <span>0</span>
              </div>
              <div className="flex justify-between text-xs py-1">
                <span className="text-[#777777] pl-4">Successful:</span>
                <span>0</span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-medium text-sm">Upsize</h3>
              <div className="flex justify-between text-xs py-1">
                <span className="text-[#777777] pl-4">Chance:</span>
                <span>0</span>
              </div>
              <div className="flex justify-between text-xs py-1">
                <span className="text-[#777777] pl-4">Offered:</span>
                <span>0</span>
              </div>
              <div className="flex justify-between text-xs py-1">
                <span className="text-[#777777] pl-4">Successful:</span>
                <span>0</span>
              </div>
            </div>

            <div className="mt-4 pt-2 border-t border-[#eaf2fa]">
              <div className="flex justify-between font-medium">
                <span>Total Ordered Items:</span>
                <span>{cartItems.length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex-1">
          <h2 className="font-bold text-lg text-[#123358]">Employee</h2>

          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">Name:</span>
              <div className="bg-[#c8c8c8] h-4 w-32 rounded"></div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm mb-2">Missed Upsell:</h3>
            <div className="bg-[#eaf2fa] h-20 rounded-md"></div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm mb-2">Missed Upsize:</h3>
            <div className="bg-[#eaf2fa] h-20 rounded-md"></div>
          </div>

          <div className="mt-auto pt-4">
            <button className="w-full py-3 bg-[#123358] text-white rounded-md font-medium hover:bg-[#0e2a49] transition-colors">
              Submit Event
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

