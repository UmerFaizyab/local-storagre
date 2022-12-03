// initiate
let info = [{
    name1: "",
    emai1: "",
    city: "",
    pass: "",
}]
// initiate


function signup(){
    let firstres = JSON.stringify(info)
    localStorage.setItem("usersData", firstres);
    
    // check object
    
    let exist = {
        name1Ch: document.getElementById("name").value,
        emailCh: document.getElementById("email").value,
        cityCh: document.getElementById("city").value,
        passCh: document.getElementById("pass").value,
    }
    
    // check object
    
    // getting usersdata
    let gotinfo = JSON.parse(localStorage.getItem("usersData"))
    // getting usersdata

    var swit = 0
    
    // condition
    for(obj in gotinfo){
        
        if(exist.name1Ch == gotinfo[obj].name1 || exist.emailCh == gotinfo[obj].email1){           
            swit = 0
            alert("Account Already Exists")
            break
            
        }
        else{
            swit = 1
        }
    } 
    // condition


    if(swit == 1){
    info.push({
        name1: document.getElementById("name").value,
        emai1: document.getElementById("email").value,
        city: document.getElementById("city").value,
        pass: document.getElementById("pass").value,

    })
    
    let res = JSON.stringify(info)
    localStorage.setItem("usersData", res);
    swit = 0
    alert("user created")

    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("city").value = ""
    document.getElementById("pass").value = ""


}    
}


