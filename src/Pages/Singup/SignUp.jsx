import { AiFillFacebook } from "react-icons/ai";
import "./Signup.scss";
import { Link } from "react-router-dom";
import Meta from "../../Components/Meta/Meta";
import { useState } from "react";
import { toast } from "react-toastify";

Link

const SignUp = () => {

   const [input, setInput] = useState({
      
      first_name : "",
      moe : "",
      username : "",
      password : "",

   });

   const handleInputValue = (e) =>{
      setInput((prevState) =>({
         ...prevState,
         [e.target.name] : e.target.value,
      }))
   }

      const handleSignRegister = (e) =>{
         e.preventDefault();   

         //validation
         if(!input.first_name || !input.moe || !input.username || !input.password){
            e.preventDefault();
         }else{
            toast("Data Stable");
            
         }

      }

  return (
    <>
    
    <Meta title="Sign up . Instagram"/>

       <div className="ins-auth-sign">
          <div className="ins-auth-body">
            <div className="logo">
             
               <img style={{width : "100%"}} src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="" />

              <p>Sign up to see photos and videos from your friends.</p>
              
              <div className="log-with-facebook">
                        <Link>
                        <AiFillFacebook />
                        <span>Log in with Facebook</span>
                        </Link>
           
                    </div>
                 

             </div>


                
             <div className="form-border">
                    <div className="border"></div>
                    <div className="or">OR</div>
                    <div className="border"></div>
                    </div>

              <form className="form-signup" onSubmit={handleSignRegister}>
                  <input type="text" placeholder="Mobile Number or Email" name="moe" value={input.moe} onChange={handleInputValue}/>
                  <input type="text" placeholder="Full Name" name="first_name" value={input.first_name} onChange={handleInputValue}/>
                  <input type="text" placeholder="Username" name="username" value={input.username} onChange={handleInputValue}/>
                  <input type="text" placeholder="Password" name="password" value={input.password} onChange={handleInputValue}/>
                 
                 <div className="paragraph-sing">
                  <p>People who use our service may have uploaded your contact information to Instagram.<Link>Learn More</Link></p>
                  <p>By signing up, you agree to our <Link>Terms</Link>, <Link>Privacy Policy</Link> and <Link>Cookies Policy .</Link></p>
                 </div>

                 <div className="have-an-account">
                    
                         <button type="submit">Sign up</button>
                       </div>

                
              </form>

               
             

          </div>


          <div className="dont-have-account">
                       <div className="have-an-account">
                       <span>have an account?</span>
                    <Link to="/auth">Log in</Link>
                       </div>
                   </div>

          <div className="heading">
                       
                       Get the app.
                       
                    </div>

          <div className="get-the-app">
                   
                   <Link>
                  <img src="../public/google-play.png" alt="" />
                  </Link>

                  <Link>
                  <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" />
                  </Link>
              </div>
          
       </div>
       
 
    </>
  )
}

export default SignUp