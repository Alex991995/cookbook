import { RecipeDto } from '@/recipe/dto/recipe.dto';

interface RecipesIDs {
  id: string;
}

export interface CookbookDto {
  title: string;
  description: string | null;
  image: string;
  recipesIDs: RecipesIDs[];
}

export type UpdateCookbookDto = Partial<CookbookDto>;
