import  React from 'react';
import ProductTable from '../verde/product-table.comp';
import SearchBar from '../azul/search-bar.comp';

import './filterable-product-table.style.css';

const FilterableProductTable = (props) => {
    return (
        
        <div className="filterable-product-table-container">
            <h3><b>PELÍCULAS</b></h3>
            <SearchBar/>            
            <ProductTable listaPeliculas={props.listaPeliculas}/> 

            
            <b>By Giovanni Franco</b>
        </div>
    );
    
}

export default FilterableProductTable;