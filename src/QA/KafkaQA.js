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
          handleOpenPopup(<p>My name is Amit Kumar. I have around 14 years of experience in designing and implementing enterprise applications using both monolithic and microservice architectures. I have worked on greenfield projects as well as enhancing and modernizing existing systems across multiple domains.<br /><br />
My core expertise in the Microsoft technology like Node JS, .NET Core, C#, MVC, WCF, Web API and Microservices. I strongly focus on writing clean, maintainable, and scalable code while following SOLID principles, design patterns, and industry best practices.<br /><br />
I have hands-on experience with multiple databases like SQL Server, MySQL, Oracle, PostgreSQL, MongoDB, and DynamoDB. On the cloud side, I have worked with both Azure and AWS, designing and deploying cloud-native solutions using CI/CD pipelines.<br /><br />
In frontend, I have experience in Next, React, Angular and Vue JS which helps me contribute effectively to full-stack solution design. I have also implemented event-driven architectures using messaging systems like RabbitMQ, Kafka, and Azure Service Bus.<br /><br />
I’ve worked in domains such as Healthcare, Banking, E-Commerce, Insurance, Loan Applications and Shipment Management.<br /> <br />
My responsibilities include 70% of my role is focused on coding, architecture design, and making technical decisions, and the remaining 30% involves client interaction, requirement analysis, and leading development teams.<br /><br />
I am always eagar to learn and adapt new technologies, and I enjoy solving complex business problems through thoughtful architecture and technical leadership.</p>)
        }
      >Architect</button>
      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>I am a results-driven .NET Individual Contributor with extensive experience in designing, developing, and maintaining scalable, high-performance enterprise applications using ASP.NET Core, C#, and RESTful Web APIs. I have hands-on expertise in designing and developing backend systems that follow clean architecture, SOLID principles, and industry best practices.<br /><br />
As an individual contributor, I take full ownership of end-to-end development and independently handle the complete software development lifecycle, including requirement understanding, technical design, development, unit testing, performance optimization, and production support. I am comfortable taking ownership of complex modules and delivering high-quality, maintainable code with minimal supervision.<br /><br />
I have worked extensively with microservices-based architectures, integrating services through APIs and message-driven communication. My experience includes working with SQL Server, implementing efficient data access strategies, and ensuring application security, scalability, and reliability.<br /><br />
I also have practical exposure to cloud platforms such as AWS and Azure, CI/CD pipelines, logging, monitoring, and application performance tuning. I collaborate closely with cross-functional teams—including frontend developers, QA, product owners, and architects—to ensure timely and successful delivery of business-critical solutions.<br /><br />
I am always eagar to learn and adapt new technologies, and I enjoy solving complex business problems through thoughtful architecture and technical leadership.
</p>)
        }
      >Indivisual Contributor</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>I have a small family</strong> with my wife and a 9-year-old child. I am the youngest in my family and have four brothers and two sisters.<br />
<strong>My eldest</strong> brother is a Mechanical Engineer living in Mumbai. My second brother is a Civil Engineer based in Gujarat. Another brother works in a government job and lives with my father in a rural area. Both my sisters are married; one lives in Kolkata and the other in Jharkhand.<br />
<strong>My wife</strong> is self-employed and runs paying guest accommodations in Mohali and Dehradun. She manages the day-to-day operations, which include onboarding tenants, handling bookings, managing staff, and taking care of food and accommodation arrangements. She also looks after rent collection, utility management, and maintaining a safe and comfortable environment for working professionals and students. Through this business, she independently handles operations and ensures smooth functioning at both locations.<br />
<strong>Our child</strong> is currently studying in the 3rd standard. We actively focus on providing a good learning environment and supporting academic as well as overall development, including extracurricular activities. <br />
<strong>My father</strong> works as a government contractor and is associated with the Public Works Department (PWD). His primary responsibility is executing government-awarded road construction projects. This includes activities such as building new roads, widening existing roads, repairing damaged roads, and maintaining road infrastructure.<br />
<strong>He manages</strong> the complete project lifecycle—from participating in government tenders and planning the work to supervising on-site execution. His role involves coordinating with engineers, labor teams, and suppliers to ensure that projects are completed according to government specifications, safety standards, and timelines. He is also responsible for quality control, compliance with regulations, and timely delivery of the projects.</p>)
        }
      >Family</button>


      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>One of my major achievements</strong> was migrating a large monolithic .NET application into a microservices-based architecture on AWS. Earlier, the application was tightly coupled, difficult to scale, and costly to maintain. I designed the microservices approach, broke down the modules based on business domains, and deployed them using AWS services. Because of this migration, we were able to scale only the required services instead of the entire application, which helped us reduce operational and infrastructure costs by nearly 30%. It also improved system stability and made deployments much faster.<br />
<strong>Another key</strong> achievement was optimizing an API-driven application using AWS Lambda and DynamoDB. The earlier system was hosted on traditional servers and had performance issues during peak traffic. I redesigned the APIs to be serverless, optimized database access patterns, and reduced unnecessary calls. As a result, the API response time improved by around 40%, and the application handled traffic spikes very smoothly without manual intervention.<br />
<strong>I also designed</strong> and implemented a secure and scalable CI/CD pipeline. Earlier, deployments were mostly manual and error-prone. I automated the build, test, and deployment process using CI/CD best practices, added security checks, and proper rollback mechanisms. This significantly improved deployment speed and reduced production failures by almost 60%, which increased team confidence and release quality.<br />
<strong>Along with</strong> technical contributions, I led a team of 5 developers during a cloud modernization project. I was involved in architecture decisions, task planning, code reviews, and mentoring junior developers. I ensured clear communication with stakeholders and proper tracking of deliverables. Because of good planning and teamwork, we delivered the project ahead of schedule and within budget, while maintaining high code quality and performance.<br />
<strong>Overall</strong>, these achievements show my ability to handle both hands-on technical work and team leadership, especially in cloud and modern application architectures.</p>)
        }
      >Achievement</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>One of the biggest challenges</strong> I faced in my previous project was migrating a legacy monolithic application to a microservices-based architecture without disturbing ongoing business operations. The application was already live and actively used by customers, so even a small downtime or data issue could have created serious business impact.<br />
<strong>The main challenge</strong> was ensuring a smooth transition, meaning there should be no service disruption, no major delays, and no data inconsistency while moving from the old system to the new one. Since the monolithic system was tightly coupled, breaking it into microservices had to be done very carefully.<br />
<strong>To handle this</strong>, I first worked closely with business stakeholders, product owners, and the operations team to understand critical workflows and peak usage times. Based on this, I created a step-by-step migration plan instead of doing a big-bang release. We identified low-risk modules first and migrated them gradually.<br />
<strong>From a technical</strong> side, I implemented an API Gateway to manage communication between the existing monolith and the new microservices. This helped us route traffic smoothly and control which requests should go to the old system and which to the new services.<br />
<strong>To maintain data</strong> consistency across systems, I used an event-driven architecture. Whenever data was created or updated, events were published so that all dependent services stayed in sync in real time. This approach reduced tight coupling and ensured data reliability during the transition phase.<br />
<strong>I also focused</strong> heavily on testing and monitoring. We performed extensive unit testing, integration testing, and parallel runs where both systems worked together. Proper logging and alerts were added so that issues could be detected early.<br />
<strong>Because of careful</strong> planning, collaboration, and following best practices, we completed the migration with minimal downtime and no major business impact. The system became more scalable, easier to maintain, and ready for future enhancements. This experience really strengthened my skills in system design, risk management, and stakeholder coordination.</p>)
        }
      >Chalenge</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Comman Chalenges in Project</strong><br />I believe open communication is key to resolving conflicts. First, I try to understand each perspective by actively listening. If it’s a technical disagreement, I encourage data-driven discussions and proof-of-concept implementations to determine the best approach. If it’s a personal conflict, I mediate and find common ground that aligns with the team's goals. My goal is to create a supportive and productive workplace where everyone feels like valued and everyone's opinions, concerns and ideas are listened carefully and acknowledged.<br />
<strong>Common Challenges in Mentoring</strong><br />
Some team members may not take feedback well or feel defensive Frame feedback as collaborative improvement rather than criticism. Use real examples to show the impact of their code/design. Encourage self-review before submitting work.<br />
Skill Gaps & Learning Curve Some engineers may struggle to learn advanced concepts. Break down complex ideas into smaller, digestible parts. Use real-world examples and analogies to explain architecture and design patterns. Assign progressive tasks to build confidence gradually.<br />
Lack of Ownership & Initiative Some developers wait for instructions instead of taking initiative. Encourage critical thinking by asking: How would you solve this problem? instead of giving solutions immediately. Assign ownership of a module so they feel accountable. Recognize small wins to motivate them.</p>)
        }
      >Conflict</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p>Yes, there was a time when I had a different technical opinion on an approach proposed by my lead. Instead of directly opposing the idea, I conducted research and prepared a proof-of-concept to demonstrate my perspective. I then presented my findings in a collaborative discussion, highlighting the pros and cons of both approaches. At the end, we combined aspects of both solutions, leading to a more efficient implementation. I believe respectful discussions lead to better decision-making and learning opportunities for both sides.</p>)
        }
      >Disagree with Manager</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>When it comes to prioritizing tasks</strong>, I mainly follow Agile methodologies, because they help me stay flexible while still focusing on business goals. First of all, I try to clearly understand the business impact of each task. I always ask myself which task will give maximum value to the customer or business, and I prioritize those items first.<br />
<strong>For complex</strong> or large projects, I don’t try to do everything at once. Instead, I break the work into smaller, manageable milestones and user stories. This makes the work easier to track, reduces risk, and helps the team deliver value continuously rather than waiting till the end.<br />
<strong>I also work</strong> very closely with stakeholders, product owners, and team members. We regularly discuss priorities during sprint planning, daily stand-ups, and review meetings. If there is any change in business requirement or urgency, I realign the priorities quickly so the team is always working on the most important tasks.<br />
<strong>To manage</strong> and track work effectively, I use tools like Jira or Trello. These tools help me visualize the backlog, track progress, identify blockers early, and ensure nothing is missed. I also use them to monitor deadlines and workload distribution across the team.<br />
<strong>At the same</strong> time, I never compromise on quality. Even when deadlines are tight, I make sure proper code reviews, testing, and documentation are followed. If required, I discuss trade-offs transparently with stakeholders instead of taking shortcuts.<br />
<strong>Overall</strong>, my approach to task prioritization is a balance of business value, technical feasibility, and team capacity, which helps in delivering projects on time while maintaining high quality.</p>)
        }
      >Prioritize Task</button>

      <button className="btn btn-primary me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Based on feedback</strong> from my managers and teammates, people generally see me as someone with strong problem-solving skills. Whenever there is a complex technical issue or production problem, I try to first understand the root cause instead of applying quick fixes. I analyze logs, review code, and think from both technical and business perspectives before proposing a solution.<br />
<strong>I am also</strong> known for maintaining good code quality. I follow coding standards, write clean and readable code, and focus on proper design and reusability. I believe that good code reduces future maintenance effort, so I pay attention to reviews, testing, and documentation.<br />
<strong>Many people</strong> consider me a quick learner. When I am exposed to a new technology, tool, or domain, I make it a point to learn it quickly and apply it practically in the project. This helps the team adapt faster to changing requirements and technologies.<br />
<strong>I am seen</strong> as a team player who collaborates well with others. I actively participate in discussions, support team members when they are stuck, and share knowledge whenever possible. I believe good teamwork is key to successful project delivery.<br />
<strong>Finally</strong>, I take ownership and responsibility for my work. Once a task is assigned to me, I make sure it is completed end-to-end, including design, implementation, testing, and post-deployment support. If there is any issue, I don’t blame others—I take responsibility and work towards fixing it.<br />
<strong>Overall</strong>, people see me as someone reliable, technically strong, and easy to work with.</p>)
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
          handleOpenPopup(<p><strong>Unexpected Downtime & Critical Failures</strong> Follow a structured debugging approach: Reproduce the issue (logs, monitoring tools, customer reports). Analyze root cause (database, API failures, infrastructure). Fix & validate (test in staging before deploying). Prevent recurrence (add monitoring, improve logging, automate alerts). Conduct post-mortem analysis to document learnings.<br />
<strong>Performance Bottlenecks in Production Issue</strong>: Slow response times, memory leaks, or high CPU usage. Use profiling tools (New Relic, Prometheus, Dynatrace) to identify bottlenecks. Optimize database queries, caching strategies, and API calls. Scale horizontally (microservices, load balancing) if needed.<br />
<strong>Rollback & Deployment Failures Issue</strong>: A new release breaks existing functionality. Solution: Implement blue-green deployments or canary releases. Use feature flags to disable new features instantly if issues arise. Always have a rollback strategy and automated deployment pipelines.</p>)
        }
      >Prod Issues & High Level Presser</button><br />

<button className="btn btn-danger me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>High-Traffic Digital Media Platform</strong> I’m currently working on Daily Star UK, a high-traffic digital media publishing platform that serves millions of users daily, supporting real-time content publishing and very high read/write traffic, especially during breaking news.<br />
The content publication workflow is event-driven. Journalists create or update articles in the CUE CMS, which triggers events to an Event System. These events are processed by the E2A service, which retrieves article data from CUE, transforms it into a standardized Agnostic JSON format, and stores it in AWS S3. Any subsequent updates follow the same process, ensuring content consistency and version control across distribution channels.<br />
To handle scale and performance, we use AWS cloud infrastructure, horizontal scaling, Redis caching, and CDN integration to manage traffic spikes. We rely on Kafka for asynchronous processing such as publishing workflows and analytics. Data is managed using SQL Server for transactional data and MongoDB for content and metadata.<br />
For website delivery, Navigator Web uses YAML-based configuration files stored in S3. These configurations are managed through Commander, a centralized configuration management tool that converts YAML into JSON and stores it in Redis, allowing teams to update website-level configurations quickly without requiring a full code release.<br />
My responsibilities include defining service boundaries, developing and reviewing critical code, optimizing APIs, ensuring security and high availability, and mentoring developers, while closely collaborating with product teams, editors, and stakeholders to deliver scalable and reliable solutions.
    </p>
  )
}>
  Publishing
</button>
<button className="btn btn-danger me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Healthcare</strong><br />
Client: US Client<br />
Domain: Healthcare & Health Information Systems<br />
Technologies: .NET Core Microservices, REST APIs, Azure, Blobstorage, SQL Server, MongoDB<br />

<strong>Description</strong><br />
I worked on a Healthcare Management System. The platform is designed to manage patient information, provider workflows, appointments, billing, and integrations with external healthcare systems. The solution is built with a strong focus on scalability, security, and compliance, which are critical requirements in the healthcare domain.<br />
Key Modules & Functionalities are:<br />
<strong>Patient Management</strong><br />
Managed complete patient lifecycle including registration, demographics, and medical history.<br />
Ensured secure handling of sensitive patient data.<br />
Implemented validation and data consistency rules.<br />
<strong>Provider & Clinical Workflow Management</strong><br />
Designed workflows for doctors, nurses, and healthcare staff.<br />
Enabled efficient management of consultations, prescriptions, and clinical notes.<br />
Streamlined provider operations through service-based architecture.<br />
<strong>Appointment & Scheduling Management</strong><br />
Implemented appointment booking, rescheduling, and cancellation.<br />
Handled provider availability and patient notifications.<br />
Ensured optimized scheduling and reduced conflicts.<br />
<strong>Billing & Payments</strong><br />
Developed billing services for consultations, procedures, and services.<br />
Integrated insurance, invoicing, and payment workflows.<br />
Ensured accurate and auditable financial transactions.<br />
<strong>Integration with External Healthcare Systems</strong><br />
Integrated with third-party healthcare systems and external services using REST APIs.<br />
Supported data exchange with labs, pharmacies, and insurance providers.<br />
Ensured secure and reliable inter-system communication.
    </p>
  )
}>
  Healthcare
</button>
<button className="btn btn-danger me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Roadside Assistance Insurance System</strong>  I worked on Roadside Assistance Insurance System, where I serve as a hands-on Lead Engineer. The platform is designed to manage insurance policies, roadside assistance requests, claims processing, customer accounts, and integrations with third-party service providers and payment systems.<br /><br />
From a technical perspective, the system is built using .NET Core with a microservices architecture, with RESTful APIs enabling communication between services. The platform is deployed on Azure to ensure high scalability, availability, and security, as it processes real-time requests across multiple geographies. Data is managed using SQL Server for transactional data and MongoDB for document-based service records and metadata.<br /><br />
My responsibilities include designing and implementing core services, writing and reviewing critical code, ensuring SOLID principles and best practices, and handling performance, security, and fault-tolerance considerations. I also mentor junior developers, guide the team through technical challenges, and work closely with product owners and stakeholders to translate business requirements into scalable, maintainable solutions.<br /><br />
Overall, the project emphasizes real-time processing, scalability, reliability, and regulatory compliance, and my role balances hands-on development with technical leadership and team guidance.
    </p>
  )
}>
  FORTEGRA
</button>
<button className="btn btn-danger me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Shipment</strong> I worked on a Shipment and Logistics platform where I serve as a hands-on Solution Architect. The system is designed to manage shipment tracking, warehouse operations, delivery scheduling, route optimization, and integrations with third-party carriers and tracking services.<br /><br />
From a technical perspective, the platform is built using .NET Core with a microservices architecture, with RESTful APIs enabling communication between services. We leverage AWS and Azure for cloud infrastructure to ensure high scalability, availability, and performance, as shipment systems often handle real-time updates across multiple regions. Data is stored in SQL Server for transactional operations and MongoDB for document-based shipment and logistics data.<br /><br />
My responsibilities include solution and architecture design, defining service boundaries, database design, and implementing core services, keeping me actively involved in hands-on coding. I also lead code reviews, enforce SOLID principles and best practices, and ensure performance, reliability, and security across the system.<br /><br />
On the collaboration side, I work closely with product owners, operations teams, and client stakeholders to understand business requirements and translate them into scalable technical solutions. I also mentor the development team, provide guidance on technical challenges, and ensure smooth delivery across multiple services.<br /><br />
Overall, the project focuses on real-time data processing, scalability, system reliability, and seamless integration with external logistics partners, and my role balances hands-on development with architectural leadership.
    </p>
  )
}>
  Shipment
</button>
<button className="btn btn-danger me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong> Loan Application System</strong> I worked on the DirectAxis Loan Application System as a Lead Developer. The platform manages the end-to-end loan lifecycle, including loan applications, approvals, disbursements, repayments, customer account management, and integrations with credit bureaus and payment gateways.<br /><br />
The system is built using .NET Core with a microservices architecture, with RESTful APIs handling communication between services. We use Azure and AWS for cloud infrastructure to ensure scalability, high availability, and security, and data is stored in SQL Server for transactional operations and MongoDB for document-based data.<br /><br />
As Lead Developer, my responsibilities include designing and implementing core services, writing and reviewing critical code, ensuring best practices and SOLID principles, and optimizing performance, security, and reliability. I also mentor junior developers, guide the team through technical challenges, and collaborate with product owners and business analysts to translate requirements into efficient, maintainable solutions.<br /><br />
Overall, the project emphasizes scalability, reliability, and regulatory compliance, and my role focuses on hands-on development, technical leadership, and team guidance.
    </p>
  )
}>
   Loan App
</button>
<button className="btn btn-danger me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>E-Commerce</strong> I worked on a high-volume E-commerce platform where I serve as a hands-on Solution Architect. The system is designed to manage product catalogs, inventory, orders, payments, user accounts, and integrations with third-party services such as payment gateways and logistics providers.<br /><br />
From a technical perspective, the platform is built using .NET Core with a microservices architecture, with RESTful APIs enabling communication between services. We use Azure and AWS for cloud infrastructure, ensuring scalability, high availability, and reliability during peak traffic, such as sales events or promotions. Data is managed using SQL Server for transactional operations and MongoDB for product metadata and catalog information.<br /><br />
My responsibilities include solution and architecture design, defining service boundaries, database schema design, and implementing core services, keeping me actively involved in hands-on coding. I also lead code reviews, ensure SOLID principles and best practices are followed, and optimize performance and security, which are critical for an E-commerce environment.<br /><br />
On the collaboration side, I work closely with product owners, business analysts, and client stakeholders to understand business requirements and translate them into robust technical solutions. I also mentor the development team, guide them through technical challenges, and ensure smooth delivery across multiple services.<br /><br />
Overall, the project emphasizes scalability, high availability, performance, and secure transaction handling, and my role strikes a balance between hands-on development and architectural leadership.

    </p>
  )
}>
  E-Commerce
</button>
<button className="btn btn-danger me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Insurance</strong> I worked on a comprehensive Insurance platform where I serve as a hands-on Solution Architect. The system is designed to manage policy administration, claims processing, underwriting, customer accounts, and integrations with third-party services such as payment gateways and regulatory systems.<br /><br />
From a technical perspective, the platform is built using .NET Core with a microservices architecture, with RESTful APIs enabling communication between services. We use Azure and AWS for cloud infrastructure to ensure scalability, high availability, and security. Data is managed using SQL Server for transactional operations and MongoDB for document-based data, depending on the type of insurance information.<br /><br />
My responsibilities include solution and architecture design, defining service boundaries, database design, and implementing core services, keeping me actively involved in hands-on coding. I also lead code reviews, ensure adherence to SOLID principles and best practices, and optimize performance, security, and compliance, which are especially critical in the insurance domain.<br /><br />
From a collaboration standpoint, I work closely with product owners, business analysts, and client stakeholders to understand business requirements and translate them into scalable technical solutions. I also mentor the development team, guide them through technical challenges, and ensure smooth delivery across multiple services.<br /><br />
Overall, the project emphasizes scalability, data security, regulatory compliance, and reliable transaction processing, and my role balances hands-on development with architectural leadership.
    </p>
  )
}>
  Insurance
</button>
      <button className="btn btn-info me-2 mb-2" onClick={() =>
          handleOpenPopup(<p><strong>Kafka</strong> is an open-source, distributed data streaming platform used to publish, subscribe to, store, and process real-time data streams. It works like a high-performance message queue, allowing different applications to communicate by sending and receiving messages.<br />
<strong>Kafka Components are:</strong><br />
<strong>Producer</strong> sends messages or events to Kafka and it publishes data to a topic and kafka does not care who consumes the data. For example: Order Service sends OrderCreated events<br />
<strong>Consumer</strong> reads messages from Kafka topics and it belong to consumer groups. Kafka make sure each partition is consumed by only one consumer in a group. For example: Inventory Service consumes OrderCreated events<br />
<strong>Broker</strong> Kafka server that stores topic data and serves producers/consumers.<br /> 
<strong>Cluster</strong> is a group of multiple brokers for scalability.<br />
<strong>Topic</strong> is a logical channel where producers send message and consumers subscribe them and it is divided into partitions to process in parallel.<br />
<strong>Partition</strong> topics are split into partitions for scalability<br />
<strong>ZooKeeper</strong> used for cluster coordination<br /><br />

<strong>Kafka Key Features</strong><br />
<strong>High Throughput</strong> Can handle millions of messages per second. Suitable for big data and real-time systems<br />
<strong>Fault Tolerance</strong> Data is replicated across brokers. If one broker fails, another takes over<br />
<strong>Durability</strong> Messages are written to disk. Data is not lost even if consumers are down<br />
<strong>Scalability</strong> Add more brokers → automatic scaling. Add more partitions → more parallelism<br />
<strong>Loose Coupling</strong> Producers and consumers are independent. New consumers can be added without affecting producers<br />

<strong>Why Kafka is Needed</strong><br />
Traditional systems were struggling with: High-volume data, Real-time processing, Loose coupling between services, Reliability at scale<br />
Kafka solves these problems by: Decoupling producers and consumers, Handling millions of messages per second, Ensuring durability and fault tolerance<br />

<strong>When to Use Kafka</strong><br />
Use Kafka when:<br />
You need real-time data streaming<br />
You want event-driven architecture<br />
Systems need to be decoupled<br />
High throughput and scalability are required<br />
Messages must be durable and replayable<br />

<strong>When NOT to Use Kafka</strong><br />
Simple request-response communication<br />
Low-volume messaging<br />
Strict request ordering across all messages<br />
Very small applications<br />
<strong>Use Cases</strong>: Like collecting app logs, Real-time analytics, Order tracking in e-commerce and Communication between microservices</p>,
`************************ producer.js ************************ 
const { Kafka } = require("kafkajs");

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

run().catch(console.error);

************************ consumerA.js ************************
const { Kafka } = require("kafkajs");

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

run().catch(console.error);

************************ consumerB.js ************************
const { Kafka } = require("kafkajs");

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

run().catch(console.error);

********************** docker-compose.yml ************************
services:
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
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
`)
        }
      >Kafka</button>

<button className="btn btn-info me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>RabbitMQ</strong> is an open-source message broker that enables applications to communicate by sending and receiving messages through queues. It follows the traditional messaging model and is mainly used for reliable, asynchronous communication between systems.<br />

      <strong>RabbitMQ Components are:</strong><br />
      <strong>Producer</strong> sends messages to RabbitMQ exchanges. It does not send messages directly to queues.<br />
      <strong>Consumer</strong> receives messages from queues and processes them asynchronously.<br />
      <strong>Exchange</strong> routes messages to one or more queues based on routing rules. Types include Direct, Topic, Fanout, and Headers.<br />
      <strong>Queue</strong> stores messages until they are consumed. Messages are removed once acknowledged by consumers.<br />
      <strong>Binding</strong> defines the relationship between an exchange and a queue using routing keys.<br />
      <strong>Broker</strong> RabbitMQ server that manages exchanges, queues, and message routing.<br /><br />

      <strong>RabbitMQ Key Features</strong><br />
      <strong>Reliable Messaging</strong> Ensures message delivery using acknowledgements and persistence.<br />
      <strong>Message Routing</strong> Flexible routing using different exchange types.<br />
      <strong>Low Latency</strong> Optimized for fast message delivery.<br />
      <strong>Back Pressure Handling</strong> Queues help absorb traffic spikes.<br />
      <strong>Request-Response Support</strong> Works well for command-based communication.<br />

      <strong>Why RabbitMQ is Needed</strong><br />
      Traditional synchronous communication can cause tight coupling, failures to cascade, and poor scalability.<br />
      RabbitMQ solves this by enabling asynchronous communication, reliable delivery, and loose coupling between producers and consumers.<br /><br />

      <strong>When to Use RabbitMQ</strong><br />
      Use RabbitMQ when:<br />
      You need reliable message delivery<br />
      You need complex routing logic<br />
      You want task queues or background job processing<br />
      Low latency messaging is required<br />
      Request-response or command-based communication is needed<br /><br />

      <strong>When NOT to Use RabbitMQ</strong><br />
      Very high throughput streaming systems<br />
      Event replay or long-term message storage is required<br />
      Real-time analytics pipelines<br /><br />

      <strong>Use Cases</strong>: Task queues, Background job processing, Email/SMS notifications, Payment processing, Microservices communication
    </p>
  )
}>
  RabbitMQ
</button>


<button className="btn btn-info me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Azure Service Bus</strong> is a fully managed enterprise message broker provided by Microsoft Azure. It enables reliable, secure, and asynchronous communication between applications using queues and topics, making it ideal for cloud and enterprise systems.<br />

      <strong>Azure Service Bus Components are:</strong><br />
      <strong>Producer (Sender)</strong> sends messages to queues or topics. It does not need to know who consumes the messages.<br />
      <strong>Consumer (Receiver)</strong> receives messages from queues or topic subscriptions and processes them asynchronously.<br />
      <strong>Queue</strong> stores messages in a FIFO manner and delivers each message to a single consumer.<br />
      <strong>Topic</strong> is used for publish-subscribe messaging where multiple subscriptions can receive the same message.<br />
      <strong>Subscription</strong> is a virtual queue attached to a topic that receives messages based on filters.<br />
      <strong>Broker</strong> Azure-managed service that handles message storage, delivery, and security.<br /><br />

      <strong>Azure Service Bus Key Features</strong><br />
      <strong>Reliable Messaging</strong> Supports at-least-once delivery with message locks and acknowledgements.<br />
      <strong>Dead-Letter Queue</strong> Automatically stores failed or expired messages for later analysis.<br />
      <strong>Message Scheduling</strong> Allows messages to be delivered at a future time.<br />
      <strong>Duplicate Detection</strong> Prevents processing the same message multiple times.<br />
      <strong>Security</strong> Integrated with Azure Active Directory and role-based access control.<br />

      <strong>Why Azure Service Bus is Needed</strong><br />
      In distributed and cloud-based systems, direct communication can cause tight coupling and reliability issues.<br />
      Azure Service Bus enables asynchronous, reliable messaging with built-in security, scalability, and fault handling.<br /><br />

      <strong>When to Use Azure Service Bus</strong><br />
      Use Azure Service Bus when:<br />
      You need enterprise-grade messaging<br />
      Guaranteed message delivery is required<br />
      Publish-subscribe communication is needed<br />
      Azure-native integration is preferred<br />
      Message ordering and transactions are important<br /><br />

      <strong>When NOT to Use Azure Service Bus</strong><br />
      Extremely high-throughput event streaming systems<br />
      Long-term message storage or replay is required<br />
      Real-time analytics pipelines<br /><br />

      <strong>Use Cases</strong>: Order processing, Payment workflows, Inventory updates, Microservices communication, Event-driven enterprise applications
    </p>
  )
}>
  Service Bus
</button>

<button className="btn btn-info me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Amazon SQS (Simple Queue Service)</strong> is a fully managed message queuing service provided by AWS. It enables applications to decouple and scale by sending, storing, and receiving messages between distributed components without managing messaging infrastructure.<br />

      <strong>Amazon SQS Components are:</strong><br />
      <strong>Producer (Sender)</strong> sends messages to an SQS queue. It does not need to know who consumes the messages.<br />
      <strong>Consumer (Receiver)</strong> polls messages from the queue and processes them asynchronously.<br />
      <strong>Queue</strong> stores messages until they are processed and deleted by consumers.<br />
      <strong>Standard Queue</strong> provides at-least-once delivery with high throughput and best-effort ordering.<br />
      <strong>FIFO Queue</strong> guarantees exactly-once processing and strict message ordering.<br />
      <strong>AWS Managed Service</strong> SQS is fully managed by AWS, so no broker or server management is required.<br /><br />

      <strong>Amazon SQS Key Features</strong><br />
      <strong>Fully Managed</strong> No servers, brokers, or cluster management required.<br />
      <strong>Scalability</strong> Automatically scales to handle any message volume.<br />
      <strong>Reliability</strong> Messages are stored redundantly across multiple AZs.<br />
      <strong>Dead-Letter Queue</strong> Captures messages that fail processing after multiple retries.<br />
      <strong>Security</strong> Integrated with IAM for fine-grained access control.<br />

      <strong>Why Amazon SQS is Needed</strong><br />
      Direct communication between services can cause tight coupling and cascading failures.<br />
      SQS enables asynchronous communication, improves fault tolerance, and allows systems to scale independently.<br /><br />

      <strong>When to Use Amazon SQS</strong><br />
      Use Amazon SQS when:<br />
      You want a fully managed queue with minimal operational overhead<br />
      You need reliable asynchronous processing<br />
      You want to decouple microservices or distributed systems<br />
      You are building AWS-native applications<br />
      Message ordering or exactly-once processing is required (FIFO queues)<br /><br />

      <strong>When NOT to Use Amazon SQS</strong><br />
      Event streaming or real-time analytics pipelines<br />
      Message replay or long-term retention is required<br />
      Complex message routing is needed (use SNS or EventBridge)<br /><br />

      <strong>Use Cases</strong>: Background job processing, Order processing, Payment workflows, Image or file processing, Microservices communication
    </p>
  )
}>
  SQS
</button>
<br />

<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Caching for High Performance</strong><br />
<strong>Scenario</strong> Your app experiences high read traffic on the same data.<br />
<strong>Question</strong> How would you implement cloud caching solutions to reduce latency and database load?<br />
For an app with high read traffic on the same data, I would implement caching to reduce latency and database load.<br />
First, I will use an in-memory cache like Redis or Memcached to store frequently accessed data such as product lists, user profiles, or session info. This reduces repeated database hits.<br />
Next, I will decide the cache strategy—for example, write-through or read-through so cache stays consistent with the database. I can also use time-to-live (TTL) to refresh data periodically.<br />
For cloud, I will use managed caching services so scaling is automatic and highly available. For global users, I can also use CDNs to cache static content like images, JS, and CSS closer to users.<br />
Finally, I will monitor cache hit/miss ratios and performance metrics to optimize caching and avoid stale or unnecessary data.<br />
Overall, by using in-memory caching, proper eviction policies, TTL, CDN for static content, and monitoring, we can drastically reduce latency and database load while keeping the app fast under high traffic.
    </p>
  )
}>
Caching for High Performance
</button>

<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>CAP Theorem</strong><br />
      <strong>Question</strong>: What is CAP theorem and how does it influence your architecture decisions?<br />
CAP theorem says that in a distributed system, we can only fully guarantee two out of three things: Consistency, Availability, and Partition Tolerance.<br />
Consistency means all users see the same data at the same time<br />
Availability means system always responds, even if data is slightly outdated<br />
Partition Tolerance means system continues working even if network failure happens<br />
In real-world distributed systems, partition tolerance is mandatory, so the real choice is between Consistency and Availability.<br />
In architecture decisions, I choose based on business requirement.<br />
For example, in banking or payments, consistency is more important, so I design CP systems like traditional SQL or strongly consistent databases.<br />
For systems like social media, product catalogs, or logging, availability is more important, so I go for AP systems like Cassandra or DynamoDB, where eventual consistency is acceptable.<br />
So CAP theorem helps me make conscious trade-offs and design systems that match business expectations, not over-engineer blindly.
    </p>
  )
}>
CAP Theorem
</button>
<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Appropriate Cloud Service</strong><br />
      <strong>Question</strong>: How do you select the appropriate cloud service (aws, azure, gcp) for given solution ?<br />
First I try to understand the business requirement, not the cloud name. I ask questions like: what kind of application it is, expected traffic, data sensitivity, budget, and timeline.<br />
Then I check existing ecosystem. If client is already using Microsoft tools like Windows Server, Active Directory, Office 365, then Azure makes more sense. If they are already on Linux, open-source stack, or need strong DevOps and startup-friendly services, AWS is usually preferred. If requirement is heavy on data analytics, AI/ML, or BigQuery-type workloads, then GCP is a good fit.<br />
Next I compare core services needed—compute, storage, database, networking—and see which cloud gives best managed services for that use case. For example, serverless → AWS Lambda / Azure Functions / GCP Cloud Functions.<br />
I also consider cost and pricing model, region availability, compliance (like GDPR, ISO), and support level.<br />
Finally, I look at team skillset. If team already has experience in one cloud, choosing that reduces risk and delivery time.<br />
So overall, I don’t select cloud emotionally—I select it based on business need, technical fit, cost, and team capability.
    </p>
  )
}>
Choose Cloud
</button>

<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Choosing the Right Message Broker</strong><br />
      <strong>Scenario</strong>: Your system needs asynchronous processing across .NET and Node.js services.<br />
      <strong>Question</strong>: Would you choose RabbitMQ, Kafka, or SQS, and why?<br />
For asynchronous processing across .NET and Node.js services, I would choose the message broker based on use case and delivery guarantees.<br />
If I need simple, reliable task queues with easy setup and support for multiple languages, I would go with RabbitMQ. It’s great for request/response patterns and smaller scale async jobs.<br />
If the system requires high throughput, event streaming, and replay of messages, I would choose Kafka. Kafka is better for analytics pipelines or cases where multiple consumers need to process the same events.<br />
If I want a fully managed, serverless option with minimal operational overhead on AWS, I could use SQS. It handles scaling automatically and integrates well with other AWS services.<br />
In short, for most multi-language microservice async jobs, I prefer RabbitMQ for simplicity, Kafka for high-volume streaming, and SQS for managed cloud integration, depending on requirements.
    </p>
  )
}>
Choose Message Broker
</button>
<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>SQL vs NoSQL</strong><br />
      <strong>Question</strong>: How do handle data storage decisions, such as sql vs nosql databases?<br />
When handling data storage decisions like SQL vs NoSQL, first I clearly understand the data nature and access pattern.<br />
If data is structured, needs strong relationships, joins, and ACID transactions—like finance, orders, billing—then I prefer SQL databases such as MySQL, PostgreSQL, or SQL Server.<br />
If data is semi-structured or unstructured, schema changes frequently, or application needs high scalability and low latency—like logs, user activity, IoT, or large-scale apps—then NoSQL like MongoDB, DynamoDB, or Cassandra is better.<br />
I also check read/write pattern. For complex queries → SQL. For high-volume reads/writes → NoSQL.<br />
Then I consider scalability, cost, and cloud-native options, and sometimes we even use polyglot persistence, meaning SQL for core transactions and NoSQL for analytics or caching.<br />
So decision is always based on use case, consistency needs, scalability, and future growth, not just database popularity.
    </p>
  )
}>
Choose SQL vs NoSQL
</button>

<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Choose React vs Angualar</strong><br />
      <strong>Question</strong>: How do you handle frontend technology decisions, such as Angular vs React?<br />
When handling frontend technology decisions, first I clearly understand the application requirements and complexity.<br />
If the application is large-scale, enterprise-level, with complex workflows, role-based access, and long-term maintainability, then I prefer Angular because it is a complete framework with built-in features like routing, form handling, validation, dependency injection, and strong TypeScript support.<br />
If the application needs highly dynamic UI, better performance, and faster development, especially for dashboards, SPAs, or customer-facing products, then React is a better choice. React’s component-based architecture, virtual DOM, and flexibility make it suitable for scalable and responsive user interfaces.<br />
I also consider the team skill set and learning curve. Angular has a steeper learning curve but enforces structure, while React is more flexible and easier for teams to adopt.<br />
Then I evaluate performance, SEO needs, and future scalability. For SEO-heavy applications, I consider Next.js with React for server-side rendering. For mobile-first or cross-platform needs, I evaluate options like React Native.<br />
In some cases, we follow a hybrid approach, where Angular is used for admin or internal portals, and React is used for customer-facing modules.<br />
So the frontend decision is always based on application size, performance requirements, team expertise, maintainability, and long-term scalability, not just framework popularity.
    </p>
  )
}>
Choose React vs Angualar
</button>

<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>CI/CD for Polyglot Stack (.NET + MERN/MEAN)</strong><br />
<strong>Scenario</strong> Your solution includes .NET backend services and React/Angular frontends.<br />
<strong>Question</strong> How would you design a CI/CD pipeline that supports all technologies?<br />
Since the solution has .NET backend and React/Angular frontend, I will design a polyglot CI/CD pipeline that handles both efficiently.<br />
First, I will have separate build and test stages for each technology. For .NET, build and run unit/integration tests, and for React/Angular, run npm install, build, and test. After successful builds, I will create artifacts like Docker images or static bundles and store them in a central artifact repository.<br />
Next, I will use Infrastructure as Code with Terraform or Bicep to provision environments consistently, so staging, QA, and production are reproducible.<br />
For deployments, I will promote artifacts through environments—Dev → QA → Staging → Production—using automated pipelines. To reduce risk during production deployment, I will use blue-green or canary deployments, so only a part of traffic hits the new version initially, and rollback is easy if something goes wrong.<br />
Overall, this CI/CD approach ensures fast, reliable, and consistent deployments across multiple technologies without manual errors.
    </p>
  )
}>
CI/CD for Polyglot Stack
</button>

<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>CI/CD Pipeline in Cloud</strong><br />
<strong>Scenario</strong> Multiple microservices need frequent deployments.<br />
<strong>Question</strong> How would you design CI/CD pipelines for automated, safe releases?<br />
For multiple microservices needing frequent deployments, I will design a fully automated CI/CD pipeline to make releases safe and fast.<br />
First, each microservice will have its own build and test pipeline. For example, .NET services will run unit and integration tests, while Node.js/React services will run npm build and tests. Successful builds will produce artifacts or Docker images stored in a central repository.<br />
Next, I will use Infrastructure as Code with Terraform or Bicep to provision environments consistently—Dev, QA, Staging, Production. This ensures deployments are predictable and repeatable.<br />
For deployment, I will use blue-green or canary strategies. Traffic is gradually shifted to new versions so any issues can be rolled back quickly without affecting users.<br />
Finally, I will add automated monitoring, alerts, and rollback triggers to make sure failures are detected early. Pipelines will also support parallel deployments for independent microservices to save time.<br />
Overall, by combining independent pipelines, artifact management, IaC, blue-green/canary deployment, and monitoring, the system can release microservices safely and frequently.
    </p>
  )
}>
CI/CD Pipeline in Cloud
</button>
<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Cloud Cost Optimization</strong><br />
<strong>Scenario</strong> Your cloud bill has increased by 40% over 3 months.<br />
<strong>Question</strong> How would you analyze and reduce cloud costs without impacting performance?<br />
First, I will analyze where the cost is increasing using cloud cost management and monitoring tools. I will break down the bill by services like compute, storage, database, and network to find major cost contributors.<br />
Next, I will do rightsizing of resources. Many VMs or containers are usually over-provisioned. Based on CPU, memory, and usage metrics, I will downsize instances or reduce replica counts without affecting performance.<br />
Then, I will review auto-scaling policies. Instead of running high capacity all the time, I will ensure scaling happens only during peak load and scales down properly during low traffic.<br />
For predictable workloads, I will use Reserved Instances or Savings Plans to reduce compute costs significantly compared to on-demand pricing.<br />
On the storage side, I will enable storage tiering, moving infrequently accessed data to cheaper tiers like cold or archive storage.<br />
Finally, I will improve observability and monitoring by setting up cost alerts, usage dashboards, and regular cost reviews. This helps catch cost issues early before they grow.<br />
Overall, by combining rightsizing, smart auto-scaling, long-term reservations, storage optimization, and continuous monitoring, I can reduce cloud costs without impacting system performance.
    </p>
  )
}>
Cloud Cost Optimization
</button>
<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Code Review</strong><br /> 
      As a Lead Engineer, code review is a process where I review team members’ code to make sure it is correct, clean, secure, and maintainable before it goes to production.<br />
Purpose is not to find fault, but to improve code quality and share knowledge.<br />
While doing code review, first I check logic and functionality—whether code solves the requirement correctly and handles edge cases. Then I check readability and maintainability—proper naming, comments, and simple structure.<br />
I also ensure coding standards are followed, like formatting, folder structure, and best practices defined by the team. I look for performance issues, security concerns, and proper error handling.<br />
I encourage small pull requests, constructive feedback, and automated checks like linting, unit tests, and static code analysis.<br />
Overall, good code review helps maintain high-quality code, team consistency, and long-term stability of the product.
    </p>
  )
}>
Code Review
</button>
<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Containerization and Orchestration</strong><br />
<strong>Question</strong>: What is your experience with containerization and orchestration(docker, kubernetes)?<br />
I have good hands-on experience with containerization using Docker and orchestration using Kubernetes.<br />
I use Docker to containerize applications so that environment issues are removed and the app runs consistently from dev to prod. I create optimized Dockerfiles, handle multi-stage builds, and manage images using container registries.<br />
For orchestration, I work with Kubernetes to manage deployment, scaling, and high availability. I define pods, services, deployments, and config maps, and use auto-scaling and health checks to ensure reliability.<br />
I’ve worked with managed Kubernetes like EKS, AKS, and GKE, and integrate it with CI/CD pipelines. I also focus on security, resource limits, and monitoring.<br />
Overall, containers help in faster deployment, scalability, and stability, and Kubernetes helps manage everything efficiently at scale.
    </p>
  )
}>
Containerization and Orchestration
</button>
<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Dead Letter Queue Handling</strong><br />
<strong>Scenario</strong> Some messages fail processing repeatedly.<br />
<strong>Question</strong> How would you implement dead-letter queues and retries effectively?<br />
When some messages failed and not processing, I would implement a dead-letter queue (DLQ) to handle them safely.<br />
First, every message goes to the main queue and is processed by consumers. If processing fails, I will have a retry policy—a few automatic retries with exponential backoff for transient errors.<br />
If a message still fails after all retries, it goes to the DLQ. This prevents blocking the main queue and lets us inspect or manually process failed messages later. The DLQ can also trigger alerts so the team can take action quickly.<br />
For scaling, I will make sure both the main queue and DLQ can scale horizontally. Consumers can scale based on queue length, so spikes in traffic don’t delay processing.<br />
Overall, main queue + controlled retries + DLQ + scaling consumers ensures reliable processing, prevents message loss, and keeps the system resilient even under high load.
    </p>
  )
}>
Dead Letter Queue
</button>
<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Database Strategy for Global Users</strong><br />
<strong>Scenario</strong> Your application serves users across multiple continents with strict latency requirements.<br />
<strong>Question</strong> How would you design the database architecture?<br />
For a global application with users across multiple continents, my main goal will be low latency and high availability, while still keeping data consistent where required.<br />
First, I will use geo-replication so data is available in multiple regions closer to users. For read-heavy workloads, I will configure read replicas in different regions, so users can read data from the nearest location with low latency.<br />
For write operations, I will usually keep a primary region to avoid conflicts. Some delay between regions is acceptable, so I will follow eventual consistency for non-critical data like user activity, logs, or analytics.<br />
Based on the use case, I will choose SQL or NoSQL. If the application needs strong relationships and transactions, I will use SQL with geo-replicated read replicas. For massive scale and flexible data with global distribution, I will use NoSQL databases that support multi-region writes.<br />
I will also consider data residency and compliance. For example, European user data will stay in EU regions, and routing will ensure data does not cross restricted boundaries.<br />
Overall, by combining read replicas, geo-replication, eventual consistency, right database choice, and data residency rules, the system will deliver low latency globally while staying compliant.
    </p>
  )
}>
Database Strategy for Global Users
</button>
<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Disaster Recovery & High Availability</strong><br />
<strong>Scenario</strong> Your system must meet 99.99% availability and recover from regional outages.<br />
<strong>Question</strong> How would you design for high availability and disaster recovery?<br />
To achieve 99.99% availability and recover from regional outages, I will design the system with multi-region deployments. Services and databases will be deployed across at least two regions to ensure redundancy.<br />
I will decide between active-active or active-passive based on cost and performance. For critical services, active-active allows both regions to serve traffic simultaneously, while active-passive can be used for less critical workloads.<br />
For data, I will implement a strong backup and restore strategy with regular backups, and define RTO (Recovery Time Objective) and RPO (Recovery Point Objective) to know how fast and how much data we can recover.<br />
I will also set up automated failover using DNS, load balancers, or cloud services so traffic shifts automatically to the healthy region without manual intervention.<br />
Finally, regular DR drills and monitoring will ensure the system meets SLA and is ready for real outages.<br />
Overall, multi-region deployments, proper backup, defined RTO/RPO, and automated failover together provide high availability and disaster recovery.
    </p>
  )
}>
Disaster Recovery & High Availability
</button>
<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Event Sourcing</strong><br />
<strong>Scenario</strong>: You want to maintain an audit log of all changes in your application.<br />
<strong>Question</strong> How would you use a message broker for event sourcing?<br />
If I want to maintain an audit log of all changes, I would use event sourcing with a message broker like Kafka or RabbitMQ.<br />
Whenever any change happens in the application, instead of directly updating the database only, I will publish an event describing the change to the message broker. Each event is immutable and stored in order, so it acts as a reliable audit log.<br />
Consumers can subscribe to these events to update read models, analytics, or reporting systems without touching the main database. This also allows rebuilding the state at any time by replaying events.<br />
For reliability, the broker ensures durable messages and supports retries if a consumer fails. Using Kafka, for example, I can store events for a long time and replay them for auditing or debugging.
    </p>
  )
}>
Event Sourcing
</button>
<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>High-Traffic Web App/Scaling a Web Application</strong><br />
<strong>Scenario</strong> Your web app is facing performance issues during peak traffic.<br />
<strong>Question</strong> How would you scale it to handle high traffic?<br />
When a web app faces performance issues during peak traffic, I would scale it to handle high load using multiple strategies.<br />
First, I will use horizontal scaling by adding more servers or instances behind a load balancer, so traffic is evenly distributed and no single server gets overloaded. I will also configure auto-scaling so new instances spin up automatically during spikes and scale down when traffic reduces.<br />
Next, I will implement caching. For dynamic data, I can use Redis to reduce repeated database hits, and for static assets like JS, CSS, and images, I will use a CDN to serve content closer to users.<br />
On the database side, I will optimize performance using read replicas for read-heavy workloads and consider sharding if the data grows too large. Queries and indexes will also be tuned to improve response times.<br />
Overall, by combining horizontal scaling, load balancing, auto-scaling, caching, and database optimization, the app can handle high traffic smoothly without performance issues.
    </p>
  )
}>
  High-Traffic/Scaling Web App
</button>
<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Message Broker Scaling</strong><br />
<strong>Scenario</strong>: Your message broker becomes a bottleneck during peak hours.<br />
<strong>Question</strong>: How would you scale publish-subscribe or queue systems to handle millions of messages per day?<br />
When a message broker becomes a bottleneck during peak hours, I will scale both publish-subscribe and queue systems to handle millions of messages reliably.<br />
First, I will partition the broker—for example, Kafka topics can have multiple partitions so multiple consumers can read in parallel. For RabbitMQ, I can use multiple queues and exchanges to distribute load.<br />
Next, I will scale consumers horizontally. Adding more consumers ensures messages are processed faster without blocking the queue. Producers can also be scaled if message publishing is high.<br />
I will also enable message batching and asynchronous processing to reduce load per request. For durability and reliability, I will make sure messages are persistent and acknowledged only after successful processing.<br />
Finally, monitoring queue length, broker health, and throughput is key. Auto-scaling consumers or partitions based on metrics ensures the system handles traffic spikes without failures.<br />
Overall, by partitioning, horizontal scaling, batching, async processing, and monitoring, the message broker can handle millions of messages per day efficiently.
    </p>
  )
}>
Message Broker Scaling
</button>
<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Migrating Monolithic App to Microservices</strong><br />
<strong>Scenario</strong> You have a large ASP.NET monolithic application hosted on-premises. Users are growing rapidly, and deployments are risky and slow.<br />
<strong>Question</strong> How would you migrate this system to microservices on the cloud while minimizing downtime?<br />
First, I will not break the monolith in one shot because that is risky and can cause downtime. I will use the Strangler Pattern so that migration happens step by step.<br />
I will start by analyzing the existing ASP.NET monolithic application and identify business modules using Domain-Driven Design, like User Management, Orders, Payments, Notifications, etc. These will become bounded contexts, and I will pick one small, less risky module to migrate first.<br />
Then I will put an API Gateway in front of the monolith. Initially, all traffic will go to the monolith. When I create a new microservice, for example Order Service, I will route only order-related APIs to the new service, and remaining APIs will still go to the monolith. This way users will not face any downtime.<br />
Each microservice will be built using .NET Core, containerized using Docker, and deployed to the cloud using Kubernetes or managed container services. This will help in scaling, rolling deployments, and easy rollback.<br />
For database, I will follow database-per-service concept. Each microservice will own its own data. In the beginning, some services may still read from the monolith database, but gradually data will be separated. For communication between services, I will use events and eventual consistency instead of distributed transactions.
    </p>
  )
}>
  Monolithic to Microservice
</button>

<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Multi-Tenant Architecture</strong><br />
<strong>Scenario</strong> You are designing a multi-tenant SaaS application for enterprise customers using .NET.<br />
<strong>Question</strong> How would you design tenant isolation at the application and database levels?<br />
While designing a multi-tenant application in .NET, my main focus will be tenant isolation, security, and cost control.<br />
At the application level, I will identify tenants using a Tenant ID, which can come from subdomain, request header, or JWT token. Every API request will be validated to ensure the user can access only their own tenant data. I will enforce this using middleware in .NET so isolation is handled centrally.<br />
At the database level, there are multiple approaches.<br />
For small and medium customers, I will use a single database with tenant-based isolation, either using a TenantId column or schema-per-tenant approach. Schema isolation gives better separation while keeping costs lower.<br />
For large enterprise customers, I will use database-per-tenant. This provides strong isolation, better security, and easier compliance, but at higher cost. This mixed approach helps in cost optimization.<br />
For security boundaries, I will ensure:<br />
Strict authorization checks at application level<br />
Encryption of data at rest and in transit<br />
Separate secrets and connection strings per tenant where required<br />
Overall, by combining proper tenant identification, database isolation strategies, strong security checks, and flexible deployment models, we can build a secure and scalable multi-tenant system in .NET.
    </p>
  )
}>
  Multi-Tenant Architecture
</button>

<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Observability and Troubleshooting in Cloud</strong><br />
<strong>Scenario</strong> Users report intermittent issues, but logs do not show obvious errors.<br />
<strong>Question</strong> How would you implement observability to quickly diagnose issues?<br />
When users report intermittent issues and logs don’t show obvious errors, I will implement full observability across the system.<br />
First, I will use centralized logging so all logs from different services go to one place, like ELK Stack or Azure Monitor. This makes searching and correlating logs much easier.<br />
Next, I will implement distributed tracing to follow a request as it passes through multiple microservices. This helps find slow services or points where requests fail. Correlation IDs will be attached to every request so logs, traces, and metrics can be linked together.<br />
I will also set up metrics and alerts for key KPIs like latency, error rates, and resource usage. Alerts will trigger when thresholds are crossed, so problems are noticed before users complain.<br />
Finally, I will use APM tools like Application Insights or New Relic to monitor performance, database queries, and service dependencies. This gives a real-time view of the system and helps quickly diagnose intermittent issues.<br />
Overall, by combining centralized logs, tracing, correlation IDs, metrics, and APM tools, we can detect, diagnose, and fix issues much faster in cloud environments.
    </p>
  )
}>
Observability and Troubleshooting in Cloud
</button>

<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>On-Premises to Cloud Migration Strategy</strong><br />
<strong>Scenario</strong> A legacy application is moving from on-premises to cloud.<br />
<strong>Question</strong> How would you plan migration with minimal downtime and risk?<br />
For moving a legacy on-premises application to cloud with minimal downtime, I would follow an incremental and low-risk approach.<br />
First, I will analyze the application to understand dependencies, modules, and data. Then I will decide which parts can move first—starting with non-critical or low-risk components.<br />
I will use the Strangler Pattern, where new functionality runs in the cloud and old features still run on-premises. Traffic gradually moves to the cloud until the old system can be retired.<br />
I will also containerize the application using Docker and deploy it on cloud services or Kubernetes to make scaling and management easier. For the database, I will plan a data migration strategy, maybe starting with read replicas and then switching writes gradually.<br />
To reduce risk, I will set up CI/CD pipelines, monitoring, and alerts, so every deployment is automated and we can rollback quickly if needed.<br />
Overall, by incremental migration, strangler pattern, containerization, careful data migration, and automated pipelines, we can move to cloud safely with minimal downtime.
    </p>
  )
}>
On-Premises to Cloud Migration
</button>

<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Order Processing System</strong><br />
      <strong>Scenario</strong> You have a high-volume e-commerce system. Orders must be processed reliably.<br />
      <strong>Question</strong> How would you design message queues and retries to avoid lost orders?<br />
      For a high-volume e-commerce system, reliability is key, so I would design message queues and retry mechanisms carefully.<br />
      First, every order will be sent to a durable message queue like RabbitMQ or Kafka. This ensures that even if a service goes down, messages are not lost. Messages should be acknowledged only after successful processing.<br />
      For failures, I will implement retry policies. Immediate retries for transient issues, and if it still fails, move the message to a dead-letter queue for manual or later processing. This prevents orders from being lost or processed twice.<br />
To make the system idempotent, order processing logic will check if the order was already handled, so retries don’t create duplicates.<br />
I can also scale consumers horizontally to handle peak traffic, and monitor queue length and processing metrics to make sure no orders get stuck.<br />
Overall, using durable queues, controlled retries, dead-letter queues, idempotent processing, and scaling, the system can process orders reliably without losing any, even under high load.
    </p>
  )
}>
Order Processing System
</button>
<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Performance Optimization</strong><br />
<strong>Question</strong> How do you ensure performance optimization in your solutions?<br />
To ensure performance optimization, I start from design stage itself, not after problems come.<br />
First, I understand expected load and usage pattern—number of users, peak traffic, read vs write ratio. Based on that, I design scalable architecture using load balancers, auto-scaling, and stateless services.<br />
At data layer, I choose right database, proper indexing, caching using Redis or CDN, and avoid unnecessary heavy queries.<br />
I also focus on network and API performance—using async processing, message queues, pagination, and compression where needed.<br />
On cloud side, I select right instance types, enable monitoring, and do performance testing like load and stress testing.<br />
Finally, I continuously monitor metrics like latency, CPU, memory, and optimize proactively. So performance is handled by good design, right tools, and continuous monitoring.
    </p>
  )
}>
Performance Optimization
</button>
<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Securing Microservices</strong><br />
<strong>Scenario</strong> Your system consists of multiple microservices built using .NET and Node.js.<br />
<strong>Question</strong> How would you secure communication between services and external clients?<br />
To secure communication between microservices and external clients, I will design security at multiple layers.<br />
For external clients, I will use OAuth 2.0 with OpenID Connect for authentication. Users will log in via an Identity Provider, and after login they will get a JWT token. This JWT will be sent with every API request and validated by the system to check user identity and permissions.<br />
I will place an API Gateway in front of all microservices. The gateway will handle authentication, token validation, rate limiting, and routing, so individual services remain simple and secure.<br />
For service-to-service communication, I will use mTLS (mutual TLS). This ensures both services authenticate each other using certificates, so only trusted services can talk to each other.<br />
JWT tokens will be short-lived, and sensitive scopes or roles will be validated inside the services. For extra safety, secrets and certificates will be stored in a secure vault.<br />
To protect against abuse and traffic spikes, I will enable rate limiting and throttling at the API Gateway level.<br />
Overall, using OAuth + JWT for clients, API Gateway for centralized security, mTLS for internal traffic, and rate limiting, the microservices architecture will be secure and scalable.
    </p>
  )
}>
Securing Microservices
</button>

<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Key Responsibilities of Solution Architect</strong><br />
<strong>Question</strong> Can You explain the key responsibilities of a solution architect in a software development project?<br />
As a Solution Architect, my main responsibility is to convert business requirements into a technical solution.<br />
First, I work closely with business stakeholders to understand what problem we are solving, expected outcome, budget, and timeline. Then I design the overall system architecture—like application flow, cloud setup, databases, integrations, and security.<br />
I also decide technology stack—which cloud, frameworks, databases, and third-party tools should be used—keeping scalability, performance, and cost in mind.<br />
Another key responsibility is non-functional requirements like security, availability, scalability, and disaster recovery. I make sure the system can handle future growth and failures.<br />
During development, I guide the dev team, review designs, and ensure best practices are followed. I also coordinate with DevOps, QA, and operations teams.<br />
Finally, I make sure the solution is aligned with business goals, technically sound, and ready for long-term maintenance.
    </p>
  )
}>
Solution Architect
</button>
<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Synchronous and Asynchronous Communication</strong><br />
<strong>Question</strong>: Can you explain synchronous and asynchronous communication in distributed systems and when to use each?<br />
In distributed systems, synchronous communication means the calling service waits for a response from another service. It is usually done using REST or gRPC.<br />
I use synchronous communication when I need immediate response—like login, payment validation, or fetching user details—where user is waiting for result.<br />
Asynchronous communication means the calling service does not wait for response. It sends a message and continues processing. This is usually done using message queues or event systems like Kafka, RabbitMQ, or SQS.<br />
I use async communication for background tasks, long-running processes, notifications, order processing, or when high scalability and loose coupling is needed.<br />
From architecture point of view, synchronous is simple but tightly coupled, while asynchronous is more scalable and resilient but slightly complex.<br />
So choice depends on business requirement, response time expectation, and system scalability needs.
    </p>
  )
}>
Sync and Async Comm
</button>

<button className="btn btn-success me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Tools and Frameworks</strong><br />
      <strong>Question</strong>: What tool and frameworks do you use for architecture modeling and documentation?<br />
For architecture modeling and documentation, I use a mix of tools, depending on project and client maturity.<br />
For high-level architecture diagrams, I commonly use Draw.io, Lucidchart, or Visio because they are easy to understand for both technical and non-technical stakeholders.<br />
For cloud architecture, I use AWS Architecture Icons, Azure Architecture Center templates, and sometimes Cloudcraft for detailed cloud diagrams.<br />
For documentation, I usually use Confluence or SharePoint, where I maintain architecture decisions, design documents, and assumptions. For API documentation, I use Swagger / OpenAPI.<br />
For architecture frameworks, I mainly follow C4 Model for system, container, and component-level views. For enterprise-level projects, I align with TOGAF principles, but in a practical way, not heavy documentation.<br />
Overall, my focus is on clear, simple, and maintainable documentation that actually helps the team, not just for formality.
    </p>
  )
}>
Tools and Frameworks
</button>

<button className="btn btn-warning me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>MakeMyTrip | Booking system</strong><br />
A booking system works in multiple steps.<br />
First, when the user searches, the request goes to the Search Service, which fetches data from cache and inventory systems.<br />
Then the Inventory Service checks seat or room availability.<br />
The Pricing Service calculates price based on demand, offers, and taxes.<br />

After user confirms, the Booking Service temporarily locks inventory.<br />
Then Payment Service handles payment securely through a payment gateway.<br />
Once payment is successful, booking is confirmed and Notification Service sends confirmation.<br />

All these services are independent but coordinated using events and messaging.
    </p>
  )
}>
MakeMyTrip|Booking system
</button>

<button className="btn btn-warning me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Payment Success but Booking Failed</strong><br />
This is a very common real-world problem.<br />
To handle this, we use idempotency keys and Saga pattern.<br />

If payment is successful but booking fails, the system triggers a compensation transaction, which refunds the payment.<br />
This ensures data consistency without blocking the system.
    </p>
  )
}>
Booking Failed
</button>

<button className="btn btn-warning me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Avoid Duplicate Payments</strong><br />
      We generate a unique transaction ID for every payment request.<br />
Before processing, we always check whether the transaction ID already exists.<br />
APIs are made idempotent, so retrying the same request will not create a new payment.
    </p>
  )
}>
Avoid Duplicate Payments
</button>

<button className="btn btn-warning me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Handle Fault Occurrence in Booking Systems</strong><br />
We use multiple strategies:<br />
Retry with exponential backoff<br />
Circuit breaker to stop cascading failures<br />
Fallback responses when a service is down<br />
Dead-letter queues for failed messages
    </p>
  )
}>
Handle Fault in Booking Systems
</button>

<button className="btn btn-warning me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>HttpClient vs HttpClientFactory</strong><br />
Direct HttpClient usage can cause socket issues.<br />
HttpClientFactory manages lifecycle and connections properly.
    </p>
  )
}>
HttpClient vs HttpClientFactory
</button>

<button className="btn btn-warning me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Handling 10,000+ requests</strong><br />
To handle 10,000+ concurrent requests, I mainly focus on scalable architecture and non-blocking execution.<br />
First, I use async APIs so threads are not blocked during database or external service calls. This allows the server to handle more requests with limited resources.<br />
Second, I design stateless services, where no session data is stored on the server. Each request is independent and can be served by any instance.<br />
Third, I use a load balancer to distribute incoming traffic across multiple application instances, which prevents any single server from becoming a bottleneck.<br />
Finally, I enable auto scaling, so new instances are automatically added during high traffic and removed during low traffic.<br />
By combining async APIs, stateless design, load balancing, and auto scaling, the system can efficiently handle very high concurrent traffic.
    </p>
  )
}>
Handling 10,000+ requests
</button>

<button className="btn btn-warning me-2 mb-2" onClick={() =>
  handleOpenPopup(
    <p>
      <strong>Upload 500 Files</strong><br />
To upload 500 files efficiently, I focus on parallelism, reliability, and non-blocking processing.<br />
First, I use parallel uploads, so multiple files are uploaded at the same time instead of one by one. This significantly reduces total upload time.<br />
Second, I use chunking, where large files are broken into smaller chunks. This helps in resuming uploads if a failure happens and improves network stability.<br />
Third, I use background processing, where the upload request is accepted quickly, and actual processing happens asynchronously using background workers or queues.<br />
By combining parallel uploads, chunking, and background processing, the system becomes fast, reliable, and scalable, even when handling hundreds of files.
    </p>
  )
}>
Upload 500 Files
</button>
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
