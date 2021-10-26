
function generator(){
    let password = '';

    for(let i=0; i<=20; i++){
        random = Math.floor(Math.random(0,9) * 10);
        password = password + random;
    }

    newPassword.textContent = password;
}

generator();