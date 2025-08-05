import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ activeMenu }) {
  const location = useLocation();
  const [role, setRole] = useState(null);

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, [location]);

  return (
    <div className="bg-dark text-light vh-100" style={{ width: "250px" }}>
      <div className="p-3">
        <ul className="nav nav-pills flex-column gap-2">

        {role === "Interners" && activeMenu === "BasicFullstack" && (
            <>
              <li className="nav-item">
                <Link to="/basiccrud" className={`nav-link d-flex align-items-center ${location.pathname === "/dashboard" ? "active" : "text-light"}`}>
                  <i className="bi bi-speedometer2 me-2"></i> Basic CRUD
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dropdown" className={`nav-link d-flex align-items-center ${location.pathname === "/dropdown" ? "active" : "text-light"}`}>
                  <i className="bi bi-shield-lock me-2"></i> Dropdown
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cascadingddl" className={`nav-link d-flex align-items-center ${location.pathname === "/cascadingddl" ? "active" : "text-light"}`}>
                  <i className="bi bi-people-fill me-2"></i> cascading Dropdown
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/multiselectddl" className={`nav-link d-flex align-items-center ${location.pathname === "/multiselectddl" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> Multi Select Dropdown
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/radiobutton" className={`nav-link d-flex align-items-center ${location.pathname === "/radiobutton" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> Radio Button
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/checkbox" className={`nav-link d-flex align-items-center ${location.pathname === "/checkbox" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> checkbox
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/imageupload" className={`nav-link d-flex align-items-center ${location.pathname === "/imageupload" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> imageupload
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/searching" className={`nav-link d-flex align-items-center ${location.pathname === "/searching" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> searching
                </Link>
              </li> 
              <li className="nav-item">
                <Link to="/pagination" className={`nav-link d-flex align-items-center ${location.pathname === "/pagination" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> pagination
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/jwtauth" className={`nav-link d-flex align-items-center ${location.pathname === "/jwtauth" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> jwtauth
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/googleauth" className={`nav-link d-flex align-items-center ${location.pathname === "/googleauth" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> googleauth
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/facebookauth" className={`nav-link d-flex align-items-center ${location.pathname === "/facebookauth" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> facebookauth
                </Link>
              </li> 
              <li className="nav-item">
                <Link to="/microservices" className={`nav-link d-flex align-items-center ${location.pathname === "/microservices" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> microservices
                </Link>
              </li>
            </>
          )}

          {role === "Interners" && activeMenu === "OurProject" && (
            <>
              <li className="nav-item">
                <Link to="/societymanagement" className={`nav-link d-flex align-items-center ${location.pathname === "/societymanagement" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> societymanagement
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/jobportal" className={`nav-link d-flex align-items-center ${location.pathname === "/radiobutton" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> jobportal
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/employeepayroll" className={`nav-link d-flex align-items-center ${location.pathname === "/employeepayroll" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> employeepayroll
                </Link>
              </li> 
              <li className="nav-item">
                <Link to="/attendanceportal" className={`nav-link d-flex align-items-center ${location.pathname === "/attendanceportal" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> attendanceportal
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ecommerce" className={`nav-link d-flex align-items-center ${location.pathname === "/ecommerce" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> ecommerce
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/digitallibrary" className={`nav-link d-flex align-items-center ${location.pathname === "/digitallibrary" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> digitallibrary
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/matrimonialsystem" className={`nav-link d-flex align-items-center ${location.pathname === "/matrimonialsystem" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> matrimonialsystem
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/hospitalmanagement" className={`nav-link d-flex align-items-center ${location.pathname === "/hospitalmanagement" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> hospitalmanagement
                </Link>
              </li> 
              <li className="nav-item">
                <Link to="/medicalstore" className={`nav-link d-flex align-items-center ${location.pathname === "/medicalstore" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> medicalstore
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shiwanshacademy" className={`nav-link d-flex align-items-center ${location.pathname === "/radiobutton" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> 
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/radiobutton" className={`nav-link d-flex align-items-center ${location.pathname === "/shiwanshacademy" ? "active" : "text-light"}`}>
                  <i className="bi bi-person-check-fill me-2"></i> shiwanshacademy
                </Link>
              </li>
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