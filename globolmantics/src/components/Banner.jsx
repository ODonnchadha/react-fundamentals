// This allows Vite to optimize images.
// 1. Hashed file name used to enforce cache busting.
// 2. And compression.
import logo from "../assets/GloboLogo.png";
// JavaScript object.
// import styles from "./Banner.module.css";
// import { logo } from "./Banner.module.css";
import { logo as logoClassName } from "./Banner.module.css";

// Camel-cased with no dashes. Keep this out of the function return. Especially when the component has state.
// Keep it a private function.
const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral",
};

const Banner = () => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src={logo} className={logoClassName} alt="logo" />
            </div>
            <div className="col-7 mt-5" style={subtitleStyle}>
                Providing houses all over the world
            </div>
        </header>
    );
}

export default Banner;