import { Handler } from 'aws-lambda';
// @aws-sdk/client-ecs is not bundled in LLRT.
import { ECSClient, ListClustersCommand } from '@aws-sdk/client-ecs';

const ecs = new ECSClient({
  // we need to explicitly pass credentials and region from environment variables
  // when aws-sdk is bundled for browser platform.
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    sessionToken: process.env.AWS_SESSION_TOKEN!,
  },
  region: process.env.AWS_REGION,
});

export const handler: Handler = async (event, context) => {
  const list = await ecs.send(new ListClustersCommand({}));
  console.log(list);
};
