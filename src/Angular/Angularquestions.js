import { FaQuestionCircle } from "react-icons/fa";

function Angularquestions() {
  const sectionHeaderStyle = {
    borderBottom: "2px solid #007bff",
    paddingBottom: "5px",
    marginBottom: "15px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#007bff",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const preStyle = {
    backgroundColor: "#f1f3f5",
    fontFamily: "monospace",
    fontSize: "0.95rem",
    border: "1px solid #dee2e6",
    padding: "15px",
    borderRadius: "5px",
    overflowX: "auto",
    whiteSpace: "pre",
  };

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "40px 20px" }}>
      <div className="container bg-white p-5 shadow-sm rounded">
        <h1 className="fw-bold mb-5 text-primary text-center">React Interview Q&A</h1>

        {/* Q1 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q1: What is React and why is it used?
          </div>
          <p>React is a JavaScript library for building reusable UI components and managing state efficiently.</p>
          <pre style={preStyle}>{`import React from 'react';

function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

export default HelloWorld;`}</pre>
        </section>

        {/* Q2 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q2: What is Next.js and why is it used?
          </div>
          <p>Next.js is a React framework that supports server-side rendering (SSR), static site generation (SSG), and API routes for better performance and SEO.</p>
          <pre style={preStyle}>{`// pages/index.js
export default function Home() {
  return <h1>Welcome to Next.js!</h1>;
}`}</pre>
        </section>

        {/* Q3 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q3: What is the difference between CSR and SSR?
          </div>
          <p>CSR renders pages on the client (browser), while SSR renders on the server and sends fully populated HTML to the client.</p>
        </section>

        {/* Q4 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q4: What are React Hooks?
          </div>
          <p>Hooks are functions to use state and lifecycle features in functional components.</p>
          <pre style={preStyle}>{`import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}`}</pre>
        </section>

        {/* Q5 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q5: Difference between useEffect and useLayoutEffect?
          </div>
          <p>useEffect runs after painting, useLayoutEffect runs synchronously after DOM updates but before painting.</p>
        </section>

        {/* Q6 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q6: What is a React component?
          </div>
          <p>A React component is a reusable piece of UI, either a function or class, that returns JSX.</p>
        </section>

        {/* Q7 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q7: Difference between state and props in React?
          </div>
          <p>State is local to a component and can change over time. Props are passed from parent to child and are read-only.</p>
        </section>

        {/* Q8 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q8: What is context in React?
          </div>
          <p>Context allows passing data through the component tree without manually passing props at every level.</p>
        </section>

        {/* Q9 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q9: Difference between React Router and Next.js routing?
          </div>
          <p>React Router is client-side routing. Next.js provides file-based routing with SSR and SSG support.</p>
        </section>

        {/* Q10 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q10: What is getStaticProps in Next.js?
          </div>
          <p>getStaticProps fetches data at build time for static site generation.</p>
          <pre style={preStyle}>{`export async function getStaticProps() {
  return { props: { message: "Static page content" } };
}

export default function Home({ message }) {
  return <h1>{message}</h1>;
}`}</pre>
        </section>

        {/* Q11 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q11: What is getServerSideProps?
          </div>
          <p>getServerSideProps fetches data on every request (SSR).</p>
        </section>

        {/* Q12 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q12: Difference between getStaticPaths and getServerSideProps?
          </div>
          <p>getStaticPaths defines dynamic routes for SSG. getServerSideProps runs at request time for SSR.</p>
        </section>

        {/* Q13 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q13: What is a Higher-Order Component (HOC)?
          </div>
          <p>An HOC is a function that takes a component and returns an enhanced component.</p>
        </section>

        {/* Q14 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q14: What is React.memo?
          </div>
          <p>React.memo is a higher-order component that prevents unnecessary re-renders of functional components.</p>
        </section>

        {/* Q15 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q15: What is the difference between controlled and uncontrolled components?
          </div>
          <p>Controlled components have their state controlled by React. Uncontrolled components use DOM to manage state.</p>
        </section>

        {/* Q16 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q16: What is the difference between props.children and render props?
          </div>
          <p>props.children is JSX between component tags. Render props is a function prop used to render dynamic content.</p>
        </section>

        {/* Q17 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q17: What is Redux and when to use it with React?
          </div>
          <p>Redux is a state management library. Use it for large applications with complex state that needs to be shared across components.</p>
        </section>

        {/* Q18 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q18: Difference between useReducer and Redux?
          </div>
          <p>useReducer is a React hook for local component state. Redux manages global state across the app.</p>
        </section>

        {/* Q19 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q19: What are React Fragments?
          </div>
          <p>Fragments let you group multiple elements without adding extra nodes to the DOM.</p>
        </section>

        {/* Q20 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q20: What is Next.js Image Component?
          </div>
          <p>Next.js Image component optimizes images automatically with lazy loading and resizing.</p>
        </section>

        {/* Q21 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q21: What is client-side rendering (CSR) in Next.js?
          </div>
          <p>CSR in Next.js renders components entirely on the browser after the initial HTML is loaded.</p>
        </section>

        {/* Q22 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q22: Difference between Link and anchor tag in Next.js?
          </div>
          <p>Link enables client-side navigation without page reload. Anchor tag triggers full page reload.</p>
        </section>

        {/* Q23 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q23: What is ISR (Incremental Static Regeneration)?
          </div>
          <p>ISR allows static pages to be regenerated in the background at runtime without rebuilding the whole app.</p>
        </section>

        {/* Q24 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q24: What are React Portals?
          </div>
          <p>Portals allow rendering a child component into a DOM node outside the parent component hierarchy.</p>
        </section>

        {/* Q25 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q25: Difference between useRef and createRef?
          </div>
          <p>useRef persists across renders in functional components. createRef is used in class components and creates a new ref each render.</p>
        </section>

        {/* Q26 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q26: What is React Suspense?
          </div>
          <p>Suspense allows components to "wait" for something (like lazy-loaded components or data) before rendering.</p>
        </section>

        {/* Q27 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q27: What is Next.js API Route?
          </div>
          <p>API routes in Next.js allow backend code to be written in the /pages/api directory to handle server-side logic.</p>
        </section>

        {/* Q28 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q28: Difference between dynamic imports and React.lazy?
          </div>
          <p>Both load components asynchronously. Next.js dynamic imports support SSR and more optimizations compared to React.lazy.</p>
        </section>

        {/* Q29 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q29: What is shallow routing in Next.js?
          </div>
          <p>Shallow routing allows changing the URL without running getServerSideProps or getStaticProps again.</p>
        </section>

        {/* Q30 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q30: Difference between Next.js Head component and HTML head tag?
          </div>
          <p>Next.js Head component allows dynamic manipulation of the document head for each page while supporting SSR/SSG.</p>
        </section>

      </div>
    </div>
  );
}

export default Angularquestions;