import React from 'react';

function Hashmap() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">HashMap / Dictionary CRUD Operations in C# (DSA)</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p>
          In C#, a HashMap is implemented using <strong>Dictionary&lt;TKey, TValue&gt;</strong> or <strong>Hashtable</strong>. It stores key-value pairs and allows fast access, insertion, and deletion using keys.
        </p>
      </section>

      {/* CRUD Operations */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. CRUD Operations</h2>
        <ul className="list-disc ml-6">
          <li><strong>Create/Add:</strong> <code>Add(key, value)</code> or <code>[key] = value</code>.</li>
          <li><strong>Read:</strong> Access using <code>[key]</code> or <code>TryGetValue()</code>.</li>
          <li><strong>Update:</strong> Modify value using <code>[key] = newValue</code>.</li>
          <li><strong>Delete:</strong> Remove key-value pair using <code>Remove(key)</code>.</li>
          <li><strong>Check Existence:</strong> <code>ContainsKey()</code> or <code>ContainsValue()</code>.</li>
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
        // Create a HashMap using Dictionary
        Dictionary<int, string> employees = new Dictionary<int, string>();

        // Add elements
        employees.Add(1, "John");
        employees.Add(2, "Alice");
        employees[3] = "Bob"; // Using indexer

        // Read element
        Console.WriteLine("Employee with ID 2: " + employees[2]);

        // Update element
        employees[2] = "Alicia";

        // Delete element
        employees.Remove(1);

        // Check if key exists
        if(employees.ContainsKey(3)) {
            Console.WriteLine("Employee 3 exists: " + employees[3]);
        }

        // Traversal
        Console.WriteLine("All Employees:");
        foreach(var kvp in employees) {
            Console.WriteLine("ID: " + kvp.Key + ", Name: " + kvp.Value);
        }

        // Count
        Console.WriteLine("Total Employees: " + employees.Count);
    }
}`}
        </pre>
      </section>

      {/* Tips & Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Tips & Best Practices</h2>
        <ul className="list-disc ml-6">
          <li>Use Dictionary for type-safe, generic key-value storage.</li>
          <li>Use Hashtable for non-generic, object-based key-value storage.</li>
          <li>Keys must be unique; values can be duplicated.</li>
          <li>Prefer <code>TryGetValue()</code> for safe access without exceptions.</li>
          <li>Dictionary provides faster access compared to List for key-based lookup.</li>
        </ul>
      </section>
    </div>
  );
}

export default Hashmap;
