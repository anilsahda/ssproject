import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SidebarButton from "./SidebarButton";

function Sidebar({ activeMenu }) {
  const location = useLocation();
  const [role, setRole] = useState(null);

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, [location]);

   if (!["Interners", "Super Admin"].includes(role)) {
    return null;
  }
  
  return (
<div
  className="maxHeight"
  style={{
    width: "250px",
    overflowY: "auto",
    background: "linear-gradient(180deg, #0f2027, #203a43, #2c5364)",
    padding: "1.5rem 1rem",
    paddingTop: "2rem",
    paddingBottom: "4rem",
    color: "#fff",
    boxShadow: "2px 0 5px rgba(0,0,0,0.3)"
  }}
>
  <div className="d-flex flex-column gap-2">
    <ul className="nav nav-pills flex-column gap-2">
        {role === "Interners" && activeMenu === "Project" && (
          <>
          <SidebarButton to="/societymanagement" icon="bi-building" label="Society Management" />
          <SidebarButton to="/jobportal" icon="bi-briefcase" label="Job Portal" />
          <SidebarButton to="/employeepayroll" icon="bi-cash-stack" label="Employee Payroll" />
          <SidebarButton to="/attendanceportal" icon="bi-calendar-check" label="Attendance Portal" />
          <SidebarButton to="/ecommerce" icon="bi-cart4" label="E-commerce" />
          <SidebarButton to="/digitallibrary" icon="bi-book" label="Digital Library" />
          <SidebarButton to="/hospitalmanagement" icon="bi-hospital" label="Hospital Management" />
          </>
        )}

        {role === "Interners" && activeMenu === "Fullstack" && (
          <>
          <SidebarButton to="/language" icon="bi-ui-checks-grid" label="Language" />
          <SidebarButton to="/country" icon="bi-ui-checks-grid" label="Country" />
          <SidebarButton to="/state" icon="bi-caret-down-square" label="State" />
          <SidebarButton to="/district" icon="bi-diagram-3" label="District" />
          <SidebarButton to="/radiobutton" icon="bi-record-circle" label="Radio Button" />
          <SidebarButton to="/checkbox" icon="bi-check-square" label="Checkbox" />
          <SidebarButton to="/multiselectdropdown" icon="bi-check2-square" label="Multi Select Dropdown" />
          <SidebarButton to="/imageupload" icon="bi-file-image" label="Image Upload" />
          <SidebarButton to="/searching" icon="bi-search" label="Searching" />
          <SidebarButton to="/pagination" icon="bi-list-nested" label="Pagination" />
          <SidebarButton to="/jwtauth" icon="bi-shield-lock" label="JWT Auth" />
          <SidebarButton to="/googleauth" icon="bi-google" label="Google Auth" />
          <SidebarButton to="/facebookauth" icon="bi-facebook" label="Facebook Auth" />
            </>
          )}

          {role === "Interners" && activeMenu === "Dotnet" && (
            <>
            <SidebarButton to="/netprojectsetup" icon="bi-calendar-check" label=".Net Project Setup" />
            <SidebarButton to="/netcountry" icon="bi-ui-checks-grid" label=".Net Country" />
            <SidebarButton to="/netstate" icon="bi-caret-down-square" label=".Net State" />
            <SidebarButton to="/netdistrict" icon="bi-diagram-3" label=".Net District" />
            <SidebarButton to="/netradiobutton" icon="bi-record-circle" label=".Net Radio Button" />
            <SidebarButton to="/netcheckbox" icon="bi-check-square" label=".Net Checkbox" />
            <SidebarButton to="/netmultiselectdropdown" icon="bi-check2-square" label=".Net Multi Select Dropdown" />
            <SidebarButton to="/netimageupload" icon="bi-file-image" label=".Net Image Upload" />
            <SidebarButton to="/netsearching" icon="bi-search" label=".Net Searching" />
            <SidebarButton to="/netpagination" icon="bi-list-nested" label=".Net Pagination" />
            <SidebarButton to="/netjwtauth" icon="bi-shield-lock" label=".Net JWT Auth" />
            <SidebarButton to="/netgoogleauth" icon="bi-google" label=".Net Google Auth" />
            <SidebarButton to="/netfacebookauth" icon="bi-facebook" label=".Net Facebook Auth" />
            <SidebarButton to="/netonionarchitecture" icon="bi-layers" label=".Net Onion Architecture" />
            <SidebarButton to="/netcqrsdesignpattern" icon="bi-diagram-3-fill" label=".Net CQRS Design Pattern" />
            <SidebarButton to="/netlogger" icon="bi-terminal" label=".Net Logger" />
            <SidebarButton to="/netmicroservices" icon="bi-boxes" label=".Net Microservices" />
            <SidebarButton to="/netquestions" icon="bi-calendar-check" label=".Net Questions" />
            </>
          )}

          {role === "Interners" && activeMenu === "Springboot" && (
            <>
            <SidebarButton to="/javaprojectsetup" icon="bi-calendar-check" label="Java Project Setup" />
            <SidebarButton to="/javacountry" icon="bi-ui-checks-grid" label="Java Country" />
            <SidebarButton to="/javastate" icon="bi-caret-down-square" label="Java State" />
            <SidebarButton to="/javadistrict" icon="bi-diagram-3" label="Java District" />
            <SidebarButton to="/javaradiobutton" icon="bi-record-circle" label="Java Radio Button" />
            <SidebarButton to="/javacheckbox" icon="bi-check-square" label="Java Checkbox" />
            <SidebarButton to="/javamultiselectdropdown" icon="bi-check2-square" label="Java Multi Select Dropdown" />
            <SidebarButton to="/javaimageupload" icon="bi-file-image" label="Java Image Upload" />
            <SidebarButton to="/javasearching" icon="bi-search" label="Java Searching" />
            <SidebarButton to="/javapagination" icon="bi-list-nested" label="Java Pagination" />
            <SidebarButton to="/javajwtauth" icon="bi-shield-lock" label="Java JWT Auth" />
            <SidebarButton to="/javagoogleauth" icon="bi-google" label="Java Google Auth" />
            <SidebarButton to="/javafacebookauth" icon="bi-facebook" label="Java Facebook Auth" />
            <SidebarButton to="/javaonionarchitecture" icon="bi-layers" label="Java Onion Architecture" />
            <SidebarButton to="/javacqrsdesignpattern" icon="bi-diagram-3-fill" label="Java CQRS Design Pattern" />
            <SidebarButton to="/javalogger" icon="bi-terminal" label="Java Logger" />
            <SidebarButton to="/javamicroservices" icon="bi-boxes" label="Java Microservices" />
            <SidebarButton to="/javaquestions" icon="bi-calendar-check" label="Java Questions" />
            </>
          )}

          {role === "Interners" && activeMenu === "Node" && (
            <>
            <SidebarButton to="/nodeprojectsetup" icon="bi-calendar-check" label="Node Project Setup" />
            <SidebarButton to="/nodecountry" icon="bi-ui-checks-grid" label="Node Country" />
            <SidebarButton to="/nodestate" icon="bi-caret-down-square" label="Node State" />
            <SidebarButton to="/nodedistrict" icon="bi-diagram-3" label="Node District" />
            <SidebarButton to="/noderadiobutton" icon="bi-record-circle" label="Node Radio Button" />
            <SidebarButton to="/nodecheckbox" icon="bi-check-square" label="Node Checkbox" />
            <SidebarButton to="/nodemultiselectdropdown" icon="bi-check2-square" label="Node Multi Select Dropdown" />
            <SidebarButton to="/nodeimageupload" icon="bi-file-image" label="Node Image Upload" />
            <SidebarButton to="/nodesearching" icon="bi-search" label="Node Searching" />
            <SidebarButton to="/nodepagination" icon="bi-list-nested" label="Node Pagination" />
            <SidebarButton to="/nodejwtauth" icon="bi-shield-lock" label="Node JWT Auth" />
            <SidebarButton to="/nodegoogleauth" icon="bi-google" label="Node Google Auth" />
            <SidebarButton to="/nodefacebookauth" icon="bi-facebook" label="Node Facebook Auth" />
            <SidebarButton to="/nodelogger" icon="bi-terminal" label="Node Logger" />
            <SidebarButton to="/nodemicroservices" icon="bi-boxes" label="Node Microservices" />
            <SidebarButton to="/nodequestions" icon="bi-calendar-check" label="Node Questions" />
            </>
          )}

          {role === "Interners" && activeMenu === "DSA" && (
            <>
              <SidebarButton to="/array" icon="bi-bricks" label="Array" />
              <SidebarButton to="/arraylist" icon="bi-card-list" label="ArrayList" />
              <SidebarButton to="/list" icon="bi-list-ul" label="List" />
              <SidebarButton to="/hashmap" icon="bi-diagram-3" label="Hashmap" />
              <SidebarButton to="/Dictionary" icon="bi-book" label="Dictionary" />
              <SidebarButton to="/Hashtable" icon="bi-grid-3x3-gap" label="Hashtable" />
              <SidebarButton to="/binarysearch" icon="bi-search" label="Binary Search" />
              <SidebarButton to="/linearsearch" icon="bi-search" label="Linear Search" />
              <SidebarButton to="/selectionsort" icon="bi-sort-down-alt" label="Selection Sort" />
              <SidebarButton to="/quicksort" icon="bi-lightning-fill" label="Quick Sort" />
              <SidebarButton to="/linkedlist" icon="bi-link-45deg" label="Linked List" />
              <SidebarButton to="/dsaquestions" icon="bi-question-circle" label="DSA Questions" />
            </>
          )}

          {role === "Interners" && activeMenu === "SQL" && (
            <>
              <SidebarButton to="/sqlcrud" icon="bi-pencil-square" label="SQL CRUD" />
              <SidebarButton to="/sqlstoredprocedure" icon="bi-gear" label="SQL Stored Procedure" />
              <SidebarButton to="/sqlfunctions" icon="bi-funnel" label="SQL Functions" />
              <SidebarButton to="/sqltrigger" icon="bi-bell" label="SQL Trigger" />
              <SidebarButton to="/sqlcursor" icon="bi-arrow-left-right" label="SQL Cursor" />
              <SidebarButton to="/sqlprofiler" icon="bi-graph-up" label="SQL Profiler" />
              <SidebarButton to="/sqlacid" icon="bi-shield-check" label="SQL ACID" />
              <SidebarButton to="/sqlindexing" icon="bi-list-nested" label="SQL Indexing" />
              <SidebarButton to="/sqlnormalization" icon="bi-sliders" label="SQL Normalization" />
              <SidebarButton to="/sqlqueriescommands" icon="bi-terminal" label="SQL Queries Commands" />
              <SidebarButton to="/sqlquestions" icon="bi-question-circle" label="SQL Questions" />
            </>
          )}

          {role === "Interners" && activeMenu === "AWS" && (
            <>
              <SidebarButton to="/awsaccountsetup" icon="bi-person-gear" label="AWS Account Setup" />
              <SidebarButton to="/awsiam" icon="bi-person-lock" label="AWS IAM" />
              <SidebarButton to="/awsectwoinstance" icon="bi-hdd-network" label="AWS EC2 Instance" />
              <SidebarButton to="/awsthreebucket" icon="bi-bucket" label="AWS S3 Bucket" />
              <SidebarButton to="/awslambda" icon="bi-lightning-charge" label="AWS Lambda" />
              <SidebarButton to="/awsdynamodb" icon="bi-database" label="AWS Dynamo DB" />
              <SidebarButton to="/awsvpc" icon="bi-diagram-3-fill" label="AWS VPC" />
              <SidebarButton to="/awscloudwatch" icon="bi-eye" label="AWS Cloud Watch" />
              <SidebarButton to="/awsquestions" icon="bi-question-circle" label="AWS Questions" />
            </>
          )}

          {role === "Interners" && activeMenu === "Azure" && (
            <>
              <SidebarButton to="/azureaccountsetup" icon="bi-person-gear" label="Azure Account Setup" />
              <SidebarButton to="/azureblobstorage" icon="bi-bucket" label="Azure Blob Storage" />
              <SidebarButton to="/azurefuncions" icon="bi-lightning-charge-fill" label="Azure Functions" />
              <SidebarButton to="/azureappinsight" icon="bi-eye-fill" label="Azure App Insight" />
              <SidebarButton to="/azurecosmosdb" icon="bi-database-fill-gear" label="Azure Cosmos DB" />
              <SidebarButton to="/azurevirtualmachines" icon="bi-hdd-stack" label="Azure Virtual Machines" />
              <SidebarButton to="/azureaks" icon="bi-diagram-3" label="Azure Kubernetes Service (AKS)" />
              <SidebarButton to="/azuresql" icon="bi-database-fill" label="Azure SQL Database" />
              <SidebarButton to="/azuremonitor" icon="bi-graph-up" label="Azure Monitor" />
              <SidebarButton to="/azurerbac" icon="bi-person-lock" label="Azure RBAC" />
              <SidebarButton to="/azurequestions" icon="bi-question-circle" label="Azure Questions" />
            </>
          )}

          {role === "Interners" && activeMenu === "DevOps" && (
            <>
              <SidebarButton to="/cicdpipelines" icon="bi-arrow-repeat" label="CI-CD Pipelines" />
              <SidebarButton to="/jenkins" icon="bi-gear-fill" label="Jenkins" />
              <SidebarButton to="/docker" icon="bi-box" label="Docker" />
              <SidebarButton to="/kubernetes" icon="bi-diagram-3-fill" label="Kubernetes" />
              <SidebarButton to="/ansible" icon="bi-tools" label="Ansible" />
              <SidebarButton to="/terraform" icon="bi-layers" label="Terraform" />
              <SidebarButton to="/monitoring" icon="bi-graph-up-arrow" label="Monitoring & Logging" />
              <SidebarButton to="/gitgithub" icon="bi-git" label="Git & GitHub" />
              <SidebarButton to="/devopsbestpractices" icon="bi-stars" label="DevOps Best Practices" />
              <SidebarButton to="/devopsquestions" icon="bi-question-circle" label="DevOps Questions" />
            </>
          )}

          {role === "Interners" && activeMenu === "React" && (
            <>
            <SidebarButton to="/reactprojectsetup" icon="bi-calendar-check" label="React Project Setup" />
            <SidebarButton to="/reactcountry" icon="bi-ui-checks-grid" label="React Country" />
            <SidebarButton to="/reactstate" icon="bi-caret-down-square" label="React State" />
            <SidebarButton to="/reactdistrict" icon="bi-diagram-3" label="React District" />
            <SidebarButton to="/reactradiobutton" icon="bi-record-circle" label="React Radio Button" />
            <SidebarButton to="/reactcheckbox" icon="bi-check-square" label="React Checkbox" />
            <SidebarButton to="/reactmultiselectdropdown" icon="bi-check2-square" label="React Multi Select Dropdown" />
            <SidebarButton to="/reactimageupload" icon="bi-file-image" label="React Image Upload" />
            <SidebarButton to="/reactsearching" icon="bi-search" label="React Searching" />
            <SidebarButton to="/reactpagination" icon="bi-list-nested" label="React Pagination" />
            <SidebarButton to="/reactjwtauth" icon="bi-shield-lock" label="React JWT Auth" />
            <SidebarButton to="/reactgoogleauth" icon="bi-google" label="React Google Auth" />
            <SidebarButton to="/reactfacebookauth" icon="bi-facebook" label="React Facebook Auth" />
            <SidebarButton to="/reactlocalstorage" icon="bi-layers" label="React Local Storage" />
            <SidebarButton to="/reactzustand" icon="bi-diagram-3-fill" label="React Zustand" />
            <SidebarButton to="/reactredux" icon="bi-terminal" label="React Redux" />
            <SidebarButton to="/reactreducer" icon="bi-boxes" label="React Reducer" />
            <SidebarButton to="/reactquestions" icon="bi-calendar-check" label="React Questions" />
            </>
          )}

          {role === "Interners" && activeMenu === "Next" && (
            <>
            <SidebarButton to="/nextprojectsetup" icon="bi-calendar-check" label="Next Project Setup" />
            <SidebarButton to="/nextcountry" icon="bi-ui-checks-grid" label="Next Country" />
            <SidebarButton to="/nextstate" icon="bi-caret-down-square" label="Next State" />
            <SidebarButton to="/nextdistrict" icon="bi-diagram-3" label="Next District" />
            <SidebarButton to="/nextradiobutton" icon="bi-record-circle" label="Next Radio Button" />
            <SidebarButton to="/nextcheckbox" icon="bi-check-square" label="Next Checkbox" />
            <SidebarButton to="/nextmultiselectdropdown" icon="bi-check2-square" label="Next Multi Select Dropdown" />
            <SidebarButton to="/nextimageupload" icon="bi-file-image" label="Next Image Upload" />
            <SidebarButton to="/nextsearching" icon="bi-search" label="Next Searching" />
            <SidebarButton to="/nextpagination" icon="bi-list-nested" label="Next Pagination" />
            <SidebarButton to="/nextjwtauth" icon="bi-shield-lock" label="Next JWT Auth" />
            <SidebarButton to="/nextgoogleauth" icon="bi-google" label="Next Google Auth" />
            <SidebarButton to="/nextfacebookauth" icon="bi-facebook" label="Next Facebook Auth" />
            <SidebarButton to="/nextlocalstorage" icon="bi-layers" label="Next Local Storage" />
            <SidebarButton to="/nextzustand" icon="bi-diagram-3-fill" label="Next Zustand" />
            <SidebarButton to="/nextredux" icon="bi-terminal" label="Next Redux" />
            <SidebarButton to="/nextreducer" icon="bi-boxes" label="Next Reducer" />
            <SidebarButton to="/nextquestions" icon="bi-calendar-check" label="Next Questions" />
            </>
          )}

          {role === "Super Admin" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/role" className={`nav-link d-flex align-items-center ${location.pathname === "/role" ? "active" : "text-light"}`}>
                  <i className="bi bi-shield-lock me-2"></i> Role
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className={`nav-link d-flex align-items-center ${location.pathname === "/user" ? "active" : "text-light"}`}>
                  <i className="bi bi-people-fill me-2"></i> User
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/userrole" className={`nav-link d-flex align-items-center ${location.pathname === "/userrole" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> User Role
                </Link>
              </li>
            </>
          )}

          {role === "SMS Admin" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/society" className={`nav-link d-flex align-items-center ${location.pathname === "/society" ? "active" : "text-light"}`}>
                  <i className="bi bi-buildings me-2"></i> Add Society
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/house" className={`nav-link d-flex align-items-center ${location.pathname === "/house" ? "active" : "text-light"}`}>
                  <i className="bi bi-buildings me-2"></i> Add House
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/housereport" className={`nav-link d-flex align-items-center ${location.pathname === "/housereport" ? "active" : "text-light"}`}>
                  <i className="bi bi-buildings me-2"></i> House Report
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/allocatehouse" className={`nav-link d-flex align-items-center ${location.pathname === "/allocatehouse" ? "active" : "text-light"}`}>
                  <i className="bi bi-buildings me-2"></i> Allocate House
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/memberreport" className={`nav-link d-flex align-items-center ${location.pathname === "/memberreport" ? "active" : "text-light"}`}>
                  <i className="bi bi-buildings me-2"></i> Member Report
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/smsadmincomplain" className={`nav-link d-flex align-items-center ${location.pathname === "/smsadmincomplain" ? "active" : "text-light"}`}>
                  <i className="bi bi-buildings me-2"></i> Complain
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sellhousereport" className={`nav-link d-flex align-items-center ${location.pathname === "/sellhousereport" ? "active" : "text-light"}`}>
                  <i className="bi bi-buildings me-2"></i> Sell House Report
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/renthousereport" className={`nav-link d-flex align-items-center ${location.pathname === "/renthousereport" ? "active" : "text-light"}`}>
                  <i className="bi bi-buildings me-2"></i> Rent House Report
                </Link>
              </li>
            </>
          )}

          {role === "SMS Owner" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/smsownercomplain" className={`nav-link d-flex align-items-center ${location.pathname === "/smsownercomplain" ? "active" : "text-light"}`}>
                  <i className="bi bi-buildings me-2"></i> Complain
                </Link>
              </li>
            </>
          )}

          {role === "JPS Admin" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/jobseekerreport" className={`nav-link d-flex align-items-center ${location.pathname === "/jobseekerreport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Job Seeker Report
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/companyreport" className={`nav-link d-flex align-items-center ${location.pathname === "/companyreport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Company Report
                </Link>
              </li>              
              <li className="nav-item">
                <Link to="/feedbackreport" className={`nav-link d-flex align-items-center ${location.pathname === "/feedbackreport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Feedback Report
                </Link>
              </li>
            </>
          )}          

          {role === "JPS Employer" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/postnewjobs" className={`nav-link d-flex align-items-center ${location.pathname === "/postnewjobs" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Post New Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mypostedjobs" className={`nav-link d-flex align-items-center ${location.pathname === "/mypostedjobs" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> My Posted Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profilematch" className={`nav-link d-flex align-items-center ${location.pathname === "/profilematch" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Profile Match
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/appliedjobs" className={`nav-link d-flex align-items-center ${location.pathname === "/appliedjobs" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Applied Jobs
                </Link>
              </li>
            </>
          )}

          {role === "JPS Employee" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/jobmatch" className={`nav-link d-flex align-items-center ${location.pathname === "/jobmatch" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Job Matche
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/appliedjobs" className={`nav-link d-flex align-items-center ${location.pathname === "/appliedjobs" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Applied Job
                </Link>
              </li>              
            </>
          )}

          {role === "EPS Admin" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/class" className={`nav-link d-flex align-items-center ${location.pathname === "/class" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Class
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/employee" className={`nav-link d-flex align-items-center ${location.pathname === "/employee" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Employee
                </Link>
              </li>              
              <li className="nav-item">
                <Link to="/employeereport" className={`nav-link d-flex align-items-center ${location.pathname === "/employeereport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Employee Report
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/leave" className={`nav-link d-flex align-items-center ${location.pathname === "/leave" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Leave
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/salary" className={`nav-link d-flex align-items-center ${location.pathname === "/salary" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Salary
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/salaryreport" className={`nav-link d-flex align-items-center ${location.pathname === "/salaryreport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Salary Report
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/yearwisereport" className={`nav-link d-flex align-items-center ${location.pathname === "/yearwisereport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Year Wise Report
                </Link>
              </li>
            </>
          )}

          {role === "EPS Employee" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/leave" className={`nav-link d-flex align-items-center ${location.pathname === "/leave" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Leave
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/leavereport" className={`nav-link d-flex align-items-center ${location.pathname === "/leavereport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Leave Report
                </Link>
              </li>              
              <li className="nav-item">
                <Link to="/salaryreport" className={`nav-link d-flex align-items-center ${location.pathname === "/salaryreport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Salary Report
                </Link>
              </li>
            </>
          )}

          {role === "APS Admin" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/standard" className={`nav-link d-flex align-items-center ${location.pathname === "/standard" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Standard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/division" className={`nav-link d-flex align-items-center ${location.pathname === "/division" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Division
                </Link>
              </li>              
              <li className="nav-item">
                <Link to="/staff" className={`nav-link d-flex align-items-center ${location.pathname === "/staff" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Staff
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/staffreport" className={`nav-link d-flex align-items-center ${location.pathname === "/staffreport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Staff Report
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/complain" className={`nav-link d-flex align-items-center ${location.pathname === "/complain" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Complain
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/leave" className={`nav-link d-flex align-items-center ${location.pathname === "/leave" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Leave
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/studentreports" className={`nav-link d-flex align-items-center ${location.pathname === "/studentreports" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Student Reports
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/feedback" className={`nav-link d-flex align-items-center ${location.pathname === "/feedback" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Feedback
                </Link>
              </li>
            </>
          )}

          {role === "APS Staff" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/student" className={`nav-link d-flex align-items-center ${location.pathname === "/student" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Student
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/studentreport" className={`nav-link d-flex align-items-center ${location.pathname === "/studentreport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Student Report
                </Link>
              </li>              
              <li className="nav-item">
                <Link to="/attendance" className={`nav-link d-flex align-items-center ${location.pathname === "/attendancereport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Attendance
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/attendancereport" className={`nav-link d-flex align-items-center ${location.pathname === "/attendancereport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Attendance Report
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/advancereport" className={`nav-link d-flex align-items-center ${location.pathname === "/advancereport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Advance Report
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/advanceattreport" className={`nav-link d-flex align-items-center ${location.pathname === "/advanceattreport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Advance Attendance Report
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/complain" className={`nav-link d-flex align-items-center ${location.pathname === "/complain" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Complain
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/leave" className={`nav-link d-flex align-items-center ${location.pathname === "/leave" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Leave
                </Link>
              </li>
            </>
          )}

          {role === "APS Student" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/leave" className={`nav-link d-flex align-items-center ${location.pathname === "/leave" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Leave
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/complain" className={`nav-link d-flex align-items-center ${location.pathname === "/complain" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Complain
                </Link>
              </li>              
              <li className="nav-item">
                <Link to="/attendancereport" className={`nav-link d-flex align-items-center ${location.pathname === "/attendancereport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Attendance Report
                </Link>
              </li>
            </>
          )}

          {role === "ECS Admin" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category" className={`nav-link d-flex align-items-center ${location.pathname === "/category" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Add Category
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/item" className={`nav-link d-flex align-items-center ${location.pathname === "/item" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Add Item
                </Link>
              </li>              
              <li className="nav-item">
                <Link to="/quantity" className={`nav-link d-flex align-items-center ${location.pathname === "/quantity" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Add Quantity
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/vieworder" className={`nav-link d-flex align-items-center ${location.pathname === "/vieworder" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> View Order
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/viewpayment" className={`nav-link d-flex align-items-center ${location.pathname === "/viewpayment" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> View Payment
                </Link>
              </li>              
              <li className="nav-item">
                <Link to="/reports" className={`nav-link d-flex align-items-center ${location.pathname === "/reports" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Reports
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/feedback" className={`nav-link d-flex align-items-center ${location.pathname === "/feedback" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Feedback
                </Link>
              </li>
            </>
          )}

          {role === "ECS Buyer" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/myorder" className={`nav-link d-flex align-items-center ${location.pathname === "/myorder" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> My Order
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mypayment" className={`nav-link d-flex align-items-center ${location.pathname === "/mypayment" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> My Payment
                </Link>
              </li>              
              <li className="nav-item">
                <Link to="/mycart" className={`nav-link d-flex align-items-center ${location.pathname === "/mycart" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> My Cart
                </Link>
              </li>
            </>
          )}

          {role === "DLS Admin" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/publication" className={`nav-link d-flex align-items-center ${location.pathname === "/publication" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Add Publication
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/book" className={`nav-link d-flex align-items-center ${location.pathname === "/book" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Add Book
                </Link>
              </li>              
              <li className="nav-item">
                <Link to="/bookreport" className={`nav-link d-flex align-items-center ${location.pathname === "/bookreport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Book Report
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/branch" className={`nav-link d-flex align-items-center ${location.pathname === "/branch" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Add Branch
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/student" className={`nav-link d-flex align-items-center ${location.pathname === "/student" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Add Student
                </Link>
              </li>              
              <li className="nav-item">
                <Link to="/studentreports" className={`nav-link d-flex align-items-center ${location.pathname === "/studentreports" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Student Report
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/issuebook" className={`nav-link d-flex align-items-center ${location.pathname === "/issuebook" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Issue Book
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/issuereport" className={`nav-link d-flex align-items-center ${location.pathname === "/issuereport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Issue Report
                </Link>
              </li>              
              <li className="nav-item">
                <Link to="/returnbook" className={`nav-link d-flex align-items-center ${location.pathname === "/returnbook" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Return Book
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/penalty" className={`nav-link d-flex align-items-center ${location.pathname === "/penalty" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Penalty
                </Link>
              </li>
            </>
          )}

          {role === "DLS Student" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/bookreport" className={`nav-link d-flex align-items-center ${location.pathname === "/bookreport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Book Report
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/penaltyreport" className={`nav-link d-flex align-items-center ${location.pathname === "/penaltyreport" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Penalty Report
                </Link>
              </li>              
            </>
          )}

          {role === "MS Admin" && (
            <>
              <li className="nav-item">
                <Link to="/newaccount" className={`nav-link d-flex align-items-center ${location.pathname === "/newaccount" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> New Account
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/activeaccount" className={`nav-link d-flex align-items-center ${location.pathname === "/activeaccount" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Active Account
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/deactiveaccount" className={`nav-link d-flex align-items-center ${location.pathname === "/deactiveaccount" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Deactive Account
                </Link>
              </li>              
            </>
          )}

          {role === "MS Member" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/message" className={`nav-link d-flex align-items-center ${location.pathname === "/message" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Message
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profilealert" className={`nav-link d-flex align-items-center ${location.pathname === "/profilealert" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Profile Alert
                </Link>
              </li>              
            </>
          )}

          {role === "HMS Admin" && (
            <>
              <li className="nav-item">
                <Link to="/room" className={`nav-link d-flex align-items-center ${location.pathname === "/room" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Add Room
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/doctor" className={`nav-link d-flex align-items-center ${location.pathname === "/doctor" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Add Doctor
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/patient" className={`nav-link d-flex align-items-center ${location.pathname === "/patient" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Add Patient
                </Link>
              </li>              
              <li className="nav-item">
                <Link to="/bill" className={`nav-link d-flex align-items-center ${location.pathname === "/bill" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Bill
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/payment" className={`nav-link d-flex align-items-center ${location.pathname === "/payment" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Payment
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/reports" className={`nav-link d-flex align-items-center ${location.pathname === "/reports" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Reports
                </Link>
              </li>              
            </>
          )}

          {role === "MSS Admin" && (
            <>
              <li className="nav-item">
                <Link to="/stock" className={`nav-link d-flex align-items-center ${location.pathname === "/stock" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Add Stock
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/company" className={`nav-link d-flex align-items-center ${location.pathname === "/company" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Add Company
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/client" className={`nav-link d-flex align-items-center ${location.pathname === "/client" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Add Client
                </Link>
              </li>              
              <li className="nav-item">
                <Link to="/sell" className={`nav-link d-flex align-items-center ${location.pathname === "/sell" ? "active" : "text-light"}`}>
                  <i className="bi bi-house-door-fill me-2"></i> Sell
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;