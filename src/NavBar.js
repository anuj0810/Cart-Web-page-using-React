import React from 'react';
const NavBar=(props)=> {   //  its a class base component
    return(
        <div className='navBar'>
            <div style={styles.cartIconContainer} >
                <img style={styles.cartIcon}  src="https://image.flaticon.com/icons/svg/2121/2121815.svg" alt="cart icon" className=""/>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
        );
    }

 const styles = {
     cartIcon:{
         height:32,
         marginRight:40
     },
     cartIconContainer:{
         position:'relative'
        },
     cartCount:{
         background:'yellow',
         borderRadius:'50%',
         padding:'4px 10px',
         position:'absolute',
         right:17,
         top:-12

     }
 }

export default NavBar;