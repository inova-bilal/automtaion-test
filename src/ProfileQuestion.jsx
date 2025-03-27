import { useState } from "react";

async function submitProfileQuestionAnswers(engagementId, bearerToken, updateProgress) {
  const url = "https://devapi-daleel.lyca.sa/api/DaleelEngagementProfileQuestionAnswer/SubmitProfileQuestionAnswers";
  const headers = {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    authorization: `Bearer ${bearerToken}`,
    "content-type": "application/json",
    origin: "https://devapp-daleel.lyca.sa",
    priority: "u=1, i",
    referer: "https://devapp-daleel.lyca.sa/",
    "sec-ch-ua": '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
  };

  const payload = [
    {
      id: 0,
      questionId: 1,
      question:
        "Does this engagement relate to client chargeable activity that will result in issuance of a deliverable (including interoffice reports)?",
      subServiceId: 1,
      answerId: 1,
      answer: "Yes",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
    {
      id: 0,
      questionId: 2,
      question: "What is the nature of the engagement?",
      subServiceId: 1,
      answerId: 2,
      answer: "Audit of financial statements",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
    {
      id: 0,
      questionId: 3,
      question: "Is the engagement part of a Group Audit?",
      subServiceId: 1,
      answerId: 8,
      answer: "YES, Primary team",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
    {
      id: 0,
      questionId: 4,
      question: "Select the type of entity:",
      subServiceId: 1,
      answerId: 4,
      answer: "Test",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
    {
      id: 0,
      questionId: 5,
      question: "Which auditing standards apply to this engagement?",
      subServiceId: 1,
      answerId: 14,
      answer: "Kingdom of Saudi Arabia",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
    {
      id: 0,
      questionId: 6,
      question: "What is the applicable GAAP?",
      subServiceId: 1,
      answerId: 6,
      answer: "Test",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
    {
      id: 0,
      questionId: 7,
      question: "In what primary industry sector does the entity operate?",
      subServiceId: 1,
      answerId: 22,
      answer: "Banking and Capital Markets ~ Banks",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
    {
      id: 0,
      questionId: 8,
      question: "In how many other industry sectors does the entity operate?",
      subServiceId: 1,
      answerId: 26,
      answer: "2",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
    {
      id: 0,
      questionId: 9,
      question: "Does the engagement meet the criteria for a non-complex entity?",
      subServiceId: 1,
      answerId: 30,
      answer: "Yes",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
    {
      id: 0,
      questionId: 10,
      question: "Is the engagement subject to close monitoring?",
      subServiceId: 1,
      answerId: 32,
      answer: "Yes",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
    {
      id: 0,
      questionId: 11,
      question: "Does this engagement require an Engagement Quality Review (EQR)?",
      subServiceId: 1,
      answerId: 34,
      answer: "Yes",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
    {
      id: 0,
      questionId: 12,
      question:
        "Do we use the work of the Internal Audit function or others (when permitted) to modify the nature, timing or extent of audit procedures to be performed directly by us?",
      subServiceId: 1,
      answerId: 36,
      answer: "Yes",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
    {
      id: 0,
      questionId: 13,
      question: "Do we use internal auditors or others (when permitted) to provide direct assistance?",
      subServiceId: 1,
      answerId: 38,
      answer: "Yes",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
    {
      id: 0,
      questionId: 14,
      question: "Are we going to issue an auditor’s report for the first time in the current year?",
      subServiceId: 1,
      answerId: 40,
      answer: "Yes",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
    {
      id: 0,
      questionId: 15,
      question: "Do we use the work of a management’s specialist?",
      subServiceId: 1,
      answerId: 42,
      answer: "Yes",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
    {
      id: 0,
      questionId: 16,
      question: "Do we use the work of an LYCA internal specialist or an auditor's specialist?",
      subServiceId: 1,
      answerId: 44,
      answer: "Yes",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
    {
      id: 0,
      questionId: 17,
      question:
        "Does the entity provide or contemplate providing the audited financial statements for a cross-border debt or equity transaction that is subject to regulatory requirements?",
      subServiceId: 1,
      answerId: 46,
      answer: "Yes",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
    },
  ];

  try {
    updateProgress("Submitting profile question answers...");
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    updateProgress("Profile question answers submitted successfully!");
    return data;
  } catch (error) {
    console.error("Error submitting profile question answers:", error);
    throw error;
  }
}

const ProfileQuestionAutomation = () => {
  const [engagementId, setEngagementId] = useState("");
  const [bearerToken, setBearerToken] = useState("");
  const [status, setStatus] = useState("Idle");
  const [progress, setProgress] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState(null);

  const runAutomation = async () => {
    if (!engagementId || !bearerToken) {
      setError("Please provide both Engagement ID and Bearer Token");
      return;
    }

    setIsRunning(true);
    setStatus("Running automation...");
    setError(null);

    try {
      await submitProfileQuestionAnswers(engagementId, bearerToken, setProgress);
      setStatus("Completed");
    } catch (error) {
      setStatus("Failed");
      setError(error.message);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Profile Question Answers Automation</h1>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Engagement ID:</label>
        <input
          type="text"
          value={engagementId}
          onChange={(e) => setEngagementId(e.target.value)}
          disabled={isRunning}
          placeholder="Enter Engagement ID"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Bearer Token:</label>
        <textarea
          value={bearerToken}
          onChange={(e) => setBearerToken(e.target.value)}
          disabled={isRunning}
          placeholder="Enter Bearer Token"
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            minHeight: "80px",
            resize: "vertical",
          }}
        />
      </div>

      <button
        onClick={runAutomation}
        disabled={isRunning}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: isRunning ? "#ccc" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: isRunning ? "not-allowed" : "pointer",
          fontSize: "16px",
        }}
      >
        {isRunning ? "Running..." : "Submit Profile Answers"}
      </button>

      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: "#555" }}>Status</h3>
        <p style={{ color: status === "Completed" ? "green" : status === "Failed" ? "red" : "#333" }}>{status}</p>
        {progress && <p style={{ color: progress.includes("Error") ? "red" : "#666" }}>{progress}</p>}
        {error && <p style={{ color: "red", fontStyle: "italic" }}>Error: {error}</p>}
      </div>
    </div>
  );
};

export default ProfileQuestionAutomation;
