import {BrowserRouter,Routes,Route}from "react-router-dom"
import Body from "./components/Body";
import Login from "./components/Login"
import Feed from "./components/Feed";
import{Provider} from "react-redux"
import appStore from "./utils/appStore";
import Profile from "./components/Profile";
import Connections from "./components/Connections";
import Requests from "./components/Requests";

function App(){
    return(
        <>
        <Provider store={appStore}>
        <BrowserRouter basename="/">
        <Routes> 
            <Route path="/" element={<Body/>} >
            <Route path="feed" element={<Feed/>}></Route>
             <Route path="profile" element={<Profile/>}></Route>
             <Route path="connections" element={<Connections/>}></Route>
            <Route path="requests" element={<Requests/>}></Route>
            </Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
        </BrowserRouter>
        </Provider>
        </>
    )
}
export default App;