
let ele =document.querySelectorAll('li');
console.log(ele);

ele.forEach(fuction(element){

    element.addEventListner('click',function(e){
        console.log("Item Clicked")
    })
});