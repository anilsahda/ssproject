import '../index.css';
import { useState } from 'react';

export default function AzureServiceBus() {
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
          handleOpenPopup(`Azure Service Bus is a fully managed enterprise message broker with message queues and publish-subscribe topics.
            There are 2 messaging models supported by Azure Service Bus: Queues (point-to-point) and Topics/Subscriptions (publish-subscribe)`)
        }
      >Service Bus</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`DLQ is a sub-queue used to hold messages that can't be delivered or processed. Common reasons are:
Message time-to-live (TTL) expired
Max delivery count exceeded
Filter or processing error`)
        }
      >DLQ</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Topic acts like a queue but supports multiple listeners.`)
        }
      >Topic</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Subscription is a virtual queue that receives a copy of each message sent to the topic.`)
        }
      >Subscription</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Service Bus Session is a feature that enables FIFO and stateful processing across messages. Messages with the same SessionId are grouped and handled sequentially.`)
        }
      >Service Bus Session</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`PeekLock: Two-step receive. Locks the message for processing. Safer.
ReceiveAndDelete: One-step receive. Deletes immediately after reading.`)
        }
      >PeekLock vs ReceiveAndDelete</button>
      
      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`If DuplicateDetectionHistoryTimeWindow is enabled, Service Bus uses the MessageId to detect and discard duplicates within the window (up to 7 days).`)
        }
      >Duplicate Detection</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Auto Forwarding automatically forward messages from one queue or subscription to another within the same namespace.`)
        }
      >Auto Forwarding</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Basic – Only queues
Standard – Queues and Topics
Premium – Dedicated resources, better performance, virtual network integration`)
        }
      >Pricing Tiers</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`We can improve message throughput in Azure Service Bus like:
Enable partitioning
Use batched sends
Use asynchronous send/receive
Scale with Premium tier`)
        }
      >Improve Message Throughput</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Messages can be deferred for later processing. A message is set aside and retrieved by its sequence number when needed.`)
        }
      >Message Deferral</button>

       <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Poison messages can be handled in Azure Service Bus like:
            Using DLQ to store them
Monitor DLQs and move or delete bad messages manually or via code`)
        }
      >Handle Poison Messages</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`The maximum message size in Azure Service Bus are:
Standard Tier: 256 KB
Premium Tier: 1 MB`)
        }
      >Max Message Size</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Partitioning allows messages to be stored across multiple message brokers, improving availability and scalability.`)
        }
      >Partitioning</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Message Lock prevents other receivers from processing the same message and the default time is 30 seconds (extendable up to 5 minutes)`)
        }
      >Message Lock</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`ScheduledEnqueueTimeUtc is use to deliver message at a specific time in the future`)
        }
      >ScheduledEnqueueTimeUtc</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`We use Sessions with a consistent SessionId to handle message ordering.`)
        }
      >Message Ordering</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`QuotaExceededException	message or size limit reached. It can be fixed using increase quota, remove messages
ServerBusyException when throttling. It can be fixed using retry with exponential backoff.
MessageLockLostException when lock expired. It can be fixed using	 RenewLock or process faster.
UnauthorizedAccessException when wrong SAS or AAD permission. It can be fixed using	validate credentials/roles.`)
        }
      >Common Errors</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(`Azure Monitor
Application Insights
Service Bus Explorer`)
        }
      >Monitor Service Bus</button>
    <br />
<button
  className="btn btn-success me-2 mb-2"
  onClick={() =>
    handleOpenCodePopup(`const { ServiceBusClient } = require("@azure/service-bus");

const connectionString = "<YOUR_SERVICE_BUS_CONNECTION_STRING>";
const topicName1 = "user-events1";
const topicName2 = "user-events2";

const sbClient = new ServiceBusClient(connectionString);
const sender1 = sbClient.createSender(topicName1);
const sender2 = sbClient.createSender(topicName2);

const run = async () => {
  setInterval(async () => {
    const event1 = { userId: 2, action: "hi, how r u?" };
    const event2 = { userId: 1, action: "login" };

    try {
      await sender1.sendMessages({ body: JSON.stringify(event1) });
      await sender2.sendMessages({ body: JSON.stringify(event2) });

      console.log("Produced messages to Azure Service Bus");
    } catch (err) {
      console.error("Error sending messages:", err);
    }
  }, 2000);
};

run().catch(console.error);`)
  }
>
  producer.js
</button>

      <button
  className="btn btn-success me-2 mb-2"
  onClick={() =>
    handleOpenCodePopup(`const { ServiceBusClient } = require("@azure/service-bus");

const connectionString = "<YOUR_SERVICE_BUS_CONNECTION_STRING>";
const topicName = "user-events1";
const subscriptionName = "analytics-subscription";

const sbClient = new ServiceBusClient(connectionString);
const receiver = sbClient.createReceiver(topicName, subscriptionName);

const run = async () => {
  receiver.subscribe({
    processMessage: async (message) => {
      console.log("📊 Analytics received:", message.body);
    },
    processError: async (err) => {
      console.error("❌ Error receiving message:", err);
    },
  });

  // Keeps the process alive to keep receiving
  console.log("Listening for messages...");
};

run().catch(console.error);`)
  }
>
  consumerA.js
</button>

<button
  className="btn btn-success me-2 mb-2"
  onClick={() =>
    handleOpenCodePopup(`const { ServiceBusClient } = require("@azure/service-bus");

const connectionString = "<YOUR_SERVICE_BUS_CONNECTION_STRING>";
const topicName = "user-events2";
const subscriptionName = "email-subscription";

const sbClient = new ServiceBusClient(connectionString);
const receiver = sbClient.createReceiver(topicName, subscriptionName);

const run = async () => {
  receiver.subscribe({
    processMessage: async (message) => {
      console.log("📧 Email service triggered:", message.body);
    },
    processError: async (err) => {
      console.error("❌ Error receiving message:", err);
    },
  });

  console.log("Email service listening for messages...");
};

run().catch(console.error);`)
  }
>
  consumerB.js
</button>


<button
  className="btn btn-success me-2 mb-2"
  onClick={() =>
    handleOpenCodePopup(`# Azure Service Bus is fully managed — no Docker setup required.

# Instead of running Kafka and Zookeeper locally, you:
# 1. Create a Service Bus Namespace in Azure.
# 2. Create Topics (e.g., user-events1, user-events2).
# 3. Create Subscriptions (e.g., analytics-subscription, email-subscription).

# CLI Example to set it up using Azure CLI:

# Log in to Azure
az login

# Create a resource group (if needed)
az group create --name myResourceGroup --location eastus

# Create a Service Bus namespace
az servicebus namespace create --name myServiceBusNamespace --resource-group myResourceGroup --location eastus --sku Standard

# Create topics
az servicebus topic create --name user-events1 --namespace-name myServiceBusNamespace --resource-group myResourceGroup
az servicebus topic create --name user-events2 --namespace-name myServiceBusNamespace --resource-group myResourceGroup

# Create subscriptions
az servicebus subscription create --resource-group myResourceGroup --namespace-name myServiceBusNamespace --topic-name user-events1 --name analytics-subscription
az servicebus subscription create --resource-group myResourceGroup --namespace-name myServiceBusNamespace --topic-name user-events2 --name email-subscription

# Done. Use connection string from Azure portal in your code.
`)
  }
>
  docker-compose.yml
</button>

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
