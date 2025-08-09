import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css';
import Certificates from './components/Certificates';
import MyRecentWork from './components/MyRecentWork';


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MyRecentWork />
      <Certificates />
      <Contact />
      <Footer />
    </>
  )
}