import React from "react";

function Aimlhuggingface() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">
          Hugging Face Practical Examples
        </h1>

        <p className="text-gray-500 text-xs mt-1">
          Learn Hugging Face Transformers, Datasets, Pipelines and Model Hub with hands-on practical examples for AI / ML Engineers.
        </p>
      </header>

      {/* Installation */}
      <Section title="Step 1 : Install Hugging Face Packages" color="text-green-600">
        <CodeBlock>
{`pip install transformers

pip install datasets

pip install evaluate

pip install accelerate

pip install sentence-transformers

pip install huggingface_hub`}
        </CodeBlock>
      </Section>

      {/* Import */}
      <Section title="Step 2 : Import Libraries" color="text-yellow-600">
        <CodeBlock>
{`from transformers import pipeline

from transformers import AutoTokenizer

from transformers import AutoModel

from datasets import load_dataset`}
        </CodeBlock>
      </Section>

      {/* Version */}
      <Section title="Step 3 : Verify Installation" color="text-red-600">
        <CodeBlock>
{`import transformers

print(transformers.__version__)`}
        </CodeBlock>
      </Section>

      {/* Sentiment */}
      <Section title="Step 4 : Sentiment Analysis" color="text-indigo-600">
        <CodeBlock>
{`from transformers import pipeline

classifier = pipeline("sentiment-analysis")

result = classifier("I love Artificial Intelligence.")

print(result)`}
        </CodeBlock>
      </Section>

      {/* Text Generation */}
      <Section title="Step 5 : Text Generation" color="text-purple-600">
        <CodeBlock>
{`generator = pipeline("text-generation")

result = generator(
    "Artificial Intelligence is",
    max_length=50
)

print(result)`}
        </CodeBlock>
      </Section>

      {/* Summarization */}
      <Section title="Step 6 : Text Summarization" color="text-blue-600">
        <CodeBlock>
{`summarizer = pipeline("summarization")

text = """
Artificial Intelligence is changing every industry by
automating tasks and improving decision making.
"""

print(
    summarizer(
        text,
        max_length=40,
        min_length=15
    )
)`}
        </CodeBlock>
      </Section>

      {/* Translation */}
      <Section title="Step 7 : Translation" color="text-green-600">
        <CodeBlock>
{`translator = pipeline(
    "translation_en_to_fr"
)

print(
    translator(
        "Welcome to AI Engineering"
    )
)`}
        </CodeBlock>
      </Section>

      {/* Question Answering */}
      <Section title="Step 8 : Question Answering" color="text-red-600">
        <CodeBlock>
{`qa = pipeline("question-answering")

result = qa(
    question="What is AI?",
    context="Artificial Intelligence is the simulation of human intelligence."
)

print(result)`}
        </CodeBlock>
      </Section>

      {/* Fill Mask */}
      <Section title="Step 9 : Fill Mask" color="text-yellow-600">
        <CodeBlock>
{`fill = pipeline("fill-mask")

print(
    fill(
        "Machine learning is <mask>."
    )
)`}
        </CodeBlock>
      </Section>

      {/* Embeddings */}
      <Section title="Step 10 : Sentence Embeddings" color="text-purple-600">
        <CodeBlock>
{`from sentence_transformers import SentenceTransformer

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

embedding = model.encode(
    "Artificial Intelligence"
)

print(embedding.shape)`}
        </CodeBlock>
      </Section>

      {/* Tokenizer */}
      <Section title="Step 11 : Tokenizer" color="text-indigo-600">
        <CodeBlock>
{`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(
    "bert-base-uncased"
)

tokens = tokenizer(
    "Welcome to Hugging Face"
)

print(tokens)`}
        </CodeBlock>
      </Section>

      {/* Load Model */}
      <Section title="Step 12 : Load Pretrained Model" color="text-blue-600">
        <CodeBlock>
{`from transformers import AutoModel

model = AutoModel.from_pretrained(
    "bert-base-uncased"
)

print(model)`}
        </CodeBlock>
      </Section>

      {/* Dataset */}
      <Section title="Step 13 : Load Dataset" color="text-green-600">
        <CodeBlock>
{`from datasets import load_dataset

dataset = load_dataset("imdb")

print(dataset)`}
        </CodeBlock>
      </Section>

      {/* Evaluation */}
      <Section title="Step 14 : Evaluation Metric" color="text-red-600">
        <CodeBlock>
{`import evaluate

metric = evaluate.load("accuracy")

print(metric)`}
        </CodeBlock>
      </Section>

      {/* Login */}
      <Section title="Step 15 : Login to Hugging Face Hub" color="text-yellow-600">
        <CodeBlock>
{`huggingface-cli login`}
        </CodeBlock>
      </Section>

      {/* Download */}
      <Section title="Step 16 : Download Model" color="text-purple-600">
        <CodeBlock>
{`from huggingface_hub import snapshot_download

snapshot_download(
    repo_id="bert-base-uncased"
)`}
        </CodeBlock>
      </Section>

      {/* Fine Tuning */}
      <Section title="Step 17 : Fine Tuning Overview" color="text-indigo-600">
        <CodeBlock>
{`1. Load Dataset

2. Tokenize Dataset

3. Load Pretrained Model

4. Configure Trainer

5. Train Model

6. Evaluate Model

7. Save Model

8. Push to Hugging Face Hub`}
        </CodeBlock>
      </Section>

      {/* Practice */}
      <Section title="Practice Exercises" color="text-blue-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>Install Hugging Face libraries.</li>
          <li>Perform Sentiment Analysis.</li>
          <li>Generate text using a pretrained model.</li>
          <li>Summarize a long article.</li>
          <li>Translate English to French.</li>
          <li>Answer questions from a context paragraph.</li>
          <li>Generate sentence embeddings.</li>
          <li>Tokenize a sentence.</li>
          <li>Load the IMDB dataset.</li>
          <li>Download a pretrained model.</li>
        </ul>
      </Section>

      {/* Mini Project */}
      <Section title="Mini Project : AI Text Assistant" color="text-purple-600">
        <CodeBlock>
{`Tasks

1. Load Text Generation Model.

2. Generate Response.

3. Summarize Text.

4. Perform Sentiment Analysis.

5. Translate Text.

6. Generate Embeddings.

7. Save Responses.

8. Build FastAPI Endpoint.

9. Connect React Frontend.

10. Deploy Application.`}
        </CodeBlock>
      </Section>

      {/* Interview */}
      <Section title="Interview Questions" color="text-indigo-600">
        <ul className="list-disc ml-6 space-y-1">
          <li>What is Hugging Face?</li>
          <li>What are Transformers?</li>
          <li>What is a Pipeline?</li>
          <li>What is a Tokenizer?</li>
          <li>What is BERT?</li>
          <li>What is GPT?</li>
          <li>What are Sentence Transformers?</li>
          <li>What is Fine-tuning?</li>
          <li>What is the Hugging Face Hub?</li>
          <li>How do you deploy a Hugging Face model?</li>
        </ul>
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

/* Reusable Code Block Component */
function CodeBlock({ children }) {
  return (
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5 whitespace-pre-wrap">
      <code>{children}</code>
    </pre>
  );
}

export default Aimlhuggingface;