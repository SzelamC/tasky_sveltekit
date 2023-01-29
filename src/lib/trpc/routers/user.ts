import { t, publicProcedure } from '$lib/trpc/t';
import { z } from 'zod';
import type { UserAPIResponse } from '$lib/types/user/user';
import type { User } from '@prisma/client';

function generateUserAPIResponse(
  code: number,
  { errorMessage, user }: { errorMessage?: string; user?: User }
): UserAPIResponse {
  return {
    statusCode: code,
    error: {
      errorMessage: errorMessage ?? null
    },
    user: user ?? null
  };
}

export const userRouter = t.router({
  register: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        username: z.string().min(3).max(20),
        password: z.string().min(8).max(30)
      })
    )
    .mutation(async ({ input, ctx }): Promise<UserAPIResponse> => {
      const user = await ctx.prisma.user.findFirst({
        where: {
          email: input.email
        }
      });
      if (user) {
        return generateUserAPIResponse(400, { errorMessage: 'User already exist' });
      }
      const newUser = await ctx.prisma.user.create({
        data: {
          email: input.email,
          username: input.username,
          password: input.password
        }
      });
      return generateUserAPIResponse(200, { user: newUser });
    }),
  login: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8).max(30)
      })
    )
    .mutation(async ({ input, ctx }): Promise<UserAPIResponse> => {
      const user = await ctx.prisma.user.findFirst({
        where: {
          email: input.email
        }
      });
      if (!user) {
        return generateUserAPIResponse(400, { errorMessage: 'User not exist' });
      }
      if (user.password !== input.password) {
        return {
          statusCode: 400,
          error: {
            errorMessage: 'Username or password maybe incorrect'
          }
        };
      }
      return generateUserAPIResponse(400, { user });
    })
});
