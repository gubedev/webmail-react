import React from "react"

const Loader = () => {
  return <div 
            className="loader d-flex justify-content-center align-items-center mt-4" 
          >
            <div className="spinner-border text-primary m-5">
              <span 
                  className="visually-hidden"
              ></span>
            </div>
        </div>
}

export default Loader
