import { PrismaService } from '@/database/prisma.service';
import { CookbookDto, UpdateCookbookDto } from './dto/cookbook.dto';

export class CookbookService {
  constructor(private prismaService: PrismaService) {}

  async createCookbook(body: CookbookDto, user_id: string) {
    const { recipesIDs, ...cookbook } = body;

    const result = await this.prismaService.client.cookbook.create({
      data: {
        ...cookbook,
        user_id,
        recipes: { connect: recipesIDs },
        Cookbook_Likes: {
          create: { user_id },
        },
      },
    });
    return result;
  }

  async updateCookbook(body: UpdateCookbookDto, id: string, user_id: string) {
    const { recipesIDs, ...cookbook } = body;

    const result = await this.prismaService.client.cookbook.update({
      where: {
        id,
      },
      data: { ...cookbook, user_id, recipes: { connect: recipesIDs } },
    });
    return result;
  }

  async getCookbook(id: string) {
    return await this.prismaService.client.cookbook.findUnique({
      where: {
        id,
      },
      include: {
        recipes: true,
      },
    });
  }

  async fetchAllCookbooks(id: string) {
    return await this.prismaService.client.cookbook.findMany({
      where: {
        user_id: id,
      },
      include: {
        Cookbook_Likes: true,
      },
    });
  }

  async deleteCookbook(id: string) {
    try {
      await this.prismaService.client.cookbook.delete({
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

  async addLike(id: string) {
    try {
      await this.prismaService.client.cookbook_Likes.update({
        where: {
          id,
        },
        data: { number_likes: { increment: 1 } },
      });

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
