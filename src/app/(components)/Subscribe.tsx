"use client";

interface SubscribeProps {
  title: string;
  description: string;
  apiEndpoint: string;
  theme?: "light" | "dark";
  centered?: boolean;
  resetButton?: boolean;
  containerClass?: string;
}

export default function Subscribe({
  title,
  description,
  apiEndpoint,
  theme = "light",
  centered = false,
  resetButton = false,
  containerClass = "",
}: SubscribeProps) {
  const isDark = theme === "dark";

  const containerStyles = centered ? "text-center" : "";
  const titleStyles = isDark
    ? "text-2xl font-bold text-white mb-4"
    : "text-3xl font-bold text-gray-800 mb-2 mx-2";
  const descriptionStyles = isDark
    ? "text-gray-400 mb-8 text-lg"
    : "text-gray-600 mb-8 mx-2 text-lg";
  const formContainerStyles = centered
    ? "max-w-xl mx-auto mb-12 px-4"
    : "max-w-xl ";
  const inputStyles = isDark
    ? "w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    : "w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500";
  const buttonStyles =
    "w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors";

  return (
    <div className={`${containerStyles} ${containerClass}`}>
      <h1 className={titleStyles}>{title}</h1>
      <p className={descriptionStyles}>{description}</p>
      <div className={formContainerStyles}>
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

              const response = await fetch(apiEndpoint, {
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

              // Reset button after 3 seconds if resetButton is true
              if (resetButton) {
                setTimeout(() => {
                  button.textContent = originalText;
                  button.disabled = false;
                }, 3000);
              }
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
              className={inputStyles}
            />
          </div>
          <button type="submit" className={buttonStyles}>
            Sign me up
          </button>
        </form>
      </div>
    </div>
  );
}
