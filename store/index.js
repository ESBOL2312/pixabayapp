export const state = () => ({
    categoryImages:null,
    bgimages: [],
    oneImage: null,
    catImages: null,
    randBack: null,
    pageRes: null,
    categories:[
        {
            text: "backgrounds",
            bgLink: "images/categoreis-bg/backgrounds-bg.png"
        }, {
            text: "fashion",
            bgLink: "images/categoreis-bg/fashion-bg.png"
        }, {
            text: "nature",
            bgLink: "images/categoreis-bg/nature-bg.png"
        }, {
            text: "science",
            bgLink: "images/categoreis-bg/sciense-bg.png"
        }, {
            text: "education",
            bgLink: "images/categoreis-bg/education-bg.png"
        }, {
            text: "feelings",
            bgLink: "images/categoreis-bg/feelings-bg.png"
        }, {
            text: "health",
            bgLink: "images/categoreis-bg/health-bg.png"
        }, {
            text: "people",
            bgLink: "images/categoreis-bg/people-bg.png"
        }, {
            text: "religion",
            bgLink: "images/categoreis-bg/religion-bg.png"
        }, {
            text: "places",
            bgLink: "images/categoreis-bg/places-bg.png"
        }, {
            text: "animals",
            bgLink: "images/categoreis-bg/animals-bg.png"
        }, {
            text: "industry",
            bgLink: "images/categoreis-bg/industry-bg.png"
        }, {
            text: "computer",
            bgLink: "images/categoreis-bg/computer-bg.png"
        }, {
            text: "food",
            bgLink: "images/categoreis-bg/food-bg.png"
        }, {
            text: "sports",
            bgLink: "images/categoreis-bg/sports-bg.png"
        }, {
            text: "transportation",
            bgLink: "images/categoreis-bg/transportation-bg.png"
        }, {
            text: "travel",
            bgLink: "images/categoreis-bg/travel-bg.png"
        }, {
            text: "buildings",
            bgLink: "images/categoreis-bg/buildings-bg.png"
        }, {
            text: "business",
            bgLink: "images/categoreis-bg/business-bg.png"
        }, {
            text: "music",
            bgLink: "images/categoreis-bg/music-bg.png"
        }
    ]
})

export const mutations = {
    ADD_BGIMAGES(state, payload) {
        state.bgimages = payload
    },
    ADD_ONEIMAGE(state, payload) {
        state.oneImage = payload
    },
    ADD_CAT(state, payload) {
        state.catImages = payload
    },
    RAND_BACK(state, payload) {
        let i = 0
        if (payload.length > 0) {
            i = Math.floor(Math.random() * Math.floor(payload.length))
        }
        state.randBack = payload[i]
    },
    PAGE_RES(state, payload) {
        state.pageRes = payload
    },
    SET_CATEGORY_IMAGES(state, payload){
        state.categoryImages = payload
    },
}

export const getters = {
    GET_EDCH(state) {
        return state.bgimages
    },
    GET_IMG_ONE(state) {
        return state.oneImage[0]
    },
    GET_CAT(state) {
        return state.catImages
    },
    GET_R_BACK(state) {
        return state.randBack
    },
    PAGE_R(state) {
        state.pageRes
    },
    GET_CATEGORIES(state) {
        return state.categories
    },
    GET_CATEGORY_IMAGES(state) {
        return state.categoryImages
    }
} 