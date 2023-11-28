import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE }
    from '../actions/courseActionTypes';


const initialState = [];
export default function courseReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return action.data.map(function(course) {
                return { ...course, isSelected: false };
            });

        case SELECT_COURSE:
        case UNSELECT_COURSE: {
            const { index } = action;
            if (index >= 0 && index < state.length) {
                const isSelected = action.type === SELECT_COURSE;
                return state.map(function(course) {
                    return {
                        ...course,
                        isSelected: course.id === index ? isSelected : course.isSelected
                    };
                });
            }
            return state;
        }

        default:
            return state;
    }
}
