import { useState } from "react";

async function submitIndependenceFormQuestionAnswers(engagementId, bearerToken, updateProgress) {
  const url = "https://devapi-daleel.lyca.sa/api/DaleelEngagementIndependenceFormQuestionAnswer/SubmitIndependenceFormQuestionAnswers";
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
      questionId: 2,
      question: "I have not previously been employed by the audit client and I have not provided services to the audit client as a contractor or as a third-party service provider (except as an LYCA professional). ",
      subServiceId: 1,
      answerId: 1,
      answer: " Agree or Previously assessed and resolved",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
      CreatedBy: 72,
      role: "User",
    },
    {
      id: 0,
      questionId: 3,
      question: "I have not sought employment or had any employment discussions with the audit client, nor has the audit client indicated that they are interested in having employment discussions with me, and I have no outstanding offers of employment from the audit client. Additionally, my immediate or close family members have not begun any employment discussions with, or do not have any offers of employment from, the audit client.",
      subServiceId: 1,
      answerId: 4,
      answer: " Agree",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
      CreatedBy: 72,
      role: "User",
    },
    {
      id: 0,
      questionId: 4,
      question: "I have no immediate or close family members employed by or associated with the audit client, as an employee, officer or a director, and immediate or close family members do not provide services as a contractor or as a third-party service provider to the audit client. ",
      subServiceId: 1,
      answerId: 6,
      answer: " Agree or Previously assessed and resolved",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
      CreatedBy: 72,
      role: "User",
    },
    {
      id: 0,
      questionId: 5,
      question: "I am not aware of any LYCA alumni who have joined the audit client in an accounting or financial reporting oversight role, including as an officer or director, since the last time that independence procedures were completed.",
      subServiceId: 1,
      answerId: 8,
      answer: " Agree or Previously assessed and resolved",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
      CreatedBy: 72,
      role: "User",
    },
    {
      id: 0,
      questionId: 6,
      question: "I and my immediate family members do not have financial relationships with the audit client and I do not have current knowledge or reason to believe that my close family members have financial interests with the audit client that are material to the net worth of the close family member, and I am not aware that anyone with whom I have a close relationship has a material financial interest in the audit client. Financial relationships include the following. [LYCA Independence Policy Section 101-106]\na. Financial interests (stock, bonds, mutual funds, puts, calls, options, warrants ,sort sales or derivatives of such interests, guaranteed or secured bonds, or other securities of, or interests in, audit clients)\nb. Relationships with broker/dealers\nc. Depository relationships with financial institutions\nd. Loans and other credit, including credit cards, overdraft protection, margin line of credit and guarantees\ne. Pensions, insurance policies or investment products\nf. Serving as a trustee or executor with decision-making over a trust or estate that holds the audit client's securities\n\nFor all statutory audits in EU member states, consider in your response any investments in funds, other collective investment vehicles, or instruments that are issued, guaranteed or otherwise supported (e.g. sponsored/managed/advised) by the audit client. In addition to immediate family members also consider in your response other relatives that have shared the same household as you for at least one year.\n",
      subServiceId: 1,
      answerId: 10,
      answer: " Agree or Previously assessed and resolved",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
      CreatedBy: 72,
      role: "User",
    },
    {
      id: 0,
      questionId: 7,
      question: "I and my immediate family members do not have a business relationship with the audit client or its officers, directors or controlling owners. ",
      subServiceId: 1,
      answerId: 12,
      answer: " Agree or Previously assessed and resolved",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
      CreatedBy: 72,
      role: "User",
    },
    {
      id: 0,
      questionId: 8,
      question: "I and my immediate family members do not have any loans with an officer or director or controlling owner of the audit client.",
      subServiceId: 1,
      answerId: 14,
      answer: " Agree or Previously assessed and resolved",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
      CreatedBy: 72,
      role: "User",
    },
    {
      id: 0,
      questionId: 9,
      question: "I am not aware of actual or a threat of litigation between myself and the entity under audit, or its officers, directors or securities holders. This form refers to “the entity under audit” in some procedures. The entity under audit is the entity whose financial statements or other information are being audited or reviewed by LYCA, and any entities consolidated or accounted for under the equity method in the financial statements of the entity. ",
      subServiceId: 1,
      answerId: 16,
      answer: " Agree",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
      CreatedBy: 72,
      role: "User",
    },
    {
      id: 0,
      questionId: 10,
      question: "Manager or above only: I have not vacationed with relevant individuals (individuals employed by or associated with the audit client (including non-employee directors or individuals providing services as a contractor either individually or as a third-party service provider) who are considered to be in an accounting or financial reporting oversight role) or close family members who are relevant individuals of the entity under audit, and I am not aware of any other LYCA audit engagement team members that have vacationed with relevant individuals of the entity under audit. Vacationing with a relevant individual includes circumstances where LYCA person and a relevant individual arrange to go on vacation together or to be on vacation at the same time and destination. ",
      subServiceId: 1,
      answerId: 18,
      answer: " Agree or Previously assessed and resolved",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
      CreatedBy: 72,
      role: "User",
    },
    {
      id: 0,
      questionId: 11,
      question: "I have not gone on a trip or attended Floatan event with any relevant individual where the trip or event required non-local travel or overnight accommodations and the predominant purpose of the trip or event was social, leisure or entertainment in nature and I am not aware of any other LYCA audit engagement team member that has done so.",
      subServiceId: 1,
      answerId: 21,
      answer: " Agree or Previously assessed and resolved",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
      CreatedBy: 72,
      role: "User",
    },
    {
      id: 0,
      questionId: 12,
      question: "Does this audit require LYCA to be independent under the rules or standards of any countries in addition to the country selected in the engagement profile (e.g., entity under audit is listed on more than one exchange or when a component team is relying on these engagement team inquiries for independence procedures relating to a separate statutory audit)?",
      subServiceId: 1,
      answerId: 23,
      answer: "Yes",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
      CreatedBy: 72,
      role: "User",
    },
    {
      id: 0,
      questionId: 13,
      question: "Please select the country where LYCA require to be independent:",
      subServiceId: 1,
      answerId: 27,
      answer: "Bahrain",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
      CreatedBy: 72,
      role: "User",
    },
    {
      id: 0,
      questionId: 14,
      question: "Is the entity under audit a US audit client, a US SEC audit client or an affiliate of a US SEC audit client?",
      subServiceId: 1,
      answerId: 31,
      answer: "Yes",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
      CreatedBy: 72,
      role: "User",
    },
    {
      id: 0,
      questionId: 15,
      question: "I am not aware of any close relationships between myself or any other LYCA audit engagement team member and any relevant individual. [Examples of a close relationship include, but may not be limited to immediate or close family members as well as, aunts, uncles, grandparents, nieces, nephews, cousins, in-law, step relatives, boy/girlfriends, close or best friends, intimate or other close relationships with relevant individuals employed or associated with a proscribed entity. Close relationships can also include dating, frequent entertaining, sharing a residence, vacationing, or non-business related overnight trips. Gifts that are not commensurate with the normal courtesies of business and social life may be indicative of a close relationship. Refer to the Independence Policy in these situations and consultation is encouraged (required in the case of partners/principals) with your local country or Region independence team.] If any matter is noted with a Partner or Principal, consultation with Independence is required. In responding to this question, I have considered the following:\n\nI have not provided any gifts to, nor received any gifts from, a relevant individual of the audit client or a close or immediate family member of a relevant individual of the audit client or I am not aware of any other LYCA audit engagement team member providing a gift to or receiving a gift from a relevant individual of the audit client or a close or immediate family member of a relevant individual of the audit client where such gifts are not commensurate with the normal courtesies of business and social life. A gift includes but may not be limited to physical articles, cash (which is strictly prohibited), tickets to events at which an LYCA employee does not attend with the relevant individual of the audit client. (For further guidance, refer to the Hospitality and Gifts Global Policy.) \n\n",
      subServiceId: 1,
      answerId: 33,
      answer: " Agree or Previously assessed and resolved",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
      CreatedBy: 72,
      role: "User",
    },
    {
      id: 0,
      questionId: 16,
      question: "I certify that I have been appropriately invited to serve as a member of the audit engagement team to participate on the audit of this audit client.",
      subServiceId: 1,
      answerId: 35,
      answer: " Agree",
      daleelEngagementId: parseInt(engagementId),
      isActive: true,
      CreatedBy: 72,
      role: "User",
    },
  ];

  try {
    updateProgress("Submitting independence form question answers...");
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    updateProgress("Independence form question answers submitted successfully!");
    return data;
  } catch (error) {
    console.error("Error submitting independence form question answers:", error);
    throw error;
  }
}

const IndependenceFormAutomation = () => {
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
      await submitIndependenceFormQuestionAnswers(engagementId, bearerToken, setProgress);
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
      <h1 style={{ textAlign: "center", color: "#333" }}>
        Independence Form Answers Automation
      </h1>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Engagement ID:
        </label>
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
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Bearer Token:
        </label>
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
        {isRunning ? "Running..." : "Submit Independence Answers"}
      </button>

      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: "#555" }}>Status</h3>
        <p style={{ color: status === "Completed" ? "green" : status === "Failed" ? "red" : "#333" }}>
          {status}
        </p>
        {progress && (
          <p style={{ color: progress.includes("Error") ? "red" : "#666" }}>{progress}</p>
        )}
        {error && <p style={{ color: "red", fontStyle: "italic" }}>Error: {error}</p>}
      </div>
    </div>
  );
};

export default IndependenceFormAutomation;