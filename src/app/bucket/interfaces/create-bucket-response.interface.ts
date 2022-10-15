export interface CreateBucketResponse {
  functionCode: string;
  data: {
    idToken: string;
    title: string;
    description: string;
  },
  "status": number;
}
