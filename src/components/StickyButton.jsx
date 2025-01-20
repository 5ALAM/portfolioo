import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai"; // Icon from react-icons
import "../../src/StickyButton.css"; // Import the CSS for styling

const StickyButton = () => {
  const handleDownload = () => {
    // Replace the URL with the path to your CV file
    const link = document.createElement("a");
    link.href = "./../../public/abdusalamkt.pdf"; // Place your CV file in the public folder or use a hosted link
    link.download = "abdusalamkt.pdf";
    link.click();
  };

  return (
    <button
      className="sticky-button"
      onClick={handleDownload}
      title="Download Resume"
    >
      <span>Resume</span>
      <AiOutlineFilePdf className="icon" />
    </button>
  );
};

export default StickyButton;
