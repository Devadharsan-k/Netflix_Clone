import { Route, Routes, useNavigate } from "react-router-dom";
import "./index.css";
import HomeScreen from "./Components/HomeScreen/HomeScreen";
import AuthenticationPage from "./Components/AuthComponent/AuthenticationPage/AuthenticationPage";
import SignIn from "./Components/AuthComponent/SignIn/SignIn";
import { useEffect } from "react";
import { auth } from "./Firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../src/Store/userSlice";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { logOut, logIn } = userSlice.actions;
  const navigate = useNavigate();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          logIn({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        navigate("/homeScreen");
      } else {
        navigate("/");
        dispatch(logOut());
      }
    });
  }, []);

  return (
    <div className="app">
      <>
        <Routes>
          <Route path="/" element={<AuthenticationPage />} />
          <Route path="/homeScreen" element={<HomeScreen />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
