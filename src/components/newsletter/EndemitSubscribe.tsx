import Subscribe from "@/components/newsletter/Subscribe";

export default function EndemitSubscribe() {
  return (
    <Subscribe
      title="SUBSCRIBE"
      description="Receive updates about our upcoming events, music, and announcements"
      apiEndpoint="/api/endemit-subscribe"
      theme="dark"
      centered={false}
      resetButton={true}
      containerClass="mt-16 mb-16"
    />
  );
}
