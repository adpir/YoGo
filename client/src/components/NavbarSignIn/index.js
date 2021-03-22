import React from "react";
import { Link, NavLink } from "react-router-dom";
import HamburgerMenuSignIn from "../HamburgerMenuSignIn";

export default function Navbar() {
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white 50">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="p-2"></div>
        <Link to="/">
          <h1 className="inline-flex py-6 px-3 text-gray-600 hover:text-green-900 text-4xl font-bold tracking-widest pacifico-title">
            YOGO
            </h1>
        </Link>
        <HamburgerMenuSignIn />
      </div>
    </nav>
  );
}




// export default function NavbarSignIn() {
//   const [navbarOpen, setNavbarOpen] = React.useState(false);

//   return (
//     // <!-- This example requires Tailwind CSS v2.0+ -->
//     <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-yellow-100">
//       <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
//         <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
//           <Link to="/">
//             <h1 className="inline-flex py-6 px-3 mr-4 text-gray-600 hover:text-gray-400 text-4xl font-bold tracking-widest pacifico-title">
//               YOGO
//             </h1>
//           </Link>
//           <button
//             className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray focus:outline-none"
//             type="button"
//             onClick={() => setNavbarOpen(!navbarOpen)}
//           >
//             <i className="fas fa-bars"></i>
//           </button>
//         </div>
//         <div
//           className={
//             "text-right content-right" +
//             (navbarOpen ? " flex" : " hidden")
//           }
//           // className={
//           //   "lg:flex flex-grow items-center" +
//           //   (navbarOpen ? " flex" : " hidden")
//           // }
//           id="example-navbar-danger"
//         >
//           <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
//             <li className="nav-item">
//               <a
//                 href="#"
//                 className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Create Account
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 href="#"
//                 className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Sign In
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
