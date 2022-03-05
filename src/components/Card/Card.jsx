import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {

    return(
        <div className={`${classes.container}`} style={{justifyContent:`${props?.justify}`,flexDirection:`${props?.direction}`,alignItems:`${props?.align}`}} >
            {props.children}
        </div>
    );
}

export default Card;