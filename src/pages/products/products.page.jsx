import  React from 'react'; 
import FilterableProductTable from './components/filterable-product-table/filterable-produts-table.comp';

const ProductsPage = () => {

    let productsList = [
            {
                id:"c1",
                name:'Sporting goods',
                    products:[
                        {
                            id:"c1p1",
                            name:"Football",
                            price:"49.99",
                            stock:5,
                        },
                        {
                            id:"c1p2",
                            name:"Baseball",
                            price:"9.99",
                            stock:15,
                        },
                        {
                            id:"c1p3",
                            name:"Basketball",
                            price:"29.99",
                            stock:0,
                        }
                    ]
            },
            {
                id:"c2",
                name:'Electronics',
                products:[
                        {
                            id:"c2p1",
                            name:"iPod Touch",
                            price:"99.99",
                            stock:20,
                        },
                        {
                            id:"c2p2",
                            name:"iPhone 5",
                            price:"399.99",
                            stock:0,
                        },
                        {
                            id:"c2p3",
                            name:"Nexus 7",
                            price:"99.99",
                            stock:10,
                        }
                    ]
                }
        ];



    return (
        <>
        <FilterableProductTable productsList={productsList} />
        
        </>
        
    );
    
}

export default ProductsPage;