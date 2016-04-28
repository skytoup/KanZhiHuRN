/**
 * Created by apple on 16/2/16.
 */

'use strict';

import React, {
    PropTypes,
    ListView,
} from 'react-native';

const ListViewDataSource = PropTypes.instanceOf(ListView.DataSource);

export const PostsData = PropTypes.shape({
    posts: ListViewDataSource,
    isRefreshing: PropTypes.bool
});
export const PostItemData = PropTypes.shape({
    date: PropTypes.string,
    name: PropTypes.string,
    excerpt: PropTypes.string
});

export const PostAnswersData = PropTypes.shape({
    postAnswers: ListViewDataSource
});

export const PostAnswerItemData = PropTypes.shape({
    title: PropTypes.string,
    avatar: PropTypes.string,
    authorname: PropTypes.string,
    vote: PropTypes.string,
    summary: PropTypes.string
});

export const TopuserData = PropTypes.shape({
    topuser: ListViewDataSource,
    value: PropTypes.string,
    page: PropTypes.number
});

export const TopuserItemData = PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    signature: PropTypes.string,
    agree: PropTypes.number,
    follower: PropTypes.number
});

export const UserDetailDetailData = PropTypes.shape({
    answer: PropTypes.number,
    followee: PropTypes.number,
    follower: PropTypes.number,
    agree: PropTypes.number,
    thanks: PropTypes.number
});

export const UserDetailTopAnswerData = PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    agree: PropTypes.number,
    ispost: PropTypes.bool
});

export const UserDetailTopAnswersData = PropTypes.arrayOf(UserDetailTopAnswersData);

export const UserDetailData = PropTypes.shape({
    signature: PropTypes.string,
    description: PropTypes.string,
    avatar: PropTypes.string,
    detail: UserDetailDetailData,
    topanswers: UserDetailTopAnswersData
});
