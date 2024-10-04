import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import PageNotFound from "./PageNotFound";

function Products(){
const [product, setProduct]=useState([])
const [productName, setProductName]=useState("")
const [filterProducts, setFilterProducts]=useState("")
useEffect(()=>{
    axios.get("https://dummyjson.com/products")
    .then((res)=>{
        setProduct(res.data.products)
    })
},[])

useEffect(()=>{
let productCopy=[...product]
let result=productCopy.filter((item,i)=>{
    if(item.title.toLowerCase().includes(productName.toLowerCase())==true){
        return true
    }
})
setFilterProducts(result)
},[productName])


function handleFilter(filterType){
  let productCopy=[...product]
if(filterType=="priceLessThan20"){
let result=productCopy.filter((item,i)=>{
  if(item.price<20){
    return item
  }
})
setFilterProducts(result)
}
else if(filterType=="priceMoreThan100"){
  let result=productCopy.filter((item,i)=>{
    if(item.price>100){
      return item
    }
  })
  setFilterProducts(result)
}
}
    return(
<>

<div style={{textAlign:"center"}} >
<h1>Products</h1>
<input 

value={productName}
onChange={(e)=>{setProductName(e.target.value)}}
placeholder="Search Products here" >
</input>

<br/>
<br/>
 
<button onClick={()=>{handleFilter("priceLessThan20")}}
type="button" className="btn btn-warning active filter-btn" data-bs-toggle="button" autocomplete="off" aria-pressed="true">Price Less Than 20$</button>

<button onClick={()=>{handleFilter("priceMoreThan100")}}
type="button" className="btn btn-warning active filter-btn" data-bs-toggle="button" autocomplete="off" aria-pressed="true">Price More than 100$</button>



</div>
<div className="container mt-5">
    {productName!="" && filterProducts.length=="" ? <PageNotFound/>:""}
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5 g-4">
{filterProducts.length==0 && productName=="" ? product.map((item,i)=>{
return <div class="col">
    <div class="card">
      <img src={item.thumbnail} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"><b>Title : </b>{item.title}</h5>
        <p class="card-text"><b>description : </b>{item.description}</p>
        <p class="card-text"><b>price : </b>{item.price}</p>
        <p class="card-text"><b>rating : </b>{item.rating}</p>
      </div>
    </div>
  </div>
    }): 
    filterProducts.map((item,i)=>{
        return <div class="col">
            <div class="card">
              <img src={item.thumbnail} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title"><b>Title : </b>{item.title}</h5>
                <p class="card-text"><b>description : </b>{item.description}</p>
                <p class="card-text"><b>price : </b>{item.price}</p>
                <p class="card-text"><b>rating : </b>{item.rating}</p>
              </div>
            </div>
          </div>
            })
    }
  
 
</div>
</div>
</>

    )
}

export default Products