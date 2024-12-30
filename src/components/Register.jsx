import React from 'react';
import './Register.css';


function Register(){
    return(
        <form action="action_page">
        <div className="Register">
            <h1>Register</h1>
            <p> please fill the form to create account</p>
            <hr>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required></input>

            <label for="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required></input>

            <label for="repeat password"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="repeat password" required></input>

            </hr>
            <p>
                By creating an account, you agree to our <a href="#">Terms and Conditions</a>
            </p>
            <button type="submit" class="registerbtn">Register</button>

        </div>

        <div className="container_signin">
            <p>Already have an account?<a href="#">Sign in</a></p>

        </div>
        </form>
    ) 
    
}
export default Register;