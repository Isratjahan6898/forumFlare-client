

const Banner = () => {
    return (
        <div className="my-[70px]">
           

            <div className="hero w-full h-[400px]"
  style={{ backgroundImage: "url(https://i.ibb.co/gjyZv67/pexels-kampus-8190803.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold  text-teal-800">Search Here</h1>
     
      <div className="flex gap-[6px] mt-[30px]">
      <input
  type="text"
  placeholder="Type here"
  className="input text-black input-bordered input-md w-full max-w-xs" />

<button className="btn bg-teal-600 border-0 text-white font-bold">search</button>

      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;