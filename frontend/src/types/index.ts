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
  user?: IUserCreator;
  _count: ICount;
}

export interface ArrayCookbook {
  data: Cookbook[];
}

export interface Cookbook {
  views: number;
  id: string;
  title: string;
  description: string;
  image: string;
  _count: CountCookbook;
  user: IUserCreator;
  recipes: Recipe[];
}

export interface CountCookbook {
  Cookbook_Likes: number;
  commentCookbook: number;
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

export interface UpdateRecipeTypeForServer {
  id?: string;
  title?: string;
  description?: string;
  estimated_time?: number;
  ingredients?: string[];
  directions?: string[];
}

export interface IUserCreator {
  image?: string;
  name: string;
}

export interface IResultCreatedComment {
  id: string;
  description: string;
}

export interface ArrayCommentRecipe {
  data: CommentRecipe[];
}

export interface CommentRecipe {
  id: string;
  description: string;
  createdAt: string;
  recipe: InfoUser;
}


export interface ArrayCommentCookbook {
  data: CommentCookbook[];
}

export interface CommentCookbook {
  id: string;
  description: string;
  createdAt: string;
  cookbook: InfoUser;
}

export interface InfoUser {
  user: IUserCreator;
}
