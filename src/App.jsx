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

    <ProductCard name="Laptop" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" price="$99.99" />

    <ProductCard name="Iphone" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" price="$499" />

    <ProductCard name="Samsung Galaxy" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" price="$399" />

    <ProductCard name="Ipad" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" price="$299" />

    <UserData />

    </>
  )
}

export default App
