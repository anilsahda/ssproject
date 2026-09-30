import { useMemo, useState } from "react";

const companies = [
  // Mohali
  {
    name: "IDS-Argus Healthcare Services",
    city: "Mohali",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Networth RCM Services",
    city: "Mohali",
    evbv: true,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "OneClearRCM",
    city: "Mohali",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "INFINITI RCM",
    city: "Mohali",
    evbv: false,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "Altermed RCM",
    city: "Mohali",
    evbv: true,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "3DS Global",
    city: "Mohali",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "3D Solutions",
    city: "Mohali",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Vee Healthtek",
    city: "Mohali",
    evbv: false,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "Techminds Hub",
    city: "Mohali",
    evbv: false,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "Credmypractice",
    city: "Mohali",
    evbv: false,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "Vanaa Tech",
    city: "Mohali",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Digimedicus",
    city: "Mohali",
    evbv: false,
    ar: false,
    billing: true,
    coding: true,
  },
  {
    name: "Saviour Nest Solutions",
    city: "Mohali",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Aventrix Global",
    city: "Mohali",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Impulse RCM",
    city: "Mohali",
    evbv: false,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "Knack Global",
    city: "Mohali",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Nath Outsourcing Solutions",
    city: "Mohali",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Coronis",
    city: "Mohali/Noida",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },

  // Dehradun
  {
    name: "Elite RCM",
    city: "Dehradun",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Unify Healthcare Services",
    city: "Dehradun",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Hyranta",
    city: "Dehradun",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Thoughtworth",
    city: "Dehradun",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "KGiS / KG Invicta",
    city: "Dehradun",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },

  // Hyderabad / other cities
  {
    name: "R1 RCM",
    city: "Hyderabad/Noida/Chennai/Bengaluru/Indore",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Omega Healthcare",
    city: "Hyderabad/Bengaluru/Chennai/Coimbatore",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Access Healthcare",
    city: "Hyderabad/Chennai/Pune/Mumbai/Coimbatore",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "AGS Health",
    city: "Hyderabad/Chennai/Bengaluru/Jaipur/Noida",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "GeBBS Healthcare Solutions",
    city: "Hyderabad/Mumbai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "CorroHealth",
    city: "Hyderabad/Chennai/Noida/Bengaluru/Coimbatore",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Optum",
    city: "Hyderabad/Bengaluru",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Carelon",
    city: "Hyderabad/Bengaluru",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Anion Healthcare",
    city: "Hyderabad",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Arya Medical Billing Services",
    city: "Hyderabad",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Elico Healthcare Services",
    city: "Hyderabad",
    evbv: false,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "Gulf Coast RCM",
    city: "Hyderabad",
    evbv: true,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "Phycare Solutions",
    city: "Hyderabad",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Grace Medicode",
    city: "Hyderabad",
    evbv: false,
    ar: false,
    billing: true,
    coding: true,
  },
  {
    name: "Promantra",
    city: "Hyderabad",
    evbv: false,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "V1RCM",
    city: "Hyderabad",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Vcarve Technologies",
    city: "Hyderabad",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Eclat Health Solutions",
    city: "Hyderabad/Lucknow",
    evbv: false,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "Medico",
    city: "Hyderabad",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "PrimEra Medical Technologies",
    city: "Hyderabad",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Unislink",
    city: "Hyderabad",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Reventics",
    city: "Hyderabad",
    evbv: false,
    ar: false,
    billing: true,
    coding: true,
  },
  {
    name: "Incessant Healthcare",
    city: "Hyderabad/Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "WebPT",
    city: "Hyderabad",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "MD Manage India",
    city: "Hyderabad",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Intellisight",
    city: "Hyderabad/Chennai/Bengaluru",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Data Marshall",
    city: "Hyderabad",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "AVONTIX",
    city: "Hyderabad",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Ascent Business Solutions",
    city: "Hyderabad/Nagpur",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },


  // Chennai
  {
    name: "Clarus RCM",
    city: "Chennai/Hyderabad",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "ASP-RCM Solutions",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "AnnexMed",
    city: "Chennai",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Peraxa Healthcare Solutions",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Med-Pro Health Care Services",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Global Healthcare Billing Partners",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "e-care India",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Bristol Healthcare Services",
    city: "Chennai/Salem",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "MBW RCM",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Astes Healthcare Solutions",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "BillingEdge RCM",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "ACP Billing Services",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "ARCDOTT RCM Solutions",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "CMPMS Global",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "AuraRCM",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Mastermind Healthcare RCM Tactics",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "RCM Scope",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Indian Healthcare BPO",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "DOCS MD RCM",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Quintessence Business Solutions",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Athenahealth Technology & Operations",
    city: "Chennai/Bengaluru/Pune",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Vee Technologies",
    city: "Chennai/Bengaluru/Salem/Trichy",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "AllZone Technologies",
    city: "Chennai/Vellore",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Visionary RCM Infotech",
    city: "Chennai/Hyderabad/Coimbatore",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Cigma Medical Coding",
    city: "Chennai/Bengaluru/Kochi/Hyderabad",
    evbv: false,
    ar: false,
    billing: true,
    coding: true,
  },
  {
    name: "MindGenix",
    city: "Chennai",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Savista Global Solutions",
    city: "Chennai",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "iSource",
    city: "Chennai",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "4D Global Medical Billing Services",
    city: "Chennai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },

  // Pune
  {
    name: "Pune Access Healthcare",
    city: "Pune",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Credence Resource Management",
    city: "Pune",
    evbv: true,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "Veradigm Asia",
    city: "Pune",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Thinkitive",
    city: "Pune",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "ADI Group",
    city: "Pune",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Synergy Healthcare",
    city: "Pune",
    evbv: false,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "Suma Soft",
    city: "Pune",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Dovlin Healthcare",
    city: "Pune",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Dovlin Technologies",
    city: "Pune",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Evolent",
    city: "Pune",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Odyssey Informatics",
    city: "Pune/Mumbai",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "AM Infoweb",
    city: "Pune",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Seedline System",
    city: "Pune",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Brentwood Infoscribe",
    city: "Pune",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Aarin Healthcare Services",
    city: "Pune",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Medaccura",
    city: "Pune",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Acrev Solutions",
    city: "Pune",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Matrix Medical Coding Solutions",
    city: "Pune",
    evbv: false,
    ar: false,
    billing: true,
    coding: true,
  },

  // Bengaluru
  {
    name: "GetixHealth India",
    city: "Bengaluru",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Calpion",
    city: "Bengaluru",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Acer Health",
    city: "Bengaluru",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "ACN Healthcare RCM",
    city: "Bengaluru",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Logix Healthcare",
    city: "Bengaluru",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "NYX Medical Solutions",
    city: "Bengaluru",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "ScribeEMR",
    city: "Bengaluru",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Practovate Technologies",
    city: "Bengaluru",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "M*Modal / 3M Health Information Systems",
    city: "Bengaluru",
    evbv: false,
    ar: false,
    billing: false,
    coding: true,
  },
  {
    name: "Austin Medical Solutions",
    city: "Bengaluru",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Harvest Transcription",
    city: "Bengaluru",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "INFOMETIZ",
    city: "Bengaluru",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Omega Medical Coding",
    city: "Bengaluru",
    evbv: false,
    ar: false,
    billing: true,
    coding: true,
  },

  // Mumbai
  {
    name: "Medusind Solutions",
    city: "Mumbai/Ahmedabad",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "IKS Health",
    city: "Mumbai/Hyderabad",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Aquity Solutions",
    city: "Mumbai/Hyderabad/Bengaluru",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "RRNine Business Solutions",
    city: "Mumbai",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Incrementum Healthcare",
    city: "Navi Mumbai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Genus Healthcare Solutions",
    city: "Mumbai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Triarq Health",
    city: "Mumbai/Thane",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Viewgol Healthcare",
    city: "Mumbai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "PrimeHealth",
    city: "Mumbai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Streamlined Medical Solutions",
    city: "Mumbai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Resolve Medicode",
    city: "Mumbai",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "E-Mage Transcripts",
    city: "Mumbai",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Healthcell Services",
    city: "Mumbai",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Accutrans KPO",
    city: "Mumbai",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Vitality Business Support Services",
    city: "Mumbai",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },

  // Ahmedabad
  {
    name: "Prismatica Health",
    city: "Ahmedabad",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "LRx Healthcare",
    city: "Ahmedabad",
    evbv: false,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "Scalenex Global Services",
    city: "Ahmedabad",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "IntelliRCM",
    city: "Ahmedabad",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "JV Healthcare Solutions",
    city: "Ahmedabad",
    evbv: false,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "PlusRCM",
    city: "Ahmedabad",
    evbv: true,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "Integrity HealthOps",
    city: "Ahmedabad",
    evbv: false,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "RCMAXIS",
    city: "Ahmedabad",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "ACE Healthcare Solutions",
    city: "Ahmedabad/Hyderabad",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },

  // Kochi / Coimbatore
  {
    name: "PRACTICESUITE India",
    city: "Kochi",
    evbv: false,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "Cigma Medical Coding",
    city: "Kochi",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "SAMG Infotech",
    city: "Coimbatore",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "CONFAIR",
    city: "Coimbatore",
    evbv: false,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "Info Hub Consultancy Services",
    city: "Coimbatore",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },

  // Jaipur
  {
    name: "PRS Healthcare",
    city: "Jaipur",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "MedTermRCM",
    city: "Jaipur",
    evbv: false,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "MedCore RCM",
    city: "Jaipur",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Pinnacle Infotech",
    city: "Jaipur",
    evbv: false,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "Amuram Consultancy Services",
    city: "Jaipur",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },

  // Lucknow
  {
    name: "Zently RCM Billing",
    city: "Lucknow",
    evbv: true,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "LearnMedix Consultants",
    city: "Lucknow",
    evbv: true,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "GMM Billing Solutions",
    city: "Lucknow",
    evbv: true,
    ar: true,
    billing: true,
    coding: false,
  },
  {
    name: "USMedBill",
    city: "Lucknow",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },

  // Indore / Bhopal
  {
    name: "Greenhive Billing Solutions",
    city: "Indore/Bhopal",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
  {
    name: "UBZIT Healthcare",
    city: "Indore",
    evbv: true,
    ar: true,
    billing: true,
    coding: true,
  },
];

const moduleOptions = [
  {
    value: "evbv",
    label: "EVBV / Eligibility & Benefits Verification",
  },
  {
    value: "ar",
    label: "AR / Accounts Receivable",
  },
  {
    value: "billing",
    label: "Medical Billing",
  },
  {
    value: "coding",
    label: "Medical Coding",
  },
];

const normalizeCity = (city) => {
  const value = city.trim();

  const invalidLocations = [
    "India",
    "Punjab",
  ];

  return invalidLocations.includes(value) ? null : value;
};

const getCompanyCities = (company) => {
  return company.city
    .split("/")
    .map((city) => normalizeCity(city))
    .filter(Boolean);
};

export default function Home() {
  // Default city is Dehradun
  const [selectedCity, setSelectedCity] = useState("Dehradun");

  // Default module = all modules
  const [selectedModule, setSelectedModule] = useState("");

  // Automatically generate all cities from company data
  const cities = useMemo(() => {
    const citySet = new Set();

    companies.forEach((company) => {
      getCompanyCities(company).forEach((city) => {
        citySet.add(city);
      });
    });

    return Array.from(citySet).sort();
  }, []);

  // Filter companies based on city + module
  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const companyCities = getCompanyCities(company);

      const matchesCity = companyCities.includes(selectedCity);

      const matchesModule =
        selectedModule === "" ||
        company[selectedModule] === true;

      return matchesCity && matchesModule;
    });
  }, [selectedCity, selectedModule]);

  return (
    <div className="container-fluid bg-light min-vh-100">

      {/* ================= HEADER ================= */}
      <header className="bg-white border-bottom shadow-sm">
        <div className="container py-3">
          <div className="d-flex align-items-center justify-content-between">

            <div className="d-flex align-items-center">
              <img src="/ssinterns2.png" alt="Logo" className="img-fluid" />
            </div>

          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div>
            <h2>Explore US Healthcare & RCM Companies</h2>
            <p className="text-muted">Learn software development while understanding the US Healthcare Revenue Cycle Management domain. SS Interns students can use this directory to understand companies, locations and RCM modules, and explore relevant technology and software career opportunities.</p>
          </div>
        </div>
      </section>

      {/* ================= FILTER SECTION ================= */}
      <section className="container pb-4">
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <div className="row g-3 align-items-end">
              {/* CITY */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Select City</label>
                <select className="form-select form-select-lg" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}
                    </option>
                  ))}
                </select>
              </div>

              {/* MODULE */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">Select RCM Module</label>
                <select className="form-select form-select-lg" value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)}>
                  <option value="">All RCM Modules</option>
                  {moduleOptions.map((module) => (
                    <option key={module.value} value={module.value}>
                      {module.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPANY TABLE ================= */}
      <section className="container pb-5">
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover table-bordered align-middle mb-0">
                <thead className="table-dark">
                  <tr>
                    <th style={{ width: "60px", textAlign: "center"}}>#</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th className="text-center">EVBV</th>
                    <th className="text-center">AR</th>
                    <th className="text-center">Billing</th>
                    <th className="text-center">Coding</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCompanies.length > 0 ? (
                    filteredCompanies.map(
                      (company, index) => (
                        <tr key={`${company.name}-${index}`}>
                          <td className="text-center fw-semibold">{index + 1}</td>
                          <td>
                            <div className="fw-semibold">
                              {company.name}
                            </div>
                          </td>
                          <td>{company.city}</td>
                          <td className="text-center">
                            {company.evbv ? (
                              <span className="text-success fw-bold fs-5">
                                ✓
                              </span>
                            ) : (
                              <span className="text-muted">
                                —
                              </span>
                            )}
                          </td>
                          <td className="text-center">
                            {company.ar ? (
                              <span className="text-success fw-bold fs-5">
                                ✓
                              </span>
                            ) : (
                              <span className="text-muted">
                                —
                              </span>
                            )}
                          </td>
                          <td className="text-center">
                            {company.billing ? (
                              <span className="text-success fw-bold fs-5">
                                ✓
                              </span>
                            ) : (
                              <span className="text-muted">
                                —
                              </span>
                            )}
                          </td>
                          <td className="text-center">
                            {company.coding ? (
                              <span className="text-success fw-bold fs-5">
                                ✓
                              </span>
                            ) : (
                              <span className="text-muted">
                                —
                              </span>
                            )}
                          </td>
                        </tr>
                      )
                    )
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center py-5">
                        <div className="text-muted">
                          <div className="fs-1 mb-2">🔍</div>
                          <h5>No companies found</h5>
                          <p className="mb-0">Try selecting another city or RCM module.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RCM LEGEND ================= */}
      <section className="container pb-5">

        <div className="card border-0 shadow-sm">

          <div className="card-body">

            <h4 className="fw-bold mb-4">
              Understanding RCM Modules
            </h4>

            <div className="row g-3">

              <div className="col-md-6 col-lg-3">

                <div className="border rounded p-3 h-100">

                  <h6 className="fw-bold">
                    EVBV
                  </h6>

                  <p className="text-muted small mb-0">
                    Eligibility & Benefits Verification.
                    Verifying patient insurance eligibility
                    and benefits before healthcare services.
                  </p>

                </div>

              </div>

              <div className="col-md-6 col-lg-3">

                <div className="border rounded p-3 h-100">

                  <h6 className="fw-bold">
                    AR
                  </h6>

                  <p className="text-muted small mb-0">
                    Accounts Receivable.
                    Managing unpaid claims, outstanding
                    balances, follow-ups and collections.
                  </p>

                </div>

              </div>

              <div className="col-md-6 col-lg-3">

                <div className="border rounded p-3 h-100">

                  <h6 className="fw-bold">
                    Medical Billing
                  </h6>

                  <p className="text-muted small mb-0">
                    Healthcare claim creation, submission,
                    payment posting and billing workflows.
                  </p>

                </div>

              </div>

              <div className="col-md-6 col-lg-3">

                <div className="border rounded p-3 h-100">

                  <h6 className="fw-bold">
                    Medical Coding
                  </h6>

                  <p className="text-muted small mb-0">
                    Converting clinical information into
                    standardized medical codes used for
                    healthcare billing and reimbursement.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CAREER SECTION ================= */}
      <section className="container pb-5">
        <div className="card bg-primary text-white border-0 shadow">
          <div className="card-body p-4 p-lg-5">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h3 className="fw-bold">Build Software Skills + Healthcare Domain Knowledge</h3>
                <p className="mb-0">While internship at SS Interns, students can learn software development technologies and simultaneously understand the US Healthcare RCM ecosystem. This combination can help them identify relevant technology roles and explore current job openings in healthcare technology companies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}