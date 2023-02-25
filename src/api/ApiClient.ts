/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AdminAttachmentService } from './services/AdminAttachmentService';
import { AdminAuthorizationService } from './services/AdminAuthorizationService';
import { AdminPostService } from './services/AdminPostService';
import { PostService } from './services/PostService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ApiClient {

    public readonly adminAttachment: AdminAttachmentService;
    public readonly adminAuthorization: AdminAuthorizationService;
    public readonly adminPost: AdminPostService;
    public readonly post: PostService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'http://localhost:3000',
            VERSION: config?.VERSION ?? '1',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.adminAttachment = new AdminAttachmentService(this.request);
        this.adminAuthorization = new AdminAuthorizationService(this.request);
        this.adminPost = new AdminPostService(this.request);
        this.post = new PostService(this.request);
    }
}

