export const INITIAL_ORDERS = [
  {
    id: "10024",
    orderNumber: "#10024",
    date: "Jan 15, 2025",
    status: "Delivered",
    badgeColor: "emerald",
    total: 329.98,
    items: [
      { id: "ac-5100", name: "Backup Camera", model: "AC-5100", price: 129.99, quantity: 1, type: "camera" },
      { id: "ac-7200", name: "7\" LCD Monitor", model: "AC-7200", price: 199.99, quantity: 1, type: "monitor" }
    ],
    trackingNumber: "ACC-89230192US",
    carrier: "FedEx Ground"
  },
  {
    id: "10023",
    orderNumber: "#10023",
    date: "Jan 10, 2025",
    status: "Shipped",
    badgeColor: "blue",
    total: 329.98,
    items: [
      { id: "ac-5100", name: "Backup Camera", model: "AC-5100", price: 129.99, quantity: 1, type: "camera" },
      { id: "ac-7200", name: "7\" LCD Monitor", model: "AC-7200", price: 199.99, quantity: 1, type: "monitor" }
    ],
    trackingNumber: "ACC-78192031US",
    carrier: "UPS Express"
  },
  {
    id: "10022",
    orderNumber: "#10022",
    date: "Jan 05, 2025",
    status: "Processing",
    badgeColor: "amber",
    total: 329.98,
    items: [
      { id: "ac-5100", name: "Backup Camera", model: "AC-5100", price: 129.99, quantity: 1, type: "camera" },
      { id: "ac-7200", name: "7\" LCD Monitor", model: "AC-7200", price: 199.99, quantity: 1, type: "monitor" }
    ],
    trackingNumber: "Pending dispatch",
    carrier: "Standard Ground"
  }
]
