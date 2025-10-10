import '../index.css';
import { useState } from 'react';

export default function MVCQA() {
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
      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Round Trip</strong> any web page that travels from the client side to the server side will get processed on the server and travels back to the client, this whole process is called a round trip.</p>)
        }
      >Round Trip</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Global.asax</strong> file has been derived from the HttpApplication class. The Global.asax file is used to add application-level logic and processing. The code in the Global.asax is compiled when the web application is built for the first time. It controls the events like<br />
          Application_Start<br />Application_End<br />Session_Start<br />Session_End</p>
          )
        }
      >Global.asax</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Both files are used to define configurations<br />
<strong>Web.config</strong> is used to define application-level settings. If any setting is not specified in Web.config it inherits from Machine.config by default. Web.config is an XML-based configuration file for an ASP.NET application that includes the settings for Data Connection, Customizing Security, State Management, Memory Management, Error Handling, and much more.
<strong>Machine.config</strong> file is at the highest level in the configuration hierarchy. Machine.config is used for defining server-level settings.</p>)
        }
      >Config Files</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>PreInit</strong> is the first event of a page used to set values such as a master page.<br />
<strong>Init</strong> event fires after each control have been initialized. You can use this event to change the initialized value of controls.<br />
<strong>InitComplete</strong> event is raised after all initializations of a page and its controls have been completed.<br />
<strong>PreLoad</strong> event fires before the view state has been loaded for a page and its controls and before page postback processing. This event is useful when you need to write code after the page is initialized.<br />
<strong>Load(PageLoad)</strong> event is used to check postback and then sets control properties. After this event, the load event of child control is called.<br />
<strong>ControlEvents(Postback)</strong> event is called when a page or its controls causes postback such as ButtonClick event, SelectedIndexChanged event etc.<br />
<strong>LoadComplete</strong> event load all controls.<br />
<strong>PreRender</strong> event is taking place before the view state is saved also it allows final changes to the page or its control.<br />
<strong>SaveStateComplete</strong> ignore any changes to the page’s controls<br />
<strong>Render</strong> is not an event this is actually a method of a page object and at this point controls are rendered in client-side.<br />
<strong>Unload</strong> is used to clean up the code  and use to release resources manually</p>)
        }
      >Page Events</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Server Controls</strong> are HTML elements that contain a runat=server attribute. These components provide automatic state management as well as server-side events and react to the user events by implementing an event handler on the server.<br />
<strong>HTML Controls</strong> respond to the related user events but the events processing takes place on the client machine.<br />
<strong>Data Controls</strong> enable connection to the database, run commands, and access data from a database.</p>)
        }
      >Controls</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Hyperlink</strong> control does not have the Click and Command events whereas the <strong>LinkButton</strong> control has these events, which can be handled in the code-behind file of the Web page.</p>)
        }
      >Hyperlink vs LinkButton</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Navigation Controls</strong> help us to navigate in a Web application easily. These controls store all the links in a hierarchical or drop-down structure.<br />
There are 3 navigation controls: SiteMapPath, Menu, TreeView</p>)
        }
      >Navigation Controls</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>User Control</strong> a reusable page fragment defined in an .ascx file, easy to create, mainly for static UI elements, and used only within the current application. It is language-dependent and cannot be added to the Visual Studio toolbox.</p>)
        }
      >User Control</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong></strong> <strong>Custom Control</strong> a fully compiled control built into a DLL, designed for dynamic and reusable content across multiple applications. It is language-independent, more complex to create, and can be added to the Visual Studio toolbox.</p>)
        }
      >Custom Control</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Globalization</strong>: Designing and developing an application to support multiple cultures and locales, making it ready for international use.</p>)
        }
      >Globalization</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong></strong> <strong>Localization</strong>: Customizing an application for a specific culture or locale, often by translating the UI and adapting content.</p>)
        }
      >Localization</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>ASP.NET provides <strong>Resource Files</strong> to implement globalization and localization. The resource file is an XML file having extension resx. Each resource in the resx file is in the form of a key-value pair. For example, WebResources.en.resx is a resource file for the English language, and WebResources.hi.resx is a resource file for the Hindi language.<br /> 
There are two types of resource files as given below :<br />
<strong>Local Resources</strong>: Local resources are specific to a single web page and are used for providing versions of a web page in different languages. These are stored in the App_LocalResources folder.<br />
<strong>Global Resources</strong>: Global resources are common for the whole web application and can be accessed by all the web pages. These are stored in the App_GlobalResources folder.</p>)
        }
      >Resource File</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>GridView</strong> is a data-bound control introduced in ASP.NET 2.0 that supports built-in paging, sorting, updating, deleting, and automatic styling, but has slower performance.</p>
          )
        }
      >GridView</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong></strong> <strong>DataGrid</strong> is a data-bound control introduced in ASP.NET 1.0 that requires manual coding for paging, sorting, updating, and deleting, lacks automatic styling, but offers faster performance.</p>)
        }
      >DataGrid</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>ListView</strong> is a flexible data-bound control introduced in ASP.NET 3.5 that supports built-in paging, sorting, data grouping, and CRUD operations, but has slower performance.</p>)
        }
      >ListView</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Repeater</strong> is a  lightweight data-bound control introduced in ASP.NET 1.0 that requires custom coding for paging, sorting, data grouping, and CRUD operations, but offers faster performance.</p>)
        }
      >Repeater</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Session States</strong> modes in web.config file are:<br />
<strong>Off</strong> specify that Session state is not enabled.<br />
<strong>InProc</strong> is the default mode of the session. In this mode session state is stored on the web server i.e. IIS where an application is running.<br />
<strong>OutProc</strong> mode can be handled by using the following ways<br />
<strong>State Server</strong> In this mode, the session is stored in a separate process called ASP.NET state service. This ensures that the session state will be available in the web application and is restarted. This way also makes the session state available to multiple web servers in a web farm.<br />
<strong>SQL Server</strong> In this mode, the session is stored in aSQL Serverdatabase. This also ensures that the session state will be available in the web application is restarted. This way also makes the session state available to multiple web servers in a web farm.</p>)
        }
      >Session States</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Model</strong> represents the core data and business logic of the application. It is responsible for managing the data, processing rules, and interactions with the database or data sources. The Model does not handle user interface or input but focuses solely on the data and operations related to it.
<strong>View</strong> is the presentation layer of the application. It displays the data provided by the Model to the user and is responsible for the user interface. Views are concerned with how information is presented, but they do not contain business logic or handle user input directly.
<strong>Controller</strong> acts as an intermediary between the Model and the View. It handles user input, processes user requests, and decides which Model data to retrieve and which View to display.</p>)
        }
      >MVC Pattern</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>NuGet</strong> is a package manager dedicated to the .NET ecosystem. Microsoft developed it to offer access to thousands of packages being written by .NET developers.<br />
A classic web application being developed through ASP.NET depends on several open-source NuGet packages to work. One of the famous NuGet package managers is Newtonsoft.Json. It is used for working with JSON data in .NET.</p>)
        }
      >NuGet</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Bundling and Minification</strong> refers to the techniques that help in optimizing the performance of web application by reducing the number of HTTP requests and minimizing the size of resourceslike CSS, JavaScript.</p>)
        }
      >Bundling and Minification</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>RequiredFieldValidator</strong> validator is used when you don’t want the container to stay empty.<br />
<strong>RangeValidator</strong> finds out whether the value in validated control falls the specific range or not.<br />
<strong>CompareValidator</strong> tests if the value in controls matches certain specific values or not. RegularExpressionValidator: Tests if the particular value matches an explicit regular expression or not.<br />
<strong>CustomValidator</strong> is useful for defining User Defined validation.<br />
<strong>Summary Validation</strong> shows a summary of all existing validation errors over an ASP.NET page.</p>)
        }
      >Validators</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Server controls</strong> are HTML elements that contain a runat=server attribute. These components provide automatic state management as well as server-side events and react to the user events by implementing an event handler on the server.<br />
<strong>HTML controls</strong>: They also respond to the related user events but the events processing takes place on the client machine.<br />
<strong>Data controls</strong>: Data controls enable connection to the database, run commands, and access data from a database.</p>)
        }
      >Controls</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>ASP.NET Page Lifecycle</strong> is the sequence of events that happen in an ASP.NET web page, that is from creation to its rendering. There are many stages involved in the process like:<br />
<strong>Initialization</strong>- initialize the controls and sets their properties.<br />
<strong>Loading</strong> process the control events and ViewState data is restored.<br />
<strong>Postback Event Handling</strong> handle the Postback events<br />
<strong>Rendering</strong> send the page to the client after page generation.<br />
<strong>Unloading</strong> finally unloaded the page and releases all its resources.</p>)
        }
      >Lifecycle</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>ASP.NET Web Form</strong> is a UI-based framework that uses drag-and-drop controls and an event-driven model to build web applications. It manages state automatically using ViewState and is ideal for rapid development with complex UI needs.<br />
<strong>ASP.NET MVC</strong> is a lightweight, pattern-based framework that follows the Model-View-Controller architecture. It provides full control over HTML and is suited for applications requiring clear separation of concerns and testability.</p>)
        }
      >Web Form vs MVC</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Caching</strong> is the process of storing frequently accessed data or page output in memory to reduce server load and improve application performance. Like<br />
<strong>Output Caching</strong> stores the entire rendered HTML of a page and serves it for future requests without regenerating it.<br />
<strong>Data Caching</strong> stores data objects (e.g., datasets, objects) in memory for reuse across requests.<br />
<strong>Fragment Caching</strong> caches only a portion (fragment) of the page, such as a user control or partial view.<br />
<strong>SQL Cache Dependency</strong> automatically invalidates cached data when the underlying SQL Server data changes.<br />
<strong>Custom Caching</strong> allows developers to implement personalized caching logic based on specific application needs.</p>)
        }
      >Caching</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Response.Redirect</strong> redirects the user to a new page, making a round trip to the server. The URL in the browser changes.<br />
<strong>Server.Transfer</strong> transfers control to another page on the same server without a round trip. The browser URL remains unchanged.</p>)
        }
      >Response.Redirect vs Server.Transfer</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Routing</strong> is used to define URL patterns for the application and then those URL patterns are mapped onto specific controller actions. Routing system also defines the incoming URL requests and tells which controller and action is required to handle them.</p>)
        }
      >Routing</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Preparing the Application for Deployment- Make sure that the application is successfully developed, tested and ready for deployment.<br />
<strong>Choosing a Hosting Environment</strong> Choose a hosting environment like Azure app Service or AWS Elastic Beanstalk.<br />
<strong>Setting up of Production Environment</strong> Make sure that all the hardware and software requirements are met by the server.<br />
<strong>Publishing the Application</strong> Publish the application using Visual Studio or .NET CLI.<br />
<strong>Deploying to the Server</strong> Transfer it to the production server with the help of FTP, SSH or Git.<br />
<strong>Configuring IIS</strong> Configure IIS settings if the application is hosted on an IIS server.<br />
<strong>Testing the Environment</strong> Test the deployed application thoroughly to make sure that all the functions are working correctly.<br />
<strong>Monitoring and Maintenance</strong> Monitor the performance of the application and regularly update and maintain the application with enhancements required.<br />
<strong>Backup and Disaster recovery</strong> Set up backup and disaster recovery techniques to protect the application and its data.</p>)
        }
      >Deploy</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>ActionResult</strong> is a base class that represents the result of an action method. It allows controllers to return different types of responses to the client, such as views, JSON data, files, or status codes. like<br />
<strong>ViewResult</strong> returns an HTML view to the browser.<br />
<strong>PartialViewResult</strong> returns a portion of a view (partial view), commonly used with AJAX.<br />
<strong>RedirectResult</strong> redirects the browser to a specified URL.<br />
<strong>RedirectToRouteResult</strong> redirects the user based on route configuration.<br />
<strong>RedirectToActionResult</strong> redirects to a specific action method within a controller.<br />
<strong>JsonResult</strong> returns JSON-formatted data, useful for APIs and AJAX calls.<br />
<strong>ContentResult</strong> returns plain text, HTML, or any custom content.<br />
<strong>FileResult</strong> sends a file to the browser, either to display or download.<br />
<strong>EmptyResult</strong> returns no content; used when no response is required.</p>)
        }
      >ActionResult</button>

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