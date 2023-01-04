//alert("Nelson Muquissi ")
//numero = prompt("Informe um numero")
//while (numero != 1){
  //  numero = prompt("Informe um numero")
//}
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src ="menu_white_36dp.svg";

    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src ="close_white_36dp.svg";
    }
}