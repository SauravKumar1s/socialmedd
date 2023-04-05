import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/navbar/Navbar";
import BlogPosting from "./components/post/BlogPosting";
import HomeFeed from "./pages/HomeFeed";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Header />
      <Login/>
      <Register/>
      {/* <BlogPosting /> */}
      <HomeFeed />
      <Footer />
    </>
  );
}

export default App;
