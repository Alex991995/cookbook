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
      },
    });
    return result;
  }

  async addRecipeToCookbook(cookbook_id: string, recipesID: string) {


    const result = await this.prismaService.client.cookbook.update({
      where: {
        id: cookbook_id,
      },
      data: {
        recipes: { connect: { id: recipesID } },
      },
    });
    return result;
  }

  
  async addCookbookToUSer(id: string, user_id: string) {
    return await this.prismaService.client.user.update({
      where: {
        id: user_id,
      },
      data: {
        cookbook: {
          connect: {
            id,
          },
        },
      },
      include: {
        cookbook: true,
      },
    });
  }

  async getCookbook(id: string) {
    return await this.prismaService.client.cookbook.findUnique({
      where: {
        id,
      },
      include: {
        recipes: {
          include: {
            _count: {
              select: {
                likes: true,
                comment: true,
                views: true,
              },
            },
          },
        },
        user: true,
        _count: {
          select: {
            Cookbook_Likes: true,
            commentCookbook: true,
          },
        },
      },
    });
  }

  async fetchAllUserCookbooks(id: string) {
    return await this.prismaService.client.cookbook.findMany({
      where: {
        user_id: id,
      },
      select: {
        views: true,
        id: true,
        title: true,
        description: true,
        image: true,
        user: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            Cookbook_Likes: true,
            commentCookbook: true,
            views: true,
          },
        },
      },
    });
  }

  async fetchAllCookbooks() {
    return await this.prismaService.client.cookbook.findMany({
      select: {
        views: true,
        id: true,
        title: true,
        description: true,
        image: true,
        user: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            Cookbook_Likes: true,
            commentCookbook: true,
            views: true,
          },
        },
      },
      orderBy: {
        Cookbook_Likes: {
          _count: 'desc',
        },
      },
    });
  }

  async fetchAllPopularCookbooks() {
    return await this.prismaService.client.cookbook.findMany({
      select: {
        views: true,
        id: true,
        title: true,
        description: true,
        image: true,
        user: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            Cookbook_Likes: true,
            commentCookbook: true,
            views: true,
          },
        },
      },
      orderBy: {
        Cookbook_Likes: {
          _count: 'desc',
        },
      },
      take: 4,
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

  async addLike(user_id: string, cookbook_id: string) {
    try {
      return await this.prismaService.client.cookbook_Likes.create({
        data: {
          user_id,
          cookbook_id,
        },
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async addViews(user_id: string, cookbook_id: string) {
    try {
      return await this.prismaService.client.views_Cookbook.create({
        data: {
          user_id,
          cookbook_id,
        },
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
