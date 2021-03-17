import { Link } from "react-router-dom"
import React from "react"
import { APP_NAME } from "config"
import "./Brand.css"

const Brand = () => {
  return (
    <div className="d-flex align-items-center brand">
      <Link to="/" className="app-name mr-2">
        {APP_NAME}
      </Link>
    </div>
  )
}

export default Brand
