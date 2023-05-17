import {
  Home,
  Scenes,
  Sidebar,
  HeaderMenu,
  Register,
  Login,
} from "./routes/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex bg-gray-200">
      <BrowserRouter>
        <Sidebar />
        <main className="flex flex-col items-start w-full">
          <HeaderMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scenes" element={<Scenes />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </BrowserRouter>
      {/*<SignUpForm />*/}
    </div>
  );
}

export default App;
