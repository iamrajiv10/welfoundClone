// import React, { useEffect, useState } from "react";
// import {auth, provider} from "./config";
// import {signInWithPopup} from "firebase/auth"
// import Home from "./home";



// function SignUp() {

//     const [value,setValue] = useState();

//     const handleClick = () => {
//         signInWithPopup(auth, provider).then((data)=>{
//             let user = {
//                 email: data.user.email,
//                 name: data.user.displayName,
//                 photoURL: data.user.photoURL
//             }
//             setValue(user)
//             localStorage.setItem("data",user)
//         })
//     }

//     useEffect(() => {
//         let val = (localStorage.getItem('data'))
//         setValue(localStorage.getItem('data'))
//         console.log(value);
//     })

//     return(
//         <div>
//             {value? <Home/>:
//             <button onClick={handleClick}>SignUP with Google</button>
//     }
//     </div>
//     );
// }
// export default SignUp;











import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from "./home";

function SignUp() {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      let user = {
        email: data.user.email,
        name: data.user.displayName,
      };
      setValue(user);
      localStorage.setItem("data", JSON.stringify(user));
    });
  }

  useEffect(() => {
    let storedData = localStorage.getItem('data');
    if (storedData) {
      setValue(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      {value ? <Home /> : 
      <button type="button" className="btn btn-warning border border-white w-100"
       onClick={handleClick}>Sign up with Google</button>}
    </div>
  );
}

export default SignUp;
