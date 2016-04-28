/**
 * Created by apple on 16/2/15.
 */

'use strict';

// 帖子列表
export const ACTION_GetPostsSuccess = 'get_post_success';
export const ACTION_GetPostsFail = 'get_post_fail';
export const ACTION_GetPostsRefresh = 'get_post_refresh';

// 帖子回答列表
export const ACTION_GetPostAnswersSuccess = 'get_post_answers_success';
export const ACTION_GetPostAnswersFail = 'get_post_answers_fail';
export const ACTION_InitPostAnswers = 'init_post_answers';

// 用户排行榜
export const ACTION_GetTopuserSuccess = 'get_topuser_success';
export const ACTION_GetTopuserFail = 'get_topuser_fail';
export const ACTION_InitTopuser = 'init_topuser';

// 用户详情
export const ACTION_GetUserDetailSuccess = 'get_user_detail_success';
export const ACTION_GetUserDetailFail = 'get_user_detail_fail';
export const ACTION_InitUserDetail = 'init_user_detail';