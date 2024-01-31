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


// CATTURO BOTTONE MAPPA MONDO

let opener = document.querySelector('.opener');

let movedDiv = document.querySelectorAll('.moved');

// variabile d appoggio

let conferma = false;

let cardWrapper = document.querySelector('#cardWrapper');

let staff =[

  {name: 'Danilo',mansione :'WEb developer', url:'./danilo.jpg'},
  {name: 'Mimmo',mansione :'Amministratore delegato', url:'./mimmo.jpg'},
  {name: 'Alessandro',mansione :'Social media manager', url:'./alessandro.jpg'},
  {name: 'Rosario',mansione :'Trasporti e montaggio', url:'./rosario.jpg'},

];

movedDiv.forEach((moved , i)=>{
    moved.style.backgroundImage = `url('${staff[i].url}')`;

    moved.addEventListener('click',()=>{
      console.log(staff[i]);
      cardWrapper.innerHTML= '';

      let div = document.createElement('div');
      
      div.classList.add('staffCard');

      div.innerHTML = `
          <h3>${staff[i].name} </h3>
          <p>${staff[i].mansione}  </p>
      
      
      `;

      cardWrapper.appendChild(div);

      let card = document.querySelector('.staffCard');

      card.style.backgroundImage = `url(${staff[i].url})`;

    });
   

});


opener.addEventListener('click', ()=>{

    if(conferma == false){

        conferma = true;

        
        opener.style.transform = 'rotate(360deg)';

        movedDiv.forEach((moved, i)=>{
        
            let angle = (360 * i) / movedDiv.length;
            moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;

        });

    } else {

    
        opener.style.transform = 'rotate(0deg)';

    

        movedDiv.forEach((moved)=>{
            moved.style.transform = `rotate(0deg) translate(0px)`;
            
        });
        conferma = false;
       
    }

});