/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
export default function Dropdown({ heading, body }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={dropdownRef} className="body-faq-item">
      <div onClick={() => setOpen(!open)} className="body-faq-item-md">
        {heading || "HEADER SECTION"}
      </div>
      <p className={`body-faq-item-sm ${open ? "open" : ""}`}>
        {body || "BODY SECTION"}
      </p>
    </div>
  );
}
