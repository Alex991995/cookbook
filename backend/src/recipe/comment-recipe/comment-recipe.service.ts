import { PrismaService } from '@/database/prisma.service';

export class CommentRecipeService {
  constructor(private prismaService: PrismaService) {}

  async createComment(recipe_id: string, description: string) {
    try {
      const result = await this.prismaService.client.commentRecipe.create({
        data: { description, recipe_id },
      });
      return result;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async getAllCommentsByRecipeId(recipe_id: string,) {
    const result = await this.prismaService.client.commentRecipe.findMany({
      where: {
        recipe_id,
      },
      select: {
        description: true,
        recipe: {
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

    if(result.length){
      return result
    }
    return false
  }
}
