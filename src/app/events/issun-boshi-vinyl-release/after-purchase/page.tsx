import Image from "next/image";
import Button from "@/app/(components)/Button";
import Link from "next/link";

export default function AfterPurchase() {
  return (
    <div className="min-h-screen font-typo">
      <div className="lg:max-w-100 mx-auto space-y-8 sm:max-w-full">
        <div className="m-auto  max-w-5xl space-y-6 p-5 ">
          <div className="m-auto  max-w-5xl  p-5  text-white text-xl font-thin">
            <h2 className="text-center text-3xl text-issun-boshi-orange font-normal ">
              Haha, yes! Purchase confirmed.
            </h2>
            <Image
              src="/thumbs-up.png"
              alt="Tickets"
              width={400}
              height={400}
              className="m-auto w-1/2"
            />
            <p>
              You should have received a ticket to the email address you
              specified. If you can&apos;t see it, check your spam folder, or
              contact us at <Link className={"link text-issun-boshi-yellow"} href={"mailto:endemit@endemit.org"}>endemit@endemit.org</Link>
            </p>

            <p className="pt-4">
              ‼️ There is a known issue where we&apos;re having trouble sending
              tickets to hotmail email accounts. While we&apos;re working on a
              fix, please email us if you haven&apos;t received your ticket.
            </p>

            <p className="pt-4">See you at the event! </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button
              href={`/events/issun-boshi-vinyl-release/artists`}
                   >
              View Artists
            </Button>
            <Button
              href={`/events/issun-boshi-vinyl-release/location`}
            >
              View Location
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
