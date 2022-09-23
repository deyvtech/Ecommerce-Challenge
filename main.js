// Add and Minus
let a = 0;
document.querySelector(".plus").addEventListener("click", () => {
  a++;
  document.querySelector(".num").innerText = a;
});

document.querySelector(".minus").addEventListener("click", () => {
  if (a >= 1) {
    a--;
    document.querySelector(".num").innerText = a;
  }
});

// const btnImgs = document.querySelectorAll('.small-row-img')
// btnImgs.forEach((btnImg)=>{
//     btnImg.addEventListener('click', (e) => {
//         btnImg.classList.toggle('active')
//     })
// })

btns(document.querySelectorAll(".small-row-img"))

function btns(btn) {
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function(e) {
        let current = this;
        for (let i = 0; i < btn.length; i++) {
          if (current != btn[i]) {
            btn[i].classList.remove('active');
          } else if (current.classList.contains('active') === true) {
            current.classList.remove('active');
          } else {
            current.classList.add('active')
          }
        }
        e.preventDefault();
      });
    };
  }

