
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menus from "./components/Menus/Menus";
import Banner from "./components/Banners/Banner";
import Banner2 from "./components/Banners/Banner2";
import Banner3 from "./components/Banners/Banner3";
import Footer from "./components/Footer/Footer";
import './App.css'
// import UserForm from './components/UserFrom'

function App() {
 

  return (
    <>
    <main className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Menus />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Footer />
      </main>
    {/* <UserForm /> */}
    </>
  )
}

export default App
