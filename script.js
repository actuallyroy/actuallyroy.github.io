const bodyFrame = document.querySelector('#bodyFrame');
const headerBtns = document.querySelectorAll('.headerBtns');

headerBtns.forEach(item => {
    item.onclick = () => {
        if (bodyFrame.src.indexOf(item.innerHTML.toLowerCase().split(' ')[0]) == -1)
        bodyFrame.src = item.innerHTML.toLowerCase() + ".html";
    }
});