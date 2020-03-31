import React from 'react';
import classes from './productSection.module.css';

const ProductSection = (props) => {
    console.log(props.data);
    const colorOptions = props.data.colorOptions.map((item, pos) => {
        const classArr = [classes.ProductImage];
        if(pos === props.previewImagePos){
            classArr.push(classes.SelectedProductImage)
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imgUrl} alt={item.styleName} onClick={() => props.onColorOptionClick(pos)}></img>
        )
    })

    const featureItem = props.data.featureItem.map((item, pos) => {
        const itemClsArr = [classes.FeatureItem];
        if(pos === 0){
            itemClsArr.push(classes.SelectedFeatureItem)
        }
        return(
        <button key={pos} className={itemClsArr.join(' ')} >{item.itemName}</button>
        )
    })

    return(
        <div className={classes.productdata}>
            <h1 className={classes.ProductTitle}>{props.data.title}</h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>

            <h3 className={classes.SectionHeading}> Select Color </h3>
            <div>
                {colorOptions}
                {/* <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://images-na.ssl-images-amazon.com/images/I/71vZrq1ITXL._SY450_.jpg" alt="Coral Pink"></img>
                <img className={classes.ProductImage} src="https://images-na.ssl-images-amazon.com/images/I/71s98DkN0FL._SY450_.jpg" alt="Meteorite Black"></img>
                <img className={classes.ProductImage} src="https://images-na.ssl-images-amazon.com/images/I/716nA1qBEcL._SY450_.jpg" alt="Olive Green"></img>             */}
            </div>

            <h3 className={classes.SectionHeading}> Features </h3>
            <div>
                {featureItem}
                {/* <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')} >Time</button>
                <button className={classes.FeatureItem} >Heart Rate</button>
                <button className={classes.FeatureItem} >Sleep Data</button>
                <button className={classes.FeatureItem} >SpO2 Monitor</button> */}
            </div>

            <button className={classes.primaryButton} > Buy Now</button>
        </div>
    )
}

export default ProductSection;