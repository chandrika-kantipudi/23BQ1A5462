# Stage 1: Notification System Design

## 1. Core Actions & API Endpoints

### A. Fetch Notifications
* **Endpoint:** GET /api/v1/notifications
* **Headers:**
  * Authorization: Bearer <JWT_TOKEN>
  * Accept: application/json
* **Response Body (200 OK):**
```json
{
  "success": true,
  "notifications": [
    {
      "id": "notif_001",
      "type": "Placement",
      "title": "New Drive Alert",
      "message": "Afford Medical has launched a hiring drive.",
      "isRead": false,
      "createdAt": "2026-06-05T10:00:00Z"
    }
  ]
}
### B. Mark Notification as Read
* **Endpoint:** PATCH /api/v1/notifications/:id/read
* **Headers:**
  * Authorization: Bearer <JWT_TOKEN>
* **Response Body (200 OK):**
```json
{
  "success": true,
  "message": "Notification marked as read."
}
### C. Mark As All Read
* **Endpoint:** POST /api/v1/notifications/read-all
* **Headers:**
  * Authorization: Bearer <JWT_TOKEN>
* **Response Body (200 OK):**
```json
{
  "success": true,
  "message": "All notifications marked as read."
}