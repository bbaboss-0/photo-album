
// import { BrowserRouter } from "react-router-dom"
// import AppNavigation from "./component/AppNavigation"  

// function App() {
//   return (
//     <BrowserRouter>
//       <AppNavigation />
//     </BrowserRouter>
//   )
// }

// export default App


import { BrowserRouter } from "react-router-dom"
import AppNavigation from "./component/AppNavigation"
import { AppProvider } from "./component/AppContext" // Changed from "./component/context/AppContext"

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppNavigation />
      </BrowserRouter>
    </AppProvider>
  )
}

export default App





