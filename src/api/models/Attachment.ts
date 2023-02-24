/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Post } from './Post';

export type Attachment = {
    id: number;
    file_url: string;
    file: string;
    post: Post;
    postId: number;
    created_at: string;
    updated_at: string;
};

