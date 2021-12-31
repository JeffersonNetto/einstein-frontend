import "./App.css";
import { AuthProvider } from "./helpers/auth-context";
import Main from "./components/main/Main";

export default function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}
