import "./App.css";

function App() {
    return (
        <div id="maincontent">
            <div className="header">
                <div className="logo">
                    <img
                        src="/assets/F1TenthUCIlogo.png"
                        alt="F1Tenth @ UCI Logo"
                    />
                </div>
                <h1>F1Tenth @ UCI</h1>
            </div>
            <div className="update">
                <p>
                    {" "}
                    <strong>
                        Meetings every Monday & Wednesday 5:00 - 6:00pm, Interim
                        Classroom Facility
                    </strong>{" "}
                </p>
            </div>
            <p>
                Building fast,{" "}
                <a
                    href="https://www.youtube.com/watch?v=lbP01VaWrVU"
                    target="_blank"
                >
                    small-scale autonomous racing cars
                </a>{" "}
                is an exciting challenge that we hope to conquer.
            </p>

            <p>
                <a href="https://f1tenth.org/about.html" target="_blank">
                    F1Tenth
                </a>{" "}
                is an international community of autonomous systems enthusiasts.
                We are a student-run club aimed at developing machine learning
                algorithms and building hardware. Our goal is to learn,
                innovate, and build these systems together to compete in various
                races throughout the year.
            </p>

            <p>
                Whether you're a coding genius wonderchild, a hardware nerd, or
                just curious about autonomous racing, we provide unique
                opportunities that scratch all itches.
            </p>

            <p>
                If you are interested in joining or would like to drop by,
                please{" "}
                <a href="https://discord.gg/KWENJaPCMK" target="_blank">
                    join us on Discord
                </a>
                .
            </p>
            <p>
                For other inquires please email us at{" "}
                <a href="mailto:f1tenth@uci.edu">f1tenth@uci.edu</a>.
            </p>
            <p>September 2024</p>
        </div>
    );
}

export default App;
