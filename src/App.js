import React,{ Component } from 'react';
import classes from './App.module.css';
import ProductPreview from './productPreview/productPreview';
import ProductSection from './productSection/productSection';
import TopBar from './topBar/topBar';
import Productdata from './productData';

class App extends React.Component { 
  constructor(props) {
    super(props);
  }
  state = {
    productdata: Productdata,
    productPreviewImage: 'https://images-na.ssl-images-amazon.com/images/I/71vZrq1ITXL._SY450_.jpg',
    previewImagePos: 0,
    testApiResponse: ""
  }

  callApi(){
    fetch("http://localhost:9000/testApi").then(res => res.text().then(res => this.setState({testApiResponse: res})))
  }

  componentWillMount() {
    this.callApi();
  }

  onColorOptionClick = (pos) => {
    const updatedImage = this.state.productdata.colorOptions[pos].imgUrl;
    this.setState({productPreviewImage : updatedImage});
    this.setState({previewImagePos : pos});
  }

  render() {
    return (
      <div className="App">
        <TopBar/>
  
        <div className={classes.MainController}>
          <div className={classes.ProductPreview} >
            <ProductPreview data={this.state.productPreviewImage} />
          </div>
          <div className={classes.ProductData}>
            {this.state.testApiResponse}
            <ProductSection data={this.state.productdata} onColorOptionClick={this.onColorOptionClick} previewImagePos={this.state.previewImagePos}/>
          </div>
        </div>
  
      </div>
    );
  }

  
}

export default App;
