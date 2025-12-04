"use client";
import { FiMail } from "react-icons/fi";

interface FeedbackButtonProps {
  email: string;
  subject?: string;
  body?: string;
}

const FeedbackButton: React.FC<FeedbackButtonProps> = ({
  email,
  subject = "Friendly Feedback!",
  body = "Hey there! I have some feedback for you... 😉",
}) => {
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={mailtoLink}
      className="fixed bottom-6 right-6 bg-[#273e3d] text-white p-4 rounded-full shadow-lg hover:bg-[#1f312f] transition flex items-center justify-center"
      title="Send Feedback"
    >
      <FiMail size={24} />
    </a>
  );
};

export default FeedbackButton;