import React from "react"
import Brand from "components/Brand"
import FeatherIcon from "feather-icons-react"
import "./Header.css"

const Header = ({ onTogglePinSidebar }) => {
  return (
    <>
      <nav className="navbar navbar-expand fixed-top d-flex flex-row justify-content-between header">
        <div className=" d-flex flex-row justify-content-between align-items-center left-box">
          <div className="p-2 cursor-pointer">
            <div 
              className="d-block"
              onClick={onTogglePinSidebar}
            >
              <FeatherIcon 
                icon="menu" 
              />
            </div>
          </div>
          <div className="p-2">
            <Brand />
          </div>
        </div>
        <div className="p-2">john doe</div>
      </nav>
    </>
  )
}

export default Header
