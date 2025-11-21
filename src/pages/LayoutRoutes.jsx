import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from './Home'
import Products from './Products'
import Auth from './Auth'
import TradeAccount from './TradeAccount'
import Contact from './Contact'
import About from './About'

export default function LayoutRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/trade-account" element={<TradeAccount />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}
