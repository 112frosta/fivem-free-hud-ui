interface IconCardProps {
  icon: React.ReactNode;
  progress?: number;
}

export default function IconCard({ icon, progress }: IconCardProps) {
  return (
    <div className="flex relative bg-opacity-90 overflow-clip justify-center py-2 text-white bg-black px-[30px] last:rounded-r-md first:rounded-l-md ">
      <span className="relative z-50">{icon}</span>
      <div
        style={{ height: `${progress || 0}%` }}
        className="absolute bottom-0 left-0 right-0 z-10 w-full transition-all duration-150 bg-blue-600"
      />
    </div>
  );
}
