import React from "react";

function Pythonquestions() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>🐍 Python Interview Questions & Answers</h2>

      <section>
        <b>1. What is Python?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Python is a high-level, interpreted, general-purpose programming language known for its readability and simplicity.
Example: print("Hello, World!")`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. What are Python’s key features?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- Easy to learn and read
- Dynamically typed
- Interpreted language
- Extensive standard library
- Supports multiple paradigms (procedural, object-oriented, functional)`}
          </code>
        </pre>
      </section>

      <section>
        <b>3. What is a list in Python?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`A list is an ordered, mutable collection of items.
Example:
my_list = [1, 2, 3]
my_list.append(4)`}
          </code>
        </pre>
      </section>

      <section>
        <b>4. What are Python’s data types?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Common data types:
- int
- float
- str
- bool
- list
- tuple
- dict
- set`}
          </code>
        </pre>
      </section>

      <section>
        <b>5. How does Python handle memory management?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Python uses an automatic memory management system with reference counting and a garbage collector to clean unused objects.`}
          </code>
        </pre>
      </section>

      <section>
        <b>6. What is a Python decorator?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`A decorator is a function that modifies another function without changing its source code.
Example:
@decorator
def func():
    pass`}
          </code>
        </pre>
      </section>

      <section>
        <b>7. What is the difference between list and tuple?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`- List: mutable, ordered collection.
- Tuple: immutable, ordered collection.
Example:
lst = [1, 2]
tpl = (1, 2)`}
          </code>
        </pre>
      </section>

      <section>
        <b>8. Explain Python’s pass statement.</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`The pass statement is a null operation — it’s used when a statement is required syntactically but no action is needed.
Example:
def func():
    pass`}
          </code>
        </pre>
      </section>

      <section>
        <b>9. How do you handle exceptions in Python?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Using try-except blocks.
Example:
try:
    x = 1 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")`}
          </code>
        </pre>
      </section>

      <section>
        <b>10. What is a Python generator?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`A generator is a function that yields values one at a time, saving memory.
Example:
def gen():
    yield 1
    yield 2`}
          </code>
        </pre>
      </section>

      <section>
        <b>11. What is list comprehension?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`A concise way to create lists.
Example:
squares = [x*x for x in range(5)]  # [0, 1, 4, 9, 16]`}
          </code>
        </pre>
      </section>

      <section>
        <b>12. How does Python manage scope?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`Python follows LEGB rule:
- Local
- Enclosing
- Global
- Built-in`}
          </code>
        </pre>
      </section>

      <section>
        <b>13. What are *args and **kwargs?</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`*args allows a function to accept any number of positional arguments.
**kwargs allows a function to accept any number of keyword arguments.
Example:
def func(*args, **kwargs):
    print(args, kwargs)`}
          </code>
        </pre>
      </section>
    </div>
  );
}
export default Pythonquestions