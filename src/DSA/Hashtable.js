import React from 'react';

function Hashtable() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Hashtable CRUD Operations in C# (DSA)</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p>
          <strong>Hashtable</strong> is a non-generic collection in C# that stores key-value pairs. It provides fast lookup, addition, and removal of elements using keys. Hashtable is part of the <strong>System.Collections</strong> namespace.
        </p>
      </section>

      {/* CRUD Operations */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. CRUD Operations</h2>
        <ul className="list-disc ml-6">
          <li><strong>Create/Add:</strong> Use <code>Add(key, value)</code> or <code>[key] = value</code>.</li>
          <li><strong>Read:</strong> Access values using <code>[key]</code> or <code>ContainsKey()</code>.</li>
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
using System.Collections;

class Program {
    static void Main() {
        // Create Hashtable
        Hashtable employees = new Hashtable();

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
        foreach(DictionaryEntry entry in employees) {
            Console.WriteLine("ID: " + entry.Key + ", Name: " + entry.Value);
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
          <li>Hashtable stores key-value pairs as objects (non-generic).</li>
          <li>Keys must be unique; values can be duplicated.</li>
          <li>For type safety and better performance, consider using <code>Dictionary&lt;TKey, TValue&gt;</code>.</li>
          <li>Use <code>ContainsKey()</code> and <code>ContainsValue()</code> to safely check existence.</li>
          <li>Use foreach with <code>DictionaryEntry</code> to iterate over items.</li>
        </ul>
      </section>
    </div>
  );
}

export default Hashtable;
