import { Handler } from 'aws-lambda';
import { ECSClient, ListClustersCommand } from '@aws-sdk/client-ecs';

const ecs = new ECSClient({region: 'ap-northeast-1'});

export const handler: Handler = async (event, context) => {
  const list = await ecs.send(new ListClustersCommand({}));
  console.log(list);
};
