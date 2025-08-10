import { Link, useLocation } from "react-router-dom";

export default function SidebarButton({ to, icon, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className="d-flex align-items-center w-100"
      style={{
        textAlign: "left",
        borderRadius: "4px",
        fontWeight: 400,
        fontSize: "0.75rem",
        padding: "4px 8px",
        gap: "6px",
        minHeight: "30px",
        backgroundColor: isActive ? "#ffc107" : "transparent", // Yellow for active
        color: isActive ? "#000" : "#f8f9fa", // Text colors
        textDecoration: "none",
        transition: "background-color 0.2s ease",
      }}
    >
      <i className={`bi ${icon}`} style={{ fontSize: "0.9rem" }}></i>
      {label}
    </Link>
  );
}
