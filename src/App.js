import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { useState } from "react";
import Role from "./SuperAdmin/Role";
import User from "./SuperAdmin/User";
import UserRole from "./SuperAdmin/UserRole";
import SuperHeader from "./Components/SuperHeader";
import Sidebar from "./Components/Sidebar";
import MultiselectDropdown from "./Fullstack/MultiselectDropdown";
import CheckBox from "./Fullstack/Checkbox";
import ImageUpload from "./Fullstack/ImageUpload";
import Authentication from "./Fullstack/Authentication";
import Pagination from "./Fullstack/Pagination";
import RadioButton from "./Fullstack/RadioButton";
import Searching from "./Fullstack/Searching";
import Array from "./DSA/Array";
import Arraylist from "./DSA/Arraylist";
import List from "./DSA/List";
import Hashmap from "./DSA/Hashmap";
import Dictionary from "./DSA/Dictionary";
import Hashtable from "./DSA/Hashtable";
import Binarysearch from "./DSA/Binarysearch";
import Linearsearch from "./DSA/Linearsearch";
import Selectionsort from "./DSA/Selectionsort";
import Quicksort from "./DSA/Quicksort";
import Linkedlist from "./DSA/Linkedlist";
import Dsaquestions from "./DSA/Dsaquestions";
import Sqlcrud from "./SQL/Sqlcrud";
import Sqlstoredprocedure from "./SQL/Sqlstoredprocedure";
import Sqlfunctions from "./SQL/Sqlfunctions";
import Sqltrigger from "./SQL/Sqltrigger";
import Sqlcursor from "./SQL/Sqlcursor";
import Sqlprofiler from "./SQL/Sqlprofiler";
import Sqlacid from "./SQL/Sqlacid";
import Sqlindexing from "./SQL/Sqlindexing";
import Sqlnormalization from "./SQL/Sqlnormalization";
import Sqlqueriescommands from "./SQL/Sqlqueriescommands";
import Sqlquestions from "./SQL/Sqlquestions";
import Awsaccountsetup from "./AWS/Awsaccountsetup";
import Awsiam from "./AWS/Awsiam";
import Awsectwoinstance from "./AWS/Awsectwoinstance";
import Awsthreebucket from "./AWS/Awsthreebucket";
import Awslambda from "./AWS/Awslambda";
import Awsdynamodb from "./AWS/Awsdynamodb";
import Awscloudwatch from "./AWS/Awscloudwatch";
import Awsquestions from "./AWS/Awsquestions";
import Azureaccountsetup from "./Azure/Azureaccountsetup";
import Azureblobstorage from "./Azure/Azureblobstorage";
import Azurefuncions from "./Azure/Azurefuncions";
import Azureappinsight from "./Azure/Azureappinsight";
import Azurecosmosdb from "./Azure/Azurecosmosdb";
import Azurevirtualmachines from "./Azure/Azurevirtualmachines";
import Azureaks from "./Azure/Azureaks";
import Azuresql from "./Azure/Azuresql";
import Azuremonitor from "./Azure/Azuremonitor";
import Azurerbac from "./Azure/Azurerbac";
import Azurequestions from "./Azure/Azurequestions";
import Jenkins from "./DevOps/Jenkins";
import Docker from "./DevOps/Docker";
import Kubernetes from "./DevOps/Kubernetes";
import Ansible from "./DevOps/Ansible";
import Terraform from "./DevOps/Terraform";
import Monitoring from "./DevOps/Monitoring";
import Devopsquestions from "./DevOps/Devopsquestions";
import Reactprojectsetup from "./React/Reactprojectsetup";
import Reactmultiselectdropdown from "./React/Reactmultiselectdropdown";
import Reactradiobutton from "./React/Reactradiobutton";
import Reactcheckbox from "./React/Reactcheckbox";
import Reactsearching from "./React/Reactsearching";
import Reactpagination from "./React/Reactpagination";
import Reactjwtauth from "./React/Reactjwtauth";
import Reactzustand from "./React/Reactzustand";
import Reactredux from "./React/Reactredux";
import Reactquestions from "./React/Reactquestions";
import Nextprojectsetup from "./Next/Nextprojectsetup";
import Nextmultiselectdropdown from "./Next/Nextmultiselectdropdown";
import Nextradiobutton from "./Next/Nextradiobutton";
import Nextcheckbox from "./Next/Nextcheckbox";
import Nextsearching from "./Next/Nextsearching";
import Nextpagination from "./Next/Nextpagination";
import Nextjwtauth from "./Next/Nextjwtauth";
import Nextzustand from "./Next/Nextzustand";
import Nextredux from "./Next/Nextredux";
import Nextreducer from "./Next/Nextreducer";
import Nextquestions from "./Next/Nextquestions";
import Reactreducer from "./React/Reactreducer";
import Netquestions from "./Dotnet/Netquestions";
import Netprojectsetup from "./Dotnet/Netprojectsetup";
import Javaquestions from "./Java/Javaquestions";
import Javaprojectsetup from "./Java/Javaprojectsetup";
import Netcheckbox from "./Dotnet/Netcheckbox";
import Netcqrsdesignpattern from "./Dotnet/Netcqrsdesignpattern";
import Netfacebookauth from "./Dotnet/Netfacebookauth";
import Netgoogleauth from "./Dotnet/Netgoogleauth";
import Netimageupload from "./Dotnet/Netimageupload";
import Netjwtauth from "./Dotnet/Netjwtauth";
import Netlogger from "./Dotnet/Netlogger";
import Netmicroservices from "./Dotnet/Netmicroservices";
import Netmultiselectdropdown from "./Dotnet/Netmultiselectdropdown";
import Netpagination from "./Dotnet/Netpagination";
import Netradiobutton from "./Dotnet/Netradiobutton";
import Netsearching from "./Dotnet/Netsearching";
import Javacheckbox from "./Java/Javacheckbox";
import Javacqrsdesignpattern from "./Java/Javacqrsdesignpattern";
import Javafacebookauth from "./Java/Javafacebookauth";
import Javagoogleauth from "./Java/Javagoogleauth";
import Javaimageupload from "./Java/Javaimageupload";
import Javajwtauth from "./Java/Javajwtauth";
import Javalogger from "./Java/Javalogger";
import Javamicroservices from "./Java/Javamicroservices";
import Javamultiselectdropdown from "./Java/Javamultiselectdropdown";
import Javaonionarchitecture from "./Java/Javaonionarchitecture";
import Javaradiobutton from "./Java/Javaradiobutton";
import Javapagination from "./Java/Javapagination";
import Javasearching from "./Java/Javasearching";
import Nodecheckbox from "./Node/Nodecheckbox";
import Nodefacebookauth from "./Node/Nodefacebookauth";
import Nodegoogleauth from "./Node/Nodegoogleauth";
import Nodeimageupload from "./Node/Nodeimageupload";
import Nodejwtauth from "./Node/Nodejwtauth";
import Nodelogger from "./Node/Nodelogger";
import Nodemicroservices from "./Node/Nodemicroservices";
import Nodemultiselectdropdown from "./Node/Nodemultiselectdropdown";
import Nodepagination from "./Node/Nodepagination";
import Noderadiobutton from "./Node/Noderadiobutton";
import Nodesearching from "./Node/Nodesearching";
import Nodeprojectsetup from "./Node/Nodeprojectsetup";
import Nodequestions from "./Node/Nodequestions";
import Nextimageupload from "./Next/Nextimageupload";
import Country from "./Fullstack/Country";
import State from "./Fullstack/State";
import District from "./Fullstack/District";
import Netcountry from "./Dotnet/Netcountry";
import Netdistrict from "./Dotnet/Netdistrict";
import Netstate from "./Dotnet/Netstate";
import Javacountry from "./Java/Javacountry";
import Javadistrict from "./Java/Javadistrict";
import Javastate from "./Java/Javastate";
import Nodecountry from "./Node/Nodecountry";
import Nodedistrict from "./Node/Nodedistrict";
import Nodestate from "./Node/Nodestate";
import Reactcountry from "./React/Reactcountry";
import Reactstate from "./React/Reactstate";
import Reactdistrict from "./React/Reactdistrict";
import Nextcountry from "./Next/Nextcountry";
import Nextdistrict from "./Next/Nextdistrict";
import Nextstate from "./Next/Nextstate";
import Languages from "./Fullstack/Languages";
import Netlanguages from "./Dotnet/Netlanguages";
import Nodelanguages from "./Node/Nodelanguages";
import Javalanguages from "./Java/Javalanguages";
import Nextlanguages from "./Next/Nextlanguages";
import Reactlanguages from "./React/Reactlanguages";
import Exportcsv from "./Fullstack/Exportcsv";
import Netonionarchitecture from "./Dotnet/Netonionarchitecture";
import Netrepositorydesignpattern from "./Dotnet/Netrepositorydesignpattern";
import Netexportcsv from "./Dotnet/Netexportcsv";
import Sqljoins from "./SQL/Sqljoins";
import Reactimageupload from "./React/Reactimageupload";
import CicdpipelinesReact from "./DevOps/CicdpipelinesReact";
import CicdpipelinesNext from "./DevOps/CicdpipelinesNext";
import CicdpipelinesNode from "./DevOps/CicdpipelinesNode";
import CicdpipelinesNetCore from "./DevOps/CicdpipelinesNetCore";
import Github from "./DevOps/Github";
import LanguagesStatic from "./FullstackStatic/LanguagesStatic";
import CountryStatic from "./FullstackStatic/CountryStatic";
import StateStatic from "./FullstackStatic/StateStatic";
import DistrictStatic from "./FullstackStatic/DistrictStatic";
import RadioButtonStatic from "./FullstackStatic/RadioButtonStatic";
import MultiselectDropdownStatic from "./FullstackStatic/MultiselectDropdownStatic";
import AuthenticationStatic from "./FullstackStatic/AuthenticationStatic";
import PaginationStatic from "./FullstackStatic/PaginationStatic";
import SearchingStatic from "./FullstackStatic/SearchingStatic";
import ImageUploadStatic from "./FullstackStatic/ImageUploadStatic";
import ExportcsvStatic from "./FullstackStatic/ExportcsvStatic";
import CheckboxStatic from "./FullstackStatic/CheckboxStatic";
import Angularprojectsetup from "./Angular/Angularprojectsetup";
import Angularlanguages from "./Angular/Angularlanguages";
import Angularcountry from "./Angular/Angularcountry";
import Angularstate from "./Angular/Angularstate";
import Angulardistrict from "./Angular/Angulardistrict";
import Angularmultiselectdropdown from "./Angular/Angularmultiselectdropdown";
import Angularradiobutton from "./Angular/Angularradiobutton";
import Angularcheckbox from "./Angular/Angularcheckbox";
import Angularimageupload from "./Angular/Angularimageupload";
import Angularsearching from "./Angular/Angularsearching";
import Angularpagination from "./Angular/Angularpagination";
import Angularjwtauth from "./Angular/Angularjwtauth";
import Angularquestions from "./Angular/Angularquestions";
import Javaexportcsv from "./Java/Javaexportcsv";
import Nodeexportcsv from "./Node/Nodeexportcsv";
import CicdpipelinesJava from "./DevOps/CicdpipelinesJava";
import SSLogistrics from "./Projects/Logistrics/SSLogistrics";
import SSECommerce from "./Projects/ECommerce/EcommerceProject";
import SSDigitalLibrary from "./Projects/DigitalLibrary/DigitalLibraryProject";
import SSEmployeePayroll from "./Projects/EmployeePayroll/SSEmployeePayroll";
import SSAttendancePortal from "./Projects/AttendancePortal/AttendancePortalProject";
import SSEHouse from "./Projects/SmartHouse/SmartHouseProject";
import SSJobs from "./Projects/SmartJobs/SmartJobsProject";
import SSHealthInsurance from "./Projects/HealthInsurance/SSHealthInsurance";
import SSIntern from "./Fullstack/SSIntern";
import Awsrds from "./AWS/Awsrds";
import Amplify from "./AWS/Amplify";
import SSHotel from "./Projects/SSHotel/SSHotel";
import HealthCare from "./Projects/HealthCare/HealthCare";
import Netemployee from "./Dotnet/Netemployee";
import Javaemployee from "./Java/Javaemployee";
import Nodeemployee from "./Node/Nodeemployee";
import NextMultiLayout from "./Next/NextMultiLayout";
import PythonProjectSetup from "./Python/Pythonprojectsetup";
import Pythoncheckbox from "./Python/Pythoncheckbox";
import Pythoncountry from "./Python/Pythoncountry";
import Pythonlanguages from "./Python/Pythonlanguages";
import Pythonstate from "./Python/Pythonstate";
import Pythondistrict from "./Python/Pythondistrict";
import Pythonimageupload from "./Python/Pythonimageupload";
import Pythonradiobutton from "./Python/Pythonradiobutton";
import Pythonsearching from "./Python/Pythonsearching";
import Pythonpagination from "./Python/Pythonpagination";
import Pythonexportcsv from "./Python/Pythonexportcsv";
import Pythonmultiselectdropdown from "./Python/Pythonmultiselectdropdown";
import Pythonjwtauth from "./Python/Pythonjwtauth";
import Pythonquestions from "./Python/Pythonquestions";
import Pythongoogleauth from "./Python/Pythongoogleauth";
import Pythonfacebookauth from "./Python/Pythonfacebookauth";
import Relationships from "./SQL/Relationships.js";
import KafkaQA from "./QA/KafkaQA";
import SQLQA from "./QA/SQLQA";
import AngularQA from "./QA/AngularQA";
import ReactQA from "./QA/ReactQA";
import DotnetQA from "./QA/DotnetQA";
import Tuple from "./DSA/Tuple.js";

function App() {
  const [activeMenu, setActiveMenu] = useState("Fullstack");

  return (
    <>
{/* Header Section */}
      <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <SuperHeader />
        <Header setActiveMenu={setActiveMenu} />
      </div>

      {/* Sidebar + Main Content */}
      <div className="d-flex" style={{ height: "calc(100vh - 100px)", overflow: "hidden" }}>
        {/* Sidebar with fixed width */}
        <div style={{ width: "250px", minWidth: "250px", height: "100%", overflowY: "auto" }}>
          <Sidebar activeMenu={activeMenu} />
        </div>

         {/* Main Content */}
        <div className="flex-grow-1 p-4" style={{ height: "100%", overflowY: "auto" }}>
          <Routes>
            {/* Super Admin */}
            <Route path="/role" element={<Role />} />
            <Route path="/user" element={<User />} />
            <Route path="/userrole" element={<UserRole />} />

            {/* Projects */}
            <Route path="/sshotel" element={<SSHotel />} />
            <Route path="/sshealthcare" element={<HealthCare />} />
            <Route path="/ssdigitallibrary" element={<SSDigitalLibrary />} />
            <Route path="/ssemployeepayroll" element={<SSEmployeePayroll />} />
            <Route path="/ssattendanceportal" element={<SSAttendancePortal />} />
            <Route path="/ssecommerce" element={<SSECommerce />} />
            <Route path="/ssehouse" element={<SSEHouse />} />
            <Route path="/ssjobs" element={<SSJobs />} />
            <Route path="/sshealthinsurance" element={<SSHealthInsurance />} />
            <Route path="/sslogistrics" element={<SSLogistrics />} />


            {/* Fulstack Static */}
            <Route path="/languagestatic" element={<LanguagesStatic />} />
            <Route path="/countrystatic" element={<CountryStatic />} />
            <Route path="/statestatic" element={<StateStatic />} />
            <Route path="/districtstatic" element={<DistrictStatic />} />
            <Route path="/radiobuttonstatic" element={<RadioButtonStatic />} />
            <Route path="/checkboxstatic" element={<CheckboxStatic />} />
            <Route path="/multiselectdropdownstatic" element={<MultiselectDropdownStatic />} />
            <Route path="/imageuploadstatic" element={<ImageUploadStatic />} />
            <Route path="/exportcsvstatic" element={<ExportcsvStatic />} />
            <Route path="/authenticationstatic" element={<AuthenticationStatic />} />
            <Route path="/paginationstatic" element={<PaginationStatic />} />
            <Route path="/searchingstatic" element={<SearchingStatic />} />
            <Route path="/ssintern" element={<SSIntern />} />
            
            {/* Fulstack */}
            <Route path="/language" element={<Languages />} />
            <Route path="/country" element={<Country />} />
            <Route path="/state" element={<State />} />
            <Route path="/district" element={<District />} />
            <Route path="/radiobutton" element={<RadioButton />} />
            <Route path="/checkbox" element={<CheckBox />} />
            <Route path="/multiselectdropdown" element={<MultiselectDropdown />} />
            <Route path="/imageupload" element={<ImageUpload />} />
            <Route path="/exportcsv" element={<Exportcsv />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/searching" element={<Searching />} />

            <Route path="/netprojectsetup" element={<Netprojectsetup />} />
            <Route path="/netlanguages" element={<Netlanguages />} />
            <Route path="/netcountry" element={<Netcountry />} />
            <Route path="/netdistrict" element={<Netdistrict />} />
            <Route path="/netstate" element={<Netstate />} />
            <Route path="/netemployee" element={<Netemployee />} />
            <Route path="/netcheckbox" element={<Netcheckbox />} />
            <Route path="/netcqrsdesignpattern" element={<Netcqrsdesignpattern />} />
            <Route path="/netrepositorydesignpattern" element={<Netrepositorydesignpattern />} />            
            <Route path="/netfacebookauth" element={<Netfacebookauth />} />
            <Route path="/netgoogleauth" element={<Netgoogleauth />} />
            <Route path="/netimageupload" element={<Netimageupload />} />
            <Route path="/netjwtauth" element={<Netjwtauth />} />
            <Route path="/netlogger" element={<Netlogger />} />
            <Route path="/netmicroservices" element={<Netmicroservices />} />
            <Route path="/netmultiselectdropdown" element={<Netmultiselectdropdown />} />
            <Route path="/netonionarchitecture" element={<Netonionarchitecture />} />
            <Route path="/netpagination" element={<Netpagination />} />
            <Route path="/netexportcsv" element={<Netexportcsv />} />
            <Route path="/netradiobutton" element={<Netradiobutton />} />
            <Route path="/netsearching" element={<Netsearching />} />
            <Route path="/netquestions" element={<Netquestions />} />
            <Route path="/pythonprojectsetup" element={<PythonProjectSetup />} />
            <Route path="/pythonlanguages" element={<Pythonlanguages />} />
            <Route path="/pythoncountry" element={<Pythoncountry />} />
            <Route path="/pythondistrict" element={<Pythondistrict />} />
            <Route path="/pythonstate" element={<Pythonstate />} />
            <Route path="/pythonemployee" element={<Netemployee />} />
            <Route path="/pythoncheckbox" element={<Pythoncheckbox />} />
            <Route path="/pythoncqrsdesignpattern" element={<Netcqrsdesignpattern />} />
            <Route path="/pythonrepositorydesignpattern" element={<Netrepositorydesignpattern />} />            
            <Route path="/pythonfacebookauth" element={<Pythonfacebookauth />} />
            <Route path="/pythongoogleauth" element={<Pythongoogleauth />} />
            <Route path="/pythonimageupload" element={<Pythonimageupload />} />
            <Route path="/pythonjwtauth" element={<Pythonjwtauth />} />
            <Route path="/pythonlogger" element={<Netlogger />} />
            <Route path="/pythonmicroservices" element={<Netmicroservices />} />
            <Route path="/pythonmultiselectdropdown" element={<Pythonmultiselectdropdown />} />
            <Route path="/pythononionarchitecture" element={<Netonionarchitecture />} />
            <Route path="/pythonpagination" element={<Pythonpagination />} />
            <Route path="/pythonexportcsv" element={<Pythonexportcsv />} />
            <Route path="/pythonradiobutton" element={<Pythonradiobutton />} />
            <Route path="/pythonsearching" element={<Pythonsearching />} />
            <Route path="/pythonquestions" element={<Pythonquestions />} />            

            <Route path="/javaprojectsetup" element={<Javaprojectsetup />} />
            <Route path="/javalanguages" element={<Javalanguages />} />
            <Route path="/javacountry" element={<Javacountry />} />
            <Route path="/javadistrict" element={<Javadistrict />} />
            <Route path="/javacheckbox" element={<Javacheckbox />} />
            <Route path="/javacqrsdesignpattern" element={<Javacqrsdesignpattern />} />
            <Route path="/javastate" element={<Javastate  />} />
            <Route path="/javaemployee" element={<Javaemployee />} />
            <Route path="/javafacebookauth" element={<Javafacebookauth />} />
            <Route path="/javagoogleauth" element={<Javagoogleauth />} />
            <Route path="/javaimageupload" element={<Javaimageupload />} />
            <Route path="/javajwtauth" element={<Javajwtauth />} />
            <Route path="/javalogger" element={<Javalogger />} />
            <Route path="/javamicroservices" element={<Javamicroservices />} />
            <Route path="/javamultiselectdropdown" element={<Javamultiselectdropdown />} />
            <Route path="/javaonionarchitecture" element={<Javaonionarchitecture />} />
            <Route path="/javapagination" element={<Javapagination />} />
            <Route path="/javaexportcsv" element={<Javaexportcsv />} />
            <Route path="/javaradiobutton" element={<Javaradiobutton />} />
            <Route path="/javasearching" element={<Javasearching />} />
            <Route path="/javaquestions" element={<Javaquestions />} />

            <Route path="/nodeprojectsetup" element={<Nodeprojectsetup />} />
            <Route path="/nodelanguage" element={<Nodelanguages />} />
            <Route path="/nodecountry" element={<Nodecountry />} />
            <Route path="/nodedistrict" element={<Nodedistrict />} />
            <Route path="/nodeemployee" element={<Nodeemployee />} />
            <Route path="/nodecheckbox" element={<Nodecheckbox />} />
            <Route path="/nodefacebookauth" element={<Nodefacebookauth />} />
            <Route path="/nodegoogleauth" element={<Nodegoogleauth />} />
            <Route path="/nodeimageupload" element={<Nodeimageupload />} />
            <Route path="/nodejwtauth" element={<Nodejwtauth />} />
            <Route path="/nodelogger" element={<Nodelogger />} />
            <Route path="/nodeexportcsv" element={<Nodeexportcsv />} />            
            <Route path="/nodemicroservices" element={<Nodemicroservices />} />
            <Route path="/nodemultiselectdropdown" element={<Nodemultiselectdropdown />} />
            <Route path="/nodepagination" element={<Nodepagination />} />
            <Route path="/noderadiobutton" element={<Noderadiobutton />} />
            <Route path="/nodesearching" element={<Nodesearching />} />
            <Route path="/nodestate" element={<Nodestate />} />
            <Route path="/nodequestions" element={<Nodequestions />} />

            <Route path="/array" element={<Array />} />
            <Route path="/arraylist" element={<Arraylist />} />
            <Route path="/list" element={<List />} />
            <Route path="/hashmap" element={<Hashmap />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/hashtable" element={<Hashtable />} />
            <Route path="/tuple" element={<Tuple />} />
            <Route path="/binarysearch" element={<Binarysearch />} />
            <Route path="/linearsearch" element={<Linearsearch />} />
            <Route path="/selectionsort" element={<Selectionsort />} />
            <Route path="/quicksort" element={<Quicksort />} />
            <Route path="/linkedlist" element={<Linkedlist />} />
            <Route path="/dsaquestions" element={<Dsaquestions />} />

            <Route path="/sqlcrud" element={<Sqlcrud />} />
            <Route path="/sqljoins" element={<Sqljoins />} />
            <Route path="/sqlstoredprocedure" element={<Sqlstoredprocedure />} />
            <Route path="/sqlfunctions" element={<Sqlfunctions />} />
            <Route path="/sqlacid" element={<Sqlacid />} />
            <Route path="/sqlindexing" element={<Sqlindexing />} />
            <Route path="/sqlnormalization" element={<Sqlnormalization />} />
            <Route path="/sqlqueriescommands" element={<Sqlqueriescommands />} />
            <Route path="/sqlprofiler" element={<Sqlprofiler />} />
            <Route path="/sqltrigger" element={<Sqltrigger />} />
            <Route path="/sqlcursor" element={<Sqlcursor />} />
            <Route path="/sqlrelationships" element={<Relationships />} />
            <Route path="/sqlquestions" element={<Sqlquestions />} />

            <Route path="/awsaccountsetup" element={<Awsaccountsetup />} />
            <Route path="/awsiam" element={<Awsiam />} />
            <Route path="/awsectwoinstance" element={<Awsectwoinstance />} />
            <Route path="/awsthreebucket" element={<Awsthreebucket />} />
            <Route path="/awslambda" element={<Awslambda />} />
            <Route path="/awsdynamodb" element={<Awsdynamodb />} />
            <Route path="/awsrds" element={<Awsrds />} />
            <Route path="/amplify" element={<Amplify />} />
            <Route path="/awscloudwatch" element={<Awscloudwatch />} />
            <Route path="/awsquestions" element={<Awsquestions />} />

            <Route path="/azureaccountsetup" element={<Azureaccountsetup />} />
            <Route path="/azureblobstorage" element={<Azureblobstorage />} />
            <Route path="/azurefuncions" element={<Azurefuncions />} />
            <Route path="/azureappinsight" element={<Azureappinsight />} />
            <Route path="/azurecosmosdb" element={<Azurecosmosdb />} />
            <Route path="/azurevirtualmachines" element={<Azurevirtualmachines />} />
            <Route path="/azureaks" element={<Azureaks />} />
            <Route path="/azuresql" element={<Azuresql />} />
            <Route path="/azuremonitor" element={<Azuremonitor />} />
            <Route path="/azurerbac" element={<Azurerbac />} />
            <Route path="/azurequestions" element={<Azurequestions />} />

            <Route path="/cicdpipelinesreact" element={<CicdpipelinesReact />} />
            <Route path="/cicdpipelinesnext" element={<CicdpipelinesNext />} />
            <Route path="/cicdpipelinesnode" element={<CicdpipelinesNode />} />
            <Route path="/cicdpipelinesnetcore" element={<CicdpipelinesNetCore />} />
            <Route path="/cicdpipelinesjava" element={<CicdpipelinesJava />} />
            <Route path="/jenkins" element={<Jenkins />} />
            <Route path="/docker" element={<Docker />} />
            <Route path="/kubernetes" element={<Kubernetes />} />
            <Route path="/ansible" element={<Ansible />} />
            <Route path="/terraform" element={<Terraform />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/github" element={<Github />} />
            <Route path="/devopsquestions" element={<Devopsquestions />} />

            <Route path="/reactprojectsetup" element={<Reactprojectsetup />} />
            <Route path="/reactlanguages" element={<Reactlanguages />} />
            <Route path="/reactcountry" element={<Reactcountry />} />
            <Route path="/reactstate" element={<Reactstate />} />
            <Route path="/reactdistrict" element={<Reactdistrict />} />
            <Route path="/reactmultiselectdropdown" element={<Reactmultiselectdropdown />} />
            <Route path="/reactradiobutton" element={<Reactradiobutton />} />
            <Route path="/reactcheckbox" element={<Reactcheckbox />} />
            <Route path="/reactimageupload" element={<Reactimageupload />} />            
            <Route path="/reactsearching" element={<Reactsearching />} />
            <Route path="/reactpagination" element={<Reactpagination />} />
            <Route path="/reactjwtauth" element={<Reactjwtauth />} />
            <Route path="/reactzustand" element={<Reactzustand />} />
            <Route path="/reactredux" element={<Reactredux />} />
            <Route path="/reactreducer" element={<Reactreducer />} />
            <Route path="/reactquestions" element={<Reactquestions />} />

            <Route path="/nextprojectsetup" element={<Nextprojectsetup />} />
            <Route path="/nextmultilayout" element={<NextMultiLayout />} />
            <Route path="/nextlanguages" element={<Nextlanguages />} />
            <Route path="/nextcountry" element={<Nextcountry />} />
            <Route path="/nextstate" element={<Nextstate />} />
            <Route path="/nextdistrict" element={<Nextdistrict />} />
            <Route path="/nextmultiselectdropdown" element={<Nextmultiselectdropdown />} />
            <Route path="/nextradiobutton" element={<Nextradiobutton />} />
            <Route path="/nextcheckbox" element={<Nextcheckbox />} />
            <Route path="/nextsearching" element={<Nextsearching />} />
            <Route path="/nextpagination" element={<Nextpagination />} />
            <Route path="/nextjwtauth" element={<Nextjwtauth />} />
            <Route path="/nextimageupload" element={<Nextimageupload />} />
            <Route path="/nextzustand" element={<Nextzustand />} />
            <Route path="/nextredux" element={<Nextredux />} />
            <Route path="/nextreducer" element={<Nextreducer />} />
            <Route path="/nextquestions" element={<Nextquestions />} />

            <Route path="/angularprojectsetup" element={<Angularprojectsetup />} />
            <Route path="/angularlanguages" element={<Angularlanguages />} />
            <Route path="/angularcountry" element={<Angularcountry />} />
            <Route path="/angularstate" element={<Angularstate />} />
            <Route path="/angulardistrict" element={<Angulardistrict />} />
            <Route path="/angularmultiselectdropdown" element={<Angularmultiselectdropdown />} />
            <Route path="/angularradiobutton" element={<Angularradiobutton />} />
            <Route path="/angularcheckbox" element={<Angularcheckbox />} />
            <Route path="/angularimageupload" element={<Angularimageupload />} />            
            <Route path="/angularsearching" element={<Angularsearching />} />
            <Route path="/angularpagination" element={<Angularpagination />} />
            <Route path="/angularjwtauth" element={<Angularjwtauth />} />
            <Route path="/angularquestions" element={<Angularquestions />} />

            {/* Message Broker */}
            <Route path="/kafkaqa" element={<KafkaQA />} />
            <Route path="/sqlqa" element={<SQLQA />} />
            <Route path="/reactqa" element={<ReactQA />} />
            <Route path="/angularqa" element={<AngularQA />} />
            <Route path="/dotnetqa" element={<DotnetQA />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
