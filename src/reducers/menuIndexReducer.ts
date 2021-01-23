import { SWITCH_MENUINDEX, IMenuIndexAction } from '../actions/menuIndexAction';
import { Reducer } from 'redux';
import { menuLinks } from '../_components/header';

export interface IMenuIndex {
    menuIndex : number
}

export const menuIndexReducer : Reducer<IMenuIndex, IMenuIndexAction> = (
    state = { menuIndex: 0 },
    action
) => {
    switch (action.type) {
        case SWITCH_MENUINDEX: {
            let menuIndex = state.menuIndex;
            menuIndex = menuIndex < menuLinks.length -1 ? menuIndex + 1 : 0;
            return {
                ...state,
                menuIndex: menuIndex,
            };
        }
        default:
            return state;
    }
};