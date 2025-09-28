function Relationships() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
        <p><b>Relationship</b> defines how tables are connected to each other based on common fields. Relationship help us to maintain data integrity and eliminate redundancy by linking data across multiple tables like One-to-One, One-to-Many, Many-to-One and Many-to-Many.</p>

      <Section title="One-to-One Relationship" color="text-orange-600">
        <p>One-to-One Each record in Table A corresponds to exactly one record in Table B and vice versa. For example a User table and a UserProfile table each user has only one profile. Implemented using Primary Key & Foreign Key with UNIQUE constraint.</p>
        <CodeBlock>
{`CREATE TABLE User
(
	UserId INT PRIMARY KEY, 
	Name VARCHAR(50)
);

CREATE TABLE UserProfile
(
	ProfileId INT PRIMARY KEY, 
	UserId INT UNIQUE,
	FOREIGN KEY (UserId) 
	REFERENCES User(UserId)
);

modelBuilder.Entity<User>()
    .HasOne(u => u.UserProfile)
    .WithOne(p => p.User)
    .HasForeignKey<UserProfile>(p => p.UserId);`}
        </CodeBlock>
      </Section>

      {/* DML - Data Manipulation Language */}
      <Section title="One-to-Many Relationship" color="text-blue-600">
        <p>One-to-Many One record in Table A is related to multiple records in Table B. Example: A Customer can place multiple Orders. Implemented using Primary Key in one table and Foreign Key in another.</p>
        <CodeBlock>
{`CREATE TABLE Customer 
(
	CustomerId INT PRIMARY KEY,
	Name VARCHAR(100)
);

CREATE TABLE Orders (
	OrderId INT PRIMARY KEY,
	CustomerId INT,
	OrderDate DATE,
	FOREIGN KEY(CustomerId) 
	REFERENCES Customer(CustomerId)
);

modelBuilder.Entity<Category>()
    .HasMany(c => c.Products)
    .WithOne(p => p.Category)
    .HasForeignKey(p => p.CategoryId);`}
        </CodeBlock>
      </Section>

      {/* DQL - Data Query Language */}
      <Section title="Many-to-Many Relationship" color="text-blue-600">
        <p>Many-to-Many Multiple records in Table A are related to multiple records in Table B. For example Student can enroll in multiple Courses and a Course can have multiple Students. Implemented using a junction table.</p>
        <CodeBlock>
{`CREATE TABLE Student (Id INT PRIMARY KEY, Name VARCHAR(50));
CREATE TABLE Course(Id INT PRIMARY KEY, Name VARCHAR(50));

CREATE TABLE Student_Course(
    StudentId INT,
    CourseId INT,
    PRIMARY KEY (StudentId, CourseId),
    FOREIGN KEY (StudentId) REFERENCES Student(StudentId),
    FOREIGN KEY (CourseId) REFERENCES Course(CourseId)
);

modelBuilder.Entity<Student>()
    .HasMany(s => s.Courses)
    .WithMany(c => c.Students);`}
        </CodeBlock>
      </Section>

      {/* DCL - Data Control Language */}
      <Section title="Self-Referencing Relationship" color="text-purple-600">
        <p>Self-Referencing Relationship A table has a relationship with itself. For example Employee can have a Manager who is also an Employee. Implemented using a Foreign Key referencing the same table.</p>
        <CodeBlock>
{`CREATE TABLE Employee
(
	EmployeeId INT PRIMARY KEY,
	Name VARCHAR(100),
	ManagerId INT,
	FOREIGN KEY (ManagerId)
	REFERENCES Employee(EmployeeId)
);`}
        </CodeBlock>
      </Section>
    </div>
  );
}

/* Reusable Section Component */
function Section({ title, color, children }) {
  return (
    <section className="mb-6">
      <div className="flex items-center mb-2">
        <strong className={`${color} text-lg`}>{title}</strong>
      </div>
      {children}
    </section>
  );
}

/* Reusable Code Block Component */
function CodeBlock({ children }) {
  return (
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">
      <code>{children}</code>
    </pre>
  );
}

export default Relationships;