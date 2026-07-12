import React from "react";

function Aimltensorflow() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">
          TensorFlow Practical Examples
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Learn TensorFlow from beginner to intermediate with practical Deep Learning examples for AI / ML Engineers.
        </p>
      </header>

      {/* Installation */}
      <Section title="Step 1 : Install TensorFlow" color="text-green-600">
        <CodeBlock>
{`pip install tensorflow`}
        </CodeBlock>
      </Section>

      {/* Import */}
      <Section title="Step 2 : Import TensorFlow" color="text-yellow-600">
        <CodeBlock>
{`import tensorflow as tf

print(tf.__version__)`}
        </CodeBlock>
      </Section>

      {/* Verify Installation */}
      <Section title="Step 3 : Verify Installation" color="text-red-600">
        <CodeBlock>
{`import tensorflow as tf

print("TensorFlow Version :", tf.__version__)

print("GPU Available :", len(tf.config.list_physical_devices('GPU')) > 0)`}
        </CodeBlock>
      </Section>

      {/* Tensor */}
      <Section title="Step 4 : Create Tensor" color="text-indigo-600">
        <CodeBlock>
{`import tensorflow as tf

tensor = tf.constant([10,20,30,40])

print(tensor)`}
        </CodeBlock>
      </Section>

      {/* Variables */}
      <Section title="Step 5 : TensorFlow Variables" color="text-purple-600">
        <CodeBlock>
{`variable = tf.Variable([1,2,3])

print(variable)`}
        </CodeBlock>
      </Section>

      {/* Math */}
      <Section title="Step 6 : Tensor Operations" color="text-blue-600">
        <CodeBlock>
{`a = tf.constant([10,20,30])

b = tf.constant([1,2,3])

print(tf.add(a,b))

print(tf.subtract(a,b))

print(tf.multiply(a,b))

print(tf.divide(a,b))`}
        </CodeBlock>
      </Section>

      {/* Matrix */}
      <Section title="Step 7 : Matrix Operations" color="text-green-600">
        <CodeBlock>
{`matrix1 = tf.constant([[1,2],[3,4]])

matrix2 = tf.constant([[5,6],[7,8]])

print(tf.matmul(matrix1,matrix2))`}
        </CodeBlock>
      </Section>

      {/* Random */}
      <Section title="Step 8 : Random Tensor" color="text-red-600">
        <CodeBlock>
{`print(tf.random.normal((3,3)))

print(tf.random.uniform((2,5)))`}
        </CodeBlock>
      </Section>

      {/* Reshape */}
      <Section title="Step 9 : Reshape Tensor" color="text-yellow-600">
        <CodeBlock>
{`tensor = tf.range(12)

print(tf.reshape(tensor,(3,4)))`}
        </CodeBlock>
      </Section>

      {/* Dataset */}
      <Section title="Step 10 : Create Dataset" color="text-purple-600">
        <CodeBlock>
{`dataset = tf.data.Dataset.from_tensor_slices([1,2,3,4,5])

for item in dataset:
    print(item.numpy())`}
        </CodeBlock>
      </Section>

      {/* Sequential */}
      <Section title="Step 11 : Build Neural Network" color="text-indigo-600">
        <CodeBlock>
{`from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

model = Sequential([
    Dense(64,activation="relu"),
    Dense(32,activation="relu"),
    Dense(10,activation="softmax")
])

model.summary()`}
        </CodeBlock>
      </Section>

      {/* Compile */}
      <Section title="Step 12 : Compile Model" color="text-blue-600">
        <CodeBlock>
{`model.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=["accuracy"]
)`}
        </CodeBlock>
      </Section>

      {/* Train */}
      <Section title="Step 13 : Train Model" color="text-green-600">
        <CodeBlock>
{`model.fit(
    X_train,
    y_train,
    epochs=10,
    batch_size=32
)`}
        </CodeBlock>
      </Section>

      {/* Evaluate */}
      <Section title="Step 14 : Evaluate Model" color="text-red-600">
        <CodeBlock>
{`loss,accuracy=model.evaluate(X_test,y_test)

print(loss)

print(accuracy)`}
        </CodeBlock>
      </Section>

      {/* Prediction */}
      <Section title="Step 15 : Prediction" color="text-yellow-600">
        <CodeBlock>
{`prediction=model.predict(X_test)

print(prediction[:5])`}
        </CodeBlock>
      </Section>

      {/* Save */}
      <Section title="Step 16 : Save Model" color="text-purple-600">
        <CodeBlock>
{`model.save("student_model.keras")`}
        </CodeBlock>
      </Section>

      {/* Load */}
      <Section title="Step 17 : Load Model" color="text-indigo-600">
        <CodeBlock>
{`from tensorflow.keras.models import load_model

model=load_model("student_model.keras")`}
        </CodeBlock>
      </Section>

      {/* MNIST */}
      <Section title="Step 18 : MNIST Dataset" color="text-blue-600">
        <CodeBlock>
{`from tensorflow.keras.datasets import mnist

(X_train,y_train),(X_test,y_test)=mnist.load_data()

print(X_train.shape)

print(y_train.shape)`}
        </CodeBlock>
      </Section>

      {/* CNN */}
      <Section title="Step 19 : Simple CNN Model" color="text-green-600">
        <CodeBlock>
{`from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D,MaxPooling2D,Flatten,Dense

model=Sequential([
    Conv2D(32,(3,3),activation="relu"),
    MaxPooling2D((2,2)),
    Flatten(),
    Dense(128,activation="relu"),
    Dense(10,activation="softmax")
])`}
        </CodeBlock>
      </Section>

      {/* Practice */}
      <Section title="Practice Exercises" color="text-red-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Install TensorFlow.</li>
          <li>Create Tensor.</li>
          <li>Create Variables.</li>
          <li>Perform Tensor Operations.</li>
          <li>Perform Matrix Multiplication.</li>
          <li>Generate Random Tensor.</li>
          <li>Reshape Tensor.</li>
          <li>Create Dataset.</li>
          <li>Build Neural Network.</li>
          <li>Compile Model.</li>
          <li>Train Model.</li>
          <li>Evaluate Model.</li>
          <li>Predict Output.</li>
          <li>Save Model.</li>
          <li>Load Model.</li>
        </ul>
      </Section>

      {/* Assignment */}
      <Section title="Mini Project : Handwritten Digit Recognition" color="text-purple-600">
        <CodeBlock>
{`Tasks

1. Load MNIST Dataset.

2. Normalize Images.

3. Build CNN Model.

4. Compile Model.

5. Train Model.

6. Evaluate Accuracy.

7. Save Model.

8. Load Saved Model.

9. Predict New Image.

10. Achieve Accuracy > 98%.`}
        </CodeBlock>
      </Section>

      {/* Interview */}
      <Section title="Interview Questions" color="text-indigo-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>What is TensorFlow?</li>
          <li>Difference between TensorFlow and PyTorch?</li>
          <li>What is a Tensor?</li>
          <li>What is Keras?</li>
          <li>What is Sequential API?</li>
          <li>What is Functional API?</li>
          <li>What is CNN?</li>
          <li>What is Batch Size?</li>
          <li>What is Epoch?</li>
          <li>What is Optimizer?</li>
        </ul>
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

export default Aimltensorflow;