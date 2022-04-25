import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import { bindActionCreators } from "redux"
import * as actionCreator from '../reducers/cart.action.js'
import {useDispatch} from 'react-redux' 

function Product() {
    const dispatch = useDispatch()
    const {addCart} = bindActionCreators(actionCreator , dispatch)

    const { id } = useParams()
    const [product , setProduct ] = useState()
    const [loading , setLoading] = useState(true)
    useEffect(()=>{
        const getProduct = async ()=>{
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await res.json())
            setLoading(false)
        }
        getProduct()
    },[])

    const Loading = ()=>{
        return(
            <>
                <div className="col-md-6 my-5" style={{lineHeight : 2}}>
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6 my-5">
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75}  />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{marginLeft : 6}} />
                </div>
            </>
        )
    }

    const ShowProduct = ()=>{
        return (
            <>
                <div className="col-md-6 my-5">
                    <img src={product.image} alt="product"  height='400px' width='400px'/>
                </div>
                <div className="col-md-6 my-5">
                        <h4 className="text-uppercase text-black-50">
                            {product.category}
                        </h4>
                    
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star ms-2"></i>
                    </p>
                    <p className="display-6 my-4">$ {product.price}</p>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-dark me-2 px-4 py-2" onClick={()=>addCart(product)}>Add to Cart</button>
                    <Link to='/cart' className="btn btn-dark px-3 py-2">Go to Cart</Link>
                </div>    
            </>
        )
    }
    return (
        <div className="container">
            <div className="row">
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    )
}

export default Product