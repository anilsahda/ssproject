import '../index.css';
import { useState } from 'react';

export default function AngularQA() {
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
          handleOpenPopup(<p><strong>Angular.json</strong> is used to store configuration settings. When the application is built, the Angular builder refers to this file for the app's entry point, which is defined in the build section.</p>)
        }
      >Angular.json</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Annotations</strong> are a way to add metadata to classes and class members. This metadata help us to understand how to use and treat classes and their members. There are many types of annotations like @Component, @NgModule, @Directive, @Pipe, @Injectable, @Input and @Output etc.</p>)
        }
      >Annotations</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Bootstrapping Module</strong> is the root module that Angular uses to start and configure the application. This module is essential for setting up the application environment. The bootstrapping process involves loading the necessary modules and components, initiating the change detection process, and rendering the initial view.</p>)
        }
      >Bootstrapping</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Ahead-of-Time</strong> and <strong>Just-in-Time</strong> are two ways to compile Angular applications. <strong>AOT</strong> is better for performance while <strong>JIT</strong> is better for development.<br />
<strong>AOT</strong> runs once during the build phase and converts HTML and TypeScript into JavaScript while <strong>JIT</strong> runs every time for each user at runtime<br />
<strong>AOT</strong>-compiled applications load faster because the browser doesn't need to compile templates<br />
<strong>AOT</strong> is recommended for larger projects while <strong>JIT</strong> is suitable for small projects<br />
<strong>AOT</strong> can improve security by preventing template injection attacks<br />
<strong>JIT</strong> is the default option in Angular.</p>)
        }
      >Compiler</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Data Binding</strong> is used to bind data between component and HTML page<br />
<strong>Interpolation</strong> is the simplest form of data binding. We use double curly braces &#123;&#123; &#125;&#125; to bind component property in HTML page.<br />          
<strong>Property Binding</strong> We use square brackets [] to bind a component property to an HTML Element.<br />
<strong>Style Binding</strong> We use square brackets [] to bind a component property to an HTML style property.<br />
<strong>Class Binding</strong> We use square brackets [] to bind a component property to an HTML element class.<br />
<strong>Attribute Binding</strong> is used to bind a component property to an HTML element attribute using square brackets [].<br />
<strong>Event Binding</strong> is used to bind a component method to an HTML element event using parentheses ().<br />
<strong>Two-Way Data Binding</strong> We use &#91;&#40;ngModel&#41;&#93; to two-way data binding which update the data both side in component and in view.
          </p>)
        }
      >Data Binding</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Decorators</strong> are functions that are used to modify the behavior of classes and their members. Decorators provide a way to add metadata. Decorators are used to define like components, services, directives, pipes, modules.<br />
  Angular supports four types of decorators<br />
<strong>Property Decorators</strong> are applied to class properties and are mostly used to modify the properties within the classes like @Input<br />
          <strong>Method Decorators</strong> are applied to classes methods and modify their behavior or add extra functionalities. For example @HostListener allows us to listen for events on a method.<br />
          <strong>Parameter Decorator</strong> is a special function that adds metadata or modifies the behavior of a function/method parameter. It’s commonly used in Angular for things like injecting services or capturing route parameters. Parameter decorators are heavily used with Dependency Injection and routing.<br />
          <strong>Class Decorators</strong> are used to classes to modify their behavior or metadata like @Component define a simple angular component. This decorator provides metadata such as selector, template and styles.<br />
<strong>@Directive</strong> is used to create a directive which is a class that allows to attach behavior to elements.<br />
<strong>@NgModule</strong> is a set of instructions that tells Angular how to assemble the components, directives, pipes and services into single units          
          </p>)
        }
      >Decorators</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Dependency Injection</strong> is a design pattern that is used to manage component dependencies by injecting them from external sources rather than creating them within the component itself. It is use to improved testability, make Components loose coupling.<br />
<strong>Dependency Injection</strong> creates single instances of services and shares them throughout the application. Constructor is used for Dependency Injection.</p>)
        }
      >DI</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Directives</strong> is special classes that add behavior to elements. Directives are used to manipulate the DOM, control the appearance and behavior of elements, and extend HTML capabilities.<br />
<strong>Component Directives</strong> are the most common directives used for creating components. A component directive includes a template that describes the view and a class that defines its behavior.<br />
<strong>Structural Directives</strong> change the DOM layout by adding, removing, or manipulating elements. They are prefixed with an asterisk (*).<br />
<strong>Attribute Directives</strong> can change the appearance or behavior of an element, component, or another directive. While they do not change the DOM structure, they can modify the element’s style, class, or other attributes.</p>)

}
      >Directives</button>
      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Error Handling</strong> ensures your app can gracefully handle unexpected issues—like API failures, rendering issues, or user input errors—without crashing the entire UI.<br />
<strong>HTTP Error Handling</strong> The HttpClient service returns observables for HTTP requests, which can be utilized with RxJS operators for error handling. We can build an HTTP interceptor to detect and handle faults in all HTTP requests.<br />
          <strong>Global Error Handling</strong> Angular provides a global error handling class called ErrorHandler. You can extend this class to create a custom global error handler<br />
          <strong>RxJS Operators</strong>: These operators allow you to handle errors in observables. You can use them to catch errors and return a fallback value or rethrow the error.<br />
          <strong>Component-Level Error Handling</strong>: You can handle errors directly in your components by subscribing to observables and using try-catch blocks for synchronous code.          
          </p>)
        }
      >Error Handling</button>
      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Angular is a powerful framework for developing web applications which have many features like<br />
<strong>Component-Based Architecture</strong>: It breaks down the application into reusable components, making the code more manageable and scalable.<br/>          
<strong>Routing</strong>: It includes a robust routing mechanism, allowing easy navigation between different views or pages in a SPA.<br/>
<strong>Two-Way Data Binding</strong>: It automatically synchronizes data between the model and view, reducing boilerplate code and making user input management easier.<br/>
<strong>Forms Management</strong>: It provides both reactive and template-driven forms, simplifying form validation and data binding.<br/>
<strong>Dependency Injection</strong>: It simplifies the management of service instances, increasing modularity and facilitating testing.<br/>
<strong>Directives</strong>: It extends HTML capabilities with directives that enhance the behavior of elements and components.</p>)
        }
      >Features</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Filters</strong>  are used to format an expression and present it to the user. They can be used in view templates, controllers, or services.

Some inbuilt filters are as follows.<br />
Date - Format a date to a specified format.<br />
Filter - Select a subset of items from an array.<br />
Json - Format an object to a JSON string.<br />
LimitTo - Limits an array/string into a specified number of elements/characters.<br />
Lowercase - Format a string to lowercase.</p>)
        }
      >Filters</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Template-Driven Forms</strong> manage form logic primarily within the HTML template using directives like ngModel and ngForm. Template-Driven Forms are better for simple forms.<br />
          <strong>Reactive Forms</strong> handle form logic within the component's TypeScript code using reactive programming principles, providing more control and flexibility for complex forms, especially when dealing with dynamic changes or intricate validation rules. Reactive Forms are ideal for complex scenarios.</p>,
          `import { FormBuilder, FormGroup, Validators } from '@angular/forms';
          
  export class AppComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
    
  <form [formGroup]="userForm" (ngSubmit)="onSubmit()">

  <div class="mb-3">
    <label>Name:</label>
    <input formControlName="name" class="form-control" />
    <div *ngIf="userForm.get('name')?.touched && userForm.get('name')?.invalid" class="text-danger">
      Name is required.
    </div>
  </div>

  <div class="mb-3">
    <label>Email:</label>
    <input formControlName="email" class="form-control" />
    <div *ngIf="userForm.get('email')?.touched && userForm.get('email')?.errors">
      <div *ngIf="userForm.get('email')?.errors?.['required']" class="text-danger">
        Email is required.
      </div>
      <div *ngIf="userForm.get('email')?.errors?.['email']" class="text-danger">
        Enter a valid email.
      </div>
    </div>
  </div>

  <button type="submit" class="btn btn-primary" [disabled]="userForm.invalid">
    Submit
  </button>

</form>
`)
        }
      >Forms</button>
      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Hooks</strong> are methods you implement in your component or directive class that Angular calls automatically at different stages.<br />
<strong>ngOnChanges()</strong> responds when Angular sets/resets data-bound input properties.<br />
<strong>ngOnInit()</strong> initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties<br />
<strong>ngDoCheck()</strong> detect and act upon changes that Angular can't or won't detect.<br />
<strong>ngAfterContentInit()</strong> responds after Angular projects external content into the component's view.<br />
<strong>ngAfterContentChecked()</strong> respond after Angular checks the content projected into the component.<br />
<strong>ngAfterViewChecked()</strong> respond after Angular checks the component's views and child views.<br />
<strong>ngOnDestroy()</strong> runs just before a component or directive is destroyed.
          </p>)
        }
      >Hooks</button>
      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>@HostBinding</strong> decorator is used to bind a property of the host element. It is used to set a property on the host element based on a property of the directive or component.</p>,
            `import{Directive,HostBinding}from '@angular/core';
@Directive({
 selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') 
  backgroundColor: string = 'yellow';
}`
          )
        }
      >@HostBinding</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>@HostListener</strong> decorator is used to listen for events on the host element. It is used to define a method that will be called when a specific event occurs on the host element.</p>,
            `import{Directive,HostListener}from '@angular/core'
@Directive({
 selector: '[appClickLogger]'
})
export class ClickLoggerDirective {
 @HostListener('click', ['$event'])
 onClick(event: Event): void {
  console.log('Host element clicked!', event);
 }
}`
          )
        }
      >@HostListener</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Interceptor</strong>Angular HTTP Interceptor is a feature that allows us to intercept and modify all outgoing HTTP requests and incoming HTTP responses in a centralized way. It acts like a middleware layer between the Angular application and the backend API.<br />
<strong>Why Interceptors Are Needed</strong><br />
In a real-world Angular application, almost every HTTP call needs some common behavior, like Adding an authentication token, Adding common headers, Showing and hiding loaders, Handling errors globally and Logging API calls. <br />
If we implement this logic inside every service, it leads to Code duplication, Tight coupling, Difficult maintenance.<br />
Interceptors solve this problem by allowing us to handle cross-cutting concerns in one place.<br />
<strong>How Interceptor Works</strong><br />
Whenever Angular’s HttpClient makes a request: The request first passes through one or more interceptors<br />
The interceptor can: Modify the request like add headers and Pass it to the server<br />
When the response comes back: The interceptor can process the response and Handle errors. Finally, the response reaches the component or service<br />
<strong>Common Use Case</strong><br />
A very common use case is JWT authentication.<br />
After login: The token is stored in localStorage or sessionStorage, Every API call must send this token in the Authorization header<br />
Instead of adding the token manually in every service: The interceptor reads the token once<br />
Adds it to every outgoing request, This keeps the services clean and focused only on business logic.<br />
Error Handling with Interceptor like If the server returns 401 Unauthorized, The interceptor can log the user out<br />
Redirect to the login page, If a 500 error occurs The interceptor can show a generic error message<br />
This avoids writing repetitive error handling logic in every component.<br />
<strong>Multiple Interceptors</strong><br />
Angular supports multiple interceptors. They are executed in the order they are provided<br />
Requests go through interceptors in sequence<br />
Responses come back in reverse order<br />
This allows us to separate responsibilities, for example: One interceptor for authentication One for logging One for error handling<br />
<strong>Benefits of Using Interceptors</strong><br />
Centralized HTTP logic<br />
Cleaner and more maintainable code<br />
Better separation of concerns<br />
Easy to extend without touching existing services<br />
Consistent behavior across the application<br />
<strong>When Not to Use Interceptors</strong><br />
For component-specific logic<br />
For business rules related to a single feature<br />
For UI-only behavior<br />
Interceptors should be used only for cross-cutting concerns.</p>)
        }
      >Interceptor</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Module</strong> is a mechanism that groups similar components, directives, pipes, and services. This group help in structure and functionality to makes it easier to maintain and scale.</p>)
        }
      >Module</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>NgModules</strong> are containers that reserve a code block to an application domain or a workflow. @NgModule takes a metadata object that generally describes the way to compile the template of a component and generate an injector at runtime. In addition, it identifies the module's components, directives, and pipes, making some of them public through the export property so that external components can use them.</p>)
        }
      >NgModules</button>
      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>NgRx</strong> implements the Redux principles for providing a structured way of managing the application state. NgRx uses concepts like actions, reducers, effects and selectors to manipulate the state in the application.<br />
<strong>Store</strong> is the part of the state manager that contains immutable data. The data contained in store cannot be changed directly. Means all state changes must be done through actions. These actions define what will be changed in the state which is defined in reducer.<br />
<strong>Reducer</strong> process all necessary actions that changes the state of the store. It receives as input of current state and the action and returns the new state after the change.<br />
<strong>Actions</strong> are simply objects that are sent to store with the information that will change the store’s state.<br />
<strong>Selectors</strong> are functions used to access and get specific information of state from store.<br />
<strong>Effects</strong> deal with asynchronous tasks or side effects like network requests, database access, calls to external APIs, or any operation.</p>)
        }
      >NgRx</button>
<button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>NgZone</strong> provides an execution context for running code both inside and outside of zone. It uses the Zone.js library to manage and monitor asynchronous operations and allow to perform change detection efficiently.<br />
<strong>Purposes of NgZone:</strong><br />
<strong>Change Detection</strong>: Helps Angular know when to run change detection. When you run code within NgZone, Angular can automatically trigger change detection when async operations are complete.<br />
<strong>Performance Optimization</strong>: By running code outside of NgZone, you can prevent unnecessary change detection cycles, improving performance in applications with a lot of asynchronous operations.<br />
<strong>Task Tracking</strong>: Allows you to track tasks, providing hooks to run code before and after a task is completed, which is useful for debugging and performance analysis.</p>)
        }
      >NgZone</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Lazy Loading</strong> to load modules on-demand instead<br />
Reduces bundle size and improves page load time<br />
Compress images to reduce file size<br />
Avoid frequent changes to complex objects or arrays<br />
trackBy can track and update only the items that have changed, reducing unnecessary DOM manipulation and improving rendering speed, especially when dealing with large lists.<br />
Use immutable data structures<br />
Use Ahead Of Time compilation<br />
Use data caching to speed up loading times<br />
Use the Angular profiler to identify performance<br />
Use the Build Optimizer to remove unnecessary code<br />
Use code splitting technique to divide application<br />
Use tree-shaking approach to remove unnecessary code</p>)
        }
      >Optimize</button>
        <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Pipes</strong> are a way to transform the format of output data for display. The data can be string, currency, date etc. Pipes are simple functions that accept an input and return a transformed value. Pipes do not alter the data but change into the required format to display in the browser. Angular provides many built-in pipes for data transformation like Currency, Date, Lower Case and Upper Case<br />
<strong>Pure Pipes vs Impure Pipes</strong> detect changes within strings, numbers etc, while Impure Pipes detect changes within objects.
Pure Pipes uses pure functions while Impure Pipes uses impure functions. In Pure Pipes single instance is created while in Impure Pipes multiple instance is created
Pure Pipes can optimize performance while Impure Pipes may slow down performance.<br />
<strong>Custom Pipes</strong> We can create custom pipes using PipeTransform interface which provides one transform() that takes an input value and returns the transformed value.</p>,
        `custom.pipe.ts
--------------		
import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name: 'filterByLength'})
export class CustomPipe implements PipeTransform{
 transform(values:string[],minLength:number): 
 string[]{
   return 
   values.filter(value=>value.length>=minLength);
  }
}

app.module.ts
-------------
@NgModule({
  declarations: [CustomPipe]
})

app.component.ts
----------------
export class AppComponent {
  values: string[]=['apple','banana','date'];
}

app.component.html
------------------
<li *ngFor="let value of values | 
filterByLength: 5">{{ value }}</li>`)
        }
      >Pipes</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Promise and Observable</strong> are both used to handle asynchronous operations.<br />
<strong>Promise</strong> are simpler and better for basic tasks, while <strong>Observable</strong> are more flexible and better for complex tasks.<br />
<strong>Promise</strong> returns one value while <strong>Observable</strong> emits multiple values.<br />
<strong>Promise</strong> executes immediately on request creation while <strong>Observable</strong> execution is deferred until subscription.<br />
<strong>Promise</strong> cannot be canceled once started while <strong>Observable</strong> can be unsubscribed to cancel ongoing operation.<br />
<strong>Promise</strong> has no operators while <strong>Observable</strong> has operators for creation, transformation, filtering etc.</p>)
        }
      >Promise vs Observable</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Resolver</strong>: is a middleware that gathers data before a route is activated. It’s useful when you need data before displaying a component, especially for loading profiles or combining multiple data sources. It ensuring that components are fully ready before rendering.<br />
<strong>Pre-loading Data</strong>: When you need to load data before displaying a component, such as retrieving user information before showing a profile page.<br />
<strong>Preventing Incomplete Views</strong>: To avoid rendering components without the necessary data, which can lead to a poor user experience.<br />
<strong>Fetching Multiple Data Sources</strong>: When a component relies on multiple data sources that need to be fetched and combined before rendering.<br />
<strong>Boosting Performance</strong>: By loading data in advance, you reduce perceived loading time, making the application feel more responsive to users.</p>)
        }
      >Resolver</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Renderer2</strong> service provides an abstraction layer for manipulating the DOM to ensure that our application can run across different platforms like web browsers, server-side rendering, and mobile apps.<br />
<strong>Purposes of Renderer2</strong>:<br />
<strong>Platform Agnosticism</strong>: Eliminates the need for direct DOM manipulation, which is specific to web browsers, making your code more portable and compatible with other platforms.<br />
<strong>Security</strong>: Reduces security risks such as Cross-Site Scripting (XSS) by offering a safer way to interact with the DOM.<br />
<strong>Consistency</strong>: Ensures that DOM changes are consistent with Angular’s change detection and rendering processes, maintaining the integrity of your app’s state and UI.<br />
<strong>Ease of Testing</strong>: Renderer2 simplifies unit testing by allowing you to mock the renderer and test interactions without relying on the actual DOM.</p>)
        }
      >Renderer2</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>RxJS</strong> is a library which is used to handle asynchronous and event-based programming.<br />
<strong>Observables</strong>: The foundation of RxJS, representing a sequence of data that can be tracked over time. Unlike promises, which resolve once, observables can emit multiple values over time.<br />
<strong>Observers</strong>: Objects that subscribe to observables and receive data, handling it through methods like next(), error(), and complete().<br />
<strong>Operators</strong>: RxJS provides operators like map, filter, merge, and concat to manipulate and transform observables.<br />
<strong>Subjects</strong>: Special types of observables that allow multicasting to multiple observers and can act as both observables and observers.<br />
<strong>Subscriptions</strong>: When you subscribe to an observable, a subscription object is returned, enabling you to unsubscribe and stop the data stream when needed.</p>)
        }
      >RxJS</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Single-Page Applications</strong> are web applications that load once with new features just as mere user interface additions. It does not load new HTML pages to display the new page's content; it is generated dynamically. This is made possible through JavaScript's ability to manipulate the DOM elements on the existing page itself. SPA approach is faster, thus providing a seamless user experience. </p>)
        }
      >SPA</button>
      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>State management</strong> means handling application data in a centralized and controlled way, where data is stored at one place, updated properly, and shared across multiple components. Whenever the data changes, all related components automatically get updated, which helps avoid data mismatch, improves performance, and makes the application easier to manage as it grows.<br />
<strong>Why State Management Is Needed</strong><br />
As an Angular application grows, multiple components often need access to the same data. These components may not have a direct parent-child relationship.<br />
If we rely only on @Input() and @Output() or repeated API calls, It leads to Code duplication, Data inconsistency and Difficult maintenance<br />
State management solves this by centralizing shared data and making it available wherever needed.<br />

<strong>State Management Approaches can be</strong><br />
1. Component State: This is state managed inside a single component. Example: form values, UI toggles<br />
2. Service-Based State Management: Angular services combined with RxJS are widely used for state management.<br />
Data is stored in a service using BehaviorSubject or Observable<br />
Components subscribe to this data<br />
When the state changes, all subscribers automatically update<br />
This approach is Simple, Effective and Suitable for small to medium-sized applications<br />
3. NgRx: For large and complex applications, Angular provides NgRx, which follows the Redux pattern.<br />
NgRx introduces a structured data flow: <br />
Actions describe what happened<br />
Reducers define how the state changes<br />
Store acts as a single source of truth<br />
Selectors retrieve specific parts of the state<br />
Effects handle API calls and other side effects<br />
In this approach Components only dispatch actions and Business logic and state updates are handled centrally<br />

<strong>When to Use NgRx</strong><br />
Large-scale applications<br />
Complex data flows<br />
Multiple teams working on the same codebase<br />
When predictable and traceable state changes are required<br />

<strong>When Not to Use NgRx</strong><br />
Small applications<br />
Simple CRUD-based systems<br />
When state sharing is minimal<br />
NgRx adds structure but also complexity, so it should be used only when needed.<br />

<strong>Benefits of Proper State Management</strong><br />
Single source of truth<br />
Better performance through optimized data flow<br />
Easier debugging and testing<br />
Consistent data across components<br />
Scalable and maintainable architecture</p>)
        }
      >State Management</button>
      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Angular Template</strong> is HTML and represents a view which display data and change the data whenever an event occurs.<br />
There are two ways of defining templates <strong>Inline and External</strong> Template<br />
We can create inline template using template property of @Component decorator.<br />
By default Angular use external template. It binds template with a component using templateUrl option. TemplateUrl is used in External format where as in case of inline Template we use template instead of templateurl.</p>)
        }
      >Template</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>trackBy</strong> can track and update only the items that have changed, reducing unnecessary DOM manipulation and improving rendering speed, especially when dealing with large lists.</p>)
        }
      >trackBy</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>JavaScript</strong> is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript. <strong>TypeScript</strong> allows specifying the types of data being passed around the code, and has the ability to report errors when the types don't match. TypeScript is transpiled into JavaScript using a compiler when run the application as web browser can not understand the TypeScript directly.<br />
<strong>Static Typing</strong>: TypeScript provides static typing, allowing developers to catch type-related errors during development rather than at runtime. This leads to improved code quality and fewer bugs.<br />
<strong>Enhanced IDE Support</strong>: TypeScript enables better auto-completion, code navigation, and refactoring tools in modern IDEs like Visual Studio Code, improving developer productivity.<br />
<strong>Improved Code Documentation</strong>: TypeScript’s type annotations serve as self-documenting code, making it easier for developers to understand and maintain codebases.<br />
<strong>Better Collaboration</strong>: TypeScript’s type system helps teams collaborate more effectively by providing clear contracts between different parts of the codebase.<br />
<strong>Learning Curve</strong>: Learning TypeScript syntax and concepts may require additional time and effort, especially for developers new to statically typed languages.<br />
<strong>Integration Overhead</strong>: Integrating TypeScript into an existing React project may require configuration changes and additional tooling setup, which can be challenging.<br />
<strong>Compatibility Issues</strong>: TypeScript may have compatibility issues with certain libraries, especially those lacking type definitions. This may require developers to write or find type definitions for third-party libraries.<br />
<strong>Complexity</strong>: TypeScript adds complexity to the codebase, especially for smaller projects where the benefits of static typing may not outweigh the overhead of adopting TypeScript.</p>)
        }
      >TypeScript</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Angular 16</strong> Three new reactivity primitives have been introduced: signal, computed, and effect.
Improved ability to reuse existing DOM nodes during server-side rendering or pre-rendering.<br />
The developer preview of the new Angular CLI builders based on build.<br />
Tools and guides to standalone components, directives and pipes.<br />
You can now mark component and directive inputs as needed.<br />
<strong>Angular 18</strong> Moving away from Zone.js for change detection.<br />
Improved support for native async operations.<br />
New methods for partial hydration to enhance server-side rendering.<br />
More precise control over state change events.<br />
Route redirects can now be defined using functions for more dynamic routing.</p>)
        }
      >Updates</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Web Workers</strong> are used for enhancing performance and responsiveness. <br />
          By offloading CPU-intensive tasks to Web Workers, the main thread remains free to handle user interactions and interface updates, preventing the application from becoming unresponsive during heavy computations.<br />
Parallel Processing: Web Workers allow parallel processing, enabling multiple tasks to run concurrently. This makes effective use of multi-core CPUs, which is especially beneficial for tasks like data processing, image manipulation, and complex calculations.<br />
By offloading CPU-intensive tasks to Web Workers, the main thread remains free to handle user interactions and interface updates, preventing the application from becoming unresponsive during heavy computations.<br />
Parallel Processing: Web Workers allow parallel processing, enabling multiple tasks to run concurrently. This makes effective use of multi-core CPUs, which is especially beneficial for tasks like data processing, image manipulation, and complex calculations.</p>)
        }
      >Web Workers</button>
      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>ViewChild and ContentChild</strong> decorators allow a parent component to access its child components directly. These decorators can be used to reference child component instances and access their properties and methods.</p>)
        }
      >ViewChild & ContentChild</button>
      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>View Encapsulation</strong> is a mechanism which is used to control how styles of the components are scoped and applied to the application. This means the styles defined in a component do not affect any other part of the application and vice versa.<br />
          Angular supports 3 forms of view encapsulation:<br />
          <strong>ViewEncapsulation.Emulated</strong> is the default mode. Angular emulates the behavior of the Shadow DOM so that it is scoped to the component’s view. Angular adds unique attributes to the component’s host elements and its children.<br />
          <strong>ViewEncapsulation.ShadowDom</strong> Angular uses the browser’s native Shadow DOM API to encapsulate the component’s styles and views. The component’s view is enclosed inside a ShadowRoot, and styles are applied in an isolated manner.<br />
          <strong>ViewEncapsulation.None</strong> No encapsulation is applied. The component's styles are global and can affect any part of the application. Styles defined in the component are added to the global styles and become available throughout the application.</p>)
        }
      >View Encapsulation</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>DomSanitizer Service</strong> can be used which is Angular’s built-in service when dealing with dynamic content that may contain HTML, CSS and JavaScript.<br />
<strong>Interpolation and Property Binding</strong> mechanisms can be used for data binding which automatically sanitize user input to make it safe to render in the browser. We should always use these mechanisms when rendering dynamic content to prevent XSS.<br />
<strong>Angular Templates</strong> Instead innerHTML or outerHTML we should utilize Angular's template to render dynamic contentto prevent XSS.</p>,
`import { DomSanitizer } from '@anglr/platform-browser'
constructor( private sanitizer : DomSanitizer) {}
sanitizedHtml = this.sanitizer.sanitize(
SecurityContext.HTML, userInput);`)
        }
      >Vulnerabilities</button>

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