import Body from "./Body2";
import Footer from "./Footer";
import { Fragment } from "react";

function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}

function App() {
  return (
    <>
      <Header /> // Header 컴포넌트 호출
      <h1>헬로우 리액트</h1>
      <Body />
      <Footer />
    </>
  );
}

export default App;
