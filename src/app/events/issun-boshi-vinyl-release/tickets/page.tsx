import EndemitSubscribe from "@/app/(components)/EndemitSubscribe";
import Headline from "@/app/events/issun-boshi-vinyl-release/(components)/Headline";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Tickets",
};

export default function TicketsPage() {
  return (
    <div className="m-auto max-w-5xl space-y-6 p-5 text-white font-typo">
      <Headline title="Tickets" />

      <div className="text-2xl font-light mt-8">
        Tickets will be available soon. Subscribe to our newsletter to stay
        updated!
      </div>

      <div className="bg-black/30 px-10 py-1 rounded-lg flex justify-center mt-16 border-gray-900 border-2">
        <EndemitSubscribe />
      </div>
    </div>
  );
}
