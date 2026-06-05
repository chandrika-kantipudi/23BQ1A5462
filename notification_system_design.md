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
# Stage 2: Database Selection & Schema

## 1. Database Selection
* **Choice:** MySQL
* **Reasoning:** Notifications require structured relationships between users and alert data. MySQL handles these links efficiently with ACID compliance to ensure "read" statuses are saved reliably.

## 2. Database Schema

### Table: users
| Column | Type | Constraints |
| :--- | :--- | :--- |
| id | INT | Primary Key, Auto-Increment |
| username | VARCHAR(100) | Not Null |

### Table: notifications
| Column | Type | Constraints |
| :--- | :--- | :--- |
| id | INT | Primary Key, Auto-Increment |
| user_id | INT | Foreign Key (users.id) |
| type | VARCHAR(50) | e.g., 'Placement' |
| message | TEXT | Not Null |
| is_read | BOOLEAN | Default: false |

## 3. Testing Results (Postman)
The API was successfully tested locally. 
* **Endpoint:** GET `http://localhost:5000/api/v1/notifications`
* **Status:** 200 OK
* **Result:** Successfully retrieved the notification list as a JSON object.