//navbar

let mainNavbar = document.querySelector('#mainNavbar');

let navIcon =document.querySelector('#navIcon');


let confirm=false;

navIcon.addEventListener('click',()=>{

    if(confirm== false){

        navIcon.style.transform= 'rotate(-180deg)';
        confirm= true;
    } else {

        navIcon.style.transform= 'rotate(0deg)';
        confirm=false;
    }
  
})

 let scroller = document.querySelector('#scroller')

window.addEventListener('scroll' , ()=>{

    if(window.scrollY > 0){

        mainNavbar.style.backgroundColor= 'var(--main)';
        mainNavbar.style.padding='8px';
        scroller.classList.remove('d-none');

    } else {
        mainNavbar.style.backgroundColor= 'transparent'

        mainNavbar.style.padding='0px';

        scroller.classList.add('d-none');
    }                                                  

    
})

function createInterval(finalNumber, elemento){
    
    let counter = 0;

    let interval = setInterval(()=>{

        if(counter < finalNumber){
            counter++
            elemento.innerHTML = counter;
            
        } else {

            clearInterval(interval);

        }

    }, 10);

}

let firstSpan = document.querySelector('#first-span');
let secondSpan = document.querySelector('#second-span');
let thirdSpan = document.querySelector('#third-span');



let titoloIntersecato = document.querySelector('#titoloIntersecato');

let check = false;

let observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting && check == false){
            createInterval(250, firstSpan);
            createInterval(900, secondSpan);
            createInterval(150, thirdSpan);

            check = true;
        }

    });

})
observer.observe(titoloIntersecato);



// CATTURA ICONA CAMION
let camion = document.querySelectorAll('.fa-truck');

let colonne = document.querySelectorAll('.col-custom-trasporti');

colonne.forEach((colonna, i)=>{


    let columnsConfirm = false;

   

    colonna.addEventListener('mouseenter', ()=>{
        if(columnsConfirm == false){
            camion[i].classList.remove('text-main');
            camion[i].classList.add('text-sec');
        }else{
            camion[i].classList.remove('text-blackCus');
            camion[i].classList.add('text-white');
        }
    });

    

    colonna.addEventListener('mouseleave', ()=>{

        if(columnsConfirm == false){
            camion[i].classList.remove('text-sec');
            camion[i].classList.add('text-blackCus');
            columnsConfirm = true;
        } else {
            camion[i].classList.remove('text-white');
            camion[i].classList.add('text-main');
            columnsConfirm = false;
        }
    });

});



let categories = [

    {name: 'Camere da Letto', icon : `<i class="fa-solid fa-bed fa-beat-fade my-3 fa-2x"></i>` , announcements : 100},

    {name: 'Living', icon : `<i class="fa-solid fa-champagne-glasses fa-beat-fade my-3 fa-2x"></i>`, announcements : 200},

    {name: 'Sedie', icon : `<i class="fa-solid fa-chair fa-beat-fade my-3 fa-2x"></i>` , announcements : 700},

    {name: 'Vasi', icon : `<i class="fa-solid fa-jar fa-beat-fade my-3 fa-2x"></i>` , announcements : 300},

    {name: 'Librerie', icon : `<i class="fa-solid fa-book fa-beat-fade my-3 fa-2x"></i>` , announcements : 250},

    {name: 'Divani', icon : `<i class="fa-solid fa-couch fa-beat-fade my-3 fa-2x"></i>` , announcements : 400},

    {name: 'Tavoli', icon : `<i class="fa-solid fa-table fa-beat-fade my-3 fa-2x"></i>` , announcements : 200},

    {name: 'Cucine', icon : `<i class="fa-solid fa-kitchen-set fa-beat-fade my-3 fa-2x"></i>` , announcements : 150},

];

// CARD WRAPPER
let cardsCategoryWrapper = document.querySelector('#cardsCategoryWrapper');

categories.forEach((categoria)=>{

    let div = document.createElement('div');

    div.classList.add('col-12' , 'col-md-3', 'mb-5');

    div.innerHTML = `<i class="fa-solid fa-table"></i>

                <div class="category-card">
                    <div class="border-dashed">
                        ${categoria.icon}
                        <h3>${categoria.name}</h3>
                        <p class="fw-bold">${categoria.announcements}</p>
                    </div>
                </div>

    `;

    cardsCategoryWrapper.appendChild(div);
})
