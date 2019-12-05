let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll('.plan button');
let modalNo = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

function closeModal(){
    backdrop.style.display='none'
    modal.style.display='none'
}

for ( let i = 0;i < selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', function(){
        modal.style.display='block';
        backdrop.style.display='block';
    })
}

backdrop.addEventListener('click',function(){
    closeModal();
    mobileNav.style.display ='none';
})

modalNo.addEventListener('click',closeModal)

toggleButton.addEventListener('click', function(){
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
})

