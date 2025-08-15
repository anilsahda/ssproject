import React from 'react';

function List() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">List&lt;T&gt; CRUD Operations in C# (DSA)</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p>
          <strong>List&lt;T&gt;</strong> is a generic collection in C# that stores elements of a specific type. It provides dynamic resizing, indexing, and many built-in methods for CRUD operations.
        </p>
      </section>

      {/* CRUD Operations */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. CRUD Operations</h2>
        <ul className="list-disc ml-6">
          <li><strong>Create/Add:</strong> Add elements using <code>Add()</code> or <code>Insert()</code>.</li>
          <li><strong>Read:</strong> Access elements using index or iterate with <code>foreach</code>.</li>
          <li><strong>Update:</strong> Modify elements using index.</li>
          <li><strong>Delete:</strong> Remove elements using <code>Remove()</code>, <code>RemoveAt()</code>, or <code>RemoveAll()</code>.</li>
        </ul>
      </section>

      {/* Practical Example */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. Practical Hands-on Example</h2>
        <pre>
          {`using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        // Create List
        List<int> numbers = new List<int>();

        // Add elements
        numbers.Add(10);
        numbers.Add(20);
        numbers.Add(30);

        // Insert element at index 1
        numbers.Insert(1, 15);

        // Read elements (Traversal)
        Console.WriteLine("List Elements:");
        foreach(int num in numbers) {
            Console.WriteLine(num);
        }

        // Update element at index 2
        numbers[2] = 25;

        // Delete element by value
        numbers.Remove(20);

        // Delete element by index
        numbers.RemoveAt(0);

        // Search element
        int index = numbers.IndexOf(25);
        Console.WriteLine("Element 25 found at index: " + index);

        // Count elements
        Console.WriteLine("Total elements: " + numbers.Count);
    }
}`}
        </pre>
      </section>

      {/* Tips & Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Tips & Best Practices</h2>
        <ul className="list-disc ml-6">
          <li>Use List&lt;T&gt; when you need a dynamically sized collection of a specific type.</li>
          <li>Prefer generic List&lt;T&gt; over non-generic ArrayList for type safety and performance.</li>
          <li>Use <code>Contains()</code>, <code>IndexOf()</code>, and <code>Find()</code> for searching efficiently.</li>
          <li>Always check <code>Count</code> before accessing elements to avoid <code>ArgumentOutOfRangeException</code>.</li>
        </ul>
      </section>
    </div>
  );
}

export default List;
