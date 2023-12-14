import React from "react";

function Home() {
    const logout =() => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div>
            <h1>Welcome to the home page</h1>
            <button onClick={logout}>Log Out</button>
        </div>
        );
}
export default Home;