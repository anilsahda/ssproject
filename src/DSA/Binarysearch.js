import React from 'react';

function Binarysearch() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Binary Search in C# (DSA)</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p>
          Binary Search is an efficient algorithm to find the position of a target element in a <strong>sorted array</strong>. It works by repeatedly dividing the search interval in half.
        </p>
      </section>

      {/* How Binary Search Works */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. How Binary Search Works</h2>
        <ol className="list-decimal ml-6">
          <li>Start with the entire sorted array.</li>
          <li>Find the middle element.</li>
          <li>If the middle element equals the target, return the index.</li>
          <li>If the target is smaller, search the left half.</li>
          <li>If the target is larger, search the right half.</li>
          <li>Repeat until the target is found or the interval is empty.</li>
        </ol>
      </section>

      {/* Complexity */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. Time Complexity</h2>
        <ul className="list-disc ml-6">
          <li>Best Case: O(1) (target found at middle)</li>
          <li>Average Case: O(log n)</li>
          <li>Worst Case: O(log n)</li>
        </ul>
      </section>

      {/* Practical Example - Iterative */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Practical Hands-on Example: Iterative Binary Search</h2>
        <pre>
          {`using System;

class Program {
    static int BinarySearch(int[] arr, int target) {
        int left = 0, right = arr.Length - 1;
        while(left <= right) {
            int mid = (left + right) / 2;
            if(arr[mid] == target) return mid;
            else if(arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1; // not found
    }

    static void Main() {
        int[] numbers = {10, 20, 30, 40, 50};
        int target = 30;

        int index = BinarySearch(numbers, target);
        if(index != -1) Console.WriteLine("Element found at index: " + index);
        else Console.WriteLine("Element not found");
    }
}`}
        </pre>
      </section>

      {/* Practical Example - Recursive */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">5. Practical Hands-on Example: Recursive Binary Search</h2>
        <pre>
          {`using System;

class Program {
    static int BinarySearch(int[] arr, int left, int right, int target) {
        if(left > right) return -1;

        int mid = (left + right) / 2;
        if(arr[mid] == target) return mid;
        else if(arr[mid] > target) return BinarySearch(arr, left, mid - 1, target);
        else return BinarySearch(arr, mid + 1, right, target);
    }

    static void Main() {
        int[] numbers = {10, 20, 30, 40, 50};
        int target = 40;

        int index = BinarySearch(numbers, 0, numbers.Length - 1, target);
        if(index != -1) Console.WriteLine("Element found at index: " + index);
        else Console.WriteLine("Element not found");
    }
}`}
        </pre>
      </section>

      {/* Tips & Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">6. Tips & Best Practices</h2>
        <ul className="list-disc ml-6">
          <li>Binary Search works only on sorted arrays/lists.</li>
          <li>Use iterative approach for large datasets to avoid stack overflow in recursion.</li>
          <li>Always validate array boundaries to prevent out-of-range errors.</li>
          <li>For dynamic collections, ensure the collection is sorted before applying binary search.</li>
        </ul>
      </section>
    </div>
  );
}

export default Binarysearch;
