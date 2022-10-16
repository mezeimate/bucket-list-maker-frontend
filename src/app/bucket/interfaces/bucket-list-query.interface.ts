import {BucketListItem} from "./bucket-list-item.interface";
import {BaseResponse} from "./base-response.interface";

export interface BucketListQueryResponse extends BaseResponse {
    data: BucketListItem[]
}