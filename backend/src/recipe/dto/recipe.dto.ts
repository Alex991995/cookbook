export interface RecipeDto {
  title: string;
  description: string | null;
  ingredients: string[];
  direction: string[];
  views: number;
  estimated_time: number;
  image: string;
}





export type UpdateRecipeDto = Partial<RecipeDto>;
