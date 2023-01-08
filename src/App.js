import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/public/home/Home";
import Login from "./views/public/login/Login";
import Register from "./views/public/register/Register";
import ProtectedRoutes from "./routes/protected/ProtectedRoute";
import PrivateRoutes from './routes/private/PrivateRoutes';
import Dashboard from './views/admin/dashboard/Dashboard'
import Blog from './views/admin/blogs/Blog'
import Gig from './views/admin/gigs/Gig'
import Message from './views/admin/messages/Message'
import User from './views/admin/users/User'
import Portfolio from './views/admin/portfolios/Portfolio'
import Error from './views/public/404/Error';
import UpdateBlog from './views/admin/update-blog/UpdateBlog';
import AddPortfolio from './views/admin/add-portfolio/AddPortfolio';
import UpdatePortfolio from './views/admin/update-portfolio/UpdatePortfolio';
import AddBlog from './views/admin/add-blog/AddBlog';
import AddGig from './views/admin/add-gig/AddGig';
import UpdateGig from './views/admin/update-gig/UpdateGig';
import SingleBlog from './views/public/single-blog/SingleBlog';
import SingleGig from './views/public/single-gig/SingleGig';
import SinglePortfolio from './views/public/single-portfolio/SinglePortfolio';
function App() {
  return (
   <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/*" element={<Error/>}/>
              <Route path='/single-blog/:id' element={<SingleBlog/>}/>
              <Route path='/single-gig/:id' element={<SingleGig/>}/>
              <Route path='/single-portfolio/:id' element={<SinglePortfolio/>}/>
              <Route path='/admin/*' element={<PrivateRoutes/>}>
                  <Route path="dashboard" element={<Dashboard/>}/>
                  <Route path="blogs" element={<Blog/>}/>
                  <Route path="gigs" element={<Gig/>}/>
                  <Route path="messages" element={<Message/>}/>
                  <Route path="users" element={<User/>}/>
                  <Route path="portfolios" element={<Portfolio/>}/>
                  <Route path="add-blog" element={<AddBlog/>}/>
                  <Route path="edit-blog/:id" element={<UpdateBlog/>}/>
                  <Route path="add-portfolio" element={<AddPortfolio/>}/>
                  <Route path="edit-portfolio/:id" element={<UpdatePortfolio/>}/>
                  <Route path="add-gig" element={<AddGig/>}/>
                  <Route path="edit-gig/:id" element={<UpdateGig/>}/>
              </Route>
              <Route path='/*' element={<ProtectedRoutes/>}>
                  <Route path="login" element={<Login/>}/>
                  <Route path="register" element={<Register/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
   </>
  );
}

export default App;
