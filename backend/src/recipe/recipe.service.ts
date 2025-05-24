import { PrismaService } from '@/database/prisma.service';
import { RecipeDto, UpdateRecipeDto } from './dto/recipe.dto';

export class RecipeService {
  constructor(private prismaService: PrismaService) {}

  async createRecipe(user_id: string, recipe: RecipeDto) {
    try {
      const result = await this.prismaService.client.recipe.create({
        data: { ...recipe, user_id },
      });

      return result;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async getAllRecipeByUserId(user_id: string) {
    return await this.prismaService.client.recipe.findMany({
      where: {
        user_id,
      },
      omit: {
        user_id: true,
        createdAt: true,
        updatedAt: true,
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
}
