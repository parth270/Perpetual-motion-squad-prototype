import React from 'react';
import Card from '../Card/Card';
import Lottie from '../Lottie/Lottie';
import classes from './Login.module.css';
import useInput from '../../Hooks/useInput';

const Login =()=>{

    const {value:name,verify:nameVerify,handler:nameHandler}=useInput(e=>e.length>0);
    const {value:pass,verify:passVerify,handler:passwordHandler}=useInput(e=>e.length>0);

    return(
        <Card>
            <div className={classes.row} >
            <form className={classes.form} >
                <p className={classes.heading} >Login</p>
                <div className={classes['input-container']}>
                    <label className={classes.label} >Email:-</label>
                    <input type="email" className={classes.input} value={name} style={!nameVerify?{border:"2px solid tomato"}:{}} onChange={nameHandler}  />
                </div>
                <div className={classes['input-container']}>
                    <label className={classes.label} >Password:-</label>
                    <input type="password" className={classes.input} style={!passVerify?{border:"2px solid tomato"}:{}} value={pass} onChange={passwordHandler}  />
                </div>
                <button className={classes.btn} >Login</button>
            </form>
                <Lottie className={classes.Lottie} />
            </div>
        </Card>
    );
}

export default Login;