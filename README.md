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

- HOOKS, PROPS, AND STATE:
