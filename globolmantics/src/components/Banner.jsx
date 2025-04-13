// This allows Vite to optimize images.
// 1. Hashed file name used to enforce cache busting.
// 2. And compression.
import logo from "../assets/GloboLogo.png";
// JavaScript object.
// import styles from "./Banner.module.css";
// import { logo } from "./Banner.module.css";
import { logo as logoClassName } from "./Banner.module.css";
// import propTypes, { string } from "prop-types";

// Camel-cased with no dashes. Keep this out of the function return. Especially when the component has state.
// Keep it a private function.
const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral",
};

const Banner = ({children}) => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src={logo} className={logoClassName} alt="logo" />
            </div>
            <div className="col-7 mt-5" style={subtitleStyle}>
                {children}
            </div>
        </header>
    );
}

// Removed. Other type-saftey features are recommended if needed e.g.: TypeScript.
// Banner.propTypes = {
//     "headerText" : propTypes.string.isRequired
// }

export default Banner;