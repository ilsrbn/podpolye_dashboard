/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminAttachmentService {

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
            url: '/api/admin/attachment/post/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public attachmentControllerRemove(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/admin/attachment/{id}',
            path: {
                'id': id,
            },
        });
    }

}
