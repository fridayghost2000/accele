import React from 'react'
import { 
  ChevronLeft, 
  Trash2, 
  Plus, 
  Minus,
  ShoppingBag
} from 'lucide-react'
import { StatusBar } from '@/components/ui/StatusBar'
import { BottomNav } from '@/components/common/BottomNav'
import { ProductGraphic } from '@/components/common/ProductGraphic'
import { useApp } from '@/context/AppContext'

export function CartScreen() {
  const { 
    goBack, 
    navigateTo, 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    subtotal,
    shippingCost,
    total 
  } = useApp()

  return (
    <div className="h-full flex flex-col bg-white text-slate-800 select-none relative">
      <StatusBar />

      {/* Top Header */}
      <div className="border-b border-slate-100 shrink-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
          <button 
            onClick={goBack} 
            className="p-1 -ml-1 text-slate-700 hover:text-slate-900 rounded-lg active:scale-95 cursor-pointer"
            aria-label="Back"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2]" />
          </button>

          <h1 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
            Cart
          </h1>

          <button 
            onClick={clearCart}
            disabled={cartItems.length === 0}
            className="p-1 -mr-1 text-slate-700 hover:text-[#D92228] disabled:opacity-30 rounded-lg active:scale-95 transition-colors cursor-pointer"
            aria-label="Clear Cart"
          >
            <Trash2 className="w-4 h-4 stroke-[2]" />
          </button>
        </div>
      </div>

      {/* Cart Content Area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 no-scrollbar">
        <div className="max-w-4xl mx-auto h-full flex flex-col justify-between">
          {cartItems.length === 0 ? (
            <div className="py-24 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-3">
                <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="text-sm font-bold text-slate-700">Your cart is empty</h3>
              <p className="text-xs text-slate-400 mt-1">Explore our automotive electronics catalog</p>
              <button
                onClick={() => navigateTo('catalog')}
                className="mt-4 px-5 py-2 bg-[#D92228] text-white text-xs font-bold rounded-xl shadow-xs cursor-pointer"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Cart Items List */}
              <div className="space-y-4 divide-y divide-slate-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-4">
                    {/* Thumbnail */}
                    <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 p-1.5">
                      <ProductGraphic type={item.type} className="w-full h-full object-contain" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        {item.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-400">
                        {item.model}
                      </p>
                      <p className="text-xs sm:text-sm font-black text-slate-900 mt-0.5">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity and Remove */}
                    <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50/50">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2.5 py-1 text-slate-600 hover:bg-slate-200 active:bg-slate-300 transition-colors cursor-pointer"
                          aria-label="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 py-1 text-xs sm:text-sm font-bold text-slate-900 min-w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2.5 py-1 text-slate-600 hover:bg-slate-200 active:bg-slate-300 transition-colors cursor-pointer"
                          aria-label="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-[#D92228] p-1.5 transition-colors cursor-pointer"
                        aria-label="Delete"
                      >
                        <Trash2 className="w-4 h-4 stroke-[1.8]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Summary Breakdown */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm max-w-md ml-auto">
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Subtotal</span>
                  <span className="text-slate-800 font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Shipping</span>
                  <span className="text-emerald-600 font-bold">
                    {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-black text-slate-900 pt-2 border-t border-slate-100">
                  <span>Total</span>
                  <span className="text-[#D92228]">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 pb-2 max-w-md ml-auto">
                <button
                  onClick={() => navigateTo('checkout')}
                  className="w-full bg-[#D92228] hover:bg-red-700 text-white font-bold py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm tracking-wide shadow-md shadow-red-900/20 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={() => navigateTo('catalog')}
                  className="w-full bg-white hover:bg-slate-50 text-slate-800 font-bold py-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm tracking-wide border border-slate-300 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <BottomNav activeScreen="cart" />
    </div>
  )
}
export default CartScreen
