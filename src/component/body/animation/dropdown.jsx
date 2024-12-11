import { useState } from "react";
export default function Dropdown({ heading, body }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="body-faq-item">
      <div onClick={() => setOpen(!open)} className="body-faq-item-md">
        {heading}
      </div>
      <p className={`body-faq-item-sm ${open ? "open" : ""}`}>{body}</p>
    </div>
  );
}
