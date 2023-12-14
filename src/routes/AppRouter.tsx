import Footer from "@/app/footer/Footer";
import Header from "@/app/header/Header";
import Home from "@/app/home/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <>
      <body className="h-full">
        <main className="min-h-screen">
          <Header />
          <div className="flex-grow flex-1">
            <BrowserRouter>
              <Routes>
                <Route path="/*" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </div>
        </main>
        <Footer />
      </body>
    </>
  );
};

export default AppRouter;
