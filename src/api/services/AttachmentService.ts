/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AttachmentService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param id
     * @param formData
     * @returns any
     * @throws ApiError
     */
    public attachmentControllerCreate(
        id: string,
        formData: {
            files?: Array<Blob>;
        },
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/attachment/post/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param id
     * @returns string
     * @throws ApiError
     */
    public attachmentControllerRemove(
        id: string,
    ): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/attachment/{id}',
            path: {
                'id': id,
            },
        });
    }

}
