import React from 'react';

function Tuple() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Tuple</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p><strong>Tuple</strong>is a data structure that holds a finite ordered list of values, potentially of different types. Tuples are useful when you want to return multiple values from a method without creating a custom class or struct.</p>
      </section>

      {/* Types of Arrays */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. Types of Arrays</h2>
        <ul className="list-disc ml-6">
          <li><strong>One-dimensional (1D) Array:</strong> Single row of elements.</li>
          <li><strong>Two-dimensional (2D) Array:</strong> Rows and columns, like a matrix.</li>
          <li><strong>Jagged Array:</strong> Array of arrays (rows can have different lengths).</li>
        </ul>
      </section>

      {/* Array Operations */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. Common Operations</h2>
        <ul className="list-disc ml-6">
          <li>Traversal</li>
          <li>Insertion</li>
          <li>Deletion</li>
          <li>Search (Linear Search, Binary Search)</li>
          <li>Update</li>
        </ul>
      </section>

      {/* Practical Examples - 1D Array */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Practical Hands-on: 1D Array</h2>
        <pre>
          {`// C# Example
using System;

class Program {
    static void Main() {
        int[] arr = {10, 20, 30, 40, 50};

        // Traversal
        Console.WriteLine("Array Elements:");
        foreach(int num in arr) {
            Console.WriteLine(num);
        }

        // Update element at index 2
        arr[2] = 35;

        // Search element 40
        int index = Array.IndexOf(arr, 40);
        Console.WriteLine("Element 40 found at index: " + index);
    }
}`}
        </pre>
      </section>

      {/* Practical Examples - 2D Array */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">5. Practical Hands-on: 2D Array</h2>
        <pre>
          {`// C# Example
using System;

class Program {
    static void Main() {
        int[,] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // Traversal
        Console.WriteLine("Matrix Elements:");
        for(int i = 0; i < matrix.GetLength(0); i++) {
            for(int j = 0; j < matrix.GetLength(1); j++) {
                Console.Write(matrix[i,j] + " ");
            }
            Console.WriteLine();
        }

        // Accessing element at row 2, column 3
        Console.WriteLine("Element at (2,3): " + matrix[1,2]);
    }
}`}
        </pre>
      </section>

      {/* Searching */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">6. Searching in Array</h2>
        <pre>
          {`// Linear Search
int LinearSearch(int[] arr, int target) {
    for(int i = 0; i < arr.Length; i++) {
        if(arr[i] == target) return i;
    }
    return -1;
}

// Binary Search (Array must be sorted)
int BinarySearch(int[] arr, int target) {
    int left = 0, right = arr.Length - 1;
    while(left <= right) {
        int mid = (left + right)/2;
        if(arr[mid] == target) return mid;
        else if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`}
        </pre>
      </section>

      {/* Tips & Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">7. Tips & Best Practices</h2>
        <ul className="list-disc ml-6">
          <li>Use arrays when size is fixed and known in advance.</li>
          <li>For dynamic size, consider List&lt;T&gt; in C#.</li>
          <li>Always check array bounds to avoid IndexOutOfRangeException.</li>
          <li>Use built-in methods like Array.Sort, Array.IndexOf for efficiency.</li>
        </ul>
      </section>
    </div>
  );
}

export default Tuple;
