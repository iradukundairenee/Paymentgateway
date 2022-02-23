
const navigationConfig = [
  {
    id: "Dashboard",
    title: "Dashboard",
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/Dashboard"
  },
  {
    id: "reseller",
    title: "Resellers",
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/Reseller",
  } ,
  {
    id: "paymentMethod",
    title: "paymentMethod",
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/PaymentMethod"
  },
  {
    id: "wallet",
    title: "Wallet",
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/Wallet"
  },
  {
    id: "settings",
    title: "Settings",
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/Settings"
  }
]

export default navigationConfig
