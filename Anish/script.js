const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
pageTurnBtn.forEach((el, index)=>{
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);
        if(pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }


});

//contact me button click

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {

    pages.forEach((page,index ) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(()=> {
                page.style.zIndex = 20 + index;
            }, 500)
        },(index + 1) * 200 + 100)
    })
}

