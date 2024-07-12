interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return <div className="min-h-screen relative ">{children}</div>;
}
