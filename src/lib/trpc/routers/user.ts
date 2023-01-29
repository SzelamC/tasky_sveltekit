import { t, publicProcedure } from '$lib/trpc/t';
import { z } from 'zod';
import type { UserAPIResponse } from '$lib/types/user/user';
import type { User } from '@prisma/client';
import argon2 from 'argon2';

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
				password: z.string().min(5).max(30)
			})
		)
		.mutation(async ({ input, ctx }): Promise<UserAPIResponse> => {
			const user = await ctx.prisma.user.findFirst({
				where: {
					email: input.email
				}
			});
			if (user) return generateUserAPIResponse(400, { errorMessage: 'User already exist' });
			try {
				const hashedPw = argon2.hash(input.password);
				const newUser = await ctx.prisma.user.create({
					data: {
						email: input.email,
						username: input.username,
						password: await hashedPw
					}
				});
				return generateUserAPIResponse(200, { user: newUser });
			} catch (err) {
				console.error(err);
			}
			return generateUserAPIResponse(500, { errorMessage: 'Internal server error' });
		}),
	login: publicProcedure
		.input(
			z.object({
				email: z.string().email(),
				password: z.string().min(5).max(30)
			})
		)
		.mutation(async ({ input, ctx }): Promise<UserAPIResponse> => {
			const user = await ctx.prisma.user.findFirst({
				where: {
					email: input.email
				}
			});
			if (!user) return generateUserAPIResponse(400, { errorMessage: 'User not exist' });

			const isPwValid = await argon2.verify(user.password, input.password);
			console.log(isPwValid);
			if (!isPwValid)
				return generateUserAPIResponse(400, {
					errorMessage: 'Username or password maybe incorrect'
				});
			return generateUserAPIResponse(200, { user });
		})
});
