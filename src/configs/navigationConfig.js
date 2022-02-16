import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "Dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/admin"
  },
  {
    id: "payment",
    title: "Payment",
    type: "item",
    icon: <Icon.Book size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/Payment"
  },
  {
    id: "paymentMethod",
    title: "paymentMethod",
    type: "item",
    icon: <Icon.Key size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/PaymentMethod"
  },
  {
    id: "settings",
    title: "Settings",
    type: "item",
    icon: <Icon.Settings size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/Settings"
  }
]

export default navigationConfig
