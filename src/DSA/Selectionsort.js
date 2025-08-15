import React from 'react';

function Selectionsort() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Selection Sort in C# (DSA)</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p>
          Selection Sort is a simple comparison-based sorting algorithm. It repeatedly selects the minimum element from the unsorted part of the array and swaps it with the first unsorted element.
        </p>
      </section>

      {/* How Selection Sort Works */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. How Selection Sort Works</h2>
        <ol className="list-decimal ml-6">
          <li>Start with the first element as the minimum.</li>
          <li>Compare it with all other elements in the unsorted part of the array.</li>
          <li>Find the minimum element and swap it with the first element.</li>
          <li>Move the boundary of the sorted and unsorted subarrays forward.</li>
          <li>Repeat until the array is completely sorted.</li>
        </ol>
      </section>

      {/* Time Complexity */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. Time Complexity</h2>
        <ul className="list-disc ml-6">
          <li>Best Case: O(n²)</li>
          <li>Average Case: O(n²)</li>
          <li>Worst Case: O(n²)</li>
        </ul>
      </section>

      {/* Practical Example */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Practical Hands-on Example</h2>
        <pre>
          {`using System;

class Program {
    static void SelectionSort(int[] arr) {
        int n = arr.Length;

        for(int i = 0; i < n - 1; i++) {
            int minIndex = i;

            // Find the minimum element in the unsorted part
            for(int j = i + 1; j < n; j++) {
                if(arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            // Swap the found minimum with the first element
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    static void Main() {
        int[] numbers = { 64, 25, 12, 22, 11 };
        SelectionSort(numbers);

        Console.WriteLine("Sorted Array:");
        foreach(var num in numbers) {
            Console.WriteLine(num);
        }
    }
}`}
        </pre>
      </section>

      {/* Tips & Best Practices */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">5. Tips & Best Practices</h2>
        <ul className="list-disc ml-6">
          <li>Selection Sort is easy to implement but inefficient for large datasets.</li>
          <li>It is an in-place sorting algorithm (no extra space required).</li>
          <li>Selection Sort is not stable; equal elements may change relative positions.</li>
          <li>Best suited for small datasets or educational purposes.</li>
        </ul>
      </section>
    </div>
  );
}

export default Selectionsort;
