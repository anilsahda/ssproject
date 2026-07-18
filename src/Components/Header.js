import "./Header.css";

import {
  FaProjectDiagram,
  FaLaptopCode,
  FaMicrosoft,
  FaJava,
  FaNodeJs,
  FaPython,
  FaRobot,
  FaDatabase,
  FaAws,
  FaReact,
  FaAngular,
  FaCheckCircle,
  FaCloud
} from "react-icons/fa";

function Header({ setActiveMenu }) {

  const menus = [
    { name: "Project", icon: <FaProjectDiagram />, className: "btn-gradient-primary" },
    { name: "Fullstack", icon: <FaLaptopCode />, className: "btn-gradient-purple" },
    { name: ".NET Core", value: "Dotnet", icon: <FaMicrosoft />, className: "btn-gradient-dark" },
    { name: "Spring Boot", value: "Springboot", icon: <FaJava />, className: "btn-gradient-success" },
    { name: "Node", value: "Node", icon: <FaNodeJs />, className: "btn-gradient-green" },
    { name: "DJango", icon: <FaPython />, className: "btn-gradient-info" },
    { name: "AI/ML", icon: <FaRobot />, className: "btn-gradient-blue" },
    // { name: "DSA", icon: <FaCheckCircle />, className: "btn-gradient-danger" },
    { name: "SQL Server", value: "SQL", icon: <FaDatabase />, className: "btn-gradient-dark" },
    { name: "AWS", icon: <FaAws />, className: "btn-gradient-orange" },
    { name: "Azure", icon: <FaCloud />, className: "btn-gradient-sky" },
    { name: "DevOps", icon: <FaCloud />, className: "btn-gradient-warning" },
    { name: "React", icon: <FaReact />, className: "btn-gradient-cyan" },
    { name: "Next", value: "Next", icon: <FaReact />, className: "btn-gradient-black" },
    // { name: "Angular", icon: <FaAngular />, className: "btn-gradient-red" },
    { name: "QA", icon: <FaCheckCircle />, className: "btn-gradient-secondary" }
  ];

  return (
    <nav className="custom-navbar">

      <div className="tech-scroll">

        {menus.map((item) => (

          <button
            key={item.name}
            type="button"
            className={`tech-btn ${item.className}`}
            onClick={() => setActiveMenu(item.value || item.name)}
          >

            <span className="tech-icon">
              {item.icon}
            </span>

            <span className="tech-text">
              {item.name}
            </span>

          </button>

        ))}

      </div>

    </nav>
  );
}

export default Header;