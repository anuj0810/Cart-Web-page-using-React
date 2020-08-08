import React from 'react';
class CartItem extends React.Component{   //  its a class base component
    constructor(){
        super()
        this.state={
            price: 1100,
            title : 'Smart Phone',
            Qty : 0

        }
        // this.increaseQuantity=this.increaseQuantity.bind(this); 
    }
  increaseQuantity=()=>{
        console.log('this.state',this.state);
       //setState() funtion inherit form React.component and help to update the value in state object
      
    //    setState form 1
       this.setState({
           Qty:this.state.Qty+1 // this process is called shallow merging
       })

    //    //setState form 2 - if previous state require this
    //    this.setState((prevState)=>{
    //        return {
    //            Qty:prevState.Qty+1
    //        }
    //     })
      
    }
    decreaseQuantity=()=>{
          this.setState((prevState)=>{
              if(prevState.Qty==0){
                  return;
              }
              return{
                  Qty:prevState.Qty-1
              }
          })
    }
    render(){
        const{price,title,Qty}=this.state;
    return(
    
        <div className="cart-item">
        <div className="left-block">
        <img style={styles.image}/>
        </div>
        <div className="right-block">
            <div style={{color:'blue',fontSize:35}}>{title}</div>
            <div  style={{color:'#777'}}>Rs: {price}</div>
            <div style={{color:'#777'}}>Qty: {Qty}</div>
            <div className="cart-item-action">
                {/* Button */}
            <img  
              alt="increase" 
              className="action-icon" 
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              onClick = {this.increaseQuantity}
            />
            <img 
              alt="decrease" 
              className="action-icon" 
              src="https://image.flaticon.com/icons/svg/1828/1828906.svg" 
              onClick={this.decreaseQuantity}
            />
            <img 
              alt="delete" 
              className="action-icon" 
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
            />
            </div>
        </div>

        </div>

    );
}
}
 const styles = {
     image:{
         height:150,
         width:150,
         borderRadius:4,
         background:'#ccc'
     }
 }

export default CartItem;