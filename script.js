const headerBox = document.querySelector(".header");
window.onscroll = () => {
    var c = window.scrollY/(window.innerHeight*5)*150;
    // if(window.scrollY > 0){
    //     headerBox.style.boxShadow = "0px 2px 6px rgba(0, 0, 0, 0.16)";
    // }else{
    //     headerBox.style.boxShadow = "none";
    // }

    headerBox.style.backgroundColor = `rgba(${97+c}, ${22+c}, ${189-c})`;

}