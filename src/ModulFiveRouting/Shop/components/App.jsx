import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// import About from './pages/About';
// import Team from './pages/Team';
// import Mission from './pages/Mission';
// import Reviews from './pages/Reviews';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';
// import ProductDetails from './pages/ProductDetails';
// import Products from './pages/Products';
import SharedLayout from './SharedLayout';

// ==================================================================
// як приклад
// const createAcyncComponent = path => lazy(() => import(path));

// const About = createAcyncComponent('./pages/About');
// const Team = createAcyncComponent('./pages/Team');
// const Mission = createAcyncComponent('./pages/Mission');
// const Reviews = createAcyncComponent('./pages/Reviews');
// const Home = createAcyncComponent('./pages/Home');
// const NotFound = createAcyncComponent('./pages/NotFound');
// const ProductDetails = createAcyncComponent('./pages/ProductDetails');
// const Products = createAcyncComponent('./pages/Products');
// ==============================================================

const About = lazy(() => import('../pages/About'));
const Team = lazy(() => import('../pages/Team'));
const Mission = lazy(() => import('../pages/Mission'));
const Reviews = lazy(() => import('../pages/Reviews'));
const Home = lazy(() => import('../pages/Home'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Products = lazy(() => import('../pages/Products'));
const NotFound = lazy(() => import('../pages/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
