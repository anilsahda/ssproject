import '../index.css';
import { useState } from 'react';

export default function DotnetQA() {
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
       <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Abstraction</strong> is the process of showing only necessary features of an object to the outside world and hiding the information which are not relevant.<br />
<strong>Encapsulation</strong> is a process of binding data members like variables, properties and member methods together.<br />
<strong>Inheritance</strong>: Using the properties of one class in another class. <br />
<strong>Overloading</strong> means creating multiple methods in a class with the same names but different Parameters. It permits a class, struct, or interface to declare multiple methods with the same name with unique signatures.<br />
<strong>Overriding</strong> means having two methods with the same name and same signatures. We can override the functionality of a base class method to create the same name method with the same signature in a derived class. We can achieve method overriding using inheritance. Virtual and Override keywords are used to achieve method overriding.</p>)
        }
      >OOPS</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Boxing and Unboxing</strong> allow to convert data types from value type to reference type and vice versa. Boxing is the process of changing a Value Type like char, int etc. variable to a Reference Type like object. Reference type variables are kept in Heap memory, whereas Value type variables are always kept in Stack memory.</p>,
            `int i = 1;
object o = i; // boxing
int j = (int)o; // unboxing`
          )
        }
      >Boxing</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>CLR</strong> is a virtual machine that manages the execution of C# programs and other .NET applications. It's a component of the Microsoft .NET Framework.<br />
CLR can be used for:<br />
<strong>Compilation</strong>: Compiles C# code into an intermediate language called Microsoft Intermediate Language (MSIL) or Common Intermediate Language (CIL)<br />
<strong>Execution</strong>: Uses a Just-In-Time (JIT) compiler to convert MSIL into machine code that can be executed by the processor<br />
<strong>Memory management</strong>: Manages memory through garbage collection to prevent memory leaks<br />
<strong>Security</strong>: Checks IL code for security risks before running it<br />
<strong>Cross-language integration</strong>: Allows developers to write code in C#, VB.NET, or any other .NET language</p>)
        }
      >CLR</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Delegates</strong> are Type-Safe Function Pointer which hold the reference of a function and call that method for execution. When we instantiate a delegate we can associate its instance with any method that matches the delegate’s signature. We can invoke the method through the delegate instance.<br /> 
<strong>Delegates are used for:</strong><br />
<strong>Type Safety</strong>: Delegates provide a type-safe way to reference methods to make sure the method signature matches the delegate's signature.<br />
<strong>Callback Function</strong>: Delegates allow methods to be passed as parameters to enable callbacks and flexible execution.<br />
<strong>Event Handling</strong>: Delegates serve as the foundation of event handling by enabling event publishers to call event handler methods on subscribers.<br /><br />
<strong>Types of Delegates: Generic, Singlecast and Multicast</strong><br />
<strong>Generic Delegates</strong> use generic types parameter to work with multiple types without casting. <strong>There are 3 generics delegate</strong><br />
<strong>Func</strong> delegate represents a function with return type.<br />
<strong>Action</strong> delegate represents void return type with no parameter.<br />
<strong>Predicate</strong> delegate takes an input parameter and returns boolean<br />
<strong>Singlecast Delegates</strong> reference a single method with a matching signature. When the delegate is invoked, it calls the referenced method.<br />
<strong>Multicast Delegates</strong> can reference multiple methods with a matching signature. When the delegate is invoked, it calls all the referenced methods in the order they were added. Multicast delegates are created using the += or -= operators.</p>,
`class Program
{
   static void Main()
   {
      Func<int, int, int> add = (x, y) => x + y;
      Action<string> display = msg=> Console.WriteLine(msg);
      int sum = add(10, 20);
      display($"Sum: {sum}");
   }
}`)
        }
      >Delegates</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>High-Level Design</strong> refers to the overall architecture of the system. It breaks down the system into major modules and describes how these modules interact with each other. The focus is on what each module is responsible for, rather than how it achieves that functionality. For example in an e-commerce system, HLD would show modules like User Service, Product Service, Order Service, and how they interact through APIs or messaging queues.<br />
<strong>Low-Level Design</strong> takes the output of HLD and dives deeper into the implementation details of each module. It describes the class structures, methods, interfaces, database tables, data structures, and algorithms used. The focus here is on how to implement the functionality defined in the HLD.<br />
LLD is usually done by developers and it's essential for actual coding. It ensures that everyone has a clear understanding of the responsibilities and behavior of each part of the system.<br />
For example in the same e-commerce project: LLD would define a ProductService class, with methods like AddProduct, GetProductById, and describe the structure of the Product entity, relationships with the database, and how validation and error handling are performed.</p>)
        }
      >HLD | LLD</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>IEnumerable</strong> executes the query in the client's memory and makes it suitable for in-memory collections but less efficient for large datasets. But IQueryable executes the query on the server and it is used for more efficient data handling, especially with large or complex data sets. IEnumerable is more straightforward and is used for in-memory data, while IQueryable is more complex and is better suited for remote data sources<br />
<strong>IEnumerable</strong> can be used for in-memory data collections and working with small to medium datasets and data source is not a database.<br />
<strong>IQueryable</strong> can be used for large datasets or databases and querying data from remote sources like a web service or a database and for performance optimization.<br />
<strong>IList</strong> Inherits from ICollection. Represents a list of items that are accessible by index. Provides advanced collection manipulation like insert and remove by index. Supports random access to elements. Contains property to access elements by index and methods like Insert and RemoveAt.</p>)
        }
      >IEnumerable</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Indexer</strong> is used to access instances of a class using an index just like an array. Indexer is just like properties using this keyword followed by [] index notation. Indexers are implemented through get and set accessors for the [] operator. Indexers are used on group of elements. Indexer can be overloaded.</p>)
        }
      >Indexer</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Managed Code</strong> executes under the CLR<br /> 
          <strong>Benefits</strong> are:<br />
<strong>Automatic Memory Management</strong> The runtime handles memory allocation and garbage collection, reducing the risk of memory leaks and errors.<br />
<strong>Improved Security</strong> The runtime provides security features and prevents unsafe code execution. Simplified Development Developers can focus on the application logic rather than low-level system interactions.<br />
<strong>Drawbacks are:</strong><br />
<strong>Performance Overhead</strong> The runtime can introduce some overhead, potentially impacting performance in certain scenarios.<br /> 
<strong>Limited Control</strong> Developers have less direct control over system resources compared to unmanaged code.<br />
<strong>Unmanaged Code</strong> runs directly on the operating system<br /> 
<strong>Benefits</strong> are:<br />

<strong>Fine-Grained Control</strong> Developers have more control over system resources, allowing for optimized performance in specific cases.<br /> 
<strong>Access to Low-Level Features</strong> Unmanaged code can access low-level system features that are not available in managed code.<br />
<strong>Drawbacks</strong><br />
<strong>Manual Memory Management</strong> Developers are responsible for memory allocation and deallocation, increasing the risk of memory leaks and crashes.<br />
<strong>Security Risks</strong> Unmanaged code can be more vulnerable to security exploits if not written carefully.<br />
<strong>Increased Development Complexity</strong> Managing memory and other low-level details can make development more complex.</p>)
        }
      >Managed Code</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Value Type</strong> holds a data value within its own memory space. It means the variables of these data types directly contain values. When we pass a value-type variable from one method to another, the system creates a separate copy of a variable in another method. If value got changed in the one method, it wouldn't affect the variable in another method.<br />
<strong>Reference Type</strong> doesn't store its value directly within its own memory space. Instead, it stores the address where the value is being stored. In other words, a reference type contains a pointer to another memory location that holds the data. When you pass a reference type variable from one method to another, it doesn't create a new copy; instead, it passes the variable's address. So, If we change the value of a variable in a method, it will also be reflected in the calling method.</p>)
        }
      >Ref Type</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Constant</strong> value never changes after initialization and it must be initialized at declaration time.<br />
<strong>Dynamic</strong> compiler doesn't check the type of value at compile time and check it out at runtime.<br />
<strong>Let</strong> declared as block-scoped variable. It can be updated but not re-declared in the same block. In C# used only in LINQ queries to create a temp var<br />
<strong>Out</strong> Passes a variable by reference, but it's used only to output data from the method. Out does not need to be initialized before passed, but must be assigned inside the method<br />
<strong>Readonly</strong> value can be assigned only once, either at declaration or in the constructor only through the non-static constructor. It is little different from const because readonly can be set at runtime.<br />
<strong>Ref</strong>: Passes a variable by reference means the method can read and modify the original variable. Ref must be initialized before it is passed.<br />
<strong>Static</strong> declared with static keyword & shared among all instances of class<br />
<strong>Var</strong>: declared as function-scoped variable. It can be re-declared and updated. In C# Declares a variable with implicit type and it's known at compile time<br />
<strong>Static Readonly</strong> value can be assigned at runtime or assigned at compile time and changed at runtime. But this variable's value can only be changed in the static constructor. And cannot be changed further. So it can change only once at runtime.</p>)
        }
      >Variables</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Yield</strong> keyword is used to create an iterator that returns values one at a time. This allows the programmer to loop through a collection of items without having to create a temporary collection to store all the data.</p>)
        }
      >Yield</button>
<br />

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Web Form</strong> is a UI-based framework that uses drag-and-drop controls and an event-driven model to build web applications. It manages state automatically using ViewState and is ideal for rapid development with complex UI needs.<br />
<strong>ASP.NET Web Form Lifecycle</strong> is the sequence of events that happen in an ASP.NET web page, that is from creation to its rendering like:<br />
<strong>Initialization</strong>- initialize the controls and sets their properties.<br />
<strong>Loading</strong> process the control events and ViewState data is restored.<br />
<strong>Postback Event Handling</strong> handle the Postback events<br />
<strong>Rendering</strong> send the page to the client after page generation.<br />
<strong>Unloading</strong> finally unloaded the page and releases all its resources.<br />
<strong>Global.asax</strong> is a special file derived from the HttpApplication class. It is used to handle application-level events like <strong>Application_Start, Application_End, Session_Start and Session_End</strong>. The code is compiled when the application runs for the first time.<br />
<strong>Response.Redirect</strong> sends the user to a new page with a round trip to the server, and the URL in the browser changes.<br />
<strong>Server.Transfer</strong> switches to another page on the same server without a round trip, and the browser URL stays the same.<br />
<strong>Round Trip</strong> any web page that travels from the client side to the server side will get processed on the server and travels back to the client, this whole process is called a round trip.<br />
<strong>Globalization</strong> enables support for multiple cultures and languages for international use.<br />
<strong>Localization</strong> customizes the application for a specific culture, translating UI and formatting content.<br />
<strong>Web.config</strong> is used to define application-level settings<br />
<strong>Machine.config</strong> is used for defining server-level settings.<br />

          </p>
          )
        }
      >Web Form</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>DataReader</strong>: A fast, connection-based, forward-only, read-only data reader for one table<br />
<strong>DataAdapter</strong>: A disconnected component that transfers data between a database and a DataSet or DataTable.<br />
<strong>DataSet</strong>: An in-memory, disconnected data store that can hold multiple tables and supports full data operations.<br />
<strong>DataTable</strong>: Represents a single table with rows and columns, used alone or inside a DataSet.<br />
<strong>DataSet.Clone()</strong>: Copies only the structure (schema, relations) without data.<br />
<strong>DataSet.Copy()</strong>: Copies both structure and data<br />
<strong>ExecuteScalar()</strong>: Returns a single value like first row, first column.<br />
<strong>ExecuteNonQuery()</strong>: Executes insert, update, or delete commands and returns the number of rows affected.<br />
<strong>ExecuteReader()</strong>: Returns a DataReader for reading multiple rows and columns from the database.</p>)
        }
      >ADO.Net</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Server Controls</strong> are HTML elements with runat="server" that support server-side events and automatic state management.<br />
<strong>HTML Controls</strong> is standard HTML elements that respond to user actions but are processed on the client-side only.<br />
<strong>Navigation Controls</strong> help users to move through the application. <strong>SiteMapPath</strong> shows the current page's position as a breadcrumb trail.<br /> 
<strong>Menu</strong> displays static or dynamic munus horizontally or vertically on layout.<br /> 
<strong>TreeView</strong> displays hierarchical data, useful for site maps or file structures.<br />
<strong>Hyperlink</strong> is simple navigation control; does not support Click events<br />
<strong>LinkButton Control</strong> is a hyperlink but supports server-side events.<br />
<strong>User Control</strong> is a reusable piece of UI created using an .ascx file. It’s like a mini web page that can be used in multiple places within the same application. It's easy to create and use. It is language-dependent. It cannot be added to the Visual Studio toolbox.<br />
<strong>Custom Control</strong> is a more advanced, compiled control built into a .dll file. It can be reused across multiple applications. It is more complex to create. It's language-independent. It can be added in toolbox for drag-and-drop use.<br />
<strong>Data Controls</strong> is used to connect database, run queries and display data like <strong>GridView, ListView, DataGrid, Repeater and SqlDataSource</strong>.<br />
<strong>GridView</strong> is a data-bound control that supports built-in paging, sorting, updating, deleting, and automatic styling, but has slower performance.<br />
<strong>ListView</strong> is a flexible data-bound control that supports built-in paging, sorting, data grouping, and CRUD operations, but has slower performance.<br />
<strong>DataGrid</strong> is a data-bound control that requires manual coding for paging, sorting, updating and deleting, lacks of automatic styling, but offers faster performance.<br />
<strong>Repeater</strong> is a lightweight data-bound control that requires custom coding for paging, sorting, data grouping, and CRUD operations, but offers faster performance.
</p>)
        }
      >Controls</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
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


      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>ASP.NET provides <strong>Resource Files</strong> to implement globalization and localization. The resource file is an XML file having extension resx. Each resource in the resx file is in the form of a key-value pair. For example, WebResources.en.resx is a resource file for the English language, and WebResources.hi.resx is a resource file for the Hindi language.<br /> 
There are two types of resource files as given below :<br />
<strong>Local Resources</strong>: Local resources are specific to a single web page and are used for providing versions of a web page in different languages. These are stored in the App_LocalResources folder.<br />
<strong>Global Resources</strong>: Global resources are common for the whole web application and can be accessed by all the web pages. These are stored in the App_GlobalResources folder.</p>)
        }
      >Resource File</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Session States</strong> modes in web.config file are:<br />
<strong>Off</strong> specify that Session state is not enabled.<br />
<strong>InProc</strong> is the default mode of the session. In this mode session state is stored on the web server i.e. IIS where an application is running.<br />
<strong>OutProc</strong> mode can be handled by using the following ways<br />
<strong>State Server</strong> In this mode, the session is stored in a separate process called ASP.NET state service. This ensures that the session state will be available in the web application and is restarted. This way also makes the session state available to multiple web servers in a web farm.<br />
<strong>SQL Server</strong> In this mode, the session is stored in aSQL Serverdatabase. This also ensures that the session state will be available in the web application is restarted. This way also makes the session state available to multiple web servers in a web farm.</p>)
        }
      >Session States</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Endpoints</strong> defines where and how a service communicate using <strong>ABC</strong><br />
<strong>BasicHttpBinding</strong> uses SOAP over HTTP and provides no security by default.<br />
<strong>WSHttpBinding</strong> support WS-* standards including security & transactions<br />
<strong>WSDualHttpBinding</strong>: 2-way communication between client and service<br />
<strong>WSFederationHttpBinding</strong> support federated authentication & transaction<br />
<strong>NetTcpBinding</strong> is fast, secure communication between WCF apps over TCP.<br />
<strong>NetMsmqBinding</strong> queued messaging between WCF services using MSMQ.<br />
<strong>MsmqIntegrationBinding</strong> communicate with existing MSMQ-based apps.<br />
<strong>Throttling</strong> control concurrent call, session & instance to improve performance<br /> 
<strong>Service Proxy</strong> is a client-side class that exposes WCF service methods and hides connection details, auto-generated from metadata.<br /><br />
WCF Serializers: <strong>DataContractSerializer</strong> is default WCF serializer that works without needing explicit attributes<br />
<strong>XmlSerializer</strong> is used by default in older ASMX web services.<br />
<strong>NetDataContractSerializer</strong> is similar to .NET Remoting and supports [Serializable] types but is not recommended for service-oriented design.</p>)
        }
      >WCF</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>RequiredFieldValidator</strong> validator is used when you don’t want the container to stay empty.<br />
<strong>RangeValidator</strong> finds out whether the value in validated control falls the specific range or not.<br />
<strong>CompareValidator</strong> tests if the value in controls matches certain specific values or not. RegularExpressionValidator: Tests if the particular value matches an explicit regular expression or not.<br />
<strong>CustomValidator</strong> is useful for defining User Defined validation.<br />
<strong>Summary Validation</strong> shows a summary of all existing validation errors over an ASP.NET page.</p>)
        }
      >Validators</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>My name is Amit Kumar</strong>. I have around 10 years of experience in designing & implementing applications using monolithic & microservice architectures. Throughout my career, I have worked on greenfield projects as well as existing systems. I focus on writing clean and maintainable code while following SOLID principles & best practices. Beyond coding, I collaborate with cross-functional teams to deliver efficient solutions. I am always eager to learn & adapt to new technologies to enhance project outcomes.<br />
<strong>I have</strong> very good hands on experience in .Net Core, C#, MVC, Web Services like WCF, Web Methods, Web API & Microservices.<br /> 
<strong>Database</strong> SQL Server, MySQL, Oracle, PostgreSQL, Mongo and Dynamo DB<br />
<strong>Cloud</strong> side I have experience in Azure & AWS.<br />
<strong>UI</strong> I have experience in React, Angular, HTML, CSS n Bootstrap.<br />
<strong>Message Broker</strong> like RabbitMQ, Kafka and Azure Service Bus.<br />
<strong>Version Controls</strong> I have experience in Git Hub, SVN and TFS.<br />
<strong>Project</strong>: Healthcare, Banking, E-Commerce, Insurance, EPS, LPA & Logistic<br />
<strong>My roles</strong> & responsibilities are designing, developing & maintaining applications. I work on complex projects that require high-level of technical skills, creativity & leadership. I mentor & guide junior developers, code reveiw & collaborate with other teams as well.</p>)
        }
      >Intro</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Project</strong>: Aerospace Employee Payroll System<br />
<strong>Client</strong>: RTX Aerospace Organization<br />
<strong>Domain</strong>: Aerospace<br />
<strong>Technologies</strong>: .NET Core, React JS, Entity Framework, Dapper, Web API, SQL Server<br />
<strong>Description</strong>:<br />
I was involved in the development of an Aerospace Employee Payroll System. The system was designed to streamline and automate employee management and payroll processes in a highly secure specifically for the aerospace industry.<br />
<strong>Key Modules & Functionalities are</strong>:<br />
<strong>Employee Management</strong><br />
Enabled HR to add, update and remove employee records.<br />
Managed personal details, job-related details and banking information.<br />
Integrated validation and business rules for data consistency.<br />
<strong>Payroll Processing</strong><br />
Automated salary calculations based on attendance data and policy-driven deductions.<br />
Integrated tax computations, benefits like insurance, bonuses and overtime handling.<br />
<strong>Attendance and Leave Management</strong><br />
Integrated with biometric and manual attendance systems<br />
Developed a leave tracking system, enabling deduction logic for payroll.<br />
Handled various types of leaves and approvals<br />
<strong>User Roles and Security</strong><br />
Implemented role-based access for Admin, HR, and Employee portals.<br />
Used secure authentication mechanisms and data encryption for sensitive information.<br />
<strong>Reports and Payslips</strong><br />
Auto-generated detailed payslips with salary breakdowns.</p>)
        }
      >Project</button>
<br />

       <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>ASP.NET MVC</strong> is a lightweight, pattern-based framework that follows the Model-View-Controller architecture. It provides full control over HTML and is suited for applications requiring clear separation of concerns and testability.<br />
<strong>Model</strong> handles data, business logic, and database interactions.<br />
<strong>View</strong> displays data to the user; it manages the UI but not logic.<br />
<strong>Controller</strong> process user input, interact with the Model and returns to View<br /><br />
<strong>MVC LifeCycle</strong> is a sequence of events, stages or components that interact with each other to process an HTTP request and generate a response client.<br />
<strong>Middleware</strong> process incoming HTTP requests through a pipeline.<br />
<strong>Routing</strong> map request to appropriate controller and action using route patterns<br />
<strong>Controller Initialization</strong>: Creates the controller to handle the request.<br />
<strong>Action Execution</strong> Executes the action method and prepares the result.<br />
<strong>Result Execution</strong> Render the View and send the final response to the browser.</p>)
        }
      >MVC</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>ActionResult</strong> is a base class that represents the result of an action method. It allows controllers to return different types of responses to the client, such as views, JSON data, files, or status codes. like<br />
<strong>ViewResult</strong> returns an HTML view to the browser.<br />
<strong>PartialViewResult</strong> returns a portion of a view commonly used with AJAX.<br />
<strong>RedirectResult</strong> redirects the browser to a specified URL.<br />
<strong>RedirectToRouteResult</strong> redirects the user based on route configuration.<br />
<strong>RedirectToActionResult</strong> redirects to a specific action method within a controller.<br />
<strong>JsonResult</strong> returns JSON-formatted data, useful for APIs and AJAX calls.<br />
<strong>JavascriptResult</strong> is used to return javascript to the view.<br />
<strong>ContentResult</strong> returns plain text, HTML, or any custom content.<br />
<strong>FileResult</strong> sends a file to the browser, either to display or download.<br />
<strong>EmptyResult</strong> returns no content; used when no response is required.</p>)
        }
      >ActionResult</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Anonymous Methods</strong> are a way to define inline unnamed methods that can be assigned to delegate instances. They provide a concise way to create small functions without declaring an entire named method. Anonymous methods use the delegate keyword and do not require a separate method declaration.</p>,
            `public delegate void DisplayMessage(string message);
class Program
{
    static void Main()
    {
        DisplayMessage display=delegate(string msg)
        {
            Console.WriteLine(msg);
        };

display("Hello, Anonymous method!");
    }
}`
          )
        }
      >Anonymous</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Bundling and Minification</strong> refers to the techniques that help in optimizing the performance of web application by reducing the number of HTTP requests and minimizing the size of resourceslike CSS, JavaScript.</p>)
        }
      >Bundling</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Caching</strong> is the process of storing frequently accessed data in memory to reduce server load and improve application performance. Caching is most effective for data that is expensive to generate and changes frequently.<br />
<strong>In-memory caching</strong> Stores data in the application server's memory. This is fast, but limited by the server's memory.<br />
<strong>Distributed caching</strong> Stores data outside the application server, often in a separate service like Redis or MongoDB.<br />
<strong>Output caching</strong> Caches the entire output of a response, reducing the need to process and generate the response again.<br />
Use the IMemoryCache class to implement in-memory caching.<br />
Use the CacheItem class to represent a cache entry.<br />
Use the CacheItemPolicy class to represent a set of eviction and expiration details for a cache entry.<br />
Use the ICacheEntry class to add an entry into the cache.<br />
Use the TryGetValue method to retrieve the value stored in the cache for a given key.<br />
Use the Remove method to remove an entry for a given key.</p>)
        }
      >Cache</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Debugging</strong> in a production environment should be done carefully to avoid downtime and performance issues.<br />
<strong>Check Logs First using ELK</strong><br />
Elasticsearch search engine that stores and indexes logs<br />
Logstash collect the logs, process them and send to Elasticsearch.<br />
Kibana a visualization tool to exploring and analysis logs<br />
<strong>CloudWatch</strong> collects and track logs and events from AWS resources and supports alarms, dashboards, and automated actions based on logs and metrics.<br />
<strong>Splunk</strong> is a powerful log management tool which indexes and search log data for real-time analysis. It can be use for security threat detection, IT operations monitoring, and business analytics.<br />
<strong>Use Monitoring & APM Tools</strong> like New Relic, Datadog, Prometheus, or Grafana help track real-time performance. Check metrics, slow endpoints, high CPU/memory usage.<br />
<strong>Reproduce with Safe Methods</strong> Use flag features to isolate the issue. Reproduce in staging if possible before making live changes. Debug specific requests using Zipkin.<br />
<strong>Remote Debugging</strong> Attach a remote debugger via VS Code<br />
<strong>Hotfix & Rollback Strategy</strong> If a fix is needed, apply a hotfix with CI/CD pipelines. Have a rollback plan (blue-green deployment, canary releases).<br />
<strong>Database & Configuration Checks</strong> Verify DB queries, cache issues, env variables. Use readonly access to production databases for debugging.</p>)
        }
      >Debugging</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Filters</strong> are used to inject extra processing logic in the req-res pipeline. Filters add pre-processing and post-processing logic to an action. Filter run before or after the action method executes and can also intercept results.<br />
<strong>Authentication</strong> filter is used to check the identity of user.<br /> 
<strong>Authorization</strong> filters are useful for implementing the logic of authentication and authorization. IAuthorizationFilter provides the logic for determining if a user is allowed to access a specific action.<br />
<strong>Action</strong> filters contain the pre-processing and post-processing logic which can be applied to the action method. This filter is executed before and after the action method of the controller executes. IActionFilter is used to modify the request or response before or after the action method is executed.<br />
<strong>Result</strong> filters modify the HTTP response means modify the view result before the view is rendered to the browser. IResultFilter interface and OutputCacheAttribute class are used to modify the result of the action method before it is returned to the client.<br />
<strong>Exception</strong> Filter will execute when an action method of the controller throws an unhandled exception. IExceptionFilter interface and HandleErrorAttribute class are used to catch and handle exceptions and it can be used to log errors or to display the specific error page.</p>,
`public class MyActionFilter : ActionFilterAttribute
{
  Methods OnActionExecuting & OnActionExecuted
  Parameters ActionExecuting & ActionExecutedContext
}
[MyActionFilter] // Apply the filter
public class HomeController : Controller`)
        }
      >Filters</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Exception Handling</strong> is the process of catching and recording errors in code so that they can be fixed. These errors are usually logged in files or databases. If these errors not handled properly, the application may crash without showing the root cause<br />
<strong>finally</strong> is used to clean up resources after a try block, whether or not an exception occurs<br />
<strong>Finalize</strong> is used to clean up unmanaged resources. It’s called by the Garbage Collector before reclaiming memory from an object<br />
<strong>throw</strong> preserves the original stack trace, helping identify where the exception occurred<br /> 
<strong>throw ex</strong> does not preserve the stack trace and we lose the information about the method that caused the exception in the first place.<br />
<strong>Global Exception Handler</strong> is used to catch and handle unhandled exceptions across the entire application.<br /> 
<strong>.NET Core</strong>: UseExceptionHandler or UseDeveloperExceptionPage middleware<br />
<strong>ASP.NET MVC</strong> use HandleError attribute at the controller level or FilterConfig.cs for global level. Global errors can also be handled in Application_Error within Global.asax</p>)
        }
      >Exception Handling</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>NuGet</strong> is a package manager dedicated to the .NET ecosystem. Microsoft developed it to offer access to thousands of packages being written by .NET developers.<br />
A classic web application being developed through ASP.NET depends on several open-source NuGet packages to work. One of the famous NuGet package managers is Newtonsoft.Json. It is used for working with JSON data in .NET.</p>)
        }
      >NuGet</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Reflection</strong> can be used to improve the application performance. It is used to access metadata at runtime. Using reflection we can access and invoke a type's methods, attributes, and events dynamically. In addition to reading and calling, reflection is used to construct new types at runtime. The System.Reflection namespace contains the classes that provide access to the program's metadata during runtime.</p>)
        }
      >Reflection</button>
<br />
       <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>.NET Core is Cross-Platform</strong> that can run on Windows, macOS, and Linux.<br />
<strong>Open Source</strong> tool with cloud support and an improved version of .NET<br />
ASP.NET Architecture is Monolithic and tightly integrated with Windows while <strong>.NET Core</strong> architecture is modular and lightweight.<br />
ASP.NET is less flexible for customizing application architecture while <strong>.NET Core</strong> is more flexible for customizing application architecture.<br />
<strong>.NET Core</strong> provides better testability.<br />
<strong>.NET Core</strong> can deploy in IIS server and cloud<br />
Built-in support for dependency injection<br />
Built-in support for logging framework and it can be extentable<br />
<strong>Kestrel</strong> web server which can run without IIS server<br />
Command-line support to create, build and run the application<br />
Good support for asynchronous programming<br />
<strong>Rate Limiting</strong> is a technique which is used to control the rate of incoming requests to an API. It sets limits on the number of requests that is made by a client within a defined period of time. By implementing rate limiting, we can prevent abuse, protect server resources and ensure a smooth and responsive experience for all users.<br />
<strong>Minimal APIs</strong> are simplified way to create web API in .NET Core which allow to define routes and their corresponding request-handling logic directly in Program.cs file without controllers.</p>)
        }
      >.Net Core</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Preparing the Application for Deployment- Make sure that the application is successfully developed, tested and ready for deployment.<br />
<strong>Choosing a Hosting Environment</strong> Choose a hosting environment like Azure app Service or AWS Elastic Beanstalk.<br />
<strong>Setting up of Production Environment</strong> Make sure that all the hardware and software requirements are met by the server.<br />
<strong>Publish the Application</strong> using Visual Studio or .NET CLI.<br />
<strong>Deploying to the Server</strong> Transfer it to the production server with the help of FTP, SSH or Git.<br />
<strong>Configure IIS</strong> settings if the application is hosted on an IIS server.<br />
<strong>Testing the Environment</strong> Test the deployed application thoroughly to make sure that all the functions are working correctly.<br />
<strong>Monitoring and Maintenance</strong> Monitor the performance of the application and regularly update and maintain the application with enhancements required.<br />
<strong>Backup and Disaster recovery</strong> Set up backup and disaster recovery techniques to protect the application and its data.</p>)
        }
      >Deploy</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Entity Framework</strong> is an ORM for .NET which allow .NET developers to work with a database using .NET objects, eliminating the need for most of the data-access code that you'd otherwise write manually like SQL.<br />
SaveChanges()	Saves all changes made in the context to the database.<br />
Add()	Marks a single entity as Added.<br />
AddRange()	Adds multiple entities to the context.<br />
Update()	Marks the entire entity as Modified.<br />
UpdateRange()	Updates multiple entities.<br />
Remove()	Marks the entity as Deleted.<br />
RemoveRange()	Deletes multiple entities.<br />
Attach()	Attaches an entity to the context without marking it as Modified.<br />
AttachRange()	Attaches multiple entities.<br />
Entry(entity)	Gets metadata and state information about an entity.<br />
Find(key)	Finds an entity with the given primary key.<br />
FirstOrDefault()	Returns the first element or default value.<br />
SingleOrDefault()	Returns a single element or default, throws if more than one match.<br />
ToList()	Converts query to a list.<br />
Where(predicate)	Filters entities based on condition.<br />
Any()	Checks if any elements match a condition.<br />
All()	Checks if all elements satisfy a condition.<br />
Count()	Counts number of elements.<br />
Select()	Projects each element into a new form.<br />
Include()	Eager loads related entities.<br />
ThenInclude()	Used after Include() for nested relationships.<br />
OrderBy() / OrderByDescending()	Sorts elements.<br />
GroupBy()	Groups elements by key.<br />
Take(n)	Takes first n elements.<br />
TakeWhile(n)<br />
Skip(n)	Skips first n elements.<br />
SkipWhile(n)<br />
Distinct()	Returns distinct elements.<br />
FromSqlRaw(sql)	Executes a raw SQL query and returns entities.<br />
ExecuteSqlRaw()	Executes raw SQL for INSERT, UPDATE, DELETE.</p>)
        }
      >EF</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Middleware</strong> is a software component that processe the req and resp in the request pipeline. It can be used for tasks like logging, authentication, or caching. Middleware order is important as it controls how requests and responses move through the app. Each middleware can inspect, modify, or handle requests and responses, and can also stop the pipeline if any error occurs. <strong>Use</strong> middleware runs for every request and then passes the request to the next middleware. <strong>Run</strong> terminates the pipeline and generates a response. <strong>Map</strong> branches the pipeline based on request paths.<br /><br />
<strong>Custom Middleware</strong> is used to add our own logic like logging, error handling, authentication between incoming requests and outgoing response.<br />
<strong>To create Custom Middleware</strong> define a class with a constructor that takes a <strong>RequestDelegate</strong> parameter to call the next middleware, then implement an <strong>Invoke</strong> method that accepts an <strong>HttpContext</strong> parameter to add our custom logic. We can create an extension method for cleaner registration but it's optional and then finally register the middleware in the request pipeline using <strong>app.UseMiddleware</strong>&lt;CustomMiddlewareName&gt;() in Program.cs file.<br /><br />
<strong>Difference between Filter and Middleware</strong>: Both filters and middleware intercept request and response. Middleware operates at a lower level and affect the entire application pipeline while Filters are more targeted and interact with specific MVC actions or controllers.</p>)
        }
      >Middleware</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Caching</strong> is a technique that stores data to improve application performance and scalability. It can reduce the time taken to fetch and process data. Caching is most effective for data that is expensive to generate and changes frequently. In-Memory Cache, Distributed Cache and Output Cache<br />
<strong>Lazy Loading</strong> defers the initialization of an object until it is needed, improves performance and reducing the memory usage. We can implement lazy loading using the Lazy Class.<br />
<strong>Reflection</strong> can be used to improve the application performance. It is used to access metadata at runtime. Using reflection we can access and invoke a type's methods, attributes, and events dynamically.<br />
<strong>Using</strong> statement is commonly used for resource management to ensure that unmanaged resources are properly disposed of, preventing memory leaks and improving application stability.<br />
<strong>StringBuilder</strong> is more efficient and it can improve the performance when performing multiple string manipulations.<br />
<strong>Garbage Collection</strong> is an automatic memory management feature that reclaims memory occupied by objects that are no longer in use.<br />
<strong>IDisposable</strong> handle unmanaged resources like windows handles, database connections, network connections, files which cannot be collected by the Garbage Collector. If we want to explicitly release some specific objects then this is the best to implement IDisposable and override the Dispose() method of IDisposable interface.<br />
<strong>Concurrent Operations</strong> can be limit to reduce the system’s overall load.<br />
<strong>Serialization</strong> We should use Newtonsoft.Json instead of XML serialization<br />
<strong>Partitioner</strong> class can efficiently distribute workloads into chunks<br />
<strong>Code Generation Tools</strong> can improve the performance and efficiency by automating repetitive tasks and optimizing low-level code<br />
<strong>UseConfigureAwait()</strong> can prevent deadlocks and improve the performance.<br />
<strong>ArrayPool</strong> can reduce the frequency of allocating and garbage collecting<br />
<strong>Loop Unrolling</strong> can improve the code execution by reducing overhead</p>)
        }
      >Performance</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Flexibility</strong>: REST is considered more flexible due to various data formats like JSON, XML, or plain text while SOAP is based on XML only.<br />
<strong>State Management</strong>: REST APIs are stateless it means each request is treated independently without depending on previous interactions while SOAP Services can maintain state information on the server.<br />
<strong>Complexity</strong>: REST APIs are generally considered easier to implement and understand due to their simple design principles whereas SOAP can be more complex due to structure and header information.<br />
<strong>Resource Access</strong>: REST APIs access data by unique URLs while SOAP access through function calls which is defined within the service.<br />
<strong>Scalability</strong>: REST APIs are highly scalable and we can add new functionalities without disturbing existing ones.<br />
<strong>Cacheability</strong>: REST APIs are designed to be cacheable, so clients can cache a copy of the response and use it in future requests.</p>)
        }
      >REST SOAP</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>SOLID Principles</strong> are design rules that help us to build better software. They make our code easier to change, understand and maintain by reducing tight connections between different parts of the code.<br />
<strong>SRP</strong> says that a class should have only one reason to change, meaning it should do only one job. <strong>For example</strong>: consider a ReportGenerator class that is responsible for both generating reports and formatting them. This violates SRP. To follow the SRP, we can split this into two classes: ReportGenerator responsible for generating reports and ReportFormatter responsible for formatting reports.<br />
<strong>OCP</strong> says that a class should be open for extension, but closed for modification means we should be able to add new features without changing existing code. <strong>For example</strong> onsider a Shape class with a method to calculate area for different shapes. To follow the OCP, create a base Shape class and make separate classes like Circle, Rectangle, etc., that extend it.<br />
<strong>LSP</strong> states that a subclass should be able to replace its parent class without breaking the program. <strong>For example</strong> a Rectangle class with Width and Height properties. If we inherit from Rectangle to create a Square class, the LSP is violated because a square's width and height should always be equal.<br />
<strong>ISP</strong> states that clients should not be forced to implement interfaces which they don't use. Instead of using one big interface we shoul use small small interfaces. <strong>For example</strong>: Consider an IWorker interface with methods for both developers and testers. This could be problematic for a Manager class that doesn't need to implement both methods. To follow the ISP, we can split the IWorker interface into 2 separate interfaces ICodeWriter & ICodeTester<br />
<strong>DIP</strong> is a software design principle that states that high-level modules should not depend on low-level modules. Instead, both should depend on abstractions. This principle makes code more flexible and maintainable and easier to develop and deploy an application. <strong>For example</strong> consider a NotificationService class that directly depend on a EmailSender class. This creates a tight coupling between NotificationService and EmailSender. So we use an interface like IMessageSender to make it more flexible and loosely connected.</p>)
        }
      >SOLID</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>1xx - represents informational responses<br />
2xx - represents successful responses<br />
3xx - represents redirects<br />
4xx - represents client errors<br />
5xx - represents server errors<br />
200 - success/OK<br />
201 - CREATED(POST / PUT methods)<br />
304 - NOT MODIFIED<br />
400 - BAD REQUEST<br />
401- UNAUTHORIZED<br />
403 - FORBIDDEN<br />
404 - NOT FOUND<br />
500 - INTERNAL SERVER ERROR<br />
502 - BAD GATEWAY Server</p>)
        }
      >Status Code</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Versioning</strong> is a method for managing and maintaining multiple versions of an API. This is useful when various client depend on different versions of an API as It modify or improve our services without breaking the functionality of existing clients. <strong>Benifits of Versioning are:</strong><br />
          <strong>Backward Compatibility</strong>: ensures that existing clients can continue to function even as new features and changes are rolled out.<br />
<strong>Incremental Improvements</strong> allow to introduce new features, improvements and bug fixes to the API without breaking contracts with clients.<br />
<strong>Adoption</strong>: clients can choose when to upgrade to the latest API version based on their schedule, reducing the impact of new updates.<br />
We can do versioning using: <strong>Query String, URL, HTTP Header</strong><br />
Install <strong>AspNetCore.Mvc.Versioning</strong> package.<br />
Add <strong>services.AddApiVersioning</strong> in program.cs file.<br />
<strong>DefaultApiVersion</strong> is used to set the default version to API. We can create EmployeeV1Controller and EmployeeV2Controller.<br />
Query String Versioning: <strong>[ApiVersion(version_name)]</strong> attributes.<br />
URL based Versioning, we can define versions in a URL <strong>[Route("api/&#123;v:apiVersion&#125;/Values")]</strong>.<br />
In HTTP Header-Based Versioning we send the version in the Http header when call the controller and we need to add <strong>services.AddApiVersioning</strong> service in Program.cs</p>)
        }
      >Versioning</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>C# is a type-safe and managed language which provides many built-in security features. But, vulnerabilities can still arise, especially due to insecure coding practices, misconfiguration or third-party dependencies.<br />
<strong>SQL Injection</strong>: Using raw SQL queries in input SqlCommand("select *" )<br />
<strong>Command Injection</strong>:	Injecting input into system commands<br />
<strong>LDAP Injection</strong>:	Insecure LDAP queries<br />
<strong>XSS (Cross-Site Scripting)</strong>: Displaying user input without encoding<br />
<strong>Hardcoded Credentials</strong>:	Embedding passwords or API keys in source code<br />
<strong>Weak Authentication Logic</strong>:	Custom or broken login mechanisms<br />
<strong>Improper Role Check</strong>:	Failed to check role/permission([Authorize] missing)<br />
<strong>Insecure Token Storage</strong>:	Storing JWTs or refresh tokens insecurely<br />
<strong>Weak Algorithms</strong>:	Using MD5, SHA1, or DES<br />
<strong>Poor Key Management</strong>:	Hardcoded or improperly stored keys<br />
<strong>Deserializing</strong>: untrusted data using libraries like BinaryFormatter<br />
<strong>Missing HTTPS</strong>:	Sending sensitive data over HTTP<br />
<strong>Improper CORS Configuration</strong>:	Allowing * origins in production<br />
<strong>Insecure Headers</strong>:	Missing headers like CSP, HSTS, etc.<br />
<strong>Large File Uploads</strong>:	Unrestricted upload sizes<br />
Using outdated or vulnerable NuGet packages.</p>)
        }
      >Vulnerabilities</button><br />

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Access Modifier</strong> control the accessibility and visibility of classes, methods and variables. It define who can access and interact with these members</p>)
        }
      >Access Modifier</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Public</strong> modifier provides access to the entire program. It means that another method or another assembly which contains the class reference can access these members or types. This access modifier has the most permissive access level in comparison to all other access modifiers.</p>)
        }
      >Public</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Protected</strong> access modifier allows members to be accessible within the class and by derived classes. It does not allow access from outside the class or its derived classes.</p>)
        }
      >Protected</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Internal</strong> Access is limited to only the current Assembly, that is any class or type declared as internal is accessible anywhere inside the same namespace. It is the default access modifier. It is useful when you want to restrict access to code that should only be used within the same project or library.</p>)
        }
      >Internal</button>

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Authentication</strong> is the process of verifying the identity of a user or system to access the application.There are multiple ways to implement authentication, depending on the type of application lie web, mobile and API.<br />
          .NET provide we configure the authentication in Program.cs using middleware and services.<br />
Common Authentication are:<br />
JWT Authentication – for APIs and commonly use for SPA/mobile<br />
OAuth2/OpenID Connect(OIDC) – for external identity providers like Google, Azure AD, Auth0<br />
IdentityServer – for custom OAuth2/OIDC servers to microservices<br />
Cookies Authentication – for traditional web apps<br />
Windows Authentication – for intranet/enterprise apps</p>)
        }
      >Authentication</button>
      
       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>JSON Web Token Authentication</strong> is stateless and widely used for APIs and Single Page Applications and mobile applications. A token is issued to the client after login and the client sends it in the Authorization header for every requests.<br />
User logs in and sends credentials like username and password<br />
Server validates and issues a JWT token<br />
Client stores the token in localStorage or memory<br />
On each API call, the token is sent in the Authorization header<br />
Server validates the token and processes the request.</p>,
`builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidIssuer = "https://yourapp.com",
            ValidAudience = "yourapp-client",
            IssuerSigningKey = "secret-key"
        };
    });

app.UseAuthentication();
app.UseAuthorization();
`)
        }
      >JWT</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>OAuth 2.0</strong> is an authorization protocol. OpenID Connect (OIDC) is an authentication layer on top of OAuth2. Together, they are used for secure login with external identity providers (like Google, Facebook, Azure AD).<br />
User is redirected to the external provider like Google.<br />
User logs in and consents.<br />
The provider redirects back to your app with an authorization code.<br />
The app exchanges the code for access and ID tokens.<br />
Tokens are used to authenticate the user.</p>,
`builder.Services.AddAuthentication(options =>
{
    options.DefaultScheme = "Cookies";
    options.DefaultChallengeScheme = "oidc";
})
.AddCookie("Cookies")
.AddOpenIdConnect("oidc", options =>
{
    options.Authority = "https://accounts.google.com";
    options.ClientId = "your-client-id";
    options.ClientSecret = "your-client-secret";
    options.ResponseType = "code";
    options.Scope.Add("openid");
    options.Scope.Add("profile");
});
`)
        }
      >OAuth2.0</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>IdentityServer</strong> is a .NET-based OpenID Connect and OAuth 2.0 framework that lets you implement your own authentication server. Ideal for SSO and secure API access across microservices.<br />
Clients (web/mobile) authenticate through IdentityServer.<br />
IdentityServer issues access tokens (JWT) and ID tokens.<br />
APIs validate the tokens.<br />
Supports multiple flows (Authorization Code, Client Credentials etc.)</p>,
`services.AddIdentityServer()
    .AddInMemoryClients(clients)
    .AddInMemoryApiScopes(apiScopes)
    .AddInMemoryIdentityResources(identityResources)
    .AddTestUsers(users)
    .AddDeveloperSigningCredential();
`)
        }
      >IdentityServer</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Cookie</strong> Cookies are the traditional method for maintaining user sessions in web applications. The server issues a cookie after login, and the browser sends it with every request.<br />
User logs in.<br />
Server issues an authentication cookie.<br />
Browser stores and sends the cookie with each request.<br />
Server validates the cookie to authenticate the user.</p>, 
`builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/Account/Login";
        options.AccessDeniedPath = "/Account/AccessDenied";
    });

app.UseAuthentication();
app.UseAuthorization();
`)
        }
      >Cookie</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Uses <strong>Windows</strong> credentials (Active Directory) to authenticate users. It's seamless for internal enterprise apps (e.g., intranet) where users are already logged into the network domain.<br />
User accesses the app.<br />
The browser sends the user's Windows credentials (via NTLM/Kerberos).<br />
Server authenticates the user against Windows/AD.</p>, `appsettings.json
"iisSettings": {
  "windowsAuthentication": true,
  "anonymousAuthentication": false
}

services.AddAuthentication(IISDefaults.AuthenticationScheme);

app.UseAuthentication();
app.UseAuthorization();
`)
        }
      >Windows</button><br />

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Classes</strong> are user-defined data types that represent the state and behavior of an object. The state represents the properties and behavior that objects can perform.<br />
          <strong>Difference between Class and Struct</strong><br />
<strong>Classes</strong> is reference types while <strong>Struct</strong> is value types.<br />
<strong>Classes</strong> contains constructor or destructor while <strong>Struct</strong> does not contain constructor or destructor, but can contain Parameterized constructor or static constructor.<br />
<strong>Classes</strong> use new keyword for creating instances while <strong>Struct</strong> can create an instance, with or without new keyword.<br />
<strong>Classes</strong> can inherit from another class but <strong>Struct</strong> is not allowed to inherit from another struct.<br />
The data member of a <strong>Classes</strong> can be protected but in <strong>Struct</strong> can’t be protected.<br />
Function member of the <strong>Classes</strong> can be virtual or abstract but Function member of the <strong>Struct</strong> cannot be virtual or abstract.<br /><br />

<strong>Record</strong> is a reference type that is designed to be an immutable data container. <strong>Records</strong> provide built-in value-based equality and are ideal for defining data transfer objects.<br />
Key Features of <strong>Record</strong><br />
Immutability: Properties are immutable by default when using positional parameters.<br />
Value-Based Equality: Two record instances with the same data are considered equal.<br />
Concise Syntax: We can use positional records to reduce boilerplate. With-Expression: Allows creating a copy of a record with modifications.</p>,
`public record Person
{
    public string FirstName { get; init; }
    public string LastName { get; init; }
}`)
        }
      >Class</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Abstract Class</strong> is a class that provides a common definition to the subclasses, and this is the type of class whose object is not created.<br />
key points of Abstract classes are:<br />
<strong>Abstract Classes</strong> are declared using the abstract keyword.<br />
We cannot create an object of an abstract class.<br />
It must be inherited in a subclass if you want to use it.<br />
An Abstract class contains both abstract and non-abstract methods.<br />
The methods inside abstract class can either have an or no implementation.<br />
An Abstract class has only one subclass.<br />
Methods inside the abstract class cannot be private.<br />
If there is at least one method abstract in a class then the class is abstract.</p>)
        }
      >Abstract</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Partial Class</strong> is a type of class that allows dividing their properties, methods, and events into multiple source files, and at compile time, these files are combined into a single class.<br />
<strong>Key Points</strong>:<br />
All the parts of the partial class must be prefixed with the partial keyword.<br />
If you seal a specific part of a partial class, the entire class is sealed, the same as for an abstract class.<br />
Inheritance cannot be applied to partial classes.<br />
The classes written in two class files are combined at run time.</p>)
        }
      >Partial</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Private Class</strong> is a class that is only accessible within the class that contains it. This means it can only be used inside the outer (enclosing) class and not from outside.<br />
<strong>✅ When to Use a Private Class</strong><br />
To encapsulate helper logic that should not be accessed outside.<br />
To organize code within a class without polluting the global scope.<br />
To enforce tighter encapsulation and reduce the surface area of your code.</p>)
        }
      >Private</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Sealed Class</strong> cannot be inherited and used to restrict the properties.<br />
<strong>Key Points</strong>:<br />
A Sealed class is created using the sealed keyword.<br />
Access modifiers are not applied to a sealed class.<br />
To access the sealed members we must create an object of the class.</p>)
        }
      >Sealed</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Static Class</strong> is the type of class that cannot be instantiated means we cannot create an object of the class using the new keyword like such that class members can be called directly using their name.<br />
The CLR handles the loading and initialization of static classes and their members. When a program containing a static class is loaded, the CLR automatically loads the static class and its members.<br />
<strong>Key Points</strong>:<br />
It was created using the static keyword.<br />
Everything inside the static class must be static.<br />
We cannot create an object of the static class.<br />
A Static class cannot be inherited.<br />
It allows only a static constructor to be declared.<br />
The methods can be called using the class name without creating the instance.</p>)
        }
      >Static</button>

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Constructor</strong> is a special method that is automatically called when an object of a class is created. Its main purpose is to initialize the object.<br />
          Key Characteristics:<br />
Has the same name as the class.<br />
No return type, not even void.<br />
Can be overloaded (multiple constructors with different parameters).<br />
You can define default, parameterized, and static constructors.</p>)
        }
      >Constructor</button>

<button
        className="btn btn-primary me-2 mb-2"
        onClick={() =>
          handleOpenPopup(
              <p><strong>Default Constructor</strong> is a constructor that takes no parameters. It is used to initialize an object with default values.</p>,
              `public class Person
{
    public string Name;
    public int Age;

    // Default constructor
    public Person()
    {
        Name = "Unknown";
        Age = 0;
    }
}`
          )
        }
      >Default</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Parameterized Constructor</strong> accepts arguments and allows you to initialize the object with custom values.</p>,
            `public class Person
{
    public string Name;
    public int Age;

    // Parameterized constructor
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
}`)
        }
      >Parameterized</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Static Constructor</strong> initializes static members of the class. It is called only once, automatically, before any static member is accessed or any instance is created</p>,
            `public class Logger
{
    public static string LogFile;

    // Static constructor
    static Logger()
    {
        LogFile = "log.txt";
    }
}
`
          )
        }
      >Static</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Copy Constructor</strong> generates an object by copying variables from another object. When we want to create multiple instances with same values then we use the copy constructor. Copy Constructor takes the same class as a parameter.</p>,
            `class Program
{
	static void Main(string[] args)
	{
	   CopyConstructor obj1 = new CopyConstructor(10);
	   CopyConstructor obj2 = new CopyConstructor(obj1);
	}
}
public class CopyConstructor
{
	int x;
	public CopyConstructor(int i)
	{
		x = i;
	}
	public CopyConstructor(CopyConstructor obj)
	{
		x = obj.x;
	}
}`)
        }
      >Copy</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Private Constructor</strong> is created with the private specifier.
When class contains a private constructor we cannot create object outside the class means private constructor is used to create object within the same class only.
We can implement the singleton design pattern using private constructor
We use the private constructor when the class contains only static members.</p>,
`class Program
{
	private Program()
	{
		Console.Write("This private constructor");
	}
	static void Main(string[] args)
	{
		Program p = new Program();
		Console.WriteLine("Main method");
		Console.ReadKey();
	}
}`)
        }
      >Private</button><br />

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Design Patterns</strong> are a reusable solution to common software design problems that repeatedly occur in real-world application development. It is a template of how to solve problems that can be used in many situations.<br />
There are 23 design patterns. These patterns are grouped into three main categories:<br />
Creational: Factory Method, Abstract Factory, Builder Prototype, Singleton<br />
Structural: Adapter, Bridge, Composite, Decorator, Façade, Flyweight, Proxy<br />
Behavioral: Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Visitor, Template Method</p>)
        }
      >Design Patterns</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Abstract Factory</strong> creates a set of related objects or dependent objects. The objects created by the factory is determined at run-time depending on the selection of concrete factory classes. Abstract factory pattern acts as a super-factory that creates other factories. Abstract factory interface creates a set of related or dependent objects without specifying their concrete classes.</p>)
        }
      >Abstract Factory</button>
      
       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>CQRS (Command Query Responsibility Segregation)</strong> is a design pattern that separates read and write operations for a data store. This separation improves scalability, performance, and maintainability in applications. CQRS is often implemented with MediatR, event sourcing, and sometimes combined with the Clean Architecture pattern.<br />
Key Components of CQRS<br />
<strong>Commands</strong>: Used to modify the state of the system. Handled by command handlers.<br />
<strong>Queries</strong>: Used to retrieve data without modifying it. Handled by query handlers.<br />
<strong>Handlers</strong>: Process commands and queries separately.<br />
<strong>MediatR</strong>: Used to decouple handlers from controllers.<br />
<strong>Event Sourcing</strong>: Stores state changes as events rather than persisting the current state.</p>)
        }
      >CQRS</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Factory Design Pattern</strong> is a creational design pattern used to create objects without specifying their exact class. It provides a centralized place to create instances of a class, improving code maintainability, flexibility, and abstraction. Factory Design Pattern provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. It helps in creating objects without exposing the instantiation logic to the client.</p>,  
            `//Step 1: Define a Factory Interface
public interface IPaymentFactory
{
    IPaymentService CreatePaymentService(string paymentType);
}
//Step 2: Implement Factory with DI Support
public class PaymentFactoryDI : IPaymentFactory
{
    private readonly IServiceProvider _serviceProvider;

    public PaymentFactoryDI(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public IPaymentService CreatePaymentService(
	string paymentType)
    {
        return paymentType switch
        {
            "CreditCard" => _serviceProvider
			.GetRequiredService<CreditCardPayment>(),
            "PayPal" => _serviceProvider
			.GetRequiredService<PayPalPayment>(),
            _ => throw new ArgumentException("Invalid payment")
        };
    }
}
//Step 3: Register Services in Program.cs
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddTransient<CreditCardPayment>();
builder.Services.AddTransient<PayPalPayment>();
builder.Services.AddSingleton<IPaymentFactory, 
PaymentFactoryDI>();

var app = builder.Build();
app.Run();
//Step 4: Inject and Use the Factory
public class PaymentController : ControllerBase
{
    private readonly IPaymentFactory _paymentFactory;

    public PaymentController(IPaymentFactory paymentFactory)
    {
        _paymentFactory = paymentFactory;
    }

    [HttpPost("pay")]
    public IActionResult Pay(string paymentType)
    {
        var paymentService = 
	_paymentFactory.CreatePaymentService(paymentType);
        paymentService.ProcessPayment();
        return Ok("Payment processed successfully.");
    }
}`)
        }
      >Factory</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Mediator Pattern</strong> is a behavioral design pattern that reduces direct dependencies between objects by introducing a mediator object that handles communication. This promotes loose coupling and improves maintainability.<br />
We can use the Mediator Pattern<br />
When you have many objects that need to communicate with each other but don't want them to be tightly coupled.<br />
When you want to centralize complex communication logic.<br />
When modifying an object's interaction should not affect many other objects.</p>)
        }
      >Mediator</button>

        <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Repository Pattern</strong> is a design pattern that abstracts data access logic and provides a centralized way to interact with a database, making code more maintainable and testable. It acts as a mediator between the business logic and the data layer.</p>, 
            `public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
}

public interface IRepository<T> where T : class
{
    Task<IEnumerable<T>> GetAllAsync();
    Task<T> GetByIdAsync(int id);
    Task AddAsync(T entity);
    Task UpdateAsync(T entity);
    Task DeleteAsync(int id);
}

public class Repository<T>:IRepository<T> where T:class
{
    private readonly DbContext _context;
    private readonly DbSet<T> _dbSet;
    public Repository(DbContext context)
    {
        _context = context;
        _dbSet = context.Set<T>();
    }

    public async Task<IEnumerable<T>> GetAllAsync()
    {
        return await _dbSet.ToListAsync();
    }
}

public class ProductRepository : Repository<Product>
{
 public ProductRepository(DbContext context):base(context){}
}
Generic Repository with Unit of Work
public interface IUnitOfWork : IDisposable
{
    IRepository<Product> Products { get; }
    Task<int> CompleteAsync();
}

public class UnitOfWork : IUnitOfWork
{
    private readonly DbContext _context;
    public IRepository<Product> Products {get;private set;}
    public UnitOfWork(DbContext context)
    {
        _context = context;
        Products = new Repository<Product>(context);
    }

    public async Task<int> CompleteAsync()
    {
        return await _context.SaveChangesAsync();
    }

    public void Dispose()
    {
        _context.Dispose();
    }
}

public class ProductService
{
    private readonly IUnitOfWork _unitOfWork;

    public ProductService(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task AddProductAsync(Product product)
    {
        await _unitOfWork.Products.AddAsync(product);
        await _unitOfWork.CompleteAsync();
    }
}

Repository with Specification Pattern
public interface ISpecification<T>
{
    Expression<Func<T, bool>> Criteria { get; }
}

public class ProductByPriceSpecification:ISpecification<Product>
{
    public Expression<Func<Product, bool>> Criteria { get; }
    public ProductByPriceSpecification(decimal minPrice)
    {
        Criteria = p => p.Price >= minPrice;
    }
}

public class ProductRepository : Repository<Product>
{
    public ProductRepository(DbContext context):base(context){}
    public async Task<IEnumerable<Product>> 
	GetBySpecificationAsync(ISpecification<Product> spec)
    {
        return await _dbSet.Where(spec.Criteria).ToListAsync();
    }
}

services.AddScoped<IRepository<Product>,
Repository<Product>>();
services.AddScoped<IUnitOfWork, UnitOfWork>();`)
        }
      >Repository</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Singleton Design Pattern</strong> ensures that the class has only one instance and provides a global point of access to it. All further references to objects of the singleton class refer to the same instance. There are situations where we want only one instance of the object to be created and shared among all the clients. Client can not create an instance from outside.</p>, 
            `public sealed class Singelton
{
  private static Singelton _instance;
  private static object _lock = new object();
  public static Singelton GetSingleton()
  {
	lock (_lock)
		if (_instance == null) 
		_instance = new Singelton();
	return _instance;
  }
}
//
public class Singleton
{
private static readonly Singleton _instance=new Singleton();
  // Private constructor to prevent instantiation
  private Singleton() { }
  public static Singleton Instance => _instance;
  public void DoSomething()
  {
      Console.WriteLine("Singleton Instance Executing...");
  }
}

// Usage
class Program
{
    static void Main()
    {
        Singleton instance = Singleton.Instance;
        instance.DoSomething();
    }
}

Thread-Safe Singleton Using Lazy Initialization
public class Singleton
{
    private static readonly Lazy<Singleton> _instance=
	new Lazy<Singleton>(() => new Singleton());

    private Singleton() { }

    public static Singleton Instance => _instance.Value;
}
Registering Singleton in .NET Core (DI)
public class MySingletonService
{
    public string GetMessage() => "Hello Singleton!";
}

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSingleton<MySingletonService>();`)
        }
      >Singleton</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Clean Architecture</strong> is a software design approach that help us to create maintainable, testable and scalable applications by enforcing clear separation of concerns.<br />
<strong>Core Principles of Clean Architecture are:</strong><br />
<strong>Separation of Concerns</strong> different layers handle different responsibilities.<br />
<strong>Dependency Inversion</strong> High-level modules should not depend on low-level modules. Both should depend on abstractions.<br />
<strong>Testability</strong> Business logic is isolated from external dependencies, making unit testing easier.<br />
<strong>Independence of Frameworks</strong> The architecture does not depend on any specific frameworks like ASP.NET Core.<br />
<strong>Independence of UI and Database</strong> UI and database can be changed without affecting core business rules.<br />
Layers of Clean Architecture</p>,
`1. Entities (Core Domain): Contains business logic, domain models, and domain services.

public class Order
2. Application Layer: Implements interfaces for the repositories and external services.
public interface IOrderRepository
{
    Task<Order> GetByIdAsync(int id);
    Task SaveAsync(Order order);
}

public class PlaceOrderUseCase
{
    private readonly IOrderRepository _orderRepository;

    public PlaceOrderUseCase(IOrderRepository orderRepository)
    {
        _orderRepository = orderRepository;
    }

    public async Task Execute(Order order)
    {
        // Business logic, validations
        await _orderRepository.SaveAsync(order);
    }
}
3. Infrastructure Layer: Implements repositories, database access file storage.
public class OrderRepository : IOrderRepository
{
    private readonly AppDbContext _context;
    public OrderRepository(AppDbContext context)
    {
        _context = context;
    }
     public async Task SaveAsync(Order order)
    {
        _context.Orders.Add(order);
        await _context.SaveChangesAsync();
    }
}
4. Presentation Layer(API/UI) Responsible for user interaction by exposing endpoints of Web API and MVC Controllers. Uses Dependency Injection (DI) to call the Application Layer.
private readonly PlaceOrderUseCase _placeOrderUseCase;
public OrderController(PlaceOrderUseCase placeOrderUseCase)
{
	_placeOrderUseCase = placeOrderUseCase;
}`)
        }
      >Clean</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>N-Tier Architecture</strong> is a software design pattern that separates an application into multiple logical layers. It enhances scalability, maintainability and reusability.<br />
There are basically 4 layers in N-Tier Architecture<br />
<strong>Presentation Layer</strong> Handles user interaction, Displays data from the business layer, Sends user requests to the business layer.<br />
<strong>Business Logic Layer</strong> contains business rules and logic, Processes user input before sending data to the data access layer, Acts as a bridge between the UI and DAL.<br />
<strong>Data Access Layer</strong> Responsible for CRUD operations, interacts with the database<br />
<strong>Database Layer</strong> Stores and retrieves data.</p>)
        }
      >N-Tier</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Onion Architecture</strong> provides separation of Concerns, maintainability, testability and flexibility by organizing code into layers. Separation of Concerns means each layer has a distinct responsibility. Testability means business logic is isolated which makes unit testing easier. Flexibility means we can swap technologies like change EF Core to Dapper without affecting business logic. Maintainability means code is structured which makes it easy to manage and extend. It is widely used for building enterprise applications. Onion Architecture consists of multiple layers with dependency flow going inward means inner layers should not depend on outer layers, but outer layers can depend on inner layers.</p>,
            `Layers of Onion Architecture
1. Entities (Core Domain): Contains business logic, domain models, and domain services.

public class Order
2. Application Layer: Implements interfaces for the repositories and external services.
public interface IOrderService
{
    void PlaceOrder(Order order);
}

public class OrderService : IOrderService
{
    private readonly IOrderRepository _orderRepository;
    public OrderService(IOrderRepository orderRepository)
    {
        _orderRepository = orderRepository;
    }
	public void PlaceOrder(Order order)
    {
        _orderRepository.Add(order);
    }
}
3. Infrastructure Layer: Implements repository patterns, logging, and other infrastructure-related concerns. Contains Entity Framework DbContext, data repositories, and external API integrations.
public class OrderRepository : IOrderRepository
{
    private readonly AppDbContext _context;
    public OrderRepository(AppDbContext context)
    {
        _context = context;
    }
    public void Add(Order order)
    {
        _context.Orders.Add(order);
        _context.SaveChanges();
    }
}
4. Presentation Layer(API/UI) Responsible for user interaction by exposing endpoints of Web API and MVC Controllers. Uses Dependency Injection (DI) to call the Application Layer.
private readonly IOrderService _orderService;
    public OrderController(IOrderService orderService)
    {
        _orderService = orderService;
    }`
          )
        }
      >Onion</button><br />

       <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Dependency Injection</strong> helps us to build applications more cleaner, testable and maintanable. It separates the concerns of constructing objects and using them. It is a design pattern where an object's dependencies are provided from outside, rather than the object creating itself. <strong>Benefits of DI</strong> are<br />
<strong>Loose Coupling</strong> reduces direct dependencies between components.<br />
<strong>Improved Testability</strong> makes unit testing easier using mock dependencies.<br />
<strong>Scalability & Maintainability</strong> make easy to extend and modify the code.<br />
<strong>Better Code Organization</strong> separates concerns and improves architecture.<br />
<strong>DI Container Support</strong> to manages object lifecycles and reduces boilerplate.<br />


<strong>Key Concepts</strong>: IServiceCollection, IServiceProvider, Key-Typed, IEnumerable<br /><br />
<strong>Types of Dependency Injection</strong> are Constructors, Methods and Properties</p>,
`private readonly IOrderRepo _order;
public OrderService(IOrderRepo order)
{
    _order = order;
}

public void ProcessOrder(int id, IOrderRepo order)
{
	var order = order.GetOrder(id);
}

public IOrderRepo Order { get; set; }
public void ProcessOrder(int id)
{
	var order = Order.GetOrder(id);
}`)
        }
      >DI</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>IServiceCollection</strong> is a central part of Dependency Injection. It is a container that is used to register services and their lifetimes like Singleton, Scoped, Transient. DI is a collection of service descriptors that define how services are resolved. Common methods of IServiceCollection are<br />
<strong>AddSingleton</strong> creates a single instance of the service when it first requested and reused that same instance in all the places where that service is needed. Memory leaks in this service will build up over time and also memory efficient as they are created once reused everywhere.<br />
<strong>AddScoped</strong> creates a new instance for every new HTTP request. Within the same HTTP request, if the service is required in multiple places then the same instance is provided for the entire scope of that HTTP request.<br />
<strong>AddTransient</strong> creates every time new instance whether it is in the scope of the same HTTP request or across different HTTP requests. It uses more memory and Resources, which can have a negative impact on performance. So we can use this for the lightweight service.</p>)
        }
      >IServiceCollection</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>IServiceProvider </strong> is the resolver in the DI system which is used to retrieve services registered in the IServiceCollection. It acts as the runtime engine that delivers dependencies to our application. When the application runs, the IServiceProvider resolves services based on the registrations in IServiceCollection.<br /> <strong>BuildServiceProvider()</strong> converts the IServiceCollection into an IServiceProvider and GetService() resolves the service of type T. In most of the cases DI automatically call GetService() and automatically resolves dependencies.</p>)
        }
      >IServiceProvider </button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Key-Typed Services</strong> is used to register multiple implementations of the same service interface and differentiate between them by a key. This is useful when we need different behaviors from the same interface.</p>,
            `//Registering Key-Typed Services
public interface ILogger
{
    void Log(string msg);
}
public class FileLogger : ILogger
{
   public void Log(string msg)=>Console.Write($"FileLog:{msg}");
}

public class DBLogger : ILogger
{
    public void Log(string msg)=>Console.WriteLine($"DBLog:{msg}");
}
services.AddSingleton<ILogger,FileLogger>("File");
services.AddSingleton<ILogger,DBLogger>("DB");

//Resolving Key-Typed Services
public class LoggerFactory
{
  private readonly IServiceProvider _provider;
  public LoggerFactory(IServiceProvider provider)
  {
      _provider = provider;
  }
  public ILogger GetLogger(string key)
  {
    return key switch
    {
     "File"=>_provider.GetService<FileLogger>(),
     "DB" => _provider.GetService<DBLogger>(),
   _ => throw new InvalidOperationException("Invalid key")
    };
  }
}`
          )
        }
      >KeyType</button>

        <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>We can register multiple implementations of the same interface by calling the AddTransient, AddScoped and AddSingleton method multiple times each with a different implementation. To resolve all registered implementations, we can inject <strong>IEnumerable&lt;T></strong> where T is the interface. The DI container will automatically inject all the registered implementations in the order in which they were registered. This is useful when you want to execute a series of actions and handle things like notification providers, validators or handlers.<br />
<strong>Inject services with parameters that are not registered in DI using IServiceProvider and Using Factory Pattern</strong> which provides a way to instantiate objects dynamically based on runtime conditions.</p>,
`services.AddTransient<INotifier, EmailNotifier>();
services.AddTransient<INotifier, SmsNotifier>();
public NotifiService(IEnumerable<INotifier> notifiers)
{
    foreach (var notifier in notifiers)
        notifier.Send("Hello");`)
        }
      >IEnumerable</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Inversion of Control</strong> is a software design principle that improves code integration and testability. It involves in dependency creation and management to .Net framework.<br />
In IoC objects get their dependencies from an outside service or container, instead of creating them themselves.<br />
This makes the application more decoupled and maintainable, as different parts of the code don't interfere with each other.<br />
IoC implementation<br />
Dependency injection is a subset of the IoC principle.<br />
We can also implement IoC using events, delegates, template pattern, factory method, or service locator.<br />
Benefits of IoC<br />
IoC promotes loose coupling and improves code modularity and testability.<br />
It allows developers to swap dependency implementations and mock dependencies.</p>)
        }
      >IOC</button>
      
       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>IOptions&lt;T&gt;</strong> bind and inject strongly-typed configuration settings from appsettings.json into our classes. Instead of accessing configuration values using string keys, we define a class that matches the structure of our configuration section. This class is then bound to the configuration section using the Configure&lt;T&gt;() method during service registration.
Once configured, the settings can be injected anywhere in application using IOptions, which provides access to the bound configuration through the Value property. <strong>Benefits of Using IOptions</strong> are Strongly typed access to configuration values, Eliminates hardcoded keys and Supports validation.</p>,
`"MySettings":{ "ApiKey": "123456" // appsettings.json
public string ApiKey {get; set;} // MySettings class

builder.Services.Configure<MySettings>(
    builder.Configuration.GetSection("MySettings"));

private readonly MySettings _settings;
public MyService(IOptions<MySettings> options)
Console.WriteLine(_settings.ApiKey);`)
        }
      >IOption</button>

       <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>State Management</strong> is a technique to maintain the state of an application, object and variable across multiple requests. It's useful because web applications are stateless.</p>)
        }
      >State Management</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Application State</strong> is used to store information that is shared among users. Application state is stored in the memory of the Windows process which processes user requests on the web server. Application state is useful in storing a small amount of often-used data.<br />
<strong>Session State</strong> provides a place to store values that will persist across page requests. Values stored in Session are stored on the server and will remain in memory until they are explicitly removed or Session expires. It is defined as the period of time that a unique user interacts with a Web application. Session state is a collection of objects, tied to a session stored on a server.<br />
<strong>TempData</strong> is a dictionary used to store data between requests after a redirect and the data is removed after it's read once. We can use Peek or Keep. <strong>TempData.Peek("key")</strong> reads the value without removing it, so it stays available for the next request. <strong>TempData.Keep("key")</strong> keeps the value after it has been read, so it won’t be deleted automatically.<br />
<strong>ViewBag</strong> is a dynamic wrapper around ViewData that also passes data from controller to view in the same<br />
<strong>ViewData</strong> is a dictionary object used to pass data from controller to view during the same request; requires string keys and type casting.</p>)
        }
      >Server</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Control State</strong> is used to cache the necessary data for a control to function properly. ControlState is essentially a private ViewState for our control only, and it is not affected when ViewState is turned off. ControlState is used to store small amounts of critical information.<br />        
<strong>Cookie</strong> is a small amount of data that is either stored on the client side in a text file or in the memory of the client browser session. Cookies are always sent with the request to the web server and information can be retrieved from the cookies at the web server. Every time a user visits a website, cookies are retrieved from the user's machine and help identify the user.<br />
<strong>Hidden Control</strong> doesn't render anything on the web page at the client browser but can be used to store some information on the web page which can be used on the page. Hidden fields are used to store data at page level.<br />
<strong>Query String</strong> is used to pass the values or information from one page to another page. They are passed along with URLs in clear text. Query strings provide a simple but limited way of maintaining some state information.<br />
<strong>View State</strong> is a client-side way to keep page values between requests. It stores data in a hidden field on the page using encoded text. When the page is sent to the server again, this hidden data goes with it, so the server can restore the values and continue processing.<br />
<strong>Local Storage/Session Storage</strong> Stores data on the client side</p>)
}
      >Client</button><br />

       <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Monolithic Architecture</strong> is like a big container where all the software components are bundled together tightly. It is usually built as one large system and is one code-base.<br />
<strong>Microservice Architecture</strong> is more about applying a certain number of principles and architectural patterns. Each microservice lives independently and rely on each other. Microservices are deployed independently with their own database per service.<br />
There are many components in a microservices architecture like:<br />
<strong>Clients</strong>: Different users send requests from various devices.<br />
<strong>Identity Provider</strong>: Validate a user's or client's identity and issue security tokens.<br />
<strong>API Gateway</strong>: Handles the requests from clients.<br />
<strong>Static Content</strong>: Contains all of the system's content.<br />
<strong>Management</strong>: Services are balanced on nodes and failures are identified.<br />
<strong>Service Discovery</strong>: A guide to discovering the routes of communication between microservices.<br />
<strong>Content Delivery Network</strong>: Includes distributed network of proxy servers and their data centers.<br />
<strong>Remote Service</strong>: Provides remote access to data or information that resides on networked computers and devices.<br /><br />
<strong>Advantage of Microservices</strong><br />
<strong>Decoupling</strong>: Within a system, services are largely decoupled. The application as a whole can be easily constructed, altered, and scalable<br />
<strong>Componentization</strong>: Microservices are viewed as independent components that can easily be exchanged or upgraded<br />
<strong>Business Capabilities</strong>: Microservices are relatively simple and only focus on one service<br />
<strong>Team Autonomy</strong>: Each developer works independently of each other, allowing for a faster project timeline<br />
<strong>Continuous Delivery</strong>: Enables frequent software releases through systematic automation of software development, testing, and approval<br />
<strong>Decentralized Governance</strong>: Choosing the right tool according to the job is the goal. Developers can choose the best tools to solve their problems<br />
<strong>Agility</strong>: Microservices facilitate agile development. It is possible to create new features quickly and discard them again at any time.</p>)
        }
      >Microservice</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Blue-Green Deployment</strong> is a software development strategy that uses two identical environments to reduce downtime and risk when deploying new features or versions of an application.<br />
Create two identical environments, one called blue and the other called green<br />
Run the current application version in the blue environment<br />
Run the new application version in the green environment<br />
After testing, redirect traffic from blue to green<br />
If problems occur, roll back to the blue environment<br />
After the green environment has been live for a while, make it the new blue environment and create a new green environment<br />
<strong>Benefits</strong>: Reduces downtime and risk, Improves rollback capabilities, Improves user experience, and Useful for product experimentation.</p>)
        }
      >Blue-Green</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Implementing a microservice architecture requires effective communication, complexity management and service interactions.<br />
<strong>Challenges</strong><br />
<strong>Challenge 1: Service Coordination</strong> can be complex due to each microservice operates independently with its codebase and database and it's essential to establish effective communication between them.<br />
<strong>Solution: API Gateway</strong> provide a central entry point for clients and simplify service communication. API Gateway handle request routing and can perform tasks like load balancing and authentication. This practice centralizes the routing logic. API gateway can also help with versioning and rate limiting.<br />
<strong>Challenge 2: Data Management</strong> Each microservice maintains its own database, which can lead to data consistency and synchronization issues. To make sure data is accurate and up to date across all services can be complex. So, managing transactions and maintain data security between services becomes critical.<br />
<strong>Solution: Event Sourcing and CQRS</strong><br />
<strong>Event Sourcing</strong> involves capturing all changes to an application’s state as a sequence of immutable events. Each event represents a change to the system’s state and can be used to reconstruct the state at any point in time. By storing these events and using them for data reconstruction, we can maintain data consistency and simplify synchronization.<br />
<strong>Command Query Responsibility Segregation (CQRS)</strong> approach separate the read and write data models. This allows to optimizations and improved data consistency.<br /> 
<strong>Challenge 3: Scalability</strong> While the architecture promotes horizontal scaling of individual services, ensuring dynamic scaling, load balancing, and resource allocation to meet changing demands without overprovisioning resources becomes challenging.<br />
<strong>Solution: Utilize containerization and orchestration</strong><br />
Containerization like Docker packages each microservice and its dependencies into a standardized container. Orchestration tools like Kubernetes manage these containers automatically scaling them up and down in response to changes the workloads. This combination simplifies deployment and scaling and makes it easier to adapt to changing demands.<br />
<strong>Challenge 4: Monitoring and Debugging</strong> varius independent services communicate in Microservices so it’s dificult to monitor individual service's health, performance, and logs across the entire system. Debugging issues of performance problems become more complex in this type of distributed environment.<br />
<strong>Solution: Incorporate centralized logging and distributed tracing</strong> Centralized logging tools collect log data from various services into a single location. It allows for easier monitoring and debugging, as developers can access a unified log stream for all services.<br />
<strong>Challenge 5: Security</strong> Each service may expose APIs for interaction, making it essential to ensure the security of both the services themselves and the communication between them. As services interact across a network including data breaches, unauthorized access, and denial-of-service attacks, must be addressed effectively.<br />
<strong>Solution: Implement OAuth 2.0 and JWT</strong> is an industry-standard protocol for secure authentication and authorization. It ensures that only authenticated users and services can access sensitive data. JWTs are compact, self-contained tokens that transmit information between services securely. These technologies enhance security by enabling controlled access and secure data transmission.</p>)
        }
      >Challenges</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>6 steps to deploy the Microservices:</strong><br />
<strong>Cloud Services</strong> provide scalable, reliable infrastructure, eliminating the need to manage physical servers.<br />
<strong>Design for Failure</strong> implement redundancy and failover mechanisms so that when a service goes down, it doesn’t bring down the entire system. This approach ensures uninterrupted service availability.<br />
<strong>Decentralized Data Management</strong> Each microservice should have its own data store. Decentralized data management ensures that changes to one service’s data structure won’t impact others, enhancing agility and scalability.<br />
<strong>Distribute Governance</strong> approach accelerates development, and ensures findings align with service-specific requirements.<br />
<strong>Automate Deployment and CI/CD</strong> tools like Kubernetes, Docker, and Jenkins to streamline our deployment pipeline. Implement continuous integration and continuous deployment (CI/CD) processes to automate testing, building, and deploying microservices. This automation accelerates the release cycle and minimizes the risk of human error. Monitor, log, and troubleshoot from the start Start monitoring and logging your microservices right from the beginning.<br /> 
<strong>Use Monitoring and Observability Tools</strong> like Prometheus, Grafana, and ELK Stack to collect and analyze your services’ performance data. Effective monitoring lets you identify issues early, troubleshoot efficiently, and continuously optimize your microservices.</p>)
        }
      >Deployment</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>🛠️ <strong>Handle Microservice Failures</strong> <br />
<strong>Fail Fast</strong> – Stop the process immediately when something goes wrong.<br />
<strong>Retry</strong> – Try the failed request again, but only a few times.<br />
<strong>Exponential Backoff</strong> – Wait longer after each retry to avoid overloading the system.<br />
<strong>Circuit Breaker</strong> – Stop calling a failing service for a while to let it recover.<br />
<strong>Bulkhead</strong> – Isolate parts of the system so one failure doesn’t affect everything.<br />
<strong>Timeouts</strong> – Set time limits so requests don’t hang forever.<br />
<strong>Graceful Degradation</strong> – Show partial or old data when the full service isn’t working.<br />
<strong>Fallbacks</strong> – Use a backup method or data if the main service fails.<br />
<strong>Health Checks</strong> – Regularly check if services are alive and ready.<br />
<strong>Monitoring and Alerts</strong> – Watch services and get notified if something breaks.<br />
<strong>Centralized Logging</strong> – Collect all logs in one place to debug issues.<br />
<strong>Tracing</strong> – Track how a request moves through different services.<br />
<strong>Idempotency</strong> – Make sure retrying a request doesn’t cause problems.<br />
<strong>Service Mesh</strong> – Use tools like Istio to handle retries, timeouts, and more automatically.</p>)
        }
      >Failure</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>SAGA Pattern</strong> is the failure management that is used to stable distributed applications. It helps to coordinate transactions among multiple microservices to maintain the consistency of data. Saga is a sequence of transactions that updates every service and announces a message to trigger the next step in the transaction. If somehow any step fails the saga pattern executes a transaction that compensates to prevent transaction. It provides transaction management through a sequence of local transactions. Each local transaction updates the database and send message to trigger the next local saga transaction.<br />
<strong>Saga Pattern is of two types:</strong><br />
<strong>Choreography Saga Pattern</strong> is a method to organise sagas where participants swap events without centralized control point.<br />
<strong>Orchestration Saga Pattern</strong> is a method to coordinate sagas through a centralized controller that informs the saga participants what local transactions should be executed.<br />
<strong>Advantages of Saga Pattern</strong><br />
The orchestrator saga pattern is good for the complex workflow that involves various participants.<br />
It will be suitable when every participant and activity flow is controlled in the process.<br />
Whereas, the choreography saga pattern is beneficial for simple workflows having few participants.<br />
It doesn’t require additional service maintenance and implementation and doesn’t introduce a single failure point as the responsibilities are distributed among the participants.<br />
<strong>When to Use Saga Pattern</strong><br />
Majorly this pattern can be used when we need to ensure data consistency without tight coupling in the distributed system or microservices. It can also be used when there is a need to roll back or compensate for the operation in the case of sequential failure.</p>)
        }
      >SAGA</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>In the traditional CRUD model data process like read, modified, and then updated using a transaction that locks the data. This process was slow, difficult to scale, and less responsive due to the extra steps involved.<br />
That’s why event sourcing pattern came. It is commonly used with CQRS Design Pattern to decouple read and write workloads from each other and optimize them for better scalability, performance and security. It is an approach where we can get all the application state changes as a sequence of events. The data is stored as a number of events rather than direct update in data stores. Event sourcing is an excellent method to update the application’s state and publish the events automatically.<br />
In this pattern application code sends a series of events that describes each action that has taken place on the data to the event store. The events are persisted in an event store that acts as the record system of the current data state. Then the event store publishes the events to notify the users and handle them if required.<br />
<strong>Advantages of Event Sourcing Pattern</strong><br />
Events don’t update data store directly instead they are simply record for handling at a suitable time that can simplify the management and implementation.<br />
Events are changeable and can be stored using an append-only operation. The user interface process that has created an event can continue while tasks handling events run in the background.<br />
As event sourcing can avoid the need to directly update an object in the data store, it helps to out the concurrent updates from creating conflicts.<br />
The event source initiates an event and performs task operation in response to that event. With this decoupling of the task, we can easily achieve extensibility and flexibility in the application.<br />
<strong>When To Use Event Sourcing Pattern</strong><br />
Event sourcing patterns can be used when it’s important to minimize the existence of conflicting updates to data.<br />
It can be used to record an event that has taken place and be capable to replay them and restore the state of a system, keep history, roll back changes and audit logs.<br />
Event sourcing pattern can also be used in conjunction with CQRS for eventual consistency.<br />
It can be used to increase the flexibility to change the format of entity data.</p>)
        }
      >Event Sourcing</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Use Microservice</strong><br />
When our application needs to scale independently and each component can grow or shrink based on its demands.<br />
When we want to enable multiple development teams to work concurrently<br />
When different parts of our application require various technologies.<br />
When we need to isolate failures and maintain system reliability.<br />
When we plan for CI/CD pipeline, quicker updates and bug fixes.<br />
When we have cross-functional teams that can take ownership of specific microservices.<br />
<strong>Do Not Use Microservice</strong><br />
When we’re dealing with small-scale applications with minimal complexity.<br />
When we have limited resources or a small development team.<br />
When migrating from a legacy system it can be expensive or risky<br />
When dealing with applications heavily reliant on data consistency and transactions.<br />
When our project demands stringent security and compliance requirements, these can be challenging to implement across numerous microservices.</p>)
        }
      >When Use</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>API Gateway</strong> is a single entry point for clients to access microservices. It acts as a reverse proxy between client applications and the microservices.<br />
<strong>How does an API gateway work?</strong><br />
It routes requests to the appropriate microservice<br />
It aggregates data from multiple microservices<br />
It applies policies consistently across all microservices<br />
It can translate protocols between clients and microservices<br />
It can reduce the number of round trips between the client and the application<br />
<strong>Why use an API gateway?</strong><br />
It simplifies the complexities of client and microservices interactions<br />
It improves the operation and management efficiency of your microservice architecture<br />
It hides the details of the system architecture implementation<br />
It makes microservices more user-friendly<br />
It can perform tasks such as authentication, rate limiting, and caching</p>)
        }
      >API Gateway</button><br />

       <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Thread</strong> is a lightweight unit of execution which shares memory within a process. <strong>Process</strong> is something that the operating system uses to execute a program by providing the resources required. Each process has a unique process id associated with it. We can view the process within which a program is running using the windows task manager.<br /> 
          <strong>Multithreading</strong>: is a programming technique which allow to run multiple threads at the same time within a single process. Each thread represents a separate execution path and enable task to be performed in parallel to improve the efficiency and performance of applications. It is useful for better CPU utilization and responsive apps like UI + background work or downloading a file while keeping the UI responsive.<br />
<strong>There are two ways to share data between multiple threads</strong> Concurrent collection classes and Using Synchronization Primitives<br />
<strong>Start()</strong>	Starts the thread.<br />
<strong>Join()</strong>	blocks the current thread and makes it wait until the thread on which the Join method is invoked completes. The join method also has an overload where we can specify the timeout. If we don’t specify the timeout the calling thread waits indefinitely, until the thread on which Join() is invoked completes. This overloaded Join method returns a boolean true if the thread has terminated otherwise false.<br />
<strong>Sleep(ms)</strong>	Pauses the thread for a duration.<br />
<strong>IsAlive()</strong>	Checks if the thread is still running.<br />
<strong>Abort()</strong>	Used to forcibly stop a thread.<br />
<strong>Deadlocks</strong> Threads waiting on each other.<br />
<strong>Race Conditions</strong> Two threads modify shared data at the same time.<br />
<strong>Thread Safety</strong> Shared data must be protected like with lock, Monitor<br />
          </p>)
        }
      >Thread</button>
      
       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Async and Await</strong> are keywords that work together to enable asynchronous programming. It allows methods to run in the background without blocking the main thread.<br />
<strong>Async</strong> performs asynchronous tasks such as fetching data from a database, reading a file, etc and they can be marked as 'async'.<br />
Whereas <strong>Await</strong> keyword making await to a statement means suspending the execution of the async method until the asynchronous task completes. After suspension, the control goes back to the caller method. Once the task completes, the control comes back to the states where await is mentioned and executes the remaining statements in the enclosing method.<br />

<strong>Async</strong> method can have any one of this signature.<br />
async Task which creates a method that can be awaited, but does not return any value.<br />
async Task&lt;T&gt; which creates a method that can be awaited, and returns a value of the type T.<br />
async void allows for fire and forget methods and cannot be awaited.</p>)
        }
      >Async Await</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Deadlock</strong> occurs when 2 or more threads wait for each other to release resources and none of them proceed because they are all stuck and waiting. <strong>Suppose</strong> we have 2 threads Thread 1 and Thread 2 and 2 resources Resource 1 and Resource 2. Thread 1 has already acquired a lock on Resource 1 and wants to acquire a lock on Resource 2. At the same time, Thread 2 has already acquired a lock on Resource 2 and wants to acquire a lock on Resource 1. Two threads never give up their locks, hence a deadlock.<br />
<strong>4 Conditions for Deadlock</strong>: Mutual Exclusion, Hold and Wait, No pre-emption, Circular Wait<br />
<strong>Mutual Exclusion</strong>: Resources involved must be unshareable between multiple threads.<br />
<strong>Hold and Wait</strong>: Threads hold the resources they have allocated and wait for the resources they want.<br />
<strong>No pre-emption</strong>: If the thread locks the resource other threads cannot take the resource until the thread releases it.<br />
<strong>Circular Wait</strong>: A circular chain must exist in which each thread waits for other threads to release resources.<br />

<strong>Avoid and resolve deadlocks like</strong><br />
Acquiring locks in a specific defined order<br />
Mutex class<br />
Monitor.TryEnter() method</p>,
`object lockA = new object();
object lockB = new object();

void Thread1()
{
    lock (lockA)
    {
        Thread.Sleep(100); // Simulate work
        lock (lockB)
        {
            Console.WriteLine("Thread 1 acquired lockA and lockB");
        }
    }
}

void Thread2()
{
    lock (lockB)
    {
        Thread.Sleep(100); // Simulate work
        lock (lockA)
        {
            Console.WriteLine("Thread 2 acquired lockB and lockA");
        }
    }
}
    
And running them like this:

new Thread(Thread1).Start();
new Thread(Thread2).Start();`)
        }
      >Deadlock</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Lock</strong> keyword ensures that one thread is executing a piece of code at one time. The lock keyword ensures that one thread does not enter a critical section of code while another thread is in that critical section.<br />
<strong>Interlocked</strong> functions are useful in multithreading programs to safely change the value of shared variables. By default variables are not thread-safe. When we apply addition, subtraction, or checking the value of variables multiple threads can corrupt the variables. For preventing these dirty reads, we can use Interlocked functions.<br />
<strong>LiveLock</strong> is very similar to a deadlock except for involved threads states are continually changing their state but still, they cannot complete their work.
          </p>)
        }
      >Lock</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Monitor</strong> provides a mechanism that synchronizes access to objects. It can be done by acquiring a significant lock so that only one thread can enter in a given piece of code at one time. Using a monitor it can be ensured that no other thread is allowed to access a section of application code being executed by the lock owner, unless the other thread is executing the code using a different locked object. The Monitor class has few methods to access to a region like Monitor.Enter, Monitor.TryEnter and Monitor.Exit.</p>)
        }
      >Monitor</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Mutex</strong> works similarly to AutoResetEvent and releases only one waiting thread at a time. In the AutoResetEvent any thread can call the Set() method and unblock a waiting thread. But the Mutex object remembers the thread which got the Mutex object and only that thread can release the Mutex. Mutex object auto record the thread id which got the Mutex object and when a user calls the ReleaseMutex() method for releasing a Mutex object, it internally checks whether the releasing thread is the same as the thread which got the Mutex object if yes, then only it releases the Mutex object else it throws an exception.</p>)
        }
      >Mutex</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Semaphores</strong> are used when we have to restrict how many threads can enter a critical region. Semaphore is simply an int32 variable maintained by the kernel. We have initialized the Semaphore variable we specify the count of how many threads can enter into the critical region at a time. A thread waiting on a semaphore block when the semaphore is 0 and unblocks when the semaphore is greater than 0.</p>)
        }
      >Semaphores</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Task.Run</strong> is used to run code asynchronously on a separate thread from the thread pool. It is commonly used to offload CPU-bound or long-running operations to prevent blocking the main thread, especially in UI or web applications.</p>,
            `class Program
{
    static async Task Main()
    {
        Console.WriteLine("Starting...");
        Task<int> task = Task.Run(() =>
        {
            Task.Delay(3000).Wait();
            return 42;
        });
        int result = await task;
        Console.WriteLine($"Result: {result}");
    }
}`
          )
        }
      >Task.Run</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>ThreadPool</strong> class is a useful feature which manage a pool of threads and can be used to execute tasks asynchronously and manages a pool of threads and can be used to execute tasks asynchronously. So Instead of creating and destroying threads for every task, which can be resource-intensive, the ThreadPool allows multiple tasks to share a limited number of threads.</p>)
        }
      >ThreadPool</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Task class used for more complex or parallel tasks also known as <strong>Task Parallel Library (TPL)</strong>. The Task class allows us to create tasks that can run asynchronously, improving both performance and code readability. It also simplifies task management by handling thread pooling and synchronization.</p>)
        }
      >TPL</button><br />

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