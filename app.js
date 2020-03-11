const DB_USER = [
	{
		username: "tamamo",
		password: "password"
	}
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {
	e.preventDefault();
	const valueInputPassword = inputPassword.value;
	const valueInputUsername = inputUsername.value;
	console.log(valueInputUsername);
	console.log(valueInputPassword);
	
	let flag = 0;
	DB_USER.map((data) =>{
		if(data.username === valueInputUsername && data.password === valueInputPassword){
			flag = 1;
		}
	})
	
	const warningMsg = document.querySelector(".warning");
	
	if(flag === 0){
		warningMsg.className = "text-danger"
		//console.log("Password atau Username Salah!");
	}else{
		alert("Selamat anda masuk ke home");
	}
})
