import { createSlice } from "@reduxjs/toolkit"
const appSlice = createSlice({
    name : 'app',
    initialState: {
        isMenuOpen: true
    },
    reducers : {
        togglemenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false
        }
    }
})

export default appSlice.reducer;
export const { togglemenu, closeMenu } = appSlice.actions; 