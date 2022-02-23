import React from "react"
import * as Icon from "react-feather"

const horizontalMenuConfig = [
  {
    id: "dashboard",
    title: "dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/Dashboard",
  },
  {
    id: "reseller",
    title: "Reseller",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/Reseller",
  }  
]

export default horizontalMenuConfig
