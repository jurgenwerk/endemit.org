import EndemitSubscribe from "@/app/(components)/EndemitSubscribe";
import Headline from "@/app/events/issun-boshi-vinyl-release/(components)/Headline";

export default function TicketsPage() {
  return (
    <div className="m-auto max-w-5xl space-y-6 p-5 text-white font-typo">
     <Headline title="Tickets" />

      <div className="text-2xl font-light mt-8">
        Tickets will be available soon. Subscribe to our newsletter to stay
        updated!
      </div>

      <div
        className="bg-issun-boshi-purple px-10 py-2 rounded-lg"
          style={{
        backgroundImage: "url('/worms.png')",
        backgroundRepeat: "repeat",
        backgroundBlendMode: "color-burn",
        backgroundSize: "20%",
      }}

      >
        <EndemitSubscribe />
      </div>
    </div>
  );
}
