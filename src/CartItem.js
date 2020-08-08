import React from 'react';
class CartItem extends React.Component{   //  its a class base component
render(){
    return(
        <div clasName="cart-item">
        <div className="left-block">
        <img style={styles.image}/>
        </div>
        <div className="right-block">
            <div style={{color:'blue',fontSize:25}}>Phone</div>
            <div  style={{color:'#777'}}>Rs: 999</div>
            <div style={{color:'#777'}}>Qty: 1</div>
            <div className="cart-item-action">
                {/* Button */}

            </div>
        </div>

        </div>

    );
}
}
 const styles = {
     image:{
         height:110,
         width:110,
         borderRadius:4,
         background:'#ccc'
     }
 }

export default CartItem;