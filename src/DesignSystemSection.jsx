
import React from "react";
import "./DesignSystemSection.css"; // Import the CSS file

import designSystemImage from "../public/images/projects/design-system.png";

const DesignSystemSection = () => {
    return (
        <div className="design-system-container">
            {/* Image section */}
            <div className="design-system-image">
                <img src={designSystemImage} alt="Design System" />
            </div>
            {/* Content section */}
            <div className="design-system-content">
                <div className="design-system-left">
                    <p className="design-date">January 2025 - In-progress</p>
                    <h1 className="design-heading">
                        Built, maintained, and <br /> scaled a tokenized design <br /> system at BotPenguin.
                    </h1>
                </div>
                <div className="design-system-right">
                    <ul className="design-list">
                        <li>Design System Tokenisation</li>
                        <li>Design System Tooling</li>
                        <li>Maintaining Component Lifecycle</li>
                        <li>Design Audits & Checks</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DesignSystemSection;