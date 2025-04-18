import Banner from "./components/Banner";
import HouseList from "./components/HouseList";
import './App.css'
import { Suspense } from "react";

function App() {
  return (
    <>
      <Banner>Providing houses all over the world</Banner>
      <Suspense fallback={<h3>Loading...</h3>}>
        <HouseList />
      </Suspense>
    </>
  )
}

export default App
