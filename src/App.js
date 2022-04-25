import { Provider } from 'react-redux'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Products from './components/Products'
import {store} from './reducers/store'

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter basename='/'>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/product/:id' element={<Product />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    )
}

export default App