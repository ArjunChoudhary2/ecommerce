import { Link } from "react-router-dom";

function Signup() {
  const imageUrl =
    "https://images.unsplash.com/photo-1635945416566-6302b54c056b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=80"; // Replace with the actual image URL

  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    /* You can add more background properties here as needed */
  };
  return (
    <div style={backgroundStyle} className="bg-cover bg-center h-screen">
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Signup
            </h1>
          </div>
          <div>
            <input
              type="email"
              name="email"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Password"
            />
          </div>
          <div className=" flex justify-center mb-3">
            <button className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg">
              Signup
            </button>
          </div>
          <div>
            <h2 className="text-white">
              Have an account{" "}
              <Link className=" text-red-500 font-bold" to={"/login"}>
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
