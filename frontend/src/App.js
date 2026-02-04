import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";

function App() {
  const [page, setPage] = useState("login");
  const token = localStorage.getItem("token");

  if (token) {
    return <Tasks />;
  }

  return page === "login" ? (
    <Login switchPage={() => setPage("register")} />
  ) : (
    <Register switchPage={() => setPage("login")} />
  );
}

export default App;
