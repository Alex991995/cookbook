import { Router } from 'express';

export class MainRoute {
	router: Router;
	constructor(nestedRouter: Router) {
		this.router = Router();

		this.router.all('/api', nestedRouter);
	}
}
