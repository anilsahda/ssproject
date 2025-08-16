function Sqljoins() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">

      {/* Header */}
      <header className="border-b pb-3">
        <h1 className="text-xl font-bold text-indigo-700">SQL Joins</h1>
        <p className="text-gray-500 text-xs mt-1">
          Practice examples of <strong>INNER</strong>, <strong>LEFT</strong>, <strong>RIGHT</strong>, 
          <strong>FULL OUTER</strong>, <strong>SELF</strong>, and <strong>CROSS</strong> joins on your schema.
        </p>
      </header>

      {/* Example Sections */}
      <Section title="1. INNER JOIN: Students with Country" color="text-green-600">
        <CodeBlock>
{`SELECT S.FirstName, S.LastName, C.Name AS Country FROM Student S
INNER JOIN Country C ON S.CountryId = C.Id;`}
        </CodeBlock>
      </Section>

      <Section title="2. INNER JOIN: Employees with State" color="text-blue-600">
        <CodeBlock>
{`SELECT E.FirstName, E.LastName, ST.Name AS State FROM Employee E
INNER JOIN State ST ON E.StateId = ST.Id;`}
        </CodeBlock>
      </Section>

      <Section title="3. INNER JOIN: Students with District → State → Country" color="text-orange-600">
        <CodeBlock>
{`SELECT S.FirstName, S.LastName, D.Name AS District, ST.Name AS State, C.Name AS Country FROM Student S
INNER JOIN District D ON S.DistrictId = D.Id
INNER JOIN State ST ON S.StateId = ST.Id
INNER JOIN Country C ON S.CountryId = C.Id;`}
        </CodeBlock>
      </Section>

      <Section title="4. INNER JOIN: Employees and their Languages" color="text-purple-600">
        <CodeBlock>
{`SELECT E.FirstName, E.LastName, L.Name AS Language FROM Employee E
INNER JOIN EmployeeLanguage EL ON E.Id = EL.EmployeeId
INNER JOIN Language L ON EL.LanguageId = L.Id;`}
        </CodeBlock>
      </Section>

      <Section title="5. INNER JOIN: Users and their Roles" color="text-pink-600">
        <CodeBlock>
{`SELECT U.Name AS UserName, U.Email, R.Name AS RoleName FROM [User] U
INNER JOIN UserRole UR ON U.Id = UR.UserId
INNER JOIN Role R ON UR.RoleId = R.Id;`}
        </CodeBlock>
      </Section>

      <Section title="6. LEFT JOIN: Employees without State" color="text-teal-600">
        <CodeBlock>
{`SELECT E.FirstName, E.LastName, ST.Name AS State FROM Employee E
LEFT JOIN State ST ON E.StateId = ST.Id;`}
        </CodeBlock>
      </Section>

      <Section title="7. RIGHT JOIN: Students without State" color="text-red-600">
        <CodeBlock>
{`SELECT ST.Name AS State, S.FirstName AS Student FROM Student S
RIGHT JOIN State ST ON S.StateId = ST.Id;`}
        </CodeBlock>
      </Section>

      <Section title="8. FULL OUTER JOIN: Students and Employees by Country" color="text-indigo-600">
        <CodeBlock>
{`SELECT S.FirstName AS Student, E.FirstName AS Employee, C.Name AS Country FROM Student S
FULL OUTER JOIN Employee E ON S.CountryId = E.CountryId
FULL OUTER JOIN Country C ON C.Id = COALESCE(S.CountryId, E.CountryId);`}
        </CodeBlock>
      </Section>

      <Section title="9. SELF JOIN: Employees from Same State" color="text-green-600">
        <CodeBlock>
{`SELECT E1.FirstName+ ' ' +E1.LastName AS Employee1, E2.FirstName+ ' ' +E2.LastName AS Employee2, ST.Name AS State 
FROM Employee E1
INNER JOIN Employee E2 ON E1.StateId = E2.StateId AND E1.Id <> E2.Id
INNER JOIN State ST ON E1.StateId = ST.Id;`}
        </CodeBlock>
      </Section>

      <Section title="10. CROSS JOIN: Users and Roles" color="text-blue-600">
        <CodeBlock>
{`SELECT U.Name AS UserName, R.Name AS Role FROM [User] U
CROSS JOIN Role R;`}
        </CodeBlock>
      </Section>

      <Section title="11. GROUP BY: Students Count by Country" color="text-orange-600">
        <CodeBlock>
{`SELECT C.Name AS Country, COUNT(S.Id) AS TotalStudents FROM Student S
INNER JOIN Country C ON S.CountryId = C.Id
GROUP BY C.Name;`}
        </CodeBlock>
      </Section>

      <Section title="12. LEFT JOIN Filter: Employees without District" color="text-purple-600">
        <CodeBlock>
{`SELECT E.FirstName, E.LastName FROM Employee E
LEFT JOIN District D ON E.DistrictId = D.Id WHERE D.Id IS NULL;`}
        </CodeBlock>
      </Section>

      <Section title="13. INNER JOIN: Students and Employees in Same State" color="text-pink-600">
        <CodeBlock>
{`SELECT S.FirstName AS Student, E.FirstName AS Employee, ST.Name AS State FROM Student S
INNER JOIN Employee E ON S.StateId = E.StateId
INNER JOIN State ST ON S.StateId = ST.Id;`}
        </CodeBlock>
      </Section>

      <Section title="14. LEFT JOIN: Users without Roles" color="text-teal-600">
        <CodeBlock>
{`SELECT U.Name, U.Email FROM [User] U
LEFT JOIN UserRole UR ON U.Id = UR.UserId WHERE UR.UserId IS NULL;`}
        </CodeBlock>
      </Section>

      <Section title="15. Multi-level JOIN: Employees with Country & Languages" color="text-red-600">
        <CodeBlock>
{`SELECT E.FirstName, E.LastName, C.Name AS Country, L.Name AS Language FROM Employee E
INNER JOIN Country C ON E.CountryId = C.Id
INNER JOIN EmployeeLanguage EL ON E.Id = EL.EmployeeId
INNER JOIN Language L ON EL.LanguageId = L.Id;`}
        </CodeBlock>
      </Section>

    </div>
  );
}

/* Reusable Section Component */
function Section({ title, color, children }) {
  return (
    <section className="mb-4">
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

export default Sqljoins;
