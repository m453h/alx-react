import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters,
    FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE
} from "./notificationActionTypes";

export function markAsRead(index) {
    return {
        type: MARK_AS_READ,
        index,
    };
}

export function setNotificationFilter(filter) {
    return {
        type: SET_TYPE_FILTER,
        filter,
    };
}

export function boundMarkAsRead(index) {
    return function(dispatch) {
        dispatch(markAsRead(index));
    };
}

export function boundSetNotificationFilter(index) {
    return function(dispatch) {
        dispatch(setNotificationFilter(index));
    };
}

export function setLoadingState(loading) {
    return {
        type: SET_LOADING_STATE,
        loading,
    };
}

export function setNotifications(notifications) {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        notifications,
    };
}

export function fetchNotifications() {
    return function(dispatch) {
        dispatch(setLoadingState(true));
        return fetch('http://localhost:8564/notifications.json')
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                dispatch(setNotifications(data));
            })
            .catch(function(error) {
            })
            .finally(function() {
                dispatch(setLoadingState(false));
            });
    };
}
