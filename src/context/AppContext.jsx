import React, { createContext, useContext, useState, useMemo } from 'react'
import { PRODUCTS } from '@/data/products'
import { INITIAL_ORDERS } from '@/data/orders'
import { INITIAL_NOTIFICATIONS } from '@/data/notifications'
import confetti from 'canvas-confetti'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  // Navigation State
  const [activeScreen, setActiveScreen] = useState('home')
  const [screenHistory, setScreenHistory] = useState(['home'])
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]) // AC-5100 default

  // Catalog State
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popularity')
  const [searchQuery, setSearchQuery] = useState('')
  const [wishlist, setWishlist] = useState(['ac-5100', 'ac-8200'])

  // Cart State (Initialized with items matching the user's reference image)
  const [cartItems, setCartItems] = useState([
    {
      ...PRODUCTS[0], // AC-5100 Backup Camera ($129.99)
      quantity: 1
    },
    {
      ...PRODUCTS[1], // AC-7200 7" LCD Monitor ($199.99)
      quantity: 1
    }
  ])

  // Checkout State
  const [checkoutStep, setCheckoutStep] = useState(1) // 1: Shipping, 2: Payment, 3: Review
  const [shippingAddress, setShippingAddress] = useState({
    name: "John Doe",
    address: "123 Business Ave, Los Angeles, CA 90001",
    phone: "+1 555 123 4567"
  })
  const [shippingMethod, setShippingMethod] = useState('standard') // 'standard' (Free) or 'express' ($15.00)
  const [paymentMethod, setPaymentMethod] = useState('card') // 'card' or 'paypal'

  // Orders State
  const [orders, setOrders] = useState(INITIAL_ORDERS)
  const [orderFilter, setOrderFilter] = useState('All')

  // Notifications State
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS)

  // Navigation helpers
  const navigateTo = (screen, product = null) => {
    if (product) {
      setSelectedProduct(product)
    }
    setScreenHistory(prev => [...prev, screen])
    setActiveScreen(screen)
  }

  const goBack = () => {
    if (screenHistory.length > 1) {
      const nextHistory = [...screenHistory]
      nextHistory.pop()
      const prevScreen = nextHistory[nextHistory.length - 1]
      setScreenHistory(nextHistory)
      setActiveScreen(prevScreen)
    } else {
      setActiveScreen('home')
    }
  }

  // Cart Calculations
  const cartCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0)
  }, [cartItems])

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }, [cartItems])

  const shippingCost = shippingMethod === 'express' ? 15.00 : 0.00
  const total = useMemo(() => {
    return subtotal + shippingCost
  }, [subtotal, shippingCost])

  // Cart Actions
  const addToCart = (product, qty = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        )
      }
      return [...prev, { ...product, quantity: qty }]
    })
  }

  const updateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      removeFromCart(id)
      return
    }
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: newQty } : item))
    )
  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  // Wishlist Action
  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    )
  }

  // Checkout & Order Placement
  const placeOrder = () => {
    if (cartItems.length === 0) return

    const newOrderNumber = `#${Math.floor(10025 + Math.random() * 900)}`
    const newOrder = {
      id: newOrderNumber.replace('#', ''),
      orderNumber: newOrderNumber,
      date: 'Today',
      status: 'Processing',
      badgeColor: 'amber',
      total: Number(total.toFixed(2)),
      items: cartItems.map(item => ({
        id: item.id,
        name: item.name,
        model: item.model,
        price: item.price,
        quantity: item.quantity,
        type: item.type
      })),
      trackingNumber: 'Processing dispatch',
      carrier: shippingMethod === 'express' ? 'UPS Express' : 'FedEx Ground'
    }

    setOrders(prev => [newOrder, ...prev])
    clearCart()

    // Add notification
    const orderNotif = {
      id: `notif-${Date.now()}`,
      type: 'order',
      title: 'Order Confirmed',
      description: `Your order ${newOrderNumber} has been received and is being processed.`,
      time: 'Just now',
      read: false,
      icon: 'bell'
    }
    setNotifications(prev => [orderNotif, ...prev])

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      })
    } catch {
      // ignore
    }

    navigateTo('orders')
  }

  // Notifications Actions
  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
  }

  const value = {
    activeScreen,
    setActiveScreen,
    navigateTo,
    goBack,
    selectedProduct,
    setSelectedProduct,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    wishlist,
    toggleWishlist,
    cartItems,
    cartCount,
    subtotal,
    shippingCost,
    total,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    checkoutStep,
    setCheckoutStep,
    shippingAddress,
    setShippingAddress,
    shippingMethod,
    setShippingMethod,
    paymentMethod,
    setPaymentMethod,
    orders,
    orderFilter,
    setOrderFilter,
    placeOrder,
    notifications,
    markAllAsRead,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
export default AppContext
