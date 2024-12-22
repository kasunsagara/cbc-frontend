import axios from "axios"
import { useEffect,useState } from "react"

export default function AdminProductsPage() {

    const [products, setProducts] = useState(
        [
            {
                "_id": "674cca343a649c3cfbda8c36",
                "productId": "BC202401",
                "productName": "Hydrating Face Cream",
                "altNames": [
                    "Moisturizing Cream",
                    "Daily Face Lotion"
                ],
                "images": [
                    "https://example.com/images/face-cream-front.jpg",
                    "https://example.com/images/face-cream-back.jpg"
                ],
                "price": 18.5,
                "lastPrice": 22.99,
                "stock": 75,
                "description": "A lightweight, non-greasy face cream enriched with hyaluronic acid and vitamin E, suitable for all skin types.",
                "__v": 0
            },
            {
                "_id": "67555424825281c0c80ae4c5",
                "productId": "BC202402",
                "productName": "Rose Glow Serum",
                "altNames": [
                    "Facial Serum",
                    "Brightening Serum"
                ],
                "images": [
                    "https://example.com/images/rose-glow-serum-front.jpg",
                    "https://example.com/images/rose-glow-serum-ingredients.jpg"
                ],
                "price": 30,
                "lastPrice": 35.99,
                "stock": 50,
                "description": "A luxurious serum infused with rosehip oil and natural antioxidants to brighten skin and reduce fine lines.",
                "__v": 0
            }
        ]
    )

    useEffect(() => {
        axios.get("http://localhost:5000/api/products").then((res) => {
            setProducts(res.data)
        })
    }, [])

    return (
        <div>
            <h1>Admin Products Page</h1>
            {products.map((product, index) => {
                return (
                    <div key={product._id}>
                        {index}
                        {product.productName}
                    </div>
                )
            })}       
        </div>
    )
}

