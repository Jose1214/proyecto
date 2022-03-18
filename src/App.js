
// import PublicRoutes from './routes/public.routes';
// import {Navigate} from 'react-router-dom'
import HomeView from './views/HomeView';
function App(props) {
  return (
    <>
      {/* <PublicRoutes/>
      <Navigate replace={true} path="/**" to ="/"/>       */}
      <HomeView/>
    </>
  );
}

export default App;
