/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessTokenDto } from '../models/AccessTokenDto';
import type { Account } from '../models/Account';
import type { CreateAccountDto } from '../models/CreateAccountDto';
import type { LoginDto } from '../models/LoginDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthorizationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Register profile
     * @param requestBody
     * @returns Account
     * @throws ApiError
     */
    public registerProfile(
        requestBody: CreateAccountDto,
    ): CancelablePromise<Account> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * login
     * @param requestBody
     * @returns AccessTokenDto
     * @throws ApiError
     */
    public login(
        requestBody: LoginDto,
    ): CancelablePromise<AccessTokenDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get logged in profile
     * @returns Account
     * @throws ApiError
     */
    public getLoggedInProfile(): CancelablePromise<Account> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/auth/profile',
        });
    }

}
