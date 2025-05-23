import BookmarkIntro from "./components/BookmarkIntro/BookmarkIntro";
import Contact from "./components/Contact/Contact";
import Extensions from "./components/Extensions/Extensions";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Questions from "./components/Questions/Questions";
import Modal from "./components/ui/Modal/Modal";

function App() {
  return (
    <>
      <div className="container">
        <Modal />
        <div className="App">
          <Navigation />
          <BookmarkIntro />
          <Features />
          <Extensions />
          <Questions />
        </div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
