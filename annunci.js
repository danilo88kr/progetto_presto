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

// AGGANCIAMOCI AL JSON

fetch('./annunci.json').then((response)=> response.json()).then((data)=>{

    
    let categoryWrapper = document.querySelector('#categoryWrapper');

    let cardsWrapper = document.querySelector('#cardsWrapper');


    function setCategoryFilter(){
        
        let categories = data.map((annuncio)=> annuncio.category);

       
        let uniqueCategories = [];

        categories.forEach((categoria)=> {

            
            if(!uniqueCategories.includes(categoria)){
                uniqueCategories.push(categoria);
            }
            
        });

        // CREO RADIO BUTTON
        uniqueCategories.forEach((category)=>{

            let div = document.createElement('div');

            div.classList.add('form-check');

            div.innerHTML = `
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">

                    <label class="form-check-label" for="${category}">
                        ${category}
                    </label>
            `;

            categoryWrapper.appendChild(div);

        })
    }

    setCategoryFilter();

    function showCards(array){

        
        cardsWrapper.innerHTML = '';

        array.sort((a, b)=> b.price - a.price );

        array.forEach((annuncio, i)=>{

            let div = document.createElement('div');

            div.classList.add('col-12' , 'col-md-3');

            div.innerHTML = `
            
                <div class="announcement-card text-center">
                    <div class="card-head">
                        <img class="img-Card-Custom" src="https://picsum.photos/${200+i}" alt="">
                    </div>

                    <h4>${annuncio.name}</h4>
                    <h5>${annuncio.category}</h5>
                    <p class="fw-bold">${annuncio.price} €</p>
                </div>
            
            `;

            cardsWrapper.appendChild(div);

        })

    }

    showCards(data);

   
    function filterByCategory (array){

        let categoria = Array.from(checkInputs).find((bottone)=> bottone.checked).id;


        if(categoria != 'All'){

            let filtered = array.filter((annuncio)=>{
                return annuncio.category == categoria;
        
            })

            
            return filtered;

        } else {

            return data;
            

        }
     

     
    }
  
    
     let checkInputs = document.querySelectorAll('.form-check-input');

     checkInputs.forEach((radio)=>{

         radio.addEventListener('click', ()=>{
             globalFilter();
         })

     })

   
    let priceInput = document.querySelector('#priceInput');

    
    let incrementNumber = document.querySelector('#incrementNumber');

    
    function setPriceInput(){

        
        let prices = data.map((annuncio)=> Number(annuncio.price));

        
        let maxPrice = (Math.max(...prices));

       
        priceInput.max = Math.ceil(maxPrice);

        priceInput.value = Math.ceil(maxPrice);

       
        incrementNumber.innerHTML = Math.ceil(maxPrice);
    }

    setPriceInput();
     // FILTRO PREZZO
    function filterByPrice(array){

       
        let filtered = array.filter((annuncio)=> Number(annuncio.price <= priceInput.value));

        return filtered;

    }

    priceInput.addEventListener('input', ()=>{

        incrementNumber.innerHTML = priceInput.value;

        globalFilter();

        
      

    });

   
    let wordInput = document.querySelector('#wordInput');

    // FILTRO PAROLA
    function filterByWord(array){

        let nome = wordInput.value;

        let filtered = array.filter((annuncio)=> annuncio.name.toLowerCase().includes(nome.toLowerCase()));

        return filtered;


    }

    wordInput.addEventListener('input', ()=>{

       globalFilter();

    });

    
    // FILTRO GLOBALE

function globalFilter (){

    let filteredByCategory = filterByCategory(data);

    let filteredByPrice = filterByPrice( filteredByCategory);

    let filteredByWord = filterByWord(filteredByPrice);
    

    showCards(filteredByWord);
    

}

 globalFilter();

})




