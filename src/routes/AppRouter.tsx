import Footer from "@/app/footer/Footer";
import Header from "@/app/header/Header";
import Home from "@/app/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//app router

const AppRouter = () => {
  return (
    <>
      <div className="h-full font-mono bg-[#C5E4E7]">
        <main className="min-h-screen">
          <Header />

          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AppRouter;
