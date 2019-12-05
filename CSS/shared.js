var backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
let modalNo = document.querySelector('.modal__action--negative')

// console.log(modalNo)
// backdrop.style.display= 'block';
// console.dir(selectPlanButtons);
for ( let i = 0;i < selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', function(){
        modal.style.display='block';
        backdrop.style.display='block';
    })
}

backdrop.addEventListener('click',function(){
    backdrop.style.display='none'
    modal.style.display='none'
})

modalNo.addEventListener('click',function(){
    backdrop.style.display='none'
    modal.style.display='none'
})
