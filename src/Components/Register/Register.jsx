import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

import axios from "axios";


// const image_hosting_key = import.meta.env.VITE_API_IMAGE_HOSTING;
// const image_hosting_api= `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const image_hosting_key = import.meta.env.VITE_API_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const Register = () => {
  // const axiosCommon= useAxiosCommon();

  const {creacteUser, updateUserProfile,  signInWithGoogle, user }= useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const location= useLocation();
  const from = location.state?.from?.pathname || '/'
 
  const { register, handleSubmit, reset} = useForm();
  const onSubmit =async (data) => {
    console.log(data);

    
    const formData = new FormData();
      formData.append('image', data.image[0]); // Assuming 'image' is the name of your file input field

      // Upload image to imgbb
      const res = await axios.post(image_hosting_api, formData);
      
      console.log('Image URL:', res.data.data.display_url);

      const imageUrl = res.data.data.display_url;

      creacteUser(data.email, data.password)
      .then(result => {
          const user = result.user;
          console.log(user);
  
          updateUserProfile(data.name, imageUrl)
          .then(() => {
              console.log('user update info');
              
              // Prepare user data to save in database
              const savedUser = {
                  name: data.name,
                  email: data.email,
                  image: imageUrl,
                  role: 'user',
                  badge: 'Bronze Badge'
              };
  
              // Send user data to the server
              axios.post('http://localhost:5000/users', savedUser)
              .then(response => {
                  console.log('User saved:', response.data);
                  reset();
                  Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "user registered successfully",
                      showConfirmButton: false,
                      timer: 1500
                  });
              })
              .catch(error => {
                  console.error('Error saving user:', error);
              });
  
              navigate(from, { replace: true });
          })
          .catch(error => {
              console.log(error);
          });
      })
      .catch(error => {
          console.error('Error creating user:', error);
      });
  }

  const handleGoogleLogin = ()=>{
     signInWithGoogle()
     .then(result=>{
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "user register successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from, {replace: true})
     }) 
     .catch(error=>console.log(error))   
  }
    return (
        <div>
            <div className="lg:mx-[200px] my-[60px]">
            <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co/tZ18Jh4/pexels-olly-3823542.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
   

<div>

    
    <div>
      <form
      onSubmit={handleSubmit(onSubmit)}
      
      className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="text" name="name" {...register("name")} placeholder="Your name" className="input text-black input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Photo URL</span>
          </label>
          {/* <input type="text" name="photo" {...register("photo")} placeholder="photo url" className="input text-black input-bordered" required /> */}

          <input type="file" name="photo" {...register("image")} className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" name="email" {...register("email")} placeholder="email" className="input text-black input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" name="password" {...register("password")} placeholder="password" className="input text-black input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-teal-600 border-0 text-white font-bold">Register</button>
        </div>
      </form>

      <div>
        <h1>Continue With</h1>
        <button><FcGoogle onClick={handleGoogleLogin} className="text-4xl" /></button>
      </div>
      <div>If you have already account plz <span className="text-teal-400 font-bold"><Link to='/login'>Join Us</Link></span></div>
    </div>
 
</div>


    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Register;