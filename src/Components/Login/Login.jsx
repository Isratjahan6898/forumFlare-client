import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
  const {user, signIn}= useContext(AuthContext);
  console.log(signIn);
    return (
        <div className="mx-[200px] my-[60px]">
            <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co/gjyZv67/pexels-kampus-8190803.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
   

<div>

    
    <div>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" className="input text-black input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" className="input text-black input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-teal-600 border-0 text-white font-bold">Join Us</button>
        </div>
      </form>

      <div>
        <h1>Continue With</h1>
        <button><FcGoogle className="text-4xl" /></button>
      </div>
      <div>You have not account plz <span className="text-teal-400 font-bold"><Link to='/register'>Register</Link></span></div>
    </div>
 
</div>


    </div>
  </div>
</div>
        </div>
    );
};

export default Login;