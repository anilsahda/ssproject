import '../index.css';
import { useState } from 'react';

export default function ReactQA() {
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
          handleOpenPopup(`The acks setting controls how many brokers must confirm receipt:
acks=0: fire and forget
acks=1: leader must write the record
acks=all: all in-sync replicas must acknowledge (most reliable)`)
        }
      >Acknowledgment</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`A broker is a Kafka server that holds topic data and serves producers/consumers. Kafka clusters consist of multiple brokers for scalability.`)
        }
      >Broker</button>

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
      >Ensure Fault Tolerance</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Each partition has one leader and multiple followers (replicas). The leader handles all reads/writes. Replicas stay in sync and one is promoted if the leader fails.`)
        }
      >Handle Replication</button>
      
      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`An idempotent producer avoids duplicates by ensuring Kafka only accepts a message once per producer session and sequence number. Set via enable.idempotence=true.`)
        }
      >Idempotent Producer</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Kafka is a distributed streaming platform that allows for building real-time data pipelines and event-driven applications. It can publish, subscribe to, store, and process streams of records in a fault-tolerant way.
            It is log-based model and partition level strong ordering.`)
        }
      >Kafka</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Producer – sends data to Kafka topics
Consumer – reads data from Kafka topics
Broker – Kafka server that stores data
Topic – a category/feed name to which records are sent
Partition – topics are split into partitions for scalability
ZooKeeper (or KRaft) – used for cluster coordination (newer Kafka can work without ZooKeeper)`)
        }
      >Kafka Components</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Kafka Connect is a tool for integrating Kafka with external systems, using source connectors (to read data into Kafka) and sink connectors (to write data from Kafka).`)
        }
      >Kafka Connect</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Kafka Streams is a Java library for building real-time, stream-processing applications using Kafka topics as input/output.`)
        }
      >Kafka Streams</button>

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
          handleOpenPopup(`A topic is a logical channel to which producers send messages and consumers subscribe to receive them. Topics are partitioned for parallelism.`)
        }
      >Topic</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`ZooKeeper is used for:
Cluster metadata management
Broker registration
Leader election`)
        }
      >ZooKeeper</button>
    <br />
      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenPopup(`producer.js`, `const { Kafka } = require("kafkajs");
const kafka = new Kafka(
{ 
    clientId:"demo-producer",
    brokers: ["localhost:9092"]
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();

  setInterval(async () => {
    const event = { userId: 1, action: "login" };
    const event1 = { userId: 2, action: "hi, how r u?" };

    await producer.send({ topic: "user-events1", 
        messages: [{ value: JSON.stringify(event1) }]});

        await producer.send({ topic: "user-events2", 
        messages: [{ value: JSON.stringify(event2) }]});

        console.log("Produced:", event);
  }, 2000);
};

run().catch(console.error);`)
        }
      >producer.js</button>

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
      >docker-compose.yml</button>            


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
