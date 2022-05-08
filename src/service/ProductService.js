export class ProductService {
    getProducts() {
        return fetch('data/products.json').then(res => {
            console.log(res)
            return res.json();
        }).then(d => d.data);
    }
}