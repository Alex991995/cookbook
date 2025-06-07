export interface RecipeDto {
  title: string;
  description: string | null;
  ingredients: string[];
  directions: string[];
  views: number;
  estimated_time: string;
  image: string;
}

export type UpdateRecipeDto = Partial<RecipeDto>;
