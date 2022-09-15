let a = 0




document.querySelector('.plus').addEventListener('click', () => {
    a++ 
    document.querySelector('.num').innerText = a;

})

document.querySelector('.minus').addEventListener('click', () => {
    if (a >= 1) {
        a--
        document.querySelector('.num').innerText = a;
    }

   

})