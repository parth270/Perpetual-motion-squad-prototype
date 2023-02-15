import { useState,useEffect } from 'react';

  // function ValidateEmail(mail: any) {
  //   const validRegex =
  //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   if (mail.match(validRegex)) {
  //     return true;
  //   }
  //   return false;
  // }

const useInput=(fnc)=>{

    const [name,setName]=useState("");
    const [nameVerify,setVerify]=useState(false);
    const [focus,setFocus] = useState(false);
    const [touched,setTouched] = useState(false);
    const [focused,setFocused] = useState(false);
    const [blured,setBlured] = useState(false);
    const nameHandler=(e)=>{
        setName(e);
        if(fnc(e)){
            setVerify(true);
        }else{
            setVerify(false);
        }
    }

    useEffect(()=>{
        if(focus){
            setFocused(true);
        }
    },[focus]);

    useEffect(()=>{
        if(focused){
            if(blured){
                setTouched(true);
            }
        }
    },[focused,blured])

    const focusHandler=()=>{
        setFocus(true);
    }

    const blurHandler=()=>{
        setFocus(false);
        setBlured(true);
    }

    return ({
        value:name,verify:nameVerify,focus:focus,
        touched:touched,
        handler:nameHandler,
        onFocus:focusHandler,
        onBlur:blurHandler
    });
}

export default useInput;
