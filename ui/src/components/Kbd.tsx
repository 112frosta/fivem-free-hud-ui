interface KbdProps {
  children: React.ReactNode;
}

export default function Kbd({ children }: KbdProps) {
  return (
    <kbd className="inline-flex items-center justify-center p-1 font-medium bg-black border rounded-md border-black-500 size-7 bg-opacity-80">
      {children}
    </kbd>
  );
}
