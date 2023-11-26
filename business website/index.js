
function clik() {
    document.getElementById('navbarNav').style.display = 'block'
}
var frm = document.querySelector('.frame')
frm.addEventListener('click', () => {
    frm.style.display = 'none'
})
var acc = document.getElementsByClassName('accordion')
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {

        this.classList.toggle('active')
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    })
}

const buttons = document.querySelectorAll('.btn-port')
const pictures = document.querySelectorAll('.portfolio')



buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        setActiveBtn(e);
        const btnfilter = e.target.dataset.filter

         pictures.forEach((picture=>{
            if(btnfilter=='all'){
                
            
       picture.style.display = 'block'
              
               
               
            }else{
                const picturefilter = picture.dataset.item;
                if(btnfilter==picturefilter){
                 
        picture.style.display = 'block'
      
             
                }else{
                    
                 picture.style.display = 'none'
                           
                }
            }
         }))
    })
})

function setActiveBtn(e){
buttons.forEach((button)=>{
    button.classList.remove('btn-cliked')

});
e.target.classList.add('btn-cliked')
}
