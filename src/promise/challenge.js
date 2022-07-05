import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fectData(urlApi) {
    return fetch(urlApi);
}

/*
fectData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .catch(error => console.log(error));
*/

fectData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products)
        return fectData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product =>{
        console.log(product.title)
        return fectData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category =>{
        console.log(category.name)
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'));