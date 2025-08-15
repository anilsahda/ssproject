import React from 'react';

function Quicksort() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Quick Sort in C# (DSA)</h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">1. Introduction</h2>
        <p>
          Quick Sort is a highly efficient sorting algorithm based on the <strong>Divide and Conquer</strong> principle. It picks a pivot element, partitions the array around the pivot, and recursively sorts the subarrays.
        </p>
      </section>

      {/* How Quick Sort Works */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">2. How Quick Sort Works</h2>
        <ol className="list-decimal ml-6">
          <li>Choose a pivot element from the array.</li>
          <li>Partition the array so that elements less than the pivot are on the left, and elements greater than the pivot are on the right.</li>
          <li>Recursively apply Quick Sort to the left and right subarrays.</li>
          <li>Combine the results to get a sorted array.</li>
        </ol>
      </section>

      {/* Time Complexity */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">3. Time Complexity</h2>
        <ul className="list-disc ml-6">
          <li>Best Case: O(n log n)</li>
          <li>Average Case: O(n log n)</li>
          <li>Worst Case: O(n²) (when pivot selection is poor)</li>
        </ul>
      </section>

      {/* Practical Example */}
      <section>
        <h2 className="text-2xl font-semibold mt-4">4. Practical Hands-on Example</h2>
        <pre>
          {`using System;

class Program {
    static void QuickSort(int[] arr, int low, int high) {
        if(low < high) {
            int pivotIndex = Partition(arr, low, high);
            QuickSort(arr, low, pivotIndex - 1);
            QuickSort(arr, pivotIndex + 1, high);
        }
    }

    static int Partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;

        for(int j = low; j < high; j++) {
            if(arr[j] < pivot) {
                i++;
                // Swap arr[i] and arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        // Swap pivot to correct position
        int temp1 = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp1;

        return i + 1;
    }

    static void Main() {
        int[] numbers = { 30, 10, 50, 20, 40 };
        QuickSort(numbers, 0, numbers.Length - 1);

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
          <li>Quick Sort is efficient for large datasets.</li>
          <li>Choose pivot carefully to avoid worst-case performance (e.g., random pivot or median-of-three).</li>
          <li>Use iterative Quick Sort or hybrid algorithms for very large arrays to reduce stack usage.</li>
          <li>Quick Sort is not stable; equal elements may change relative positions.</li>
        </ul>
      </section>
    </div>
  );
}

export default Quicksort;
