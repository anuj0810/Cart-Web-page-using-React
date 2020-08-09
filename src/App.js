import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';
// import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
        products:[
            {
                price: 1100,
                title : 'Watch',
                Qty : 0,
                id:1
            },
            {
                price: 11000,
                title : 'Smart Phone',
                Qty : 0,
                id:2
            },
            {
                price: 50000,
                title : 'Laptop',
                Qty : 0,
                id:3
            },
            {
                price: 500,
                title : 'Earphone',
                Qty : 0,
                id:4
            },
        ]
    }

    // this.increaseQuantity=this.increaseQuantity.bind(this); 
}
increaseQuantity = (product) => {
    const {products}= this.state;
   const index=products.indexOf(product);
   products[index].Qty+=1;

   this.setState({
    products:products
   })
}
decreaseQuantity = (product) => {
    if(product.Qty==0){
        return;
    }
   const {products}= this.state;
   const index=products.indexOf(product);
   products[index].Qty-=1;
   this.setState({
    products:products
   })
}
deleteItem=(id)=>{
    const{products}=this.state;
    const items=products.filter((item)=>item.id!==id);

    this.setState({
        products:items
    })
}

 getCount = ()=>{
   const {products} = this.state;
let count=0;
   products.forEach((product)=>{
     count += product.Qty;
   })
return count;
 } 
  
  /// this is function based component
  render(){
    const {products}=this.state
  return (
    
    <div className="App">
      
      <NavBar
      count={this.getCount()}
      />
      <Cart
      products={products} 
      onIncreaseQuantity={this.increaseQuantity}
      onDecreaseQuantity={this.decreaseQuantity}
      onDeleteItem={this.deleteItem}
      />
          
    </div>
  );
}
}

export default App;
