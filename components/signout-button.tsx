"use client";

export default function SignOutButton() {
  const handleSignOut = async () => {
    try {
      const response = await fetch("/signout", { // Corrected the URL
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to sign out");
      }

      // Redirect to the sign-in page after signing out
      window.location.href = "/signin";
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="btn bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded"
    >
      Sign Out
    </button>
  );
}