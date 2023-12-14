import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({children, title}){
    return (
      <div>
        {/* <Header /> */}
        <main className="p-5" style={{ minHeight: "100vh", backgroundColor: "whitesmoke" }}>
          
          {children}
        </main>
        
        <Footer />
      </div>
    );
}

export default Layout;