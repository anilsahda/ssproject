import React from 'react';

function Arraylist() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">ArrayList in C# (DSA)</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p>ArrayList is one of the most flexible data structures from Collections. ArrayList contains a simple list of values. ArrayList implements the IList interface using an array, and very easily, we can add, insert, delete, view, etc. It is very flexible because we can add without any size information that it will grow dynamically and also shrink.</p>
      </section>

      {/* Characteristics */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. Characteristics</h2>
        <ul className="list-disc ml-6">
          <li>Stores elements as objects (non-generic).</li>
          <li>Dynamic resizing.</li>
          <li>Supports indexing and iteration.</li>
          <li>Part of <strong>System.Collections</strong> namespace.</li>
        </ul>
      </section>

      {/* Common Operations */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. Common Operations</h2>
        <ul className="list-disc ml-6">
          <li>Add elements</li>
          <li>Remove elements</li>
          <li>Insert at index</li>
          <li>Access by index</li>
          <li>Search elements</li>
          <li>Sort elements</li>
        </ul>
      </section>

      {/* Practical Example */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Practical Hands-on Example</h2>
        <pre>
          {`using System;
using System.Collections;

class Program {
    static void Main() {
        // Create ArrayList
        ArrayList list = new ArrayList();

        // Add elements
        list.Add(10);
        list.Add("Hello");
        list.Add(30.5);

        // Insert element at index 1
        list.Insert(1, "World");

        // Traversal
        Console.WriteLine("ArrayList Elements:");
        foreach(var item in list) {
            Console.WriteLine(item);
        }

        // Access element by index
        Console.WriteLine("Element at index 2: " + list[2]);

        // Remove element
        list.Remove("Hello");

        // Remove at index
        list.RemoveAt(0);

        // Search for element
        bool contains = list.Contains("World");
        Console.WriteLine("Contains 'World': " + contains);

        // Count of elements
        Console.WriteLine("Total elements: " + list.Count);
    }
}`}
        </pre>
      </section>

      {/* Tips & Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">5. Tips & Best Practices</h2>
        <ul className="list-disc ml-6">
          <li>ArrayList stores objects, so boxing/unboxing may affect performance for value types.</li>
          <li>For type safety and better performance, consider using <strong>List&lt;T&gt;</strong>.</li>
          <li>Use ArrayList when you need dynamic sizing without knowing the type in advance.</li>
          <li>Use built-in methods like <code>Sort()</code>, <code>Reverse()</code>, and <code>Contains()</code> for common operations.</li>
        </ul>
      </section>
    </div>
  );
}

export default Arraylist;
