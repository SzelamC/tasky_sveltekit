import { t } from '$lib/trpc/t';
import { userRouter } from '$lib/trpc/routers/user';

export const router = t.router({
	user: userRouter
});

export type Router = typeof router;
