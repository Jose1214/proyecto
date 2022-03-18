
import HomeView from "../views/HomeView";
import { Routes } from "./helperRoutes";

const PublicRoutes = () => {
    return(        
        <Routes  path="/" component={HomeView} />                        
        
    )

}
export default PublicRoutes;