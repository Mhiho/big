import { IMenuIndex } from '../reducers/menuIndexReducer';


export const SWITCH_MENUINDEX = 'SWITCH_MENUINDEX';

export interface IMenuIndexAction {
    type: typeof SWITCH_MENUINDEX
    menuIndex: IMenuIndex
}