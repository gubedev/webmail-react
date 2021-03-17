export const FETCH_DATA = "FETCH_DATA"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR"

export const SELECT_FOLDER = "SELECT_FOLDER"

export function fetchData() {
  return {
    type: FETCH_DATA,
  }
}


export function selectFolder(folder) {
  return {
    type: SELECT_FOLDER,
    payload: folder
  }
}
