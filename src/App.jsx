import { BrowserRouter } from "react-router-dom"
import  NavigationBar  from "./Components/NavigationBar"
import { AppRouter } from "./Components/AppRouter"
import Footer from "./Components/Footer"
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
