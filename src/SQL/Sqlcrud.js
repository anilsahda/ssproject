function Sqlcrud() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">SQL CRUD Operations</h1>
        <p className="text-gray-500 text-xs mt-1">
          Creating <strong>tables</strong> and performing <strong>CRUD operations</strong> on multiple entities like Skills, Qualification, Language, Country, State, District, Customer, Student, Employee, Role, User, etc.
        </p>
      </header>

      {/* Step 1: Skills Table */}
      <Section title="Skills Table" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE Skills 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(150) NOT NULL
);`}
        </CodeBlock>
        <CodeBlock>
{`-- CRUD Examples
INSERT INTO Skills VALUES ('C#'), ('Java'), ('Python');
SELECT * FROM Skills;
UPDATE Skills SET Name = 'JavaScript' WHERE Id = 2;
DELETE FROM Skills WHERE Id = 3;`}
        </CodeBlock>
      </Section>

      {/* Step 2: Qualification Table */}
      <Section title="Qualification Table" color="text-green-600">
        <CodeBlock>
{`CREATE TABLE Qualification 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(150) NOT NULL
);`}
        </CodeBlock>
        <CodeBlock>
{`-- CRUD Examples
INSERT INTO Qualification VALUES ('B.Tech'), ('MBA');
SELECT * FROM Qualification;
UPDATE Qualification SET Name = 'MCA' WHERE Id = 1;
DELETE FROM Qualification WHERE Id = 2;`}
        </CodeBlock>
      </Section>

      {/* Step 3: Language Table */}
      <Section title="Language Table" color="text-yellow-600">
        <CodeBlock>
{`CREATE TABLE Language 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(150) NOT NULL
);`}
        </CodeBlock>
        <CodeBlock>
{`-- CRUD Examples
INSERT INTO Language VALUES ('English'), ('Hindi'), ('French');
SELECT * FROM Language;
UPDATE Language SET Name = 'German' WHERE Id = 3;
DELETE FROM Language WHERE Id = 2;`}
        </CodeBlock>
      </Section>

      {/* Step 4: Country, State, District */}
      <Section title="Country, State, District Tables" color="text-purple-600">
        <CodeBlock>
{`CREATE TABLE Country 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(150) NOT NULL
);

CREATE TABLE State 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(150) NOT NULL,
    CountryId INT FOREIGN KEY REFERENCES Country(Id)
);

CREATE TABLE District 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(150) NOT NULL,
    CountryId INT FOREIGN KEY REFERENCES Country(Id),
    StateId INT FOREIGN KEY REFERENCES State(Id)
);`}
        </CodeBlock>
        <CodeBlock>
{`-- CRUD Examples
INSERT INTO Country VALUES ('India'), ('USA');
INSERT INTO State VALUES ('Karnataka', 1), ('California', 2);
INSERT INTO District VALUES ('Bangalore', 1, 1);
SELECT * FROM Country;
SELECT * FROM State WHERE CountryId = 1;
SELECT * FROM District WHERE StateId = 1;
UPDATE Country SET Name = 'Bharat' WHERE Id = 1;
DELETE FROM District WHERE Id = 1;`}
        </CodeBlock>
      </Section>

      {/* Step 5: Customer Table */}
      <Section title="Customer Table" color="text-red-600">
        <CodeBlock>
{`CREATE TABLE Customer 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(150),
    Email NVARCHAR(150),
    Mobile NVARCHAR(20),
    Image NVARCHAR(250)
);`}
        </CodeBlock>
        <CodeBlock>
{`-- CRUD Examples
INSERT INTO Customer VALUES ('John Doe','john@example.com','1234567890','john.png');
SELECT * FROM Customer;
UPDATE Customer SET Mobile = '9876543210' WHERE Id = 1;
DELETE FROM Customer WHERE Id = 1;`}
        </CodeBlock>
      </Section>

      {/* Step 6: Student & Employee */}
      <Section title="Student & Employee Tables" color="text-blue-600">
        <CodeBlock>
{`CREATE TABLE Student 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    FirstName NVARCHAR(100),
    MiddleName NVARCHAR(100),
    LastName NVARCHAR(100),
    Address NVARCHAR(250),
    Email NVARCHAR(150),
    Mobile NVARCHAR(20),
    CountryId INT,
    StateId INT,
    DistrictId INT,
    GenderId INT
);

CREATE TABLE Employee 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    FirstName NVARCHAR(100),
    MiddleName NVARCHAR(100),
    LastName NVARCHAR(100),
    Address NVARCHAR(250),
    Email NVARCHAR(150),
    Mobile NVARCHAR(20),
    CountryId INT,
    StateId INT,
    DistrictId INT,
    GenderId INT
);`}
        </CodeBlock>
        <CodeBlock>
{`-- CRUD Examples
INSERT INTO Student VALUES ('Alice','Johnson','alice@example.com','5551112222',1,1,1,1);
SELECT * FROM Student;
UPDATE Student SET Address = 'New Address' WHERE Id = 1;
DELETE FROM Student WHERE Id = 1;`}
        </CodeBlock>
      </Section>

      {/* Step 7: EmployeeLanguage */}
      <Section title="EmployeeLanguage Table" color="text-indigo-600">
        <CodeBlock>
{`CREATE TABLE EmployeeLanguage 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    EmployeeId INT FOREIGN KEY REFERENCES Employee(Id),
    LanguageId INT FOREIGN KEY REFERENCES Language(Id)
);`}
        </CodeBlock>
        <CodeBlock>
{`-- CRUD Examples
INSERT INTO EmployeeLanguage VALUES (1,1);
SELECT * FROM EmployeeLanguage;
UPDATE EmployeeLanguage SET LanguageId = 2 WHERE Id = 1;
DELETE FROM EmployeeLanguage WHERE Id = 1;`}
        </CodeBlock>
      </Section>

      {/* Step 8: Role, User, UserRole */}
      <Section title="Role, User, UserRole Tables" color="text-green-600">
        <CodeBlock>
{`CREATE TABLE Role 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(150) NOT NULL
);

CREATE TABLE [User] 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(150),
    Email NVARCHAR(150),
    Password NVARCHAR(150)
);

CREATE TABLE UserRole 
(
    Id INT PRIMARY KEY IDENTITY(1,1),
    UserId INT FOREIGN KEY REFERENCES [User](Id),
    RoleId INT FOREIGN KEY REFERENCES Role(Id)
);`}
        </CodeBlock>
        <CodeBlock>
{`-- CRUD Examples
INSERT INTO Role VALUES ('Admin'), ('User');
INSERT INTO [User] VALUES ('Anil','anil@example.com','12345');
INSERT INTO UserRole VALUES (1,1);

SELECT * FROM Role;
SELECT * FROM [User];
SELECT * FROM UserRole;

UPDATE [User] SET Password = 'securepass' WHERE Id = 1;
DELETE FROM Role WHERE Id = 2;`}
        </CodeBlock>
      </Section>
    </div>
  );
}

/* Reusable Section Component */
function Section({ title, color, children }) {
  return (
    <section>
      <div className="flex items-center mb-2">
        <strong className={`${color}`}>{title}</strong>
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

export default Sqlcrud;
