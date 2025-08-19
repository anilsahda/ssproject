export default function Javanetquestions() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>☕ Java Interview Questions & Answers</h2>

      {/* Question 1 */}
      <section>
        <b>1. What is Java?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Java is a high-level, object-oriented, platform-independent programming language developed 
which is developmed by Sun Microsystems.
Example: Write once, run anywhere (WORA) – compiled bytecode runs on JVM.`}
          </code>
        </pre>
      </section>

      {/* Question 2 */}
      <section>
        <b>2. What is JVM?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`JVM (Java Virtual Machine) is responsible for running Java bytecode.
It provides platform independence by interpreting bytecode into machine code.
Example: javac compiles .java → .class files, JVM executes .class files.`}
          </code>
        </pre>
      </section>

      {/* Question 3 */}
      <section>
        <b>3. What is JDK and JRE?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`JDK (Java Development Kit) = JRE + compiler + tools (used for development).
JRE (Java Runtime Environment) = JVM + libraries (used for execution).
Example: Developers install JDK, end-users need JRE.`}
          </code>
        </pre>
      </section>

      {/* Question 4 */}
      <section>
        <b>4. What are Java’s main features?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Key features: Simple, Object-Oriented, Platform Independent, Robust, Secure, Multithreaded, Distributed.
Example: Multithreading allows concurrent execution using Thread class.`}
          </code>
        </pre>
      </section>

      {/* Question 5 */}
      <section>
        <b>5. What is the difference between JDK, JRE, and JVM?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`JVM → Runs bytecode
JRE → JVM + libraries
JDK → JRE + compiler + tools
Example: To run code = JRE, to develop code = JDK.`}
          </code>
        </pre>
      </section>

      {/* Question 6 */}
      <section>
        <b>6. What are Wrapper Classes in Java?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Wrapper classes convert primitive types into objects.
Example: int → Integer, double → Double.
Integer num = Integer.valueOf(5);`}
          </code>
        </pre>
      </section>

      {/* Question 7 */}
      <section>
        <b>7. What is the difference between == and equals() in Java?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`== → compares references (memory addresses).
equals() → compares object content.
Example: new String("Java") == new String("Java") → false
"Java".equals("Java") → true`}
          </code>
        </pre>
      </section>

      {/* Question 8 */}
      <section>
        <b>8. What is the difference between final, finally, and finalize()?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`final → keyword (constants, prevent inheritance/overriding).
finally → block in exception handling (executes always).
finalize() → method called by GC before object destruction.`}
          </code>
        </pre>
      </section>

      {/* Question 9 */}
      <section>
        <b>9. What is the difference between abstract class and interface?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Abstract class → can have abstract + concrete methods.
Interface → only abstract methods (Java 8+ allows default & static methods).
Example:
abstract class A { abstract void run(); }
interface B { void run(); }`}
          </code>
        </pre>
      </section>

      {/* Question 10 */}
      <section>
        <b>10. What is the difference between ArrayList and LinkedList?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`ArrayList → dynamic array, fast random access, slow insert/delete.
LinkedList → doubly-linked list, fast insert/delete, slow random access.
Example: Use ArrayList for search-heavy tasks, LinkedList for insert/delete.`}
          </code>
        </pre>
      </section>
    </div>
  );
}
