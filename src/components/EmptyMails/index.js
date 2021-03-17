import React from "react"
import "./EmptyMails.css"

const EmptyMails = () => {
  const imgEmptyEmails = "img/icons/empty-mails.png"
  return <>
      <div 
        className="empty-mails d-flex flex-column justify-content-center align-items-center" 
      >
        <img 
            src={imgEmptyEmails} 
            alt="Empty mails" 
          
        />

        <div>
          You do not have any new emails
        </div>
        
      </div>
  </>
}

export default EmptyMails
