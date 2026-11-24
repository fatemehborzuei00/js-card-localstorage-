const userform = document.querySelector("#userform");
const cardsContainer = document.querySelector("#cards-container"); 
const users = [];
//let users = json.parse(localstorage.getItem("users"))//[];

//if(json.parse(localstorage.getItem("user"))){
//uses=json.parse(localstorage.getItem("users"));
//}else{
//users=[]
//}

userform.addEventListener("submit", (e) => {
    e.preventDefault();

    
    const newuser = {
        fullName: userform.elements.fullname.value,
        age: userform.elements.age.value,
        email: userform.elements.email.value
    };

    users.push(newuser);
    localStorage.setItem("users",JSON.stringify(users));

    
    Cards(users, cardsContainer);

    
    userform.reset();
});


function Cards(list, placeholder) {

    // placeholder.innerHTML = ""; 

    list.forEach((user) => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h2>${user.fullName}</h2>
            <p>Age: ${user.age}</p>
            <p>Email: ${user.email}</p>
        `;
   
        placeholder.appendChild(div);
        
        console.log(`Hello dear ${user.fullName}, welcome!`);
    });
}
