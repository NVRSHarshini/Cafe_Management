import React,{useState} from "react";
import { MenuList } from "../data/data";
import ordersbackground from "../images/ordersbackground.jpg";
export default function Orders()
{
      const [OrderId,setOrderId]=useState("");
      const [CustomerId,setCustomerId]=useState("");
      const [ItemId,setItemId]=useState("");
      const[Price,setPrice]=useState("");
      const[Quantity,setQuantity]=useState("");
      const[TotalPrice,setTotalPrice]=useState("");
      
      const Order={
      CustomerId:CustomerId,
      ItemId:ItemId,
      Price:Price,
      Quantity:Quantity,
      TotalPrice:TotalPrice,};
      // const GetPriceFromMenu=()=>{
      //   return(MenuList.Price);
      // }
      const CalculateTotalPrice=()=>{
        //setPrice(GetPriceFromMenu());
        console.log("Price="+Price);
        return (Quantity*Price);
      }
     
 function handleSubmit(event)
{
        event.preventDefault();
        setTotalPrice(CalculateTotalPrice());
        console.log("TotalPrice="+TotalPrice);
        

        fetch("https://localhost:44302/api/Orders",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(Order),})
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          //window.location.href = '/login';
        })
        .catch((error) => {
          console.error("Error:", error);
          
        });
}
return(
  

<div class="container mt-5">

            <div class="row mx-auto mt-5">
                
                <div class="mx-auto col-md-6 mt-5 pt-4">
                    <div class="card mb-5 p-2  shadow rounded">
                        <div class="card-body mt-2">
                            <div class="row mb-3">
                            <img src={ordersbackground} width="100" height="300" />
                                <h3 class="text-success text-center border-bottom border-success p-3">Orders</h3>
                            </div>
                        <form onSubmit={handleSubmit}>
                          <div class="mb-3 mt-2">
                                  <label for="CustomerId" class="form-label">CustomerId</label>
                                  <input type="text" Name="CustomerId" class="form-control border-success shadow-none " id="CustomerId" 
                                    value={CustomerId} onChange={(e) => setCustomerId(parseInt(e.target.value))}/>
                          </div>
                          <div class="mb-3 mt-2">
                                  <label for="ItemId" class="form-label">ItemId</label>
                                  <input type="text" Name="ItemId" class="form-control border-success shadow-none " id="ItemId" 
                                    value={ItemId} onChange={(e) => setItemId(parseInt(e.target.value))}/>
                          </div>
                          <div class="mb-3 mt-2">
                                  <label for="Price" class="form-label">Price</label>
                                  <input type="text" readOnly="true" Name="Price" class="form-control border-success shadow-none " id="Price" 
                                    value={Price}
                                     onChange={(e) => setPrice(parseInt(e.target.value))}
                                     />
                          </div>
                          <div class="mb-3 mt-2">
                                  <label for="Quantity" class="form-label">Quantity</label>
                                  <input type="text" Name="Price" class="form-control border-success shadow-none " id="Quantity" 
                                    value={Quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}/>
                          </div>
                          <div class="mb-3 mt-2">
                                  <label for="TotalPrice" class="form-label">TotalAmount</label>
                                  <input type="text" readOnly="true" Name="TotalPrice" class="form-control border-success shadow-none " id="TotalPrice" 
                                    value={TotalPrice}
                                    // onChange={(e) => setTotalPrice(parseInt(e.target.value))}
                                    />
                          </div>
                          See the Menu <a href="/menu" class="text-decoration-none mb-3 text-success fw-bold "> MENU</a>
                          

                          <div class="row">
                                <div class="mt-3 text-center">
                                    <input type="submit"  name="Order" value="Order" class="btn  btn-success border-light shadow-none w-25 mb-3"/>
                                    </div>
                                </div>
                                Go back to Home <a href="/" class="text-decoration-none mb-3 text-success fw-bold "> HOME</a>
                          </form>
                                
                            </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      
                    

);}