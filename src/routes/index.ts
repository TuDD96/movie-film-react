// Layouts
// import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from "../pages/Home/Home";
import MovieDetail from "../pages/MovieDetail/MovieDetail";

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/:slug', component: MovieDetail },
    // { path: '/upload', component: Upload, layout: HeaderOnly },
    // { path: '/search', component: Search, layout: null },
];

const privateRoutes:any = [];

export { publicRoutes, privateRoutes };
