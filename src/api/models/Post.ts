/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { Attachment } from './Attachment';

export type Post = {
    id: number;
    title: string;
    description?: string;
    event_date: string;
    owner: Account;
    ownerId: number;
    attachments: Array<Attachment>;
    created_at: string;
    updated_at: string;
    posted: any;
};

