import '../index.css';
import { useState } from 'react';

export default function ReactQA() {
const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const renderPopupContent = (text, jsxContent) => (
    <div>
      {text && <p>{text}</p>}
      {jsxContent && <div className="popup-code">{jsxContent}</div>}
    </div>
  );

  const handleOpenPopup = (text, jsxContent = null) => {
    setPopupContent(renderPopupContent(text, jsxContent));
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
    setPopupContent(null);
  };

  return (
    <div>
      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Closure</strong> is formed when a function is defined inside another function. The inner function has access to the outer function's variables and parameters, even after the outer function has finished executing. This creates a "private" scope for the inner function, allowing it to retain a reference to the outer function's state.<br />
<strong>Why are Closures Important in React?</strong><br />
<strong>Event Handlers</strong>: Closures are commonly used in event handlers to capture the state of the component at the time the handler is created.<br />
<strong>State Management</strong>: React's useState hook creates closures around the state values it maintains.<br />
<strong>Side Effects</strong>: useEffect hook also relies on closures to access variables in the component's scope.<br />
<strong>Performance Optimization</strong>: useCallback and useMemo can be used to memoize functions and prevent unnecessary re-renders by leveraging closures</p>)
        }
      >Closur</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Dispatcher</strong> is the central hub of data flow in a react application. It is a function that sends actions to the store to update the state. It acts as a conduit between your app's components and the logic that updates the state, typically encapsulated in a reducer function. The dispatch function form is straightforward: it takes an action object as its only argument. This action object must have a type property, which is a string that describes the action being performed. It can also carry a payload with data that the reducer function might need to update the state.</p>)
        }
      >Dispatcher</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Event</strong> When a user presses a key, clicks the mouse, or performs any action on the machine or when the machine itself triggers an action, these actions are called Event.</p>)
        }
      >Event</button>

        <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>JSX allow us to write <strong>Conditional Statements</strong> so we can display data in the browser according to the conditions provided inside the JSX.<br />
          <strong>Easy Debugging</strong> Makes development more predictable and easy debug<br />
          <strong>Easy Learn</strong> Whoever knows JavaScript can quickly learn React<br />
          <strong>JSX(JavaScript Syntax Extension)</strong> is a combination of HTML and JavaScript. It means we can combine JavaScript inside the HTML elements.<br />
          <strong>One-way Data Binding</strong> means data flows only in one direction means the data is transferred from top to bottom, from parent components to child<br />
          React can improve search engine optimization by rendering on the server side via <strong>Next JS</strong> and can improve page load times.<br />
          <strong>Reusable Component</strong> can maintain & scale app for better performance<br />
          <strong>Vast Ecosystem, Libraries</strong> and <strong>Tools</strong> which makes problem-solving and fast development.<br />
          React provides built-in <strong>State Management</strong> like useState, context-API, Redux<br />
          <strong>Virtual DOM</strong> is a lightweight copy of the real DOM. It compares the current and previous versions of updates to the DOM. It only re-renders the parts of the UI that have changed.<br />
<strong>Disadvantages of Virtual DOM</strong>: Consume additional memory<br />Developers need to understand concepts of Virtual DOM.<br />
VDOM can introduce unnecessary complexity for very simple application</p>)
        }
      >Features</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>filter()</strong> method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.</p>,
        `const students = [
  { name: 'Ram', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Roy', grade: 100 },
  { name: 'Sam', grade: 65 }
];

const studentGrades = students.filter(s => s.grade >= 90);
return stdGrades; 
output: [{ name:'Ram', grade:96}, {name:'Roy', grade:100}]`)
        }
      >Filter</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Pure Functions</strong> are functions that don't modify data outside their scope, while impure functions can. Pure functions are easier to debug and optimize, and are often used to render components. Pure component is a component that always returns the same output for the same input (props and state), essentially acting like a pure function.<br />
<strong>Impure Functions</strong> can be useful for handling user input and making API calls, but they can be more difficult to debug. Impure Component can produce different outputs even with the same input due to side effects or state modifications within the component, leading to potentially unpredictable rendering behavior.</p>)
        }
      >Pure vs Impure Function</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Higher-Order Component</strong> is an advanced pattern in React used to reuse component logic. It is a function that takes a component as an argument and returns a new enhanced component. Using HOC, we can Render Hijacking, Reuse code and Manipulate Props</p>)
        }
      >HOC</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Key</strong> is a unique identifier which is used to identify which items have changed, updated, or deleted in the list. It is useful when we dynamically created components or when the users alter the lists. It also help us to determine which components in a collection needs to be re-rendered instead of re-rendering the entire set of components every time.</p>)
        }
      >Key</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Lifecycle Hooks</strong> have many methods which automatically called at different phases in the component. It provides the power to control and manipulate what's going on throughout the lifecycle.<br />
constructor()<br />
getDerivedStateFromProps()<br />
render()<br />
componentDidMount()<br />
shouldComponentUpdate()<br />
getSnapshotBeforeUpdate()<br />
componentDidUpdate()<br />
componentWillUnmount()</p>)
        }
      >Lifecycle Hooks</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Map()</strong> method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.</p>,
        `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled);
Output: [2, 4, 6, 8]`)
        }
      >Map</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Code Splitting</strong> split our code into smaller chunks using dynamic imports or React.lazy to load only the necessary code for each route, improving initial load times and reducing time to interactive.<br />
          <strong>Lazy Loading</strong> is a technique which is used to improve the initial loading time by deferring the loading of non-essential components until they are needed. This can significantly reduce the initial bundle size and improve the perceived performance of the application. Lazy loading can be implemented using lazy function along with Suspense for code-splitting. <strong>Lazy Loading</strong> prevents the creation of unnecessary DOM nodes and allow to delay the loading of images until they are required.<br />
import LazyLoad from 'react-lazyload';<br />
import React, &#123; lazy, Suspense &#125; from 'react'<br />
          <strong>List Visualization</strong> means render only those items which are currently visible on the screen. When dealing with a large number of items in a list, rendering all the items at once can slow down the performance and consume extra memory. import &#123; List &#125; from 'react-virtualized'<br />
          <strong>Memoization</strong> techniques can be used like useMemo and React.memo to prevent unnecessary re-renders of components and expensive computations.<br />
          <strong>Fragment</strong> is used to maintain a cleaner DOM structure by eliminating unnecessary wrapper elements. Using Fragments we can create more reusable and modular components.<br />
          <strong>Throttling Events</strong> is used to limit the number of times an event handler is invoked. It ensures that the function is called at a specified interval and prevent to execute frequently.<br />
          <strong>UseTransition Hook</strong> is used to specify what state changes should run with a lower priority to increase the performance of our application.<br />
          <strong>Web Workers</strong> run scripts in background threads for web content. The worker thread can perform tasks without interfering the user interface</p>)
        }
      >Performance</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Prop-Drilling</strong> is a situation where we pass data through multiple levels of components just to reach a deeply nested component, even if the intermediate components don’t need that data.</p>)
        }
      >Prop-Drilling</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Reduce()</strong> method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.<br />
<strong>Callback</strong> argument is a function that will be called once for every item in the array. This function takes four arguments, but often only the first two are used.<br />
<strong>InitialValue</strong> argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function.</p>, 
`const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10`)
        }
      >Reduce</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Reducer</strong> is a single function that takes the current state and an action, returning a new state based on that action while combined reducer is a function that merges multiple individual reducers into a single unit, allowing you to manage different parts of your application state with separate reducers, all within one combined reducer function.</p>)
        }
      >Reducer</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Tree Shaking</strong> is a process of eliminating dead or unused code from the final bundle during the build process. Tree Shaking can remove unused React components, functions, or imports from the bundle, resulting in a smaller bundle size and improved performance.<br />
<strong>Tree Shaking</strong> is Beneficial in large applications with many dependencies as it help us to optimize the application's bundle size and reduce the amount of code that needs to be parsed and executed by the browser.</p>)
        }
      >Tree Shaking</button><br />


      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Best Practices</strong> </p>)
        }
      >Best Practices</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Component-Based</strong> architecture organize code into reusable and composable components based on functionality. Use container components to manage state and presentational components for rendering UI elements.</p>)
        }
      >Component-Based</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Folder Structure</strong> adopt a folder structure that reflects the component hierarchy and feature organization. Group related components, styles, and assets within the same folder for better maintainability.</p>)
        }
      >Folder Structure</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>State Management</strong> choose proper state management like Redux, Context-API for managing global state. Centralize state logic to improve scalability and maintainability.</p>)
        }
      >State Management</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Code Splitting</strong> split code into smaller chunks to improve initial load times and reduce bundle size.</p>)
        }
      >Code Split</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Linting and Formatting</strong> to code consistency and quality using linters like ESLint and code formatters. Follow the coding standards and best practices to ensure code maintainability and readability.</p>)
        }
      >Linting+Formatting</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Documentation</strong> for code components, APIs and architecture to understanding among team members. Use README file for project-level documentation.</p>)
        }
      >Documentation</button><br />

       <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Components</strong> are the building blocks of any React application. They are reusable pieces of UI that you can create, nest, and manage just like functions in JavaScript. A component is a function or class that returns HTML (JSX) and describes how a part of the UI should look and behave.</p>)
        }
      >Components</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Class Component</strong> use ES6 classes and require render() to return JSX. They were commonly used before Hooks. It can use lifecycle methods like componentDidMount(), componentDidUpdate(). It is more traditional object oriented programming style.</p>, 
        `import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
export default Counter;`)
        }
      >Class Component</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Functional Components</strong> are JavaScript functions that return JSX. They are simpler, easier to read, and typically used with React Hooks to handle state and lifecycle methods.<br />
<strong>Advantages of Functional Components</strong><br />
Less Code No need for class boilerplate.<br />
Easier to read and test.<br />
Better performance: There’s no overhead of class instances.<br />
Hooks support: Uses useState, useEffect etc.
</p>,

`import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
   <div>
     <h2>Count: {count}</h2>
     <button onClick={()=>setCount(count+1)}>Incrmt</button>
   </div>
  );
};
export default Counter;`)
        }
      >Functional Component</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Stateless Components</strong> are pure functions with no render method. Stateless components are JavaScript functions that render UI elements without managing internal state. Stateless components receive data and behavior through props passed down from parent components. They return JSX to describe the structure and appearance of the component. They are typically functions and not classes.</p>)
        }
      >Stateless Component</button><br />

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Error Handling</strong> ensures your app can gracefully handle unexpected issues—like API failures, rendering issues, or user input errors—without crashing the entire UI.</p>)
        }
      >Error Handing</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Error Boundaries</strong> are a feature in React that allows components to catch JavaScript errors anywhere in their component tree and log those errors, display a fallback UI, or take other actions.</p>,
            `class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('Error caught by boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong: {this.state.error.message}</h3>;
    }
    return this.props.children;
  }
}
`
          )
        }
      >Error Boundaries</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Try Catch</strong> When dealing with asynchronous operations like fetching data or handling events we can use the standard JavaScript try-catch block to catch errors and handle them carefully.</p>, 
            `const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    setError(error.message);
  }
};`)
        }
      >Try Catch</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>React doesn't support <strong>Error Boundaries</strong> with hooks, but you can still handle logic errors</p>,
            `function Component() {
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // risky logic here
    } catch (e) {
      setError(e.message);
    }
  }, []);

  if (error) return <p>Error: {error}</p>;

  return <div>Normal content</div>;
}
`)
        }
      >Custom Error Handling</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Form Validation</strong> error handling with form libraries or custom logic</p>,
            `const handleSubmit = (e) => {
  e.preventDefault();
  if (!email.includes('@')) {
    setError('Invalid email address');
    return;
  }
  // proceed with submit
};
`
          )
        }
      >Form Validation</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Handling Errors in API calls</strong> are a common source of errors. We can manage these errors by showing a loading state and an error message.</p>)
        }
      >API Calls</button><br />

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>React Hooks</strong> are special functions which use React features in functional components. Hooks allow functional components to be powerful, cleaner and easier to reuse logic.</p>)
        }
      >Hooks</button>

<button
        className="btn btn-primary me-2 mb-2"
        onClick={() =>
          handleOpenPopup(
              <p><strong>useEffect</strong> is used to perform side effects in components. Side effects are operations that affect something outside of the function, such as API calls, timers, logging, or updating the DOM.</p>
          )
        }
      >useEffect</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>useCallback</strong> is used to optimizes performance. It does not allow functions to recreate on every render. This can help us to prevent unnecessary re-renders and improve component speed.</p>)
        }
      >useCallback</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>useContext</strong> is a way to access and share data between components without having to pass props down manually. It is useful for managing data across multiple components, especially in large app.</p>)
        }
      >useContext</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>useMemo</strong> is used to caches the result of a function call. This helps us to optimize the performance. The useMemo hook takes two arguments: a function and an array. If the input parameters of a function remain the same, the function will return the same output without re-executing the computation.</p>)
        }
      >useMemo</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>useReducer</strong> is used to manages state in functional components. It is an alternative to the useState hook, and is used to manage more complex state logic.</p>)
        }
      >useReducer</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>useRef</strong> is used to store and reference values that persist between renders. It's used to tool for managing focus, triggering animations, and comparing previous values.</p>)
        }
      >useRef</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>useState</strong> is used to remember and change information over time. It is used in functional components to manage state, such as form inputs, counters, or any changing values.</p>)
        }
      >useState</button><br />

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>In React <strong>Middleware</strong> isn't built into the core library itself like in some backend frameworks such as Express.js, .Net Core or Springboot but it's commonly used in state management libraries like Redux.<br />
In Redux, middleware can perform the task like:<br />
Handle asynchronous logic (like API calls)<br />
Log actions<br />
Modify or block actions<br />
Automatically retry failed requests</p>)
        }
      >Middleware</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>SAGA</strong> is a middleware which help to manage asynchronous operations like API calls and provide a structured way to handle side effects. SAGA makes our code cleaner and easier to test when dealing with complex asynchronous data. SAGA is good for complex appplications and asynchronous operations. THUNK is good for simple applications and asynchronous operations and it's a function-based approach. using SAGA easy to scale up the application.</p>)
        }
      >SAGA</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Thunk</strong> is a middleware that allows to write action creators which returns a function instead of an action. This function can be used to delay the dispatch of an action. It makes it possible to handle asynchronous operations inside action creators which is crucial for tasks like fetching data from an API. It simplifies the process of handling asynchronous actions like API requests. Using THUNK difficult to scale up the application.</p>)
        }
      >Thunk</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Logger</strong> provides logging functionality for Redux actions, state changes, and errors. It help us in debugging by logging each action and the resulting state changes to the console.</p>)
        }
      >Logger</button>                  

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Persist</strong> enables persisting Redux state to storage, such as local storage or AsyncStorage and allow the state to persist across page reloads.</p>)
        }
      >Persist</button>

       <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>State Management</strong> handle and control data that changes over time and affects what the user sees on the screen.<br />
State is like a component’s “memory” — it holds data that can change.<br />
When state changes, React re-renders the component to show updated info.</p>)
        }
      >State Management</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Redux</strong> store and manage application state. It provides APIs to change and access the application's state. It is helpfull to sharing data from one component to another component. Store is used to save the entire State at one place. Action are plain JavaScript object that contains information.</p>)
        }
      >Redux</button>

        <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Context API</strong> is used to share data between components. It's useful for sharing global data that many components need to access. Context API creates a global state that can be accessed by any component. Context API consists of two main components: Provider and Consumer. Provider component provides data to the context. Consumer component consumes data from the context.</p>)
        }
      >Context API</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>State</strong> is an object which stores the property values of component. State helpful in respond to user input, API responses and other events. State is used for managing and persisting data within a component. When the state object changes the component re-renders. To update the state we can use the setState function. We can add a state variable by calling the useState Hook. The useState Hook returns a pair of values: the current state and the function to update it</p>)
        }
      >State</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Props</strong> are objects that pass data from one component to another. Props are read-only means the child component cannot change the data from the parent component. Props can be used to pass any JavaScript value including objects, arrays, and functions. Props can be used to make components more dynamic.</p>)
        }
      >Props</button>

      {/* Popup */}
      {isOpen && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content scrollable-popup" onClick={(e) => e.stopPropagation()}>
            {popupContent}
          </div>
        </div>
      )}
    </div>
  );
}