// get the placeholders
let results = document.getElementById('results')
let search = document.getElementById('search')

var label=document.createElement("label");
label.innerHTML="Enter the brand name:"
label.setAttribute("class","brand");

var br=document.createElement("br");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");

var br1=document.createElement("br");

var button=document.createElement("button");
button.addEventListener("click",foo);
button.setAttribute("class","btn btn-primary");
button.innerHTML="Search";

// append all elements as child in the search placeholder
// because appendChild will append one by one
search.appendChild(label);
search.appendChild(br)
search.appendChild(input)
search.appendChild(br1)
search.appendChild(button)

async function foo(){
    try{let cc=document.getElementById("text").value;
    let res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${cc}`);
    let data=await res.json();
    console.log(data);
    // clear results placeholders everytime user searches 
    // so that any old results will be cleared & new results can be appended
    results.innerHTML = ''
    for(var i=0;i<data.length;i++){
        var ele=document.createElement("div")
        ele.innerHTML=`<div class="row" >
        <img src="${data[i].image_link}" class="col-md-3" alt="Image not available">
          <p class="col-md-9">
          Name: ${data[i].name}<br>
          Brand: ${data[i].brand}<br>
          Price: ${data[i].price}<br>
          Description: ${data[i].description}<br>
          <a href="${data[i].product_link}" class="btn btn-light">Product link</a></p>
          
        </div>`
        
        // append new results
        results.appendChild(ele);
    }
       } catch{
    console.log(error)
    }
        

    

}