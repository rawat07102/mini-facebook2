export class PostDTO {
	constructor(
		public id: string,
		public userId: string,
		public body: string,
		public createdAt: string,
		public likeCount: number,
		public commentCount: number
	) {}
}
