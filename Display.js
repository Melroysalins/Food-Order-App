let FoodDisplay = document.querySelector('.main-page-display');

let SelectedOne = JSON.parse(localStorage.getItem('selected'));

let direction_Bookmark = document.querySelectorAll('.direction_bookmark_div')

let menushow = document.querySelector('.menu-div-food-items')

let element = SelectedOne[SelectedOne.length-1];

let addcart = document.querySelectorAll('.menu-div-food-items button')
let ary = []
let x = basket.find(x => x.id === Number(element))
 
ary.push(x);

let popup = document.querySelector('.pop-up-div')
let cart_Array = JSON.parse(localStorage.getItem('cart')) || [];

let BookmarkedArray = JSON.parse(localStorage.getItem('bookmark')) || [];


let BookMarkButton = document.querySelector('.bookmark')


function MainDisplay () {
       
        return FoodDisplay.innerHTML = (ary.map((x)=>{
          let search =  BookmarkedArray.find((y)=>y.id === x.id )
            return `
            <div class="imag-div-display">
            <div class="grid1">
                <img src="${x.image}" alt="">
            </div>
            <div class="grid2">
                <img src="${x.image1}" alt="">
                <img src="${x.image2}" alt="">
            </div>
            <div class="grid3">
                <img src="${x.image3}" alt="">
            </div>
           
        </div>
    
        <div class="Restaurant-information-section">
            <div class="names-section">
            <h2>${x.name}</h2>
            <span>${x.rating}<i class="bi bi-star-fill"></i></span>
            </div>
            <div class="subsection-display">
               ${x.Sname}
            </div>
            <div class="location">
               ${x.location}  <span>open Now 10:57am – 10:59pm (Today)</span>
            </div>
        </div>
        <div class="direction_bookmark_div" >
    <button class="direction" onclick="DirectionMap(${x.id})"><svg xmlns="http://www.w3.org/2000/svg" fill="#EF4F5F" width="16" height="16" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 kMNrPk"><title>direction-line</title><path d="M19.2 8.44l-7.22-7.22c-0.52-0.48-1.2-0.8-1.98-0.8s-1.46 0.32-1.98 0.8v0l-7.2 7.22c-0.52 0.5-0.82 1.2-0.82 1.98s0.3 1.46 0.82 1.98l7.2 7.2c0.5 0.52 1.2 0.82 1.98 0.82s1.48-0.3 1.98-0.82l7.22-7.2c0.5-0.52 0.8-1.22 0.8-1.98s-0.3-1.48-0.8-1.98v0zM18.16 11.38l-7.2 7.2c-0.24 0.24-0.58 0.38-0.94 0.38s-0.72-0.14-0.96-0.38v0l-7.22-7.2c-0.24-0.24-0.4-0.58-0.4-0.96s0.16-0.7 0.4-0.94v0l7.2-7.22c0.24-0.24 0.58-0.4 0.96-0.4s0.7 0.16 0.94 0.4l7.2 7.2c0.24 0.24 0.4 0.58 0.4 0.94s-0.16 0.72-0.4 0.96v0zM12.2 6.96c-0.040-0.040-0.080-0.060-0.12-0.060-0.1 0-0.18 0.080-0.18 0.18 0 0 0 0 0 0v0 1.66h-3.56c-1.18 0-2.14 0.96-2.14 2.16v0 2.38c0 0.26 0.2 0.46 0.46 0.46v0h0.48c0.26 0 0.48-0.2 0.48-0.46v0-2.38c0-0.4 0.32-0.72 0.72-0.72h3.56v1.66c0 0 0 0 0 0 0 0.1 0.080 0.18 0.18 0.18 0.040 0 0.080-0.020 0.12-0.060v0l2.34-2.32c0.040-0.040 0.080-0.1 0.080-0.18s-0.040-0.12-0.080-0.16v0z"></path></svg>Direction</button>  
    <button class="bookmark" onclick="BookMarkFunction(${x.id})">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#FF7E8B" width="16" height="16" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 kMNrPk"><title>bookmark-add</title><path d="M12.38 7.8h-1.66v-1.68c0-0.26-0.22-0.46-0.48-0.46v0h-0.48c-0.26 0-0.48 0.2-0.48 0.46v0 1.68h-1.66c-0.26 0-0.48 0.2-0.48 0.48v0 0.46c0 0.28 0.22 0.48 0.48 0.48v0h1.66v1.68c0 0.26 0.22 0.46 0.48 0.46v0h0.48c0.26 0 0.48-0.2 0.48-0.46v0-1.68h1.66c0.26 0 0.48-0.2 0.48-0.48v0-0.46c0-0.28-0.22-0.48-0.48-0.48v0zM15.020 0.9h-10.020c-1.060 0-1.92 0.84-1.92 1.9v0 16.42c0 0.28 0.16 0.5 0.36 0.62v0c0.12 0.060 0.24 0.1 0.38 0.1s0.24-0.040 0.36-0.1v0l5.82-3.52 5.82 3.52c0.1 0.060 0.24 0.1 0.38 0.1v0c0 0 0 0 0 0 0.12 0 0.24-0.040 0.34-0.1v0c0.22-0.12 0.36-0.34 0.36-0.62v-16.46c-0.020-1.040-0.86-1.86-1.88-1.86v0zM15.48 17.96l-5.1-3.080c-0.12-0.060-0.24-0.1-0.38-0.1s-0.26 0.040-0.38 0.1v0l-5.1 3.080v-15.24c0.040-0.22 0.22-0.4 0.46-0.4 0 0 0 0 0.020 0v0h10.020c0 0 0 0 0 0 0.24 0 0.44 0.2 0.46 0.44v0z"></path></svg>
      ${search === undefined ? 'Bookmark' : 'Bookmarked'}
    </button> 
   </div>
            `

        }).join(''))
        
}










MainDisplay()

console.log(ary)

function menudisplay () {

   // Map through the array object and create HTML elements for each dish
const dishesHTML = ary.map((restaurant) => {
    const dishes = Object.values(restaurant.Dishes).flatMap((dishArray) => {
      return dishArray.map((dish) => `
        <div class="food-containner" id='${dish.itemid}'>
        <div class="food-image-display">
          <img src="${dish.image}" alt="">
        </div>
        <div class="foodname" id=${dish.itemid}>
          <span>${dish.names}</span>
          <span class="price-amount">Price: ${dish.price}</span>
          <span class="item-desc">${dish.desc || ''}</span>
          <button class="addcart" onclick="addingItemtocart('${dish.itemid}', '${dish.names}' , '${dish.price}', '${dish.image}')">Add</button>
        </div></div>
      `);
    });
  
    return dishes.join('');
  });
  
 let x= document.querySelector('.addcart');
 
    menushow.innerHTML = dishesHTML.join('')

    
}


menudisplay()




let addingItemtocart = (id,names,price,image) =>{
    let selectedID = Number(id);
   let itemname = names;
   let itemprice = Number(price);
   let itemimage =image

let search = cart_Array.find((x) => x.id === selectedID);



if(!search){
    cart_Array.push({
        item : 1,
        name : itemname,
        price : itemprice,
        itemimage : image,
        id : selectedID
    })
    if(cart_Array.length >=1){
        popup.style.display = ' block'
    }
}
else{
    alert('item already added to cart')
}

console.log(search)
   


localStorage.setItem('cart',JSON.stringify(cart_Array))

  console.log(typeof(cart_Array))
   
  console.log(cart_Array)
}





let BookMarkFunction = (id) =>{

   

  

  let selectedid = id;

  let search = BookmarkedArray.find((x)=>x.id === selectedid) 

  if(search === undefined){
  BookmarkedArray.push({
    id : selectedid 
  });
  }
  else{
    return;
  }
  MainDisplay()
  console.log(BookmarkedArray)

  localStorage.setItem('bookmark',JSON.stringify(BookmarkedArray))




    
}



let DirectionMap = (id) =>{

}