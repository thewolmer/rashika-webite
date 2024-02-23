import { DatabaseObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export type QueryDataBaseResponse = {
  data: DatabaseObjectResponse[];
  success: boolean;
};

export type QueryDataBaseError = {
  error: {
    code: number;
    message: string;
  };
  success: boolean;
  data: undefined;
};
