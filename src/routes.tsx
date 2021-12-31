import { Route, Routes } from "react-router";
import PrivateRoute from "./helpers/private-route";
import { Movimentos } from "./pages/financeiro/movimentos";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Movimento } from "./pages/financeiro/movimento";

export function Rotas() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/movimentos"
          element={
            <PrivateRoute>
              <Movimentos />
            </PrivateRoute>
          }
        />

        <Route
          path="/movimento"
          element={
            <PrivateRoute>
              <Movimento />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<h2>Página não encontrada</h2>} />
      </Routes>
    </Router>
  );
}
