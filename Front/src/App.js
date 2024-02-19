import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {
    BrowserRouter,
    Routes,
    Route, Router, Navigate,
} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";

function App() {
    const {user} = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    user ? <Home/>
                         : <Login/>
                }/>
                <Route path="/login" element={
                    user ? <Navigate to = "/"/>
                         : <Login/>
                }/>
                <Route path="/register" element={
                    user ? <Navigate to = "/"/>
                         : <Register/>
                }/>
                <Route path="/profile/:username" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
