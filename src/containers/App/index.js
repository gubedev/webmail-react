import React, { 
  Suspense, 
  lazy,
  useEffect 
} from "react"
import { 
  BrowserRouter, 
  Route, 
  Switch 
} from "react-router-dom"
import { 
  useDispatch, 
  useSelector 
} from "react-redux"
import { 
  selectFolder,
  fetchData,
  togglePinSidebar
} from "store/actions"
import Header from "components/Header"
import Sidebar from "components/Sidebar"
import "./App.scss"

const Mailbox = lazy(() => import("containers/Mailbox"))
const About = lazy(() => import("containers/About"))

function App() {
  
  const { isPinnedSidebar } = useSelector(state => state.layout.sidebar)
  const { selectedFolder } = useSelector(state => state.mailbox.dashboard)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])
  
  const handleFolderSelected = (folder) => {
    dispatch(selectFolder(folder))
  }

  const handleTogglePinSidebar = () => {
    dispatch(togglePinSidebar())
  }

  const wrapperClass = isPinnedSidebar === true ? "wrapper wrapper--is-pinned-sidebar": "wrapper"

  return (
    <>
      <BrowserRouter>
        <div 
          className={`${wrapperClass} container-fluid p-0`}
        >
          <Header 
            onTogglePinSidebar={handleTogglePinSidebar}
          />
          <Sidebar  
            onFolderSelect={handleFolderSelected}
            selectedFolder={selectedFolder}
          />
          <div 
            className="bg-white pages-content"
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/" exact>
                  <Mailbox />
                </Route>
                <Route path="/about" exact>
                  <About />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
