import { useState } from "react";

async function getTaskIds(engagementId, bearerToken) {
  const url = `https://devapi-daleel.lyca.sa/api/DaleelEngagementStandardTask/SelectAllStandardTasks?Skip=1&Next=1000&GroupId=0&EngagementID=${engagementId}&TaskType=1&Status=|&FilterByAssign=|&AdvanceFilter=false&FilterByTeamMemberId=0&FilterByRoleId=0&FilterByReviewNote=|&FilterByNoteId=0&FilterByOther=|&FilterByNoteStatusType=|&FilterByNoteStatus=0&MatricsType=|&MatricsValue=|&UserID=0&Search=|`;

  const headers = {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    authorization: `Bearer ${bearerToken}`,
    origin: "http://localhost:5173",
    priority: "u=1, i",
    referer: "http://localhost:5173/",
    "sec-ch-ua": '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
  };

  const response = await fetch(url, { method: "GET", headers });
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const data = await response.json();
  return data.data.map((item) => item.id);
}

async function assignPreparer(documentId, engagementId, bearerToken) {
  const url = "https://devapi-daleel.lyca.sa/api/DaleelEngagementStandardTask/AssignDocument";
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
  const payload = {
    id: 0,
    assignmentId: 0,
    documentId,
    preparer: 72,
    reviewer: 0,
    documentType: 1,
    createdAt: new Date().toISOString(),
    reviewerDate: new Date().toISOString(),
    newAssignmentId: 0,
    previousAssignmentId: 0,
    isPreparer: true,
    createdBy: 72,
  };

  const response = await fetch(url, { method: "POST", headers, body: JSON.stringify(payload) });
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return await response.json();
}

async function assignReviewer(documentId, engagementId, bearerToken) {
  const url = "https://devapi-daleel.lyca.sa/api/DaleelEngagementStandardTask/AssignDocument";
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
  const payload = {
    id: 0,
    assignmentId: 0,
    documentId,
    preparer: 0,
    reviewer: 77,
    documentType: 1,
    createdAt: new Date().toISOString(),
    reviewerDate: new Date().toISOString(),
    newAssignmentId: 0,
    previousAssignmentId: 0,
    isPreparer: false,
  };

  const response = await fetch(url, { method: "POST", headers, body: JSON.stringify(payload) });
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return await response.json();
}

async function handOffTask(taskId, documentIds, engagementId, bearerToken) {
  const url = "https://devapi-daleel.lyca.sa/api/DaleelEngagementStandardTask/HandOffTask";
  const headers = {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    authorization: `Bearer ${bearerToken}`,
    "content-type": "application/json",
    origin: "http://localhost:5173",
    priority: "u=1, i",
    referer: "http://localhost:5173/",
    "sec-ch-ua": '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
  };
  const payload = {
    docDetails: documentIds.map((docId) => ({
      assignmentId: 0,
      taskDocumentId: docId,
      preparerId: 72,
      preparerName: "Basit Zameer",
      reviewerId: 77,
      reviewerName: "Avery Joseph",
      documentType: docId === 2653 ? 3 : 1,
      current: true,
      createdBy: 72,
      isPreparer: true,
      createdAt: new Date().toISOString(),
      reviewerDate: new Date().toISOString(),
      newAssignmentId: 0,
    })),
    taskId,
    assignee: 77,
    priorDays: 1,
    engagementId,
    createdBy: 72,
  };

  const response = await fetch(url, { method: "POST", headers, body: JSON.stringify(payload) });
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return await response.json();
}

async function saveTask(taskId, bearerToken) {
  const url = "https://devapi-daleel.lyca.sa/api/DaleelEngagementStandardTask/SaveTask";
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
  const payload = { id: taskId, description: null, timePhaseId: 0, signOffPartner: 1, status: 4 };

  const response = await fetch(url, { method: "PUT", headers, body: JSON.stringify(payload) });
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return await response.json();
}

async function importDocuments(engagementId, taskIds, bearerToken, updateProgress) {
  const url = "https://devapi-daleel.lyca.sa/api/DaleelEngagementStandardTask/ImportDocumentAsync";
  const headers = {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    authorization: `Bearer ${bearerToken}`,
    "content-type": "application/json",
    origin: "http://localhost:5173",
    priority: "u=1, i",
    referer: "http://localhost:5173/",
    "sec-ch-ua": '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36",
  };
  const basePayload = {
    operationMode: "Save",
    ImportFrom: "Engagements",
    documentName: "300GL(R)-A-Post EQR SS program-audits.docm",
    engagementDocumentID: 3427,
    engagementID: engagementId,
    footPrint: "",
    reason: "",
    createdBy: 72,
    isTemporary: false,
    taskType: 0,
    hasRevisions: true,
    assignmentID: 0,
    preparer: 0,
    preparerName: "",
    preparerInitial: "",
    reviewer: 0,
    reviewerName: "",
    reviewerInitial: "",
    isFileLocked: true,
    lockedBy: 72,
    lockedOn: "0001-01-01T00:00:00",
    createdOn: "0001-01-01T00:00:00",
    reviewerDate: "0001-01-01T00:00:00",
    totalNotes: 0,
    priorDays: 0,
    previousAssignmentID: 0,
    linkUrl: "",
    isDefault: true,
    isPrior: true,
    isAttached: true,
    isSubmitted: true,
  };

  for (let i = 0; i < taskIds.length; i++) {
    const taskId = taskIds[i];
    try {
      updateProgress(`Processing task ${i + 1}/${taskIds.length}: Importing document`);
      const payload = { ...basePayload, taskID: taskId };
      const importResponse = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });
      if (!importResponse.ok) throw new Error(`Import failed: ${importResponse.status}`);
      const importData = await importResponse.json();

      const documentId = 2653; // Placeholder
      updateProgress(`Processing task ${i + 1}/${taskIds.length}: Assigning preparer`);
      await assignPreparer(documentId, engagementId, bearerToken);

      updateProgress(`Processing task ${i + 1}/${taskIds.length}: Assigning reviewer`);
      await assignReviewer(documentId, engagementId, bearerToken);

      updateProgress(`Processing task ${i + 1}/${taskIds.length}: Handing off task`);
      await handOffTask(taskId, [2653, 3427], engagementId, bearerToken);

      updateProgress(`Processing task ${i + 1}/${taskIds.length}: Saving task`);
      await saveTask(taskId, bearerToken);
    } catch (error) {
      console.error(`Error processing task ${taskId}:`, error);
      updateProgress(`Error on task ${i + 1}/${taskIds.length}: ${error.message}`);
    }
  }
}

const AutomationForTasks = () => {
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
    setStatus("Fetching task IDs...");
    setError(null);

    try {
      const taskIds = await getTaskIds(engagementId, bearerToken);
      setStatus(`Found ${taskIds.length} tasks. Starting processing...`);
      await importDocuments(engagementId, taskIds, bearerToken, (msg) => setProgress(msg));
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
      <h1 style={{ textAlign: "center", color: "#333" }}>Task Automation Dashboard</h1>

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
        {isRunning ? "Running..." : "Start Automation"}
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

      {isRunning && (
        <div style={{ marginTop: "10px" }}>
          <progress
            value={progress ? parseInt(progress.split("/")[0].split(" ")[2]) : 0}
            max={progress ? parseInt(progress.split("/")[1].split(":")[0]) : 100}
            style={{ width: "100%" }}
          />
        </div>
      )}
    </div>
  );
};

export default AutomationForTasks;