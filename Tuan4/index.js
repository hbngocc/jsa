localStorage.setItem('dangnhap',true)
let btn = document.querySelectorAll('.btn')
let quantity = document.querySelector('.quantity')
let currentQuantity = +quantity.innerText


for(let i=0; i<btn.length;i++){
    let btnItem = btn[i]
    btnItem.addEventListener('click', function(){
        if(localStorage.getItem('dangnhap')){
            currentQuantity +-1;3
            quantity,innerText = currentQuantity
        }else{
            alert('Ban chua dang nhap')
            location.href='login.html'
        }
    })
    console.log(btnItem)
}
