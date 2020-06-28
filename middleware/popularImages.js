export default async function ({ store, $axios, params}) {
    let baseUrl = 'https://pixabay.com/api/?key=17082951-0ff6f4b26aa2551e3f20b88e5&popular=true';
   
    let  data  = await $axios.$get(
        baseUrl
    ).then(response=>response.hits)
    store.commit('ADD_CAT', data)
}