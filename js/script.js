// active
let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');


menuBtn.onclick = () =>{
  navbar.classList.toggle('active')
}

// window
window.onscroll = () =>{
  menuBtn.classList.remove('fa-times')
  navbar.classList.remove('active');
}

// popup preview
let previewContainer = document.querySelector('.product-container');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.product-popup .slide').forEach(box =>{
  box.onclick = () =>{
    previewContainer.style.display='flex';
    let name = box.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    })
  }
})

previewContainer.querySelector('#close-preview').onclick = () =>{
  previewContainer.style.display='none';
  previewBox.forEach(close =>{
    close.classList.remove('active');
  })
}

