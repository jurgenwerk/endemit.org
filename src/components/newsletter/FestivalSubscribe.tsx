import Subscribe from "@/components/newsletter/Subscribe";

export default function FestivalSubscribe() {
  return (
    <Subscribe
      title="SUBSCRIBE"
      description="Endemit Festival is private community gathering, accessible only by invitation. If you'd like to become a member, sign up and we'll send you more info."
      apiEndpoint="/api/festival-subscribe"
      theme="light"
      centered={true}
    />
  );
}
