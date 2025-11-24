import {BrowserRouter,Routes,Route}from "react-router-dom"
import Body from "./Body";
import Login from "./Login"
import Image from "./Image";
function App(){
    return(
        <>
        <BrowserRouter basename="/">
        <Routes>
            <Route path="/" element={<Body/>}>
            <Route path="login" element={<Login/>}></Route>
             <Route path="image" element={<Image/>}></Route>
            </Route>

        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;