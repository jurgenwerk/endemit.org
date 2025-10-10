import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      className="m-auto overflow-y-scroll bg-black"
      style={{
        backgroundImage: "url('/images/endemit-pattern.svg')",
        backgroundSize: "110px",
      }}
    >
      <div className="max-w-8xl  m-auto ">
        <Sidebar
          navigationItems={[
            { label: "Main", href: "/" },
            { label: "Events", href: "/events" },
            { label: "Music", href: "/music" },
            { label: "Store", href: "/store" },
            { label: "About", href: "/about" },
          ]}
          hideCartOnPath={["/store/checkout"]}
        />

        <div className="lg:pl-72 bg-neutral-900 pb-16 min-h-screen lg:my-12 lg:rounded-r-xl overflow-hidden lg:border-r-[1px] lg:border-x-neutral-800 ">
          {children}
        </div>
      </div>
    </body>
  );
}
