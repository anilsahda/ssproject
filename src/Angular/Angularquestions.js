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
        <h1 className="fw-bold mb-5 text-primary text-center">Angular Interview Q&A</h1>

        {/* Q1 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q1: What is Angular and why is it used?
          </div>
          <p>Angular is a TypeScript-based framework for building dynamic single-page applications with reusable components and services.</p>
          <pre style={preStyle}>{`import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hello Angular</h1>'
})
export class AppComponent {}`}</pre>
        </section>

        {/* Q2 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q2: What are Angular Modules?
          </div>
          <p>Modules (NgModules) organize an Angular app into cohesive blocks of functionality and help with lazy loading and dependency injection.</p>
          <pre style={preStyle}>{`import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}`}</pre>
        </section>

        {/* Q3 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q3: What is Angular CLI?
          </div>
          <p>Angular CLI is a command-line tool to initialize, develop, scaffold, and maintain Angular applications efficiently.</p>
        </section>

        {/* Q4 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q4: What is Data Binding in Angular?
          </div>
          <p>Data binding is a mechanism to coordinate communication between the component class and the template, including one-way and two-way bindings.</p>
        </section>

        {/* Q5 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q5: Difference between Components and Directives?
          </div>
          <p>Components are directives with templates used to render UI. Directives modify the DOM or behavior of elements without their own templates.</p>
        </section>

        {/* Q6 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q6: What are Angular Services?
          </div>
          <p>Services are singleton classes used to share data or logic across components via dependency injection.</p>
          <pre style={preStyle}>{`import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  getData() { return [1,2,3]; }
}`}</pre>
        </section>

        {/* Q7 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q7: What is Dependency Injection in Angular?
          </div>
          <p>Dependency Injection is a design pattern where a class receives its dependencies from an external source rather than creating them itself.</p>
        </section>

        {/* Q8 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q8: What is Angular Router?
          </div>
          <p>Angular Router enables navigation between views and supports lazy loading, guards, and route parameters.</p>
        </section>

        {/* Q9 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q9: What is Angular Forms Module?
          </div>
          <p>Angular provides Template-driven and Reactive forms modules for handling user input, validation, and form events.</p>
        </section>

        {/* Q10 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q10: What are Angular Pipes?
          </div>
          <p>Pipes are used to transform data in templates, such as formatting dates, currencies, or custom transformations.</p>
          <pre style={preStyle}>{`{{ birthday | date:'fullDate' }}`}</pre>
        </section>

        {/* Q11 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q11: Difference between ngIf and ngFor?
          </div>
          <p>ngIf conditionally renders elements. ngFor renders a list of elements by iterating over a collection.</p>
        </section>

        {/* Q12 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q12: What is Angular Lifecycle Hooks?
          </div>
          <p>Lifecycle hooks are methods like ngOnInit, ngOnDestroy, ngAfterViewInit called at specific stages of a component's lifecycle.</p>
        </section>

        {/* Q13 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q13: Difference between Observable and Promise in Angular?
          </div>
          <p>Observable can emit multiple values over time and can be canceled. Promise emits a single value and cannot be canceled.</p>
        </section>

        {/* Q14 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q14: What is Angular HttpClient?
          </div>
          <p>HttpClient is a service to perform HTTP requests and handle responses with observables.</p>
        </section>

        {/* Q15 */}
        <section className="mb-5">
          <div style={sectionHeaderStyle}>
            <FaQuestionCircle /> Q15: Difference between Angular and AngularJS?
          </div>
          <p>Angular is a TypeScript-based modern framework with components and modules. AngularJS is JavaScript-based with controllers and $scope.</p>
        </section>

      </div>
    </div>
  );
}

export default Angularquestions;
