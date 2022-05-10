var bagArr = JSON.parse(localStorage.getItem("bag"));
var product=document.querySelector("#product");

display(bagArr)
console.log(bagArr)
function display(data){
    product.innerHTML=null;

    data.forEach(function(element){

   var item = document.createElement("div")
   var cardimg=document.createElement("div");
   var carddata=document.createElement("div");


   var img=document.createElement("img");
   img.src=element.image_url;

    
   var name=document.createElement("h2");
   name.textContent=element.name;

   var category=document.createElement("h3");
   category.textContent=element.category;

   var price=document.createElement("h4");
   price.textContent=element.price;

//    var button=document.createElement("button");
//    button.innerText="Move to bag";
//    button.addEventListener("click",function(){
//        bagFun(element);
//    })
   
   cardimg.append(img)
   carddata.append(name,category,price);
   item.append(cardimg,carddata);
   product.append(item)
});
    var sum = 0
    for (var i=0; i<bagArr.length; i++)
    {
        sum=sum+bagArr[i].price
    }
    document.querySelector("#amount").innerText=sum
    document.querySelector("#MRP").innerText=sum

    document.querySelector("#placingOrder").addEventListener("click",function(){
        payment()
    })

    function payment(){
        
    }

 
}


