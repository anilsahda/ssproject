export default function Dotnetquestions() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📘 .NET 100 Questions & Answers</h2>

      {/* Question 1 */}
      <section>
        <b>1. What is .NET?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`.NET is a free, cross-platform, open-source developer platform by Microsoft for building web, desktop, 
mobile, cloud, and IoT applications. Example: You can create a web API using ASP.NET Core.`}
          </code>
        </pre>
      </section>

      {/* Question 2 */}
      <section>
        <b>2. What is CLR in .NET?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`CLR (Common Language Runtime) is the virtual machine component of .NET responsible for managing memory, 
thread execution, and garbage collection. 
Example: When a C# program runs, CLR executes the compiled IL (Intermediate Language).`}
          </code>
        </pre>
      </section>

      {/* Question 3 */}
      <section>
        <b>3. What is CTS in .NET?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`CTS (Common Type System) defines how types are declared, used, and managed in the runtime.
Example: int in C# is interoperable with Integer in VB.NET because of CTS.`}
          </code>
        </pre>
      </section>

      {/* Question 4 */}
      <section>
        <b>4. What is CLS in .NET?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`CLS (Common Language Specification) is a set of rules that ensures interoperability between .NET language.
Example: A method defined in C# can be used in VB.NET if it follows CLS rules.`}
          </code>
        </pre>
      </section>

      {/* Question 5 */}
      <section>
        <b>5. What is Managed vs Unmanaged code?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Managed code runs under CLR and benefits from services like garbage collection.
Unmanaged code runs directly on Windows OS without CLR.
Example: C# code is managed, C++ code compiled as native exe is unmanaged.`}
          </code>
        </pre>
      </section>

      {/* Question 6 */}
      <section>
        <b>6. What is Garbage Collection (GC) in .NET?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`GC automatically frees memory occupied by objects no longer in use.
Example: 
MyClass obj = new MyClass();
obj = null; // GC will eventually release this memory.`}
          </code>
        </pre>
      </section>

      {/* Question 7 */}
      <section>
        <b>7. What is JIT Compilation?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`JIT (Just-In-Time) compiler converts IL code into machine code at runtime for execution.
Example: C# code compiled to IL is converted to x86 or x64 machine code by JIT.`}
          </code>
        </pre>
      </section>

      {/* Question 8 */}
      <section>
        <b>8. What is the difference between .NET Framework and .NET Core?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`.NET Framework: Windows-only, mature, supports desktop & web apps.
.NET Core: Cross-platform, lightweight, cloud-ready.
Example: ASP.NET Core web API can run on Windows, Linux, macOS.`}
          </code>
        </pre>
      </section>

      {/* Question 9 */}
      <section>
        <b>9. What is ASP.NET Core?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`ASP.NET Core is a cross-platform, high-performance framework for building modern web APIs and web apps.
Example: Create API using:
dotnet new webapi -n MyApi`}
          </code>
        </pre>
      </section>

      {/* Question 10 */}
      <section>
        <b>10. What is Middleware in ASP.NET Core?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Middleware are software components that handle requests/responses in the ASP.NET Core pipeline.
Example: app.UseAuthentication(), app.UseAuthorization(), app.UseCors().`}
          </code>
        </pre>
      </section>

    </div>
  );
}
