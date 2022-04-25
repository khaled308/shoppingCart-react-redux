export const reducer = (state = [] , {type , payload})=>{
    switch(type){
        case 'ADD' :
            const exist = state.find(product=>product.id === payload.id)
            if(exist){
                return state.map(product=> product.id === payload.id ? {...product,count: product.count+ 1} : product)
            }
            else{
                return [...state , {...payload , count : 1}]
            }

        case 'REMOVE':
            const product = state.find(product=>product.id === payload.id) 
            if(product.count === 1){
                return state.filter(item=>item.id !== product.id)
            }
            else{
                return state.map(product=>product.id === payload.id ? {...product,count : product.count - 1} : product)
            }
        default:
            return state
    }
}