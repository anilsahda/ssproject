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
