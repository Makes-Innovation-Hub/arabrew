import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addUserDataField: (state, action) => {
      const { dataField, value } = action.payload;
      console.log("value", value);
      state.userData[dataField] = value;
    },
  },
});

export const { addUserDataField } = userDataSlice.actions;

export default userDataSlice.reducer;
