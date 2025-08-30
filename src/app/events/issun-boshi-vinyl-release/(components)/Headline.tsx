export default function Headline({eventName = "Issun-Bōshi vinyl release", title}: {eventName?: string, title: string}) {
  return (
    <>
      <div className="text-lg font-light uppercase text-issun-boshi-orange pt-16 lg:pt-10 pb-0 mb-0">
        {eventName}
      </div>
      <h2 className="text-4xl font-bold uppercase  text-issun-boshi-yellow !mt-0 pt-0 pb-12">
        {title}
      </h2>
    </>
  );
}
