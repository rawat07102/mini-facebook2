import {NextApiHandler, NextApiRequest, NextApiResponse} from "next"
import {
	HTTPMethod,
	MethodNotAllowedException,
} from "./exception/MethodNotAllowedException"

export class Router {
	constructor() {}

	get(handler: NextApiHandler) {
		return async function routeHandler(
			req: NextApiRequest,
			res: NextApiResponse
		) {
			try {
				if (req.method !== HTTPMethod.GET) {
					throw new MethodNotAllowedException(
						"Wrong Method",
						req.url!,
						HTTPMethod.GET
					)
				}
				await handler(req, res)
			} catch (err) {
				console.error(err)
				return res.json({ok: false, data: null, error: err})
			}
		}
	}

	post(handler: NextApiHandler) {
		return async function routeHandler(
			req: NextApiRequest,
			res: NextApiResponse
		) {
			try {
				if (req.method !== HTTPMethod.POST) {
					throw new MethodNotAllowedException(
						"Wrong Method",
						req.url!,
						HTTPMethod.POST
					)
				}
				await handler(req, res)
			} catch (err) {
				console.error(err)
				return res.json({ok: false, data: null, error: err})
			}
		}
	}
}

export const router = new Router()
