import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ, NotificationTypeFilters, SET_LOADING_STATE,
    SET_TYPE_FILTER
} from '../actions/notificationActionTypes';
import {Map, setIn} from 'immutable';
import {notificationsNormalizer} from "../schema/notifications";


export const initialState = {
    notifications: [],
    filter: 'DEFAULT',
    loading: false,
};

export default function notificationReducer(state = Map(initialState), action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const data = action.data.map(notification => ({ ...notification, isRead: false }));
            return state.mergeDeep({
                filter: NotificationTypeFilters.DEFAULT,
                notifications: notificationsNormalizer(data),
            });
        case MARK_AS_READ:
            return setIn(state, ['notifications', action.index.toString(), 'isRead'], true);
        case SET_TYPE_FILTER:
            return Map(state).set('filter', action.filter);
        case SET_LOADING_STATE:
            return state.set('loading', action.loading);
        default:
            return state;
    }
}
