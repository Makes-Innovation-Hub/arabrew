import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  userData: {}
}

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUserDataField: (state, { payload }) => {
      const {dataField, value} = payload
      state.userData[dataField] = value
    }
  }
})

export const {addUserDataField} = userDataSlice.actions
export default userDataSlice.reducer