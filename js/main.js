var typed = new Typed(".element", {
  strings: ["Designer", "Developer", "Designer"],
  typeSpeed: 100,
  loop: true,
});

let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".item-box");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove('active')
    }
    this.classList.add('active')
    let dataFilter = this.getAttribute('data-filter');
    for (let k = 0; k < itemBox.length; k++) {

      let imgsrc = document.querySelectorAll('#img');
      if(dataFilter == 'all'){
       itemBox[k].classList.remove('d-none')
       itemBox[k].classList.add('active')  
      }

      itemBox[k].classList.remove('active')
      itemBox[k].classList.add('d-none')

      if(itemBox[k].getAttribute('data-item') == dataFilter){
      itemBox[k].classList.remove('d-none')
      itemBox[k].classList.add('active')  
      }
    }
  })
}
