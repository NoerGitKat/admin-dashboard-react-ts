import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Theme from "./components/layout/Theme";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
