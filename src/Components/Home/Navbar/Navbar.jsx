
import { IoMdNotifications } from "react-icons/io";


const Navbar = () => {
    return (
        <div className="mt-[50px]">
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <p className="mr-[20px] font-bold text-teal-600 "><a>Home</a></p>
     
      <p className="mr-[20px] font-bold text-teal-600 mt-[16px]"><a>MemberShip</a></p>
      <button className=" bg-inherit border-none">
       <IoMdNotifications className='text-2xl mr-[20px] mt-[16px] bg-inherit' />
       {/* <div className="">+{cart.length}</div> */}
       </button>
       <p className="mr-[20px] font-bold text-teal-600 mt-[16px]"><a>Join Us</a></p>

       <button className=" mr-[150px] bg-inherit font-bold my-[16px] text-teal-600">Login</button>
      </ul>
    </div>
    <a className="font-bold italic text-3xl  text-teal-800">ForumFlare</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <p className="mr-[20px] font-bold text-teal-600"><a>Home</a></p>
     
      <p className="mr-[20px] font-bold text-teal-600"><a>MemberShip</a></p>
      <button className=" bg-inherit border-none">
       <IoMdNotifications className='text-2xl mr-[20px] mb-[40px] bg-inherit' />
       {/* <div className="">+{cart.length}</div> */}
       </button>
       <p className="mr-[20px] font-bold text-teal-600"><a>Join Us</a></p>

       <button className="mr-[20px] mb-[40px] bg-inherit font-bold text-teal-600">Login</button>
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
</div>
        </div>
    );
};

export default Navbar;