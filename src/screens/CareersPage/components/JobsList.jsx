import React from "react";
import "./JobsList.css";
import { useState } from "react";
import RegistrationModal from "./RegistrationModal";

const jobs = [
    { title: "General Manager", location: "Jakarta, Indonesia" },
    { title: "UI/UX Designer", location: "Yokohama, Japan" },
    { title: "Blog Content Copywriter", location: "New York, United States" },
    { title: "Graphic Designer", location: "New York, United States" },
    { title: "Fleet Supervisor", location: "Jakarta, Indonesia" },
    { title: "UX Analyst", location: "London, United Kingdom" },
];

export default function JobsList() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="jobs-container">
            {jobs.map((job, index) => (
                <div className="job-card" key={index}>
                    <div className="job-info">
                        <h3>{job.title}</h3>
                        <p>{job.location}</p>
                    </div>

                    <button className="apply-btn" onClick={() => setIsOpen(true)}>Apply</button>
                </div>
            ))}
            <RegistrationModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    );
}
