import { useState } from 'react';
import '../Netaspnetquestion.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const questions = [
  {
    id: 1,
    question: "Round Trip",
    answer: `The trip of a Web page from the client to the server and then back to the client is known as a round trip. In ASP.NET Response.Redirect() causes a round trip.
    In other words, any web page that travels from the client side to the server side will get processed on the server and travels back to the client, this whole process is called a round trip.`
  },
  {
    id: 2,
    question: "Global.asax",
    answer: `The Global.asax file has been derived from the HttpApplication class. The Global.asax file is used to add application-level logic and processing. The code in the Global.asax is compiled when the web application is built for the first time. It controls the events like `,
    code: `Application_Start,Application_End,Session_Start,Session_End.`
  },
  {
    id: 3,
    question: "Web.config vs Machine.config",
    answer: `Both files are used to define configurations for ASP.NET application. 
    Web.config: is used to define application-level settings. If any setting is not specified in Web.config it inherits from Machine.config by default. Web.config is an XML-based configuration file for an ASP.NET application that includes the settings for Data Connection, Customizing Security, State Management, Memory Management, Error Handling, and much more.
    Machine.config: This file is at the highest level in the configuration hierarchy. Machine.config is used for defining server-level settings.`
  },
    {
    id: 4,
    question: "Various Page Events",
    answer: `PreInit: This is the first event of a page used to set values such as a master page.
Init: This event fires after each control have been initialized. You can use this event to change the initialized value of controls.
InitComplete: This event is raised after all initializations of a page and its controls have been completed.
PreLoad: This event fires before the view state has been loaded for a page and its controls and before page postback processing. This event is useful when you need to write code after the page is initialized.
Load(PageLoad): The page load event is generally used to check postback and then sets control properties appropriately. After this event, the load event of child control is called.
ControlEvents(Postback): This event is called when a page or its controls causes postback such as ButtonClick event, SelectedIndexChanged event, CheckedChanged events, etc.
LoadComplete: At this event, all controls are loaded even after additional processing can be done here.
PreRender: This event is taking place before the view state is saved also it allows final changes to the page or its control.
SaveStateComplete: Any changes to the page’s controls at this point are ignored here. This event is useful if you need to write processing that requires the view state to be set.
Render: In reality, it is not an event this is actually a method of a page object and its controls. At this point, controls are rendered in client-sideHTML, DHTML, and scripts for the browser.
Unload: This event is used to clean up code you can use it to manually release resources.`
  },
  {
    id: 5,
    question: "Server Controls",
    answer: `The ASP.NET server controls are objects on the ASP.NET pages that run when the Web page is requested. Many server controls, such as buttons and text boxes, are similar to the HTML controls.`
  },
    {
    id: 6,
    question: "  Hyperlink vs LinkButton",
    answer: `Hyperlink control does not have the Click and Command events; whereas the LinkButton control has these events, which can be handled in the code-behind file of the Web page.`
  },
    {
    id: 7,
    question: "Navigation Controls",
    answer: `Navigation controls help us to navigate in a Web application easily. These controls store all the links in a hierarchical or drop-down structure.
There are 3 navigation controls: SiteMapPath, Menu, TreeView`
  },
    {
    id: 8,
    question: "User Control vs Custom Control",
    answer: `User Control: A reusable page fragment defined in an .ascx file, easy to create, mainly for static UI elements, and used only within the current application. It is language-dependent and cannot be added to the Visual Studio toolbox.
    Custom Control: A fully compiled control built into a DLL, designed for dynamic and reusable content across multiple applications. It is language-independent, more complex to create, and can be added to the Visual Studio toolbox.`
  },
    {
    id: 9,
    question: " Globalization vs Localization",
    answer: `Globalization: Designing and developing an application to support multiple cultures and locales, making it ready for international use.

Localization: Customizing an application for a specific culture or locale, often by translating the UI and adapting content.`
  },
    {
    id: 10,
    question: "Resource File",
    answer: `ASP.NET provides resource files to implement globalization and localization. The resource file is an XML file having extension resx. Each resource in the resx file is in the form of a key-value pair. For example, WebResources.en.resx is a resource file for the English language, and WebResources.hi.resx is a resource file for the Hindi language. There are two types of resource files as given below :
Local Resources: Local resources are specific to a single web page and are used for providing versions of a web page in different languages. These are stored in the App_LocalResources folder.

Global Resources: Global resources are common for the whole web application and can be accessed by all the web pages. These are stored in the App_GlobalResources folder.
`
  },
    {
    id: 11,
    question: "GridView vs DataGrid",
    answer: `GridView: A data-bound control introduced in ASP.NET 2.0 that supports built-in paging, sorting, updating, deleting, and automatic styling, but has slower performance.

DataGrid: A data-bound control introduced in ASP.NET 1.0 that requires manual coding for paging, sorting, updating, and deleting, lacks automatic styling, but offers faster performance.
`
  },
    {
    id: 12,
    question: "ListView vs Repeater",
    answer: `ListView: A flexible data-bound control introduced in ASP.NET 3.5 that supports built-in paging, sorting, data grouping, and CRUD operations, but has slower performance.

Repeater: A lightweight data-bound control introduced in ASP.NET 1.0 that requires custom coding for paging, sorting, data grouping, and CRUD operations, but offers faster performance.`
  },
    {
    id: 13,
    question: "Session State",
    answer: `There are different modes of session states which can be defined in a Web.config file.
Off: Specify that Session state is not enabled.
InProc: This is the default mode of the session. In this mode session state is stored on the web server i.e. IIS where an application is running.
OutProc: The OutProc mode can be handled by using the following ways -
State Server: In this mode, the session is stored in a separate process called ASP.NET state service. This ensures that the session state will be available in the web application and is restarted. This way also makes the session state available to multiple web servers in a web farm.
SQL Server: In this mode, the session is stored in aSQL Serverdatabase. This also ensures that the session state will be available in the web application is restarted. This way also makes the session state available to multiple web servers in a web farm.`
  },
    {
    id: 14,
    question: "MVC Pattern",
    answer: `Model: The Model represents the core data and business logic of the application. It is responsible for managing the data, processing rules, and interactions with the database or data sources. The Model does not handle user interface or input but focuses solely on the data and operations related to it.

View: The View is the presentation layer of the application. It displays the data provided by the Model to the user and is responsible for the user interface. Views are concerned with how information is presented, but they do not contain business logic or handle user input directly.

Controller: The Controller acts as an intermediary between the Model and the View. It handles user input, processes user requests, and decides which Model data to retrieve and which View to display.`
  },
    {
    id: 15,
    question: "NuGet Package Manager",
    answer: `NuGet is a package manager dedicated to the .NET ecosystem. Microsoft developed it to offer access to thousands of packages being written by .NET developers.

A classic web application being developed through ASP.NET depends on several open-source NuGet packages to work. One of the famous NuGet package managers is Newtonsoft.Json. It is used for working with JSON data in .NET.`
  },
  {
    id: 16,
    question: "Bundling vs minification",
    answer: `In ASP.NET, the concept of bundling and minification refers to the techniques that help in optimizing the performance of web application by reducing the number of HTTP requests and minimizing the size of resourceslike CSS, JavaScript.`
  },
  {
    id: 17,
    question: "Validators",
    answer: `RequiredFieldValidator: This validator is used when you don’t want the container to stay empty. 
RangeValidator: It finds out whether the value in validated control falls the specific range or not. 
CompareValidator: It tests if the value in controls matches certain specific values or not. RegularExpressionValidator: Tests if the particular value matches an explicit regular expression or not.
CustomValidator: Useful for defining User Defined validation.
Summary Validation:This shows a summary of all existing validation errors over an ASP.NET page.`
  },
    {
    id: 18,
    question: "Various Controls",
    answer: `Server controls are HTML elements that contain a runat=server attribute. These components provide automatic state management as well as server-side events and react to the user events by implementing an event handler on the server. 
HTML controls: They also respond to the related user events but the events processing takes place on the client machine.
Data controls: Data controls enable connection to the database, run commands, and access data from a database.`
  },
    {
    id: 19,
    question: "ASP.NET Page Lifecycle.",
    answer: `The ASP.NET page lifecycle is the sequence of events that happen in an ASP.NET web page, that is from creation to its rendering. There are many stages involved in the process like:
Initialization- At this stage, the initialization of controls and the setting of their properties happen.
Loading- Here, control events are processed and they have a ViewState data which is restored.
Postback event handling- The Postback events are handled at this stage.
Rendering- At this stage the page is sent to the client after it is generated.
Unloading- Finally, the page is unloaded and it releases all its resources.`
  },
    {
    id: 20,
    question: "Web Forms vs MVC",
    answer: `ASP.NET Web Forms: A UI-based framework that uses drag-and-drop controls and an event-driven model to build web applications. It manages state automatically using ViewState and is ideal for rapid development with complex UI needs.

ASP.NET MVC: A lightweight, pattern-based framework that follows the Model-View-Controller architecture. It provides full control over HTML and is suited for applications requiring clear separation of concerns and testability.`
  },
    {
    id: 21,
    question: "Caching",
    answer: `Caching is the process of storing frequently accessed data or page output in memory to reduce server load and improve application performance. Like

Output Caching: Stores the entire rendered HTML of a page and serves it for future requests without regenerating it.
Data Caching: Stores data objects (e.g., datasets, objects) in memory for reuse across requests.
Fragment Caching: Caches only a portion (fragment) of the page, such as a user control or partial view.
SQL Cache Dependency: Automatically invalidates cached data when the underlying SQL Server data changes.
Custom Caching: Allows developers to implement personalized caching logic based on specific application needs.`
  },
    {
    id: 22,
    question: "Response.Redirect vs Server.Transfer",
    answer: `Response.Redirect: Redirects the user to a new page, making a round trip to the server. The URL in the browser changes.
Server.Transfer: Transfers control to another page on the same server without a round trip. The browser URL remains unchanged.`
  },
    {
    id: 23,
    question: "Routing",
    answer: `Routing is used to define URL patterns for the application and then those URL patterns are mapped onto specific controller actions. Routing system also defines the incoming URL requests and tells which controller and action is required to handle them.`
  },
    {
    id: 24,
    question: "Deploy",
    answer: `To deploy we follow the steps like:
Preparing the Application for Deployment- Make sure that the application is successfully developed, tested and ready for deployment.
Choosing a Hosting Environment- Choose a hosting environment like Azure app Service or AWS Elastic Beanstalk.
Setting up of Production Environment- Make sure that all the hardware and software requirements are met by the server.
Publishing the Application- Publish the application using Visual Studio or .NET CLI.
Deploying to the Server- Transfer it to the production server with the help of FTP, SSH or Git.
Configuring IIS (if applicable)- Configure IIS settings if the application is hosted on an IIS server.
Testing the Environment- Test the deployed application thoroughly to make sure that all the functions are working correctly.
Monitoring and Maintenance- Monitor the performance of the application and regularly update and maintain the application with enhancements required.
Backup and Disaster recovery- Set up backup and disaster recovery techniques to protect the application and its data.`
  },
    {
    id: 25,
    question: "ActionResult",
    answer: `ActionResult is a base class that represents the result of an action method. It allows controllers to return different types of responses to the client, such as views, JSON data, files, or status codes. like

ViewResult: Returns an HTML view to the browser.
PartialViewResult: Returns a portion of a view (partial view), commonly used with AJAX.
RedirectResult: Redirects the browser to a specified URL.
RedirectToRouteResult: Redirects the user based on route configuration.
RedirectToActionResult: Redirects to a specific action method within a controller.
JsonResult: Returns JSON-formatted data, useful for APIs and AJAX calls.
ContentResult: Returns plain text, HTML, or any custom content.
FileResult: Sends a file to the browser, either to display or download.
EmptyResult: Returns no content; used when no response is required.`
  }
];

function Netaspnetquestion() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleClose = () => {
    setSelectedAnswer(null);
  };

  return (
    <div className="asp-container">
      <div className="question-columns">
        {questions.map((q) => (
          <button
            key={q.id}
            className="btn btn-primary"
            onClick={() => setSelectedAnswer(q)}
          >
            {q.question}
          </button>
        ))}
      </div>

      {selectedAnswer && (
        <div className="popup-overlay" onClick={handleClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>
              ×
            </button>
            <div className="answer-text">
              {selectedAnswer.answer
                .split('\n')
                .map((line, index) => <p key={index}>{line}</p>)}
            </div>
            {selectedAnswer.code && (
              <SyntaxHighlighter language="csharp">
                {selectedAnswer.code}
              </SyntaxHighlighter>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Netaspnetquestion;
