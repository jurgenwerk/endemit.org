import Sidebar from "@/app/(components)/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="m-auto overflow-y-scroll bg-gray-1100 pb-16">
      <Sidebar
        navigationItems={[
          { label: "Events", href: "/events" },
          { label: "Music", href: "/music" },
          { label: "Merch", href: "/merch" },
          { label: "About", href: "/about" },
        ]}
      />
      {children}
    </body>
  );
}
