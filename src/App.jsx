import "./app.scss";
import HomePage from "./pages/home/HomePage";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Watch from "./pages/watch/Watch";
import ProfilePage from "./pages/profile/ProfilePage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./store/userSlice";

const App = () => {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );
      }
      else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={user ? <HomePage /> : <Navigate to="/" />} />
          <Route path="/" element={!user ? <Register /> : <Navigate to="/home" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route exact path="/watch" element={<Watch />} />
          <Route exact path="/profile" element={user ? <ProfilePage /> : <Navigate to="/" />} />

          {user && (
            <>
              <Route path="/movies" element={<HomePage type="movies" />} /> 
              <Route path="/series" element={<HomePage type="series" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
