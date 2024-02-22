import { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((prev) => !prev);

  return (
    <div>
      <div>
        <button onClick={handleClick}>{open ? "Close" : "Open"}</button>
        <h3>{title}</h3>
        {open && <div>{children}</div>}
      </div>
    </div>
  );
}
