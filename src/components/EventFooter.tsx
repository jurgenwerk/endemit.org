import Link from "next/link";

interface EventFooterProps {
  ticketsLink?: string;
}

export default function EventFooter({ ticketsLink = "" }: EventFooterProps) {
  return (
    <div className={`sm-hidden fixed bottom-0 m-0 w-full`}>
      <div className="flex flex-row justify-between bg-black p-3.5 lg:px-5 lg:py-3">
        <div className="my-auto flex">
          <Link
            href={ticketsLink}
            className="block rounded-md border px-5  py-1 font-medium hover:text-gray-100"
            style={{ paddingTop: "7px", letterSpacing: "0.6px" }}
          >
            TICKETS
          </Link>
        </div>

        <div
          className="flex flex-col justify-between text-sm"
          style={{ paddingTop: "3px" }}
        >
          <Link href="/location" className="">
            <div className="text-right">Grad Kodeljevo</div>
            <div>Ul. Carla Benza 20</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
