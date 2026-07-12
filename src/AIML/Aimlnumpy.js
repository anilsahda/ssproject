import React from "react";

function Aimlnumpy() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">
          NumPy Practical Examples
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Learn NumPy fundamentals with hands-on practical examples for AI / ML Engineers.
        </p>
      </header>

      {/* Installation */}
      <Section title="Step 1 : Install NumPy" color="text-green-600">
        <CodeBlock>
{`pip install numpy`}
        </CodeBlock>
      </Section>

      {/* Import */}
      <Section title="Step 2 : Import NumPy" color="text-yellow-600">
        <CodeBlock>
{`import numpy as np`}
        </CodeBlock>
      </Section>

      {/* Create Array */}
      <Section title="Step 3 : Create 1D Array" color="text-red-600">
        <CodeBlock>
{`import numpy as np

numbers = np.array([10,20,30,40,50])

print(numbers)`}
        </CodeBlock>
      </Section>

      {/* 2D Array */}
      <Section title="Step 4 : Create 2D Array" color="text-indigo-600">
        <CodeBlock>
{`matrix = np.array([
    [1,2,3],
    [4,5,6]
])

print(matrix)`}
        </CodeBlock>
      </Section>

      {/* Properties */}
      <Section title="Step 5 : Array Properties" color="text-purple-600">
        <CodeBlock>
{`print(numbers.ndim)

print(numbers.shape)

print(numbers.size)

print(numbers.dtype)`}
        </CodeBlock>
      </Section>

      {/* Indexing */}
      <Section title="Step 6 : Indexing" color="text-blue-600">
        <CodeBlock>
{`print(numbers[0])

print(numbers[2])

print(numbers[-1])`}
        </CodeBlock>
      </Section>

      {/* Slicing */}
      <Section title="Step 7 : Array Slicing" color="text-green-600">
        <CodeBlock>
{`print(numbers[1:4])

print(numbers[:3])

print(numbers[2:])`}
        </CodeBlock>
      </Section>

      {/* Math */}
      <Section title="Step 8 : Mathematical Operations" color="text-red-600">
        <CodeBlock>
{`a = np.array([10,20,30])

print(a + 10)

print(a * 2)

print(a / 2)

print(a ** 2)`}
        </CodeBlock>
      </Section>

      {/* Statistics */}
      <Section title="Step 9 : Statistical Functions" color="text-yellow-600">
        <CodeBlock>
{`marks = np.array([70,75,80,85,90])

print(np.sum(marks))

print(np.mean(marks))

print(np.max(marks))

print(np.min(marks))

print(np.std(marks))`}
        </CodeBlock>
      </Section>

      {/* Random */}
      <Section title="Step 10 : Random Numbers" color="text-purple-600">
        <CodeBlock>
{`print(np.random.rand(5))

print(np.random.randint(1,100,10))

print(np.random.randn(3,3))`}
        </CodeBlock>
      </Section>

      {/* Practice */}
      <Section title="Practice Exercises" color="text-blue-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Create a 1D array.</li>
          <li>Create a 2D array.</li>
          <li>Print array shape.</li>
          <li>Print array size.</li>
          <li>Print array data type.</li>
          <li>Find maximum value.</li>
          <li>Find minimum value.</li>
          <li>Calculate average.</li>
          <li>Multiply all elements by 10.</li>
          <li>Create a 5 × 5 matrix.</li>
        </ul>
      </Section>

      {/* Assignment */}
      <Section title="Assignment" color="text-indigo-600">
        <CodeBlock>
{`Student Marks Analysis

1. Store marks of 10 students.

2. Find highest marks.

3. Find lowest marks.

4. Find average marks.

5. Count passed students.

6. Count failed students.

7. Display top scorer.

8. Display marks in ascending order.`}
        </CodeBlock>
      </Section>

    </div>
  );
}

/* Reusable Section */
function Section({ title, color, children }) {
  return (
    <section>
      <div className="flex items-center mb-2">
        <strong className={color}>{title}</strong>
      </div>
      {children}
    </section>
  );
}

/* Reusable Code Block */
function CodeBlock({ children }) {
  return (
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5 whitespace-pre-wrap">
      <code>{children}</code>
    </pre>
  );
}

export default Aimlnumpy;