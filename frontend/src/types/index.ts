export interface IUser {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  description?: string;
}

export interface ArrayRecipe {
  data: Recipe[];
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  directions: string[];
  views: number;
  estimated_time: string;
  image: string;
  user_id: string;
  createdAt: string;
  updatedAt: string;
  user?: IUserCreator;
  _count: ICount;
}

interface ICount {
  likes: number;
  comment: number;
}



export interface CreateCookbookTypeForServer {
  title: string;
  description?: string;
  recipes: string[];
}

export interface CreateRecipeTypeForServer {
  title: string;
  description?: string;
  estimated_time: number;

  ingredients: string[];
  directions: string[];
}

export interface IUserCreator {
  name: string;
}
