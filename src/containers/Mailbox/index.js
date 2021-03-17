import React from "react"
import { 
  useSelector 
} from "react-redux"
import MailItem from "components/MailItem"
import EmptyMails from "components/EmptyMails"
import Loader from "components/Loader"
import "./Mailbox.scss"

const Mailbox = () => {
  const { folderMails, isLoading } = useSelector(state => state.mailbox.dashboard)

  const handleMailChecked = (mail) => {
    mail.checked = !mail.checked
  }

  const displayMailList = () => {
    if (folderMails) {
      if (folderMails.length > 0) {
        return folderMails.map( (mail, index) => {
          return <MailItem 
                    key={index} 
                    mail={mail}
                    onMailChecked={handleMailChecked}
                  />
                })
      }
      else {
        return <EmptyMails />
      }
    }
  }
  
  return (
    <>
      <div 
        className="w-100"
      >
        <div 
          className="w-100 mailbox__header"
        >
          <div 
            className="w-100 h-100 mailbox__header__content"
          >
             <div 
                className="w-100 h-100 d-flex justify-content-between align-items-center"
              >
                <div></div>
                <div>showing {folderMails ? folderMails.length : 0} emails</div>
              </div>
          </div>
        </div>
        <div className="mailbox__content">
          { isLoading ? <Loader /> : displayMailList() }
        </div>
      </div>
    </>
  )
}

export default Mailbox

