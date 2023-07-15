let MyHistoryArray = JSON.parse(localStorage.getItem('history')) || [];

let Banner = document.querySelector('.Banner h3');

let OnTime = document.querySelector('.onTimeD')

let ArrivingTime = document.querySelector('.arriving');

let ontimediv = document.querySelector('.ontime-div')


let orderContainner = document.querySelector('.order-section-delivery-display')

let nextone = document.getElementById('next');

ontimediv.style.display='none';

document.getElementById('orderdelivered').style.display='none'

let RestaurantOrderAccept = () =>{
    
   setTimeout (()=>{
    Banner.style.display  ='none'
   
    nextone.style.display ='block'
    ontimediv.style.display ='flex'

    if ('Notification' in window) {
        // Request permission for displaying notifications
        Notification.requestPermission()
          .then(permission => {
            if (permission === 'granted') {
              // Create and show the notification
              const notification = new Notification('Accepted Order', {
                body: 'Your order has been accepted!',
               // icon: 'path/to/notification-icon.png' // Replace with your own icon path
              });
            }
          })
          .catch(error => {
            console.error('Error while requesting notification permission:', error);
          });
      }
   },9000)
   
    
   
    
}


RestaurantOrderAccept()


let OrderRepeatDisplay = () =>{
   
    return orderContainner.innerHTML = (MyHistoryArray.map((x)=>{
        let {id,item,name,itemimage} = x;
        return `<div class="ietm">
        <img src="${itemimage}">
        <span>${name}</span>
        <span class="items-q">${item}</span>
      </div>`
    }).join(''))
}


let OrderDelivery = () =>{
    setTimeout(()=>{
        nextone.style.display ='none'
        Banner.style.display  ='none'
        ontimediv.style.display ='none'
        document.getElementById('orderdelivered').style.display='block'
        
        
        
       },13000)

       setTimeout (()=>{
        window.location.replace('Mainpage.html')

       },22000)
}

OrderRepeatDisplay()
OrderDelivery()
console.log(MyHistoryArray)




