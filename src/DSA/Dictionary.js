import React from 'react';

function Dictionary() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dictionary&lt;TKey, TValue&gt; CRUD Operations in C# (DSA)</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p><strong>Dictionary</strong> is a generic collection that stores key-value pairs and keys must be unique. Dictionary cannot be null but values can be null or duplicate and can be accessed by passing associated key.</p>
      </section>

      {/* CRUD Operations */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. CRUD Operations</h2>
        <ul className="list-disc ml-6">
          <li><strong>Create/Add:</strong> Use <code>Add(key, value)</code> or indexer <code>[key] = value</code>.</li>
          <li><strong>Read:</strong> Access values using <code>[key]</code> or <code>TryGetValue()</code>.</li>
          <li><strong>Update:</strong> Modify value using <code>[key] = newValue</code>.</li>
          <li><strong>Delete:</strong> Remove key-value pair using <code>Remove(key)</code>.</li>
          <li><strong>Check Existence:</strong> Use <code>ContainsKey()</code> or <code>ContainsValue()</code>.</li>
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
        // Create Dictionary
        Dictionary<int, string> students = new Dictionary<int, string>();

        // Add elements
        students.Add(101, "Alice");
        students.Add(102, "Bob");
        students[103] = "Charlie"; // Using indexer

        // Read elements
        Console.WriteLine("Student with ID 102: " + students[102]);

        // Update element
        students[102] = "Robert";

        // Delete element
        students.Remove(101);

        // Check if key exists
        if(students.ContainsKey(103)) {
            Console.WriteLine("Student 103 exists: " + students[103]);
        }

        // Traversal
        Console.WriteLine("All Students:");
        foreach(var kvp in students) {
            Console.WriteLine("ID: " + kvp.Key + ", Name: " + kvp.Value);
        }

        // Count
        Console.WriteLine("Total Students: " + students.Count);
    }
}`}
        </pre>
      </section>

      {/* Tips & Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Tips & Best Practices</h2>
        <ul className="list-disc ml-6">
          <li>Use Dictionary when you need fast lookup using keys.</li>
          <li>Keys must be unique; values can be duplicated.</li>
          <li>Use <code>TryGetValue()</code> to safely retrieve values without exceptions.</li>
          <li>Dictionary is more efficient than List for key-based access.</li>
        </ul>
      </section>
    </div>
  );
}

export default Dictionary;
