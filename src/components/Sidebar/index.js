import React from "react"
import FeatherIcon from "feather-icons-react"
import { 
  INBOX_FOLDER_INDEX,
  SEND_FOLDER_INDEX,
  DRAFT_FOLDER_INDEX,
  TRASH_FOLDER_INDEX
} from "config"
import "./Sidebar.scss"


const Sidebar = ( { onFolderSelect, selectedFolder } ) => {
 
  const displayMenuItem = (folderIndex, selectedFolder, icon, text) => {
  const menuItemClass = (folderIndex === selectedFolder) ? "menu__item menu__item--active": "menu__item"
    
  return <li 
          className={`${menuItemClass} cursor-pointer`}
          onClick={ () => onFolderSelect(folderIndex) }
        >
          <div 
            className="menu__item__link"
          >
            <FeatherIcon 
              icon={icon} 
            />
            <span 
              className="menu__item__link__text"
            >
              {text}
            </span>
          </div>
        </li>
  }
 
  return (
    <>
      <div 
        className="sidebar min-vh-100"
      >
        <div 
          className="d-flex justify-content-center w-100 pt-4"
        >
          <button 
            type="button" 
            className="compose-btn btn btn-primary border-0"
          >
            <div 
              className="d-flex w-100 justify-content-center align-items-center"
            >
              <FeatherIcon 
                icon="plus" 
              />
              <span className="compose-btn__label pl-2">COMPOSE</span>
            </div>
          </button>
        </div>
        <div 
          className="d-flex justify-content-center w-100"
        >
          <ul 
            className="menu w-100 text-dark p-0"
          >
            {displayMenuItem(INBOX_FOLDER_INDEX, selectedFolder, "inbox", "Inbox")}
            {displayMenuItem(SEND_FOLDER_INDEX, selectedFolder, "send", "Send")}
            {displayMenuItem(DRAFT_FOLDER_INDEX, selectedFolder, "clipboard", "Draft")}
            {displayMenuItem(TRASH_FOLDER_INDEX, selectedFolder, "trash", "Trash")}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
