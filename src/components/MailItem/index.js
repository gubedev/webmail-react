import React from "react"
import "./MailItem.css"

const MailItem = ({ mail, onMailChecked }) => {
  
  const { from, avatar, subject, message, time } = mail

  const renderAvatar = (avatar, name) => {
    return <>
    
        {!avatar  ?
          <div
            className="bg-blue avatar rounded-circle size-56 text-white d-flex align-items-center justify-content-center"
            style={{fontSize: 16}}
          > 
            {name.charAt(0).toUpperCase()}
          </div> :
          <img 
              className="rounded-circle" 
              alt={from.name}
              src={avatar} 
              height={"56px"}
          />
      }
    </>
  }
  
  return (
    <div 
      className="d-flex justify-content-between mail-list__item"
    >
      <div 
        className="p-4 d-flex justify-content-between align-items-center"
      >
          <div className="pr-4">
              <input 
                type="checkbox" 
                className="form-control" 
                defaultChecked={false} 
                onClick={(event) => {
                  event.stopPropagation()
                  onMailChecked(mail)
                }}
              />
          </div>
          {renderAvatar(avatar, from.name)}
      </div>
      <div className="p-4">
        <div>{from.name}</div>
        <div className="font-weight-bold">{subject}</div>
        <div className="text-truncate" 
            style={{marginBottom: "8px", width: "700px" }}>{message}</div>
      </div>
      <div className="p-4 d-flex align-items-center">{time}</div>
    </div>
  )
}

export default MailItem
