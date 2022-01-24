// acctive navbar
// home
let home = document.querySelector('.home');
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.add('active');
}

home.onclick = () =>{
  searchForm.classList.remove('active');
}