import React from 'react';

function Ecommerce() {
  return (
    <div style={{ padding: '20px', lineHeight: '1.6' }}>
      <h1>E-Commerce Management System</h1>

      <h2>Project Overview</h2>
      <p>
        The <strong>E-Commerce Management System</strong> is a web-based application designed to manage online sales, products, orders, and customers. 
        It provides an easy-to-use platform for sellers to manage their online store and for buyers to browse and purchase products.
      </p>

      <h2>Technology Stack</h2>
      <ul>
        <li>Front-End: React / Next.js</li>
        <li>Back-End: .NET Core | Spring Boot | Node.js</li>
        <li>Database: SQL Server</li>
        <li>Cloud Platform: AWS</li>
      </ul>

      <h2>Modules and Functionalities</h2>

      <h3>1. Super Admin Module</h3>
      <ul>
        <li>Manage roles and permissions (Admin, Seller, Customer)</li>
        <li>Manage system users and assign roles</li>
      </ul>

      <h3>2. Admin Module</h3>
      <ul>
        <li>Manage all products, categories, and inventory</li>
        <li>Monitor seller activity and generate reports</li>
        <li>Approve or reject seller requests</li>
      </ul>

      <h3>3. Seller Module</h3>
      <ul>
        <li>Add, update, and remove products</li>
        <li>Manage product inventory and pricing</li>
        <li>View orders and process shipments</li>
        <li>Generate sales reports</li>
      </ul>

      <h3>4. Customer Module</h3>
      <ul>
        <li>Browse products by category or search</li>
        <li>Add products to cart and place orders</li>
        <li>Track orders and view order history</li>
        <li>Provide feedback or reviews for products</li>
      </ul>

      <h2>System Workflow</h2>
      <ol>
        <li>Super Admin → manages roles and system users</li>
        <li>Admin → manages products, categories, inventory, and seller requests</li>
        <li>Seller → adds products, manages inventory, processes orders</li>
        <li>Customer → browses products, places orders, and tracks deliveries</li>
      </ol>

      <h2>Roles & Responsibilities</h2>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Role</th>
            <th>Responsibilities</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Super Admin</td>
            <td>Manage roles, system users, and permissions</td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>Manage products, inventory, sellers, and reports</td>
          </tr>
          <tr>
            <td>Seller</td>
            <td>Manage product listings, inventory, and orders</td>
          </tr>
          <tr>
            <td>Customer</td>
            <td>Browse products, place orders, and view order history</td>
          </tr>
        </tbody>
      </table>

      <h2>Key Features for Students</h2>
      <ul>
        <li>Role-based access control for secure management</li>
        <li>Product catalog management for admins and sellers</li>
        <li>Shopping cart and order processing for customers</li>
        <li>Inventory management and sales reports for sellers</li>
        <li>Cloud-ready for deployment on AWS</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The <strong>E-Commerce Management System</strong> provides a complete platform to manage online sales efficiently, 
        enabling sellers to manage products and orders, admins to monitor the system, and customers to shop conveniently.
      </p>
    </div>
  );
}

export default Ecommerce;
