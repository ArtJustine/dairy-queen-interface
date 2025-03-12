"use client"

import Image from "next/image"
import { Search, Bell, Settings, FileText, ClipboardList, History, ChevronDown, Edit, Trash2 } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function OrderInterface() {
  const [timePickerOpen, setTimePickerOpen] = useState(false)
  const [selectedHour, setSelectedHour] = useState(0)
  const [selectedMinute, setSelectedMinute] = useState(0)
  const [selectedSecond, setSelectedSecond] = useState(0)
  const [selectedTime, setSelectedTime] = useState("")
  const timePickerRef = useRef<HTMLDivElement>(null)

  const [endTimePickerOpen, setEndTimePickerOpen] = useState(false)
  const [selectedEndHour, setSelectedEndHour] = useState(0)
  const [selectedEndMinute, setSelectedEndMinute] = useState(0)
  const [selectedEndSecond, setSelectedEndSecond] = useState(0)
  const [selectedEndTime, setSelectedEndTime] = useState("")
  const endTimePickerRef = useRef<HTMLDivElement>(null)

  const applySelectedEndTime = () => {
    const formattedTime = `${selectedEndHour.toString().padStart(2, "0")}:${selectedEndMinute.toString().padStart(2, "0")}:${selectedEndSecond.toString().padStart(2, "0")}`
    setSelectedEndTime(formattedTime)
    setEndTimePickerOpen(false)
  }

  const applySelectedTime = () => {
    const formattedTime = `${selectedHour.toString().padStart(2, "0")}:${selectedMinute.toString().padStart(2, "0")}:${selectedSecond.toString().padStart(2, "0")}`
    setSelectedTime(formattedTime)
    setTimePickerOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Type assertion for event.target
      const target = event.target as Node
      
      if (timePickerRef.current && !timePickerRef.current.contains(target)) {
        setTimePickerOpen(false)
      }
      if (endTimePickerRef.current && !endTimePickerRef.current.contains(target)) {
        setEndTimePickerOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [timePickerRef, endTimePickerRef])

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
          <div className="relative">
            <div
              className="flex items-center border rounded-md px-3 py-2 bg-white cursor-pointer"
              onClick={() => setTimePickerOpen(!timePickerOpen)}
            >
              <FileText className="w-4 h-4 text-[#123358] mr-2" />
              <span className="text-sm text-[#123358] font-medium">{selectedTime ? selectedTime : "Start Time"}</span>
              <ChevronDown className="w-4 h-4 text-[#123358] ml-2" />
            </div>

            {timePickerOpen && (
              <div
                ref={timePickerRef}
                className="absolute top-full left-0 mt-1 bg-white border border-[#eaf2fa] rounded-md shadow-md z-10 p-3 w-[280px]"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium text-[#123358]">Select Time</h3>
                  <button className="text-[#777777] hover:text-[#123358]" onClick={() => setTimePickerOpen(false)}>
                    ✕
                  </button>
                </div>

                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs text-[#777777] mb-1">Hour</label>
                    <div className="border border-[#eaf2fa] rounded-md h-[120px] overflow-y-auto">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div
                          key={`hour-${i}`}
                          className={`px-3 py-2 text-sm cursor-pointer hover:bg-[#eaf2fa] ${
                            selectedHour === i ? "bg-[#eaf2fa] text-[#123358] font-medium" : ""
                          }`}
                          onClick={() => setSelectedHour(i)}
                        >
                          {i.toString().padStart(2, "0")}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1">
                    <label className="block text-xs text-[#777777] mb-1">Minute</label>
                    <div className="border border-[#eaf2fa] rounded-md h-[120px] overflow-y-auto">
                      {Array.from({ length: 60 }).map((_, i) => (
                        <div
                          key={`minute-${i}`}
                          className={`px-3 py-2 text-sm cursor-pointer hover:bg-[#eaf2fa] ${
                            selectedMinute === i ? "bg-[#eaf2fa] text-[#123358] font-medium" : ""
                          }`}
                          onClick={() => setSelectedMinute(i)}
                        >
                          {i.toString().padStart(2, "0")}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1">
                    <label className="block text-xs text-[#777777] mb-1">Second</label>
                    <div className="border border-[#eaf2fa] rounded-md h-[120px] overflow-y-auto">
                      {Array.from({ length: 60 }).map((_, i) => (
                        <div
                          key={`second-${i}`}
                          className={`px-3 py-2 text-sm cursor-pointer hover:bg-[#eaf2fa] ${
                            selectedSecond === i ? "bg-[#eaf2fa] text-[#123358] font-medium" : ""
                          }`}
                          onClick={() => setSelectedSecond(i)}
                        >
                          {i.toString().padStart(2, "0")}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex justify-end">
                  <button className="px-4 py-1 bg-[#123358] text-white rounded-md text-sm" onClick={applySelectedTime}>
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="flex items-center border rounded-md px-3 py-2 bg-white cursor-pointer"
              onClick={() => setEndTimePickerOpen(!endTimePickerOpen)}
            >
              <FileText className="w-4 h-4 text-[#123358] mr-2" />
              <span className="text-sm text-[#123358] font-medium">
                {selectedEndTime ? selectedEndTime : "End Time"}
              </span>
              <ChevronDown className="w-4 h-4 text-[#123358] ml-2" />
            </div>

            {endTimePickerOpen && (
              <div
                ref={endTimePickerRef}
                className="absolute top-full left-0 mt-1 bg-white border border-[#eaf2fa] rounded-md shadow-md z-10 p-3 w-[280px]"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium text-[#123358]">Select Time</h3>
                  <button className="text-[#777777] hover:text-[#123358]" onClick={() => setEndTimePickerOpen(false)}>
                    ✕
                  </button>
                </div>

                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-xs text-[#777777] mb-1">Hour</label>
                    <div className="border border-[#eaf2fa] rounded-md h-[120px] overflow-y-auto">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div
                          key={`end-hour-${i}`}
                          className={`px-3 py-2 text-sm cursor-pointer hover:bg-[#eaf2fa] ${
                            selectedEndHour === i ? "bg-[#eaf2fa] text-[#123358] font-medium" : ""
                          }`}
                          onClick={() => setSelectedEndHour(i)}
                        >
                          {i.toString().padStart(2, "0")}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1">
                    <label className="block text-xs text-[#777777] mb-1">Minute</label>
                    <div className="border border-[#eaf2fa] rounded-md h-[120px] overflow-y-auto">
                      {Array.from({ length: 60 }).map((_, i) => (
                        <div
                          key={`end-minute-${i}`}
                          className={`px-3 py-2 text-sm cursor-pointer hover:bg-[#eaf2fa] ${
                            selectedEndMinute === i ? "bg-[#eaf2fa] text-[#123358] font-medium" : ""
                          }`}
                          onClick={() => setSelectedEndMinute(i)}
                        >
                          {i.toString().padStart(2, "0")}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1">
                    <label className="block text-xs text-[#777777] mb-1">Second</label>
                    <div className="border border-[#eaf2fa] rounded-md h-[120px] overflow-y-auto">
                      {Array.from({ length: 60 }).map((_, i) => (
                        <div
                          key={`end-second-${i}`}
                          className={`px-3 py-2 text-sm cursor-pointer hover:bg-[#eaf2fa] ${
                            selectedEndSecond === i ? "bg-[#eaf2fa] text-[#123358] font-medium" : ""
                          }`}
                          onClick={() => setSelectedEndSecond(i)}
                        >
                          {i.toString().padStart(2, "0")}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex justify-end">
                  <button
                    className="px-4 py-1 bg-[#123358] text-white rounded-md text-sm"
                    onClick={applySelectedEndTime}
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
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
          <button className="px-4 py-1 text-[#123358] text-sm font-medium">All</button>
          <button className="px-4 py-1 bg-[#123358] text-white rounded-full text-sm font-medium">Blizzards</button>
          <button className="px-4 py-1 text-[#123358] text-sm font-medium">Blended</button>
          <button className="px-4 py-1 text-[#123358] text-sm font-medium">Cones</button>
          <button className="px-4 py-1 text-[#123358] text-sm font-medium">Chicken Basket</button>
          <button className="px-4 py-1 text-[#123358] text-sm font-medium">Sandwich</button>
          <button className="px-4 py-1 text-[#123358] text-sm font-medium">Sides</button>
          <div className="flex-1"></div>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#777777]" />
            <input type="text" placeholder="Search" className="pl-9 pr-4 py-2 border rounded-md w-64 text-sm" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1 overflow-auto p-4 grid grid-cols-4 gap-4">
          <ProductCard name="Oreo Blizzard" image="/placeholder.svg?height=120&width=120" />
          <ProductCard name="Reese's Peanut Buttercup Blizzard" image="/placeholder.svg?height=120&width=120" />
          <ProductCard name="Butterfinger Blizzard" image="/Butterfinger_Blizz (1).png?height=120&width=120" />
          <ProductCard name="M&M Blizzard" image="/placeholder.svg?height=120&width=120" />
          <ProductCard name="Heath Blizzard" image="/placeholder.svg?height=120&width=120" />
          <ProductCard name="Snickers Blizzard" image="/placeholder.svg?height=120&width=120" />
          <ProductCard name="Royal Reese's Flutternutter" image="/placeholder.svg?height=120&width=120" />
          <ProductCard name="Royal New York Cheesecake" image="/placeholder.svg?height=120&width=120" />
          <ProductCard name="Chocolate Chip Cookie Dough" image="/placeholder.svg?height=120&width=120" />
          <ProductCard name="Mint Oreo Blizzard" image="/placeholder.svg?height=120&width=120" />
          <ProductCard name="Turtle Pecan Blizzard" image="/placeholder.svg?height=120&width=120" />
          <ProductCard name="Choco Brownie Extreme" image="/choco-brownie-extreme-blizzard.png?height=120&width=120" />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[290px] bg-white border-l border-[#eaf2fa] flex flex-col">
        <div className="p-4 border-b border-[#eaf2fa]">
          <h2 className="font-bold text-lg text-[#123358]">Event Summary</h2>

          <div className="mt-4 bg-[#eaf2fa] p-3 rounded-md flex items-start">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Oreo Blizzard"
              width={60}
              height={60}
              className="rounded-md"
            />
            <div className="ml-3 flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium text-sm">Oreo Blizzard</h3>
                <div className="flex space-x-1">
                  <button className="text-[#327dc2]">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-[#327dc2]">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-xs text-[#777777]">No Size</p>
              <p className="text-xs text-[#777777]">No Toppings</p>
            </div>
          </div>

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
                <span>2</span>
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
            <button className="w-full py-3 bg-[#123358] text-white rounded-md font-medium">Submit Event</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ name = "Unnamed Product", image = "/placeholder.svg" }) { 
  return (
    <div className="bg-[#eaf2fa] rounded-lg p-4 flex flex-col">
      <div className="flex justify-center mb-2">
        <Image src={image || "/placeholder.svg"} alt={name} width={120} height={120} className="rounded-md" />
      </div>
      <button className="bg-white border border-[#c7dfff] text-[#327dc2] rounded-md py-1 text-sm font-medium mb-3">
        Add
      </button>

      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-medium text-[#123358]">{name}</h3>
        <div className="flex items-center">
          <button className="w-6 h-6 flex items-center justify-center text-[#327dc2] font-bold">−</button>
          <span className="w-6 text-center">0</span>
          <button className="w-6 h-6 flex items-center justify-center text-[#327dc2] font-bold">+</button>
        </div>
      </div>

      <div className="flex space-x-1">
        <button className="bg-[#123358] text-white text-xs py-1 px-2 rounded-md">No</button>
        <button className="bg-white text-[#123358] border border-[#c7dfff] text-xs py-1 px-2 rounded-md">Mini</button>
        <button className="bg-white text-[#123358] border border-[#c7dfff] text-xs py-1 px-2 rounded-md">S</button>
        <button className="bg-white text-[#123358] border border-[#c7dfff] text-xs py-1 px-2 rounded-md">M</button>
        <button className="bg-white text-[#123358] border border-[#c7dfff] text-xs py-1 px-2 rounded-md">L</button>
      </div>
      <div className="text-center text-xs text-[#777777] mt-1">Sizes</div>
    </div>
  )
}

