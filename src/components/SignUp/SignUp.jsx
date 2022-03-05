import React from 'react';
import Card from '../Card/Card';
import Lottie from '../Lottie/Lottie';
import classes from './SignUp.module.css';
import useInput from '../../Hooks/useInput';

const SignUp =()=>{

    const {value:first,verify:firstVerify,handler:firstHandler}=useInput(e=>e.length>0);
    const {value:last,verify:lastVerify,handler:lastHandler}=useInput(e=>e.length>0);
    const {value:number,verify:numberVerify,handler:numberHandler}=useInput(e=>e.length>0);
    const {value:email,verify:emailVerify,handler:emailHandler}=useInput(e=>e.length>0);
    const {value:pass,verify:passVerify,handler:passwordHandler}=useInput(e=>e.length>0);
    const {value:confirmPass,verify:confirmPassVerify,handler:confirmPasswordHandler}=useInput(e=>e===pass);

    const check=(firstVerify && lastVerify && emailVerify && numberVerify && emailVerify && passVerify && confirmPassVerify);

    const submitHandler=(event)=>{
        event.preventDefault();
    }

    return(
        <Card>
            <div className={classes.row} >
            <form className={classes.form} >
                <p className={classes.heading} >SignUp</p>
                <div className={classes['input-container']}>
                    <label className={classes.label} >First Name:-</label>
                    <input type="text" className={classes.input} value={first} style={!firstVerify?{border:"2px solid tomato"}:{}} onChange={firstHandler}  />
                </div>
                <div className={classes['input-container']}>
                    <label className={classes.label} >Last Name:-</label>
                    <input type="text" className={classes.input} value={last} style={!lastVerify?{border:"2px solid tomato"}:{}} onChange={lastHandler}  />
                </div>
                <div className={classes['input-container']}>
                    <label className={classes.label} >Number:-</label>
                    <input type="number" className={classes.input} value={number} style={!numberVerify?{border:"2px solid tomato"}:{}} onChange={numberHandler}  />
                </div>
                <div className={classes['input-container']}>
                    <label className={classes.label} >Email:-</label>
                    <input type="email" className={classes.input} value={email} style={!emailVerify?{border:"2px solid tomato"}:{}} onChange={emailHandler}  />
                </div>
                <div className={classes['input-container']}>
                    <label className={classes.label} >Password:-</label>
                    <input type="password" className={classes.input} style={!passVerify?{border:"2px solid tomato"}:{}} value={pass} onChange={passwordHandler}  />
                </div>
                <div className={classes['input-container']}>
                    <label className={classes.label} >Confirm Password:-</label>
                    <input type="password" className={classes.input} style={!confirmPassVerify?{border:"2px solid tomato"}:{}} value={confirmPass} onChange={confirmPasswordHandler}  />
                </div>
                <button className={classes.btn} disabled={!check} onClick={submitHandler} >Submit</button>
            </form>
                <Lottie className={classes.Lottie} />
            </div>
        </Card>
    );
}

export default SignUp;