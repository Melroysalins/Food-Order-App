
let section1 = document.querySelectorAll('.section1 div')

let section2 = document.querySelector('.section2');


let ExtractArray = JSON.parse(localStorage.getItem('bookmark')) || [];

let ExtractArray2 = JSON.parse(localStorage.getItem('mydata')) || [];


let BookedArray =JSON.parse(localStorage.getItem('BookedArrayPage')) || [];


let bookmarkdiv = document.getElementById('bookmark');

let orderhistory = document.getElementById('orderHistory');

let itemcontainner = document.querySelector('.items-div-food')


let HistoryArray = JSON.parse(localStorage.getItem('history'))


let orderhistorycontainner = document.querySelector('.Order-containner')


let PushFunction = () =>{

    ExtractArray.forEach(item => {
        const matchingItem = ExtractArray2.find(extractItem => extractItem.id === item.id);
        if (matchingItem && !BookedArray.some(bookedItem => bookedItem.id === item.id)) {
          const { id, name, rating, image, Sname } = matchingItem;
          BookedArray.push({ id, name, rating, image, Sname });
        }
        localStorage.setItem('BookedArrayPage' , JSON.stringify(BookedArray))
     
      });
      
        
       

}

PushFunction()


orderhistory.addEventListener('click',()=>{
  itemcontainner.style.display ='none'
  orderhistorycontainner.style.display='grid'


  orderhistory.classList.add('selected');
  bookmarkdiv.classList.remove('selected')

  return orderhistorycontainner.innerHTML = (HistoryArray.map((x)=>{
    return `<div class="item-1">
    <img src="${x.itemimage}">
    <span>${x.name}</span>
  </div>`
  }).join(''))
})







bookmarkdiv.addEventListener('click',()=>{
  bookmarkdiv.classList.add('selected')
  orderhistory.classList.remove('selected');
  orderhistorycontainner.style.display='none'
  itemcontainner.style.display='grid'

  return itemcontainner.innerHTML = (BookedArray.map((x)=>{
    return `<div class="food-tem1" id=${x.id}>

    <div class="front-page">
     <img src="${x.image}" alt="">  
    </div>   
    <div class="Restaurant-name-div">
   <span class="restaturantname">${x.name}</span>
   <span class="rating">${x.rating}<i class="bi bi-star-fill"></i></span>
    </div>
    <div class="dishes-show">
     <span>${x.Sname}</span> 
     
    </div>

   </div>`
  }).join(''))
})

















console.log(BookedArray)


console.log(HistoryArray)