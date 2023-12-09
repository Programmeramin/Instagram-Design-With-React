import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import Meta from "../../Components/Meta/Meta"
import "./Auth.scss";
import { useState } from "react";
import { toast } from "react-toastify";

const Auth = () => {

  const [input, setInput] = useState({

        moe : "",
        password : "",

  });

  const handleValueLogin = (e) =>{
    setInput((prevState) =>({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  };


 
  const handleInputValueLogin = (e) =>{
       e.preventDefault();

       //validation
       if(!input.moe || !input.password){
        e.preventDefault();
       }else{
        toast('You are login');
       }
  }


  const [border, setBorder] = useState({

    moe : true,
    password : true,

});


  const handleInputClick = (e) =>{
        if(e.target.value === ""){
          setBorder((prevState) =>({
            ...prevState,

            [e.target.name] : true
          }))
        }else{
          setBorder((prevState) =>({
            ...prevState,
            [e.target.name] : false
          }))
        }
  }


  return (

   
    <>
   
   <Meta title="Instagram"/>



     <div className="ins-auth-area">
        <div className="ins-auth-container">
            <div className="ins-auth-left">
              <Link>
              <img src="../public/inst.png" alt="" />
              </Link>
            </div>

            <div className="ins-auth-right">
                
                <div className="ins-auth-container-right">
                <div className="logo">
                    <img style={{width : "100%"}} src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="" />
                </div>
                <form className="instagram-form" onSubmit={handleInputValueLogin}>

                    <input className={border.moe ? "" : "border-color"} type="text" placeholder="Phone number, username, or email" name="moe" value={input.moe} onChange={handleValueLogin} onClick={handleInputClick}/>

                    <input className={border.password ? "" : "border-color"} type="text" placeholder="Password" name="password" value={input.password} onChange={handleValueLogin} onClick={handleInputClick}/>

                    <button>
                        Log in
                    </button>

                    <div className="form-border">
                    <div className="border"></div>
                    <div className="or">OR</div>
                    <div className="border"></div>
                    </div>

                    <div className="log-with-facebook">
                        <Link>
                        <AiFillFacebook />
                        <span>Log in with Facebook</span>
                        </Link>

                      <Link>Forgot password</Link>

                    </div>

                </form>

                </div>

                   <div className="dont-have-account">
                       <div className="have-an-account">
                       <span>Dont have an account?</span>
                    <Link to="/auth/signupemail">Sign up</Link>
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

         

        </div>
     </div>


       {/* <div className="inst-auth-footer">
        
          <ul>
            <li><Link>About</Link></li>
            <li><Link>Blog</Link></li>
            <li><Link>Jobs</Link></li>
            <li><Link>Help</Link></li>
            <li><Link>API</Link></li>
            <li><Link>Privacy</Link></li>
            <li><Link>Terms</Link></li>
            <li><Link>Locations</Link></li>
            <li><Link>Instagram Lite</Link></li>
            <li><Link>Threads</Link></li>
            <li><Link>Contact Uploading & Non-Users</Link></li>
            <li><Link>Meta Verified</Link></li>
           </ul>
          </div>
       */}
    </>
  )
}

export default Auth