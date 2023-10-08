import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";

export default function Footer() {
  const context = useContext(myContext);
  const { toggletheme, theme } = context;
  return (
    <footer
      className="text-gray-600 body-font bg-gray-300"
      style={{
        backgroundColor: theme === "dark" ? "rgb(46 49 55)" : "",
        color: theme === "dark" ? "white" : "",
      }}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
              style={{ color: theme === "dark" ? "white" : "" }}
            >
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: theme === "dark" ? "white" : "" }}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: theme === "dark" ? "white" : "" }}
                  href="/order"
                >
                  Order
                </a>
              </li>

              <li>
                <a
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: theme === "dark" ? "white" : "" }}
                  href="/cart"
                >
                  Cart
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase"
              style={{ color: theme === "dark" ? "white" : "" }}
            >
              Customer Service
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to={"/returnpolicy"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: theme === "dark" ? "white" : "" }}
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: theme === "dark" ? "white" : "" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: theme === "dark" ? "white" : "" }}
                >
                  Contact Us
                </Link>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2
              className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
              style={{ color: theme === "dark" ? "white" : "" }}
            >
              Services
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to={"/privacypolicy"}
                  className="text-gray-600 hover:text-gray-800"
                  style={{ color: theme === "dark" ? "white" : "" }}
                >
                  Privacy
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
