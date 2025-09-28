function Sqljoins() {
  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen text-sm text-gray-800 font-sans">
      <header className="border-b pb-3">
        <p className="text-gray-500 text-xs mt-1"><strong>INNER JOIN</strong> retrieves only the matching rows between two tables based on a specified condition. If there is no match, the row is excluded from the result.</p>
      </header>

        <CodeBlock>
{`SELECT S.FirstName, S.LastName, C.Name AS Country FROM Student S
INNER JOIN Country C ON S.CountryId = C.Id;`}
        </CodeBlock>

        <CodeBlock>
{`SELECT E.FirstName, E.LastName, ST.Name AS State FROM Employee E
INNER JOIN State ST ON E.StateId = ST.Id;`}
        </CodeBlock>

        <CodeBlock>
{`SELECT S.FirstName, S.LastName, D.Name AS District, ST.Name AS State, C.Name AS Country FROM Student S
INNER JOIN District D ON S.DistrictId = D.Id
INNER JOIN State ST ON S.StateId = ST.Id
INNER JOIN Country C ON S.CountryId = C.Id;`}
        </CodeBlock>

        <CodeBlock>
{`SELECT E.FirstName, E.LastName, L.Name AS Language FROM Employee E
INNER JOIN EmployeeLanguage EL ON E.Id = EL.EmployeeId
INNER JOIN Language L ON EL.LanguageId = L.Id;`}
        </CodeBlock>

        <CodeBlock>
{`SELECT U.Name AS UserName, U.Email, R.Name AS RoleName FROM [User] U
INNER JOIN UserRole UR ON U.Id = UR.UserId
INNER JOIN Role R ON UR.RoleId = R.Id;`}
        </CodeBlock>

        <CodeBlock>
{`SELECT S.FirstName AS Student, E.FirstName AS Employee, ST.Name AS State FROM Student S
INNER JOIN Employee E ON S.StateId = E.StateId
INNER JOIN State ST ON S.StateId = ST.Id;`}
        </CodeBlock>

        <CodeBlock>
{`SELECT E.FirstName, E.LastName, C.Name AS Country, L.Name AS Language FROM Employee E
INNER JOIN Country C ON E.CountryId = C.Id
INNER JOIN EmployeeLanguage EL ON E.Id = EL.EmployeeId
INNER JOIN Language L ON EL.LanguageId = L.Id;`}
        </CodeBlock>

      <header className="border-b pb-3">
        <p className="text-gray-500 text-xs mt-1"><strong>LEFT JOIN</strong> returns all rows from the left table and the matching rows from the right table. If there is no match in the right table, NULL values are returned for those columns.</p>
      </header>

        <CodeBlock>
{`SELECT E.FirstName, E.LastName, ST.Name AS State FROM Employee E
LEFT JOIN State ST ON E.StateId = ST.Id;`}
        </CodeBlock>

        <CodeBlock>
{`SELECT E.FirstName, E.LastName FROM Employee E
LEFT JOIN District D ON E.DistrictId = D.Id WHERE D.Id IS NULL;`}
        </CodeBlock>

        <CodeBlock>
{`SELECT U.Name, U.Email FROM [User] U
LEFT JOIN UserRole UR ON U.Id = UR.UserId WHERE UR.UserId IS NULL;`}
        </CodeBlock>

      <header className="border-b pb-3">
        <p className="text-gray-500 text-xs mt-1"><strong>RIGHT JOIN</strong> returns all rows from the right table and the matching rows from the left table. If there is no match in the left table, NULL values are returned for those columns.</p>
      </header>

        <CodeBlock>
{`SELECT ST.Name AS State, S.FirstName AS Student FROM Student S
RIGHT JOIN State ST ON S.StateId = ST.Id;`}
        </CodeBlock>

      <header className="border-b pb-3">
        <p className="text-gray-500 text-xs mt-1"><strong>FULL OUTER JOIN</strong>  returns all rows from both tables. If there is a match, it includes the values from both tables. If there is no match, NULL values are returned for the missing side.</p>
      </header>

        <CodeBlock>
{`SELECT S.FirstName AS Student, E.FirstName AS Employee, C.Name AS Country FROM Student S
FULL OUTER JOIN Employee E ON S.CountryId = E.CountryId
FULL OUTER JOIN Country C ON C.Id = COALESCE(S.CountryId, E.CountryId);`}
        </CodeBlock>

      <header className="border-b pb-3">
        <p className="text-gray-500 text-xs mt-1"><strong>SELF JOIN</strong> is when a table is joined with itself. This is useful for hierarchical relationships, comparisons within the same table, or finding related records.</p>
      </header>

        <CodeBlock>
{`SELECT E1.FirstName+ ' ' +E1.LastName AS Employee1, E2.FirstName+ ' ' +E2.LastName AS Employee2, ST.Name AS State 
FROM Employee E1
INNER JOIN Employee E2 ON E1.StateId = E2.StateId AND E1.Id <> E2.Id
INNER JOIN State ST ON E1.StateId = ST.Id;`}
        </CodeBlock>

      {/* Header */}
      <header className="border-b pb-3">
        <p className="text-gray-500 text-xs mt-1"><strong>CROSS JOIN</strong>  creates a cartesian product between two tables. This means each row from the first table is combined with every row from the second table.</p>
      </header>

        <CodeBlock>
{`SELECT U.Name AS UserName, R.Name AS Role FROM [User] U
CROSS JOIN Role R;`}
        </CodeBlock>

      {/* Header */}
      <header className="border-b pb-3">
        <p className="text-gray-500 text-xs mt-1"><strong>GROUP BY</strong> returns all rows from the left table and the matching rows from the right table. If there is no match in the right table, NULL values are returned for those columns.</p>
      </header>

        <CodeBlock>
{`SELECT C.Name AS Country, COUNT(S.Id) AS TotalStudents FROM Student S
INNER JOIN Country C ON S.CountryId = C.Id
GROUP BY C.Name;`}
        </CodeBlock>
    </div>
  );
}

function CodeBlock({ children }) {
  return (
    <pre className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm overflow-x-auto text-[12px] leading-5">
      <code>{children}</code>
    </pre>
  );
}

export default Sqljoins;
