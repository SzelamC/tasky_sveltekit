import type { User } from '@prisma/client';

export interface UserAPIResponse {
  statusCode: number;
  error: {
    errorMessage?: string | null;
  };
  user?: User | null;
}
