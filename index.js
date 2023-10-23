const showPassword=document.getElementsByClassName('show');
const hidePassword=document.getElementsByClassName('hide');
const show_pass   = document.getElementById('password')
const con_pass    =document.getElementById('confirm_pass')

showPassword[0].addEventListener('click',function(){
    show_pass.type='text';
    showPassword[0].style.display = 'none';
    hidePassword[0].style.display ='block'
})
hidePassword[0].addEventListener('click',function(){
    show_pass.type = 'password';
    showPassword[0].style.display = 'block';
    hidePassword[0].style.display='none';
})
showPassword[1].addEventListener('click',function(){
    con_pass.type='text';
    showPassword[1].style.display = 'none';
    hidePassword[1].style.display ='block'
})
hidePassword[1].addEventListener('click',function(){
    con_pass.type = 'confirm_pass';
    showPassword[1].style.display = 'block';
    hidePassword[1].style.display='none';
})

const uname=document.getElementById('uname');
const email=document.getElementById('email');
const password=document.getElementById('password');
const con_password=document.getElementById('con_pass');
const signUp=document.getElementById('signUp');

const setError=(input)=>{
    const form_group=input.parentElement;
    form_group.classList.add('error');
    form_group.classList.remove('success');
}
const setSuccess=(input)=>{
    const form_group=input.parentElement;
    form_group.classList.add('success')
    form_group.classList.remove('error');
}
const isEmail=(email)=>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

uname.addEventListener('keyup',function(){
    const unameValue=uname.value.trim();
    (unameValue==='') ? setError(uname) :setSuccess(uname);
})
email.addEventListener('keyup',function(){
    const emailValue=email.value.trim();
    (emailValue==='') ? setError(email) :(!isEmail(emailValue)) ? setError(email): setSuccess(email);
})
password.addEventListener('keyup',function(){
    const passValue=password.value.trim();
    (passValue==='') ? setError(password) : (passValue.length <8)?setError(password):setSuccess(password)
})
con_pass.addEventListener('keyup',function(){
    const passValue=password.value.trim();
    const con_passValue=con_pass.value.trim();
    (con_passValue==='')?setError(con_pass):(con_passValue!==passValue)?setError(con_pass):setSuccess(con_pass);
})

signUp.addEventListener('click',function(){
    if(uname.value === ''){
        setError(uname);
    }
    if(email.value === ''){
        setError(email);
    }
    if(password.value===''){
        setError(password);
    }
    if(con_pass.value===''){
        setError(con_pass);
    }
    if(uname.value!==''){
        if(email.value!==''){
            if(password.value!==''){
                if(con_pass.value!==''){
                    window.location.assign('dashbord.html');
                }
            }
        }
    }
})
console.log(signUp)