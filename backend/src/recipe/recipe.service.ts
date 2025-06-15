import { PrismaService } from '@/database/prisma.service';
import { RecipeDto, UpdateRecipeDto } from './dto/recipe.dto';

export class RecipeService {
  constructor(private prismaService: PrismaService) {}

  async createRecipe(user_id: string, recipe: RecipeDto) {
    try {
      const result = await this.prismaService.client.recipe.create({
        data: {
          ...recipe,
          user_id,
        },
      });

      return result;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async getAllUserRecipeByUserId(user_id: string) {
    const result = await this.prismaService.client.recipe.findMany({
      where: {
        user_id,
      },
      omit: {
        user_id: true,
        createdAt: true,
        updatedAt: true,
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            likes: true,
            comment: true,
          },
        },
      },
    });
    return result;
  }

  async getAllRecipe(sort: string, time: number) {
    let obj = {};
    if (sort === 'comment') {
      obj = {
        comment: {
          _count: 'desc',
        },
      };
    } else if (sort === 'popularity') {
      obj = {
        likes: {
          _count: 'desc',
        },
      };
    } else {
      obj = { views: 'desc' };
    }

    const result = await this.prismaService.client.recipe.findMany({
      where: {
        estimated_time: {
          lte: time,
        },
      },

      omit: {
        user_id: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: [
        {
          ...obj,
        },
      ],

      include: {
        user: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            likes: true,
            comment: true,
          },
        },
      },
    });
    return result;
  }

  async getUniqueRecipeByID(id: string) {
    return await this.prismaService.client.recipe.findUnique({
      where: {
        id,
      },
      omit: {
        user_id: true,
        createdAt: true,
        updatedAt: true,
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            likes: true,
            comment: true,
          },
        },
      },
    });
  }

  async getRecipeByTitle(title: string) {
    return await this.prismaService.client.recipe.findMany({
      where: {
        title: { contains: title },
      },
    });
  }

  async updateRecipe(id: string, body: UpdateRecipeDto) {
    try {
      return await this.prismaService.client.recipe.update({
        where: {
          id,
        },
        data: body,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async deleteById(id: string) {
    try {
      await this.prismaService.client.recipe.delete({
        where: {
          id,
        },
      });

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async addLike(user_id: string, recipe_id: string) {
    try {
      return await this.prismaService.client.recipe_Likes.create({
        data: {
          user_id,
          recipe_id,
        },
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
