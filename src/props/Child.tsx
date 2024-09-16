interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode; // required in the first way
}

// Preferred way of writing a React Component with Typescript(aligns with KISS)
export const Child = ({ color, onClick, children }: ChildProps) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
};

// export const Child: React.FC<ChildProps> = ({ color }) => {
//   return <div>{color}</div>;
// };
