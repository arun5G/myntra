var deatils = JSON.parse(localStorage.getItem("Details")) || []
document.querySelector("button").addEventListener("click",newA)
function newA(){
    deatils.userPassword=document.querySelector("#password").value
    deatils.userName=document.querySelector("#name").value
    deatils.userEmail=document.querySelector("#email").value
    deatils.userGender=document.querySelector("#gender").value
    deatils.userAlternateMobile=document.querySelector("#ALnum").value
    deatils.userHint=document.querySelector("#hint").value
    
    console.log(deatils)

    if(deatils.userPassword==""  || deatils.userName=="" || deatils.userEmail=="" || deatils.userGender=="")
    {
        alert("Fill The Empty Boxes")
    }
    else
    {
        localStorage.setItem("Details", JSON.stringify(deatils))
        window.location.href="home.html"
    }
}

