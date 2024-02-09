import { Handler } from 'aws-lambda';
import { ListBucketsCommand, S3Client } from '@aws-sdk/client-s3';

const s3 = new S3Client({});

export const handler: Handler = async (event, context) => {
  const list = await s3.send(new ListBucketsCommand({}));
  console.log(list);
};
