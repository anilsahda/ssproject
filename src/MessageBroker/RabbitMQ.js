import '../index.css';
import { useState } from 'react';

export default function RabbitMQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCodeOpen, setIsCodeOpen] = useState(false);  
  const [popupContent, setPopupContent] = useState('');

  const handleOpenPopup = (content) => {
    setPopupContent(content);
    setIsOpen(true);
  };

  const handleOpenCodePopup = (content) => {
    setPopupContent(content);
    setIsCodeOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
    setIsCodeOpen(false);
    setPopupContent('');
  };

  return (
    <div>
      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`RabbitMQ is an open-source message broker that helps in applications to talk to each other by sending and storing messages safely until someone is ready to use them. There is one producer program which sends a message and RabbitMQ stores the message in a queue. And Consumer program picks up the message and processes it. RabbitMQ helps the programs work independently, even if one is slow or offline.
           
Why Use RabbitMQ?
🕐 Saves time – lets your app move on after sending a message
🔁 Handles retries – can re-send messages if something fails
🔄 Decouples services – apps don’t need to know about each other
📬 Queues messages – stores them safely until someone reads them

🛠️ Real-Life Example:
Let’s say a shopping app sends an order to the warehouse:
App sends "Order #123" ➡️ RabbitMQ
RabbitMQ stores it in a queue
The warehouse system picks up "Order #123" when ready
Even if the warehouse is busy, the message is not lost`)
        }
      >RabbitMQ</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Producer – sends messages
Consumer – receives messages
Queue – stores messages until consumed
Exchange – routes messages to queues
Binding – links exchanges to queues with routing rules
Broker – the RabbitMQ server itself`)
        }
      >Components</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`A queue stores messages until they are processed by consumers. Queues ensure reliable delivery and decouple producers from consumers. Queue is a storage buffer inside the broker where messages wait to be consumed.`)
        }
      >Queue</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`A consumer connects to the queue and receives messages for processing. It can acknowledge messages after processing.`)
        }
      >Consumer</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`An exchange receives messages from producers and routes them to queues based on bindings and routing keys.
                        Direct – routes messages to queues with exact routing key match
Fanout – broadcasts to all bound queues
Topic – routes based on pattern matching of routing keys
Headers – routes based on header values instead of routing keys`)
        }
      >Exchange</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`A binding connects an exchange to a queue with optional routing rules. Determines how messages are routed.`)
        }
      >Binding</button>
      
      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`An idempotent producer avoids duplicates by ensuring Kafka only accepts a message once per producer session and sequence number. Set via enable.idempotence=true.`)
        }
      >Idempotent Producer</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`A routing key is a string used by exchanges (especially Direct and Topic) to determine where to route a message.`)
        }
      >Routing Key</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Broker is the RabbitMQ server that manages message routing`)
        }
      >Broker</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Mark queues as durable to survive broker restarts

Mark messages as persistent to store them to disk

Both are needed for full durability`)
        }
      >Message Durability</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`RabbitMQ requires consumers to acknowledge messages after successful processing. If not acknowledged, the broker may re-deliver the message.`)
        }
      >Acknowledgment</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`prefetch_count controls how many unacknowledged messages RabbitMQ will deliver to a consumer at once. Helps implement fair dispatch.`)
        }
      >Prefetch Count</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Auto-ack: RabbitMQ considers the message processed once it's sent
Manual ack: The consumer must send an acknowledgment explicitly`)
        }
      >auto-ack vs manual-ack</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Dead-letter exchanges (DLX) are used to redirect messages that are: Rejected
Expired
Exceeded retry limits
They go to a special queue for further inspection or retry logic.`)
        }
      >Dead-Letter</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Direct Exchange: routes messages with exact routing key match

Topic Exchange: routes messages using wildcards (*, #) in routing keys`)
        }
      >Topic vs Direct Exchange</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Use durable queues, persistent messages, manual acks, retry logic, and dead-letter queues

Consider message deduplication if needed`)
        }
      >Reliable Delivery Messages</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`A virtual host is a namespace within RabbitMQ. It allows separation of multiple applications or tenants on the same broker instance.`)
        }
      >Virtual Host(vhost)</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`You can set a TTL (Time-To-Live) on:

The queue: all messages expire after a set time

Individual messages: expire after a specific time in the queue`)
        }
      >Message Expiration</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`RabbitMQ plugins extend broker functionality. Common ones:
Management plugin (web UI)
Shovel and Federation (for cross-node message transfer)
Prometheus plugin (for metrics)
MQTT/AMQP/STOMP protocol support`)
        }
      >RabbitMQ Plugins</button>
    <br />
      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenCodePopup(`const amqp = require('amqplib');

async function produce() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertQueue('user-events1');
  await channel.assertQueue('user-events2');

  setInterval(() => {
    const event1 = { userId: 1, action: "login" };
    const event2 = { userId: 2, action: "hi, how r u?" };

    channel.sendToQueue('user-events1', Buffer.from(JSON.stringify(event1)));
    channel.sendToQueue('user-events2', Buffer.from(JSON.stringify(event2)));

    console.log("Produced:", event1, event2);
  }, 2000);
}

produce().catch(console.error);`)
        }
      >producer.js</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenCodePopup(`const amqp = require('amqplib');

async function consumeAnalytics() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertQueue('user-events1');

  channel.consume('user-events1', (msg) => {
    console.log("📊 Analytics received:", msg.content.toString());
    channel.ack(msg);
  });
}

consumeAnalytics().catch(console.error);`)
        }
      >consumerA.js</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenCodePopup(`const amqp = require('amqplib');

async function consumeEmail() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertQueue('user-events2');

  channel.consume('user-events2', (msg) => {
    console.log("📧 Email service triggered:", msg.content.toString());
    channel.ack(msg);
  });
}

consumeEmail().catch(console.error);`)
        }
      >consumerB.js</button>

      <button className="btn btn-success me-2 mb-2" onClick={() =>
          handleOpenCodePopup(`version: '3'
services:
  rabbitmq:
    image: rabbitmq:3-management
    container_name: rabbitmq
    ports:
      - "5672:5672"      # RabbitMQ main port
      - "15672:15672"    # Management UI port
    environment:
      RABBITMQ_DEFAULT_USER: guest
      RABBITMQ_DEFAULT_PASS: guest`)
        }
      >docker-compose.yml</button>


        {/* Text Popup */}
        {isOpen && (
        <div className="popup-overlay" onClick={handleClosePopup}>
            <div className="popup-content scrollable-popup" onClick={(e) => e.stopPropagation()}>
            <div className="popup-text">{popupContent}</div>
            </div>
        </div>
        )}

        {/* Code Popup */}
        {isCodeOpen && (
        <div className="popup-overlay" onClick={handleClosePopup}>
            <div className="popup-content scrollable-popup" onClick={(e) => e.stopPropagation()}>
            <pre className="popup-code">
                <code>{popupContent}</code>
            </pre>
            </div>
        </div>
        )}
      
    </div>
  );
}
