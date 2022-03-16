function validateform()
{
    var fname=document.forms["form"]["first name"];
    var mobile=document.forms["form"]["mobile"];
    var password=document.forms["form"]["password"]
    if(fname.value==""){
        window.alert("Enter the first name");
        fname.fcous();
        return false;
    }
    if(mobile.value==""||mobile.value.length<10||mobile.value.length>10){
        window.alert("Enter the mobile number");
        mobile.fcous();
        return false;
    }
    if(password.value==""){
        window.alert("Enter the password");
        password.fcous();
        return false;
    }

}