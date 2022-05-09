document.querySelector("form").addEventListener("submit", Account)
function Account(){
    event.preventDefault()
    var deatils = {
        mobileNumber:document.querySelector("#number").value
    }
    if(deatils.mobileNumber=="")
    {
        alert("Enter Mobile No")
    }
    else
    {
        localStorage.setItem("Details", JSON.stringify(deatils))
        window.location.href="signupOrLogin.html"
    }
}

