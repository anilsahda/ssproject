import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SidebarButton from "./SidebarButton";

function Sidebar({ activeMenu }) {
  const location = useLocation();
  const [role, setRole] = useState(null);

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, [location]);

  //  if (!["Intern Developer", "Super Admin"].includes(role)) {
  //   return null;
  // }
  
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
        {activeMenu === "Project" && (
          <>
          <SidebarButton to="/digitallibraryproject" icon="bi-book" label="Digital Library" />
          <SidebarButton to="/employeepayrollproject" icon="bi-cash-stack" label="Employee Payroll" />
          <SidebarButton to="/attendanceportalproject" icon="bi-calendar-check" label="Attendance Portal" />
          <SidebarButton to="/ecommerceproject" icon="bi-cart4" label="SS E-Eommerce" />
          <SidebarButton to="/smarthouseproject" icon="bi-building" label="SS Smart House" />
          <SidebarButton to="/smartjobsproject" icon="bi-briefcase" label="SS Smart Jobs" />
          <SidebarButton to="/smartcaregiverproject" icon="bi-hospital" label="Smart Caregiver" />
          </>
        )}

        {/*{role === "Intern Developer" && activeMenu === "Fullstack" && ( */}
        {activeMenu === "Fullstack" && (
          <>
          <SidebarButton to="/languagestatic" icon="bi-ui-checks-grid" label="Language" />
          <SidebarButton to="/countrystatic" icon="bi-ui-checks-grid" label="Country" />
          <SidebarButton to="/statestatic" icon="bi-caret-down-square" label="State" />
          <SidebarButton to="/districtstatic" icon="bi-diagram-3" label="District" />
          <SidebarButton to="/imageuploadstatic" icon="bi-file-image" label="Image Upload" />
          <SidebarButton to="/radiobuttonstatic" icon="bi-record-circle" label="Radio Button" />
          <SidebarButton to="/searchingstatic" icon="bi-search" label="Searching" />
          <SidebarButton to="/paginationstatic" icon="bi-list-nested" label="Pagination" />
          <SidebarButton to="/exportcsvstatic" icon="bi-list-nested" label="Export CSV" />          
          <SidebarButton to="/checkboxstatic" icon="bi-check-square" label="Checkbox" />
          <SidebarButton to="/multiselectdropdownstatic" icon="bi-check2-square" label="Multi Select Dropdown" />
          <SidebarButton to="/authenticationstatic" icon="bi-shield-lock" label="Authentication" />
            </>
          )}

        {role === "Intern Developer" && activeMenu === "Fullstack" && (
          <>
          <SidebarButton to="/language" icon="bi-ui-checks-grid" label="Languages" />
          <SidebarButton to="/country" icon="bi-ui-checks-grid" label="Country" />
          <SidebarButton to="/state" icon="bi-caret-down-square" label="State" />
          <SidebarButton to="/district" icon="bi-diagram-3" label="District" />
          <SidebarButton to="/imageupload" icon="bi-file-image" label="Image Upload" />
          <SidebarButton to="/radiobutton" icon="bi-record-circle" label="Radio Button" />
          <SidebarButton to="/searching" icon="bi-search" label="Searching" />
          <SidebarButton to="/pagination" icon="bi-list-nested" label="Pagination" />
          <SidebarButton to="/exportcsv" icon="bi-list-nested" label="Export CSV" />          
          <SidebarButton to="/checkbox" icon="bi-check-square" label="Checkbox" />
          <SidebarButton to="/multiselectdropdown" icon="bi-check2-square" label="Multi Select Dropdown" />
          <SidebarButton to="/authentication" icon="bi-shield-lock" label="Authentication" />
            </>
          )}

          {activeMenu === "Dotnet" && (
            <>
            <SidebarButton to="/netprojectsetup" icon="bi-calendar-check" label=".Net Project Setup" />
            <SidebarButton to="/netlanguages" icon="bi-ui-checks-grid" label=".Net Language" />
            <SidebarButton to="/netcountry" icon="bi-ui-checks-grid" label=".Net Country" />
            <SidebarButton to="/netstate" icon="bi-caret-down-square" label=".Net State" />
            <SidebarButton to="/netdistrict" icon="bi-diagram-3" label=".Net District" />
            <SidebarButton to="/netimageupload" icon="bi-file-image" label=".Net Image Upload" />
            <SidebarButton to="/netradiobutton" icon="bi-record-circle" label=".Net Radio Button" />
            <SidebarButton to="/netsearching" icon="bi-search" label=".Net Searching" />
            <SidebarButton to="/netpagination" icon="bi-list-nested" label=".Net Pagination" />
            <SidebarButton to="/netexportcsv" icon="bi-list-nested" label=".Net Export CSV" />
            <SidebarButton to="/netcheckbox" icon="bi-check-square" label=".Net Checkbox" />
            <SidebarButton to="/netmultiselectdropdown" icon="bi-check2-square" label=".Net Multi Select Dropdown" />
            <SidebarButton to="/netjwtauth" icon="bi-shield-lock" label=".Net JWT Auth" />
            <SidebarButton to="/netgoogleauth" icon="bi-google" label=".Net Google Auth" />
            <SidebarButton to="/netfacebookauth" icon="bi-facebook" label=".Net Facebook Auth" />
            <SidebarButton to="/netonionarchitecture" icon="bi-layers" label=".Net Onion Architecture" />
            <SidebarButton to="/netlogger" icon="bi-terminal" label=".Net Logger" />
            <SidebarButton to="/netmicroservices" icon="bi-boxes" label=".Net Microservices" />
            <SidebarButton to="/netcqrsdesignpattern" icon="bi-diagram-3-fill" label=".Net CQRS Design Pattern" />
            <SidebarButton to="/netrepositorydesignpattern" icon="bi-diagram-3-fill" label="Repository Design Pattern" />
            <SidebarButton to="/netquestions" icon="bi-calendar-check" label=".Net Questions" />
            </>
          )}

          {activeMenu === "Springboot" && (
            <>
            <SidebarButton to="/javaprojectsetup" icon="bi-calendar-check" label="Java Project Setup" />
            <SidebarButton to="/javalanguages" icon="bi-ui-checks-grid" label="Java Language" />
            <SidebarButton to="/javacountry" icon="bi-ui-checks-grid" label="Java Country" />
            <SidebarButton to="/javastate" icon="bi-caret-down-square" label="Java State" />
            <SidebarButton to="/javadistrict" icon="bi-diagram-3" label="Java District" />
            <SidebarButton to="/javaimageupload" icon="bi-file-image" label="Java Image Upload" />
            <SidebarButton to="/javaradiobutton" icon="bi-record-circle" label="Java Radio Button" />
            <SidebarButton to="/javasearching" icon="bi-search" label="Java Searching" />
            <SidebarButton to="/javapagination" icon="bi-list-nested" label="Java Pagination" />
            <SidebarButton to="/javaexportcsv" icon="bi-list-nested" label="Java Export CSV" />
            <SidebarButton to="/javacheckbox" icon="bi-check-square" label="Java Checkbox" />
            <SidebarButton to="/javamultiselectdropdown" icon="bi-check2-square" label="Java Multi Select Dropdown" />
            <SidebarButton to="/javajwtauth" icon="bi-shield-lock" label="Java JWT Auth" />
            <SidebarButton to="/javagoogleauth" icon="bi-google" label="Java Google Auth" />
            <SidebarButton to="/javafacebookauth" icon="bi-facebook" label="Java Facebook Auth" />
            <SidebarButton to="/javaonionarchitecture" icon="bi-layers" label="Java Onion Architecture" />
            <SidebarButton to="/javalogger" icon="bi-terminal" label="Java Logger" />
            <SidebarButton to="/javamicroservices" icon="bi-boxes" label="Java Microservices" />
            <SidebarButton to="/javacqrsdesignpattern" icon="bi-diagram-3-fill" label="Java CQRS Design Pattern" />
            <SidebarButton to="/javaquestions" icon="bi-calendar-check" label="Java Questions" />
            </>
          )}

          {activeMenu === "Node" && (
            <>
            <SidebarButton to="/nodeprojectsetup" icon="bi-calendar-check" label="Node Project Setup" />
            <SidebarButton to="/nodelanguages" icon="bi-ui-checks-grid" label="Node Language" />
            <SidebarButton to="/nodecountry" icon="bi-ui-checks-grid" label="Node Country" />
            <SidebarButton to="/nodestate" icon="bi-caret-down-square" label="Node State" />
            <SidebarButton to="/nodedistrict" icon="bi-diagram-3" label="Node District" />
            <SidebarButton to="/nodeimageupload" icon="bi-file-image" label="Node Image Upload" />
            <SidebarButton to="/noderadiobutton" icon="bi-record-circle" label="Node Radio Button" />
            <SidebarButton to="/nodesearching" icon="bi-search" label="Node Searching" />
            <SidebarButton to="/nodepagination" icon="bi-list-nested" label="Node Pagination" />
            <SidebarButton to="/nodeexportcsv" icon="bi-list-nested" label="Node Export CSV" />
            <SidebarButton to="/nodecheckbox" icon="bi-check-square" label="Node Checkbox" />
            <SidebarButton to="/nodemultiselectdropdown" icon="bi-check2-square" label="Node Multi Select Dropdown" />
            <SidebarButton to="/nodejwtauth" icon="bi-shield-lock" label="Node JWT Auth" />
            <SidebarButton to="/nodegoogleauth" icon="bi-google" label="Node Google Auth" />
            <SidebarButton to="/nodefacebookauth" icon="bi-facebook" label="Node Facebook Auth" />
            <SidebarButton to="/nodelogger" icon="bi-terminal" label="Node Logger" />
            <SidebarButton to="/nodemicroservices" icon="bi-boxes" label="Node Microservices" />
            <SidebarButton to="/nodequestions" icon="bi-calendar-check" label="Node Questions" />
            </>
          )}

          {activeMenu === "DSA" && (
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

          {activeMenu === "SQL" && (
            <>
              <SidebarButton to="/sqlcrud" icon="bi-pencil-square" label="SQL CRUD" />
              <SidebarButton to="/sqljoins" icon="bi-pencil-square" label="SQL Joins" />
              <SidebarButton to="/sqlstoredprocedure" icon="bi-gear" label="SQL Stored Procedure" />
              <SidebarButton to="/sqlfunctions" icon="bi-funnel" label="SQL Functions" />
              <SidebarButton to="/sqlacid" icon="bi-shield-check" label="SQL ACID" />
              <SidebarButton to="/sqlindexing" icon="bi-list-nested" label="SQL Indexing" />
              <SidebarButton to="/sqlnormalization" icon="bi-sliders" label="SQL Normalization" />
              <SidebarButton to="/sqlqueriescommands" icon="bi-terminal" label="SQL Queries Commands" />
              <SidebarButton to="/sqlprofiler" icon="bi-graph-up" label="SQL Profiler" />
              <SidebarButton to="/sqltrigger" icon="bi-bell" label="SQL Trigger" />
              <SidebarButton to="/sqlcursor" icon="bi-arrow-left-right" label="SQL Cursor" />
              <SidebarButton to="/sqlquestions" icon="bi-question-circle" label="SQL Questions" />
            </>
          )}

          {activeMenu === "AWS" && (
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

          {activeMenu === "Azure" && (
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

          {activeMenu === "DevOps" && (
            <>
            <SidebarButton to="/amplify" icon="bi-gear-fill" label="Amplify" />
            <SidebarButton to="/jenkins" icon="bi-gear-fill" label="Jenkins Setup" />
            <SidebarButton to="/cicdpipelinesreact" icon="bi-box-arrow-in-up-right" label="CI-CD Pipelines - React" />
            <SidebarButton to="/cicdpipelinesnext" icon="bi-box-arrow-in-up-right" label="CI-CD Pipelines - Next" />
            <SidebarButton to="/cicdpipelinesnode" icon="bi-box-arrow-in-up-right" label="CI-CD Pipelines - Node" />
            <SidebarButton to="/cicdpipelinesnetcore" icon="bi-box-arrow-in-up-right" label="CI-CD Pipelines - .Net Core" />
            <SidebarButton to="/docker" icon="bi-box-seam" label="Docker" />
            <SidebarButton to="/kubernetes" icon="bi-diagram-3-fill" label="Kubernetes" />
            <SidebarButton to="/ansible" icon="bi-tools" label="Ansible" />
            <SidebarButton to="/terraform" icon="bi-layers" label="Terraform" />
            <SidebarButton to="/monitoring" icon="bi-graph-up-arrow" label="Monitoring & Logging" />
            <SidebarButton to="/github" icon="bi-git" label="Git & GitHub" />
            <SidebarButton to="/devopsquestions" icon="bi-question-circle" label="DevOps Questions" />
            </>
          )}

          {activeMenu === "React" && (
            <>
            <SidebarButton to="/reactprojectsetup" icon="bi-calendar-check" label="React Project Setup" />
            <SidebarButton to="/reactlanguages" icon="bi-ui-checks-grid" label="React Language" />
            <SidebarButton to="/reactcountry" icon="bi-ui-checks-grid" label="React Country" />
            <SidebarButton to="/reactstate" icon="bi-caret-down-square" label="React State" />
            <SidebarButton to="/reactdistrict" icon="bi-diagram-3" label="React District" />
            <SidebarButton to="/reactimageupload" icon="bi-file-image" label="React Image Upload" />
            <SidebarButton to="/reactradiobutton" icon="bi-record-circle" label="React Radio Button" />
            <SidebarButton to="/reactcheckbox" icon="bi-check-square" label="React Checkbox" />
            <SidebarButton to="/reactmultiselectdropdown" icon="bi-check2-square" label="React Multi Select Dropdown" />
            <SidebarButton to="/reactsearching" icon="bi-search" label="React Searching" />
            <SidebarButton to="/reactpagination" icon="bi-list-nested" label="React Pagination" />
            <SidebarButton to="/reactjwtauth" icon="bi-shield-lock" label="React JWT Auth" />
            <SidebarButton to="/reactlocalstorage" icon="bi-layers" label="React Local Storage" />
            <SidebarButton to="/reactzustand" icon="bi-diagram-3-fill" label="React Zustand" />
            <SidebarButton to="/reactredux" icon="bi-terminal" label="React Redux" />
            <SidebarButton to="/reactreducer" icon="bi-boxes" label="React Reducer" />
            <SidebarButton to="/reactquestions" icon="bi-calendar-check" label="React Questions" />
            </>
          )}

          {activeMenu === "Next" && (
            <>
            <SidebarButton to="/nextprojectsetup" icon="bi-calendar-check" label="Next Project Setup" />
            <SidebarButton to="/nextlanguages" icon="bi-ui-checks-grid" label="Next Language" />
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
            <SidebarButton to="/nextlocalstorage" icon="bi-layers" label="Next Local Storage" />
            <SidebarButton to="/nextzustand" icon="bi-diagram-3-fill" label="Next Zustand" />
            <SidebarButton to="/nextredux" icon="bi-terminal" label="Next Redux" />
            <SidebarButton to="/nextreducer" icon="bi-boxes" label="Next Reducer" />
            <SidebarButton to="/nextquestions" icon="bi-calendar-check" label="Next Questions" />
            </>
          )}

          {/* {activeMenu === "Angular" && (
            <>
            <SidebarButton to="/angularprojectsetup" icon="bi-calendar-check" label="Angular Project Setup" />
            <SidebarButton to="/angularlanguages" icon="bi-ui-checks-grid" label="Angular Language" />
            <SidebarButton to="/angularcountry" icon="bi-ui-checks-grid" label="Angular Country" />
            <SidebarButton to="/angularstate" icon="bi-caret-down-square" label="Angular State" />
            <SidebarButton to="/angulardistrict" icon="bi-diagram-3" label="Angular District" />
            <SidebarButton to="/angularradiobutton" icon="bi-record-circle" label="Angular Radio Button" />
            <SidebarButton to="/angularcheckbox" icon="bi-check-square" label="Angular Checkbox" />
            <SidebarButton to="/angularmultiselectdropdown" icon="bi-check2-square" label="Angular Multi Select Dropdown" />
            <SidebarButton to="/angularimageupload" icon="bi-file-image" label="Angular Image Upload" />
            <SidebarButton to="/angularsearching" icon="bi-search" label="Angular Searching" />
            <SidebarButton to="/angularpagination" icon="bi-list-nested" label="Angular Pagination" />
            <SidebarButton to="/angularjwtauth" icon="bi-shield-lock" label="Angular JWT Auth" />
            <SidebarButton to="/angularlocalstorage" icon="bi-layers" label="Angular Local Storage" />
            <SidebarButton to="/angularquestions" icon="bi-calendar-check" label="Angular Questions" />
            </>
          )} */}

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

          {role === "Smart House Admin" && (
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

          {role === "Smart House Owner" && (
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

          {role === "Smart House Tenant" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Search Villa
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/smsownercomplain" className={`nav-link d-flex align-items-center ${location.pathname === "/smsownercomplain" ? "active" : "text-light"}`}>
                  <i className="bi bi-buildings me-2"></i> Message
                </Link>
              </li>
            </>
          )}

          {role === "Smart Jobs Admin" && (
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

          {role === "Smart Jobs Company" && (
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

          {role === "Smart Jobs Seeker" && (
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

          {role === "Employee Payroll Admin" && (
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

          {role === "Employee Payroll Employee" && (
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

          {role === "Attendance Portal Admin" && (
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

          {role === "Attendance Portal Staff" && (
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

          {role === "Attendance Portal Student" && (
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

          {role === "ECommerce Admin" && (
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

          {role === "ECommerce Buyer" && (
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

          {role === "Digital Library Admin" && (
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

          {role === "Digital Library Student" && (
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

          {role === "Smart Caregiver Admin" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
            </>
          )}

          {role === "Smart Caregiver Staff" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
            </>
          )}

          {role === "Smart Caregiver Patient" && (
            <>
              <li className="nav-item">
                <Link to="/dashboard" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
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