export default async function ({ store, $axios,params, route }) {
const PATH = route.name;
console.log(PATH)
if (PATH === 'index' ) {
    let  data  = await $axios.$get(
        'https://pixabay.com/api/?key=17082951-0ff6f4b26aa2551e3f20b88e5&category=backgrounds&total=10&orientation=horizontal'
    ).then(response=>response.hits)
    store.commit('RAND_BACK', data)
    console.log(1)
} else if(PATH === 'gallery') {
    let  data  = await $axios.$get(
        `https://pixabay.com/api/?key=17082951-0ff6f4b26aa2551e3f20b88e5&id=${params.id}`
    ).then(response=>response.hits)
    store.commit('RAND_BACK', data)
    console.log(2)
}
}