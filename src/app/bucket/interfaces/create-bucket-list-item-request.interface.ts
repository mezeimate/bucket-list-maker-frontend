import {BaseRequest} from "./base-request.interface";
import {CreateBucketListItem} from "./create-bucket-list-item.interface";

export interface CreateBucketListItemRequest extends BaseRequest, CreateBucketListItem {
}