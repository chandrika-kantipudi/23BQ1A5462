const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let notifications = [
  {
    id: "notif_001",
    type: "Placement",
    title: "New Drive Alert",
    message: "Afford Medical has launched a hiring drive.",
    isRead: false,
    createdAt: "2026-06-05T10:00:00Z"
  }
];

// A. Fetch Notifications
app.get('/api/v1/notifications', (req, res) => {
  res.status(200).json({ success: true, notifications });
});

// B. Mark Notification as Read
app.patch('/api/v1/notifications/:id/read', (req, res) => {
  const notif = notifications.find(n => n.id === req.params.id);
  if (notif) {
    notif.isRead = true;
    return res.status(200).json({ success: true, message: "Notification marked as read." });
  }
  res.status(404).json({ success: false, message: "Notification not found." });
});

// C. Mark All as Read
app.post('/api/v1/notifications/read-all', (req, res) => {
  notifications = notifications.map(n => ({ ...n, isRead: true }));
  res.status(200).json({ success: true, message: "All notifications marked as read." });
});

app.listen(5000, () => console.log('Server running on port 5000'));