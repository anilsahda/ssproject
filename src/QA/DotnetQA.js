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
          handleOpenPopup(<p><strong>Classes</strong> are user-defined data types that represent the state and behavior of an object. The state represents the properties and behavior that objects can perform.</p>)
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
          handleOpenPopup(<p><strong>Static Class</strong> is the type of class that cannot be instantiated means we cannot create an object of the class using the new keyword like such that class members can be called directly using their name.<br />
The CLR handles the loading and initialization of static classes and their members. When a program or namespace containing a static class is loaded, the CLR automatically loads the static class and its members.<br />
<strong>Key Points</strong>:<br />
It was created using the static keyword.<br />
Only static members are allowed; in other words, everything inside the class must be static.<br />
We cannot create an object of the static class.<br />
A Static class cannot be inherited.<br />
It allows only a static constructor to be declared.<br />
The static class methods can be called using the class name without creating the instance.</p>)
        }
      >Static</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Sealed Class</strong> cannot be inherited and used to restrict the properties.<br />
<strong>Key Points</strong>:<br />
A Sealed class is created using the sealed keyword.<br />
Access modifiers are not applied to a sealed class.<br />
To access the sealed members we must create an object of the class.</p>)
        }
      >Sealed</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Partial Class</strong> is a type of class that allows dividing their properties, methods, and events into multiple source files, and at compile time, these files are combined into a single class.<br />
<strong>Key Points</strong>:<br />
All the parts of the partial class must be prefixed with the partial keyword.<br />
If you seal a specific part of a partial class, the entire class is sealed, the same as for an abstract class.<br />
Inheritance cannot be applied to partial classes.<br />
The classes written in two class files are combined at run time.</p>)
        }
      >Partial</button>

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
          handleOpenPopup(<p><strong>Delegates</strong> are the Type-Safe Function Pointer. It means they hold the reference of a function and call that method for execution. When we instantiate a delegate we can associate its instance with any method that matches the delegate’s signature. we can invoke the method through the delegate instance.<br />
We can use delegates for:<br />
<strong>Type Safety</strong> provides a type-safe way to handle method references to ensure the method signature matches the delegate signature.<br />
<strong>Flexibility</strong> They allow methods to be passed as parameters, enabling dynamic method invocation and callback mechanisms.<br />
<strong>Event Handling</strong> are the foundation of event handling.<br />
There are 3 types of delegates: Singlecast, Multicast and Generic</p>)
        }
      >Delegates</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Generic Delegates</strong> use generic types parameter to work with multiple types without casting. C# provides 3 generics delegate<br />
Func delegate represents a function with return type.<br />
Action delegate represents void return type with no parameter.<br />
Predicate delegate takes an input parameter and returns boolean</p>,
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
      >Generic</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Singlecast Delegates</strong> reference a single method with a matching signature. When the delegate is invoked, it calls the referenced method.</p>,
            `public delegate void DisplayMessage(string message);
class Program
{
    static void Main()
    {
        DisplayMessage display = ShowMessage;
        display("Hello, Singlecast delegate!");
    }

	static void ShowMessage(string message)
    {
        Console.WriteLine(message);
    }
}`
          )
        }
      >Singlecast</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Multicast Delegates</strong> can reference multiple methods with a matching signature. When the delegate is invoked, it calls all the referenced methods in the order they were added. Multicast delegates are created using the += or -= operators.</p>, `public delegate void DisplayMessage(string message);
class Program
{
    static void Main()
    {
        DisplayMessage display = ShowMessage1;
        display += ShowMessage2;
        display("Hello, Multicast delegate!");
    }
	static void ShowMessage1(string message)
    {
        Console.WriteLine("Message 1: " + message);
    }
	static void ShowMessage2(string message)
    {
        Console.WriteLine("Message 2: " + message);
    }
}`)
        }
      >Multicast</button>

       <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Dependency Injection</strong> helps us to build applications more cleaner, more testable and more maintanable. It separates the concerns of constructing objects and using them. It is a design pattern where an object's dependencies are provided from outside, rather than the object creating itself. Benefits of DI:<br />
<strong>Loose Coupling</strong> reduce dependencies between components and makes them more modular and easier to manage.<br />
<strong>Improved Testability</strong> enables easy unit testing by allowing mock dependencies.<br />
<strong>Scalability and Maintainability</strong> code becomes easier to extend and modify without breaking existing implementations.<br />
<strong>Better Code Organization</strong> promotes a clean separation of concerns and improves the architecture.<br />
<strong>Automatic Dependency Management</strong> DI container handles the lifecycle of dependencies, reducing boilerplate code.
There are four key concepts of DI like IServiceCollection, IServiceProvider, Key-Typed Services, IEnumerable Services</p>,
`Types of Dependency Injection:

1. Dependencies are passed as parameters in Constructor

private readonly IOrderRepository _orderRepo;
    public OrderService(IOrderRepository orderRepo)
    {
        _orderRepo = orderRepo;
    }

    2. Dependencies are passed as parameters to Methods

public void ProcessOrder(int id,IOrderRepository orderRepo)
{
	var order = orderRepo.GetOrder(id);
}

3. Dependencies are set via Properties.

public IOrderRepository OrderRepository { get; set; }
public void ProcessOrder(int orderId)
{
	var order = OrderRepository?.GetOrder(orderId);
}`)
        }
      >DI</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>IServiceCollection</strong> is a central part of Dependency Injection. It is a container that is used to register services and their lifetimes like Singleton, Scoped, Transient. DI is a collection of service descriptors that define how services are resolved.<br />
Common methods of IServiceCollection are<br />
<strong>AddSingleton&lt;Service, Implementation&gt;()</strong>: creates a single instance of the service when it is first requested and reusest that same instance in all the places where that service is needed. Memory leaks in this service will build up over time and also memory efficient as they are created once reused everywhere.<br />
<strong>AddScoped&lt;Service, Implementation&gt;()</strong>: with every new HTTP request creates a new instance. Within the same HTTP request, if the service is required in multiple places then the same instance is provided for the entire scope of that HTTP request.<br />
<strong>AddTransient&lt;Service, Implementation&gt;()</strong>: a new instance is created every time whether it is in the scope of the same HTTP request or across different HTTP requests. Transient create every time new instance so it will use more memory and Resources and can have a negative impact on performance. So we can use this for the lightweight service.</p>)
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
      >Key-Typed</button>

        <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Key Concepts of IEnumerable Services</strong><br />
<strong>Strategy Pattern</strong>: encapsulates behaviors and makes them interchangeable at runtime. Each algorithm is isolated within its own class.<br />
<strong>Factory Method</strong>: provides a way to instantiate objects dynamically based on runtime conditions.<br />
<strong>IEnumerable</strong> is used to inject multiple implementations of a IService into a class. It provides a way to access all registered implementations, enabling the consumer to iterate over the services and select the appropriate implementation based on specific needs.
</p>,
`//DI with Strategy Pattern n Factory Method
public interface INotification
{
    void Send(string msg);
}

// Concrete strategies
public class EmailNotification:INotification
{
    public void Send(string msg)
    {
        Console.WriteLine($"Email Notification:{msg}");
    }
}

public class SmsNotification:INotification
{
    public void Send(string msg)
    {
        Console.WriteLine($"SMS Notification:{msg}");
    }
}

// Factory for creating notifications
public static class NotificationFactory
{
    public static INotification Create(string type)
    {
        return type switch
        {
            "Email" => new EmailNotification(),
            "SMS" => new SmsNotification(),
            _ => throw new NotImplementedException()
        };
    }
}

// Context class
public class NotificationService
{
    private INotification _notification;
    public void SetNotification(string type)
    {
        _notification=NotificationFactory.Create(type);
    }
    public void Notify(string msg)
    {
        _notification?.Send(msg);
    }
}

// Client code
class Program
{
    static void Main(string[] args)
    {
        var notifService=new NotificationService();
        // Set different notification strategies
        notifService.SetNotification("Email");
        notifService.Notify("Welcome service!");

        notifService.SetNotification("SMS");
        notifService.Notify("Order shipped!");
    }
}`)
        }
      >IEnumerable</button><br />

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
          handleOpenPopup(<p><strong>Entity Framework</strong> is an ORM for .NET which allow .NET developers to work with a database using .NET objects, eliminating the need for most of the data-access code that you'd otherwise write manually like SQL.<br />
          Benefits of Using Entity Framework<br />
Feature	Benefit<br />
Productivity	No need to write SQL or stored procedures.<br />
Maintainability	Clean separation of concerns and code-first approach.<br />
LINQ Support	Write queries in C# using strong typing and IntelliSense.<br />
Migration Support	Handles schema evolution in a controlled way.<br />
Cross-Platform	Works on Windows, Linux, macOS via .NET Core/.NET 5/6/7+.</p>)
        }
      >Entity Framework</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>SaveChanges()	Saves all changes made in the context to the database.<br />
SaveChangesAsync()	Async version of SaveChanges().<br />
Add()	Marks a single entity as Added.<br />
AddAsync()	Async version of Add().<br />
AddRange()	Adds multiple entities to the context.<br />
AddRangeAsync()	Async version of AddRange().<br />
Update()	Marks the entire entity as Modified.<br />
UpdateRange()	Updates multiple entities.<br />
Remove()	Marks the entity as Deleted.<br />
RemoveRange()	Deletes multiple entities.<br />
Attach()	Attaches an entity to the context without marking it as Modified.<br />
AttachRange()	Attaches multiple entities.<br />
Entry(entity)	Gets metadata and state information about an entity.</p>)
        }
      >DbContext</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Find(key)	Finds an entity with the given primary key.<br />
FindAsync(key)	Async version of Find().<br />
FirstOrDefault()	Returns the first element or default value.<br />
FirstOrDefaultAsync()	Async version.<br />
SingleOrDefault()	Returns a single element or default, throws if more than one match.<br />
SingleOrDefaultAsync()	Async version.<br />
ToList()	Converts query to a list.<br />
ToListAsync()	Async version.<br />
Where(predicate)	Filters entities based on condition.<br />
Any()	Checks if any elements match a condition.<br />
AnyAsync()	Async version.<br />
All()	Checks if all elements satisfy a condition.<br />
Count()	Counts number of elements.<br />
CountAsync()	Async version.</p>)
        }
      >DbSet</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Select()	Projects each element into a new form.<br />
Include()	Eager loads related entities.<br />
ThenInclude()	Used after Include() for nested relationships.<br />
OrderBy() / OrderByDescending()	Sorts elements.<br />
GroupBy()	Groups elements by key.<br />
Take(n)	Takes first n elements.<br />
TakeWhile(n)<br />
Skip(n)	Skips first n elements.<br />
SkipWhile(n)<br />
Distinct()	Returns distinct elements.</p>)
        }
      >Querying</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>ChangeTracker.Entries()	Returns all tracked entity entries.<br />
ChangeTracker.HasChanges()	Checks if there are pending changes.<br />
ChangeTracker.DetectChanges()	Manually triggers change detection.</p>)
        }
      >Change Tracking</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>FromSqlRaw(sql)	Executes a raw SQL query and returns entities.<br />
FromSqlInterpolated($"sql")	SQL with interpolation (parameter safe).<br />
ExecuteSqlRaw()	Executes raw SQL for non-query (INSERT, UPDATE, DELETE).<br />
ExecuteSqlInterpolated()	Interpolated version of ExecuteSqlRaw()</p>)
        }
      >Raw SQL</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Database.Migrate()	Applies pending migrations.<br />
Database.EnsureCreated()	Creates the DB if it doesn't exist.<br />
Database.EnsureDeleted()	Deletes the database.<br />
Database.BeginTransaction()	Starts a manual transaction.<br />
Database.ExecuteSqlRaw()	Runs raw SQL.</p>)
        }
      >Database</button><br />

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
          handleOpenPopup(<p><strong>SOLID Principles</strong> are the design principles that help us to manage several software design problems. These principles provide us the ways to move our tightly coupled code to loosely coupled and encapsulate real business needs properly.</p>)
        }
      >SOLID</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Single Responsibility Principle</strong> says that every software module should have only one reason to change. This means that every class or similar structure in your code should have only one job. Everything in that class should be related to a single purpose. It does not mean that our classes should only contain one method or property. There may be many members as long as they relate to a single responsibility.<br />
<strong>For example</strong>: consider a ReportGenerator class that is responsible for both generating reports and formatting them. This violates SRP. To follow the SRP, we can split this into two classes: ReportGenerator responsible for generating reports and ReportFormatter responsible for formatting reports.</p>)
        }
      >SRP</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Open/Closed Principle</strong> says that software module/class is open for extension and closed for modification. Open for extension means we must design our module/class so that the new functionality can be added only when new requirements are generated. Closed for modification means we have already developed a class, and it has gone through unit testing. We should then not alter it until we find bugs. As it says, a class should be open for extensions; we can use inheritance.<br />
<strong>For example</strong>: Consider a Shape class with a method to calculate area for different shapes. To follow the OCP, we can create specific classes for each shape, inheriting from an abstract base class Shape.</p>)
        }
      >OCP</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Liskov Substitution Principle</strong> states that we should be able to use any derived class instead of a parent class and have it behave in the same manner without modification. It ensures that a derived class does not affect the behavior of the parent class. In this principle objects of a superclass should be replaceable with objects of its subclasses without affecting the correctness of the program. This means that the behavior of a subclass should not contradict the behavior of its superclass.<br />
<strong>For example</strong> Consider a Rectangle class with Width and Height properties. If we inherit from Rectangle to create a Square class, the LSP is violated because a square's width and height should always be equal.<br />
<strong>For example 1</strong>: A father is a doctor, whereas his son wants to become a cricketer. So here, the son can't replace his father even though they belong to the same family hierarchy.</p>)
        }
      >LSP</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Interface Segregation Principle</strong> states that clients should not be forced to implement interfaces which they don't use. Instead of using one big interface we shoul use small small interfaces.<br />
<strong>For example</strong>: Consider an IWorker interface with methods for both developers and testers. This could be problematic for a Manager class that doesn't need to implement both methods. To follow the ISP, we can split the IWorker interface into two separate interfaces: ICodeWriter and ICodeTester.</p>)
        }
      >ISP</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Dependency Inversion Principle</strong> is a software design principle that states that high-level modules should not depend on low-level modules. Instead, both should depend on abstractions. This principle makes code more flexible and maintainable and easier to develop and deploy an application.<br />
<strong>For example</strong>: Consider a NotificationService class that directly depends on a EmailSender class. This creates a tight coupling between NotificationService and EmailSender. To adhere to DIP, we should introduce an abstraction (interface) that both classes can depend on. By using the IMessageSender interface, we can decoupled NotificationService from the concrete implementation of the message sender, allowing for greater flexibility.</p>)
        }
      >DIP</button><br />

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Why and How Deadlock</strong>: Suppose we have 2 threads Thread 1 and Thread 2 and 2 resources Resource 1 and Resource 2. Thread 1 has already acquired a lock on Resource 1 and wants to acquire a lock on Resource 2. At the same time, Thread 2 has already acquired a lock on Resource 2 and wants to acquire a lock on Resource 1. Two threads never give up their locks, hence a deadlock.<br />
<strong>4 Conditions for Deadlock</strong>: Mutual Exclusion, Hold and Wait, No pre-emption, Circular Wait<br />
<strong>Mutual Exclusion</strong>: Resources involved must be unshareable between multiple threads.<br />
<strong>Hold and Wait</strong>: Threads hold the resources they have allocated and wait for the resources they want.<br />
<strong>No pre-emption</strong>: If the thread locks the resource other threads cannot take the resource until the thread releases it.<br />
<strong>Circular Wait</strong>: A circular chain must exist in which each thread waits for other threads to release resources.<br />

<strong>Avoid and resolve deadlocks like</strong><br />
Acquiring locks in a specific defined order<br />
Mutex class<br />
Monitor.TryEnter() method<br />

<strong>Lock</strong> keyword ensures that one thread is executing a piece of code at one time. The lock keyword ensures that one thread does not enter a critical section of code while another thread is in that critical section.<br />
<strong>Interlocked</strong> functions are useful in multithreading programs to safely change the value of shared variables. By default variables are not thread-safe. When we apply addition, subtraction, or checking the value of variables multiple threads can corrupt the variables. For preventing these dirty reads, we can use Interlocked functions.<br />
<strong>LiveLock</strong> is very similar to a deadlock except for involved threads states are continually changing their state but still, they cannot complete their work.
          </p>)

        }
      >Deadlock</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Exception Handling</strong> is the method of catching and recording these errors in code so that we can fix them. Usually, errors and exceptions are stored in log files or databases. If these errors are not handled properly, the application may crash and we may not know the root cause of the problem.<br />
<strong>finally</strong> is used to clean up resources used in the try block when an exception occurs. The finalize method is used to perform cleanup on unmanaged resources held by an object. It is also known as a destructor.<br />
<strong>Finalize</strong> is called by the Garbage Collector before an object that is eligible for collection is reclaimed. Garbage collector will take the responsibility to deallocate the memory for the unreferenced object.<br />
<strong>throw</strong> preserves the stack trace which point to the method that caused the exception in the first place while <strong>throw ex</strong> does not preserve the stack trace and we lose the information about the method that caused the exception in the first place.<br />
<strong>throw new Exception</strong> provides additional context with a new exception message while preserving the original exception as an inner exception.<br />
<strong>Global Exception Handler</strong> is used to catch and handle unhandled exceptions across the entire application. This approach depends on whether we're working with a console applications, .Net Core or Windows Forms.<br />
<strong>Console Applications</strong>:
<strong>AppDomain.CurrentDomain.UnhandledException</strong> is used to handle exceptions globally at the application domain level.<br />
<strong>.NET Core</strong>: middleware is used to handle exceptions globally.</p>)
        }
      >Exception Handling</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Filters</strong> are used to inject extra processing logic in the request-response pipeline. Filters allow us to add pre-processing and post-processing logic to an action. Filter run before or after the action method executes and can also intercept results.<br />
<strong>Authentication</strong> filter is used to check the identity of user.<br /> 
<strong>Authorization</strong> filters are useful for implementing the logic of authentication and authorization. IAuthorizationFilter provides the logic for determining if a user is allowed to access a specific action.<br />
<strong>Action</strong> filters contains the pre-processing and post-processing logic which can be applied to the action method of the controller. This filter is executed before and after the action method of the controller executes.<br />
IActionFilter is used to modify the request or response before or after the action method is executed. IResultFilter is used to modify the result of the action method before it is returned to the client.<br />
<strong>Result</strong> filters allows us to modify the HTTP response, which means modifying the view result before the view is rendered to the browser. The OutputCacheAttribute class is an example of a result filter.<br />
IResultFilter is used to modify the result of the action method before it is returned to the client.<br />
<strong>Exception</strong> Filter will execute when an action method of the controller throws an unhandled exception. These filters implement the IExceptionFilter interface and can be used to log errors or to display the specific error page. The HandleErrorAttribute class is an example of the exception filter.<br />
IExceptionFilter is used to catch and handle exceptions.</p>,
`public class MyActionFilter : ActionFilterAttribute
{
 public override void OnActionExecuting(ActionExecutingContext c)
  {
	// Code execute before action method is called
	base.OnActionExecuting(c);
  }
  public override void OnActionExecuted(ActionExecutedContext c)
  {
	// Code execute after action method is called
	base.OnActionExecuted(c);
  }
}
[MyActionFilter] // Apply the filter
public class HomeController : Controller`)
        }
      >Filters</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Difference between Filter and Middleware</strong><br />
Both filters and middleware intercept request and response. Middleware operates at a lower level, affecting the entire application pipeline while Filters are more targeted and interact with specific MVC actions or controllers.<br />
<strong>Middleware</strong> is a software component that handles requests and responses in request pipeline. It can be used to add functionality like logging, authentication, and caching.<br />
<strong>Middleware</strong> is configured in the Program.cs file and the order of middleware components determines how requests are processed and responses are constructed. Middleware components can inspect requests, modify requests or responses, and handle tasks. Middleware can also stop further processing if an error is detected.<br />
<strong>Custom Middleware</strong> We can add custom middleware to modify the request/response pipeline, perform logging, authentication, error handling or any custom logic.<br />
<strong>Use</strong> adds middleware to the pipeline that handles every request and passes it to the next middleware.<br />
<strong>Run</strong> terminates the pipeline and generates a response.<br />
<strong>Map</strong> branches the pipeline based on request paths.</p>,
`public class CustomMiddleware//1.Create Class with Invoke()
{
    private readonly RequestDelegate _next;
    public CustomMiddleware(RequestDelegate next)
    {
        _next = next;
    }
    public async Task Invoke(HttpContext context)
    {
        //Preprocessing logic before next middleware
        await _next(context); //Call next middleware
        //Post-processing logic after next middleware
    }
}
//2. Register Middleware in Program.cs
     app.UseMiddleware<CustomMiddleware>();
	 app.UseCustomMiddleware();
//3. Using Middleware as Extension Method
public static class CustomMiddlewareExtensions
{
   public static IApplicationBuilder 
   UseCustomMiddleware(this IApplicationBuilder builder)
   {
      return builder.UseMiddleware<CustomMiddleware>();
   }
}`)
        }
      >Middleware</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><small>HTTPRequest-&gt;Middleware-&gt;Routing-&gt;ControllerInitialization-&gt;ActionMethodExecution-&gt;ResultExection-&gt;Data|View Result-&gt;View Render</small><br />
MVC Request Life Cycle is a sequence of events, stages or components that interact with each other to process an HTTP request and generate a response that goes back to the client.<br />
<strong>Middleware</strong> component forms the basic building block of application HTTP pipeline. These are a series of components that are combined to form a request pipeline in order to handle any incoming request.<br />
<strong>Routing</strong> is a middleware component which decides how an incoming request can be mapped to Controllers and actions methods, with the help of convention routes and attribute routes.<br />
<strong>Controller Initialization</strong> at this stage the process of initialization and execution of controllers takes place. Controllers are responsible for handling incoming requests. The controller selects the appropriate action methods on the basis of route templates provided.<br />
<strong>Action Method Execution</strong> after the controllers are initialized, the action methods are executed and returns a view which contains Html document to be returned as response to the browser.<br />
<strong>Result Execution During</strong> this stage the response generated to the original HTTP request. If an action method returns a view result, the MVC view engine renders a view and returns the HTML response. If result is not of view type, then action method will generate its own response.</p>)
        }
      >MVC LifeCycle</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>ViewResult</strong> is used to return a view.<br />
<strong>PartialViewResult</strong> is used to return partialview.<br />
<strong>ContentResult</strong> is used to return content to the view.<br />
<strong>EmptyResult</strong> returns nothing in the view page.<br />
<strong>FileResult</strong> is used to return file to the view.<br />
<strong>JSONResult</strong> is used to return JSON data to the view.<br />
<strong>JavascriptResult</strong> is used to return javascript to the view.</p>)
        }
      >Return Type</button>

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
      >Status Codes</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>State Management</strong> is a technique to maintain the state of an application, object and variable across multiple requests. It's useful because web applications are stateless.<br />
          <strong>Server Side State Management</strong><br />
<strong>Application State</strong> is used to store information that is shared among users. Application state is stored in the memory of the Windows process which processes user requests on the web server. Application state is useful in storing a small amount of often-used data.<br />
<strong>Session State</strong> provides a place to store values that will persist across page requests. Values stored in Session are stored on the server and will remain in memory until they are explicitly removed or until the Session expires. It is defined as the period of time that a unique user interacts with a Web application. Session state is a collection of objects, tied to a session stored on a server.<br />
<strong>Client-Side State Management</strong><br />
<strong>View State</strong> is a client-side state management technique that use a hidden field to store page values. It help us to build a call and retain values across multiple requests for the same page. When a page is rendered, the page's state and values are serialized into base64-encoded strings. These strings are stored in a hidden field on the page. When the page is requested again, the hidden field is returned to the server. The server restores the values from the hidden field and processes the request.<br />
<strong>Control State</strong>: The purpose of the control state repository is to cache data necessary for a control to function properly. ControlState is essentially a private ViewState for our control only, and it is not affected when ViewState is turned off. ControlState is used to store small amounts of critical information.<br />
<strong>Hidden Control</strong> is a control that does not render anything on the web page at the client browser but can be used to store some information on the web page which can be used on the page. Hidden fields are used to store data at the page level.<br />
<strong>Cookie</strong> is a small amount of data that is either stored on the client side in a text file or in the memory of the client browser session. Cookies are always sent with the request to the web server and information can be retrieved from the cookies at the web server. Every time a user visits a website, cookies are retrieved from the user's machine and help identify the user.<br />
<strong>Query String</strong> is used to pass the values or information from one page to another page. They are passed along with URLs in clear text. Query strings provide a simple but limited way of maintaining some state information.
</p>)
        }
      >State Management</button>

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