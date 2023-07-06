import React,{useState,useEffect} from "react";

const Products =()=>{ [Products,setProducts] = useState([]);
    useEffect(()=>{

},[])

const getProducts = async()=>{
    try{
        const response = await fetch('https://dummyjson.com/products')
        const result = await response.json();
        setProducts(result):
    }
    catch (error){
     console.log
    }
}


    return{
      
       
    }
}

export default Products;