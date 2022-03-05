import { useState } from 'react';

const useInput=(fnc)=>{

    const [name,setName]=useState("");
    const [nameVerify,setVerify]=useState(true);

    const nameHandler=(e)=>{
        setName(e.target.value);
        if(fnc(e.target.value)){
            setVerify(true);
        }else{
            setVerify(false);
        }
    }

    return ({
        value:name,verify:nameVerify,
        handler:nameHandler
    });
}

export default useInput;