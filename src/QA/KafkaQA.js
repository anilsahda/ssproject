import '../index.css';
import { useState } from 'react';

export default function KafkaQA() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const renderPopupContent = (text, code) => (
    <div>
      {text && <p>{text}</p>}
      {code && (
        <pre className="popup-code">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );

  const handleOpenPopup = (text, code = '') => {
    setPopupContent(renderPopupContent(text, code));
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
    setPopupContent(null);
  };

  return (
    <div>
      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Successfully migrated a monolithic .NET application to microservices on AWS, reducing operational costs by 30%.<br />
Optimized an API-driven application using AWS Lambda and DynamoDB, reducing response times by 40%.<br />
Designed a secure and scalable CI/CD pipeline, improving deployment speed and reducing failures by 60%.<br />
Led a team of 5 developers in a cloud modernization project, delivering within budget and ahead of schedule.</p>)
        }
      >Achievement</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>In one of my previous projects, I had to migrate a legacy monolithic application to a microservices-based architecture without disrupting ongoing business operations. The main challenge was to make sure a smooth transition means moving from one system or process to another without disruptions, delay or issues while maintaining data consistency. To tackle this, I collaborated with stakeholders to plan a step-by-step rollout, implemented API gateways for smooth communication, and used event-driven architecture to handle real-time data synchronization. By following best practices and conducting extensive testing, I successfully completed the migration with minimal downtime.</p>)
        }
      >Chalenge Project</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>I believe open communication is key to resolving conflicts. First, I try to understand each perspective by actively listening. If it’s a technical disagreement, I encourage data-driven discussions and proof-of-concept implementations to determine the best approach. If it’s a personal conflict, I mediate and find common ground that aligns with the team's goals. My goal is to create a supportive and productive workplace where everyone feels like valued and everyone's opinions, concerns and ideas are listened carefully and acknowledged.</p>)
        }
      >Conflict</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Yes, there was a time when I had a different technical opinion on an approach proposed by my lead. Instead of directly opposing the idea, I conducted research and prepared a proof-of-concept to demonstrate my perspective. I then presented my findings in a collaborative discussion, highlighting the pros and cons of both approaches. At the end, we combined aspects of both solutions, leading to a more efficient implementation. I believe respectful discussions lead to better decision-making and learning opportunities for both sides.</p>)
        }
      >Disagree with Manager</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>I prioritize tasks using Agile methods. I focus on high-impact tasks first and break down complex projects into smaller, manageable milestones. Additionally, I communicate regularly with stakeholders to align on priorities and adjust as needed. I also leverage tools like Jira or Trello to track progress and ensure deadlines are met without compromising quality.</p>)
        }
      >Prioritize Task</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Strong Problem-Solving Skills, Good Code Quality, Quick Learner, Team Player, Ownership and Responsibility</p>)
        }
      >People Think</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Strength</strong> I have strong problem-solving skills and a structured approach to debugging and optimizing applications. I am also a quick learner and adapt well to new technologies and methodologies. Additionally, I excel at collaborating with cross-functional teams and ensuring that business and technical requirements align.<br />
<strong>Weakness</strong> I'm very detail-oriented and sometimes spend extra time to refining a solution. However, I am actively working on balancing perfection with efficiency by following best practices and focusing on the overall impact of the task.</p>)
        }
      >Strength & Weakness</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Limited Cross-Platform Experience While .NET Core and .NET 5+ improved cross-platform compatibility. Sometimes we have limited experience with Linux/macOS environments or non-Windows deployments.<br />
Performance Optimization Challenges Sometimes we may struggle with performance tuning, such as garbage collection, memory management, or optimizing for high-performance applications.<br />
Lack of Frontend Expertise We mostly focus on backend and sometimes we are weaker in frontend technologies like React, Angular or Vue.js.<br />
Limited DevOps and Cloud Knowledge we may have gaps in DevOps, CI/CD, and cloud platforms as they are more familiar with Azure or traditional deployment methods.<br />
Security Awareness Gaps Sometimes lack expertise in secure coding practices, making our applications vulnerable to common threats like SQL injection or authentication techniques.</p>)
        }
      >Shortcoming</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>I first analyze the scope of work and identify the critical tasks that need immediate attention. If necessary, I break down the work into smaller increments and focus on delivering a working version within the given timeline. I also collaborate with my team to delegate tasks efficiently. If I see any roadblocks, I communicate them early with stakeholders to manage expectations and if required, negotiate timelines or scope adjustments</p>)
        }
      >Tight Deadline</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>I admire your company’s innovative approach and it's my commitment to building high-quality software solutions. This profile is a strong fit for me because I have a solid background in .NET development, including expertise in C#, ASP.NET, and related frameworks. Additionally, I have hands-on experience with AWS services like Lambda, EC2 Instance, S3 Bucket, DynamoDB, SQS and API Gateway which demonstrates cloud proficiency. I have ability to develop scalable, cloud-native applications, coupled with experience in CI/CD pipelines, microservices, and DevOps practices. I can effectively design, deploy and manage applications on AWS. I have strong problem-solving skills and prior experience in cloud migrations or modernization. Additionally, I appreciate the company’s emphasis on collaboration and continuous learning, which aligns with my personal and professional growth goals.</p>)
        }
      >Why Hire</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>If the client is non-technical, it's best to keep the explanation simple, clear, and solution-oriented. Here's how you can respond: like<br />
I understand the concern, and I want to assure you that we are looking into it. The application was thoroughly tested before deployment, but sometimes, differences between the production environment and the testing environment can cause unexpected issues. We are currently diagnosing the problem and will resolve it as quickly as possible. I'll keep you updated with our progress and the estimated time for resolution.</p>)
        }
      >Non-Tech Client</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Mentoring effectively can involve a mix of technical guidance, soft skills development, and creating an environment where your team members feel supported and challenged.<br />
Understand Their Strengths & Weaknesses Start with one-on-one discussions to assess their skills, interests, and career goals. Identify technical gaps and areas where they need improvement. Assign tasks based on their strengths while gradually introducing challenges.<br />
Lead by Example Show best practices in coding, design patterns, and architecture principles through. Maintain high coding standards SOLID, clean code, microservices best practices. Encourage writing efficient, maintainable, and scalable code.<br />
Provide Hands-On Guidance Conduct pair programming sessions to solve real-world problems together. Use code reviews as a learning opportunity rather than just a correction tool. Break down complex concepts into simpler, understandable parts.<br />
Encourage Ownership & Problem-Solving Assign real responsibilities rather than just minor tasks. Encourage them to think through problems rather than providing immediate solutions. Ask guiding questions like: What approaches do you think could work? What are the trade-offs of this design?<br />
Share Knowledge & Best Practices Conduct regular knowledge-sharing sessions on topics like microservices, cloud architecture, or system design. Recommend books, blogs, and courses to deepen their knowledge. Encourage contributing to open-source projects or writing technical blogs.<br />
Develop Soft Skills & Leadership Teach them how to communicate technical ideas clearly. Encourage them to present in team meetings. Help them navigate team collaboration, conflict resolution, and stakeholder communication.<br />
Provide Constructive Feedback & Motivation Give regular, specific, and actionable feedback instead of vague comments. Recognize their improvements and celebrate their small wins. Set measurable growth goals to track progress.<br />
Guide Them Towards Career Growth Help them set short-term and long-term career goals. Introduce them to new technologies, tools, and methodologies. Support them in taking leadership roles or higher responsibilities over time.<br />
Create a Culture of Continuous Learning Encourage a growth mindset where failures are seen as learning opportunities. Foster an environment where asking questions is welcomed. Keep them engaged with hackathons, tech talks, and problem-solving exercises.</p>)
        }
      >Team Handle</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Common Challenges in Mentoring<br />
Some team members may not take feedback well or feel defensive Frame feedback as collaborative improvement rather than criticism. Use real examples to show the impact of their code/design. Encourage self-review before submitting work.<br />
Skill Gaps & Learning Curve Some engineers may struggle to learn advanced concepts. Break down complex ideas into smaller, digestible parts. Use real-world examples and analogies to explain architecture and design patterns. Assign progressive tasks to build confidence gradually.<br />
Lack of Ownership & Initiative Some developers wait for instructions instead of taking initiative. Encourage critical thinking by asking: How would you solve this problem? instead of giving solutions immediately. Assign ownership of a module so they feel accountable. Recognize small wins to motivate them.</p>)
        }
      >Chalenges in Mentoring</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Code Reviews A good code review ensures maintainability, scalability, security, and performance.<br />
Uses meaningful variable and function names.<br />
Follows proper indentation and formatting.<br />
Breaks down complex logic into smaller, reusable functions.<br />
Avoids unnecessary comments.<br />
Uses comments only where needed like explaining tricky logic<br />
Consistent naming conventions camelCase.<br />
Follows team or industry style guides.<br />
Avoids hardcoded values and magic numbers<br />
Follows DRY (Don't Repeat Yourself) and KISS (Keep It Simple, Stupid) principles.<br />
Uses efficient algorithms and data structures.<br />
Handles increasing load without performance degradation.<br />
Catches and handles exceptions properly.<br />
Logs meaningful messages without exposing sensitive data.<br />
Uses batch processing instead of multiple DB/API calls in loops.<br />
Minimizes unnecessary computations or memory allocations.<br />
Uses caching when appropriate.<br />
Uses indexes where needed.<br />
Avoids N+1 query problems.<br />
Uses pagination for large datasets.<br />
Prevents SQL Injection, XSS, CSRF attacks.<br />
Uses parameterized queries and proper authentication/authorization.<br />
Ensures sensitive data (passwords, API keys) is encrypted and stored securely.<br />
Covers all edge cases and boundary conditions.<br />
Doesn't introduce unexpected side effects.<br />
Works correctly under different conditions (e.g., empty inputs, large datasets).<br />
Uses SOLID principles (if applicable).<br />
Implements correct design patterns (Factory, Singleton, Repository, etc.).<br />
Covers unit tests, integration tests, and edge cases.<br />
Uses proper assertions and test coverage.<br />
Avoids testing implementation details instead of actual functionality.<br />
Uses mocking and dependency injection where necessary.<br />
Doesn't have flaky or redundant tests.<br />
Implements what was specified in the ticket/user story.<br />
Matches business logic and functional requirements.<br />
Follows RESTful/GraphQL principles if applicable.<br />
Returns expected status codes and error responses.</p>)
        }
      >Code Review</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Unexpected Downtime & Critical Failures</strong> Follow a structured debugging approach: Reproduce the issue (logs, monitoring tools, customer reports). Analyze root cause (database, API failures, infrastructure). Fix & validate (test in staging before deploying). Prevent recurrence (add monitoring, improve logging, automate alerts). Conduct post-mortem analysis to document learnings.<br />
<strong>Performance Bottlenecks in Production Issue</strong>: Slow response times, memory leaks, or high CPU usage. Use profiling tools (New Relic, Prometheus, Dynatrace) to identify bottlenecks. Optimize database queries, caching strategies, and API calls. Scale horizontally (microservices, load balancing) if needed.<br />
<strong>Rollback & Deployment Failures Issue</strong>: A new release breaks existing functionality. Solution: Implement blue-green deployments or canary releases. Use feature flags to disable new features instantly if issues arise. Always have a rollback strategy and automated deployment pipelines.</p>)
        }
      >Prod Issues & High Level Presser</button><br />

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Kafka</strong> is an open-source, distributed data streaming platform used to publish, subscribe to, store, and process real-time data streams. It works like a high-performance message queue, allowing different applications to communicate by sending and receiving messages. <strong>Kafka Components are:</strong><br />
<strong>Producer</strong> sends data to Kafka topics<br />
<strong>Consumer</strong> reads data from Kafka topics<br />
<strong>Broker</strong> Kafka server that stores topic data and serves producers/consumers.<br /> 
<strong>Cluster</strong> is a group of multiple brokers for scalability.<br />
<strong>Topic</strong> is a logical channel where producers send message and consumers subscribe them and it is divided into partitions to process in parallel.<br />
<strong>Partition</strong> topics are split into partitions for scalability<br />
<strong>ZooKeeper</strong> used for cluster coordination<br /><br />
<strong>Kafka Connect</strong> is a tool for integrating Kafka with external systems, using source connectors and sink connectors<br />
<strong>Kafka Streams</strong> is a Java library for building real-time, stream-processing applications using Kafka topics as input/output.<br />
<strong>Use Cases</strong>: Like collecting app logs, Real-time analytics, Order tracking in e-commerce and Communication between microservices</p>)
        }
      >Kafka</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`The acks setting controls how many brokers must confirm receipt:
acks=0: fire and forget
acks=1: leader must write the record
acks=all: all in-sync replicas must acknowledge (most reliable)`)
        }
      >Acknowledgment</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Automatically using enable.auto.commit=true
Manually using commitSync() or commitAsync()
This determines where the consumer resumes after a restart or crash.`)
        }
      >Commit Offsets</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`A consumer group allows multiple consumers to share the load of reading from a topic. Each partition is assigned to one consumer within the group.`)
        }
      >Consumer Group</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Replication of partitions across brokers
Leader election among in-sync replicas
Message durability via commit logs
High availability via cluster design`)
        }
      >Fault Tolerance</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Each partition has one leader and multiple followers (replicas). The leader handles all reads/writes. Replicas stay in sync and one is promoted if the leader fails.`)
        }
      >Handle Replication</button>
      
      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`An idempotent producer avoids duplicates by ensuring Kafka only accepts a message once per producer session and sequence number. Set via enable.idempotence=true.`)
        }
      >Idempotent Producer</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`At most once – message may be lost but never duplicated
At least once – message may be duplicated but not lost
Exactly once – message is delivered once without loss or duplication (requires special configuration)`)
        }
      >Message Delivery Guarantees</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Based on a message key (hashed to pick a partition)
If no key, Kafka uses round-robin distribution`)
        }
      >Messages Distribution</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Kafka preserves message order within a single partition. Across partitions, ordering is not guaranteed.`)
        }
      >Message Ordering</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`An offset is a unique identifier (number) for each message in a partition. Consumers use it to keep track of which messages they've processed.`)
        }
      >Offset</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`A partition is a unit of parallelism in Kafka. Each partition is an append-only log and maintains the ordering of messages within itself.`)
        }
      >Partition</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Kafka retains messages for a configured time duration (e.g., 7 days) or size limit per topic, even if they're consumed. Configurable via retention.ms or retention.bytes.`)
        }
      >Retention Policy</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`ZooKeeper is used for:
Cluster metadata management
Broker registration
Leader election`)
        }
      >ZooKeeper</button>
    <br />
<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    `producer.js`, 
    `const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "demo-producer",
  brokers: ["localhost:9092"]
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();

  setInterval(async () => {
    const event1 = { userId: 1, action: "login" };
    const event2 = { userId: 2, action: "hi, how r u?" };

    await producer.send({ 
      topic: "user-events1", 
      messages: [{ value: JSON.stringify(event1) }]
    });

    await producer.send({ 
      topic: "user-events2", 
      messages: [{ value: JSON.stringify(event2) }]
    });

    console.log("Produced:", event1);
  }, 2000);
};

run().catch(console.error);`
  )
}>
  producer.js
</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(`consumerA.js`, `const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "analytics-service",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "analytics-group" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "user-events1", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log("📊 Analytics received:", message.value.toString());
    },
  });
};

run().catch(console.error);`)
        }
      >consumerA.js</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(`consumerB.js`, `const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "email-service",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "email-group" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "user-events2", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log("📧 Email service triggered:", message.value.toString());
    },
  });
};

run().catch(console.error);`)
        }
      >consumerB.js</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(`docker-compose.yml`, `services:
  zookeeper:
    image: confluentinc/cp-zookeeper:7.5.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000
    ports:
      - "2181:2181"

  kafka:
    image: confluentinc/cp-kafka:7.5.0
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1`)
        }
      >docker-compose.yml</button><br />

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>RabbitMQ</strong> is an open-source message broker that helps applications to communicate with each other by sending and receiving messages through queues. It acts like a middleman that stores messages from producers and delivers them to consumers, ensuring reliable, asynchronous communication between systems.<br />
<strong>Key Concepts are:</strong><br />
<strong>Producer</strong>: Sends messages.<br />
<strong>Queue</strong> stores messages until they are processed by consumers. Queues make sure reliable delivery from consumers.<br />
<strong>Consumer</strong> connects to the queue and receives messages for processing. It can acknowledge messages after processing<br />
<strong>Broker</strong> is RabbitMQ server that manages everything like receiving messages from producers, routing them to the correct queues, and deliver to consumers based on defined rules and configurations.<br />
<strong>Binding</strong> is a link between an exchange and a queue, with optional routing rules. It tells the exchange which messages should go to which queues.<br />
<strong>vHost</strong> is like a namespace and it separate resources like queue and exchange<br />
<strong>Use Cases</strong>: Sending notifications, Order processing in e-commerce, Decoupling microservices, Background job handling</p>)
        }
      >RabbitMQ</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Exchange</strong> is responsible for receiving messages from producers and routing them to queues based on bindings and routing keys.<br />
<strong>Direct</strong> routes messages to queues with exact routing key match<br />
<strong>Fanout</strong> broadcasts to all bound queues<br />
<strong>Topic</strong> routes based on pattern matching of routing keys<br />
<strong>Headers</strong> routes based on header values instead of routing keys</p>)
        }
      >Exchange</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Idempotent Producer</strong> avoid duplicate messages and making sure each message is delivered only once. It uses a producer ID and a sequence number to track messages and we can enable it by setting enable.idempotence=true</p>)
        }
      >Idempotent Producer</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Routing Key</strong> is a string used by RabbitMQ to decide how to route a message from an exchange to the correct queue.</p>)
        }
      >Routing Key</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Message Durability</strong> means messages are saved to disk, so that messages are not lost if the server restarts or crash. To achieve durability, the queue must be durable and the messages must be marked as persistent.</p>)
        }
      >Message Durability</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>RabbitMQ requires consumers to send an <strong>acknowledgment</strong> after successfully processed the message. If a message is not acknowledged, RabbitMQ assumes it wasn’t processed and may re-deliver to another consumer.</p>)
        }
      >Acknowledgment</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>prefetch_count</strong> controls how many unacknowledged messages RabbitMQ can send to a consumer at a time. It make sure fair distribution by preventing one consumer from being overloaded while others are idle.</p>)
        }
      >Prefetch Count</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>In <strong>auto-ack</strong> RabbitMQ marks the message as processed immediately after sending it, even if the consumer hasn’t finished handling it.<br />
In <strong>manual ack</strong> the consumer must explicitly confirm (acknowledge) the message after successfully processing it.</p>)
        }
      >auto-ack vs manual-ack</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Dead-Letter Exchanges (DLX)</strong> is used to redirect messages that are rejected, expired or have exceeded retry limits. These messages are sent to a dead-letter queue for further inspection, logging or retry handling.</p>)
        }
      >Dead-Letter Exchanges</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Reliable Message Delivery</strong> means make sure messages are not lost and are successfully delivered from producer to broker to consumer, even if the producer, consumer, or server fails during processing the message.</p>)
        }
      >Reliable Delivery Messages</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Message Expiration</strong> means that a message has a time limit to live in a queue; if it’s not delivered or consumed within that time, RabbitMQ removes (expires) the message automatically.</p>)
        }
      >Message Expiration</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>RabbitMQ Plugins</strong> are optional add-ons that extend RabbitMQ’s functionality with extra features like monitoring, management, protocols, and integrations.<br />
<strong>Management Plugin</strong> provides a web-based UI to monitor and manage RabbitMQ easily.<br />
<strong>Federation Plugin</strong> allows connecting and syncing multiple RabbitMQ brokers across different networks.<br />
<strong>Shovel Plugin</strong> automatically moves messages between queues on different brokers.<br />
<strong>STOMP / MQTT Plugins</strong> enable RabbitMQ to support different messaging protocols besides AMQP.<br />
<strong>Tracing Plugin</strong> helps track message flow for debugging.</p>)
        }
      >RabbitMQ Plugins</button>
    <br />

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Azure Service Bus</strong> is a fully managed message broker that helps applications or services communicate with each other asynchronously by sending messages through queues and topics. Service Bus decouple services, meaning the sender and receiver don’t need to be online at the same time. It’s great for enterprise-level messaging, ensuring reliable delivery, retry handling, and ordered processing.<br />
Features of Azure Service Bus are:<br />
<strong>Reliable messaging</strong> with retries and dead-letter queues<br />
<strong>Message ordering</strong> and <strong>duplicate detection</strong><br />
<strong>Scheduled delivery</strong> of messages<br />
<strong>Message sessions</strong> for maintaining state in conversations<br />
<strong>Advanced filtering</strong> in topics/subscriptions<br />

<strong>Service Bus Components are</strong>:<br />
<strong>Topic</strong> is a messaging channel that allows one-to-many communication, meaning a single message sent to a topic can be received by multiple subscribers.<br />
<strong>Use Case</strong>: In an e-commerce app, when a user places an order the <strong>Order Service</strong> sends a message to the Service Bus queue. The <strong>Inventory and Billing Services</strong> receive and process the message independently.</p>)
        }
      >Service Bus</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Dead-letter Queue</strong> is used to store messages that can’t be delivered or processed due to Rejected messages, Messages that exceeded the max delivery count, Expired messages. They can be inspected or reprocessed later.</p>)
        }
      >DLQ</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Subscription</strong> is a virtual queue that receives a copy of each message sent to the topic.</p>)
        }
      >Subscription</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Service Bus Session</strong> is a feature that enables FIFO and stateful processing across messages. Messages with the same SessionId are grouped and handled sequentially.</p>)
        }
      >Service Bus Session</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Peek-Lock</strong>: Message is locked, processed, then explicitly completed.<br />
<strong>Receive-and-Delete</strong>: Message is removed immediately after reading.</p>)
        }
      >PeekLock vs ReceiveAndDelete</button>
      
      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Azure Service Bus can detect and ignore duplicate messages within a deduplication time window (e.g., 10 minutes) using a MessageId.</p>)
        }
      >Duplicate Detection</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Auto Delete</strong> automatically deletes a queue or topic if it remains idle for a specified time period.</p>)
        }
      >Auto Delete</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Auto Forwarding</strong> automatically forward messages from one queue or subscription to another within the same namespace.</p>)
        }
      >Auto Forwarding</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Basic – Only queues<br />
Standard – Queues and Topics<br />
Premium – Dedicated resources, better performance, virtual network integration</p>)
        }
      >Pricing Tiers</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>We can improve message throughput in Azure Service Bus like:<br />
Enable partitioning<br />
Use batched sends<br />
Use asynchronous send/receive<br />
Scale with Premium tier</p>)
        }
      >Improve Message Throughput</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Messages can be deferred for later processing. A message is set aside and retrieved by its sequence number when needed.</p>)
        }
      >Message Deferral</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Poison Messages</strong> can be handled in Azure Service Bus like:<br />
            Using DLQ to store them<br />
Monitor DLQs and move or delete bad messages manually or via code</p>)
        }
      >Poison Messages</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>The maximum message size in Azure Service Bus are:<br />
Standard Tier: 256 KB<br />
Premium Tier: 1 MB</p>)
        }
      >Max Message Size</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Partitioning</strong> allows messages to be stored across multiple message brokers, improving availability and scalability.</p>)
        }
      >Partitioning</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Message Lock</strong> prevents other receivers from processing the same message and the default time is 30 seconds and extendable up to 5 minutes</p>)
        }
      >Message Lock</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>ScheduledEnqueueTimeUtc</strong> is use to deliver message at a specific time in the future</p>)
        }
      >ScheduledEnqueueTimeUtc</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Message Ordering</strong> is guaranteed only when using sessions. Without sessions, messages might arrive out of order.</p>)
        }
      >Message Ordering</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>QuotaExceededException</strong>	message or size limit reached. It can be fixed using increase quota, remove messages<br />
<strong>ServerBusyException</strong> when throttling. It can be fixed using retry with exponential backoff.<br />
<strong>MessageLockLostException</strong> when lock expired. It can be fixed using	 RenewLock or process faster.<br />
<strong>UnauthorizedAccessException</strong> when wrong SAS or AAD permission. It can be fixed using	validate credentials/roles.</p>)
        }
      >Common Errors</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Azure Monitor<br />
Application Insights<br />
Service Bus Explorer</p>)
        }
      >Monitor Service Bus</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>You can secure it using:<br />
Shared Access Signature (SAS) tokens<br />
Azure Active Directory (Azure AD) authentication<br />
Role-Based Access Control (RBAC)</p>)
        }
      >Secure Service Bus Access</button>

      {/* Popup */}
      {isOpen && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content scrollable-popup" onClick={(e) => e.stopPropagation()}>
            {popupContent}
          </div>
        </div>
      )}
    </div>
  );
}
