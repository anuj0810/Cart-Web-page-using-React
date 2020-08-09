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
               img:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                price: 1100,
                title : 'Watch',
                Qty : 0,
                id:1
            },
            {
              img :'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
                price: 11000,
                title : 'Smart Phone',
                Qty : 0,
                id:2
            },
            {
                img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
                price: 50000,
                title : 'Laptop',
                Qty : 0,
                id:3
            },
            {
                img:'https://images.unsplash.com/photo-1481207801830-97f0f9a1337e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                price: 500,
                title : 'Headphone',
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

 getCartTotal =()=>{
  const {products} = this.state;
  let total=0;
  products.forEach((product)=>{
    total += product.Qty*product.price;
  })
  return total;

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
      <div style={{padding:10,fontSize:25,marginBottom:50,marginLeft:80}}>TOTAL : {this.getCartTotal()}</div> 
    </div>
  );
}
}

export default App;
