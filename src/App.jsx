import { Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import AuthenticationPage from "./Components/AuthComponent/AuthenticationPage/AuthenticationPage";
import SignIn from "./Components/AuthComponent/SignIn/SignIn";
import { useEffect, useState } from "react"; // Import useState
import { auth } from "./Firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../src/Store/userSlice";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { logOut, logIn } = userSlice.actions;
  const navigate = useNavigate();

  // Add loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          logIn({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        setTimeout(() => {
          setLoading(false); // Set loading to false after 5 seconds
          navigate("/homeScreen");
        }, 5000);
      } else {
        setLoading(false); // Set loading to false if not authenticated
        navigate("/");
        dispatch(logOut());
      }
    });
  }, []);

  return (
    <div className="app">
      {loading ? ( // Render loading indicator during the 5 seconds
        <div className="loading-overlay">
          <div className="loader"></div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<AuthenticationPage />} />
          <Route path="/homeScreen" element={<HomeScreen />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
