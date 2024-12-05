import {createBrowserRouter} from "react-router-dom";
import Home from "../Layout/Home";
import MainDashboard from "../Layout/MainDashboard";
import AboutUs from "../Layout/AboutUs";
import Products from "../Layout/Products";
import Contact from "../Layout/Contact";


const routing = createBrowserRouter([

        // {path:"",element:<Home/>},
        {path:"MainDashboard",element:<MainDashboard/>,children:[
            {path:"",element:<Home/>},
            {path:"About",element:<AboutUs/>},
            {path:"Products",element:<Products/>},
            {path:"Contact",element:<Contact/>},
            
        ]}


        // {path:"home" , element:<Home/>}

    // {path:"",element:<LoginComp/>},
    // {path:"login",element:<LoginComp/>},
    
    // {path:"MainDashboard",element:<MainDashboardComp/> ,children:[
    //     {path:"ParentComp",element:<ParentComp/>},
    //     {path:"VirtualDom",element:<VirtualDOM/>},
    //     //4. Child routing
    //     {path:"hooks",element:<ReactHooksComp/>,children:[
    //         {path:"useState",element:<UseStateHooksComp/>},
    //         {path:"useEffect",element:<UseeffectHooksComp/>}
    //     ]},
    //     // 3. Parameterized routing 
    //     {path:"images/:id",element:<MyimagesComp/>}, 
    //     {path:"favcolor",element:<MyFavColorComp newColor="Green" />} ,
    //     {path:"formvalcomp",element:<FormValComp/>} 
    // ]},
    // //5.wild card rouitng
    // {path:"*",element:<PageNotFoundComp/>}
    
]);

export default routing;