import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: {},
        token: '',
        cartId: [],
        cart: [],
        changeState: 0,
    },
    reducers: {
        setData:(state, action) => {
            state.data = action.payload.user
            state.token = action.payload.token
            localStorage.setItem('token','Bearer ' + action.payload.token)
            state.cartId = action.payload.user.userCart.map(item => item?._id)
            state.cart = action.payload.user.userCart
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        setCartId: (state, action) => {
            state.cartId = action.payload
        },
        setChangeState: state => {
            state.changeState += 1
        },
        setCart: state => {
            state.cart = []
        },
        setCartCountUpdate: (state, action) => {
            state.cart.map(product => {
                if (action.payload.id === product._id) {
                    if (action.payload.operator === '+') {
                        product.quantity += 1
                    } else {
                        if (product.quantity < 2) {
                            return
                        }
                        product.quantity -= 1
                    }
                }            
            })
        }
    },
})
  
export const { setData, setToken, setCartId, setChangeState, setCart, setCartCountUpdate } = userSlice.actions

export default userSlice.reducer
