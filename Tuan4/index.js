localStorage.setItem('dang nhap', true)
let btn = document.querySelectorAll('.btn')
let quantity = document.querySelector('.quantity')
let currentQuantity = +quantity.innerText

for (let i = 0; i < btn.length; i++) {
    let btnItem = btn[i]
    btnItem.addEventListener('click', function () {
        if (localStorage.getItem('login')) {
            currentQuantity + -1
            console.log(currentQuantity)
        } else {
            alert('Ban chua dang nhap')
            location.href = 'login.html'
        }
    })
    console.log(btnItem)
}
function checkLogin() {
    if (localStorage.getItem('dangnhap')) {
        document.querySelector('rightHeader')
    } else {
        let rightHeader = document.querySelector('rightHeader')

    }
}
