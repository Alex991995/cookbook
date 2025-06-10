export interface RecipeDto {
  title: string;
  description: string | null;
  ingredients: string[];
  directions: string[];
  estimated_time: number;
  image: string;
}

export type UpdateRecipeDto = Partial<RecipeDto>;
