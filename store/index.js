export const state = () => ({
    bgimages: [],
    oneImage:null
  })
  
export const mutations = {
    ADD_BGIMAGES (state, payload) {
        state.bgimages = payload
    },
    ADD_ONEIMAGE (state, payload) {
        state.oneImage = payload
    }
}

export const getters = {
    GET_EDCH (state) {
        return state.bgimages
    },
    GET_IMG_ONE (state){
        return state.oneImage[0]
    }
} 