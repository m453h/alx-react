import React from "react";
import "./Notifications.css";

function NotificationItem({ type, html, value }) {

    if (type && value) {
        return (
            <li data-notification-type={type}>{value}</li>
        );
    }

    if (html) {
        return (
            <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>
        );
    }
}

export default NotificationItem;
