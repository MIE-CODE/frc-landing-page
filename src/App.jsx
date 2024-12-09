import "./style/global.scss";
import Navbar from "./component/navbar/navbar";
import Body from "./component/body/body";
import Banner from "./component/banner/banner";
import Footer from "./component/footer/footer";

function App() {
  return (
    <main className="main">
      <Navbar />
      <Body />
      <Banner />
      <Footer />
    </main>
  );
}

export default App;
