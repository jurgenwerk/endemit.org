import Sidebar from "@/app/(components)/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100">
      <Sidebar
        navigationItems={[
          { label: "Main", href: "/" },
          { label: "Events", href: "/events" },
          { label: "Music", href: "/music" },
          { label: "Store", href: "/store" },
          { label: "About", href: "/about" },
        ]}
      />

      <div className="lg:pl-72 bg-[radial-gradient(ellipse_1200px_800px_at_50%_50%,_var(--tw-gradient-stops))] from-gray-950 via-black to-black pb-16 min-h-screen">
        {children}
      </div>
    </body>
  );
}
