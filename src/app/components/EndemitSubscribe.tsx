"use client";

export default function EndemitSubscribe() {
  return (
    <div className="mt-16 mb-16">
      <h2 className="text-2xl font-bold text-white mb-4">SUBSCRIBE</h2>
      <p className="text-gray-400 mb-8 text-lg">
        Receive updates about our upcoming events, music, and announcements
      </p>
      <div className="max-w-xl mb-16">
        <form
          onSubmit={async e => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const email = (form.elements.namedItem("email") as HTMLInputElement)
              .value;
            const button = form.querySelector("button") as HTMLButtonElement;
            const originalText = button.textContent;

            try {
              button.textContent = "Subscribing...";
              button.disabled = true;

              const response = await fetch("/api/endemit-subscribe", {
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

              // Reset button after 3 seconds
              setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
              }, 3000);
            } catch (error) {
              button.textContent = originalText;
              button.disabled = false;
              alert(
                error instanceof Error ? error.message : "Failed to subscribe"
              );
            }
          }}
          className="space-y-4 mb-8"
        >
          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Sign me up
          </button>
        </form>
      </div>
    </div>
  );
}
