import '../index.css';
import { useState } from 'react';

export default function SQLQA() {
const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const renderPopupContent = (text, jsxContent) => (
    <div>
      {text && <p>{text}</p>}
      {jsxContent && <div className="popup-code">{jsxContent}</div>}
    </div>
  );

  const handleOpenPopup = (text, jsxContent = null) => {
    setPopupContent(renderPopupContent(text, jsxContent));
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
    setPopupContent(null);
  };

  return (
    <div>
      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(`ACID is used to maintain database consistency before and after a transaction. Transaction is a single logical unit which is used to modify the data through read write operations like insert, update, delete and retrieve the data.`)
        }
      >ACID</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Atomicity means a transaction can be treated as a single. Either all the operations will be completed successfully or nothing will be performed. Means If any part of the transaction fails, the entire transaction is rolled back in original state.`)
        }
      >Atomicity</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Consistency means a transaction takes the database from one consistent state to another consistent state. Database should be in consistent state before and after the transaction executed.`)
        }
      >Consistency</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Isolation means multiple transactions can execute concurrently without interfaring with each other. Each transaction must be isolated from other transactions until it's completed.`)
        }
      >Isolation</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Durability means the data remains consistent and accurate, even system failure or crash. It guarantees that committed transactions are durable and will be recovered without data loss.`)
        }
      >Durability</button><br />

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(`Constraints in SQL are rules that you apply to columns in a table to control what kind of data can be stored in them. They help to keep your database accurate, reliable, and safe from invalid data.`)
        }
      >Constraint</button>
      
      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Not Null means column cannot have Null value.`, `CREATE TABLE Country
Code varchar(3) NOT NULL;`)
        }
      >Not Null</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Check used to make sure to satisfy specific condition`,`CREATE TABLE Persons 
(
    Id int primary key identity(1,1),
    Name varchar(100) NOT NULL,
    Age int,
    Check (Age >= 18)
);`)
        }
      >Check</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Default sets a default value if data is not supply`)
        }
      >Default</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Primary Key used to identify unique row and must contain unique value. It can’t be null or duplicate.`)
        }
      >Primary Key</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Foreign Key is basically the primary key in another table. It builds a connection between tables.`)
        }
      >Foreign Key</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Unique Key is almost same as primary key but it allow null value and table can have multiple Unique Keys.`)
        }
      >Unique Key</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Composite Key is a combination of two or more columns that uniquely identifies each row.`)
        }
      >Composite Key</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Alternate Key When multiple keys are added except Primary Key then all keys are called Alternate Keys except Primary Key.`)
        }
      >Alternate Key</button><br />

      <button className="btn btn-warning me-2 mb-2" onClick={() =>
          handleOpenPopup(`Data Type In SQL, data types define the type of data that can be stored in a column of a table. SQL supports a wide range of data types, and they can be categorized into several types based on their usage.For Example:-Numeric,String,Boolean,Binary etc.`)
        }
      >Data Types</button>

<button
        className="btn btn-primary me-2 mb-2"
        onClick={() =>
          handleOpenPopup(
            null,
            <>
              Numeric data types are used to store numbers — both integers and floating-point values.<br /><br />
              <strong>INT</strong>: Used to store whole numbers (without decimals).<br />
              <strong>TINYINT</strong>: A very small integer value. Range: -128 to 127 (or 0 to 255 for unsigned).<br />
              <strong>SMALLINT</strong>: Used for smaller integer values. Range: -32,768 to 32,767.<br />
              <strong>MEDIUMINT</strong>: Used for medium-size integer values. Range: -8,388,608 to 8,388,607.<br />
              <strong>BIGINT</strong>: Used for very large integer values. Range: -9 quintillion to +9 quintillion.<br />
              <strong>DECIMAL</strong>: Fixed-point number with precision. <br />
              Example: <code>DECIMAL(10, 2)</code> stores numbers with 10 digits, 2 of which are after the decimal (e.g., 12345678.90).<br />
              <strong>FLOAT</strong>: Single-precision floating-point number.<br />
              <strong>DOUBLE</strong>: Double-precision floating-point number.<br />
            </>
          )
        }
      >
        Numeric
      </button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Date & Time Type These data types are used to store date and time values. For example
DATE Used to store date values without time. like YYYY-MM-DD
DATETIME Used to store both date & time like YYYY-MM-DD HH:MM:SS
TIMESTAMP Similar to DATETIME, but also stores the time zone. like YYYY-MM-DD HH:MM:SS
TIME Used to store time values without date like HH:MM:SS
YEAR Used to store a year value in 4 digits like YYYY`)
        }
      >Date & Time</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Boolean Type Stores TRUE or FALSE values. For example BOOLEAN can also be represented by TINYINT(1).`)
        }
      >Boolean</button>

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
          <div
            className="popup-content scrollable-popup"
            onClick={(e) => e.stopPropagation()}
          >
            {popupContent}
          </div>
        </div>
      )}
    </div>
  );
}
