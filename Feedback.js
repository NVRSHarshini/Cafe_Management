import React,{useState} from "react";

import feedback from "../images/feedback.jpg";
export default function Feedback()
{
      const [Fid,setFid]=useState("");
      const [CustId,setCustomerId]=useState("");
      const [rating,setRating]=useState("");

      const Feedback={
      CustId:CustId,
      rating:rating}
 function handleSubmit(event)
{
        event.preventDefault();
        fetch("https://localhost:44302/api/Feedback",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(Feedback),})
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
                            <img src={feedback} width="100" height="300" />
                                {/* <h3 class="text-success text-center border-bottom border-success p-3">Feedback</h3> */}
                            </div>
                        <form onSubmit={handleSubmit}>
                          <div class="mb-3 mt-2">
                                  <label for="CustId" class="form-label">CustomerId</label>
                                  <input type="text" Name="CustId" class="form-control border-success shadow-none " id="CustId" 
                                    value={CustId} onChange={(e) => setCustomerId(parseInt(e.target.value))}/>
                          </div>
                          <div class="mb-3 mt-2">
                                  <label for="rating" class="form-label">Rate Us!</label>
                                  <input type="text" Name="rating" class="form-control border-success shadow-none " id="rating" 
                                    value={rating} onChange={(e) => setRating(parseInt(e.target.value))}/>
                          </div>
                          
                          
                          <div class="row">
                                <div class="mt-3 text-center">
                                    <input type="submit"  name="Feedback" value="Give Rating" class="btn  btn-success border-light shadow-none w-25 mb-3"/>
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