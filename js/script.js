// acctive navbar
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#bars-btn');
let header = document.querySelector('.header');

menuBtn.addEventListener('click', hiddenMenu)
function hiddenMenu() {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}


menuBtn.onclick = () =>{
  header.classList.add('active')
}

// window
window.onscroll = () =>{
  menuBtn.classList.remove('fa-times')
  navbar.classList.remove('active');
}
// home
let home = document.querySelector('.home');
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.add('active');
}

home.onclick = () =>{
  searchForm.classList.remove('active');
}

// popup preview
let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.necklace .slide').forEach(box =>{
  box.onclick = () =>{
    previewContainer.style.display = 'flex';
    let name = box.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target')
      if(name == target){
        preview.classList.add('active');
      }
    })
  }
})

previewBox.forEach(close =>{
  close.onclick = () =>{
    close.classList.remove('active');
    previewContainer.style.display='none';
  }
})
