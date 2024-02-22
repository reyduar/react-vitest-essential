interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
}
