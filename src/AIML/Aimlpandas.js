import React from "react";

function Aimlpandas() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">
          Pandas Practical Examples
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Learn Pandas with practical examples for AI / ML Engineers.
        </p>
      </header>

      {/* Installation */}
      <Section title="Step 1 : Install Pandas" color="text-green-600">
        <CodeBlock>
{`pip install pandas`}
        </CodeBlock>
      </Section>

      {/* Import */}
      <Section title="Step 2 : Import Pandas" color="text-yellow-600">
        <CodeBlock>
{`import pandas as pd`}
        </CodeBlock>
      </Section>

      {/* Series */}
      <Section title="Step 3 : Create Pandas Series" color="text-red-600">
        <CodeBlock>
{`import pandas as pd

numbers = pd.Series([10,20,30,40,50])

print(numbers)`}
        </CodeBlock>
      </Section>

      {/* DataFrame */}
      <Section title="Step 4 : Create DataFrame" color="text-indigo-600">
        <CodeBlock>
{`import pandas as pd

students = {
    "Id":[1,2,3],
    "Name":["John","David","Anil"],
    "Marks":[80,90,95]
}

df = pd.DataFrame(students)

print(df)`}
        </CodeBlock>
      </Section>

      {/* Read CSV */}
      <Section title="Step 5 : Read CSV File" color="text-purple-600">
        <CodeBlock>
{`import pandas as pd

df = pd.read_csv("students.csv")

print(df)`}
        </CodeBlock>
      </Section>

      {/* Information */}
      <Section title="Step 6 : Display Data Information" color="text-blue-600">
        <CodeBlock>
{`print(df.head())

print(df.tail())

print(df.info())

print(df.describe())`}
        </CodeBlock>
      </Section>

      {/* Columns */}
      <Section title="Step 7 : Select Columns" color="text-green-600">
        <CodeBlock>
{`print(df["Name"])

print(df["Marks"])`}
        </CodeBlock>
      </Section>

      {/* Filtering */}
      <Section title="Step 8 : Filter Data" color="text-red-600">
        <CodeBlock>
{`result = df[df["Marks"] > 80]

print(result)`}
        </CodeBlock>
      </Section>

      {/* Sorting */}
      <Section title="Step 9 : Sort Data" color="text-yellow-600">
        <CodeBlock>
{`print(df.sort_values(by="Marks"))

print(df.sort_values(by="Marks",ascending=False))`}
        </CodeBlock>
      </Section>

      {/* Missing Values */}
      <Section title="Step 10 : Handle Missing Values" color="text-purple-600">
        <CodeBlock>
{`print(df.isnull())

print(df.dropna())

print(df.fillna(0))`}
        </CodeBlock>
      </Section>

      {/* Add Column */}
      <Section title="Step 11 : Add New Column" color="text-indigo-600">
        <CodeBlock>
{`df["Result"]="Pass"

print(df)`}
        </CodeBlock>
      </Section>

      {/* Update Column */}
      <Section title="Step 12 : Update Column" color="text-blue-600">
        <CodeBlock>
{`df["Marks"]=df["Marks"]+5

print(df)`}
        </CodeBlock>
      </Section>

      {/* Delete Column */}
      <Section title="Step 13 : Delete Column" color="text-green-600">
        <CodeBlock>
{`df.drop("Result",axis=1,inplace=True)

print(df)`}
        </CodeBlock>
      </Section>

      {/* Group By */}
      <Section title="Step 14 : Group By" color="text-red-600">
        <CodeBlock>
{`sales = pd.DataFrame({
    "City":["Delhi","Delhi","Mumbai","Mumbai"],
    "Sales":[1000,2000,1500,3000]
})

print(sales.groupby("City").sum())`}
        </CodeBlock>
      </Section>

      {/* Merge */}
      <Section title="Step 15 : Merge DataFrames" color="text-yellow-600">
        <CodeBlock>
{`df1 = pd.DataFrame({
    "Id":[1,2],
    "Name":["John","David"]
})

df2 = pd.DataFrame({
    "Id":[1,2],
    "Salary":[50000,70000]
})

print(pd.merge(df1,df2,on="Id"))`}
        </CodeBlock>
      </Section>

      {/* Export */}
      <Section title="Step 16 : Export CSV" color="text-purple-600">
        <CodeBlock>
{`df.to_csv("students.csv",index=False)`}
        </CodeBlock>
      </Section>

      {/* Practice */}
      <Section title="Practice Exercises" color="text-blue-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Create a Series.</li>
          <li>Create a DataFrame.</li>
          <li>Read CSV file.</li>
          <li>Display first 10 rows.</li>
          <li>Display last 5 rows.</li>
          <li>Filter students scoring above 80.</li>
          <li>Sort students by marks.</li>
          <li>Add a Grade column.</li>
          <li>Delete a column.</li>
          <li>Export DataFrame to CSV.</li>
        </ul>
      </Section>

      {/* Assignment */}
      <Section title="Assignment" color="text-indigo-600">
        <CodeBlock>
{`Employee Management

1. Create Employee DataFrame.

2. Add Salary column.

3. Add Department column.

4. Display employees with Salary > 50000.

5. Sort employees by Salary.

6. Calculate Average Salary.

7. Find Maximum Salary.

8. Find Minimum Salary.

9. Export Employee Data to CSV.

10. Read CSV and display all records.`}
        </CodeBlock>
      </Section>

    </div>
  );
}

/* Reusable Section Component */
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

export default Aimlpandas;