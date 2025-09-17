import { PrismaService } from '@/database/prisma.service';

export class CommentCookbookService {
  constructor(private prismaService: PrismaService) {}

  async createComment(cookbook_id: string, description: string) {
    try {
      const result = await this.prismaService.client.commentCookbook.create({
        data: { description, cookbook_id },
      });
      return result;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async getAllCommentsByCookbookId(cookbook_id: string) {
    return await this.prismaService.client.commentCookbook.findMany({
      where: {
        cookbook_id,
      },
      select: {
        description: true,
        id: true,
        createdAt: true,
        cookbook: {
          select: {
            user: {
              select: {
                image: true,
                name: true,
              },
            },
          },
        },
      },
    });
  }
}
