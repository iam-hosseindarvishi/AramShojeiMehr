var menu=document.getElementById('menu');
var openMenu=document.getElementById('openMenuButton');
var closeMenuButton=document.getElementById('closeMenuButton');

openMenu.addEventListener('click',function(){
            menu.style.display="flex";
            openMenu.style.display='none';
            closeMenuButton.style.display="block";
});
closeMenuButton.addEventListener('click',()=>{
    menu.style.display="none";
    openMenu.style.display='block';
    closeMenuButton.style.display="none";
});

