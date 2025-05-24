import { PrismaService } from '@/database/prisma.service';

export class LikeRecipeService {
  constructor(private prismaService: PrismaService) {}

  async createLike(recipe_id: string, user_id: string) {
    return await this.prismaService.client.recipe_Likes.create({
      data: { recipe_id, user_id },
    });
  }

  async addLike(id: string) {
    return await this.prismaService.client.recipe_Likes.update({
      where: {
        id,
      },
      data: { number_likes: { increment: 1 } },
    });
  }
}
