"use client";

export default function FestivalSubscribe() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 mx-2">SUBSCRIBE</h1>
      <p className="text-gray-600 mb-8 mx-2 text-lg">
        Endemit Festival is private community gathering, accessible only by
        invitation. If you’d like to become a member, sign up and we’ll send you
        more info.
      </p>
      <div className="max-w-xl mx-auto mb-12 px-4">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const email = (form.elements.namedItem("email") as HTMLInputElement)
              .value;
            const button = form.querySelector("button") as HTMLButtonElement;
            const originalText = button.textContent;

            try {
              button.textContent = "Subscribing...";
              button.disabled = true;

              const response = await fetch("/api/festival-subscribe", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
              });

              const data = await response.json();

              if (!response.ok) {
                throw new Error(data.error || "Failed to subscribe");
              }

              button.textContent = "Subscribed!";
              form.reset();
            } catch (error) {
              button.textContent = originalText;
              button.disabled = false;
              alert(
                error instanceof Error ? error.message : "Failed to subscribe"
              );
            }
          }}
          className="space-y-4"
        >
          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sign me up
          </button>
        </form>
      </div>
    </div>
  );
}
