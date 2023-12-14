import React from "react";
import CanHeader from "./Header";
import VerticalNav from "./Nav";

function CLayout({ children, title }) {
    return (
        <div>
            <CanHeader />
            <div className="d-flex ">
                <VerticalNav />
                <main className="p-5" style={{ minHeight: "100vh", width:"100%", backgroundColor: "whitesmoke" }}>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default CLayout;