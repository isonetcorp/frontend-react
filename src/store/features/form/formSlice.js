import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formData: {
        module: "React Mod7",
        username: "",
        password: "mod7USIP-CESAR",
        email: ""
    }
};

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        updateFormData: (state, action) => {
            const { name, value } = action.payload;
            state.formData[name] = value;
        },
        resetFormData: (state) => {
            state.formData = { module: "", username: "", password: "", email: "" };
        }
    }
});

export const { updateFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;