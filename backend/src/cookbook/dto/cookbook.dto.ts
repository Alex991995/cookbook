export interface CookbookDto {
  title: string;
  description: string | null;
  image: string;
  user_id: string;
  recipe_id: string;
}

export type UpdateCookbookDto = Partial<CookbookDto>;
