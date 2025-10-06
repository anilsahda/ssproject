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
          handleOpenPopup(<p><strong>Builder Design Pattern</strong> is a creational pattern that is used to construct complex objects step by step. It allows you to create different representations of an object using the same construction code.<br />
We can use the Builder Pattern<br />
When an object has many optional parameters or complex configurations.<br />
When object creation requires multiple steps.<br />
When you need immutable or read-only objects.</p>)
        }
      >Builder</button>

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
      >Onion</button>

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
          handleOpenPopup(<p><strong>Exception Handling</strong> is very common for software applications to get errors and exceptions when executing code. If these errors are not handled properly, the application may crash and we may not know the root cause of the problem. Exception handling is the method of catching and recording these errors in code so that we can fix them. Usually, errors and exceptions are stored in log files or databases.</p>)
        }
      >Exception Handling</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>finally block</strong> is used to clean up resources used in the try block, regardless of whether an exception occurs. The "finalize" method is used to perform cleanup on unmanaged resources held by an object. It is also known as a destructor.</p>)
        }
      >finally</button>

        <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Finalize()</strong> is called by the Garbage Collector before an object that is eligible for collection is reclaimed. Garbage collector will take the responsibility to deallocate the memory for the unreferenced object. The Garbage Collector calls this method at some point after there are no longer valid references to that object in memory.<br />
The framework does not guarantee that when this will happen, we can force for Garbage Collection but it will hurt performance of a program. Finalize() belongs to the Object class and it will be called by the runtime.</p>)
        }
      >Finalize()</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>throw</strong> preserves the stack trace (the stack trace will point to the method that caused the exception in the first place) while <strong>throw ex</strong> does not preserve the stack trace (we will lose the information about the method that caused the exception in the first place. It will seem like the exception was thrown from the place of its catching and re-throwing).</p>)
        }
      >throw vs throw ex</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>throw new Exception</strong> provides additional context with a new exception message while preserving the original exception as an inner exception.</p>)
        }
      >throw new Exception</button>

       <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Global Exception Handler</strong> is used to catch and handle unhandled exceptions across the entire application. This approach depends on whether we're working with a console applications, ASP.NET Core, or Windows Forms.<br />
<strong>Console Applications</strong>:
<strong>AppDomain.CurrentDomain.UnhandledException</strong> is used to handle exceptions globally at the application domain level.<br />
<strong>.NET Core</strong>: middleware is used to handle exceptions globally.</p>,
`public class ExceptionHandlingMiddleware
{
  private readonly RequestDelegate _next;
private readonly ILogger<ExceptionHandlingMiddleware> _logger;

  public ExceptionHandlingMiddleware(RequestDelegate next,
	ILogger<ExceptionHandlingMiddleware> logger)
  {
        _next = next;
        _logger = logger;
  }

    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex,"Unhandled exception");
            await HandleExceptionAsync(context, ex);
        }
    }

    private static Task HandleExceptionAsync(
	HttpContext context,Exception exception)
    {
        context.Response.StatusCode = 
		(int)HttpStatusCode.InternalServerError;
        context.Response.ContentType="application/json";
        return context.Response.WriteAsync(new 
		{ error = exception.Message }.ToString());
    }
}

// Register Middleware in Program.cs
public static class ExceptionMiddlewareExtensions
{
    public static void UseExceptionHandlingMiddleware(
	this IApplicationBuilder app)
    {
        app.UseMiddleware<ExceptionHandlingMiddleware>();
    }
}

app.UseExceptionHandlingMiddleware();`)
        }
      >Temporary Tables</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Local Temporary Tables</strong> are similar to permanent tables and it is created with single hash "#". They are visible only to the connection that creates it and are deleted when the connection is closed.</p>, `CREATE TABLE #Emp (Id INT, Name VARCHAR(25))`)
        }
      >Local</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Global Temporary Tables</strong> are also similar to Local Temporary Tables and it is creted with double hash value "##". They are visible to all connections of SQL Server and only destroyed when the last connection referencing the table is closed.</p>, `CREATE TABLE ##Emp (Id INT, Name VARCHAR(25))`)
        }
      >Global</button>

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Trigger</strong> is a stored procedure which automatically executes when special event occurs in database. Automatic Execution is the main key feature which fires automatically when we perform database operation like INSERT, UPDATE or DELETE.
There are 3 types of Trigger</p>)
        }
      >Trigger</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>DDL Triggers</strong> respond to DDL events like CREATE, ALTER, DROP, GRANT, DENY, REVOKE etc. It allow to track changes in the structure of the database. The trigger will prevent any table creation, alteration, or deletion in the database.</p>, `CREATE TRIGGER prevent_table_creation
ON DATABASE
FOR CREATE_TABLE, ALTER_TABLE, DROP_TABLE
AS 
BEGIN
PRINT 'you can not create, drop, alter table';
ROLLBACK;
END;`)
        }
      >DDL</button>
      
       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>DML Triggers</strong> are automatically invoked when an INSERT, UPDATE or DELETE statement is executed.</p>, `CREATE TRIGGER prevent_update
ON students
FOR UPDATE
AS
BEGIN
PRINT 'You can not insert, update and delete';
ROLLBACK;
END;`)
        }
      >DML</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Logon Triggers</strong> are useful for monitoring user sessions or restricting user access to the database. It can be used for tracking login activities, put the restriction on logins, or limiting the number of sessions for a particular login.</p>, `CREATE TRIGGER track_logon
ON LOGON
AS
BEGIN
PRINT 'A new user has logged in.';
END;`)
        }
      >Logon</button><br />

        <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>CTE</strong> is a tool which is used to simplify complex queries and makes them more readable. CTE allows us to break down complicated logic into manageable parts by defining temporary result sets that can be referenced multiple times.<br />
CTE is a temporary result set that is defined and used within the execution scope of a SELECT, INSERT, UPDATE, or DELETE statement. CTEs are defined using the WITH clause and can be referenced multiple times within the main SQL query. This makes CTEs a great alternative to subqueries to perform the same operation multiple times or create recursive queries.</p>, `WITH AvgSalaryByDept AS (
  SELECT Depart,AVG(Sal) AS AvgSal FROM Emp
  GROUP BY Depart
)
SELECT * FROM AvgSalaryByDept;`)
        }
      >CTE</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Cursor</strong> Cursor is a database object which is used to iterate in a result set row by row. For example</p>, `DECLARE @name VARCHAR(50) /* Declare Variable */

DECLARE db_cursor CURSOR FOR  /*Declare Cursor Name*/
SELECT name from Students 
WHERE parent_name IN ('Sara', 'Ansh')

OPEN db_cursor /*Open cursor & Fetch data into @name*/
FETCH next
FROM db_cursor
INTO @name

CLOSE db_cursor /*Close cursor+deallocate resources*/
DEALLOCATE db_cursor`)
        }
      >Cursor</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Deadlock</strong>: occurs when two or more transactions are unable to the proceed because each transaction is waiting for the other to the release locks on resources.<br />
<strong>We can Avoid Deadlocks:</strong><br />
Minimize transactions size and transaction times.<br />
Always acces servr objct in same order each time<br />
Avoid cursors that require usr input while runing.<br />
Use NoLock and RowLock to prevent locking<br />
Reduce lock time in application.</p>)
        }
      >Deadlock</button>
      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>SQL Debugging</strong>: Open the Visual Studio.NET and continue without code<br />
Connect to SQLServer in Visual Studio<br />
Menu Tools-&lt;SQL Server-&lt;New Query<br />
Enter Sql Server Connection Data<br />
In script write script or Invoke the Stored procedure<br />
F9 or double click left of code line for out the break point<br />
In menu SQL-&lt; Execute with debugger<br />
With F11 trace line By line</p>)
        }
      >Debugging</button>

        <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>IdentityCurrent</strong> the ident_current(table_name) returns the last identity created for specific table or view in any session.</p>, `CREATE TABLE Employees (
    EmployeeID INT IDENTITY(1,1),
    EmployeeName NVARCHAR(100)
);

Insert into Employees table
INSERT INTO Employees (EmployeeName)
VALUES ('John Doe');

Insert into Orders table
INSERT INTO Orders (EmployeeID, OrderDate)
VALUES (1, '2025-03-28');

Retrieve the last identity value
 generated for the Employees table
SELECT IDENT_CURRENT('Employees') AS LastEmployeeID;`)
        }
      >IdentityCurrent</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>MERGE</strong> Statement combines insert, update and delete statements into one single query. It is used to perform insert, update and delete operations on a target table based on the results of JOIN with a source table. This allows users to synchronize two tables by performing operations on one table based on results from the second table.
MERGE statement compares data between a source table and a target table based on specified key fields. It performs actions like inserting new records, updating existing ones and deleting records.</p>, 
`MERGE INTO Employees AS target
USING SalaryUpdates AS source
ON target.EmployeeID = source.EmployeeID
WHEN MATCHED THEN
    UPDATE SET target.Salary = source.NewSalary
WHEN NOT MATCHED BY TARGET THEN
    INSERT (EmployeeID, Name, Salary)
    VALUES (source.EmployeeID, 'Unknown', source.NewSalary);`)
        }
      >MERGE</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>OLTP</strong> (Online Transaction Processing) is a class which supports in transaction-oriented programs. OLTP maintains the concurrency and follow a decentralized architecture to avoid single points of failure.</p>)
        }
      >OLTP</button>
      
       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>OLAP</strong> (Online Analytical Processing) is a class which is used in low frequency online transactions. Queries are too complex and involve a bunch of aggregations.</p>)
        }
      >OLAP</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Indexing</strong>: help us to retrieve data faster in a faster way.<br />
<strong>Avoid SELECT *</strong>: Retrieve only the required columns to improve performance<br />
<strong>Optimize JOINs</strong>: Use proper join to avoid duplicates and improve queries<br />
<strong>Minimize Subqueries</strong>: Replace complex|nested subqueries with joins or CTEs<br />
<strong>Avoid Unnecessary Data Retrieval</strong>: Use filters like WHERE clauses to fetch only relevant data.<br />
<strong>Use SP Instead of Dynamic Query</strong> as SP are precompiled and more secure<br />
<strong>Use SQL Profiler</strong>: Monitor query performance to identify bottlenecks.<br />
<strong>Use Appropriate Data Type</strong> to improve storage efficiency & process speed<br />
<strong>Use EXISTS() Instead of COUNT()</strong> as EXISTS() is generally faster.<br />
<strong>Partitioning</strong> split large table into small and manageable within same server<br />
<strong>Sharding</strong> distributes data across multiple servers to balance the load.<br />
<strong>Normalize Tables</strong>: Eliminate redundancy and improve data consistency.<br />
<strong>Reduce Use of Wildcards</strong>: Avoid wildcard characters to allow index usage<br />
<strong>Use UNION ALL Instead of UNION</strong> as it does not eliminate duplicate rows.<br />
<strong>Implement Pagination</strong> use TAKE, SKIP, LIMIT, OFFSET to improve performance</p>)
        }
      >Optimize</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Function</strong> must return a value while <strong>Procedure</strong> may or not return values.<br />
<strong>Function</strong> will allow only Select statements. <strong>Procedure</strong> can have select statements as well as DML statements such as insert, update, delete.<br />
<strong>Function</strong> allow only input parameters. <strong>Procedure</strong> allow input and output both parameters.<br />
<strong>Function</strong> does not allow try-catch blocks. But <strong>Procedure</strong> allow exception handling like try catch blocks.<br />
Transactions are not allowed within <strong>Function</strong> while <strong>Procedure</strong> allow transactions.<br />
<strong>Function</strong> can be call in Procedure. <strong>Procedure</strong> can not be call in <strong>Function</strong>. Functions can be called from a select statement.</p>)
        }
      >Procedure vs Function</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>&#64;&#64;Rowcount</strong> is a system variable that is used to return the number of rows that are affected by the last executed statement.</p>)
        }
      >&#64;&#64;Rowcount</button>

        <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>&#64;&#64;IDENTITY</strong> return the last identity value generated in any table in the current session. It is not limited to a specific scope. IDENT_CURRENT is not limited by scope and session and it is limited to a specified table.</p>, `CREATE TABLE Employees (
    EmployeeID INT IDENTITY(1,1),
    EmployeeName NVARCHAR(100)
);

Insert a new row
INSERT INTO Employees (EmployeeName)
VALUES ('John Doe');

Retrieve the last inserted identity
 value using @@IDENTITY
SELECT @@IDENTITY AS LastIdentityValue;`)
        }
      >&#64;&#64;IDENTITY</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>NOLOCK</strong> is used when we need to run a heavy query on a table, retrieve data from a table that constantly updates, or when we don't know how many records our query will retrieve and how it will affect the database. When we use the NOLOCK hint, our query is not blocked by other processes because it ignores any locks when reading data from tables.</p>, `SELECT Name, Email, Mobile FROM Employee WITH (NOLOCK)
WHERE Name = 'Rakesh';`)
        }
      >NOLOCK</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>ROW_NUMBER()</strong> assigns a unique sequence number to each row within a result set or partition of data. Unlike <strong>RANK()</strong> and <strong>DENSE_RANK(), ROW_NUMBER()</strong> does not allow ties—even if rows have the same values, each gets a unique row number.</p>,
        `SELECT Name, Score,
ROW_NUMBER() OVER (ORDER BY Score DESC) AS RowNum
FROM Students;
Name	Score	RowNum
Alice	95	1
Bob	95	2
Carol	90	3
David	85	4`)
        }
      >Row_Number</button>

       <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Both <strong>RANK()</strong> and <strong>DENSE_RANK()</strong> are used to assign a ranking number to rows within a partition of a result set.<br />
          <strong>RANK()</strong> adds gaps in the ranking when there are ties. If two rows have the same rank, the next rank is skipped.<br />
          <strong>DENSE_RANK()</strong> does not skip ranks when there are ties.</p>, 
          `SELECT * RANK() OVER (ORDER BY Score DESC) AS Rank
FROM Students;

SELECT * DENSE_RANK() OVER (ORDER BY Score DESC) AS
DenseRank FROM Students;`)
        }
      >Rank vs Dense Rank</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>SCOPE_IDENTITY</strong> return the last identity value generated in any table in the current session. It returns the value only within the current scope.</p>, `CREATE TABLE Employees
(Id INT IDENTITY(1,1), Name NVARCHAR(100));

CREATE TABLE Orders (Id INT IDENTITY(1,1),
    EmployeeID INT, OrderDate DATE
);
Insert a new row into Employees
INSERT INTO Employees (Name) VALUES ('John Doe');
Insert a new row into Orders
INSERT INTO Orders (Id, OrderDate)
VALUES (SCOPE_IDENTITY(), '2025-03-28');

Retrieve last inserted value by SCOPE_IDENTITY()
SELECT SCOPE_IDENTITY() AS LastEmployeeID;`)
        }
      >SCOPE_IDENTITY</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Sequence</strong> is a user-defined object that generates a sequence of numeric values. Unlike Identity which is tied to a specific table column Sequence can be used across multiple tables and queries.</p>, `CREATE SEQUENCE unique_num
	AS INT
	START WITH 1
	INCREMENT BY 1; 

CREATE TABLE Country
(
	Id INT PRIMARY KEY,
	Name varchar(50)
); 
INSERT INTO Country 
VALUES(NEXT VALUE FOR dbo.unique_num, 'USA');`)
        }
      >Sequence</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>View</strong> is a virtual table based on the result of a select query. It does not store data physically, but stores the SQL query itself.<br />
Views can be updated using INSERT, UPDATE, DELETE—only if it is updatable.<br />
<strong>A view is typically not updatable if it includes</strong>:<br />
Aggregate functions (SUM, AVG), DISTINCT, GROUP BY, Subqueries, Joins</p>, `CREATE VIEW ActiveCustomers AS
SELECT CustomerID, Name, Email FROM Customers
WHERE Status = 'Active';

SELECT * FROM ActiveCustomers;`)
        }
      >View</button><br />

       <button className="btn btn-danger me-2 mb-2" onClick={() =>
          handleOpenPopup(null, `WITH cte AS 
(
  SELECT Name, 
  ROW_NUMBER() OVER(PARTITION BY Name ORDER BY Name) row_num
  FROM employee
)	
SELECT * FROM cte WHERE row_num > 1;

//Using subqueries
SELECT Name, COUNT(Id) AS Duplicate FROM Employee 
GROUP BY Name
HAVING COUNT(Name) > 1;`)
        }
      >Duplicate Name</button>

       <button className="btn btn-danger me-2 mb-2" onClick={() =>
          handleOpenPopup(null, `with cte as
(SELECT Name, Salary, 
RANK() OVER(ORDER BY Salary DESC) sal_rank from Employees)
select * from cte where sal_rank = 2

//Using subquery
SELECT Name, Salary FROM 
   (SELECT Name, Salary, RANK() OVER (ORDER BY Salary DESC) 
   AS sal_rank FROM Employee) AS ranked_salaries 
WHERE sal_rank = 2;`)
        }
      >Highest Salary</button>

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