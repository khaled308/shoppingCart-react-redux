import {useSelector , useDispatch} from 'react-redux' 
import { bindActionCreators } from "redux"
import * as actionCreator from '../reducers/cart.action.js'

function Cart() {
    const state = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    const {addCart , removeCart} = bindActionCreators(actionCreator , dispatch)
    return (
        <div className="container py-5">
            <div className="row py-5">
                {
                    state.map(item=>{
                        return(
                            <>
                                <div className="col-md-6 mb-5">
                                    <img src={item.image} alt="product" height='200px' />
                                </div>
                                <div className="col-md-6 mb-5">
                                    <h2 className='mb-3'>{item.title}</h2>
                                    <p className='mb-3'>{`${item.count} X $${item.price} = $${item.count * item.price}`}</p>
                                    <div className="btn">
                                        <button className='btn btn-outline-dark' onClick={()=>removeCart(item)}>-</button>
                                        <button className='btn btn-outline-dark ms-3' onClick={()=>addCart(item)}>+</button>
                                    </div>
                                </div>
                            </>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart