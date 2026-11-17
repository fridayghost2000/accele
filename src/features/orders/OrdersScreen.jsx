import React, { useState } from 'react'
import { 
  ChevronLeft, 
  Search, 
  ArrowRight,
  PackageCheck
} from 'lucide-react'
import { BottomNav } from '@/components/common/BottomNav'
import { ProductGraphic } from '@/components/common/ProductGraphic'
import { useApp } from '@/context/AppContext'

export function OrdersScreen() {
  const { 
    goBack, 
    orders, 
    orderFilter, 
    setOrderFilter 
  } = useApp()

  const [selectedOrderDetails, setSelectedOrderDetails] = useState(null)

  const filterTabs = ['All', 'Processing', 'Shipped', 'Delivered']

  const filteredOrders = orders.filter((o) => {
    if (orderFilter === 'All') return true
    return o.status.toLowerCase() === orderFilter.toLowerCase()
  })

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200'
      case 'Shipped':
        return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'Processing':
        return 'bg-amber-50 text-amber-700 border-amber-200'
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200'
    }
  }

  return (
    <div className="h-full flex flex-col bg-[#F8F9FA] text-slate-800 select-none relative">
      {/* Top Header */}
      <div className="bg-white border-b border-slate-100 shrink-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
          <button 
            onClick={goBack} 
            className="p-1 -ml-1 text-slate-700 hover:text-slate-900 rounded-lg active:scale-95 cursor-pointer"
            aria-label="Back"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2]" />
          </button>

          <h1 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
            My Orders
          </h1>

          <button 
            className="p-1 -mr-1 text-slate-700 hover:text-slate-900 rounded-lg active:scale-95 cursor-pointer"
            aria-label="Search Orders"
          >
            <Search className="w-5 h-5 stroke-[2]" />
          </button>
        </div>
      </div>

      {/* Filter Tabs Row */}
      <div className="bg-white border-b border-slate-100 shrink-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = orderFilter === tab
            return (
              <button
                key={tab}
                onClick={() => setOrderFilter(tab)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all shrink-0 active:scale-95 cursor-pointer ${
                  isActive
                    ? 'bg-[#D92228] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab}
              </button>
            )
          })}
        </div>
      </div>

      {/* Orders List */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 no-scrollbar">
        <div className="max-w-4xl mx-auto">
          {filteredOrders.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center">
              <PackageCheck className="w-12 h-12 text-slate-300 mb-2" />
              <p className="text-xs text-slate-400">No orders in this status</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 shadow-2xs space-y-3"
                >
                  {/* Order Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xs sm:text-sm font-black text-slate-900">
                        {order.orderNumber}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                        {order.date}
                      </p>
                    </div>

                    <span
                      className={`text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full border ${getStatusBadge(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>

                  {/* Order Item Thumbnails and View Details */}
                  <div className="flex items-center justify-between pt-1">
                    {/* Thumbnails */}
                    <div className="flex items-center gap-2">
                      {order.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="w-11 sm:w-12 h-11 sm:h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-0.5"
                        >
                          <ProductGraphic type={item.type} image={item.image} className="w-full h-full object-contain" />
                        </div>
                      ))}
                    </div>

                    {/* View Details Link */}
                    <button
                      onClick={() => setSelectedOrderDetails(order)}
                      className="text-[11px] sm:text-xs font-bold text-[#D92228] hover:text-red-700 flex items-center gap-1 active:scale-95 cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Details Modal if clicked */}
      {selectedOrderDetails && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-2xl p-5 space-y-3 animate-in fade-in duration-200 shadow-2xl">
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="text-sm font-bold text-slate-900">
                Order {selectedOrderDetails.orderNumber} Details
              </h3>
              <button 
                onClick={() => setSelectedOrderDetails(null)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                Close
              </button>
            </div>
            <div className="text-xs sm:text-sm space-y-1.5 text-slate-600">
              <p><span className="font-semibold text-slate-800">Status:</span> {selectedOrderDetails.status}</p>
              <p><span className="font-semibold text-slate-800">Carrier:</span> {selectedOrderDetails.carrier}</p>
              <p><span className="font-semibold text-slate-800">Tracking:</span> {selectedOrderDetails.trackingNumber}</p>
              <p><span className="font-semibold text-slate-800">Total:</span> ${selectedOrderDetails.total.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}

      <BottomNav activeScreen="orders" />
    </div>
  )
}
export default OrdersScreen
