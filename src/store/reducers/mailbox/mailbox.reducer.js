import * as Actions from "store/actions"
import { INBOX_FOLDER_INDEX } from "config"

const initialState = {
  allMail: [],
  currentMail: null,
  selectedMails:[],
  selectedFolder:0,
  folderMails:[],
  error: false,
  isLoading: false,
}

const dashboard = function (state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_DATA: {
      return {
        ...state,
        error: true,
        isLoading: true
      }
    }
    case Actions.FETCH_DATA_SUCCESS: { 
      const allMailResult = action.payload
      return {
        ...state,
        allMail: allMailResult,
        folderMails: (allMailResult) ? allMailResult.filter(mail => mail.folder === INBOX_FOLDER_INDEX) : [],
        error: false,
        isLoading: false
      }
    }
    case Actions.FETCH_DATA_ERROR: {
      return {
        ...state,
        error: true,
        isLoading: false
      }
    }
    case Actions.SELECT_FOLDER: {  
      return {
        ...state,
        selectedFolder: action.payload,
        folderMails: (state.allMail) ? state.allMail.filter(mail => mail.folder === action.payload) : [],
        error: false,
        isLoading: false
      }
    }
    default: {
      return state
    }
  }
}

export default dashboard
