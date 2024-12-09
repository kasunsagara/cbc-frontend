import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'
import UserData from './components/userData'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <ProductCard name="Laptop" src="https://picsum.photos/id/237/200/300" price="$99.99"></ProductCard>

    <ProductCard name="Iphone" src="https://picsum.photos/id/237/200/300" price="$499"></ProductCard>

    <ProductCard name="Samsung Galaxy" src="https://picsum.photos/id/237/200/300" price="$399"></ProductCard>

    <ProductCard name="Ipad" src="https://picsum.photos/id/237/200/300" price="$299"></ProductCard>

    <UserData></UserData>

    </>
  )
}

export default App
