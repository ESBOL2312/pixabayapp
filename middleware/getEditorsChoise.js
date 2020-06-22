export default async function ({ store, $axios }) {
    let  data  = await $axios.$get(
        'https://pixabay.com/api/?key=17082951-0ff6f4b26aa2551e3f20b88e5&editors_choice=true&total=10&orientation=horizontal'
    ).then(response=>response.hits)
    store.commit('ADD_BGIMAGES', data)
}