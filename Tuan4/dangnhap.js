let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#pass");
let btnLogin = document.querySelector(".btnLogin");
let errorMessages = document.querySelectorAll(".errorMessage");
let errorMessageEmail = errorMessages[0];
let errorMessagePassword = errorMessages[1];

// Bien chua tai khoan he thong

const account = {
    email: "khang123@gmail.com",
    pass: "123123",
};

// Đặt sự kiện click vào nút login
btnLogin.addEventListener("click", function () {
    let emailValue = emailInput.value;
    let passValue = passwordInput.value;

    //   KIEM TRA TAI KHOAN
    if (emailValue == account.email) {
        // Dung tai khoan
        if (passValue == account.pass) {
            // Dung mk va tk
            alert("Đăng nhập thành công");
            location.href = "index.html";
            localStorage.setItem("dangnhap", account.email);
        }
    } else {
        // SAI TAI KHOAN
        emailInput.classList.add("error");
        errorMessageEmail.innerText = "Sai tai khoan";
    }

    //Kiem tra email
    if (emailValue == '') {
        errorMessageEmail.innerText = "Email khong duoc de trong"
    }

    // kiem tra mat khau
    if (passValue == '') {
        errorMessagePassword.innerText = 'Vui long nhap mat khau'
    } 
    

});
