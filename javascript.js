
let mainPageDisplay = document.querySelector('.items-div-food');

let Ratingfilter = document.querySelector('.ratingFilter');

let pureVeg = document.querySelector('#pureveg'),

filtersection = document.querySelectorAll('.filter-section li')

let xmark = document.querySelector('.Filtername i')

let filterCheckBoxDiv =  document.querySelectorAll('.section2 frst');

let applybutton = document.querySelector('.apply');


let addedFilter = document.querySelector('.added-filters ')

let addFilterUL = document.querySelector('.added-filters ul ')

let alldata = document.getElementsByClassName('.items-div-food div')


//let FoodDisplay = document.querySelector('.Food-display')


let basket = JSON.parse(localStorage.getItem('mydata')) || []

let basket2 = JSON.parse(localStorage.getItem('mydata')) || []


let ProFile = document.querySelector('.profile-pic')


let searchInput = document.querySelector('.search-bar-dvi input')


let display = () => {

  return mainPageDisplay.innerHTML = basket.map((x) => {
       return `<div class="food-tem1" id=${x.id}>

      <div class="front-page">
       <img src="${x.image}" alt="">  
      </div>   
      <div class="Restaurant-name-div">
     <span class="restaturantname">${x.name}</span>
     <span class="rating">${x.rating}<i class="bi bi-star-fill"></i></span>
      </div>
      <div class="dishes-show">
       <span>${x. Sname}</span> 
       <span id="delivery"> ${x.DeliveryTime} min</span> 
      </div>

     </div>`
   
        
        }).join('')
    
   
    }







 let Rating4 =() =>{
    return mainPageDisplay.innerHTML = (Restaurant_Information.map((x)=>{
        if(x.rating >=4)
        return `<div class="food-tem1" id=${x.id}>

        <div class="front-page">
         <img src="${x.image}" alt="">  
        </div>   
        <div class="Restaurant-name-div">
       <span class="restaturantname">${x.name}</span>
       <span class="rating">${x.rating}<i class="bi bi-star-fill"></i></span>
        </div>
        <div class="dishes-show">
         <span>${x. Sname}</span> 
         <span id="delivery"> ${x. DeliveryTime} min</span> 
        </div>

       </div>`
    }).join(''))
}

let PureVegDisplay = () => {
   return mainPageDisplay.innerHTML = (basket.map((x)=>{
    if(x.veg === 'veg')
    return  ` <div class="food-">
    <div class="food-tem1" id=${x.id}>

    <div class="front-page">
     <img src="${x.image}" alt="">  
    </div>   
    <div class="Restaurant-name-div">
   <span class="restaturantname">${x.name}</span>
   <span class="rating">${x.rating}<i class="bi bi-star-fill"></i></span>
    </div>
    <div class="dishes-show">
     <span>${x. Sname}</span> 
     <span id="delivery"> ${x. DeliveryTime} min</span> 
    </div></div>

   </div>`
   }).join(''))
  }
  
  
  
  
  
  
  


let pureVegSorting = () =>{
    return mainPageDisplay.innerHTML = (PureVegRestaurant.map((x)=>{
        if(x.rating >=4)
        return `<div class="food-tem1" id=${x.id}>

        <div class="front-page">
         <img src="${x.image}" alt="">  
        </div>   
        <div class="Restaurant-name-div">
       <span class="restaturantname">${x.name}</span>
       <span class="rating">${x.rating}<i class="bi bi-star-fill"></i></span>
        </div>
        <div class="dishes-show">
         <span>${x. Sname}</span> 
         <span id="delivery"> ${x. DeliveryTime} min</span> 
        </div>

       </div>`
    }).join(''))
}



filtersection.forEach(item =>{
    
    item.addEventListener('click',()=>{
        if(item.id ==='rating4' || item.id==="pureveg" || item.id === 'sortbydeliverytime'){
            item.classList.toggle('selected')
        }
        
        if(item.id ==='rating4' && item.classList.contains('selected')) {
           
            Rating4()
            let data = document.querySelectorAll('.items-div-food .food-tem1');
            console.log(data)
            data.forEach(item=>{
                item.addEventListener('click',()=>{
                   handleclick(item.id)
                })
            })
        }
       
        
      else  if(item.id==="pureveg" && item.classList.contains('selected')) {
        PureVegDisplay() 
        let data = document.querySelectorAll('.items-div-food .food-  .food-tem1');
        console.log(data)
        data.forEach(item=>{
            item.addEventListener('click',()=>{
               handleclick(item.id)
            })
        })
        }
        

        // else if(item.id ==='rating4' && item.id==="pureveg" && item.classList.contains('selected')){
        //     pureVegSorting()
        //     PureVegDisplay()
        // }
      
      
      else if(item.id === 'sortbydeliverytime' && item.classList.contains('selected')){
        SortByDeliveryTime()
        let data = document.querySelectorAll('.items-div-food .food-  .food-tem1');
        console.log(data)
        data.forEach(item=>{
            item.addEventListener('click',()=>{
               handleclick(item.id)
            })
        })
       }
      else{
        display()
      }
      if(!item.classList.contains('selected')){
        display()
      }

    })
    
   
})





xmark.addEventListener('click',()=>{
    document.querySelector('.Filter-options-div').style.display='none';
})


let SortByDeliveryTime = () =>{
    const result = basket2.sort((a,b)=>{
        return a.DeliveryTime - b.DeliveryTime;
    })

    return mainPageDisplay.innerHTML = (result.map((x)=>{

        return  ` <div class="food-">
    <div class="food-tem1" id=${x.id}>

    <div class="front-page">
     <img src="${x.image}" alt="">  
    </div>   
    <div class="Restaurant-name-div">
   <span class="restaturantname">${x.name}</span>
   <span class="rating">${x.rating}<i class="bi bi-star-fill"></i></span>
    </div>
    <div class="dishes-show">
     <span>${x. Sname}</span> 
     <span id="delivery"> ${x. DeliveryTime} min</span> 
    </div></div>

   </div>`
    }).join(''))
    
}


















display();






let all =document.querySelectorAll('.items-div-food .food-tem1');



all.forEach(item=>{
    
    item.addEventListener('click',()=>{
       handleclick(item.id)
    })
 
})


let arr = JSON.parse(localStorage.getItem('selected')) || []

function handleclick(element) {
    
    window.location.href ='logodisplay.html'
arr.push(element)
localStorage.setItem('selected',JSON.stringify(arr));


    
}


searchInput.addEventListener('keyup',(e)=>{
    let ans = basket.map((x)=>x.name === (e.target.value).toString())
   
})






