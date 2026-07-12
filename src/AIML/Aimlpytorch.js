import React from "react";

function Aimlpytorch() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">
          PyTorch Practical Examples
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Learn PyTorch with practical Deep Learning examples for AI / ML Engineers.
        </p>
      </header>

      {/* Installation */}
      <Section title="Step 1 : Install PyTorch" color="text-green-600">
        <CodeBlock>
{`pip install torch torchvision torchaudio`}
        </CodeBlock>
      </Section>

      {/* Import */}
      <Section title="Step 2 : Import PyTorch" color="text-yellow-600">
        <CodeBlock>
{`import torch`}
        </CodeBlock>
      </Section>

      {/* Version */}
      <Section title="Step 3 : Verify Installation" color="text-red-600">
        <CodeBlock>
{`import torch

print(torch.__version__)

print(torch.cuda.is_available())`}
        </CodeBlock>
      </Section>

      {/* Tensor */}
      <Section title="Step 4 : Create Tensor" color="text-indigo-600">
        <CodeBlock>
{`import torch

tensor = torch.tensor([10,20,30,40])

print(tensor)`}
        </CodeBlock>
      </Section>

      {/* Matrix */}
      <Section title="Step 5 : Create Matrix" color="text-purple-600">
        <CodeBlock>
{`matrix = torch.tensor([
    [1,2,3],
    [4,5,6]
])

print(matrix)`}
        </CodeBlock>
      </Section>

      {/* Tensor Information */}
      <Section title="Step 6 : Tensor Information" color="text-blue-600">
        <CodeBlock>
{`print(matrix.shape)

print(matrix.dtype)

print(matrix.ndim)

print(matrix.size())`}
        </CodeBlock>
      </Section>

      {/* Math */}
      <Section title="Step 7 : Tensor Operations" color="text-green-600">
        <CodeBlock>
{`a = torch.tensor([10,20,30])

b = torch.tensor([1,2,3])

print(a+b)

print(a-b)

print(a*b)

print(a/b)`}
        </CodeBlock>
      </Section>

      {/* Reshape */}
      <Section title="Step 8 : Reshape Tensor" color="text-red-600">
        <CodeBlock>
{`x = torch.arange(12)

print(x)

print(x.reshape(3,4))`}
        </CodeBlock>
      </Section>

      {/* Random */}
      <Section title="Step 9 : Random Tensor" color="text-yellow-600">
        <CodeBlock>
{`print(torch.rand(3,3))

print(torch.randn(3,3))

print(torch.randint(1,100,(5,5)))`}
        </CodeBlock>
      </Section>

      {/* GPU */}
      <Section title="Step 10 : GPU Support" color="text-purple-600">
        <CodeBlock>
{`device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

tensor = torch.tensor([1,2,3]).to(device)

print(device)

print(tensor)`}
        </CodeBlock>
      </Section>

      {/* Autograd */}
      <Section title="Step 11 : Automatic Differentiation" color="text-indigo-600">
        <CodeBlock>
{`x = torch.tensor(2.0, requires_grad=True)

y = x*x + 5

y.backward()

print(x.grad)`}
        </CodeBlock>
      </Section>

      {/* Neural Network */}
      <Section title="Step 12 : Create Neural Network" color="text-blue-600">
        <CodeBlock>
{`import torch.nn as nn

model = nn.Sequential(

    nn.Linear(4,8),

    nn.ReLU(),

    nn.Linear(8,3)

)

print(model)`}
        </CodeBlock>
      </Section>

      {/* Loss */}
      <Section title="Step 13 : Loss Function" color="text-green-600">
        <CodeBlock>
{`criterion = nn.CrossEntropyLoss()`}
        </CodeBlock>
      </Section>

      {/* Optimizer */}
      <Section title="Step 14 : Optimizer" color="text-red-600">
        <CodeBlock>
{`optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001
)`}
        </CodeBlock>
      </Section>

      {/* Training */}
      <Section title="Step 15 : Training Loop" color="text-yellow-600">
        <CodeBlock>
{`for epoch in range(10):

    optimizer.zero_grad()

    outputs = model(X_train)

    loss = criterion(outputs,y_train)

    loss.backward()

    optimizer.step()

    print(loss.item())`}
        </CodeBlock>
      </Section>

      {/* Save */}
      <Section title="Step 16 : Save Model" color="text-purple-600">
        <CodeBlock>
{`torch.save(model.state_dict(),"model.pth")`}
        </CodeBlock>
      </Section>

      {/* Load */}
      <Section title="Step 17 : Load Model" color="text-indigo-600">
        <CodeBlock>
{`model.load_state_dict(torch.load("model.pth"))

model.eval()`}
        </CodeBlock>
      </Section>

      {/* Prediction */}
      <Section title="Step 18 : Prediction" color="text-blue-600">
        <CodeBlock>
{`prediction = model(X_test)

print(prediction)`}
        </CodeBlock>
      </Section>

      {/* Practice */}
      <Section title="Practice Exercises" color="text-green-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Install PyTorch.</li>
          <li>Create 1D Tensor.</li>
          <li>Create 2D Tensor.</li>
          <li>Generate Random Tensor.</li>
          <li>Perform Tensor Addition.</li>
          <li>Perform Matrix Multiplication.</li>
          <li>Reshape Tensor.</li>
          <li>Create Neural Network.</li>
          <li>Train Model.</li>
          <li>Save and Load Model.</li>
        </ul>
      </Section>

      {/* Assignment */}
      <Section title="Mini Project : Handwritten Digit Recognition" color="text-red-600">
        <CodeBlock>
{`Tasks

1. Load MNIST Dataset.

2. Normalize Images.

3. Create Neural Network.

4. Train Model.

5. Test Accuracy.

6. Save Model.

7. Load Saved Model.

8. Predict New Image.

9. Display Accuracy.

10. Improve Accuracy > 98%.`}
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

export default Aimlpytorch;