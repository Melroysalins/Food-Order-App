let mycartarray =JSON.parse(localStorage.getItem('cart')) || []



let cartItemDisplayDiv = document.querySelector('.two-section');

let itemcount = document.querySelectorAll('.item-count-show');

let pricecount = document.querySelectorAll('.fprice')

let AllspanCount = document.querySelectorAll('.second-section-div span')

let totalamount = document.querySelector('.totalamount .total')


let amount_Section_Element = document.querySelector('.amount-section-div')



let placeOrderButton = document.querySelector('.placeorder')

let cartDisplayFunction = () =>{
    return cartItemDisplayDiv.innerHTML = (mycartarray.map((x)=>{
        let{id,price,name} =x;
        let search = mycartarray.find((x)=>x.id === id)

        return ` <div class="Main">

        <div class="food11">

            <div class="Food-Image">
                <img src="${x.itemimage}" alt="">
            </div>

            <div class="Food-Name">
             <span class="Fname">${name}</span>  
             <span class="fprice" id=${price}> RS ${search.price * search.item}</span> 
            </div>

            <div class="button-div-section">
                <button class="minus-item" onclick="decrement(${id})">-</button>
              
             <span class="item-count-show" id=${id}>${search.item}</span>
             <button class="add-item" onclick="increment(${id})">+</button> 
             
            </div>
        </div>
    </div>`

    }).join(''))
}



let increment = (id) => {

   
    let selectedid = id;

   
   
    
    let search = mycartarray.find((x)=>x.id === selectedid);

    if(search){
        search.item++;
       
    }
    update(selectedid)
    cartDisplayFunction()
    TotalBill()
  localStorage.setItem('cart',JSON.stringify(mycartarray))

 

}









let decrement = (id) =>{
    
    

    let selectedid = id
   
    
    let search = mycartarray.find((x)=>x.id === selectedid);

   if(search.item ==0 ) return;
    else if(search === undefined) return;
    else{
        search.item -=1;
      
        
       
    }

    update(selectedid)

    mycartarray = mycartarray.filter((x)=>x.item !== 0)
    cartDisplayFunction()
    TotalBill()
    
    localStorage.setItem('cart',JSON.stringify(mycartarray))
    
    
}







let update = (id) =>{
    
    let search = mycartarray.find((x)=>x.id === id)

    
    document.getElementById(id).innerHTML = search.item;
   

    
    localStorage.setItem('cart',JSON.stringify(mycartarray))
    

}
cartDisplayFunction()




//total items information display for amount calculation;

let TotalBill = () =>{
    if(mycartarray.length !==0) {

        let amount = mycartarray.map((x)=>{
            let {item , id } = x;
           return item * x.price;
        }).reduce((x,y)=>{
            return x + y;
        })

        totalamount.innerHTML = amount;
    }
   
   
}




TotalBill()

let HistoryArray = JSON.parse(localStorage.getItem('history')) || []

let PlaceOrderFunction = () =>{
    let date = new Date();
    let currentDate = date.getDate();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

    console.log(currentDate + " " + currentMonth + "  " + currentYear);

    window.location.href = " OrderDeliverySection.html"

   mycartarray.map((x)=>{
    HistoryArray.push(x)
   })
   

   localStorage.setItem('history',JSON.stringify(HistoryArray))
   localStorage.removeItem('cart')
}



placeOrderButton.addEventListener('click',PlaceOrderFunction);








