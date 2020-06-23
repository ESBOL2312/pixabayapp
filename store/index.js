export const state = () => ({
    bgimages: [],
    oneImage:null,
    catImages:null,
    randBack:null,
  })
  
export const mutations = {
    ADD_BGIMAGES (state, payload) {
        state.bgimages = payload
    },
    ADD_ONEIMAGE (state, payload) {
        state.oneImage = payload
    },
    ADD_CAT (state, payload) {
        state.catImages = payload
    },
    RAND_BACK(state, payload) {
        let i = 0
        if(payload.length>0){
            i = Math.floor(Math.random() * Math.floor(payload.length))
        }
        state.randBack = payload[i]
    },
}

export const getters = {
    GET_EDCH (state) {
        return state.bgimages
    },
    GET_IMG_ONE (state){
        return state.oneImage[0]
    },
    GET_CAT (state){
        return state.catImages
    },
    GET_R_BACK(state){
        return state.randBack
    }
} 