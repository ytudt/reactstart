
import {MENU_INIT, MENU_REFER} from '../constants';

/**
 * 初始化 导航菜单列表
 * @return {[type]} [description]
 */
function menuInit() {
    return {
        type: MENU_INIT
    }
}

/**
 * 更新菜单列表状态
 */
function menuUpdate(path) {
    return {
        type: MENU_REFER,
        path
    }
}

export function menuRefer(path) {
    return dispatch => {
        // 这里我为了方便，直接将菜单写成固定的，实际使用过程中可以考虑通过后台接口方式获取菜单列表
        dispatch(menuInit())

        dispatch(menuUpdate(path))
    }
}
