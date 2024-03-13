import { createSlice } from "@reduxjs/toolkit"
import { OFFSET_LIVE_CHAT } from "./constants"
const videoSlice =createSlice({  
    name: 'video',
    initialState: {
        selectedVideo: null
    },
    reducers: {
        addVideoDetails : (state,actions)=>{
            state.selectedVideo = actions.payload
        }
    }
})


export const { addVideoDetails } = videoSlice.actions
export default videoSlice.reducer