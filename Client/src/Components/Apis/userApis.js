export const RegisterUser = user =>{
    // console.log(user);
    const currentUser = {
        name:user.displayName,
        email:user.email,
    }
    
    fetch(`${import.meta.env.VITE_LOCALHOST_KEY}/users`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)
    })
    .then(res => res.json())
    // .then(data => console.log(data))
    
}