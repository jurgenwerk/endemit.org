export default function Tickets() {
  return (
    <div className="lg:pl-72 min-h-screen" style={{ background: "#FFFBEE" }}>
      <div className="lg:max-w-100 mx-auto space-y-8 sm:max-w-full">
        <div className="m-auto max-w-5xl space-y-6 p-5 text-black">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold uppercase text-center pt-16 lg:pt-10">
              Tickets
            </h2>

            <div className="text-center text-2xl font-bold mt-8">
              Online tickets are sold out. You can get tickets at the door.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
