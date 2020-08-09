import React from 'react';
 const CartItem=(props)=>{   //  its a class base component
    
//   increaseQuantity=()=>{
//         console.log('this.state',this.state);
//        //setState() funtion inherit form React.component and help to update the value in state object
      
//     //    setState form 1
//        this.setState({
//            Qty:this.state.Qty+1 // this process is called shallow merging
//        })

    //    //setState form 2 - if previous state require this
    //    this.setState((prevState)=>{
    //        return {
    //            Qty:prevState.Qty+1
    //        }
    //     })
      
    // }
    // decreaseQuantity=()=>{
    //       this.setState((prevState)=>{
    //           if(prevState.Qty==0){
    //               return;
    //           }
    //           return{
    //               Qty:prevState.Qty-1
    //           }
    //       })
    // }
    // render(){
        //whenever we try to call setState function inside the render code will give you stack overflow error
        // this.setState({
        //     Qty:this.state.Qty+100
        // })
    
        const{price,title,Qty}=props.product;
        const{
            product,
            increaseQuantity,
            decreaseQuantity,
            deleteItem
        }=props;
    return(
    
        <div className="cart-item">
        <div className="left-block">
        <img style={styles.image}/>
        </div>
        <div className="right-block">
            <div style={{fontSize:35}}>{title}</div>
            <div  style={{color:'#777'}}>Rs: {price}</div>
            <div style={{color:'#777'}}>Qty: {Qty}</div>
            <div className="cart-item-action">
                {/* Button */}
            <img  
              alt="increase" 
              className="action-icon" 
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              onClick = {()=>increaseQuantity(product)}
            />
            <img 
              alt="decrease" 
              className="action-icon" 
              src="https://image.flaticon.com/icons/svg/1828/1828906.svg" 
              onClick={()=>decreaseQuantity(product)}
            />
            <img 
              alt="delete" 
              className="action-icon" 
              src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
              onClick={()=>deleteItem(product.id)}
            />
            </div>
        </div>

        </div>

    );
}
// }
 const styles = {
     image:{
         height:150,
         width:150,
         borderRadius:4,
         background:'#ccc'
     }
 }

export default CartItem;