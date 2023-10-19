
let users = [];

let objstr = localStorage.getItem('user');
if(objstr != null){
    users = JSON.parse(objstr);
}

function adduser(){
    const useremail = document.getElementById("uemail");
    const username = document.getElementById("username");
    const usercpwd = document.getElementById("cpwd");
    const userpwd = document.getElementById("userpwd");
    const uerror = document.getElementById("error");
    if( users.find(e=> e.email === useremail.value))
    {
        uerror.innerText="Email already exist !";
        uerror.style.display="block";
        useremail.value='';
        username.value='';
        userupwd.value='';
        usercpwd.value='';
    }else if(userpwd.value != usercpwd.value)
    {
        uerror.innerText="Password must be same !";
        uerror.style.display="block";
    }else if(username.value == '' && userpwd.value == '' && usercpwd.value == ''){
        uerror.innerText="Fields can't be blank";
        uerror.style.display="block";
    }else if(userpwd.value.length<8 && usercpwd.value.length<8){
        uerror.innerText="Password must be atleast 8 characters long.";
        uerror.style.display="block";
    }
    else{
        users.push({'email': useremail.value,'name': username.value,'pwd': userpwd.value,'cpwd':usercpwd.value});
        uerror.innerText="Registered Successfully !";
        uerror.style.display="block";
        saveinfo(users);
        useremail.value='';
        username.value='';
        usercpwd.value='';
        userpwd.value='';
    }
}
function saveinfo(users){
    let str = JSON.stringify(users);
    console.log(str);
    localStorage.setItem('user',str);
}
function check(){
    const useremail = document.getElementById("email");
    const userpwd = document.getElementById("upwd");
    const uerror1 = document.getElementById("error1");
    
    if(users.some( u => u.email == useremail.value) && users.some( u => u.pwd == userpwd.value))
    {
        window.location = "main.html";
    }
    else{
        uerror1.innerText="Incorrect username or password !";
        uerror1.style.display="block";
        
    }
}



