import React, { useState } from "react";
function Registration() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  //const[confirmpassword,setConfirmPassword]=useState('');
  const[errors,setErrors]=useState({});
  const[Phone,setPhone]=useState(''); 
  const user = {
    Name: Name,
    Email: Email,
    Password: Password,
    Phone:Phone,
  };
  function handleSubmit(event) {
    event.preventDefault();
    console.log("HandleSubmitCalled");  
    // create an object with the user's details
    
  
    // validate the user's input
    const errors = validate(user);
  
    if (Object.keys(errors).length === 0) {
        console.log("NoError in validation");
      // if there are no validation errors, clear the form and submit the data
      setName("");
      setEmail("");
      setPassword("");
      //setConfirmPassword("");
      setPhone("");
  
      fetch("https://localhost:44302/api/Customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          window.location.href = '/login';
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      // if there are validation errors, set the errors state variable
      setErrors(errors);
    }
  }
  
  function validate(user) {
    let errors = {};
  
    // validate name
    if (!user.Name.trim()) {
      errors.Name = "Name is required";
    }
  
    // validate email
    if (!user.Email.trim()) {
      errors.Email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.Email)) {
      errors.Email = "Email is invalid";
    }
  
    // validate password
    if (!user.Password) {
      errors.Password = "Password is required";
    } else if (user.Password.length < 8) {
      errors.Password = "Password must be at least 8 characters";
    }
  
    // validate confirm password
    // if (!user.confirmpassword) {
    //   errors.confirmpassword = "Confirm Password is required";
    // } else if (user.confirmpassword !== user.password) {
    //   errors.confirmpassword = "Passwords do not match";
    // }

    if(!user.Phone){
        errors.Phone = "phone number is required";
    }else if(user.Phone.length < 9){
        errors.Phone = "phone number must be ten digits";
    }
  
    return errors;
  }
  

  return (
    <div>
        <div class="container mt-5">
            <div class="row mx-auto mt-5">
                
                <div class="mx-auto col-md-6 mt-5 pt-4">
                    <div class="card mb-5 p-2  shadow rounded">
                        <div class="card-body mt-2">
                            <div class="row mb-3">
                                
                                <h3 class="text-success text-center border-bottom border-success p-3">Registration</h3>
                            </div>
                        <form onSubmit={handleSubmit}>
                          <div class="mb-3 mt-2">
                                  <label for="Name" class="form-label">Fullname</label>
                                  <input type="text" Name="Name" class="form-control border-success shadow-none " id="Name" 
                                    value={Name} onChange={(e) => setName(e.target.value)}/>
                                   {errors.Name &&
                                   <span className="text-danger">{errors.Name}</span>}
                                  
                                </div>

                                <div class="mb-3 mt-2">
                                  <label for="Email" class="form-label">Email address</label>
                                  <input type="Email" Name="Email" class="form-control border-success shadow-none " id="Email" aria-describedby="EmailHelp"
                                   value={Email} onChange={(e) => setEmail(e.target.value)} />
                                  {errors.Email &&
                                  <span className="text-danger">{errors.Email}</span>}
                                  
                                </div>
                                <div class="mb-3 ">
                                  <label for="Password" class="form-label">Password</label>
                                  <input type="Password" name="Password" class="form-control border-success shadow-none " id="Password"
                                   value={Password} onChange={(e) => setPassword(e.target.value)} />
                                  {errors.Password &&
                                  <span className="text-danger">{errors.Password}</span>}
                                </div>
                                {/* <div class="mb-3 ">
                                    <label for="confirm_Password" class="form-label">Confirm_Password</label>
                                    <input type="password" name="confirm_password" class="form-control border-success shadow-none " id="Confirm_Password"
                                    value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                    {errors.confirmpassword &&
                                    <span className="text-danger">{errors.confirmpassword}</span>}
                                  </div> */}

                                  <div class="mb-3 ">
                                    <label for="phone number" class="form-label">Phone Number</label>
                                    <input type="number" name="Phone" class="form-control border-success shadow-none " id="Phone"
                                    value={Phone} onChange={(e) => setPhone(parseInt(e.target.value))} />
                                    {errors.Phone &&
                                    <span className="text-danger">{errors.Phone_no}</span>}
                                  </div>
                                 
                                  Already have an account <a href="/login" class="text-decoration-none mb-3 text-success fw-bold ">Login..</a>

                                
                                <div class="row">
                                <div class="mt-3 text-center">
                                    <input type="submit"  name="register" value="Register" class="btn  btn-success border-light shadow-none w-25 mb-3"/>
                                    </div>
                                </div>
                          </form>
                         </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
  );
}

export default Registration;