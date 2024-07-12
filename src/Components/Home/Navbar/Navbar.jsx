
import { useContext } from "react";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {

  const {user, logOut}= useContext(AuthContext);
  console.log(user);

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
    return (
        <div className="mt-[50px] mx-[50px]">
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
     <Link to='/'> <p className="mr-[20px] font-bold text-teal-600 "><a>Home</a></p></Link>
     
      <p className="mr-[20px] font-bold text-teal-600 mt-[16px]"><a>Membership</a></p>
      <button className=" bg-inherit border-none">
       <IoMdNotifications className='text-2xl mr-[20px] mt-[16px] bg-inherit' />
      
       </button>


       {
        user ?
        <>
        <div className="dropdown">
 <div  tabIndex={0} role="button">
 <img src={user.
      photoURL}  alt="Tailwind"   className='rounded-full w-[30px] h-[30px]' />
 </div>
 <ul  tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box" >
 <p className=""> <button onClick={handleLogOut} className=' bg-inherit font-bold text-teal-600'>LogOut</button></p>
 <Link to='/deshboard'><p className="mt-[16px] mr-[20px]">desboard</p></Link>

 </ul>

</div>
        </>
        :
        <>
        <Link to='/login'>
        <button className=" mr-[150px] bg-inherit font-bold my-[16px] text-teal-600">Join Us</button>
        </Link>
        </>
       }
      

        
      </ul>
    </div>
    <a className="font-bold italic text-3xl  text-teal-800">ForumFlare</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link to='/'><p className="mr-[20px] font-bold text-teal-600"><a>Home</a></p></Link>
     
      <p className="mr-[20px] font-bold text-teal-600"><a>Membership</a></p>
      <button className=" bg-inherit border-none">
       <IoMdNotifications className='text-2xl mr-[20px] mb-[40px] bg-inherit' />
       {/* <div className="">+{cart.length}</div> */}
       </button>


       {
        user ?
        <>
        <div className="dropdown">
 <div  tabIndex={0} role="button">
 <img src={user.photoURL}  alt="Tailwind"   className='rounded-full  w-[30px] h-[30px]' />
 </div>
 <ul  tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box" >
  <p className="text-teal-600 mr-[20px]">{user.displayName}</p>
 <p className=""> <button 
 onClick={handleLogOut}
 
 className=' bg-inherit font-bold text-teal-600 mr-[20px]'>LogOut</button></p>
 <Link to='/deshboard'><p className="mt-[16px] font-bold text-teal-600">desboard</p></Link>

 </ul>

</div>
        </>
        :
        <>
        <Link to='/login'>
        <button className=" bg-inherit font-bold text-teal-600">Join Us</button>
        </Link>
        </>
       }
     

       
    </ul>
  </div>

</div>
        </div>
    );
};

export default Navbar;