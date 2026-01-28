interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`${className} bg-white border border-gray-200 rounded-lg shadow-md p-4`}
    >
      {children}
    </div>
  );
}
