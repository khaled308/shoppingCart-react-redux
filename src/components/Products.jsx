import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import Card from "./Card"


function Products() {
    const [data, setData] = useState([])
    const [loading , setLoading] = useState(true)
    const [filteredProducts , setFilter ] = useState([])

    const filterByCategory = (category = null)=>{
        if(category)setFilter(data.filter(item=>item.category === category))
        else setFilter(data)
    }
    useEffect(()=>{
        const getProducts = async()=>{
            const res = await fetch(`https://fakestoreapi.com/products`)
            let data = await res.json()
            setData(data)
            setFilter(data)
            setLoading(false)
        }
        getProducts()
    },[])

    const ShowLoading = ()=>{
        return (
            <div className="my-5 d-flex gap-3">
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </div>
        )
    }
    const ShowProducts = ()=>{
        return (
            <>
                <div className="buttons text-center mb-5 py-5">
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterByCategory ()}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterByCategory ("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterByCategory ("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterByCategory ("jewelery")}>Jewelry</button>
                    <button className="btn btn-outline-dark me-2" onClick={()=>filterByCategory ("electronics")}>Electronic</button>
                </div>
                {
                    filteredProducts.map(item=>{
                        return(
                            <div className="col-md-3 mb-3">
                                <Card 
                                    img={item.image} 
                                    title={item.title.substring(0,12) + '....'} 
                                    text={`$${item.price}`} 
                                    key={item.id}
                                    id={item.id}
                                />
                            </div>
                        )
                    })
                }
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Latest Products</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <ShowLoading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products