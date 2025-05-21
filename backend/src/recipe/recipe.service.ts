import { PrismaService } from '@/database/prisma.service';
import { RecipeDto, UpdateRecipeDto } from './dto/recipe.dto';

export class RecipeService {
  constructor(private prismaService: PrismaService) {}

  async createRecipe(user_id: string, recipe: RecipeDto) {
    try {
      await this.prismaService.client.recipe.create({
        data: { ...recipe, user_id },
      });
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async getAllRecipeByUserId(user_id: string) {
    const result = await this.prismaService.client.recipe.findMany({
      where: {
        user_id,
      },
      omit: {
        user_id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result.length) {
      return result;
    }
    return false;
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
      // await this.prismaService.client.recipe.delete({
      //   where: {
      //     id,
      //   },
      // });

       await this.prismaService.client.recipe.deleteMany();

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
