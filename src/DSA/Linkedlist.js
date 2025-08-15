import React from 'react';

function Linkedlist() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Linked List in C# (DSA)</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p>
          A <strong>Linked List</strong> is a linear data structure where elements (nodes) are stored in non-contiguous memory locations and connected via pointers. It allows efficient insertion and deletion.
        </p>
      </section>

      {/* Types of Linked List */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. Types of Linked List</h2>
        <ul className="list-disc ml-6">
          <li><strong>Singly Linked List:</strong> Each node points to the next node.</li>
          <li><strong>Doubly Linked List:</strong> Each node points to both previous and next nodes.</li>
          <li><strong>Circular Linked List:</strong> Last node points back to the first node.</li>
        </ul>
      </section>

      {/* Common Operations */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. Common Operations</h2>
        <ul className="list-disc ml-6">
          <li>Traversal</li>
          <li>Insertion (beginning, end, specific position)</li>
          <li>Deletion (beginning, end, specific position)</li>
          <li>Searching for an element</li>
          <li>Update element</li>
        </ul>
      </section>

      {/* Practical Example - Singly Linked List */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Practical Hands-on Example: Singly Linked List</h2>
        <pre>
          {`using System;
using System.Collections.Generic;

class Program {
    static void Main() {
        // Create a LinkedList of integers
        LinkedList<int> numbers = new LinkedList<int>();

        // Add elements at the end
        numbers.AddLast(10);
        numbers.AddLast(20);
        numbers.AddLast(30);

        // Add element at the beginning
        numbers.AddFirst(5);

        // Traversal
        Console.WriteLine("Linked List Elements:");
        foreach(int num in numbers) {
            Console.WriteLine(num);
        }

        // Remove element
        numbers.Remove(20);

        // Remove first element
        numbers.RemoveFirst();

        // Remove last element
        numbers.RemoveLast();

        // Search element
        bool exists = numbers.Contains(30);
        Console.WriteLine("Contains 30? " + exists);

        // Count elements
        Console.WriteLine("Total Elements: " + numbers.Count);
    }
}`}
        </pre>
      </section>

      {/* Tips & Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">5. Tips & Best Practices</h2>
        <ul className="list-disc ml-6">
          <li>Use LinkedList when frequent insertions and deletions are needed.</li>
          <li>For random access, arrays or List&lt;T&gt; are more efficient.</li>
          <li>LinkedList in C# is doubly-linked by default.</li>
          <li>Use <code>AddFirst</code>, <code>AddLast</code>, <code>Remove</code>, and <code>Contains</code> for basic operations.</li>
        </ul>
      </section>
    </div>
  );
}

export default Linkedlist;
