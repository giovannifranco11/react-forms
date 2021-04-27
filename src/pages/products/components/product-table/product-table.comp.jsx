import  React, { useState } from 'react';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';



import './product-table.style.css';

const ProductTable = (props) => {

    
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);

    const addProduct = (event) =>{
        event.preventDefault();
        console.log('category' +": " + category);
        console.log('name' +": " +name);
        console.log('price' +": " + price);
        console.log('stock' +": " + stock);
    }
    
    return (
        <div className="product-table-container">
            <div>
            {props.productsList.map((category,index)=>{
                  return (
                    <React.Fragment key={category.id}>
                        <ProductCategoryRow categoryName={category.name}/>
                        {category.products.map((product, indexProduct)=>{
                            return (
                                <ProductRow
                                    key={product.id} 
                                    product={product}
                                />
                            );
                        })}
                    </React.Fragment>
                  );
            })}
            </div>
            <div className="products-form">
            <form>
                <table>
                    <tbody>
                    <tr>
                        <td>
                        Category
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <select 
                            value={category}
                            onChange={(event)=>{
                                setCategory(event.target.value);
                            }}
                        >
                            <option value="c1">Sporting Goods</option>
                            <option value="c2">Electronics</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                value={name}
                                onChange={(event)=>{                                   
                                    setName(event.target.value);
                                }}
                            />
                        </td>
                                    
                    </tr>
                    <tr>
                        <td>Price</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="number"
                                value={price}
                                onChange={(event)=>{                                   
                                    setPrice(event.target.value);
                                }}
                            />
                        
                        </td>
                    </tr>
                    <tr>
                        <td>Stock</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="number"
                                value={stock}
                                onChange={(event)=>{                                   
                                    setStock(event.target.value);
                                }}
                            />
                        
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button 
                                onClick={addProduct}
                            >
                                Add product
                            </button>
                        </td>
                    </tr>
                        
                    </tbody>
                    
                                        
                </table>
            </form>
        </div>
            
              
        </div>
    );    
}



export default ProductTable;