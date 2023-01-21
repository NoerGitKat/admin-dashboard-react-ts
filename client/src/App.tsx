import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Theme from "./components/layout/Theme";
import { DashboardPage, ProductsPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Route>
        </Routes>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
