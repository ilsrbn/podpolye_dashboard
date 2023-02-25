/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePostDto } from '../models/CreatePostDto';
import type { Post } from '../models/Post';
import type { UpdatePostDto } from '../models/UpdatePostDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminPostService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create post
     * @param requestBody
     * @returns Post
     * @throws ApiError
     */
    public createPost(
        requestBody: CreatePostDto,
    ): CancelablePromise<Post> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/admin/post',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get all posts
     * @returns Post
     * @throws ApiError
     */
    public getAllPosts(): CancelablePromise<Array<Post>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/admin/post',
        });
    }

    /**
     * Edit post
     * @param id
     * @param requestBody
     * @returns Post
     * @throws ApiError
     */
    public editPost(
        id: string,
        requestBody: UpdatePostDto,
    ): CancelablePromise<Post> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/admin/post/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
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
            url: '/api/admin/post/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Delete post by ID
     * @param id
     * @returns any
     * @throws ApiError
     */
    public deletePostById(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/admin/post/{id}',
            path: {
                'id': id,
            },
        });
    }

}
