/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Post } from '../models/Post';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PostService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get all posts
     * @returns Post
     * @throws ApiError
     */
    public getAllPosts(): CancelablePromise<Array<Post>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/post',
        });
    }

    /**
     * Get post by ID
     * @param id
     * @returns Post
     * @throws ApiError
     */
    public getPostById(
        id: string,
    ): CancelablePromise<Post> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/post/{id}',
            path: {
                'id': id,
            },
        });
    }

}
