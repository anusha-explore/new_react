import React from 'react';
import classes from './productPreview.modue.css';

const ProductPreview = (props) => {
    const img = props.data;
    return(
        <div className={classes.ProductPreview}>
            <img src={img} alt="Product Preview" />
        </div>
    )
}

export default ProductPreview;