import React, { useState } from 'react'
import { 
  ChevronLeft, 
  CreditCard,
  CheckCircle2,
  Edit2
} from 'lucide-react'
import { StatusBar } from '@/components/ui/StatusBar'
import { useApp } from '@/context/AppContext'

export function CheckoutScreen() {
  const { 
    goBack, 
    shippingAddress, 
    setShippingAddress,
    shippingMethod, 
    setShippingMethod, 
    paymentMethod, 
    setPaymentMethod,
    placeOrder,
    total 
  } = useApp()

  const [isEditingAddress, setIsEditingAddress] = useState(false)

  return (
    <div className="h-full flex flex-col bg-white text-slate-800 select-none relative">
      <StatusBar />

      {/* Top Header */}
      <div className="border-b border-slate-100 shrink-0">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
          <button 
            onClick={goBack} 
            className="p-1 -ml-1 text-slate-700 hover:text-slate-900 rounded-lg active:scale-95 cursor-pointer"
            aria-label="Back"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2]" />
          </button>

          <h1 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
            Checkout
          </h1>

          <div className="w-6"></div> {/* Spacer */}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 no-scrollbar">
        <div className="max-w-2xl mx-auto space-y-5">
        {/* 3-Step Stepper Progress Bar */}
        <div className="px-6 py-1">
          <div className="flex items-center justify-between relative">
            {/* Step 1: Shipping */}
            <div className="flex flex-col items-center z-10">
              <div className="w-5 h-5 rounded-full bg-[#D92228] text-white text-[10px] font-bold flex items-center justify-center ring-4 ring-red-100">
                1
              </div>
              <span className="text-[10px] font-bold text-[#D92228] mt-1">
                Shipping
              </span>
            </div>

            {/* Connecting line 1 */}
            <div className="flex-1 h-[2px] bg-slate-200 -mt-3.5 mx-1"></div>

            {/* Step 2: Payment */}
            <div className="flex flex-col items-center z-10">
              <div className="w-5 h-5 rounded-full border border-slate-300 bg-white text-slate-400 text-[10px] font-semibold flex items-center justify-center">
                2
              </div>
              <span className="text-[10px] font-medium text-slate-400 mt-1">
                Payment
              </span>
            </div>

            {/* Connecting line 2 */}
            <div className="flex-1 h-[2px] bg-slate-200 -mt-3.5 mx-1"></div>

            {/* Step 3: Review */}
            <div className="flex flex-col items-center z-10">
              <div className="w-5 h-5 rounded-full border border-slate-300 bg-white text-slate-400 text-[10px] font-semibold flex items-center justify-center">
                3
              </div>
              <span className="text-[10px] font-medium text-slate-400 mt-1">
                Review
              </span>
            </div>
          </div>
        </div>

        {/* Shipping Address Section */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="text-xs font-bold text-slate-900 tracking-tight">
              Shipping Address
            </h3>
            <button
              onClick={() => setIsEditingAddress(!isEditingAddress)}
              className="text-[11px] font-bold text-[#D92228] hover:text-red-700 active:scale-95"
            >
              {isEditingAddress ? "Done" : "Edit"}
            </button>
          </div>

          <div className="p-3 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-0.5 text-xs">
            {isEditingAddress ? (
              <div className="space-y-2">
                <input
                  type="text"
                  value={shippingAddress.name}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, name: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded px-2 py-1 text-xs"
                />
                <input
                  type="text"
                  value={shippingAddress.address}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded px-2 py-1 text-xs"
                />
                <input
                  type="text"
                  value={shippingAddress.phone}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded px-2 py-1 text-xs"
                />
              </div>
            ) : (
              <>
                <p className="font-bold text-slate-900">{shippingAddress.name}</p>
                <p className="text-slate-600 text-[11px]">{shippingAddress.address}</p>
                <p className="text-slate-500 text-[11px] pt-0.5">{shippingAddress.phone}</p>
              </>
            )}
          </div>
        </div>

        {/* Shipping Method Section */}
        <div>
          <h3 className="text-xs font-bold text-slate-900 tracking-tight mb-2">
            Shipping Method
          </h3>

          <div className="space-y-2">
            {/* Standard Shipping */}
            <label
              onClick={() => setShippingMethod('standard')}
              className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                shippingMethod === 'standard'
                  ? 'border-[#D92228] bg-red-50/20'
                  : 'border-slate-200 bg-white hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  shippingMethod === 'standard' ? 'border-[#D92228]' : 'border-slate-300'
                }`}>
                  {shippingMethod === 'standard' && (
                    <div className="w-2 h-2 rounded-full bg-[#D92228]"></div>
                  )}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Standard Shipping</p>
                  <p className="text-[10px] text-slate-400 font-medium">3-5 business days</p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-600">Free</span>
            </label>

            {/* Express Shipping */}
            <label
              onClick={() => setShippingMethod('express')}
              className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                shippingMethod === 'express'
                  ? 'border-[#D92228] bg-red-50/20'
                  : 'border-slate-200 bg-white hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  shippingMethod === 'express' ? 'border-[#D92228]' : 'border-slate-300'
                }`}>
                  {shippingMethod === 'express' && (
                    <div className="w-2 h-2 rounded-full bg-[#D92228]"></div>
                  )}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Express Shipping</p>
                  <p className="text-[10px] text-slate-400 font-medium">1-2 business days</p>
                </div>
              </div>
              <span className="text-xs font-bold text-slate-800">$15.00</span>
            </label>
          </div>
        </div>

        {/* Payment Method Section */}
        <div>
          <h3 className="text-xs font-bold text-slate-900 tracking-tight mb-2">
            Payment Method
          </h3>

          <div className="space-y-2">
            {/* Credit / Debit Card */}
            <label
              onClick={() => setPaymentMethod('card')}
              className={`p-3 rounded-2xl border flex items-center gap-2.5 cursor-pointer transition-all ${
                paymentMethod === 'card'
                  ? 'border-[#D92228] bg-red-50/20'
                  : 'border-slate-200 bg-white hover:bg-slate-50'
              }`}
            >
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                paymentMethod === 'card' ? 'border-[#D92228]' : 'border-slate-300'
              }`}>
                {paymentMethod === 'card' && (
                  <div className="w-2 h-2 rounded-full bg-[#D92228]"></div>
                )}
              </div>
              <CreditCard className="w-4 h-4 text-slate-700" />
              <span className="text-xs font-bold text-slate-900">
                Credit / Debit Card
              </span>
            </label>

            {/* PayPal */}
            <label
              onClick={() => setPaymentMethod('paypal')}
              className={`p-3 rounded-2xl border flex items-center gap-2.5 cursor-pointer transition-all ${
                paymentMethod === 'paypal'
                  ? 'border-[#D92228] bg-red-50/20'
                  : 'border-slate-200 bg-white hover:bg-slate-50'
              }`}
            >
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                paymentMethod === 'paypal' ? 'border-[#D92228]' : 'border-slate-300'
              }`}>
                {paymentMethod === 'paypal' && (
                  <div className="w-2 h-2 rounded-full bg-[#D92228]"></div>
                )}
              </div>
              <span className="text-xs font-black italic tracking-tighter text-[#003087]">
                Pay<span className="text-[#0079C1]">Pal</span>
              </span>
            </label>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="pt-2 pb-4">
          <button
            onClick={placeOrder}
            className="w-full bg-[#D92228] hover:bg-red-700 text-white font-bold py-3.5 rounded-2xl text-xs sm:text-sm tracking-wide shadow-md shadow-red-900/20 active:scale-[0.98] transition-all cursor-pointer"
          >
            Place Order • ${total.toFixed(2)}
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}
export default CheckoutScreen
