## React Fundamentals by by Roland Guijt

- COURSE OVERVIEW:
    - Are you ready to write structured single page applications with one of the most popular JavaScript UI libraries around?
    - This course teaches you everything that’s needed to write efficient and shining UIs for your web applications.

- THE POWER OF REACT:
    - React: Open-source JavaScript library for building user interfaces.
        - Single page applications. (SPAs.)
            - Initial server request. Everything. Browser does not need the server anymore.
            - Server still needed to assist for data.
        - Mobile applications. (React Native.)
        - Structured, maintainable logic. Components and JSX.
        - Browser-side OR server-side. JUST the UI.
        - Reconciliation: New DOM is compared to old one. Difference is applied in browser.
            - Faster, better UI experience.
        - Component: JavaScript function. Own module. Maintains state. Function returns UI using JSX.
            - When state changes function re-executes. UI is updated using reconciliation.
            - Reusability. Modularity. Seperation of concerns. (Logic from presentation.)
                - Improved readability and maintainability. Easier testing.
        - A component:
            ```javascript
                const Banner = () => <h1>This is a banner component!</h1>;
            ```
            - The function returns the UI of a component.
            - Components are JavaScript functions that return JSX. JSX looks like HTML but it isn't.
                - Translated to JavaScript by a tool. e.g.: Babel.
                - `React.createElement("h1", null, "This is a banner component!");`
                    - NOTE: null parameter is object attriburtes. e.g.: className.
                    - And then `react-dom` renders the components.
                    - JSX -> Transpiler -> React DOM.
                        - This allows for reconciliation.
                        - JavaScript can be used in the UI.
            - Built-in components: `<div>` Correspond to DOM elements.
                - Different output targets use different built-in components. Are camel-cased.
                    - Custom components are pascal cased. `className` attribute.

- SETTING UP A NEW PROJECT:
    - Why tooling is needed.
        - Starting point. Template.
        - Transform JSX to JavaScript.
        - Process JavaScript files.
        - Run a development server.
        - Automatically update browser.
        - Create a production build.
        - Vite or Next.js.
    - Starting with Vite:
        - Install Node.js.
            ```javascript
                npm create vite@6
                npm i
                npm update
                npm run lint
            ```
        - SWC: Speedy Web Compiler:
            - Transpiles JSX to JavaScript.
            - Performance.
            - Update browser on the fly.
        - `^` Lock a major version number in `package.json`.
        - Public directory will not be processed with Vite tooling. Static resources. Root directory equeal root URL.
    - Modules: 
        - Components are in modules. JavaScript files with import and/or export statements.
        - Not specific to React. Vite relies upon modules.
            ```javascript
                const doSomething = () => {};
                export { doSomething };

                import { doSomething } from './module';
                doSomething();
            ```
            ```javascript
                const doSomething = () => {};
                export default doSomething;

                import xyz from './module';
                xyz();
            ```
        - Code structure. Reusability. Encapsulation. Performance. Scalability. 
            - Easier to debug and test. Collaboration. Needed for bundling.
    - Detecting problems and debugging:
        - ESLint: Detect problems. Code styling. Commonly used. Vite: Built-in React ruleset.
            ```javascript
                npm run lint
            ```

- STYLING COMPONENTS:
    - Traditional: Include it in the root HTML document. All coponents will be,loaded within the id root.
    - And then add a site-specific file within the public root. And then added as a CSS link in HTML.
        - Both files are globally applied.
    - NOTE: IMported CSS in a lower component?
        - Applied globally no matter where it is imported.
        - Development builds: CSS rendered in style element.
        - Production builds: CSS bundled in a file with a hashed name.
    - Bootstrap Grid System: 12x columns. Row.
    - Style attribute:
        - Components have a style element.
        - Takes an object containing the CSS.
        - Inline or pre-declared object.

- HOOKS, PROPS, AND STATE:
    - A component returns JSX. Components can receive arguments from other components.
    - RULE: Props are read-only. Props are passed by reference. One-way data flow.
    - Props:
        - Passing arguments to components.
        - Using HTML-like attribute syntax.
        - Receiving component accesses props object.
        - Allow for better reuseability of components.
    - Do all props have an associated prop type? Make your intentions clear.
        - NOTE: Even with `children`, we are still destructuring the object.
            ```javascript
                const Banner = ({children}) => {
            ```
        - An entire component tree could now be passed.
    - `map`: Takes a function as a parameter, called for each item on the array.
        - Gets the array element as a parameter.
            ```javascript
                const numbers = ["one", "two", "four"];
                const numbersPrefixed = numbers.map(n => "Number " + n);
            ```
        - Mapped to something else, producing a new array.
    - The key prop: Needed whenever arrays of React elements are created.
        - Render only new items. Link generated JSX to array items. And not refresh.
            - Key property used internally.
        - Only elements directly inside the map call need keys. 
        - Never use them outside of the direct context of the array.
            ```javascript
                {houses.map(h => <HouseRow key={h.id} house={h} />)}
            ```
        - Downside. So destructure at a deeper level:
            ```javascript
                const HouseRow = ({ house }) => {
                return (
                <tr>
                    <td>{house.address}</td>
            ```
            ```javascript
                const HouseRow = ({ house: { address, country, price } }) => {
                return (
                <tr>
                    <td>{address}</td>
            ```
            - Beware spread operator if the spread object has many properties that the component does not need.
    - Hooks: A function. Starts with "use." Encapsulates complexity. Access React's features. Custom hooks. Imported.
    - Rules of hooks:
        - Only call hooks at the top level. Forbidden to call them conditionally. Or after an early return.
            - We need to ensure that hooks are called in the same order.
        - Only can be called within a function component.
            - Or custom hooks.
    - Components and state. State is data kept internally.
        - One-way data flow. Change the data upstream and update based upon flow.
        - `useState` by calling the set function, React will know that the state was updated.
            - And it will re-render to UI automatically. If needed.
        - Primitive type: React will compare the previous value with the new value.
            - And, if different, React will update the UI.
            - NOTE: React will batch calls.
        - State:
            - State is internal data managed by a component.
            - Introduced by state hook.
            - Prarmeter: initial value.
            - Returns: Array with current value and function to change it (the `set` function.)
            - Change the state using the set function ONLY.
    - Props and state interaction:
        - A prop value can change. What is a prop for one component is often state for another.
    - Core React features:
        - Structure with components:
            - Reusability.
            - Have state.
        - UIs declared in JavaScript:
            - Rendered output changes when state is updated.
        - Efficiency with reconciliation:
            - Only updates the parts of the UI that changed.

- COMPONENT RENDERING AND SIDE EFFECTS:
    - 

