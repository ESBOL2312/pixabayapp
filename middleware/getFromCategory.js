export default async function ({ store, $axios , params}) {
    let  data  = await $axios.$get(
        `https://pixabay.com/api/?key=17082951-0ff6f4b26aa2551e3f20b88e5&category=${params.category}`
    ).then(response=>response.hits)
    store.commit('SET_CATEGORY_IMAGES', data)
}