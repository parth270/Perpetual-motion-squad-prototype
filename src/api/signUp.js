const url ="http://localhost:3001/api/user/signup";

const signUp = async (first,last,number,email,pass,confirmPass) => {
    const data={FirstName:first,LastName:last,Email:email,PhoneNumber:number,Password:pass,ConfirmPassword:confirmPass};
    const Data={"FirstName":"Parth","LastName":"Arora","Email":"parth27@gmail..com","PhoneNumber":"7669481778","Password":"theta40","ConfirmPassword":"theta40"};
    const respone = await fetch(url,{
        method:'POST',
        mode:"no-cors",
        headers:{
            'Content-Type':'application/json'
        },
        body:Data
    });

    console.log(JSON.stringify(data));
    console.log(data);
    
}

export default signUp;