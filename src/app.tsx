import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Home } from "pages/home"; // Import 'Home' directly from the index file

const Home = lazy(() => import("pages/home"));
const Layout = lazy(() => import("components/layout"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
