import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FireBaseConfig";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

function Login() {
  const imageUrl =
    "https://images.unsplash.com/photo-1635945416566-6302b54c056b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=80"; // Replace with the actual image URL

  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    /* You can add more background properties here as needed */
  };

  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth,email,password);
      toast.success('Login successful', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      localStorage.setItem('user',JSON.stringify(result));
      navigate('/');
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div style={backgroundStyle} className="bg-cover bg-center h-screen">
    {loading && <Loader/>}
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-slate-800 px-10 py-10 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Login
            </h1>
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Password"
            />
          </div>
          <div className=" flex justify-center mb-3">
            <button className=" bg-violet-700 w-full text-black font-bold  px-2 py-2 rounded-lg"
            onClick={login}>
              Login
            </button>
          </div>
          <div>
            <h2 className="text-white">
              Don't have an account{" "}
              <Link className=" text-yellow-500 font-bold" to={"/signup"}>
                Signup
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
