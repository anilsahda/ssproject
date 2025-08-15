import React from 'react';

function Linearsearch() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Linear Search in C# (DSA)</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p>
          Linear Search is a simple searching algorithm used to find the position of a target element in a collection. It checks each element one by one until the target is found or the end of the collection is reached.
        </p>
      </section>

      {/* How Linear Search Works */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. How Linear Search Works</h2>
        <ol className="list-decimal ml-6">
          <li>Start from the first element of the array/list.</li>
          <li>Compare the current element with the target element.</li>
          <li>If it matches, return the index.</li>
          <li>If it does not match, move to the next element.</li>
          <li>Repeat until the target is found or the collection ends.</li>
        </ol>
      </section>

      {/* Complexity */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. Time Complexity</h2>
        <ul className="list-disc ml-6">
          <li>Best Case: O(1) (target is at the first position)</li>
          <li>Average Case: O(n)</li>
          <li>Worst Case: O(n)</li>
        </ul>
      </section>

      {/* Practical Example */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Practical Hands-on Example</h2>
        <pre>
          {`using System;

class Program {
    static int LinearSearch(int[] arr, int target) {
        for(int i = 0; i < arr.Length; i++) {
            if(arr[i] == target) return i; // Element found
        }
        return -1; // Element not found
    }

    static void Main() {
        int[] numbers = {10, 20, 30, 40, 50};
        int target = 30;

        int index = LinearSearch(numbers, target);
        if(index != -1) Console.WriteLine("Element found at index: " + index);
        else Console.WriteLine("Element not found");
    }
}`}
        </pre>
      </section>

      {/* Tips & Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">5. Tips & Best Practices</h2>
        <ul className="list-disc ml-6">
          <li>Use Linear Search for small datasets or unsorted collections.</li>
          <li>For large or sorted datasets, Binary Search is more efficient.</li>
          <li>Always check array bounds to avoid IndexOutOfRangeException.</li>
          <li>Consider using <code>List&lt;T&gt;.IndexOf()</code> in C# for built-in linear search.</li>
        </ul>
      </section>
    </div>
  );
}

export default Linearsearch;
