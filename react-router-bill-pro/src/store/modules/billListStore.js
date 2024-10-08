import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const billStore = createSlice({
    name: 'bills',
    initialState: {
        billList: []
    },

    reducers: {
        setBillList(state, action) {
            state.billList = action.payload
        },
        addBill(state, action) {
            state.billList.push(action.payload)
        }

    }

})

// 解构出对应的方法
const { setBillList,  setDateSelect, addBill } = billStore.actions
// 获取账单列表
const getBillList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:8888/ka')        
        dispatch(setBillList(res.data))
    }
}

// 设置账单列表
const setBillListToDb = (data) => {
    return async (dispatch) => {
        const res = await axios.post('http://localhost:8888/ka', data)        
        dispatch(addBill(res.data))
    }
}

export { getBillList, setBillListToDb }

const billReducer = billStore.reducer
export default billReducer