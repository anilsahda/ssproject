import React from "react";

function Aimlscikitlearn() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">
          Scikit-learn Practical Examples
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Learn Machine Learning using Scikit-learn with hands-on practical examples for AI / ML Engineers.
        </p>
      </header>

      {/* Installation */}
      <Section title="Step 1 : Install Scikit-learn" color="text-green-600">
        <CodeBlock>
{`pip install scikit-learn`}
        </CodeBlock>
      </Section>

      {/* Import */}
      <Section title="Step 2 : Import Scikit-learn" color="text-yellow-600">
        <CodeBlock>
{`from sklearn import datasets`}
        </CodeBlock>
      </Section>

      {/* Load Dataset */}
      <Section title="Step 3 : Load Dataset" color="text-red-600">
        <CodeBlock>
{`from sklearn.datasets import load_iris

iris = load_iris()

print(iris.data[:5])
print(iris.target[:5])`}
        </CodeBlock>
      </Section>

      {/* Train Test Split */}
      <Section title="Step 4 : Train Test Split" color="text-indigo-600">
        <CodeBlock>
{`from sklearn.model_selection import train_test_split

X = iris.data
y = iris.target

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)`}
        </CodeBlock>
      </Section>

      {/* Linear Regression */}
      <Section title="Step 5 : Linear Regression" color="text-purple-600">
        <CodeBlock>
{`from sklearn.linear_model import LinearRegression

model = LinearRegression()

model.fit(X_train, y_train)

prediction = model.predict(X_test)

print(prediction[:5])`}
        </CodeBlock>
      </Section>

      {/* Logistic Regression */}
      <Section title="Step 6 : Logistic Regression" color="text-blue-600">
        <CodeBlock>
{`from sklearn.linear_model import LogisticRegression

model = LogisticRegression()

model.fit(X_train, y_train)

print(model.score(X_test, y_test))`}
        </CodeBlock>
      </Section>

      {/* Decision Tree */}
      <Section title="Step 7 : Decision Tree Classifier" color="text-green-600">
        <CodeBlock>
{`from sklearn.tree import DecisionTreeClassifier

model = DecisionTreeClassifier()

model.fit(X_train, y_train)

print(model.predict(X_test[:5]))`}
        </CodeBlock>
      </Section>

      {/* Random Forest */}
      <Section title="Step 8 : Random Forest" color="text-red-600">
        <CodeBlock>
{`from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier()

model.fit(X_train, y_train)

print(model.score(X_test, y_test))`}
        </CodeBlock>
      </Section>

      {/* KNN */}
      <Section title="Step 9 : K-Nearest Neighbors (KNN)" color="text-yellow-600">
        <CodeBlock>
{`from sklearn.neighbors import KNeighborsClassifier

model = KNeighborsClassifier(n_neighbors=3)

model.fit(X_train, y_train)

print(model.score(X_test, y_test))`}
        </CodeBlock>
      </Section>

      {/* SVM */}
      <Section title="Step 10 : Support Vector Machine" color="text-purple-600">
        <CodeBlock>
{`from sklearn.svm import SVC

model = SVC()

model.fit(X_train, y_train)

print(model.score(X_test, y_test))`}
        </CodeBlock>
      </Section>

      {/* KMeans */}
      <Section title="Step 11 : K-Means Clustering" color="text-indigo-600">
        <CodeBlock>
{`from sklearn.cluster import KMeans

model = KMeans(n_clusters=3)

model.fit(X)

print(model.labels_)`}
        </CodeBlock>
      </Section>

      {/* StandardScaler */}
      <Section title="Step 12 : Feature Scaling" color="text-blue-600">
        <CodeBlock>
{`from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()

scaled = scaler.fit_transform(X)

print(scaled[:5])`}
        </CodeBlock>
      </Section>

      {/* Metrics */}
      <Section title="Step 13 : Model Evaluation" color="text-green-600">
        <CodeBlock>
{`from sklearn.metrics import accuracy_score

prediction = model.predict(X_test)

print(accuracy_score(y_test, prediction))`}
        </CodeBlock>
      </Section>

      {/* Save Model */}
      <Section title="Step 14 : Save Model" color="text-red-600">
        <CodeBlock>
{`import joblib

joblib.dump(model, "iris_model.pkl")`}
        </CodeBlock>
      </Section>

      {/* Load Model */}
      <Section title="Step 15 : Load Saved Model" color="text-yellow-600">
        <CodeBlock>
{`model = joblib.load("iris_model.pkl")

print(model.predict(X_test[:2]))`}
        </CodeBlock>
      </Section>

      {/* Practice */}
      <Section title="Practice Exercises" color="text-indigo-600">
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Load the Iris dataset.</li>
          <li>Split the dataset into training and testing sets.</li>
          <li>Train a Logistic Regression model.</li>
          <li>Train a Decision Tree model.</li>
          <li>Train a Random Forest model.</li>
          <li>Train a KNN model.</li>
          <li>Apply StandardScaler.</li>
          <li>Evaluate model accuracy.</li>
          <li>Save the trained model.</li>
          <li>Load the saved model and predict new values.</li>
        </ul>
      </Section>

      {/* Assignment */}
      <Section title="Assignment" color="text-purple-600">
        <CodeBlock>
{`Employee Salary Prediction

Tasks

1. Load employee dataset.

2. Handle missing values.

3. Encode categorical columns.

4. Split dataset.

5. Train Linear Regression.

6. Train Random Forest.

7. Compare Accuracy.

8. Save Best Model.

9. Predict Salary.

10. Display Prediction Report.`}
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

export default Aimlscikitlearn;