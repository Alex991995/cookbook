/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Recipe
 *
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>;
/**
 * Model Recipe_Likes
 *
 */
export type Recipe_Likes = $Result.DefaultSelection<Prisma.$Recipe_LikesPayload>;
/**
 * Model CommentRecipe
 *
 */
export type CommentRecipe = $Result.DefaultSelection<Prisma.$CommentRecipePayload>;
/**
 * Model Cookbook
 *
 */
export type Cookbook = $Result.DefaultSelection<Prisma.$CookbookPayload>;
/**
 * Model Cookbook_Likes
 *
 */
export type Cookbook_Likes = $Result.DefaultSelection<Prisma.$Cookbook_LikesPayload>;
/**
 * Model CommentCookbook
 *
 */
export type CommentCookbook = $Result.DefaultSelection<Prisma.$CommentCookbookPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
	ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
	U = 'log' extends keyof ClientOptions
		? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
			? Prisma.GetEvents<ClientOptions['log']>
			: never
		: never,
	ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
	[K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

	/**
	 * ##  Prisma Client ʲˢ
	 *
	 * Type-safe database client for TypeScript & Node.js
	 * @example
	 * ```
	 * const prisma = new PrismaClient()
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 *
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
	 */

	constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
	$on<V extends U>(
		eventType: V,
		callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
	): PrismaClient;

	/**
	 * Connect with the database
	 */
	$connect(): $Utils.JsPromise<void>;

	/**
	 * Disconnect from the database
	 */
	$disconnect(): $Utils.JsPromise<void>;

	/**
	 * Add a middleware
	 * @deprecated since 4.16.0. For new code, prefer client extensions instead.
	 * @see https://pris.ly/d/extensions
	 */
	$use(cb: Prisma.Middleware): void;

	/**
	 * Executes a prepared raw query and returns the number of affected rows.
	 * @example
	 * ```
	 * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$executeRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<number>;

	/**
	 * Executes a raw query and returns the number of affected rows.
	 * Susceptible to SQL injections, see documentation.
	 * @example
	 * ```
	 * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

	/**
	 * Performs a prepared raw query and returns the `SELECT` data.
	 * @example
	 * ```
	 * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$queryRaw<T = unknown>(
		query: TemplateStringsArray | Prisma.Sql,
		...values: any[]
	): Prisma.PrismaPromise<T>;

	/**
	 * Performs a raw query and returns the `SELECT` data.
	 * Susceptible to SQL injections, see documentation.
	 * @example
	 * ```
	 * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

	/**
	 * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
	 * @example
	 * ```
	 * const [george, bob, alice] = await prisma.$transaction([
	 *   prisma.user.create({ data: { name: 'George' } }),
	 *   prisma.user.create({ data: { name: 'Bob' } }),
	 *   prisma.user.create({ data: { name: 'Alice' } }),
	 * ])
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
	 */
	$transaction<P extends Prisma.PrismaPromise<any>[]>(
		arg: [...P],
		options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
	): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

	$transaction<R>(
		fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
		options?: {
			maxWait?: number;
			timeout?: number;
			isolationLevel?: Prisma.TransactionIsolationLevel;
		},
	): $Utils.JsPromise<R>;

	$extends: $Extensions.ExtendsHook<
		'extends',
		Prisma.TypeMapCb<ClientOptions>,
		ExtArgs,
		$Utils.Call<
			Prisma.TypeMapCb<ClientOptions>,
			{
				extArgs: ExtArgs;
			}
		>
	>;

	/**
	 * `prisma.user`: Exposes CRUD operations for the **User** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Users
	 * const users = await prisma.user.findMany()
	 * ```
	 */
	get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Recipes
	 * const recipes = await prisma.recipe.findMany()
	 * ```
	 */
	get recipe(): Prisma.RecipeDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.recipe_Likes`: Exposes CRUD operations for the **Recipe_Likes** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Recipe_Likes
	 * const recipe_Likes = await prisma.recipe_Likes.findMany()
	 * ```
	 */
	get recipe_Likes(): Prisma.Recipe_LikesDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.commentRecipe`: Exposes CRUD operations for the **CommentRecipe** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more CommentRecipes
	 * const commentRecipes = await prisma.commentRecipe.findMany()
	 * ```
	 */
	get commentRecipe(): Prisma.CommentRecipeDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.cookbook`: Exposes CRUD operations for the **Cookbook** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Cookbooks
	 * const cookbooks = await prisma.cookbook.findMany()
	 * ```
	 */
	get cookbook(): Prisma.CookbookDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.cookbook_Likes`: Exposes CRUD operations for the **Cookbook_Likes** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Cookbook_Likes
	 * const cookbook_Likes = await prisma.cookbook_Likes.findMany()
	 * ```
	 */
	get cookbook_Likes(): Prisma.Cookbook_LikesDelegate<ExtArgs, ClientOptions>;

	/**
	 * `prisma.commentCookbook`: Exposes CRUD operations for the **CommentCookbook** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more CommentCookbooks
	 * const commentCookbooks = await prisma.commentCookbook.findMany()
	 * ```
	 */
	get commentCookbook(): Prisma.CommentCookbookDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
	export import DMMF = runtime.DMMF;

	export type PrismaPromise<T> = $Public.PrismaPromise<T>;

	/**
	 * Validator
	 */
	export import validator = runtime.Public.validator;

	/**
	 * Prisma Errors
	 */
	export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
	export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
	export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
	export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
	export import PrismaClientValidationError = runtime.PrismaClientValidationError;

	/**
	 * Re-export of sql-template-tag
	 */
	export import sql = runtime.sqltag;
	export import empty = runtime.empty;
	export import join = runtime.join;
	export import raw = runtime.raw;
	export import Sql = runtime.Sql;

	/**
	 * Decimal.js
	 */
	export import Decimal = runtime.Decimal;

	export type DecimalJsLike = runtime.DecimalJsLike;

	/**
	 * Metrics
	 */
	export type Metrics = runtime.Metrics;
	export type Metric<T> = runtime.Metric<T>;
	export type MetricHistogram = runtime.MetricHistogram;
	export type MetricHistogramBucket = runtime.MetricHistogramBucket;

	/**
	 * Extensions
	 */
	export import Extension = $Extensions.UserArgs;
	export import getExtensionContext = runtime.Extensions.getExtensionContext;
	export import Args = $Public.Args;
	export import Payload = $Public.Payload;
	export import Result = $Public.Result;
	export import Exact = $Public.Exact;

	/**
	 * Prisma Client JS version: 6.7.0
	 * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
	 */
	export type PrismaVersion = {
		client: string;
	};

	export const prismaVersion: PrismaVersion;

	/**
	 * Utility Types
	 */

	export import JsonObject = runtime.JsonObject;
	export import JsonArray = runtime.JsonArray;
	export import JsonValue = runtime.JsonValue;
	export import InputJsonObject = runtime.InputJsonObject;
	export import InputJsonArray = runtime.InputJsonArray;
	export import InputJsonValue = runtime.InputJsonValue;

	/**
	 * Types of the values used to represent different kinds of `null` values when working with JSON fields.
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	namespace NullTypes {
		/**
		 * Type of `Prisma.DbNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class DbNull {
			private DbNull: never;
			private constructor();
		}

		/**
		 * Type of `Prisma.JsonNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class JsonNull {
			private JsonNull: never;
			private constructor();
		}

		/**
		 * Type of `Prisma.AnyNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class AnyNull {
			private AnyNull: never;
			private constructor();
		}
	}

	/**
	 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const DbNull: NullTypes.DbNull;

	/**
	 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const JsonNull: NullTypes.JsonNull;

	/**
	 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const AnyNull: NullTypes.AnyNull;

	type SelectAndInclude = {
		select: any;
		include: any;
	};

	type SelectAndOmit = {
		select: any;
		omit: any;
	};

	/**
	 * Get the type of the value, that the Promise holds.
	 */
	export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

	/**
	 * Get the return type of a function which returns a Promise.
	 */
	export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
		ReturnType<T>
	>;

	/**
	 * From T, pick a set of properties whose keys are in the union K
	 */
	type Prisma__Pick<T, K extends keyof T> = {
		[P in K]: T[P];
	};

	export type Enumerable<T> = T | Array<T>;

	export type RequiredKeys<T> = {
		[K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
	}[keyof T];

	export type TruthyKeys<T> = keyof {
		[K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
	};

	export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

	/**
	 * Subset
	 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
	 */
	export type Subset<T, U> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	};

	/**
	 * SelectSubset
	 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
	 * Additionally, it validates, if both select and include are present. If the case, it errors.
	 */
	export type SelectSubset<T, U> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	} & (T extends SelectAndInclude
		? 'Please either choose `select` or `include`.'
		: T extends SelectAndOmit
			? 'Please either choose `select` or `omit`.'
			: {});

	/**
	 * Subset + Intersection
	 * @desc From `T` pick properties that exist in `U` and intersect `K`
	 */
	export type SubsetIntersection<T, U, K> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	} & K;

	type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

	/**
	 * XOR is needed to have a real mutually exclusive union type
	 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
	 */
	type XOR<T, U> = T extends object
		? U extends object
			? (Without<T, U> & U) | (Without<U, T> & T)
			: U
		: T;

	/**
	 * Is T a Record?
	 */
	type IsObject<T extends any> =
		T extends Array<any>
			? False
			: T extends Date
				? False
				: T extends Uint8Array
					? False
					: T extends bigint
						? False
						: T extends object
							? True
							: False;

	/**
	 * If it's T[], return T
	 */
	export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

	/**
	 * From ts-toolbelt
	 */

	type __Either<O extends object, K extends Key> = Omit<O, K> &
		{
			// Merge all but K
			[P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
		}[K];

	type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

	type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

	type _Either<O extends object, K extends Key, strict extends Boolean> = {
		1: EitherStrict<O, K>;
		0: EitherLoose<O, K>;
	}[strict];

	type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
		? _Either<O, K, strict>
		: never;

	export type Union = any;

	type PatchUndefined<O extends object, O1 extends object> = {
		[K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
	} & {};

	/** Helper Types for "Merge" **/
	export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
		k: infer I,
	) => void
		? I
		: never;

	export type Overwrite<O extends object, O1 extends object> = {
		[K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
	} & {};

	type _Merge<U extends object> = IntersectOf<
		Overwrite<
			U,
			{
				[K in keyof U]-?: At<U, K>;
			}
		>
	>;

	type Key = string | number | symbol;
	type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
	type AtStrict<O extends object, K extends Key> = O[K & keyof O];
	type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
	export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
		1: AtStrict<O, K>;
		0: AtLoose<O, K>;
	}[strict];

	export type ComputeRaw<A extends any> = A extends Function
		? A
		: {
				[K in keyof A]: A[K];
			} & {};

	export type OptionalFlat<O> = {
		[K in keyof O]?: O[K];
	} & {};

	type _Record<K extends keyof any, T> = {
		[P in K]: T;
	};

	// cause typescript not to expand types and preserve names
	type NoExpand<T> = T extends unknown ? T : never;

	// this type assumes the passed object is entirely optional
	type AtLeast<O extends object, K extends string> = NoExpand<
		O extends unknown
			?
					| (K extends keyof O ? { [P in K]: O[P] } & O : O)
					| ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
			: never
	>;

	type _Strict<U, _U = U> = U extends unknown
		? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
		: never;

	export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
	/** End Helper Types for "Merge" **/

	export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

	/**
  A [[Boolean]]
  */
	export type Boolean = True | False;

	// /**
	// 1
	// */
	export type True = 1;

	/**
  0
  */
	export type False = 0;

	export type Not<B extends Boolean> = {
		0: 1;
		1: 0;
	}[B];

	export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
		? 0 // anything `never` is false
		: A1 extends A2
			? 1
			: 0;

	export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

	export type Or<B1 extends Boolean, B2 extends Boolean> = {
		0: {
			0: 0;
			1: 1;
		};
		1: {
			0: 1;
			1: 1;
		};
	}[B1][B2];

	export type Keys<U extends Union> = U extends unknown ? keyof U : never;

	type Cast<A, B> = A extends B ? A : B;

	export const type: unique symbol;

	/**
	 * Used by group by
	 */

	export type GetScalarType<T, O> = O extends object
		? {
				[P in keyof T]: P extends keyof O ? O[P] : never;
			}
		: never;

	type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
		IsObject<T> extends True ? U : T;

	type GetHavingFields<T> = {
		[K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
			? // infer is only needed to not hit TS limit
				// based on the brilliant idea of Pierre-Antoine Mills
				// https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
				T[K] extends infer TK
				? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
				: never
			: {} extends FieldPaths<T[K]>
				? never
				: K;
	}[keyof T];

	/**
	 * Convert tuple to union
	 */
	type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
	type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
	type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

	/**
	 * Like `Pick`, but additionally can also accept an array of keys
	 */
	type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
		T,
		MaybeTupleToUnion<K>
	>;

	/**
	 * Exclude all keys with underscores
	 */
	type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

	export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

	type FieldRefInputType<Model, FieldType> = Model extends never
		? never
		: FieldRef<Model, FieldType>;

	export const ModelName: {
		User: 'User';
		Recipe: 'Recipe';
		Recipe_Likes: 'Recipe_Likes';
		CommentRecipe: 'CommentRecipe';
		Cookbook: 'Cookbook';
		Cookbook_Likes: 'Cookbook_Likes';
		CommentCookbook: 'CommentCookbook';
	};

	export type ModelName = (typeof ModelName)[keyof typeof ModelName];

	export type Datasources = {
		db?: Datasource;
	};

	interface TypeMapCb<ClientOptions = {}>
		extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
		returns: Prisma.TypeMap<
			this['params']['extArgs'],
			ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
		>;
	}

	export type TypeMap<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> = {
		globalOmitOptions: {
			omit: GlobalOmitOptions;
		};
		meta: {
			modelProps:
				| 'user'
				| 'recipe'
				| 'recipe_Likes'
				| 'commentRecipe'
				| 'cookbook'
				| 'cookbook_Likes'
				| 'commentCookbook';
			txIsolationLevel: Prisma.TransactionIsolationLevel;
		};
		model: {
			User: {
				payload: Prisma.$UserPayload<ExtArgs>;
				fields: Prisma.UserFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.UserFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					findFirst: {
						args: Prisma.UserFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					findMany: {
						args: Prisma.UserFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					create: {
						args: Prisma.UserCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					createMany: {
						args: Prisma.UserCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					delete: {
						args: Prisma.UserDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					update: {
						args: Prisma.UserUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					deleteMany: {
						args: Prisma.UserDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.UserUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
					};
					upsert: {
						args: Prisma.UserUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$UserPayload>;
					};
					aggregate: {
						args: Prisma.UserAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateUser>;
					};
					groupBy: {
						args: Prisma.UserGroupByArgs<ExtArgs>;
						result: $Utils.Optional<UserGroupByOutputType>[];
					};
					count: {
						args: Prisma.UserCountArgs<ExtArgs>;
						result: $Utils.Optional<UserCountAggregateOutputType> | number;
					};
				};
			};
			Recipe: {
				payload: Prisma.$RecipePayload<ExtArgs>;
				fields: Prisma.RecipeFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.RecipeFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecipePayload>;
					};
					findFirst: {
						args: Prisma.RecipeFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecipePayload>;
					};
					findMany: {
						args: Prisma.RecipeFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecipePayload>[];
					};
					create: {
						args: Prisma.RecipeCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecipePayload>;
					};
					createMany: {
						args: Prisma.RecipeCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecipePayload>[];
					};
					delete: {
						args: Prisma.RecipeDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecipePayload>;
					};
					update: {
						args: Prisma.RecipeUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecipePayload>;
					};
					deleteMany: {
						args: Prisma.RecipeDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.RecipeUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.RecipeUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecipePayload>[];
					};
					upsert: {
						args: Prisma.RecipeUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$RecipePayload>;
					};
					aggregate: {
						args: Prisma.RecipeAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateRecipe>;
					};
					groupBy: {
						args: Prisma.RecipeGroupByArgs<ExtArgs>;
						result: $Utils.Optional<RecipeGroupByOutputType>[];
					};
					count: {
						args: Prisma.RecipeCountArgs<ExtArgs>;
						result: $Utils.Optional<RecipeCountAggregateOutputType> | number;
					};
				};
			};
			Recipe_Likes: {
				payload: Prisma.$Recipe_LikesPayload<ExtArgs>;
				fields: Prisma.Recipe_LikesFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.Recipe_LikesFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Recipe_LikesPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.Recipe_LikesFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Recipe_LikesPayload>;
					};
					findFirst: {
						args: Prisma.Recipe_LikesFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Recipe_LikesPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.Recipe_LikesFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Recipe_LikesPayload>;
					};
					findMany: {
						args: Prisma.Recipe_LikesFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Recipe_LikesPayload>[];
					};
					create: {
						args: Prisma.Recipe_LikesCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Recipe_LikesPayload>;
					};
					createMany: {
						args: Prisma.Recipe_LikesCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.Recipe_LikesCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Recipe_LikesPayload>[];
					};
					delete: {
						args: Prisma.Recipe_LikesDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Recipe_LikesPayload>;
					};
					update: {
						args: Prisma.Recipe_LikesUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Recipe_LikesPayload>;
					};
					deleteMany: {
						args: Prisma.Recipe_LikesDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.Recipe_LikesUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.Recipe_LikesUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Recipe_LikesPayload>[];
					};
					upsert: {
						args: Prisma.Recipe_LikesUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Recipe_LikesPayload>;
					};
					aggregate: {
						args: Prisma.Recipe_LikesAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateRecipe_Likes>;
					};
					groupBy: {
						args: Prisma.Recipe_LikesGroupByArgs<ExtArgs>;
						result: $Utils.Optional<Recipe_LikesGroupByOutputType>[];
					};
					count: {
						args: Prisma.Recipe_LikesCountArgs<ExtArgs>;
						result: $Utils.Optional<Recipe_LikesCountAggregateOutputType> | number;
					};
				};
			};
			CommentRecipe: {
				payload: Prisma.$CommentRecipePayload<ExtArgs>;
				fields: Prisma.CommentRecipeFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.CommentRecipeFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentRecipePayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.CommentRecipeFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentRecipePayload>;
					};
					findFirst: {
						args: Prisma.CommentRecipeFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentRecipePayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.CommentRecipeFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentRecipePayload>;
					};
					findMany: {
						args: Prisma.CommentRecipeFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentRecipePayload>[];
					};
					create: {
						args: Prisma.CommentRecipeCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentRecipePayload>;
					};
					createMany: {
						args: Prisma.CommentRecipeCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.CommentRecipeCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentRecipePayload>[];
					};
					delete: {
						args: Prisma.CommentRecipeDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentRecipePayload>;
					};
					update: {
						args: Prisma.CommentRecipeUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentRecipePayload>;
					};
					deleteMany: {
						args: Prisma.CommentRecipeDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.CommentRecipeUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.CommentRecipeUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentRecipePayload>[];
					};
					upsert: {
						args: Prisma.CommentRecipeUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentRecipePayload>;
					};
					aggregate: {
						args: Prisma.CommentRecipeAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateCommentRecipe>;
					};
					groupBy: {
						args: Prisma.CommentRecipeGroupByArgs<ExtArgs>;
						result: $Utils.Optional<CommentRecipeGroupByOutputType>[];
					};
					count: {
						args: Prisma.CommentRecipeCountArgs<ExtArgs>;
						result: $Utils.Optional<CommentRecipeCountAggregateOutputType> | number;
					};
				};
			};
			Cookbook: {
				payload: Prisma.$CookbookPayload<ExtArgs>;
				fields: Prisma.CookbookFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.CookbookFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CookbookPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.CookbookFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CookbookPayload>;
					};
					findFirst: {
						args: Prisma.CookbookFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CookbookPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.CookbookFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CookbookPayload>;
					};
					findMany: {
						args: Prisma.CookbookFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CookbookPayload>[];
					};
					create: {
						args: Prisma.CookbookCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CookbookPayload>;
					};
					createMany: {
						args: Prisma.CookbookCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.CookbookCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CookbookPayload>[];
					};
					delete: {
						args: Prisma.CookbookDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CookbookPayload>;
					};
					update: {
						args: Prisma.CookbookUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CookbookPayload>;
					};
					deleteMany: {
						args: Prisma.CookbookDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.CookbookUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.CookbookUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CookbookPayload>[];
					};
					upsert: {
						args: Prisma.CookbookUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CookbookPayload>;
					};
					aggregate: {
						args: Prisma.CookbookAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateCookbook>;
					};
					groupBy: {
						args: Prisma.CookbookGroupByArgs<ExtArgs>;
						result: $Utils.Optional<CookbookGroupByOutputType>[];
					};
					count: {
						args: Prisma.CookbookCountArgs<ExtArgs>;
						result: $Utils.Optional<CookbookCountAggregateOutputType> | number;
					};
				};
			};
			Cookbook_Likes: {
				payload: Prisma.$Cookbook_LikesPayload<ExtArgs>;
				fields: Prisma.Cookbook_LikesFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.Cookbook_LikesFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Cookbook_LikesPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.Cookbook_LikesFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Cookbook_LikesPayload>;
					};
					findFirst: {
						args: Prisma.Cookbook_LikesFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Cookbook_LikesPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.Cookbook_LikesFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Cookbook_LikesPayload>;
					};
					findMany: {
						args: Prisma.Cookbook_LikesFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Cookbook_LikesPayload>[];
					};
					create: {
						args: Prisma.Cookbook_LikesCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Cookbook_LikesPayload>;
					};
					createMany: {
						args: Prisma.Cookbook_LikesCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.Cookbook_LikesCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Cookbook_LikesPayload>[];
					};
					delete: {
						args: Prisma.Cookbook_LikesDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Cookbook_LikesPayload>;
					};
					update: {
						args: Prisma.Cookbook_LikesUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Cookbook_LikesPayload>;
					};
					deleteMany: {
						args: Prisma.Cookbook_LikesDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.Cookbook_LikesUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.Cookbook_LikesUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Cookbook_LikesPayload>[];
					};
					upsert: {
						args: Prisma.Cookbook_LikesUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$Cookbook_LikesPayload>;
					};
					aggregate: {
						args: Prisma.Cookbook_LikesAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateCookbook_Likes>;
					};
					groupBy: {
						args: Prisma.Cookbook_LikesGroupByArgs<ExtArgs>;
						result: $Utils.Optional<Cookbook_LikesGroupByOutputType>[];
					};
					count: {
						args: Prisma.Cookbook_LikesCountArgs<ExtArgs>;
						result: $Utils.Optional<Cookbook_LikesCountAggregateOutputType> | number;
					};
				};
			};
			CommentCookbook: {
				payload: Prisma.$CommentCookbookPayload<ExtArgs>;
				fields: Prisma.CommentCookbookFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.CommentCookbookFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentCookbookPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.CommentCookbookFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentCookbookPayload>;
					};
					findFirst: {
						args: Prisma.CommentCookbookFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentCookbookPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.CommentCookbookFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentCookbookPayload>;
					};
					findMany: {
						args: Prisma.CommentCookbookFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentCookbookPayload>[];
					};
					create: {
						args: Prisma.CommentCookbookCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentCookbookPayload>;
					};
					createMany: {
						args: Prisma.CommentCookbookCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					createManyAndReturn: {
						args: Prisma.CommentCookbookCreateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentCookbookPayload>[];
					};
					delete: {
						args: Prisma.CommentCookbookDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentCookbookPayload>;
					};
					update: {
						args: Prisma.CommentCookbookUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentCookbookPayload>;
					};
					deleteMany: {
						args: Prisma.CommentCookbookDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.CommentCookbookUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateManyAndReturn: {
						args: Prisma.CommentCookbookUpdateManyAndReturnArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentCookbookPayload>[];
					};
					upsert: {
						args: Prisma.CommentCookbookUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$CommentCookbookPayload>;
					};
					aggregate: {
						args: Prisma.CommentCookbookAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateCommentCookbook>;
					};
					groupBy: {
						args: Prisma.CommentCookbookGroupByArgs<ExtArgs>;
						result: $Utils.Optional<CommentCookbookGroupByOutputType>[];
					};
					count: {
						args: Prisma.CommentCookbookCountArgs<ExtArgs>;
						result: $Utils.Optional<CommentCookbookCountAggregateOutputType> | number;
					};
				};
			};
		};
	} & {
		other: {
			payload: any;
			operations: {
				$executeRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
					result: any;
				};
				$executeRawUnsafe: {
					args: [query: string, ...values: any[]];
					result: any;
				};
				$queryRaw: {
					args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
					result: any;
				};
				$queryRawUnsafe: {
					args: [query: string, ...values: any[]];
					result: any;
				};
			};
		};
	};
	export const defineExtension: $Extensions.ExtendsHook<
		'define',
		Prisma.TypeMapCb,
		$Extensions.DefaultArgs
	>;
	export type DefaultPrismaClient = PrismaClient;
	export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
	export interface PrismaClientOptions {
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasources?: Datasources;
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasourceUrl?: string;
		/**
		 * @default "colorless"
		 */
		errorFormat?: ErrorFormat;
		/**
		 * @example
		 * ```
		 * // Defaults to stdout
		 * log: ['query', 'info', 'warn', 'error']
		 *
		 * // Emit as events
		 * log: [
		 *   { emit: 'stdout', level: 'query' },
		 *   { emit: 'stdout', level: 'info' },
		 *   { emit: 'stdout', level: 'warn' }
		 *   { emit: 'stdout', level: 'error' }
		 * ]
		 * ```
		 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
		 */
		log?: (LogLevel | LogDefinition)[];
		/**
		 * The default values for transactionOptions
		 * maxWait ?= 2000
		 * timeout ?= 5000
		 */
		transactionOptions?: {
			maxWait?: number;
			timeout?: number;
			isolationLevel?: Prisma.TransactionIsolationLevel;
		};
		/**
		 * Global configuration for omitting model fields by default.
		 *
		 * @example
		 * ```
		 * const prisma = new PrismaClient({
		 *   omit: {
		 *     user: {
		 *       password: true
		 *     }
		 *   }
		 * })
		 * ```
		 */
		omit?: Prisma.GlobalOmitConfig;
	}
	export type GlobalOmitConfig = {
		user?: UserOmit;
		recipe?: RecipeOmit;
		recipe_Likes?: Recipe_LikesOmit;
		commentRecipe?: CommentRecipeOmit;
		cookbook?: CookbookOmit;
		cookbook_Likes?: Cookbook_LikesOmit;
		commentCookbook?: CommentCookbookOmit;
	};

	/* Types for Logging */
	export type LogLevel = 'info' | 'query' | 'warn' | 'error';
	export type LogDefinition = {
		level: LogLevel;
		emit: 'stdout' | 'event';
	};

	export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
		? T['emit'] extends 'event'
			? T['level']
			: never
		: never;
	export type GetEvents<T extends any> =
		T extends Array<LogLevel | LogDefinition>
			? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
			: never;

	export type QueryEvent = {
		timestamp: Date;
		query: string;
		params: string;
		duration: number;
		target: string;
	};

	export type LogEvent = {
		timestamp: Date;
		message: string;
		target: string;
	};
	/* End Types for Logging */

	export type PrismaAction =
		| 'findUnique'
		| 'findUniqueOrThrow'
		| 'findMany'
		| 'findFirst'
		| 'findFirstOrThrow'
		| 'create'
		| 'createMany'
		| 'createManyAndReturn'
		| 'update'
		| 'updateMany'
		| 'updateManyAndReturn'
		| 'upsert'
		| 'delete'
		| 'deleteMany'
		| 'executeRaw'
		| 'queryRaw'
		| 'aggregate'
		| 'count'
		| 'runCommandRaw'
		| 'findRaw'
		| 'groupBy';

	/**
	 * These options are being passed into the middleware as "params"
	 */
	export type MiddlewareParams = {
		model?: ModelName;
		action: PrismaAction;
		args: any;
		dataPath: string[];
		runInTransaction: boolean;
	};

	/**
	 * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
	 */
	export type Middleware<T = any> = (
		params: MiddlewareParams,
		next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
	) => $Utils.JsPromise<T>;

	// tested in getLogLevel.test.ts
	export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

	/**
	 * `PrismaClient` proxy available in interactive transactions.
	 */
	export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

	export type Datasource = {
		url?: string;
	};

	/**
	 * Count Types
	 */

	/**
	 * Count Type UserCountOutputType
	 */

	export type UserCountOutputType = {
		recipe: number;
		cookbook: number;
		likes: number;
		Cookbook_Likes: number;
	};

	export type UserCountOutputTypeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		recipe?: boolean | UserCountOutputTypeCountRecipeArgs;
		cookbook?: boolean | UserCountOutputTypeCountCookbookArgs;
		likes?: boolean | UserCountOutputTypeCountLikesArgs;
		Cookbook_Likes?: boolean | UserCountOutputTypeCountCookbook_LikesArgs;
	};

	// Custom InputTypes
	/**
	 * UserCountOutputType without action
	 */
	export type UserCountOutputTypeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the UserCountOutputType
		 */
		select?: UserCountOutputTypeSelect<ExtArgs> | null;
	};

	/**
	 * UserCountOutputType without action
	 */
	export type UserCountOutputTypeCountRecipeArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: RecipeWhereInput;
	};

	/**
	 * UserCountOutputType without action
	 */
	export type UserCountOutputTypeCountCookbookArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: CookbookWhereInput;
	};

	/**
	 * UserCountOutputType without action
	 */
	export type UserCountOutputTypeCountLikesArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: Recipe_LikesWhereInput;
	};

	/**
	 * UserCountOutputType without action
	 */
	export type UserCountOutputTypeCountCookbook_LikesArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: Cookbook_LikesWhereInput;
	};

	/**
	 * Count Type RecipeCountOutputType
	 */

	export type RecipeCountOutputType = {
		comment: number;
		cookbook: number;
		likes: number;
	};

	export type RecipeCountOutputTypeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		comment?: boolean | RecipeCountOutputTypeCountCommentArgs;
		cookbook?: boolean | RecipeCountOutputTypeCountCookbookArgs;
		likes?: boolean | RecipeCountOutputTypeCountLikesArgs;
	};

	// Custom InputTypes
	/**
	 * RecipeCountOutputType without action
	 */
	export type RecipeCountOutputTypeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the RecipeCountOutputType
		 */
		select?: RecipeCountOutputTypeSelect<ExtArgs> | null;
	};

	/**
	 * RecipeCountOutputType without action
	 */
	export type RecipeCountOutputTypeCountCommentArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: CommentRecipeWhereInput;
	};

	/**
	 * RecipeCountOutputType without action
	 */
	export type RecipeCountOutputTypeCountCookbookArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: CookbookWhereInput;
	};

	/**
	 * RecipeCountOutputType without action
	 */
	export type RecipeCountOutputTypeCountLikesArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: Recipe_LikesWhereInput;
	};

	/**
	 * Count Type CookbookCountOutputType
	 */

	export type CookbookCountOutputType = {
		commentCookbook: number;
		Cookbook_Likes: number;
	};

	export type CookbookCountOutputTypeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		commentCookbook?: boolean | CookbookCountOutputTypeCountCommentCookbookArgs;
		Cookbook_Likes?: boolean | CookbookCountOutputTypeCountCookbook_LikesArgs;
	};

	// Custom InputTypes
	/**
	 * CookbookCountOutputType without action
	 */
	export type CookbookCountOutputTypeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CookbookCountOutputType
		 */
		select?: CookbookCountOutputTypeSelect<ExtArgs> | null;
	};

	/**
	 * CookbookCountOutputType without action
	 */
	export type CookbookCountOutputTypeCountCommentCookbookArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: CommentCookbookWhereInput;
	};

	/**
	 * CookbookCountOutputType without action
	 */
	export type CookbookCountOutputTypeCountCookbook_LikesArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: Cookbook_LikesWhereInput;
	};

	/**
	 * Models
	 */

	/**
	 * Model User
	 */

	export type AggregateUser = {
		_count: UserCountAggregateOutputType | null;
		_min: UserMinAggregateOutputType | null;
		_max: UserMaxAggregateOutputType | null;
	};

	export type UserMinAggregateOutputType = {
		id: string | null;
		email: string | null;
		name: string | null;
		password: string | null;
		image: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type UserMaxAggregateOutputType = {
		id: string | null;
		email: string | null;
		name: string | null;
		password: string | null;
		image: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type UserCountAggregateOutputType = {
		id: number;
		email: number;
		name: number;
		password: number;
		image: number;
		createdAt: number;
		updatedAt: number;
		_all: number;
	};

	export type UserMinAggregateInputType = {
		id?: true;
		email?: true;
		name?: true;
		password?: true;
		image?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type UserMaxAggregateInputType = {
		id?: true;
		email?: true;
		name?: true;
		password?: true;
		image?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type UserCountAggregateInputType = {
		id?: true;
		email?: true;
		name?: true;
		password?: true;
		image?: true;
		createdAt?: true;
		updatedAt?: true;
		_all?: true;
	};

	export type UserAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which User to aggregate.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Users
		 **/
		_count?: true | UserCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: UserMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: UserMaxAggregateInputType;
	};

	export type GetUserAggregateType<T extends UserAggregateArgs> = {
		[P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateUser[P]>
			: GetScalarType<T[P], AggregateUser[P]>;
	};

	export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		{
			where?: UserWhereInput;
			orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[];
			by: UserScalarFieldEnum[] | UserScalarFieldEnum;
			having?: UserScalarWhereWithAggregatesInput;
			take?: number;
			skip?: number;
			_count?: UserCountAggregateInputType | true;
			_min?: UserMinAggregateInputType;
			_max?: UserMaxAggregateInputType;
		};

	export type UserGroupByOutputType = {
		id: string;
		email: string;
		name: string | null;
		password: string;
		image: string | null;
		createdAt: Date;
		updatedAt: Date;
		_count: UserCountAggregateOutputType | null;
		_min: UserMinAggregateOutputType | null;
		_max: UserMaxAggregateOutputType | null;
	};

	type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<UserGroupByOutputType, T['by']> & {
				[P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], UserGroupByOutputType[P]>
					: GetScalarType<T[P], UserGroupByOutputType[P]>;
			}
		>
	>;

	export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		$Extensions.GetSelect<
			{
				id?: boolean;
				email?: boolean;
				name?: boolean;
				password?: boolean;
				image?: boolean;
				createdAt?: boolean;
				updatedAt?: boolean;
				recipe?: boolean | User$recipeArgs<ExtArgs>;
				cookbook?: boolean | User$cookbookArgs<ExtArgs>;
				likes?: boolean | User$likesArgs<ExtArgs>;
				Cookbook_Likes?: boolean | User$Cookbook_LikesArgs<ExtArgs>;
				_count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
			},
			ExtArgs['result']['user']
		>;

	export type UserSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			email?: boolean;
			name?: boolean;
			password?: boolean;
			image?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
		},
		ExtArgs['result']['user']
	>;

	export type UserSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			email?: boolean;
			name?: boolean;
			password?: boolean;
			image?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
		},
		ExtArgs['result']['user']
	>;

	export type UserSelectScalar = {
		id?: boolean;
		email?: boolean;
		name?: boolean;
		password?: boolean;
		image?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
	};

	export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		$Extensions.GetOmit<
			'id' | 'email' | 'name' | 'password' | 'image' | 'createdAt' | 'updatedAt',
			ExtArgs['result']['user']
		>;
	export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		recipe?: boolean | User$recipeArgs<ExtArgs>;
		cookbook?: boolean | User$cookbookArgs<ExtArgs>;
		likes?: boolean | User$likesArgs<ExtArgs>;
		Cookbook_Likes?: boolean | User$Cookbook_LikesArgs<ExtArgs>;
		_count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
	};
	export type UserIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {};
	export type UserIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {};

	export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		name: 'User';
		objects: {
			recipe: Prisma.$RecipePayload<ExtArgs>[];
			cookbook: Prisma.$CookbookPayload<ExtArgs>[];
			likes: Prisma.$Recipe_LikesPayload<ExtArgs>[];
			Cookbook_Likes: Prisma.$Cookbook_LikesPayload<ExtArgs>[];
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				email: string;
				name: string | null;
				password: string;
				image: string | null;
				createdAt: Date;
				updatedAt: Date;
			},
			ExtArgs['result']['user']
		>;
		composites: {};
	};

	type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<
		Prisma.$UserPayload,
		S
	>;

	type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
		UserFindManyArgs,
		'select' | 'include' | 'distinct' | 'omit'
	> & {
		select?: UserCountAggregateInputType | true;
	};

	export interface UserDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User']; meta: { name: 'User' } };
		/**
		 * Find zero or one User that matches the filter.
		 * @param {UserFindUniqueArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends UserFindUniqueArgs>(
			args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one User that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
			args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first User that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindFirstArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends UserFindFirstArgs>(
			args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first User that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
		 * @example
		 * // Get one User
		 * const user = await prisma.user.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
			args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Users that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Users
		 * const users = await prisma.user.findMany()
		 *
		 * // Get first 10 Users
		 * const users = await prisma.user.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends UserFindManyArgs>(
			args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
		>;

		/**
		 * Create a User.
		 * @param {UserCreateArgs} args - Arguments to create a User.
		 * @example
		 * // Create one User
		 * const User = await prisma.user.create({
		 *   data: {
		 *     // ... data to create a User
		 *   }
		 * })
		 *
		 */
		create<T extends UserCreateArgs>(
			args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Users.
		 * @param {UserCreateManyArgs} args - Arguments to create many Users.
		 * @example
		 * // Create many Users
		 * const user = await prisma.user.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends UserCreateManyArgs>(
			args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Users and returns the data saved in the database.
		 * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
		 * @example
		 * // Create many Users
		 * const user = await prisma.user.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Users and only return the `id`
		 * const userWithIdOnly = await prisma.user.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
			args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
		>;

		/**
		 * Delete a User.
		 * @param {UserDeleteArgs} args - Arguments to delete one User.
		 * @example
		 * // Delete one User
		 * const User = await prisma.user.delete({
		 *   where: {
		 *     // ... filter to delete one User
		 *   }
		 * })
		 *
		 */
		delete<T extends UserDeleteArgs>(
			args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one User.
		 * @param {UserUpdateArgs} args - Arguments to update one User.
		 * @example
		 * // Update one User
		 * const user = await prisma.user.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends UserUpdateArgs>(
			args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Users.
		 * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
		 * @example
		 * // Delete a few Users
		 * const { count } = await prisma.user.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends UserDeleteManyArgs>(
			args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Users.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Users
		 * const user = await prisma.user.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends UserUpdateManyArgs>(
			args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Users and returns the data updated in the database.
		 * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
		 * @example
		 * // Update many Users
		 * const user = await prisma.user.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Users and only return the `id`
		 * const userWithIdOnly = await prisma.user.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
			args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
		>;

		/**
		 * Create or update one User.
		 * @param {UserUpsertArgs} args - Arguments to update or create a User.
		 * @example
		 * // Update or create a User
		 * const user = await prisma.user.upsert({
		 *   create: {
		 *     // ... data to create a User
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the User we want to update
		 *   }
		 * })
		 */
		upsert<T extends UserUpsertArgs>(
			args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Users.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserCountArgs} args - Arguments to filter Users to count.
		 * @example
		 * // Count the number of Users
		 * const count = await prisma.user.count({
		 *   where: {
		 *     // ... the filter for the Users we want to count
		 *   }
		 * })
		 **/
		count<T extends UserCountArgs>(
			args?: Subset<T, UserCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], UserCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a User.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends UserAggregateArgs>(
			args: Subset<T, UserAggregateArgs>,
		): Prisma.PrismaPromise<GetUserAggregateType<T>>;

		/**
		 * Group by User.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {UserGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends UserGroupByArgs,
			HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: UserGroupByArgs['orderBy'] }
				: { orderBy?: UserGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
			ByFields extends MaybeTupleToUnion<T['by']>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T['having']>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T['by'] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the User model
		 */
		readonly fields: UserFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for User.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__UserClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise';
		recipe<T extends User$recipeArgs<ExtArgs> = {}>(
			args?: Subset<T, User$recipeArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
		>;
		cookbook<T extends User$cookbookArgs<ExtArgs> = {}>(
			args?: Subset<T, User$cookbookArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$CookbookPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
		>;
		likes<T extends User$likesArgs<ExtArgs> = {}>(
			args?: Subset<T, User$likesArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			| $Result.GetResult<Prisma.$Recipe_LikesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
			| Null
		>;
		Cookbook_Likes<T extends User$Cookbook_LikesArgs<ExtArgs> = {}>(
			args?: Subset<T, User$Cookbook_LikesArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			| $Result.GetResult<Prisma.$Cookbook_LikesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
			| Null
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
			onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the User model
	 */
	interface UserFieldRefs {
		readonly id: FieldRef<'User', 'String'>;
		readonly email: FieldRef<'User', 'String'>;
		readonly name: FieldRef<'User', 'String'>;
		readonly password: FieldRef<'User', 'String'>;
		readonly image: FieldRef<'User', 'String'>;
		readonly createdAt: FieldRef<'User', 'DateTime'>;
		readonly updatedAt: FieldRef<'User', 'DateTime'>;
	}

	// Custom InputTypes
	/**
	 * User findUnique
	 */
	export type UserFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User findUniqueOrThrow
	 */
	export type UserFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User findFirst
	 */
	export type UserFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User findFirstOrThrow
	 */
	export type UserFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter, which User to fetch.
		 */
		where?: UserWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Users to fetch.
		 */
		orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Users.
		 */
		cursor?: UserWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Users from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Users.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Users.
		 */
		distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
	};

	/**
	 * User findMany
	 */
	export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		{
			/**
			 * Select specific fields to fetch from the User
			 */
			select?: UserSelect<ExtArgs> | null;
			/**
			 * Omit specific fields from the User
			 */
			omit?: UserOmit<ExtArgs> | null;
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: UserInclude<ExtArgs> | null;
			/**
			 * Filter, which Users to fetch.
			 */
			where?: UserWhereInput;
			/**
			 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
			 *
			 * Determine the order of Users to fetch.
			 */
			orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
			/**
			 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
			 *
			 * Sets the position for listing Users.
			 */
			cursor?: UserWhereUniqueInput;
			/**
			 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
			 *
			 * Take `±n` Users from the position of the cursor.
			 */
			take?: number;
			/**
			 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
			 *
			 * Skip the first `n` Users.
			 */
			skip?: number;
			distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
		};

	/**
	 * User create
	 */
	export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * The data needed to create a User.
		 */
		data: XOR<UserCreateInput, UserUncheckedCreateInput>;
	};

	/**
	 * User createMany
	 */
	export type UserCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * User createManyAndReturn
	 */
	export type UserCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The data used to create many Users.
		 */
		data: UserCreateManyInput | UserCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * User update
	 */
	export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * The data needed to update a User.
		 */
		data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
		/**
		 * Choose, which User to update.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User updateMany
	 */
	export type UserUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to update.
		 */
		limit?: number;
	};

	/**
	 * User updateManyAndReturn
	 */
	export type UserUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * The data used to update Users.
		 */
		data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
		/**
		 * Filter which Users to update
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to update.
		 */
		limit?: number;
	};

	/**
	 * User upsert
	 */
	export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * The filter to search for the User to update in case it exists.
		 */
		where: UserWhereUniqueInput;
		/**
		 * In case the User found by the `where` argument doesn't exist, create a new User with this data.
		 */
		create: XOR<UserCreateInput, UserUncheckedCreateInput>;
		/**
		 * In case the User was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
	};

	/**
	 * User delete
	 */
	export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		/**
		 * Filter which User to delete.
		 */
		where: UserWhereUniqueInput;
	};

	/**
	 * User deleteMany
	 */
	export type UserDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Users to delete
		 */
		where?: UserWhereInput;
		/**
		 * Limit how many Users to delete.
		 */
		limit?: number;
	};

	/**
	 * User.recipe
	 */
	export type User$recipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		{
			/**
			 * Select specific fields to fetch from the Recipe
			 */
			select?: RecipeSelect<ExtArgs> | null;
			/**
			 * Omit specific fields from the Recipe
			 */
			omit?: RecipeOmit<ExtArgs> | null;
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: RecipeInclude<ExtArgs> | null;
			where?: RecipeWhereInput;
			orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[];
			cursor?: RecipeWhereUniqueInput;
			take?: number;
			skip?: number;
			distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[];
		};

	/**
	 * User.cookbook
	 */
	export type User$cookbookArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook
		 */
		select?: CookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook
		 */
		omit?: CookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CookbookInclude<ExtArgs> | null;
		where?: CookbookWhereInput;
		orderBy?: CookbookOrderByWithRelationInput | CookbookOrderByWithRelationInput[];
		cursor?: CookbookWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: CookbookScalarFieldEnum | CookbookScalarFieldEnum[];
	};

	/**
	 * User.likes
	 */
	export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		/**
		 * Select specific fields to fetch from the Recipe_Likes
		 */
		select?: Recipe_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe_Likes
		 */
		omit?: Recipe_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Recipe_LikesInclude<ExtArgs> | null;
		where?: Recipe_LikesWhereInput;
		orderBy?: Recipe_LikesOrderByWithRelationInput | Recipe_LikesOrderByWithRelationInput[];
		cursor?: Recipe_LikesWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: Recipe_LikesScalarFieldEnum | Recipe_LikesScalarFieldEnum[];
	};

	/**
	 * User.Cookbook_Likes
	 */
	export type User$Cookbook_LikesArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook_Likes
		 */
		select?: Cookbook_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook_Likes
		 */
		omit?: Cookbook_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Cookbook_LikesInclude<ExtArgs> | null;
		where?: Cookbook_LikesWhereInput;
		orderBy?: Cookbook_LikesOrderByWithRelationInput | Cookbook_LikesOrderByWithRelationInput[];
		cursor?: Cookbook_LikesWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: Cookbook_LikesScalarFieldEnum | Cookbook_LikesScalarFieldEnum[];
	};

	/**
	 * User without action
	 */
	export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		{
			/**
			 * Select specific fields to fetch from the User
			 */
			select?: UserSelect<ExtArgs> | null;
			/**
			 * Omit specific fields from the User
			 */
			omit?: UserOmit<ExtArgs> | null;
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: UserInclude<ExtArgs> | null;
		};

	/**
	 * Model Recipe
	 */

	export type AggregateRecipe = {
		_count: RecipeCountAggregateOutputType | null;
		_avg: RecipeAvgAggregateOutputType | null;
		_sum: RecipeSumAggregateOutputType | null;
		_min: RecipeMinAggregateOutputType | null;
		_max: RecipeMaxAggregateOutputType | null;
	};

	export type RecipeAvgAggregateOutputType = {
		views: number | null;
	};

	export type RecipeSumAggregateOutputType = {
		views: number | null;
	};

	export type RecipeMinAggregateOutputType = {
		id: string | null;
		title: string | null;
		description: string | null;
		views: number | null;
		estimated_time: Date | null;
		image: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		user_id: string | null;
	};

	export type RecipeMaxAggregateOutputType = {
		id: string | null;
		title: string | null;
		description: string | null;
		views: number | null;
		estimated_time: Date | null;
		image: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		user_id: string | null;
	};

	export type RecipeCountAggregateOutputType = {
		id: number;
		title: number;
		description: number;
		ingredients: number;
		direction: number;
		views: number;
		estimated_time: number;
		image: number;
		createdAt: number;
		updatedAt: number;
		user_id: number;
		_all: number;
	};

	export type RecipeAvgAggregateInputType = {
		views?: true;
	};

	export type RecipeSumAggregateInputType = {
		views?: true;
	};

	export type RecipeMinAggregateInputType = {
		id?: true;
		title?: true;
		description?: true;
		views?: true;
		estimated_time?: true;
		image?: true;
		createdAt?: true;
		updatedAt?: true;
		user_id?: true;
	};

	export type RecipeMaxAggregateInputType = {
		id?: true;
		title?: true;
		description?: true;
		views?: true;
		estimated_time?: true;
		image?: true;
		createdAt?: true;
		updatedAt?: true;
		user_id?: true;
	};

	export type RecipeCountAggregateInputType = {
		id?: true;
		title?: true;
		description?: true;
		ingredients?: true;
		direction?: true;
		views?: true;
		estimated_time?: true;
		image?: true;
		createdAt?: true;
		updatedAt?: true;
		user_id?: true;
		_all?: true;
	};

	export type RecipeAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Recipe to aggregate.
		 */
		where?: RecipeWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Recipes to fetch.
		 */
		orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: RecipeWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Recipes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Recipes.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Recipes
		 **/
		_count?: true | RecipeCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: RecipeAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: RecipeSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: RecipeMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: RecipeMaxAggregateInputType;
	};

	export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
		[P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateRecipe[P]>
			: GetScalarType<T[P], AggregateRecipe[P]>;
	};

	export type RecipeGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: RecipeWhereInput;
		orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[];
		by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum;
		having?: RecipeScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: RecipeCountAggregateInputType | true;
		_avg?: RecipeAvgAggregateInputType;
		_sum?: RecipeSumAggregateInputType;
		_min?: RecipeMinAggregateInputType;
		_max?: RecipeMaxAggregateInputType;
	};

	export type RecipeGroupByOutputType = {
		id: string;
		title: string;
		description: string | null;
		ingredients: string[];
		direction: string[];
		views: number;
		estimated_time: Date;
		image: string;
		createdAt: Date;
		updatedAt: Date;
		user_id: string | null;
		_count: RecipeCountAggregateOutputType | null;
		_avg: RecipeAvgAggregateOutputType | null;
		_sum: RecipeSumAggregateOutputType | null;
		_min: RecipeMinAggregateOutputType | null;
		_max: RecipeMaxAggregateOutputType | null;
	};

	type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<RecipeGroupByOutputType, T['by']> & {
				[P in keyof T & keyof RecipeGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], RecipeGroupByOutputType[P]>
					: GetScalarType<T[P], RecipeGroupByOutputType[P]>;
			}
		>
	>;

	export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		$Extensions.GetSelect<
			{
				id?: boolean;
				title?: boolean;
				description?: boolean;
				ingredients?: boolean;
				direction?: boolean;
				views?: boolean;
				estimated_time?: boolean;
				image?: boolean;
				createdAt?: boolean;
				updatedAt?: boolean;
				user_id?: boolean;
				user?: boolean | Recipe$userArgs<ExtArgs>;
				comment?: boolean | Recipe$commentArgs<ExtArgs>;
				cookbook?: boolean | Recipe$cookbookArgs<ExtArgs>;
				likes?: boolean | Recipe$likesArgs<ExtArgs>;
				_count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>;
			},
			ExtArgs['result']['recipe']
		>;

	export type RecipeSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			title?: boolean;
			description?: boolean;
			ingredients?: boolean;
			direction?: boolean;
			views?: boolean;
			estimated_time?: boolean;
			image?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			user_id?: boolean;
			user?: boolean | Recipe$userArgs<ExtArgs>;
		},
		ExtArgs['result']['recipe']
	>;

	export type RecipeSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			title?: boolean;
			description?: boolean;
			ingredients?: boolean;
			direction?: boolean;
			views?: boolean;
			estimated_time?: boolean;
			image?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			user_id?: boolean;
			user?: boolean | Recipe$userArgs<ExtArgs>;
		},
		ExtArgs['result']['recipe']
	>;

	export type RecipeSelectScalar = {
		id?: boolean;
		title?: boolean;
		description?: boolean;
		ingredients?: boolean;
		direction?: boolean;
		views?: boolean;
		estimated_time?: boolean;
		image?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		user_id?: boolean;
	};

	export type RecipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		$Extensions.GetOmit<
			| 'id'
			| 'title'
			| 'description'
			| 'ingredients'
			| 'direction'
			| 'views'
			| 'estimated_time'
			| 'image'
			| 'createdAt'
			| 'updatedAt'
			| 'user_id',
			ExtArgs['result']['recipe']
		>;
	export type RecipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		user?: boolean | Recipe$userArgs<ExtArgs>;
		comment?: boolean | Recipe$commentArgs<ExtArgs>;
		cookbook?: boolean | Recipe$cookbookArgs<ExtArgs>;
		likes?: boolean | Recipe$likesArgs<ExtArgs>;
		_count?: boolean | RecipeCountOutputTypeDefaultArgs<ExtArgs>;
	};
	export type RecipeIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | Recipe$userArgs<ExtArgs>;
	};
	export type RecipeIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | Recipe$userArgs<ExtArgs>;
	};

	export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
		name: 'Recipe';
		objects: {
			user: Prisma.$UserPayload<ExtArgs> | null;
			comment: Prisma.$CommentRecipePayload<ExtArgs>[];
			cookbook: Prisma.$CookbookPayload<ExtArgs>[];
			likes: Prisma.$Recipe_LikesPayload<ExtArgs>[];
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				title: string;
				description: string | null;
				ingredients: string[];
				direction: string[];
				views: number;
				estimated_time: Date;
				image: string;
				createdAt: Date;
				updatedAt: Date;
				user_id: string | null;
			},
			ExtArgs['result']['recipe']
		>;
		composites: {};
	};

	type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> =
		$Result.GetResult<Prisma.$RecipePayload, S>;

	type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
		RecipeFindManyArgs,
		'select' | 'include' | 'distinct' | 'omit'
	> & {
		select?: RecipeCountAggregateInputType | true;
	};

	export interface RecipeDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe']; meta: { name: 'Recipe' } };
		/**
		 * Find zero or one Recipe that matches the filter.
		 * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
		 * @example
		 * // Get one Recipe
		 * const recipe = await prisma.recipe.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends RecipeFindUniqueArgs>(
			args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>,
		): Prisma__RecipeClient<
			$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
		 * @example
		 * // Get one Recipe
		 * const recipe = await prisma.recipe.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(
			args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__RecipeClient<
			$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Recipe that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
		 * @example
		 * // Get one Recipe
		 * const recipe = await prisma.recipe.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends RecipeFindFirstArgs>(
			args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>,
		): Prisma__RecipeClient<
			$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Recipe that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
		 * @example
		 * // Get one Recipe
		 * const recipe = await prisma.recipe.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(
			args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__RecipeClient<
			$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Recipes that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Recipes
		 * const recipes = await prisma.recipe.findMany()
		 *
		 * // Get first 10 Recipes
		 * const recipes = await prisma.recipe.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends RecipeFindManyArgs>(
			args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
		>;

		/**
		 * Create a Recipe.
		 * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
		 * @example
		 * // Create one Recipe
		 * const Recipe = await prisma.recipe.create({
		 *   data: {
		 *     // ... data to create a Recipe
		 *   }
		 * })
		 *
		 */
		create<T extends RecipeCreateArgs>(
			args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>,
		): Prisma__RecipeClient<
			$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Recipes.
		 * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
		 * @example
		 * // Create many Recipes
		 * const recipe = await prisma.recipe.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends RecipeCreateManyArgs>(
			args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Recipes and returns the data saved in the database.
		 * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
		 * @example
		 * // Create many Recipes
		 * const recipe = await prisma.recipe.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Recipes and only return the `id`
		 * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(
			args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
		>;

		/**
		 * Delete a Recipe.
		 * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
		 * @example
		 * // Delete one Recipe
		 * const Recipe = await prisma.recipe.delete({
		 *   where: {
		 *     // ... filter to delete one Recipe
		 *   }
		 * })
		 *
		 */
		delete<T extends RecipeDeleteArgs>(
			args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>,
		): Prisma__RecipeClient<
			$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Recipe.
		 * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
		 * @example
		 * // Update one Recipe
		 * const recipe = await prisma.recipe.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends RecipeUpdateArgs>(
			args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>,
		): Prisma__RecipeClient<
			$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Recipes.
		 * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
		 * @example
		 * // Delete a few Recipes
		 * const { count } = await prisma.recipe.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends RecipeDeleteManyArgs>(
			args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Recipes.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Recipes
		 * const recipe = await prisma.recipe.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends RecipeUpdateManyArgs>(
			args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Recipes and returns the data updated in the database.
		 * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
		 * @example
		 * // Update many Recipes
		 * const recipe = await prisma.recipe.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Recipes and only return the `id`
		 * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(
			args: SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
		>;

		/**
		 * Create or update one Recipe.
		 * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
		 * @example
		 * // Update or create a Recipe
		 * const recipe = await prisma.recipe.upsert({
		 *   create: {
		 *     // ... data to create a Recipe
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Recipe we want to update
		 *   }
		 * })
		 */
		upsert<T extends RecipeUpsertArgs>(
			args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>,
		): Prisma__RecipeClient<
			$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Recipes.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
		 * @example
		 * // Count the number of Recipes
		 * const count = await prisma.recipe.count({
		 *   where: {
		 *     // ... the filter for the Recipes we want to count
		 *   }
		 * })
		 **/
		count<T extends RecipeCountArgs>(
			args?: Subset<T, RecipeCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], RecipeCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Recipe.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends RecipeAggregateArgs>(
			args: Subset<T, RecipeAggregateArgs>,
		): Prisma.PrismaPromise<GetRecipeAggregateType<T>>;

		/**
		 * Group by Recipe.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {RecipeGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends RecipeGroupByArgs,
			HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: RecipeGroupByArgs['orderBy'] }
				: { orderBy?: RecipeGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
			ByFields extends MaybeTupleToUnion<T['by']>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T['having']>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T['by'] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Recipe model
		 */
		readonly fields: RecipeFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Recipe.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__RecipeClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise';
		user<T extends Recipe$userArgs<ExtArgs> = {}>(
			args?: Subset<T, Recipe$userArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;
		comment<T extends Recipe$commentArgs<ExtArgs> = {}>(
			args?: Subset<T, Recipe$commentArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			| $Result.GetResult<Prisma.$CommentRecipePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
			| Null
		>;
		cookbook<T extends Recipe$cookbookArgs<ExtArgs> = {}>(
			args?: Subset<T, Recipe$cookbookArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$CookbookPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
		>;
		likes<T extends Recipe$likesArgs<ExtArgs> = {}>(
			args?: Subset<T, Recipe$likesArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			| $Result.GetResult<Prisma.$Recipe_LikesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
			| Null
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
			onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Recipe model
	 */
	interface RecipeFieldRefs {
		readonly id: FieldRef<'Recipe', 'String'>;
		readonly title: FieldRef<'Recipe', 'String'>;
		readonly description: FieldRef<'Recipe', 'String'>;
		readonly ingredients: FieldRef<'Recipe', 'String[]'>;
		readonly direction: FieldRef<'Recipe', 'String[]'>;
		readonly views: FieldRef<'Recipe', 'Int'>;
		readonly estimated_time: FieldRef<'Recipe', 'DateTime'>;
		readonly image: FieldRef<'Recipe', 'String'>;
		readonly createdAt: FieldRef<'Recipe', 'DateTime'>;
		readonly updatedAt: FieldRef<'Recipe', 'DateTime'>;
		readonly user_id: FieldRef<'Recipe', 'String'>;
	}

	// Custom InputTypes
	/**
	 * Recipe findUnique
	 */
	export type RecipeFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe
		 */
		select?: RecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe
		 */
		omit?: RecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: RecipeInclude<ExtArgs> | null;
		/**
		 * Filter, which Recipe to fetch.
		 */
		where: RecipeWhereUniqueInput;
	};

	/**
	 * Recipe findUniqueOrThrow
	 */
	export type RecipeFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe
		 */
		select?: RecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe
		 */
		omit?: RecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: RecipeInclude<ExtArgs> | null;
		/**
		 * Filter, which Recipe to fetch.
		 */
		where: RecipeWhereUniqueInput;
	};

	/**
	 * Recipe findFirst
	 */
	export type RecipeFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe
		 */
		select?: RecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe
		 */
		omit?: RecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: RecipeInclude<ExtArgs> | null;
		/**
		 * Filter, which Recipe to fetch.
		 */
		where?: RecipeWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Recipes to fetch.
		 */
		orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Recipes.
		 */
		cursor?: RecipeWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Recipes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Recipes.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Recipes.
		 */
		distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[];
	};

	/**
	 * Recipe findFirstOrThrow
	 */
	export type RecipeFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe
		 */
		select?: RecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe
		 */
		omit?: RecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: RecipeInclude<ExtArgs> | null;
		/**
		 * Filter, which Recipe to fetch.
		 */
		where?: RecipeWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Recipes to fetch.
		 */
		orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Recipes.
		 */
		cursor?: RecipeWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Recipes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Recipes.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Recipes.
		 */
		distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[];
	};

	/**
	 * Recipe findMany
	 */
	export type RecipeFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe
		 */
		select?: RecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe
		 */
		omit?: RecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: RecipeInclude<ExtArgs> | null;
		/**
		 * Filter, which Recipes to fetch.
		 */
		where?: RecipeWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Recipes to fetch.
		 */
		orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Recipes.
		 */
		cursor?: RecipeWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Recipes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Recipes.
		 */
		skip?: number;
		distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[];
	};

	/**
	 * Recipe create
	 */
	export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		{
			/**
			 * Select specific fields to fetch from the Recipe
			 */
			select?: RecipeSelect<ExtArgs> | null;
			/**
			 * Omit specific fields from the Recipe
			 */
			omit?: RecipeOmit<ExtArgs> | null;
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: RecipeInclude<ExtArgs> | null;
			/**
			 * The data needed to create a Recipe.
			 */
			data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>;
		};

	/**
	 * Recipe createMany
	 */
	export type RecipeCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Recipes.
		 */
		data: RecipeCreateManyInput | RecipeCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Recipe createManyAndReturn
	 */
	export type RecipeCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe
		 */
		select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe
		 */
		omit?: RecipeOmit<ExtArgs> | null;
		/**
		 * The data used to create many Recipes.
		 */
		data: RecipeCreateManyInput | RecipeCreateManyInput[];
		skipDuplicates?: boolean;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: RecipeIncludeCreateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Recipe update
	 */
	export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		{
			/**
			 * Select specific fields to fetch from the Recipe
			 */
			select?: RecipeSelect<ExtArgs> | null;
			/**
			 * Omit specific fields from the Recipe
			 */
			omit?: RecipeOmit<ExtArgs> | null;
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: RecipeInclude<ExtArgs> | null;
			/**
			 * The data needed to update a Recipe.
			 */
			data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>;
			/**
			 * Choose, which Recipe to update.
			 */
			where: RecipeWhereUniqueInput;
		};

	/**
	 * Recipe updateMany
	 */
	export type RecipeUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Recipes.
		 */
		data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>;
		/**
		 * Filter which Recipes to update
		 */
		where?: RecipeWhereInput;
		/**
		 * Limit how many Recipes to update.
		 */
		limit?: number;
	};

	/**
	 * Recipe updateManyAndReturn
	 */
	export type RecipeUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe
		 */
		select?: RecipeSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe
		 */
		omit?: RecipeOmit<ExtArgs> | null;
		/**
		 * The data used to update Recipes.
		 */
		data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>;
		/**
		 * Filter which Recipes to update
		 */
		where?: RecipeWhereInput;
		/**
		 * Limit how many Recipes to update.
		 */
		limit?: number;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: RecipeIncludeUpdateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Recipe upsert
	 */
	export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		{
			/**
			 * Select specific fields to fetch from the Recipe
			 */
			select?: RecipeSelect<ExtArgs> | null;
			/**
			 * Omit specific fields from the Recipe
			 */
			omit?: RecipeOmit<ExtArgs> | null;
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: RecipeInclude<ExtArgs> | null;
			/**
			 * The filter to search for the Recipe to update in case it exists.
			 */
			where: RecipeWhereUniqueInput;
			/**
			 * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
			 */
			create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>;
			/**
			 * In case the Recipe was found with the provided `where` argument, update it with this data.
			 */
			update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>;
		};

	/**
	 * Recipe delete
	 */
	export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		{
			/**
			 * Select specific fields to fetch from the Recipe
			 */
			select?: RecipeSelect<ExtArgs> | null;
			/**
			 * Omit specific fields from the Recipe
			 */
			omit?: RecipeOmit<ExtArgs> | null;
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: RecipeInclude<ExtArgs> | null;
			/**
			 * Filter which Recipe to delete.
			 */
			where: RecipeWhereUniqueInput;
		};

	/**
	 * Recipe deleteMany
	 */
	export type RecipeDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Recipes to delete
		 */
		where?: RecipeWhereInput;
		/**
		 * Limit how many Recipes to delete.
		 */
		limit?: number;
	};

	/**
	 * Recipe.user
	 */
	export type Recipe$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		{
			/**
			 * Select specific fields to fetch from the User
			 */
			select?: UserSelect<ExtArgs> | null;
			/**
			 * Omit specific fields from the User
			 */
			omit?: UserOmit<ExtArgs> | null;
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: UserInclude<ExtArgs> | null;
			where?: UserWhereInput;
		};

	/**
	 * Recipe.comment
	 */
	export type Recipe$commentArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentRecipe
		 */
		select?: CommentRecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentRecipe
		 */
		omit?: CommentRecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentRecipeInclude<ExtArgs> | null;
		where?: CommentRecipeWhereInput;
		orderBy?: CommentRecipeOrderByWithRelationInput | CommentRecipeOrderByWithRelationInput[];
		cursor?: CommentRecipeWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: CommentRecipeScalarFieldEnum | CommentRecipeScalarFieldEnum[];
	};

	/**
	 * Recipe.cookbook
	 */
	export type Recipe$cookbookArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook
		 */
		select?: CookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook
		 */
		omit?: CookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CookbookInclude<ExtArgs> | null;
		where?: CookbookWhereInput;
		orderBy?: CookbookOrderByWithRelationInput | CookbookOrderByWithRelationInput[];
		cursor?: CookbookWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: CookbookScalarFieldEnum | CookbookScalarFieldEnum[];
	};

	/**
	 * Recipe.likes
	 */
	export type Recipe$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		{
			/**
			 * Select specific fields to fetch from the Recipe_Likes
			 */
			select?: Recipe_LikesSelect<ExtArgs> | null;
			/**
			 * Omit specific fields from the Recipe_Likes
			 */
			omit?: Recipe_LikesOmit<ExtArgs> | null;
			/**
			 * Choose, which related nodes to fetch as well
			 */
			include?: Recipe_LikesInclude<ExtArgs> | null;
			where?: Recipe_LikesWhereInput;
			orderBy?: Recipe_LikesOrderByWithRelationInput | Recipe_LikesOrderByWithRelationInput[];
			cursor?: Recipe_LikesWhereUniqueInput;
			take?: number;
			skip?: number;
			distinct?: Recipe_LikesScalarFieldEnum | Recipe_LikesScalarFieldEnum[];
		};

	/**
	 * Recipe without action
	 */
	export type RecipeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe
		 */
		select?: RecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe
		 */
		omit?: RecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: RecipeInclude<ExtArgs> | null;
	};

	/**
	 * Model Recipe_Likes
	 */

	export type AggregateRecipe_Likes = {
		_count: Recipe_LikesCountAggregateOutputType | null;
		_min: Recipe_LikesMinAggregateOutputType | null;
		_max: Recipe_LikesMaxAggregateOutputType | null;
	};

	export type Recipe_LikesMinAggregateOutputType = {
		id: string | null;
		recipe_id: string | null;
		user_id: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type Recipe_LikesMaxAggregateOutputType = {
		id: string | null;
		recipe_id: string | null;
		user_id: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type Recipe_LikesCountAggregateOutputType = {
		id: number;
		recipe_id: number;
		user_id: number;
		createdAt: number;
		updatedAt: number;
		_all: number;
	};

	export type Recipe_LikesMinAggregateInputType = {
		id?: true;
		recipe_id?: true;
		user_id?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type Recipe_LikesMaxAggregateInputType = {
		id?: true;
		recipe_id?: true;
		user_id?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type Recipe_LikesCountAggregateInputType = {
		id?: true;
		recipe_id?: true;
		user_id?: true;
		createdAt?: true;
		updatedAt?: true;
		_all?: true;
	};

	export type Recipe_LikesAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Recipe_Likes to aggregate.
		 */
		where?: Recipe_LikesWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Recipe_Likes to fetch.
		 */
		orderBy?: Recipe_LikesOrderByWithRelationInput | Recipe_LikesOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: Recipe_LikesWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Recipe_Likes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Recipe_Likes.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Recipe_Likes
		 **/
		_count?: true | Recipe_LikesCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: Recipe_LikesMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: Recipe_LikesMaxAggregateInputType;
	};

	export type GetRecipe_LikesAggregateType<T extends Recipe_LikesAggregateArgs> = {
		[P in keyof T & keyof AggregateRecipe_Likes]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateRecipe_Likes[P]>
			: GetScalarType<T[P], AggregateRecipe_Likes[P]>;
	};

	export type Recipe_LikesGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: Recipe_LikesWhereInput;
		orderBy?: Recipe_LikesOrderByWithAggregationInput | Recipe_LikesOrderByWithAggregationInput[];
		by: Recipe_LikesScalarFieldEnum[] | Recipe_LikesScalarFieldEnum;
		having?: Recipe_LikesScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: Recipe_LikesCountAggregateInputType | true;
		_min?: Recipe_LikesMinAggregateInputType;
		_max?: Recipe_LikesMaxAggregateInputType;
	};

	export type Recipe_LikesGroupByOutputType = {
		id: string;
		recipe_id: string | null;
		user_id: string | null;
		createdAt: Date;
		updatedAt: Date;
		_count: Recipe_LikesCountAggregateOutputType | null;
		_min: Recipe_LikesMinAggregateOutputType | null;
		_max: Recipe_LikesMaxAggregateOutputType | null;
	};

	type GetRecipe_LikesGroupByPayload<T extends Recipe_LikesGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<Recipe_LikesGroupByOutputType, T['by']> & {
				[P in keyof T & keyof Recipe_LikesGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], Recipe_LikesGroupByOutputType[P]>
					: GetScalarType<T[P], Recipe_LikesGroupByOutputType[P]>;
			}
		>
	>;

	export type Recipe_LikesSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			recipe_id?: boolean;
			user_id?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			recipe?: boolean | Recipe_Likes$recipeArgs<ExtArgs>;
			user?: boolean | Recipe_Likes$userArgs<ExtArgs>;
		},
		ExtArgs['result']['recipe_Likes']
	>;

	export type Recipe_LikesSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			recipe_id?: boolean;
			user_id?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			recipe?: boolean | Recipe_Likes$recipeArgs<ExtArgs>;
			user?: boolean | Recipe_Likes$userArgs<ExtArgs>;
		},
		ExtArgs['result']['recipe_Likes']
	>;

	export type Recipe_LikesSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			recipe_id?: boolean;
			user_id?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			recipe?: boolean | Recipe_Likes$recipeArgs<ExtArgs>;
			user?: boolean | Recipe_Likes$userArgs<ExtArgs>;
		},
		ExtArgs['result']['recipe_Likes']
	>;

	export type Recipe_LikesSelectScalar = {
		id?: boolean;
		recipe_id?: boolean;
		user_id?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
	};

	export type Recipe_LikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		$Extensions.GetOmit<
			'id' | 'recipe_id' | 'user_id' | 'createdAt' | 'updatedAt',
			ExtArgs['result']['recipe_Likes']
		>;
	export type Recipe_LikesInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		recipe?: boolean | Recipe_Likes$recipeArgs<ExtArgs>;
		user?: boolean | Recipe_Likes$userArgs<ExtArgs>;
	};
	export type Recipe_LikesIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		recipe?: boolean | Recipe_Likes$recipeArgs<ExtArgs>;
		user?: boolean | Recipe_Likes$userArgs<ExtArgs>;
	};
	export type Recipe_LikesIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		recipe?: boolean | Recipe_Likes$recipeArgs<ExtArgs>;
		user?: boolean | Recipe_Likes$userArgs<ExtArgs>;
	};

	export type $Recipe_LikesPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: 'Recipe_Likes';
		objects: {
			recipe: Prisma.$RecipePayload<ExtArgs> | null;
			user: Prisma.$UserPayload<ExtArgs> | null;
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				recipe_id: string | null;
				user_id: string | null;
				createdAt: Date;
				updatedAt: Date;
			},
			ExtArgs['result']['recipe_Likes']
		>;
		composites: {};
	};

	type Recipe_LikesGetPayload<S extends boolean | null | undefined | Recipe_LikesDefaultArgs> =
		$Result.GetResult<Prisma.$Recipe_LikesPayload, S>;

	type Recipe_LikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		Omit<Recipe_LikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
			select?: Recipe_LikesCountAggregateInputType | true;
		};

	export interface Recipe_LikesDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['Recipe_Likes'];
			meta: { name: 'Recipe_Likes' };
		};
		/**
		 * Find zero or one Recipe_Likes that matches the filter.
		 * @param {Recipe_LikesFindUniqueArgs} args - Arguments to find a Recipe_Likes
		 * @example
		 * // Get one Recipe_Likes
		 * const recipe_Likes = await prisma.recipe_Likes.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends Recipe_LikesFindUniqueArgs>(
			args: SelectSubset<T, Recipe_LikesFindUniqueArgs<ExtArgs>>,
		): Prisma__Recipe_LikesClient<
			$Result.GetResult<
				Prisma.$Recipe_LikesPayload<ExtArgs>,
				T,
				'findUnique',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Recipe_Likes that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {Recipe_LikesFindUniqueOrThrowArgs} args - Arguments to find a Recipe_Likes
		 * @example
		 * // Get one Recipe_Likes
		 * const recipe_Likes = await prisma.recipe_Likes.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends Recipe_LikesFindUniqueOrThrowArgs>(
			args: SelectSubset<T, Recipe_LikesFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__Recipe_LikesClient<
			$Result.GetResult<
				Prisma.$Recipe_LikesPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Recipe_Likes that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {Recipe_LikesFindFirstArgs} args - Arguments to find a Recipe_Likes
		 * @example
		 * // Get one Recipe_Likes
		 * const recipe_Likes = await prisma.recipe_Likes.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends Recipe_LikesFindFirstArgs>(
			args?: SelectSubset<T, Recipe_LikesFindFirstArgs<ExtArgs>>,
		): Prisma__Recipe_LikesClient<
			$Result.GetResult<
				Prisma.$Recipe_LikesPayload<ExtArgs>,
				T,
				'findFirst',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Recipe_Likes that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {Recipe_LikesFindFirstOrThrowArgs} args - Arguments to find a Recipe_Likes
		 * @example
		 * // Get one Recipe_Likes
		 * const recipe_Likes = await prisma.recipe_Likes.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends Recipe_LikesFindFirstOrThrowArgs>(
			args?: SelectSubset<T, Recipe_LikesFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__Recipe_LikesClient<
			$Result.GetResult<
				Prisma.$Recipe_LikesPayload<ExtArgs>,
				T,
				'findFirstOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Recipe_Likes that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {Recipe_LikesFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Recipe_Likes
		 * const recipe_Likes = await prisma.recipe_Likes.findMany()
		 *
		 * // Get first 10 Recipe_Likes
		 * const recipe_Likes = await prisma.recipe_Likes.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const recipe_LikesWithIdOnly = await prisma.recipe_Likes.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends Recipe_LikesFindManyArgs>(
			args?: SelectSubset<T, Recipe_LikesFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$Recipe_LikesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
		>;

		/**
		 * Create a Recipe_Likes.
		 * @param {Recipe_LikesCreateArgs} args - Arguments to create a Recipe_Likes.
		 * @example
		 * // Create one Recipe_Likes
		 * const Recipe_Likes = await prisma.recipe_Likes.create({
		 *   data: {
		 *     // ... data to create a Recipe_Likes
		 *   }
		 * })
		 *
		 */
		create<T extends Recipe_LikesCreateArgs>(
			args: SelectSubset<T, Recipe_LikesCreateArgs<ExtArgs>>,
		): Prisma__Recipe_LikesClient<
			$Result.GetResult<Prisma.$Recipe_LikesPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Recipe_Likes.
		 * @param {Recipe_LikesCreateManyArgs} args - Arguments to create many Recipe_Likes.
		 * @example
		 * // Create many Recipe_Likes
		 * const recipe_Likes = await prisma.recipe_Likes.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends Recipe_LikesCreateManyArgs>(
			args?: SelectSubset<T, Recipe_LikesCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Recipe_Likes and returns the data saved in the database.
		 * @param {Recipe_LikesCreateManyAndReturnArgs} args - Arguments to create many Recipe_Likes.
		 * @example
		 * // Create many Recipe_Likes
		 * const recipe_Likes = await prisma.recipe_Likes.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Recipe_Likes and only return the `id`
		 * const recipe_LikesWithIdOnly = await prisma.recipe_Likes.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends Recipe_LikesCreateManyAndReturnArgs>(
			args?: SelectSubset<T, Recipe_LikesCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$Recipe_LikesPayload<ExtArgs>,
				T,
				'createManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a Recipe_Likes.
		 * @param {Recipe_LikesDeleteArgs} args - Arguments to delete one Recipe_Likes.
		 * @example
		 * // Delete one Recipe_Likes
		 * const Recipe_Likes = await prisma.recipe_Likes.delete({
		 *   where: {
		 *     // ... filter to delete one Recipe_Likes
		 *   }
		 * })
		 *
		 */
		delete<T extends Recipe_LikesDeleteArgs>(
			args: SelectSubset<T, Recipe_LikesDeleteArgs<ExtArgs>>,
		): Prisma__Recipe_LikesClient<
			$Result.GetResult<Prisma.$Recipe_LikesPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Recipe_Likes.
		 * @param {Recipe_LikesUpdateArgs} args - Arguments to update one Recipe_Likes.
		 * @example
		 * // Update one Recipe_Likes
		 * const recipe_Likes = await prisma.recipe_Likes.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends Recipe_LikesUpdateArgs>(
			args: SelectSubset<T, Recipe_LikesUpdateArgs<ExtArgs>>,
		): Prisma__Recipe_LikesClient<
			$Result.GetResult<Prisma.$Recipe_LikesPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Recipe_Likes.
		 * @param {Recipe_LikesDeleteManyArgs} args - Arguments to filter Recipe_Likes to delete.
		 * @example
		 * // Delete a few Recipe_Likes
		 * const { count } = await prisma.recipe_Likes.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends Recipe_LikesDeleteManyArgs>(
			args?: SelectSubset<T, Recipe_LikesDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Recipe_Likes.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {Recipe_LikesUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Recipe_Likes
		 * const recipe_Likes = await prisma.recipe_Likes.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends Recipe_LikesUpdateManyArgs>(
			args: SelectSubset<T, Recipe_LikesUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Recipe_Likes and returns the data updated in the database.
		 * @param {Recipe_LikesUpdateManyAndReturnArgs} args - Arguments to update many Recipe_Likes.
		 * @example
		 * // Update many Recipe_Likes
		 * const recipe_Likes = await prisma.recipe_Likes.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Recipe_Likes and only return the `id`
		 * const recipe_LikesWithIdOnly = await prisma.recipe_Likes.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends Recipe_LikesUpdateManyAndReturnArgs>(
			args: SelectSubset<T, Recipe_LikesUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$Recipe_LikesPayload<ExtArgs>,
				T,
				'updateManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one Recipe_Likes.
		 * @param {Recipe_LikesUpsertArgs} args - Arguments to update or create a Recipe_Likes.
		 * @example
		 * // Update or create a Recipe_Likes
		 * const recipe_Likes = await prisma.recipe_Likes.upsert({
		 *   create: {
		 *     // ... data to create a Recipe_Likes
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Recipe_Likes we want to update
		 *   }
		 * })
		 */
		upsert<T extends Recipe_LikesUpsertArgs>(
			args: SelectSubset<T, Recipe_LikesUpsertArgs<ExtArgs>>,
		): Prisma__Recipe_LikesClient<
			$Result.GetResult<Prisma.$Recipe_LikesPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Recipe_Likes.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {Recipe_LikesCountArgs} args - Arguments to filter Recipe_Likes to count.
		 * @example
		 * // Count the number of Recipe_Likes
		 * const count = await prisma.recipe_Likes.count({
		 *   where: {
		 *     // ... the filter for the Recipe_Likes we want to count
		 *   }
		 * })
		 **/
		count<T extends Recipe_LikesCountArgs>(
			args?: Subset<T, Recipe_LikesCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], Recipe_LikesCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Recipe_Likes.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {Recipe_LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends Recipe_LikesAggregateArgs>(
			args: Subset<T, Recipe_LikesAggregateArgs>,
		): Prisma.PrismaPromise<GetRecipe_LikesAggregateType<T>>;

		/**
		 * Group by Recipe_Likes.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {Recipe_LikesGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends Recipe_LikesGroupByArgs,
			HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: Recipe_LikesGroupByArgs['orderBy'] }
				: { orderBy?: Recipe_LikesGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
			ByFields extends MaybeTupleToUnion<T['by']>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T['having']>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T['by'] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, Recipe_LikesGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors
			? GetRecipe_LikesGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Recipe_Likes model
		 */
		readonly fields: Recipe_LikesFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Recipe_Likes.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__Recipe_LikesClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise';
		recipe<T extends Recipe_Likes$recipeArgs<ExtArgs> = {}>(
			args?: Subset<T, Recipe_Likes$recipeArgs<ExtArgs>>,
		): Prisma__RecipeClient<
			$Result.GetResult<
				Prisma.$RecipePayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;
		user<T extends Recipe_Likes$userArgs<ExtArgs> = {}>(
			args?: Subset<T, Recipe_Likes$userArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
			onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Recipe_Likes model
	 */
	interface Recipe_LikesFieldRefs {
		readonly id: FieldRef<'Recipe_Likes', 'String'>;
		readonly recipe_id: FieldRef<'Recipe_Likes', 'String'>;
		readonly user_id: FieldRef<'Recipe_Likes', 'String'>;
		readonly createdAt: FieldRef<'Recipe_Likes', 'DateTime'>;
		readonly updatedAt: FieldRef<'Recipe_Likes', 'DateTime'>;
	}

	// Custom InputTypes
	/**
	 * Recipe_Likes findUnique
	 */
	export type Recipe_LikesFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe_Likes
		 */
		select?: Recipe_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe_Likes
		 */
		omit?: Recipe_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Recipe_LikesInclude<ExtArgs> | null;
		/**
		 * Filter, which Recipe_Likes to fetch.
		 */
		where: Recipe_LikesWhereUniqueInput;
	};

	/**
	 * Recipe_Likes findUniqueOrThrow
	 */
	export type Recipe_LikesFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe_Likes
		 */
		select?: Recipe_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe_Likes
		 */
		omit?: Recipe_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Recipe_LikesInclude<ExtArgs> | null;
		/**
		 * Filter, which Recipe_Likes to fetch.
		 */
		where: Recipe_LikesWhereUniqueInput;
	};

	/**
	 * Recipe_Likes findFirst
	 */
	export type Recipe_LikesFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe_Likes
		 */
		select?: Recipe_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe_Likes
		 */
		omit?: Recipe_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Recipe_LikesInclude<ExtArgs> | null;
		/**
		 * Filter, which Recipe_Likes to fetch.
		 */
		where?: Recipe_LikesWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Recipe_Likes to fetch.
		 */
		orderBy?: Recipe_LikesOrderByWithRelationInput | Recipe_LikesOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Recipe_Likes.
		 */
		cursor?: Recipe_LikesWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Recipe_Likes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Recipe_Likes.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Recipe_Likes.
		 */
		distinct?: Recipe_LikesScalarFieldEnum | Recipe_LikesScalarFieldEnum[];
	};

	/**
	 * Recipe_Likes findFirstOrThrow
	 */
	export type Recipe_LikesFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe_Likes
		 */
		select?: Recipe_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe_Likes
		 */
		omit?: Recipe_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Recipe_LikesInclude<ExtArgs> | null;
		/**
		 * Filter, which Recipe_Likes to fetch.
		 */
		where?: Recipe_LikesWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Recipe_Likes to fetch.
		 */
		orderBy?: Recipe_LikesOrderByWithRelationInput | Recipe_LikesOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Recipe_Likes.
		 */
		cursor?: Recipe_LikesWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Recipe_Likes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Recipe_Likes.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Recipe_Likes.
		 */
		distinct?: Recipe_LikesScalarFieldEnum | Recipe_LikesScalarFieldEnum[];
	};

	/**
	 * Recipe_Likes findMany
	 */
	export type Recipe_LikesFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe_Likes
		 */
		select?: Recipe_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe_Likes
		 */
		omit?: Recipe_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Recipe_LikesInclude<ExtArgs> | null;
		/**
		 * Filter, which Recipe_Likes to fetch.
		 */
		where?: Recipe_LikesWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Recipe_Likes to fetch.
		 */
		orderBy?: Recipe_LikesOrderByWithRelationInput | Recipe_LikesOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Recipe_Likes.
		 */
		cursor?: Recipe_LikesWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Recipe_Likes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Recipe_Likes.
		 */
		skip?: number;
		distinct?: Recipe_LikesScalarFieldEnum | Recipe_LikesScalarFieldEnum[];
	};

	/**
	 * Recipe_Likes create
	 */
	export type Recipe_LikesCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe_Likes
		 */
		select?: Recipe_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe_Likes
		 */
		omit?: Recipe_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Recipe_LikesInclude<ExtArgs> | null;
		/**
		 * The data needed to create a Recipe_Likes.
		 */
		data: XOR<Recipe_LikesCreateInput, Recipe_LikesUncheckedCreateInput>;
	};

	/**
	 * Recipe_Likes createMany
	 */
	export type Recipe_LikesCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Recipe_Likes.
		 */
		data: Recipe_LikesCreateManyInput | Recipe_LikesCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Recipe_Likes createManyAndReturn
	 */
	export type Recipe_LikesCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe_Likes
		 */
		select?: Recipe_LikesSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe_Likes
		 */
		omit?: Recipe_LikesOmit<ExtArgs> | null;
		/**
		 * The data used to create many Recipe_Likes.
		 */
		data: Recipe_LikesCreateManyInput | Recipe_LikesCreateManyInput[];
		skipDuplicates?: boolean;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Recipe_LikesIncludeCreateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Recipe_Likes update
	 */
	export type Recipe_LikesUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe_Likes
		 */
		select?: Recipe_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe_Likes
		 */
		omit?: Recipe_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Recipe_LikesInclude<ExtArgs> | null;
		/**
		 * The data needed to update a Recipe_Likes.
		 */
		data: XOR<Recipe_LikesUpdateInput, Recipe_LikesUncheckedUpdateInput>;
		/**
		 * Choose, which Recipe_Likes to update.
		 */
		where: Recipe_LikesWhereUniqueInput;
	};

	/**
	 * Recipe_Likes updateMany
	 */
	export type Recipe_LikesUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Recipe_Likes.
		 */
		data: XOR<Recipe_LikesUpdateManyMutationInput, Recipe_LikesUncheckedUpdateManyInput>;
		/**
		 * Filter which Recipe_Likes to update
		 */
		where?: Recipe_LikesWhereInput;
		/**
		 * Limit how many Recipe_Likes to update.
		 */
		limit?: number;
	};

	/**
	 * Recipe_Likes updateManyAndReturn
	 */
	export type Recipe_LikesUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe_Likes
		 */
		select?: Recipe_LikesSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe_Likes
		 */
		omit?: Recipe_LikesOmit<ExtArgs> | null;
		/**
		 * The data used to update Recipe_Likes.
		 */
		data: XOR<Recipe_LikesUpdateManyMutationInput, Recipe_LikesUncheckedUpdateManyInput>;
		/**
		 * Filter which Recipe_Likes to update
		 */
		where?: Recipe_LikesWhereInput;
		/**
		 * Limit how many Recipe_Likes to update.
		 */
		limit?: number;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Recipe_LikesIncludeUpdateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Recipe_Likes upsert
	 */
	export type Recipe_LikesUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe_Likes
		 */
		select?: Recipe_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe_Likes
		 */
		omit?: Recipe_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Recipe_LikesInclude<ExtArgs> | null;
		/**
		 * The filter to search for the Recipe_Likes to update in case it exists.
		 */
		where: Recipe_LikesWhereUniqueInput;
		/**
		 * In case the Recipe_Likes found by the `where` argument doesn't exist, create a new Recipe_Likes with this data.
		 */
		create: XOR<Recipe_LikesCreateInput, Recipe_LikesUncheckedCreateInput>;
		/**
		 * In case the Recipe_Likes was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<Recipe_LikesUpdateInput, Recipe_LikesUncheckedUpdateInput>;
	};

	/**
	 * Recipe_Likes delete
	 */
	export type Recipe_LikesDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe_Likes
		 */
		select?: Recipe_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe_Likes
		 */
		omit?: Recipe_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Recipe_LikesInclude<ExtArgs> | null;
		/**
		 * Filter which Recipe_Likes to delete.
		 */
		where: Recipe_LikesWhereUniqueInput;
	};

	/**
	 * Recipe_Likes deleteMany
	 */
	export type Recipe_LikesDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Recipe_Likes to delete
		 */
		where?: Recipe_LikesWhereInput;
		/**
		 * Limit how many Recipe_Likes to delete.
		 */
		limit?: number;
	};

	/**
	 * Recipe_Likes.recipe
	 */
	export type Recipe_Likes$recipeArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe
		 */
		select?: RecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe
		 */
		omit?: RecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: RecipeInclude<ExtArgs> | null;
		where?: RecipeWhereInput;
	};

	/**
	 * Recipe_Likes.user
	 */
	export type Recipe_Likes$userArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		where?: UserWhereInput;
	};

	/**
	 * Recipe_Likes without action
	 */
	export type Recipe_LikesDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe_Likes
		 */
		select?: Recipe_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe_Likes
		 */
		omit?: Recipe_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Recipe_LikesInclude<ExtArgs> | null;
	};

	/**
	 * Model CommentRecipe
	 */

	export type AggregateCommentRecipe = {
		_count: CommentRecipeCountAggregateOutputType | null;
		_min: CommentRecipeMinAggregateOutputType | null;
		_max: CommentRecipeMaxAggregateOutputType | null;
	};

	export type CommentRecipeMinAggregateOutputType = {
		id: string | null;
		description: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		recipe_id: string | null;
	};

	export type CommentRecipeMaxAggregateOutputType = {
		id: string | null;
		description: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		recipe_id: string | null;
	};

	export type CommentRecipeCountAggregateOutputType = {
		id: number;
		description: number;
		createdAt: number;
		updatedAt: number;
		recipe_id: number;
		_all: number;
	};

	export type CommentRecipeMinAggregateInputType = {
		id?: true;
		description?: true;
		createdAt?: true;
		updatedAt?: true;
		recipe_id?: true;
	};

	export type CommentRecipeMaxAggregateInputType = {
		id?: true;
		description?: true;
		createdAt?: true;
		updatedAt?: true;
		recipe_id?: true;
	};

	export type CommentRecipeCountAggregateInputType = {
		id?: true;
		description?: true;
		createdAt?: true;
		updatedAt?: true;
		recipe_id?: true;
		_all?: true;
	};

	export type CommentRecipeAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which CommentRecipe to aggregate.
		 */
		where?: CommentRecipeWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of CommentRecipes to fetch.
		 */
		orderBy?: CommentRecipeOrderByWithRelationInput | CommentRecipeOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: CommentRecipeWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` CommentRecipes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` CommentRecipes.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned CommentRecipes
		 **/
		_count?: true | CommentRecipeCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: CommentRecipeMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: CommentRecipeMaxAggregateInputType;
	};

	export type GetCommentRecipeAggregateType<T extends CommentRecipeAggregateArgs> = {
		[P in keyof T & keyof AggregateCommentRecipe]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateCommentRecipe[P]>
			: GetScalarType<T[P], AggregateCommentRecipe[P]>;
	};

	export type CommentRecipeGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: CommentRecipeWhereInput;
		orderBy?: CommentRecipeOrderByWithAggregationInput | CommentRecipeOrderByWithAggregationInput[];
		by: CommentRecipeScalarFieldEnum[] | CommentRecipeScalarFieldEnum;
		having?: CommentRecipeScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: CommentRecipeCountAggregateInputType | true;
		_min?: CommentRecipeMinAggregateInputType;
		_max?: CommentRecipeMaxAggregateInputType;
	};

	export type CommentRecipeGroupByOutputType = {
		id: string;
		description: string;
		createdAt: Date;
		updatedAt: Date;
		recipe_id: string | null;
		_count: CommentRecipeCountAggregateOutputType | null;
		_min: CommentRecipeMinAggregateOutputType | null;
		_max: CommentRecipeMaxAggregateOutputType | null;
	};

	type GetCommentRecipeGroupByPayload<T extends CommentRecipeGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<CommentRecipeGroupByOutputType, T['by']> & {
				[P in keyof T & keyof CommentRecipeGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], CommentRecipeGroupByOutputType[P]>
					: GetScalarType<T[P], CommentRecipeGroupByOutputType[P]>;
			}
		>
	>;

	export type CommentRecipeSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			description?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			recipe_id?: boolean;
			recipe?: boolean | CommentRecipe$recipeArgs<ExtArgs>;
		},
		ExtArgs['result']['commentRecipe']
	>;

	export type CommentRecipeSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			description?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			recipe_id?: boolean;
			recipe?: boolean | CommentRecipe$recipeArgs<ExtArgs>;
		},
		ExtArgs['result']['commentRecipe']
	>;

	export type CommentRecipeSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			description?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			recipe_id?: boolean;
			recipe?: boolean | CommentRecipe$recipeArgs<ExtArgs>;
		},
		ExtArgs['result']['commentRecipe']
	>;

	export type CommentRecipeSelectScalar = {
		id?: boolean;
		description?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		recipe_id?: boolean;
	};

	export type CommentRecipeOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		'id' | 'description' | 'createdAt' | 'updatedAt' | 'recipe_id',
		ExtArgs['result']['commentRecipe']
	>;
	export type CommentRecipeInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		recipe?: boolean | CommentRecipe$recipeArgs<ExtArgs>;
	};
	export type CommentRecipeIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		recipe?: boolean | CommentRecipe$recipeArgs<ExtArgs>;
	};
	export type CommentRecipeIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		recipe?: boolean | CommentRecipe$recipeArgs<ExtArgs>;
	};

	export type $CommentRecipePayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: 'CommentRecipe';
		objects: {
			recipe: Prisma.$RecipePayload<ExtArgs> | null;
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				description: string;
				createdAt: Date;
				updatedAt: Date;
				recipe_id: string | null;
			},
			ExtArgs['result']['commentRecipe']
		>;
		composites: {};
	};

	type CommentRecipeGetPayload<S extends boolean | null | undefined | CommentRecipeDefaultArgs> =
		$Result.GetResult<Prisma.$CommentRecipePayload, S>;

	type CommentRecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		Omit<CommentRecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
			select?: CommentRecipeCountAggregateInputType | true;
		};

	export interface CommentRecipeDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['CommentRecipe'];
			meta: { name: 'CommentRecipe' };
		};
		/**
		 * Find zero or one CommentRecipe that matches the filter.
		 * @param {CommentRecipeFindUniqueArgs} args - Arguments to find a CommentRecipe
		 * @example
		 * // Get one CommentRecipe
		 * const commentRecipe = await prisma.commentRecipe.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends CommentRecipeFindUniqueArgs>(
			args: SelectSubset<T, CommentRecipeFindUniqueArgs<ExtArgs>>,
		): Prisma__CommentRecipeClient<
			$Result.GetResult<
				Prisma.$CommentRecipePayload<ExtArgs>,
				T,
				'findUnique',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one CommentRecipe that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {CommentRecipeFindUniqueOrThrowArgs} args - Arguments to find a CommentRecipe
		 * @example
		 * // Get one CommentRecipe
		 * const commentRecipe = await prisma.commentRecipe.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends CommentRecipeFindUniqueOrThrowArgs>(
			args: SelectSubset<T, CommentRecipeFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__CommentRecipeClient<
			$Result.GetResult<
				Prisma.$CommentRecipePayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first CommentRecipe that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CommentRecipeFindFirstArgs} args - Arguments to find a CommentRecipe
		 * @example
		 * // Get one CommentRecipe
		 * const commentRecipe = await prisma.commentRecipe.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends CommentRecipeFindFirstArgs>(
			args?: SelectSubset<T, CommentRecipeFindFirstArgs<ExtArgs>>,
		): Prisma__CommentRecipeClient<
			$Result.GetResult<
				Prisma.$CommentRecipePayload<ExtArgs>,
				T,
				'findFirst',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first CommentRecipe that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CommentRecipeFindFirstOrThrowArgs} args - Arguments to find a CommentRecipe
		 * @example
		 * // Get one CommentRecipe
		 * const commentRecipe = await prisma.commentRecipe.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends CommentRecipeFindFirstOrThrowArgs>(
			args?: SelectSubset<T, CommentRecipeFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__CommentRecipeClient<
			$Result.GetResult<
				Prisma.$CommentRecipePayload<ExtArgs>,
				T,
				'findFirstOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more CommentRecipes that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CommentRecipeFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all CommentRecipes
		 * const commentRecipes = await prisma.commentRecipe.findMany()
		 *
		 * // Get first 10 CommentRecipes
		 * const commentRecipes = await prisma.commentRecipe.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const commentRecipeWithIdOnly = await prisma.commentRecipe.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends CommentRecipeFindManyArgs>(
			args?: SelectSubset<T, CommentRecipeFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$CommentRecipePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
		>;

		/**
		 * Create a CommentRecipe.
		 * @param {CommentRecipeCreateArgs} args - Arguments to create a CommentRecipe.
		 * @example
		 * // Create one CommentRecipe
		 * const CommentRecipe = await prisma.commentRecipe.create({
		 *   data: {
		 *     // ... data to create a CommentRecipe
		 *   }
		 * })
		 *
		 */
		create<T extends CommentRecipeCreateArgs>(
			args: SelectSubset<T, CommentRecipeCreateArgs<ExtArgs>>,
		): Prisma__CommentRecipeClient<
			$Result.GetResult<Prisma.$CommentRecipePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many CommentRecipes.
		 * @param {CommentRecipeCreateManyArgs} args - Arguments to create many CommentRecipes.
		 * @example
		 * // Create many CommentRecipes
		 * const commentRecipe = await prisma.commentRecipe.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends CommentRecipeCreateManyArgs>(
			args?: SelectSubset<T, CommentRecipeCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many CommentRecipes and returns the data saved in the database.
		 * @param {CommentRecipeCreateManyAndReturnArgs} args - Arguments to create many CommentRecipes.
		 * @example
		 * // Create many CommentRecipes
		 * const commentRecipe = await prisma.commentRecipe.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many CommentRecipes and only return the `id`
		 * const commentRecipeWithIdOnly = await prisma.commentRecipe.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends CommentRecipeCreateManyAndReturnArgs>(
			args?: SelectSubset<T, CommentRecipeCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$CommentRecipePayload<ExtArgs>,
				T,
				'createManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a CommentRecipe.
		 * @param {CommentRecipeDeleteArgs} args - Arguments to delete one CommentRecipe.
		 * @example
		 * // Delete one CommentRecipe
		 * const CommentRecipe = await prisma.commentRecipe.delete({
		 *   where: {
		 *     // ... filter to delete one CommentRecipe
		 *   }
		 * })
		 *
		 */
		delete<T extends CommentRecipeDeleteArgs>(
			args: SelectSubset<T, CommentRecipeDeleteArgs<ExtArgs>>,
		): Prisma__CommentRecipeClient<
			$Result.GetResult<Prisma.$CommentRecipePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one CommentRecipe.
		 * @param {CommentRecipeUpdateArgs} args - Arguments to update one CommentRecipe.
		 * @example
		 * // Update one CommentRecipe
		 * const commentRecipe = await prisma.commentRecipe.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends CommentRecipeUpdateArgs>(
			args: SelectSubset<T, CommentRecipeUpdateArgs<ExtArgs>>,
		): Prisma__CommentRecipeClient<
			$Result.GetResult<Prisma.$CommentRecipePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more CommentRecipes.
		 * @param {CommentRecipeDeleteManyArgs} args - Arguments to filter CommentRecipes to delete.
		 * @example
		 * // Delete a few CommentRecipes
		 * const { count } = await prisma.commentRecipe.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends CommentRecipeDeleteManyArgs>(
			args?: SelectSubset<T, CommentRecipeDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more CommentRecipes.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CommentRecipeUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many CommentRecipes
		 * const commentRecipe = await prisma.commentRecipe.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends CommentRecipeUpdateManyArgs>(
			args: SelectSubset<T, CommentRecipeUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more CommentRecipes and returns the data updated in the database.
		 * @param {CommentRecipeUpdateManyAndReturnArgs} args - Arguments to update many CommentRecipes.
		 * @example
		 * // Update many CommentRecipes
		 * const commentRecipe = await prisma.commentRecipe.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more CommentRecipes and only return the `id`
		 * const commentRecipeWithIdOnly = await prisma.commentRecipe.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends CommentRecipeUpdateManyAndReturnArgs>(
			args: SelectSubset<T, CommentRecipeUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$CommentRecipePayload<ExtArgs>,
				T,
				'updateManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one CommentRecipe.
		 * @param {CommentRecipeUpsertArgs} args - Arguments to update or create a CommentRecipe.
		 * @example
		 * // Update or create a CommentRecipe
		 * const commentRecipe = await prisma.commentRecipe.upsert({
		 *   create: {
		 *     // ... data to create a CommentRecipe
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the CommentRecipe we want to update
		 *   }
		 * })
		 */
		upsert<T extends CommentRecipeUpsertArgs>(
			args: SelectSubset<T, CommentRecipeUpsertArgs<ExtArgs>>,
		): Prisma__CommentRecipeClient<
			$Result.GetResult<Prisma.$CommentRecipePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of CommentRecipes.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CommentRecipeCountArgs} args - Arguments to filter CommentRecipes to count.
		 * @example
		 * // Count the number of CommentRecipes
		 * const count = await prisma.commentRecipe.count({
		 *   where: {
		 *     // ... the filter for the CommentRecipes we want to count
		 *   }
		 * })
		 **/
		count<T extends CommentRecipeCountArgs>(
			args?: Subset<T, CommentRecipeCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], CommentRecipeCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a CommentRecipe.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CommentRecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends CommentRecipeAggregateArgs>(
			args: Subset<T, CommentRecipeAggregateArgs>,
		): Prisma.PrismaPromise<GetCommentRecipeAggregateType<T>>;

		/**
		 * Group by CommentRecipe.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CommentRecipeGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends CommentRecipeGroupByArgs,
			HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: CommentRecipeGroupByArgs['orderBy'] }
				: { orderBy?: CommentRecipeGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
			ByFields extends MaybeTupleToUnion<T['by']>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T['having']>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T['by'] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, CommentRecipeGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors
			? GetCommentRecipeGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the CommentRecipe model
		 */
		readonly fields: CommentRecipeFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for CommentRecipe.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__CommentRecipeClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise';
		recipe<T extends CommentRecipe$recipeArgs<ExtArgs> = {}>(
			args?: Subset<T, CommentRecipe$recipeArgs<ExtArgs>>,
		): Prisma__RecipeClient<
			$Result.GetResult<
				Prisma.$RecipePayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
			onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the CommentRecipe model
	 */
	interface CommentRecipeFieldRefs {
		readonly id: FieldRef<'CommentRecipe', 'String'>;
		readonly description: FieldRef<'CommentRecipe', 'String'>;
		readonly createdAt: FieldRef<'CommentRecipe', 'DateTime'>;
		readonly updatedAt: FieldRef<'CommentRecipe', 'DateTime'>;
		readonly recipe_id: FieldRef<'CommentRecipe', 'String'>;
	}

	// Custom InputTypes
	/**
	 * CommentRecipe findUnique
	 */
	export type CommentRecipeFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentRecipe
		 */
		select?: CommentRecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentRecipe
		 */
		omit?: CommentRecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentRecipeInclude<ExtArgs> | null;
		/**
		 * Filter, which CommentRecipe to fetch.
		 */
		where: CommentRecipeWhereUniqueInput;
	};

	/**
	 * CommentRecipe findUniqueOrThrow
	 */
	export type CommentRecipeFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentRecipe
		 */
		select?: CommentRecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentRecipe
		 */
		omit?: CommentRecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentRecipeInclude<ExtArgs> | null;
		/**
		 * Filter, which CommentRecipe to fetch.
		 */
		where: CommentRecipeWhereUniqueInput;
	};

	/**
	 * CommentRecipe findFirst
	 */
	export type CommentRecipeFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentRecipe
		 */
		select?: CommentRecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentRecipe
		 */
		omit?: CommentRecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentRecipeInclude<ExtArgs> | null;
		/**
		 * Filter, which CommentRecipe to fetch.
		 */
		where?: CommentRecipeWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of CommentRecipes to fetch.
		 */
		orderBy?: CommentRecipeOrderByWithRelationInput | CommentRecipeOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for CommentRecipes.
		 */
		cursor?: CommentRecipeWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` CommentRecipes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` CommentRecipes.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of CommentRecipes.
		 */
		distinct?: CommentRecipeScalarFieldEnum | CommentRecipeScalarFieldEnum[];
	};

	/**
	 * CommentRecipe findFirstOrThrow
	 */
	export type CommentRecipeFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentRecipe
		 */
		select?: CommentRecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentRecipe
		 */
		omit?: CommentRecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentRecipeInclude<ExtArgs> | null;
		/**
		 * Filter, which CommentRecipe to fetch.
		 */
		where?: CommentRecipeWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of CommentRecipes to fetch.
		 */
		orderBy?: CommentRecipeOrderByWithRelationInput | CommentRecipeOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for CommentRecipes.
		 */
		cursor?: CommentRecipeWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` CommentRecipes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` CommentRecipes.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of CommentRecipes.
		 */
		distinct?: CommentRecipeScalarFieldEnum | CommentRecipeScalarFieldEnum[];
	};

	/**
	 * CommentRecipe findMany
	 */
	export type CommentRecipeFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentRecipe
		 */
		select?: CommentRecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentRecipe
		 */
		omit?: CommentRecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentRecipeInclude<ExtArgs> | null;
		/**
		 * Filter, which CommentRecipes to fetch.
		 */
		where?: CommentRecipeWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of CommentRecipes to fetch.
		 */
		orderBy?: CommentRecipeOrderByWithRelationInput | CommentRecipeOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing CommentRecipes.
		 */
		cursor?: CommentRecipeWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` CommentRecipes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` CommentRecipes.
		 */
		skip?: number;
		distinct?: CommentRecipeScalarFieldEnum | CommentRecipeScalarFieldEnum[];
	};

	/**
	 * CommentRecipe create
	 */
	export type CommentRecipeCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentRecipe
		 */
		select?: CommentRecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentRecipe
		 */
		omit?: CommentRecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentRecipeInclude<ExtArgs> | null;
		/**
		 * The data needed to create a CommentRecipe.
		 */
		data: XOR<CommentRecipeCreateInput, CommentRecipeUncheckedCreateInput>;
	};

	/**
	 * CommentRecipe createMany
	 */
	export type CommentRecipeCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many CommentRecipes.
		 */
		data: CommentRecipeCreateManyInput | CommentRecipeCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * CommentRecipe createManyAndReturn
	 */
	export type CommentRecipeCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentRecipe
		 */
		select?: CommentRecipeSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentRecipe
		 */
		omit?: CommentRecipeOmit<ExtArgs> | null;
		/**
		 * The data used to create many CommentRecipes.
		 */
		data: CommentRecipeCreateManyInput | CommentRecipeCreateManyInput[];
		skipDuplicates?: boolean;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentRecipeIncludeCreateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * CommentRecipe update
	 */
	export type CommentRecipeUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentRecipe
		 */
		select?: CommentRecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentRecipe
		 */
		omit?: CommentRecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentRecipeInclude<ExtArgs> | null;
		/**
		 * The data needed to update a CommentRecipe.
		 */
		data: XOR<CommentRecipeUpdateInput, CommentRecipeUncheckedUpdateInput>;
		/**
		 * Choose, which CommentRecipe to update.
		 */
		where: CommentRecipeWhereUniqueInput;
	};

	/**
	 * CommentRecipe updateMany
	 */
	export type CommentRecipeUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update CommentRecipes.
		 */
		data: XOR<CommentRecipeUpdateManyMutationInput, CommentRecipeUncheckedUpdateManyInput>;
		/**
		 * Filter which CommentRecipes to update
		 */
		where?: CommentRecipeWhereInput;
		/**
		 * Limit how many CommentRecipes to update.
		 */
		limit?: number;
	};

	/**
	 * CommentRecipe updateManyAndReturn
	 */
	export type CommentRecipeUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentRecipe
		 */
		select?: CommentRecipeSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentRecipe
		 */
		omit?: CommentRecipeOmit<ExtArgs> | null;
		/**
		 * The data used to update CommentRecipes.
		 */
		data: XOR<CommentRecipeUpdateManyMutationInput, CommentRecipeUncheckedUpdateManyInput>;
		/**
		 * Filter which CommentRecipes to update
		 */
		where?: CommentRecipeWhereInput;
		/**
		 * Limit how many CommentRecipes to update.
		 */
		limit?: number;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentRecipeIncludeUpdateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * CommentRecipe upsert
	 */
	export type CommentRecipeUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentRecipe
		 */
		select?: CommentRecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentRecipe
		 */
		omit?: CommentRecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentRecipeInclude<ExtArgs> | null;
		/**
		 * The filter to search for the CommentRecipe to update in case it exists.
		 */
		where: CommentRecipeWhereUniqueInput;
		/**
		 * In case the CommentRecipe found by the `where` argument doesn't exist, create a new CommentRecipe with this data.
		 */
		create: XOR<CommentRecipeCreateInput, CommentRecipeUncheckedCreateInput>;
		/**
		 * In case the CommentRecipe was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<CommentRecipeUpdateInput, CommentRecipeUncheckedUpdateInput>;
	};

	/**
	 * CommentRecipe delete
	 */
	export type CommentRecipeDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentRecipe
		 */
		select?: CommentRecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentRecipe
		 */
		omit?: CommentRecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentRecipeInclude<ExtArgs> | null;
		/**
		 * Filter which CommentRecipe to delete.
		 */
		where: CommentRecipeWhereUniqueInput;
	};

	/**
	 * CommentRecipe deleteMany
	 */
	export type CommentRecipeDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which CommentRecipes to delete
		 */
		where?: CommentRecipeWhereInput;
		/**
		 * Limit how many CommentRecipes to delete.
		 */
		limit?: number;
	};

	/**
	 * CommentRecipe.recipe
	 */
	export type CommentRecipe$recipeArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe
		 */
		select?: RecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe
		 */
		omit?: RecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: RecipeInclude<ExtArgs> | null;
		where?: RecipeWhereInput;
	};

	/**
	 * CommentRecipe without action
	 */
	export type CommentRecipeDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentRecipe
		 */
		select?: CommentRecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentRecipe
		 */
		omit?: CommentRecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentRecipeInclude<ExtArgs> | null;
	};

	/**
	 * Model Cookbook
	 */

	export type AggregateCookbook = {
		_count: CookbookCountAggregateOutputType | null;
		_avg: CookbookAvgAggregateOutputType | null;
		_sum: CookbookSumAggregateOutputType | null;
		_min: CookbookMinAggregateOutputType | null;
		_max: CookbookMaxAggregateOutputType | null;
	};

	export type CookbookAvgAggregateOutputType = {
		likes: number | null;
	};

	export type CookbookSumAggregateOutputType = {
		likes: number | null;
	};

	export type CookbookMinAggregateOutputType = {
		id: string | null;
		title: string | null;
		description: string | null;
		likes: number | null;
		image: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		user_id: string | null;
		recipe_id: string | null;
	};

	export type CookbookMaxAggregateOutputType = {
		id: string | null;
		title: string | null;
		description: string | null;
		likes: number | null;
		image: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		user_id: string | null;
		recipe_id: string | null;
	};

	export type CookbookCountAggregateOutputType = {
		id: number;
		title: number;
		description: number;
		likes: number;
		image: number;
		createdAt: number;
		updatedAt: number;
		user_id: number;
		recipe_id: number;
		_all: number;
	};

	export type CookbookAvgAggregateInputType = {
		likes?: true;
	};

	export type CookbookSumAggregateInputType = {
		likes?: true;
	};

	export type CookbookMinAggregateInputType = {
		id?: true;
		title?: true;
		description?: true;
		likes?: true;
		image?: true;
		createdAt?: true;
		updatedAt?: true;
		user_id?: true;
		recipe_id?: true;
	};

	export type CookbookMaxAggregateInputType = {
		id?: true;
		title?: true;
		description?: true;
		likes?: true;
		image?: true;
		createdAt?: true;
		updatedAt?: true;
		user_id?: true;
		recipe_id?: true;
	};

	export type CookbookCountAggregateInputType = {
		id?: true;
		title?: true;
		description?: true;
		likes?: true;
		image?: true;
		createdAt?: true;
		updatedAt?: true;
		user_id?: true;
		recipe_id?: true;
		_all?: true;
	};

	export type CookbookAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Cookbook to aggregate.
		 */
		where?: CookbookWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Cookbooks to fetch.
		 */
		orderBy?: CookbookOrderByWithRelationInput | CookbookOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: CookbookWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Cookbooks from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Cookbooks.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Cookbooks
		 **/
		_count?: true | CookbookCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: CookbookAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: CookbookSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: CookbookMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: CookbookMaxAggregateInputType;
	};

	export type GetCookbookAggregateType<T extends CookbookAggregateArgs> = {
		[P in keyof T & keyof AggregateCookbook]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateCookbook[P]>
			: GetScalarType<T[P], AggregateCookbook[P]>;
	};

	export type CookbookGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: CookbookWhereInput;
		orderBy?: CookbookOrderByWithAggregationInput | CookbookOrderByWithAggregationInput[];
		by: CookbookScalarFieldEnum[] | CookbookScalarFieldEnum;
		having?: CookbookScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: CookbookCountAggregateInputType | true;
		_avg?: CookbookAvgAggregateInputType;
		_sum?: CookbookSumAggregateInputType;
		_min?: CookbookMinAggregateInputType;
		_max?: CookbookMaxAggregateInputType;
	};

	export type CookbookGroupByOutputType = {
		id: string;
		title: string;
		description: string | null;
		likes: number;
		image: string;
		createdAt: Date;
		updatedAt: Date;
		user_id: string | null;
		recipe_id: string | null;
		_count: CookbookCountAggregateOutputType | null;
		_avg: CookbookAvgAggregateOutputType | null;
		_sum: CookbookSumAggregateOutputType | null;
		_min: CookbookMinAggregateOutputType | null;
		_max: CookbookMaxAggregateOutputType | null;
	};

	type GetCookbookGroupByPayload<T extends CookbookGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<CookbookGroupByOutputType, T['by']> & {
				[P in keyof T & keyof CookbookGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], CookbookGroupByOutputType[P]>
					: GetScalarType<T[P], CookbookGroupByOutputType[P]>;
			}
		>
	>;

	export type CookbookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		$Extensions.GetSelect<
			{
				id?: boolean;
				title?: boolean;
				description?: boolean;
				likes?: boolean;
				image?: boolean;
				createdAt?: boolean;
				updatedAt?: boolean;
				user_id?: boolean;
				recipe_id?: boolean;
				user?: boolean | Cookbook$userArgs<ExtArgs>;
				recipe?: boolean | Cookbook$recipeArgs<ExtArgs>;
				commentCookbook?: boolean | Cookbook$commentCookbookArgs<ExtArgs>;
				Cookbook_Likes?: boolean | Cookbook$Cookbook_LikesArgs<ExtArgs>;
				_count?: boolean | CookbookCountOutputTypeDefaultArgs<ExtArgs>;
			},
			ExtArgs['result']['cookbook']
		>;

	export type CookbookSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			title?: boolean;
			description?: boolean;
			likes?: boolean;
			image?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			user_id?: boolean;
			recipe_id?: boolean;
			user?: boolean | Cookbook$userArgs<ExtArgs>;
			recipe?: boolean | Cookbook$recipeArgs<ExtArgs>;
		},
		ExtArgs['result']['cookbook']
	>;

	export type CookbookSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			title?: boolean;
			description?: boolean;
			likes?: boolean;
			image?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			user_id?: boolean;
			recipe_id?: boolean;
			user?: boolean | Cookbook$userArgs<ExtArgs>;
			recipe?: boolean | Cookbook$recipeArgs<ExtArgs>;
		},
		ExtArgs['result']['cookbook']
	>;

	export type CookbookSelectScalar = {
		id?: boolean;
		title?: boolean;
		description?: boolean;
		likes?: boolean;
		image?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		user_id?: boolean;
		recipe_id?: boolean;
	};

	export type CookbookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		$Extensions.GetOmit<
			| 'id'
			| 'title'
			| 'description'
			| 'likes'
			| 'image'
			| 'createdAt'
			| 'updatedAt'
			| 'user_id'
			| 'recipe_id',
			ExtArgs['result']['cookbook']
		>;
	export type CookbookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		{
			user?: boolean | Cookbook$userArgs<ExtArgs>;
			recipe?: boolean | Cookbook$recipeArgs<ExtArgs>;
			commentCookbook?: boolean | Cookbook$commentCookbookArgs<ExtArgs>;
			Cookbook_Likes?: boolean | Cookbook$Cookbook_LikesArgs<ExtArgs>;
			_count?: boolean | CookbookCountOutputTypeDefaultArgs<ExtArgs>;
		};
	export type CookbookIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | Cookbook$userArgs<ExtArgs>;
		recipe?: boolean | Cookbook$recipeArgs<ExtArgs>;
	};
	export type CookbookIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		user?: boolean | Cookbook$userArgs<ExtArgs>;
		recipe?: boolean | Cookbook$recipeArgs<ExtArgs>;
	};

	export type $CookbookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		{
			name: 'Cookbook';
			objects: {
				user: Prisma.$UserPayload<ExtArgs> | null;
				recipe: Prisma.$RecipePayload<ExtArgs> | null;
				commentCookbook: Prisma.$CommentCookbookPayload<ExtArgs>[];
				Cookbook_Likes: Prisma.$Cookbook_LikesPayload<ExtArgs>[];
			};
			scalars: $Extensions.GetPayloadResult<
				{
					id: string;
					title: string;
					description: string | null;
					likes: number;
					image: string;
					createdAt: Date;
					updatedAt: Date;
					user_id: string | null;
					recipe_id: string | null;
				},
				ExtArgs['result']['cookbook']
			>;
			composites: {};
		};

	type CookbookGetPayload<S extends boolean | null | undefined | CookbookDefaultArgs> =
		$Result.GetResult<Prisma.$CookbookPayload, S>;

	type CookbookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
		CookbookFindManyArgs,
		'select' | 'include' | 'distinct' | 'omit'
	> & {
		select?: CookbookCountAggregateInputType | true;
	};

	export interface CookbookDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['Cookbook'];
			meta: { name: 'Cookbook' };
		};
		/**
		 * Find zero or one Cookbook that matches the filter.
		 * @param {CookbookFindUniqueArgs} args - Arguments to find a Cookbook
		 * @example
		 * // Get one Cookbook
		 * const cookbook = await prisma.cookbook.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends CookbookFindUniqueArgs>(
			args: SelectSubset<T, CookbookFindUniqueArgs<ExtArgs>>,
		): Prisma__CookbookClient<
			$Result.GetResult<
				Prisma.$CookbookPayload<ExtArgs>,
				T,
				'findUnique',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Cookbook that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {CookbookFindUniqueOrThrowArgs} args - Arguments to find a Cookbook
		 * @example
		 * // Get one Cookbook
		 * const cookbook = await prisma.cookbook.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends CookbookFindUniqueOrThrowArgs>(
			args: SelectSubset<T, CookbookFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__CookbookClient<
			$Result.GetResult<
				Prisma.$CookbookPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Cookbook that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CookbookFindFirstArgs} args - Arguments to find a Cookbook
		 * @example
		 * // Get one Cookbook
		 * const cookbook = await prisma.cookbook.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends CookbookFindFirstArgs>(
			args?: SelectSubset<T, CookbookFindFirstArgs<ExtArgs>>,
		): Prisma__CookbookClient<
			$Result.GetResult<Prisma.$CookbookPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Cookbook that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CookbookFindFirstOrThrowArgs} args - Arguments to find a Cookbook
		 * @example
		 * // Get one Cookbook
		 * const cookbook = await prisma.cookbook.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends CookbookFindFirstOrThrowArgs>(
			args?: SelectSubset<T, CookbookFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__CookbookClient<
			$Result.GetResult<Prisma.$CookbookPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Cookbooks that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CookbookFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Cookbooks
		 * const cookbooks = await prisma.cookbook.findMany()
		 *
		 * // Get first 10 Cookbooks
		 * const cookbooks = await prisma.cookbook.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const cookbookWithIdOnly = await prisma.cookbook.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends CookbookFindManyArgs>(
			args?: SelectSubset<T, CookbookFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$CookbookPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
		>;

		/**
		 * Create a Cookbook.
		 * @param {CookbookCreateArgs} args - Arguments to create a Cookbook.
		 * @example
		 * // Create one Cookbook
		 * const Cookbook = await prisma.cookbook.create({
		 *   data: {
		 *     // ... data to create a Cookbook
		 *   }
		 * })
		 *
		 */
		create<T extends CookbookCreateArgs>(
			args: SelectSubset<T, CookbookCreateArgs<ExtArgs>>,
		): Prisma__CookbookClient<
			$Result.GetResult<Prisma.$CookbookPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Cookbooks.
		 * @param {CookbookCreateManyArgs} args - Arguments to create many Cookbooks.
		 * @example
		 * // Create many Cookbooks
		 * const cookbook = await prisma.cookbook.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends CookbookCreateManyArgs>(
			args?: SelectSubset<T, CookbookCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Cookbooks and returns the data saved in the database.
		 * @param {CookbookCreateManyAndReturnArgs} args - Arguments to create many Cookbooks.
		 * @example
		 * // Create many Cookbooks
		 * const cookbook = await prisma.cookbook.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Cookbooks and only return the `id`
		 * const cookbookWithIdOnly = await prisma.cookbook.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends CookbookCreateManyAndReturnArgs>(
			args?: SelectSubset<T, CookbookCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$CookbookPayload<ExtArgs>,
				T,
				'createManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a Cookbook.
		 * @param {CookbookDeleteArgs} args - Arguments to delete one Cookbook.
		 * @example
		 * // Delete one Cookbook
		 * const Cookbook = await prisma.cookbook.delete({
		 *   where: {
		 *     // ... filter to delete one Cookbook
		 *   }
		 * })
		 *
		 */
		delete<T extends CookbookDeleteArgs>(
			args: SelectSubset<T, CookbookDeleteArgs<ExtArgs>>,
		): Prisma__CookbookClient<
			$Result.GetResult<Prisma.$CookbookPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Cookbook.
		 * @param {CookbookUpdateArgs} args - Arguments to update one Cookbook.
		 * @example
		 * // Update one Cookbook
		 * const cookbook = await prisma.cookbook.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends CookbookUpdateArgs>(
			args: SelectSubset<T, CookbookUpdateArgs<ExtArgs>>,
		): Prisma__CookbookClient<
			$Result.GetResult<Prisma.$CookbookPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Cookbooks.
		 * @param {CookbookDeleteManyArgs} args - Arguments to filter Cookbooks to delete.
		 * @example
		 * // Delete a few Cookbooks
		 * const { count } = await prisma.cookbook.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends CookbookDeleteManyArgs>(
			args?: SelectSubset<T, CookbookDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Cookbooks.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CookbookUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Cookbooks
		 * const cookbook = await prisma.cookbook.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends CookbookUpdateManyArgs>(
			args: SelectSubset<T, CookbookUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Cookbooks and returns the data updated in the database.
		 * @param {CookbookUpdateManyAndReturnArgs} args - Arguments to update many Cookbooks.
		 * @example
		 * // Update many Cookbooks
		 * const cookbook = await prisma.cookbook.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Cookbooks and only return the `id`
		 * const cookbookWithIdOnly = await prisma.cookbook.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends CookbookUpdateManyAndReturnArgs>(
			args: SelectSubset<T, CookbookUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$CookbookPayload<ExtArgs>,
				T,
				'updateManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one Cookbook.
		 * @param {CookbookUpsertArgs} args - Arguments to update or create a Cookbook.
		 * @example
		 * // Update or create a Cookbook
		 * const cookbook = await prisma.cookbook.upsert({
		 *   create: {
		 *     // ... data to create a Cookbook
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Cookbook we want to update
		 *   }
		 * })
		 */
		upsert<T extends CookbookUpsertArgs>(
			args: SelectSubset<T, CookbookUpsertArgs<ExtArgs>>,
		): Prisma__CookbookClient<
			$Result.GetResult<Prisma.$CookbookPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Cookbooks.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CookbookCountArgs} args - Arguments to filter Cookbooks to count.
		 * @example
		 * // Count the number of Cookbooks
		 * const count = await prisma.cookbook.count({
		 *   where: {
		 *     // ... the filter for the Cookbooks we want to count
		 *   }
		 * })
		 **/
		count<T extends CookbookCountArgs>(
			args?: Subset<T, CookbookCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], CookbookCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Cookbook.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CookbookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends CookbookAggregateArgs>(
			args: Subset<T, CookbookAggregateArgs>,
		): Prisma.PrismaPromise<GetCookbookAggregateType<T>>;

		/**
		 * Group by Cookbook.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CookbookGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends CookbookGroupByArgs,
			HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: CookbookGroupByArgs['orderBy'] }
				: { orderBy?: CookbookGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
			ByFields extends MaybeTupleToUnion<T['by']>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T['having']>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T['by'] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, CookbookGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors ? GetCookbookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Cookbook model
		 */
		readonly fields: CookbookFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Cookbook.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__CookbookClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise';
		user<T extends Cookbook$userArgs<ExtArgs> = {}>(
			args?: Subset<T, Cookbook$userArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;
		recipe<T extends Cookbook$recipeArgs<ExtArgs> = {}>(
			args?: Subset<T, Cookbook$recipeArgs<ExtArgs>>,
		): Prisma__RecipeClient<
			$Result.GetResult<
				Prisma.$RecipePayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;
		commentCookbook<T extends Cookbook$commentCookbookArgs<ExtArgs> = {}>(
			args?: Subset<T, Cookbook$commentCookbookArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			| $Result.GetResult<Prisma.$CommentCookbookPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
			| Null
		>;
		Cookbook_Likes<T extends Cookbook$Cookbook_LikesArgs<ExtArgs> = {}>(
			args?: Subset<T, Cookbook$Cookbook_LikesArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			| $Result.GetResult<Prisma.$Cookbook_LikesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
			| Null
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
			onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Cookbook model
	 */
	interface CookbookFieldRefs {
		readonly id: FieldRef<'Cookbook', 'String'>;
		readonly title: FieldRef<'Cookbook', 'String'>;
		readonly description: FieldRef<'Cookbook', 'String'>;
		readonly likes: FieldRef<'Cookbook', 'Int'>;
		readonly image: FieldRef<'Cookbook', 'String'>;
		readonly createdAt: FieldRef<'Cookbook', 'DateTime'>;
		readonly updatedAt: FieldRef<'Cookbook', 'DateTime'>;
		readonly user_id: FieldRef<'Cookbook', 'String'>;
		readonly recipe_id: FieldRef<'Cookbook', 'String'>;
	}

	// Custom InputTypes
	/**
	 * Cookbook findUnique
	 */
	export type CookbookFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook
		 */
		select?: CookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook
		 */
		omit?: CookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CookbookInclude<ExtArgs> | null;
		/**
		 * Filter, which Cookbook to fetch.
		 */
		where: CookbookWhereUniqueInput;
	};

	/**
	 * Cookbook findUniqueOrThrow
	 */
	export type CookbookFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook
		 */
		select?: CookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook
		 */
		omit?: CookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CookbookInclude<ExtArgs> | null;
		/**
		 * Filter, which Cookbook to fetch.
		 */
		where: CookbookWhereUniqueInput;
	};

	/**
	 * Cookbook findFirst
	 */
	export type CookbookFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook
		 */
		select?: CookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook
		 */
		omit?: CookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CookbookInclude<ExtArgs> | null;
		/**
		 * Filter, which Cookbook to fetch.
		 */
		where?: CookbookWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Cookbooks to fetch.
		 */
		orderBy?: CookbookOrderByWithRelationInput | CookbookOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Cookbooks.
		 */
		cursor?: CookbookWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Cookbooks from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Cookbooks.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Cookbooks.
		 */
		distinct?: CookbookScalarFieldEnum | CookbookScalarFieldEnum[];
	};

	/**
	 * Cookbook findFirstOrThrow
	 */
	export type CookbookFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook
		 */
		select?: CookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook
		 */
		omit?: CookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CookbookInclude<ExtArgs> | null;
		/**
		 * Filter, which Cookbook to fetch.
		 */
		where?: CookbookWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Cookbooks to fetch.
		 */
		orderBy?: CookbookOrderByWithRelationInput | CookbookOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Cookbooks.
		 */
		cursor?: CookbookWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Cookbooks from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Cookbooks.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Cookbooks.
		 */
		distinct?: CookbookScalarFieldEnum | CookbookScalarFieldEnum[];
	};

	/**
	 * Cookbook findMany
	 */
	export type CookbookFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook
		 */
		select?: CookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook
		 */
		omit?: CookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CookbookInclude<ExtArgs> | null;
		/**
		 * Filter, which Cookbooks to fetch.
		 */
		where?: CookbookWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Cookbooks to fetch.
		 */
		orderBy?: CookbookOrderByWithRelationInput | CookbookOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Cookbooks.
		 */
		cursor?: CookbookWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Cookbooks from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Cookbooks.
		 */
		skip?: number;
		distinct?: CookbookScalarFieldEnum | CookbookScalarFieldEnum[];
	};

	/**
	 * Cookbook create
	 */
	export type CookbookCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook
		 */
		select?: CookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook
		 */
		omit?: CookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CookbookInclude<ExtArgs> | null;
		/**
		 * The data needed to create a Cookbook.
		 */
		data: XOR<CookbookCreateInput, CookbookUncheckedCreateInput>;
	};

	/**
	 * Cookbook createMany
	 */
	export type CookbookCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Cookbooks.
		 */
		data: CookbookCreateManyInput | CookbookCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Cookbook createManyAndReturn
	 */
	export type CookbookCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook
		 */
		select?: CookbookSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook
		 */
		omit?: CookbookOmit<ExtArgs> | null;
		/**
		 * The data used to create many Cookbooks.
		 */
		data: CookbookCreateManyInput | CookbookCreateManyInput[];
		skipDuplicates?: boolean;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CookbookIncludeCreateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Cookbook update
	 */
	export type CookbookUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook
		 */
		select?: CookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook
		 */
		omit?: CookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CookbookInclude<ExtArgs> | null;
		/**
		 * The data needed to update a Cookbook.
		 */
		data: XOR<CookbookUpdateInput, CookbookUncheckedUpdateInput>;
		/**
		 * Choose, which Cookbook to update.
		 */
		where: CookbookWhereUniqueInput;
	};

	/**
	 * Cookbook updateMany
	 */
	export type CookbookUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Cookbooks.
		 */
		data: XOR<CookbookUpdateManyMutationInput, CookbookUncheckedUpdateManyInput>;
		/**
		 * Filter which Cookbooks to update
		 */
		where?: CookbookWhereInput;
		/**
		 * Limit how many Cookbooks to update.
		 */
		limit?: number;
	};

	/**
	 * Cookbook updateManyAndReturn
	 */
	export type CookbookUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook
		 */
		select?: CookbookSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook
		 */
		omit?: CookbookOmit<ExtArgs> | null;
		/**
		 * The data used to update Cookbooks.
		 */
		data: XOR<CookbookUpdateManyMutationInput, CookbookUncheckedUpdateManyInput>;
		/**
		 * Filter which Cookbooks to update
		 */
		where?: CookbookWhereInput;
		/**
		 * Limit how many Cookbooks to update.
		 */
		limit?: number;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CookbookIncludeUpdateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Cookbook upsert
	 */
	export type CookbookUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook
		 */
		select?: CookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook
		 */
		omit?: CookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CookbookInclude<ExtArgs> | null;
		/**
		 * The filter to search for the Cookbook to update in case it exists.
		 */
		where: CookbookWhereUniqueInput;
		/**
		 * In case the Cookbook found by the `where` argument doesn't exist, create a new Cookbook with this data.
		 */
		create: XOR<CookbookCreateInput, CookbookUncheckedCreateInput>;
		/**
		 * In case the Cookbook was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<CookbookUpdateInput, CookbookUncheckedUpdateInput>;
	};

	/**
	 * Cookbook delete
	 */
	export type CookbookDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook
		 */
		select?: CookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook
		 */
		omit?: CookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CookbookInclude<ExtArgs> | null;
		/**
		 * Filter which Cookbook to delete.
		 */
		where: CookbookWhereUniqueInput;
	};

	/**
	 * Cookbook deleteMany
	 */
	export type CookbookDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Cookbooks to delete
		 */
		where?: CookbookWhereInput;
		/**
		 * Limit how many Cookbooks to delete.
		 */
		limit?: number;
	};

	/**
	 * Cookbook.user
	 */
	export type Cookbook$userArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		where?: UserWhereInput;
	};

	/**
	 * Cookbook.recipe
	 */
	export type Cookbook$recipeArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Recipe
		 */
		select?: RecipeSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Recipe
		 */
		omit?: RecipeOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: RecipeInclude<ExtArgs> | null;
		where?: RecipeWhereInput;
	};

	/**
	 * Cookbook.commentCookbook
	 */
	export type Cookbook$commentCookbookArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentCookbook
		 */
		select?: CommentCookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentCookbook
		 */
		omit?: CommentCookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentCookbookInclude<ExtArgs> | null;
		where?: CommentCookbookWhereInput;
		orderBy?: CommentCookbookOrderByWithRelationInput | CommentCookbookOrderByWithRelationInput[];
		cursor?: CommentCookbookWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: CommentCookbookScalarFieldEnum | CommentCookbookScalarFieldEnum[];
	};

	/**
	 * Cookbook.Cookbook_Likes
	 */
	export type Cookbook$Cookbook_LikesArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook_Likes
		 */
		select?: Cookbook_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook_Likes
		 */
		omit?: Cookbook_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Cookbook_LikesInclude<ExtArgs> | null;
		where?: Cookbook_LikesWhereInput;
		orderBy?: Cookbook_LikesOrderByWithRelationInput | Cookbook_LikesOrderByWithRelationInput[];
		cursor?: Cookbook_LikesWhereUniqueInput;
		take?: number;
		skip?: number;
		distinct?: Cookbook_LikesScalarFieldEnum | Cookbook_LikesScalarFieldEnum[];
	};

	/**
	 * Cookbook without action
	 */
	export type CookbookDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook
		 */
		select?: CookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook
		 */
		omit?: CookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CookbookInclude<ExtArgs> | null;
	};

	/**
	 * Model Cookbook_Likes
	 */

	export type AggregateCookbook_Likes = {
		_count: Cookbook_LikesCountAggregateOutputType | null;
		_min: Cookbook_LikesMinAggregateOutputType | null;
		_max: Cookbook_LikesMaxAggregateOutputType | null;
	};

	export type Cookbook_LikesMinAggregateOutputType = {
		id: string | null;
		cookbook_id: string | null;
		user_id: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type Cookbook_LikesMaxAggregateOutputType = {
		id: string | null;
		cookbook_id: string | null;
		user_id: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
	};

	export type Cookbook_LikesCountAggregateOutputType = {
		id: number;
		cookbook_id: number;
		user_id: number;
		createdAt: number;
		updatedAt: number;
		_all: number;
	};

	export type Cookbook_LikesMinAggregateInputType = {
		id?: true;
		cookbook_id?: true;
		user_id?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type Cookbook_LikesMaxAggregateInputType = {
		id?: true;
		cookbook_id?: true;
		user_id?: true;
		createdAt?: true;
		updatedAt?: true;
	};

	export type Cookbook_LikesCountAggregateInputType = {
		id?: true;
		cookbook_id?: true;
		user_id?: true;
		createdAt?: true;
		updatedAt?: true;
		_all?: true;
	};

	export type Cookbook_LikesAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Cookbook_Likes to aggregate.
		 */
		where?: Cookbook_LikesWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Cookbook_Likes to fetch.
		 */
		orderBy?: Cookbook_LikesOrderByWithRelationInput | Cookbook_LikesOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: Cookbook_LikesWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Cookbook_Likes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Cookbook_Likes.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned Cookbook_Likes
		 **/
		_count?: true | Cookbook_LikesCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: Cookbook_LikesMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: Cookbook_LikesMaxAggregateInputType;
	};

	export type GetCookbook_LikesAggregateType<T extends Cookbook_LikesAggregateArgs> = {
		[P in keyof T & keyof AggregateCookbook_Likes]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateCookbook_Likes[P]>
			: GetScalarType<T[P], AggregateCookbook_Likes[P]>;
	};

	export type Cookbook_LikesGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: Cookbook_LikesWhereInput;
		orderBy?:
			| Cookbook_LikesOrderByWithAggregationInput
			| Cookbook_LikesOrderByWithAggregationInput[];
		by: Cookbook_LikesScalarFieldEnum[] | Cookbook_LikesScalarFieldEnum;
		having?: Cookbook_LikesScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: Cookbook_LikesCountAggregateInputType | true;
		_min?: Cookbook_LikesMinAggregateInputType;
		_max?: Cookbook_LikesMaxAggregateInputType;
	};

	export type Cookbook_LikesGroupByOutputType = {
		id: string;
		cookbook_id: string | null;
		user_id: string | null;
		createdAt: Date;
		updatedAt: Date;
		_count: Cookbook_LikesCountAggregateOutputType | null;
		_min: Cookbook_LikesMinAggregateOutputType | null;
		_max: Cookbook_LikesMaxAggregateOutputType | null;
	};

	type GetCookbook_LikesGroupByPayload<T extends Cookbook_LikesGroupByArgs> = Prisma.PrismaPromise<
		Array<
			PickEnumerable<Cookbook_LikesGroupByOutputType, T['by']> & {
				[P in keyof T & keyof Cookbook_LikesGroupByOutputType]: P extends '_count'
					? T[P] extends boolean
						? number
						: GetScalarType<T[P], Cookbook_LikesGroupByOutputType[P]>
					: GetScalarType<T[P], Cookbook_LikesGroupByOutputType[P]>;
			}
		>
	>;

	export type Cookbook_LikesSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			cookbook_id?: boolean;
			user_id?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			cookbook?: boolean | Cookbook_Likes$cookbookArgs<ExtArgs>;
			user?: boolean | Cookbook_Likes$userArgs<ExtArgs>;
		},
		ExtArgs['result']['cookbook_Likes']
	>;

	export type Cookbook_LikesSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			cookbook_id?: boolean;
			user_id?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			cookbook?: boolean | Cookbook_Likes$cookbookArgs<ExtArgs>;
			user?: boolean | Cookbook_Likes$userArgs<ExtArgs>;
		},
		ExtArgs['result']['cookbook_Likes']
	>;

	export type Cookbook_LikesSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			cookbook_id?: boolean;
			user_id?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			cookbook?: boolean | Cookbook_Likes$cookbookArgs<ExtArgs>;
			user?: boolean | Cookbook_Likes$userArgs<ExtArgs>;
		},
		ExtArgs['result']['cookbook_Likes']
	>;

	export type Cookbook_LikesSelectScalar = {
		id?: boolean;
		cookbook_id?: boolean;
		user_id?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
	};

	export type Cookbook_LikesOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		'id' | 'cookbook_id' | 'user_id' | 'createdAt' | 'updatedAt',
		ExtArgs['result']['cookbook_Likes']
	>;
	export type Cookbook_LikesInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		cookbook?: boolean | Cookbook_Likes$cookbookArgs<ExtArgs>;
		user?: boolean | Cookbook_Likes$userArgs<ExtArgs>;
	};
	export type Cookbook_LikesIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		cookbook?: boolean | Cookbook_Likes$cookbookArgs<ExtArgs>;
		user?: boolean | Cookbook_Likes$userArgs<ExtArgs>;
	};
	export type Cookbook_LikesIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		cookbook?: boolean | Cookbook_Likes$cookbookArgs<ExtArgs>;
		user?: boolean | Cookbook_Likes$userArgs<ExtArgs>;
	};

	export type $Cookbook_LikesPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: 'Cookbook_Likes';
		objects: {
			cookbook: Prisma.$CookbookPayload<ExtArgs> | null;
			user: Prisma.$UserPayload<ExtArgs> | null;
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				cookbook_id: string | null;
				user_id: string | null;
				createdAt: Date;
				updatedAt: Date;
			},
			ExtArgs['result']['cookbook_Likes']
		>;
		composites: {};
	};

	type Cookbook_LikesGetPayload<S extends boolean | null | undefined | Cookbook_LikesDefaultArgs> =
		$Result.GetResult<Prisma.$Cookbook_LikesPayload, S>;

	type Cookbook_LikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
		Omit<Cookbook_LikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
			select?: Cookbook_LikesCountAggregateInputType | true;
		};

	export interface Cookbook_LikesDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['Cookbook_Likes'];
			meta: { name: 'Cookbook_Likes' };
		};
		/**
		 * Find zero or one Cookbook_Likes that matches the filter.
		 * @param {Cookbook_LikesFindUniqueArgs} args - Arguments to find a Cookbook_Likes
		 * @example
		 * // Get one Cookbook_Likes
		 * const cookbook_Likes = await prisma.cookbook_Likes.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends Cookbook_LikesFindUniqueArgs>(
			args: SelectSubset<T, Cookbook_LikesFindUniqueArgs<ExtArgs>>,
		): Prisma__Cookbook_LikesClient<
			$Result.GetResult<
				Prisma.$Cookbook_LikesPayload<ExtArgs>,
				T,
				'findUnique',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Cookbook_Likes that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {Cookbook_LikesFindUniqueOrThrowArgs} args - Arguments to find a Cookbook_Likes
		 * @example
		 * // Get one Cookbook_Likes
		 * const cookbook_Likes = await prisma.cookbook_Likes.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends Cookbook_LikesFindUniqueOrThrowArgs>(
			args: SelectSubset<T, Cookbook_LikesFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__Cookbook_LikesClient<
			$Result.GetResult<
				Prisma.$Cookbook_LikesPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Cookbook_Likes that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {Cookbook_LikesFindFirstArgs} args - Arguments to find a Cookbook_Likes
		 * @example
		 * // Get one Cookbook_Likes
		 * const cookbook_Likes = await prisma.cookbook_Likes.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends Cookbook_LikesFindFirstArgs>(
			args?: SelectSubset<T, Cookbook_LikesFindFirstArgs<ExtArgs>>,
		): Prisma__Cookbook_LikesClient<
			$Result.GetResult<
				Prisma.$Cookbook_LikesPayload<ExtArgs>,
				T,
				'findFirst',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Cookbook_Likes that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {Cookbook_LikesFindFirstOrThrowArgs} args - Arguments to find a Cookbook_Likes
		 * @example
		 * // Get one Cookbook_Likes
		 * const cookbook_Likes = await prisma.cookbook_Likes.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends Cookbook_LikesFindFirstOrThrowArgs>(
			args?: SelectSubset<T, Cookbook_LikesFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__Cookbook_LikesClient<
			$Result.GetResult<
				Prisma.$Cookbook_LikesPayload<ExtArgs>,
				T,
				'findFirstOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Cookbook_Likes that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {Cookbook_LikesFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Cookbook_Likes
		 * const cookbook_Likes = await prisma.cookbook_Likes.findMany()
		 *
		 * // Get first 10 Cookbook_Likes
		 * const cookbook_Likes = await prisma.cookbook_Likes.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const cookbook_LikesWithIdOnly = await prisma.cookbook_Likes.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends Cookbook_LikesFindManyArgs>(
			args?: SelectSubset<T, Cookbook_LikesFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$Cookbook_LikesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
		>;

		/**
		 * Create a Cookbook_Likes.
		 * @param {Cookbook_LikesCreateArgs} args - Arguments to create a Cookbook_Likes.
		 * @example
		 * // Create one Cookbook_Likes
		 * const Cookbook_Likes = await prisma.cookbook_Likes.create({
		 *   data: {
		 *     // ... data to create a Cookbook_Likes
		 *   }
		 * })
		 *
		 */
		create<T extends Cookbook_LikesCreateArgs>(
			args: SelectSubset<T, Cookbook_LikesCreateArgs<ExtArgs>>,
		): Prisma__Cookbook_LikesClient<
			$Result.GetResult<Prisma.$Cookbook_LikesPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Cookbook_Likes.
		 * @param {Cookbook_LikesCreateManyArgs} args - Arguments to create many Cookbook_Likes.
		 * @example
		 * // Create many Cookbook_Likes
		 * const cookbook_Likes = await prisma.cookbook_Likes.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends Cookbook_LikesCreateManyArgs>(
			args?: SelectSubset<T, Cookbook_LikesCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many Cookbook_Likes and returns the data saved in the database.
		 * @param {Cookbook_LikesCreateManyAndReturnArgs} args - Arguments to create many Cookbook_Likes.
		 * @example
		 * // Create many Cookbook_Likes
		 * const cookbook_Likes = await prisma.cookbook_Likes.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many Cookbook_Likes and only return the `id`
		 * const cookbook_LikesWithIdOnly = await prisma.cookbook_Likes.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends Cookbook_LikesCreateManyAndReturnArgs>(
			args?: SelectSubset<T, Cookbook_LikesCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$Cookbook_LikesPayload<ExtArgs>,
				T,
				'createManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a Cookbook_Likes.
		 * @param {Cookbook_LikesDeleteArgs} args - Arguments to delete one Cookbook_Likes.
		 * @example
		 * // Delete one Cookbook_Likes
		 * const Cookbook_Likes = await prisma.cookbook_Likes.delete({
		 *   where: {
		 *     // ... filter to delete one Cookbook_Likes
		 *   }
		 * })
		 *
		 */
		delete<T extends Cookbook_LikesDeleteArgs>(
			args: SelectSubset<T, Cookbook_LikesDeleteArgs<ExtArgs>>,
		): Prisma__Cookbook_LikesClient<
			$Result.GetResult<Prisma.$Cookbook_LikesPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Cookbook_Likes.
		 * @param {Cookbook_LikesUpdateArgs} args - Arguments to update one Cookbook_Likes.
		 * @example
		 * // Update one Cookbook_Likes
		 * const cookbook_Likes = await prisma.cookbook_Likes.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends Cookbook_LikesUpdateArgs>(
			args: SelectSubset<T, Cookbook_LikesUpdateArgs<ExtArgs>>,
		): Prisma__Cookbook_LikesClient<
			$Result.GetResult<Prisma.$Cookbook_LikesPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Cookbook_Likes.
		 * @param {Cookbook_LikesDeleteManyArgs} args - Arguments to filter Cookbook_Likes to delete.
		 * @example
		 * // Delete a few Cookbook_Likes
		 * const { count } = await prisma.cookbook_Likes.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends Cookbook_LikesDeleteManyArgs>(
			args?: SelectSubset<T, Cookbook_LikesDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Cookbook_Likes.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {Cookbook_LikesUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Cookbook_Likes
		 * const cookbook_Likes = await prisma.cookbook_Likes.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends Cookbook_LikesUpdateManyArgs>(
			args: SelectSubset<T, Cookbook_LikesUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Cookbook_Likes and returns the data updated in the database.
		 * @param {Cookbook_LikesUpdateManyAndReturnArgs} args - Arguments to update many Cookbook_Likes.
		 * @example
		 * // Update many Cookbook_Likes
		 * const cookbook_Likes = await prisma.cookbook_Likes.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more Cookbook_Likes and only return the `id`
		 * const cookbook_LikesWithIdOnly = await prisma.cookbook_Likes.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends Cookbook_LikesUpdateManyAndReturnArgs>(
			args: SelectSubset<T, Cookbook_LikesUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$Cookbook_LikesPayload<ExtArgs>,
				T,
				'updateManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one Cookbook_Likes.
		 * @param {Cookbook_LikesUpsertArgs} args - Arguments to update or create a Cookbook_Likes.
		 * @example
		 * // Update or create a Cookbook_Likes
		 * const cookbook_Likes = await prisma.cookbook_Likes.upsert({
		 *   create: {
		 *     // ... data to create a Cookbook_Likes
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Cookbook_Likes we want to update
		 *   }
		 * })
		 */
		upsert<T extends Cookbook_LikesUpsertArgs>(
			args: SelectSubset<T, Cookbook_LikesUpsertArgs<ExtArgs>>,
		): Prisma__Cookbook_LikesClient<
			$Result.GetResult<Prisma.$Cookbook_LikesPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of Cookbook_Likes.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {Cookbook_LikesCountArgs} args - Arguments to filter Cookbook_Likes to count.
		 * @example
		 * // Count the number of Cookbook_Likes
		 * const count = await prisma.cookbook_Likes.count({
		 *   where: {
		 *     // ... the filter for the Cookbook_Likes we want to count
		 *   }
		 * })
		 **/
		count<T extends Cookbook_LikesCountArgs>(
			args?: Subset<T, Cookbook_LikesCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], Cookbook_LikesCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Cookbook_Likes.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {Cookbook_LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends Cookbook_LikesAggregateArgs>(
			args: Subset<T, Cookbook_LikesAggregateArgs>,
		): Prisma.PrismaPromise<GetCookbook_LikesAggregateType<T>>;

		/**
		 * Group by Cookbook_Likes.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {Cookbook_LikesGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends Cookbook_LikesGroupByArgs,
			HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: Cookbook_LikesGroupByArgs['orderBy'] }
				: { orderBy?: Cookbook_LikesGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
			ByFields extends MaybeTupleToUnion<T['by']>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T['having']>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T['by'] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, Cookbook_LikesGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors
			? GetCookbook_LikesGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the Cookbook_Likes model
		 */
		readonly fields: Cookbook_LikesFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for Cookbook_Likes.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__Cookbook_LikesClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise';
		cookbook<T extends Cookbook_Likes$cookbookArgs<ExtArgs> = {}>(
			args?: Subset<T, Cookbook_Likes$cookbookArgs<ExtArgs>>,
		): Prisma__CookbookClient<
			$Result.GetResult<
				Prisma.$CookbookPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;
		user<T extends Cookbook_Likes$userArgs<ExtArgs> = {}>(
			args?: Subset<T, Cookbook_Likes$userArgs<ExtArgs>>,
		): Prisma__UserClient<
			$Result.GetResult<
				Prisma.$UserPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
			onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the Cookbook_Likes model
	 */
	interface Cookbook_LikesFieldRefs {
		readonly id: FieldRef<'Cookbook_Likes', 'String'>;
		readonly cookbook_id: FieldRef<'Cookbook_Likes', 'String'>;
		readonly user_id: FieldRef<'Cookbook_Likes', 'String'>;
		readonly createdAt: FieldRef<'Cookbook_Likes', 'DateTime'>;
		readonly updatedAt: FieldRef<'Cookbook_Likes', 'DateTime'>;
	}

	// Custom InputTypes
	/**
	 * Cookbook_Likes findUnique
	 */
	export type Cookbook_LikesFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook_Likes
		 */
		select?: Cookbook_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook_Likes
		 */
		omit?: Cookbook_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Cookbook_LikesInclude<ExtArgs> | null;
		/**
		 * Filter, which Cookbook_Likes to fetch.
		 */
		where: Cookbook_LikesWhereUniqueInput;
	};

	/**
	 * Cookbook_Likes findUniqueOrThrow
	 */
	export type Cookbook_LikesFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook_Likes
		 */
		select?: Cookbook_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook_Likes
		 */
		omit?: Cookbook_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Cookbook_LikesInclude<ExtArgs> | null;
		/**
		 * Filter, which Cookbook_Likes to fetch.
		 */
		where: Cookbook_LikesWhereUniqueInput;
	};

	/**
	 * Cookbook_Likes findFirst
	 */
	export type Cookbook_LikesFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook_Likes
		 */
		select?: Cookbook_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook_Likes
		 */
		omit?: Cookbook_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Cookbook_LikesInclude<ExtArgs> | null;
		/**
		 * Filter, which Cookbook_Likes to fetch.
		 */
		where?: Cookbook_LikesWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Cookbook_Likes to fetch.
		 */
		orderBy?: Cookbook_LikesOrderByWithRelationInput | Cookbook_LikesOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Cookbook_Likes.
		 */
		cursor?: Cookbook_LikesWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Cookbook_Likes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Cookbook_Likes.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Cookbook_Likes.
		 */
		distinct?: Cookbook_LikesScalarFieldEnum | Cookbook_LikesScalarFieldEnum[];
	};

	/**
	 * Cookbook_Likes findFirstOrThrow
	 */
	export type Cookbook_LikesFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook_Likes
		 */
		select?: Cookbook_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook_Likes
		 */
		omit?: Cookbook_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Cookbook_LikesInclude<ExtArgs> | null;
		/**
		 * Filter, which Cookbook_Likes to fetch.
		 */
		where?: Cookbook_LikesWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Cookbook_Likes to fetch.
		 */
		orderBy?: Cookbook_LikesOrderByWithRelationInput | Cookbook_LikesOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for Cookbook_Likes.
		 */
		cursor?: Cookbook_LikesWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Cookbook_Likes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Cookbook_Likes.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of Cookbook_Likes.
		 */
		distinct?: Cookbook_LikesScalarFieldEnum | Cookbook_LikesScalarFieldEnum[];
	};

	/**
	 * Cookbook_Likes findMany
	 */
	export type Cookbook_LikesFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook_Likes
		 */
		select?: Cookbook_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook_Likes
		 */
		omit?: Cookbook_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Cookbook_LikesInclude<ExtArgs> | null;
		/**
		 * Filter, which Cookbook_Likes to fetch.
		 */
		where?: Cookbook_LikesWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of Cookbook_Likes to fetch.
		 */
		orderBy?: Cookbook_LikesOrderByWithRelationInput | Cookbook_LikesOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing Cookbook_Likes.
		 */
		cursor?: Cookbook_LikesWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` Cookbook_Likes from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` Cookbook_Likes.
		 */
		skip?: number;
		distinct?: Cookbook_LikesScalarFieldEnum | Cookbook_LikesScalarFieldEnum[];
	};

	/**
	 * Cookbook_Likes create
	 */
	export type Cookbook_LikesCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook_Likes
		 */
		select?: Cookbook_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook_Likes
		 */
		omit?: Cookbook_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Cookbook_LikesInclude<ExtArgs> | null;
		/**
		 * The data needed to create a Cookbook_Likes.
		 */
		data: XOR<Cookbook_LikesCreateInput, Cookbook_LikesUncheckedCreateInput>;
	};

	/**
	 * Cookbook_Likes createMany
	 */
	export type Cookbook_LikesCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many Cookbook_Likes.
		 */
		data: Cookbook_LikesCreateManyInput | Cookbook_LikesCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * Cookbook_Likes createManyAndReturn
	 */
	export type Cookbook_LikesCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook_Likes
		 */
		select?: Cookbook_LikesSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook_Likes
		 */
		omit?: Cookbook_LikesOmit<ExtArgs> | null;
		/**
		 * The data used to create many Cookbook_Likes.
		 */
		data: Cookbook_LikesCreateManyInput | Cookbook_LikesCreateManyInput[];
		skipDuplicates?: boolean;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Cookbook_LikesIncludeCreateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Cookbook_Likes update
	 */
	export type Cookbook_LikesUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook_Likes
		 */
		select?: Cookbook_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook_Likes
		 */
		omit?: Cookbook_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Cookbook_LikesInclude<ExtArgs> | null;
		/**
		 * The data needed to update a Cookbook_Likes.
		 */
		data: XOR<Cookbook_LikesUpdateInput, Cookbook_LikesUncheckedUpdateInput>;
		/**
		 * Choose, which Cookbook_Likes to update.
		 */
		where: Cookbook_LikesWhereUniqueInput;
	};

	/**
	 * Cookbook_Likes updateMany
	 */
	export type Cookbook_LikesUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update Cookbook_Likes.
		 */
		data: XOR<Cookbook_LikesUpdateManyMutationInput, Cookbook_LikesUncheckedUpdateManyInput>;
		/**
		 * Filter which Cookbook_Likes to update
		 */
		where?: Cookbook_LikesWhereInput;
		/**
		 * Limit how many Cookbook_Likes to update.
		 */
		limit?: number;
	};

	/**
	 * Cookbook_Likes updateManyAndReturn
	 */
	export type Cookbook_LikesUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook_Likes
		 */
		select?: Cookbook_LikesSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook_Likes
		 */
		omit?: Cookbook_LikesOmit<ExtArgs> | null;
		/**
		 * The data used to update Cookbook_Likes.
		 */
		data: XOR<Cookbook_LikesUpdateManyMutationInput, Cookbook_LikesUncheckedUpdateManyInput>;
		/**
		 * Filter which Cookbook_Likes to update
		 */
		where?: Cookbook_LikesWhereInput;
		/**
		 * Limit how many Cookbook_Likes to update.
		 */
		limit?: number;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Cookbook_LikesIncludeUpdateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * Cookbook_Likes upsert
	 */
	export type Cookbook_LikesUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook_Likes
		 */
		select?: Cookbook_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook_Likes
		 */
		omit?: Cookbook_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Cookbook_LikesInclude<ExtArgs> | null;
		/**
		 * The filter to search for the Cookbook_Likes to update in case it exists.
		 */
		where: Cookbook_LikesWhereUniqueInput;
		/**
		 * In case the Cookbook_Likes found by the `where` argument doesn't exist, create a new Cookbook_Likes with this data.
		 */
		create: XOR<Cookbook_LikesCreateInput, Cookbook_LikesUncheckedCreateInput>;
		/**
		 * In case the Cookbook_Likes was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<Cookbook_LikesUpdateInput, Cookbook_LikesUncheckedUpdateInput>;
	};

	/**
	 * Cookbook_Likes delete
	 */
	export type Cookbook_LikesDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook_Likes
		 */
		select?: Cookbook_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook_Likes
		 */
		omit?: Cookbook_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Cookbook_LikesInclude<ExtArgs> | null;
		/**
		 * Filter which Cookbook_Likes to delete.
		 */
		where: Cookbook_LikesWhereUniqueInput;
	};

	/**
	 * Cookbook_Likes deleteMany
	 */
	export type Cookbook_LikesDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which Cookbook_Likes to delete
		 */
		where?: Cookbook_LikesWhereInput;
		/**
		 * Limit how many Cookbook_Likes to delete.
		 */
		limit?: number;
	};

	/**
	 * Cookbook_Likes.cookbook
	 */
	export type Cookbook_Likes$cookbookArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook
		 */
		select?: CookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook
		 */
		omit?: CookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CookbookInclude<ExtArgs> | null;
		where?: CookbookWhereInput;
	};

	/**
	 * Cookbook_Likes.user
	 */
	export type Cookbook_Likes$userArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the User
		 */
		select?: UserSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the User
		 */
		omit?: UserOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: UserInclude<ExtArgs> | null;
		where?: UserWhereInput;
	};

	/**
	 * Cookbook_Likes without action
	 */
	export type Cookbook_LikesDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook_Likes
		 */
		select?: Cookbook_LikesSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook_Likes
		 */
		omit?: Cookbook_LikesOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: Cookbook_LikesInclude<ExtArgs> | null;
	};

	/**
	 * Model CommentCookbook
	 */

	export type AggregateCommentCookbook = {
		_count: CommentCookbookCountAggregateOutputType | null;
		_min: CommentCookbookMinAggregateOutputType | null;
		_max: CommentCookbookMaxAggregateOutputType | null;
	};

	export type CommentCookbookMinAggregateOutputType = {
		id: string | null;
		description: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		cookbook_id: string | null;
	};

	export type CommentCookbookMaxAggregateOutputType = {
		id: string | null;
		description: string | null;
		createdAt: Date | null;
		updatedAt: Date | null;
		cookbook_id: string | null;
	};

	export type CommentCookbookCountAggregateOutputType = {
		id: number;
		description: number;
		createdAt: number;
		updatedAt: number;
		cookbook_id: number;
		_all: number;
	};

	export type CommentCookbookMinAggregateInputType = {
		id?: true;
		description?: true;
		createdAt?: true;
		updatedAt?: true;
		cookbook_id?: true;
	};

	export type CommentCookbookMaxAggregateInputType = {
		id?: true;
		description?: true;
		createdAt?: true;
		updatedAt?: true;
		cookbook_id?: true;
	};

	export type CommentCookbookCountAggregateInputType = {
		id?: true;
		description?: true;
		createdAt?: true;
		updatedAt?: true;
		cookbook_id?: true;
		_all?: true;
	};

	export type CommentCookbookAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which CommentCookbook to aggregate.
		 */
		where?: CommentCookbookWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of CommentCookbooks to fetch.
		 */
		orderBy?: CommentCookbookOrderByWithRelationInput | CommentCookbookOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: CommentCookbookWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` CommentCookbooks from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` CommentCookbooks.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned CommentCookbooks
		 **/
		_count?: true | CommentCookbookCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: CommentCookbookMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: CommentCookbookMaxAggregateInputType;
	};

	export type GetCommentCookbookAggregateType<T extends CommentCookbookAggregateArgs> = {
		[P in keyof T & keyof AggregateCommentCookbook]: P extends '_count' | 'count'
			? T[P] extends true
				? number
				: GetScalarType<T[P], AggregateCommentCookbook[P]>
			: GetScalarType<T[P], AggregateCommentCookbook[P]>;
	};

	export type CommentCookbookGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: CommentCookbookWhereInput;
		orderBy?:
			| CommentCookbookOrderByWithAggregationInput
			| CommentCookbookOrderByWithAggregationInput[];
		by: CommentCookbookScalarFieldEnum[] | CommentCookbookScalarFieldEnum;
		having?: CommentCookbookScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: CommentCookbookCountAggregateInputType | true;
		_min?: CommentCookbookMinAggregateInputType;
		_max?: CommentCookbookMaxAggregateInputType;
	};

	export type CommentCookbookGroupByOutputType = {
		id: string;
		description: string;
		createdAt: Date;
		updatedAt: Date;
		cookbook_id: string | null;
		_count: CommentCookbookCountAggregateOutputType | null;
		_min: CommentCookbookMinAggregateOutputType | null;
		_max: CommentCookbookMaxAggregateOutputType | null;
	};

	type GetCommentCookbookGroupByPayload<T extends CommentCookbookGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<CommentCookbookGroupByOutputType, T['by']> & {
					[P in keyof T & keyof CommentCookbookGroupByOutputType]: P extends '_count'
						? T[P] extends boolean
							? number
							: GetScalarType<T[P], CommentCookbookGroupByOutputType[P]>
						: GetScalarType<T[P], CommentCookbookGroupByOutputType[P]>;
				}
			>
		>;

	export type CommentCookbookSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			description?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			cookbook_id?: boolean;
			cookbook?: boolean | CommentCookbook$cookbookArgs<ExtArgs>;
		},
		ExtArgs['result']['commentCookbook']
	>;

	export type CommentCookbookSelectCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			description?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			cookbook_id?: boolean;
			cookbook?: boolean | CommentCookbook$cookbookArgs<ExtArgs>;
		},
		ExtArgs['result']['commentCookbook']
	>;

	export type CommentCookbookSelectUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			description?: boolean;
			createdAt?: boolean;
			updatedAt?: boolean;
			cookbook_id?: boolean;
			cookbook?: boolean | CommentCookbook$cookbookArgs<ExtArgs>;
		},
		ExtArgs['result']['commentCookbook']
	>;

	export type CommentCookbookSelectScalar = {
		id?: boolean;
		description?: boolean;
		createdAt?: boolean;
		updatedAt?: boolean;
		cookbook_id?: boolean;
	};

	export type CommentCookbookOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		'id' | 'description' | 'createdAt' | 'updatedAt' | 'cookbook_id',
		ExtArgs['result']['commentCookbook']
	>;
	export type CommentCookbookInclude<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		cookbook?: boolean | CommentCookbook$cookbookArgs<ExtArgs>;
	};
	export type CommentCookbookIncludeCreateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		cookbook?: boolean | CommentCookbook$cookbookArgs<ExtArgs>;
	};
	export type CommentCookbookIncludeUpdateManyAndReturn<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		cookbook?: boolean | CommentCookbook$cookbookArgs<ExtArgs>;
	};

	export type $CommentCookbookPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: 'CommentCookbook';
		objects: {
			cookbook: Prisma.$CookbookPayload<ExtArgs> | null;
		};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				description: string;
				createdAt: Date;
				updatedAt: Date;
				cookbook_id: string | null;
			},
			ExtArgs['result']['commentCookbook']
		>;
		composites: {};
	};

	type CommentCookbookGetPayload<
		S extends boolean | null | undefined | CommentCookbookDefaultArgs,
	> = $Result.GetResult<Prisma.$CommentCookbookPayload, S>;

	type CommentCookbookCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<CommentCookbookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
		select?: CommentCookbookCountAggregateInputType | true;
	};

	export interface CommentCookbookDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>['model']['CommentCookbook'];
			meta: { name: 'CommentCookbook' };
		};
		/**
		 * Find zero or one CommentCookbook that matches the filter.
		 * @param {CommentCookbookFindUniqueArgs} args - Arguments to find a CommentCookbook
		 * @example
		 * // Get one CommentCookbook
		 * const commentCookbook = await prisma.commentCookbook.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends CommentCookbookFindUniqueArgs>(
			args: SelectSubset<T, CommentCookbookFindUniqueArgs<ExtArgs>>,
		): Prisma__CommentCookbookClient<
			$Result.GetResult<
				Prisma.$CommentCookbookPayload<ExtArgs>,
				T,
				'findUnique',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one CommentCookbook that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {CommentCookbookFindUniqueOrThrowArgs} args - Arguments to find a CommentCookbook
		 * @example
		 * // Get one CommentCookbook
		 * const commentCookbook = await prisma.commentCookbook.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends CommentCookbookFindUniqueOrThrowArgs>(
			args: SelectSubset<T, CommentCookbookFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__CommentCookbookClient<
			$Result.GetResult<
				Prisma.$CommentCookbookPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first CommentCookbook that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CommentCookbookFindFirstArgs} args - Arguments to find a CommentCookbook
		 * @example
		 * // Get one CommentCookbook
		 * const commentCookbook = await prisma.commentCookbook.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends CommentCookbookFindFirstArgs>(
			args?: SelectSubset<T, CommentCookbookFindFirstArgs<ExtArgs>>,
		): Prisma__CommentCookbookClient<
			$Result.GetResult<
				Prisma.$CommentCookbookPayload<ExtArgs>,
				T,
				'findFirst',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first CommentCookbook that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CommentCookbookFindFirstOrThrowArgs} args - Arguments to find a CommentCookbook
		 * @example
		 * // Get one CommentCookbook
		 * const commentCookbook = await prisma.commentCookbook.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends CommentCookbookFindFirstOrThrowArgs>(
			args?: SelectSubset<T, CommentCookbookFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__CommentCookbookClient<
			$Result.GetResult<
				Prisma.$CommentCookbookPayload<ExtArgs>,
				T,
				'findFirstOrThrow',
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more CommentCookbooks that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CommentCookbookFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all CommentCookbooks
		 * const commentCookbooks = await prisma.commentCookbook.findMany()
		 *
		 * // Get first 10 CommentCookbooks
		 * const commentCookbooks = await prisma.commentCookbook.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const commentCookbookWithIdOnly = await prisma.commentCookbook.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends CommentCookbookFindManyArgs>(
			args?: SelectSubset<T, CommentCookbookFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<Prisma.$CommentCookbookPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
		>;

		/**
		 * Create a CommentCookbook.
		 * @param {CommentCookbookCreateArgs} args - Arguments to create a CommentCookbook.
		 * @example
		 * // Create one CommentCookbook
		 * const CommentCookbook = await prisma.commentCookbook.create({
		 *   data: {
		 *     // ... data to create a CommentCookbook
		 *   }
		 * })
		 *
		 */
		create<T extends CommentCookbookCreateArgs>(
			args: SelectSubset<T, CommentCookbookCreateArgs<ExtArgs>>,
		): Prisma__CommentCookbookClient<
			$Result.GetResult<Prisma.$CommentCookbookPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many CommentCookbooks.
		 * @param {CommentCookbookCreateManyArgs} args - Arguments to create many CommentCookbooks.
		 * @example
		 * // Create many CommentCookbooks
		 * const commentCookbook = await prisma.commentCookbook.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends CommentCookbookCreateManyArgs>(
			args?: SelectSubset<T, CommentCookbookCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create many CommentCookbooks and returns the data saved in the database.
		 * @param {CommentCookbookCreateManyAndReturnArgs} args - Arguments to create many CommentCookbooks.
		 * @example
		 * // Create many CommentCookbooks
		 * const commentCookbook = await prisma.commentCookbook.createManyAndReturn({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Create many CommentCookbooks and only return the `id`
		 * const commentCookbookWithIdOnly = await prisma.commentCookbook.createManyAndReturn({
		 *   select: { id: true },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		createManyAndReturn<T extends CommentCookbookCreateManyAndReturnArgs>(
			args?: SelectSubset<T, CommentCookbookCreateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$CommentCookbookPayload<ExtArgs>,
				T,
				'createManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Delete a CommentCookbook.
		 * @param {CommentCookbookDeleteArgs} args - Arguments to delete one CommentCookbook.
		 * @example
		 * // Delete one CommentCookbook
		 * const CommentCookbook = await prisma.commentCookbook.delete({
		 *   where: {
		 *     // ... filter to delete one CommentCookbook
		 *   }
		 * })
		 *
		 */
		delete<T extends CommentCookbookDeleteArgs>(
			args: SelectSubset<T, CommentCookbookDeleteArgs<ExtArgs>>,
		): Prisma__CommentCookbookClient<
			$Result.GetResult<Prisma.$CommentCookbookPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one CommentCookbook.
		 * @param {CommentCookbookUpdateArgs} args - Arguments to update one CommentCookbook.
		 * @example
		 * // Update one CommentCookbook
		 * const commentCookbook = await prisma.commentCookbook.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends CommentCookbookUpdateArgs>(
			args: SelectSubset<T, CommentCookbookUpdateArgs<ExtArgs>>,
		): Prisma__CommentCookbookClient<
			$Result.GetResult<Prisma.$CommentCookbookPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more CommentCookbooks.
		 * @param {CommentCookbookDeleteManyArgs} args - Arguments to filter CommentCookbooks to delete.
		 * @example
		 * // Delete a few CommentCookbooks
		 * const { count } = await prisma.commentCookbook.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends CommentCookbookDeleteManyArgs>(
			args?: SelectSubset<T, CommentCookbookDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more CommentCookbooks.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CommentCookbookUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many CommentCookbooks
		 * const commentCookbook = await prisma.commentCookbook.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends CommentCookbookUpdateManyArgs>(
			args: SelectSubset<T, CommentCookbookUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more CommentCookbooks and returns the data updated in the database.
		 * @param {CommentCookbookUpdateManyAndReturnArgs} args - Arguments to update many CommentCookbooks.
		 * @example
		 * // Update many CommentCookbooks
		 * const commentCookbook = await prisma.commentCookbook.updateManyAndReturn({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 * // Update zero or more CommentCookbooks and only return the `id`
		 * const commentCookbookWithIdOnly = await prisma.commentCookbook.updateManyAndReturn({
		 *   select: { id: true },
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 *
		 */
		updateManyAndReturn<T extends CommentCookbookUpdateManyAndReturnArgs>(
			args: SelectSubset<T, CommentCookbookUpdateManyAndReturnArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$CommentCookbookPayload<ExtArgs>,
				T,
				'updateManyAndReturn',
				GlobalOmitOptions
			>
		>;

		/**
		 * Create or update one CommentCookbook.
		 * @param {CommentCookbookUpsertArgs} args - Arguments to update or create a CommentCookbook.
		 * @example
		 * // Update or create a CommentCookbook
		 * const commentCookbook = await prisma.commentCookbook.upsert({
		 *   create: {
		 *     // ... data to create a CommentCookbook
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the CommentCookbook we want to update
		 *   }
		 * })
		 */
		upsert<T extends CommentCookbookUpsertArgs>(
			args: SelectSubset<T, CommentCookbookUpsertArgs<ExtArgs>>,
		): Prisma__CommentCookbookClient<
			$Result.GetResult<Prisma.$CommentCookbookPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Count the number of CommentCookbooks.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CommentCookbookCountArgs} args - Arguments to filter CommentCookbooks to count.
		 * @example
		 * // Count the number of CommentCookbooks
		 * const count = await prisma.commentCookbook.count({
		 *   where: {
		 *     // ... the filter for the CommentCookbooks we want to count
		 *   }
		 * })
		 **/
		count<T extends CommentCookbookCountArgs>(
			args?: Subset<T, CommentCookbookCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<'select', any>
				? T['select'] extends true
					? number
					: GetScalarType<T['select'], CommentCookbookCountAggregateOutputType>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a CommentCookbook.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CommentCookbookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
		 * @example
		 * // Ordered by age ascending
		 * // Where email contains prisma.io
		 * // Limited to the 10 users
		 * const aggregations = await prisma.user.aggregate({
		 *   _avg: {
		 *     age: true,
		 *   },
		 *   where: {
		 *     email: {
		 *       contains: "prisma.io",
		 *     },
		 *   },
		 *   orderBy: {
		 *     age: "asc",
		 *   },
		 *   take: 10,
		 * })
		 **/
		aggregate<T extends CommentCookbookAggregateArgs>(
			args: Subset<T, CommentCookbookAggregateArgs>,
		): Prisma.PrismaPromise<GetCommentCookbookAggregateType<T>>;

		/**
		 * Group by CommentCookbook.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {CommentCookbookGroupByArgs} args - Group by arguments.
		 * @example
		 * // Group by city, order by createdAt, get count
		 * const result = await prisma.user.groupBy({
		 *   by: ['city', 'createdAt'],
		 *   orderBy: {
		 *     createdAt: true
		 *   },
		 *   _count: {
		 *     _all: true
		 *   },
		 * })
		 *
		 **/
		groupBy<
			T extends CommentCookbookGroupByArgs,
			HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: CommentCookbookGroupByArgs['orderBy'] }
				: { orderBy?: CommentCookbookGroupByArgs['orderBy'] },
			OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
			ByFields extends MaybeTupleToUnion<T['by']>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T['having']>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T['by'] extends never[] ? True : False,
			InputErrors extends ByEmpty extends True
				? `Error: "by" must not be empty.`
				: HavingValid extends False
					? {
							[P in HavingFields]: P extends ByFields
								? never
								: P extends string
									? `Error: Field "${P}" used in "having" needs to be provided in "by".`
									: [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
						}[HavingFields]
					: 'take' extends Keys<T>
						? 'orderBy' extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: 'skip' extends Keys<T>
							? 'orderBy' extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, CommentCookbookGroupByArgs, OrderByArg> & InputErrors,
		): {} extends InputErrors
			? GetCommentCookbookGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the CommentCookbook model
		 */
		readonly fields: CommentCookbookFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for CommentCookbook.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__CommentCookbookClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: 'PrismaPromise';
		cookbook<T extends CommentCookbook$cookbookArgs<ExtArgs> = {}>(
			args?: Subset<T, CommentCookbook$cookbookArgs<ExtArgs>>,
		): Prisma__CookbookClient<
			$Result.GetResult<
				Prisma.$CookbookPayload<ExtArgs>,
				T,
				'findUniqueOrThrow',
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
			onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the CommentCookbook model
	 */
	interface CommentCookbookFieldRefs {
		readonly id: FieldRef<'CommentCookbook', 'String'>;
		readonly description: FieldRef<'CommentCookbook', 'String'>;
		readonly createdAt: FieldRef<'CommentCookbook', 'DateTime'>;
		readonly updatedAt: FieldRef<'CommentCookbook', 'DateTime'>;
		readonly cookbook_id: FieldRef<'CommentCookbook', 'String'>;
	}

	// Custom InputTypes
	/**
	 * CommentCookbook findUnique
	 */
	export type CommentCookbookFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentCookbook
		 */
		select?: CommentCookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentCookbook
		 */
		omit?: CommentCookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentCookbookInclude<ExtArgs> | null;
		/**
		 * Filter, which CommentCookbook to fetch.
		 */
		where: CommentCookbookWhereUniqueInput;
	};

	/**
	 * CommentCookbook findUniqueOrThrow
	 */
	export type CommentCookbookFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentCookbook
		 */
		select?: CommentCookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentCookbook
		 */
		omit?: CommentCookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentCookbookInclude<ExtArgs> | null;
		/**
		 * Filter, which CommentCookbook to fetch.
		 */
		where: CommentCookbookWhereUniqueInput;
	};

	/**
	 * CommentCookbook findFirst
	 */
	export type CommentCookbookFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentCookbook
		 */
		select?: CommentCookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentCookbook
		 */
		omit?: CommentCookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentCookbookInclude<ExtArgs> | null;
		/**
		 * Filter, which CommentCookbook to fetch.
		 */
		where?: CommentCookbookWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of CommentCookbooks to fetch.
		 */
		orderBy?: CommentCookbookOrderByWithRelationInput | CommentCookbookOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for CommentCookbooks.
		 */
		cursor?: CommentCookbookWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` CommentCookbooks from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` CommentCookbooks.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of CommentCookbooks.
		 */
		distinct?: CommentCookbookScalarFieldEnum | CommentCookbookScalarFieldEnum[];
	};

	/**
	 * CommentCookbook findFirstOrThrow
	 */
	export type CommentCookbookFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentCookbook
		 */
		select?: CommentCookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentCookbook
		 */
		omit?: CommentCookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentCookbookInclude<ExtArgs> | null;
		/**
		 * Filter, which CommentCookbook to fetch.
		 */
		where?: CommentCookbookWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of CommentCookbooks to fetch.
		 */
		orderBy?: CommentCookbookOrderByWithRelationInput | CommentCookbookOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for CommentCookbooks.
		 */
		cursor?: CommentCookbookWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` CommentCookbooks from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` CommentCookbooks.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of CommentCookbooks.
		 */
		distinct?: CommentCookbookScalarFieldEnum | CommentCookbookScalarFieldEnum[];
	};

	/**
	 * CommentCookbook findMany
	 */
	export type CommentCookbookFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentCookbook
		 */
		select?: CommentCookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentCookbook
		 */
		omit?: CommentCookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentCookbookInclude<ExtArgs> | null;
		/**
		 * Filter, which CommentCookbooks to fetch.
		 */
		where?: CommentCookbookWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of CommentCookbooks to fetch.
		 */
		orderBy?: CommentCookbookOrderByWithRelationInput | CommentCookbookOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing CommentCookbooks.
		 */
		cursor?: CommentCookbookWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` CommentCookbooks from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` CommentCookbooks.
		 */
		skip?: number;
		distinct?: CommentCookbookScalarFieldEnum | CommentCookbookScalarFieldEnum[];
	};

	/**
	 * CommentCookbook create
	 */
	export type CommentCookbookCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentCookbook
		 */
		select?: CommentCookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentCookbook
		 */
		omit?: CommentCookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentCookbookInclude<ExtArgs> | null;
		/**
		 * The data needed to create a CommentCookbook.
		 */
		data: XOR<CommentCookbookCreateInput, CommentCookbookUncheckedCreateInput>;
	};

	/**
	 * CommentCookbook createMany
	 */
	export type CommentCookbookCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many CommentCookbooks.
		 */
		data: CommentCookbookCreateManyInput | CommentCookbookCreateManyInput[];
		skipDuplicates?: boolean;
	};

	/**
	 * CommentCookbook createManyAndReturn
	 */
	export type CommentCookbookCreateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentCookbook
		 */
		select?: CommentCookbookSelectCreateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentCookbook
		 */
		omit?: CommentCookbookOmit<ExtArgs> | null;
		/**
		 * The data used to create many CommentCookbooks.
		 */
		data: CommentCookbookCreateManyInput | CommentCookbookCreateManyInput[];
		skipDuplicates?: boolean;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentCookbookIncludeCreateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * CommentCookbook update
	 */
	export type CommentCookbookUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentCookbook
		 */
		select?: CommentCookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentCookbook
		 */
		omit?: CommentCookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentCookbookInclude<ExtArgs> | null;
		/**
		 * The data needed to update a CommentCookbook.
		 */
		data: XOR<CommentCookbookUpdateInput, CommentCookbookUncheckedUpdateInput>;
		/**
		 * Choose, which CommentCookbook to update.
		 */
		where: CommentCookbookWhereUniqueInput;
	};

	/**
	 * CommentCookbook updateMany
	 */
	export type CommentCookbookUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update CommentCookbooks.
		 */
		data: XOR<CommentCookbookUpdateManyMutationInput, CommentCookbookUncheckedUpdateManyInput>;
		/**
		 * Filter which CommentCookbooks to update
		 */
		where?: CommentCookbookWhereInput;
		/**
		 * Limit how many CommentCookbooks to update.
		 */
		limit?: number;
	};

	/**
	 * CommentCookbook updateManyAndReturn
	 */
	export type CommentCookbookUpdateManyAndReturnArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentCookbook
		 */
		select?: CommentCookbookSelectUpdateManyAndReturn<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentCookbook
		 */
		omit?: CommentCookbookOmit<ExtArgs> | null;
		/**
		 * The data used to update CommentCookbooks.
		 */
		data: XOR<CommentCookbookUpdateManyMutationInput, CommentCookbookUncheckedUpdateManyInput>;
		/**
		 * Filter which CommentCookbooks to update
		 */
		where?: CommentCookbookWhereInput;
		/**
		 * Limit how many CommentCookbooks to update.
		 */
		limit?: number;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentCookbookIncludeUpdateManyAndReturn<ExtArgs> | null;
	};

	/**
	 * CommentCookbook upsert
	 */
	export type CommentCookbookUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentCookbook
		 */
		select?: CommentCookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentCookbook
		 */
		omit?: CommentCookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentCookbookInclude<ExtArgs> | null;
		/**
		 * The filter to search for the CommentCookbook to update in case it exists.
		 */
		where: CommentCookbookWhereUniqueInput;
		/**
		 * In case the CommentCookbook found by the `where` argument doesn't exist, create a new CommentCookbook with this data.
		 */
		create: XOR<CommentCookbookCreateInput, CommentCookbookUncheckedCreateInput>;
		/**
		 * In case the CommentCookbook was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<CommentCookbookUpdateInput, CommentCookbookUncheckedUpdateInput>;
	};

	/**
	 * CommentCookbook delete
	 */
	export type CommentCookbookDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentCookbook
		 */
		select?: CommentCookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentCookbook
		 */
		omit?: CommentCookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentCookbookInclude<ExtArgs> | null;
		/**
		 * Filter which CommentCookbook to delete.
		 */
		where: CommentCookbookWhereUniqueInput;
	};

	/**
	 * CommentCookbook deleteMany
	 */
	export type CommentCookbookDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which CommentCookbooks to delete
		 */
		where?: CommentCookbookWhereInput;
		/**
		 * Limit how many CommentCookbooks to delete.
		 */
		limit?: number;
	};

	/**
	 * CommentCookbook.cookbook
	 */
	export type CommentCookbook$cookbookArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the Cookbook
		 */
		select?: CookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the Cookbook
		 */
		omit?: CookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CookbookInclude<ExtArgs> | null;
		where?: CookbookWhereInput;
	};

	/**
	 * CommentCookbook without action
	 */
	export type CommentCookbookDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the CommentCookbook
		 */
		select?: CommentCookbookSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the CommentCookbook
		 */
		omit?: CommentCookbookOmit<ExtArgs> | null;
		/**
		 * Choose, which related nodes to fetch as well
		 */
		include?: CommentCookbookInclude<ExtArgs> | null;
	};

	/**
	 * Enums
	 */

	export const TransactionIsolationLevel: {
		ReadUncommitted: 'ReadUncommitted';
		ReadCommitted: 'ReadCommitted';
		RepeatableRead: 'RepeatableRead';
		Serializable: 'Serializable';
	};

	export type TransactionIsolationLevel =
		(typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

	export const UserScalarFieldEnum: {
		id: 'id';
		email: 'email';
		name: 'name';
		password: 'password';
		image: 'image';
		createdAt: 'createdAt';
		updatedAt: 'updatedAt';
	};

	export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

	export const RecipeScalarFieldEnum: {
		id: 'id';
		title: 'title';
		description: 'description';
		ingredients: 'ingredients';
		direction: 'direction';
		views: 'views';
		estimated_time: 'estimated_time';
		image: 'image';
		createdAt: 'createdAt';
		updatedAt: 'updatedAt';
		user_id: 'user_id';
	};

	export type RecipeScalarFieldEnum =
		(typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum];

	export const Recipe_LikesScalarFieldEnum: {
		id: 'id';
		recipe_id: 'recipe_id';
		user_id: 'user_id';
		createdAt: 'createdAt';
		updatedAt: 'updatedAt';
	};

	export type Recipe_LikesScalarFieldEnum =
		(typeof Recipe_LikesScalarFieldEnum)[keyof typeof Recipe_LikesScalarFieldEnum];

	export const CommentRecipeScalarFieldEnum: {
		id: 'id';
		description: 'description';
		createdAt: 'createdAt';
		updatedAt: 'updatedAt';
		recipe_id: 'recipe_id';
	};

	export type CommentRecipeScalarFieldEnum =
		(typeof CommentRecipeScalarFieldEnum)[keyof typeof CommentRecipeScalarFieldEnum];

	export const CookbookScalarFieldEnum: {
		id: 'id';
		title: 'title';
		description: 'description';
		likes: 'likes';
		image: 'image';
		createdAt: 'createdAt';
		updatedAt: 'updatedAt';
		user_id: 'user_id';
		recipe_id: 'recipe_id';
	};

	export type CookbookScalarFieldEnum =
		(typeof CookbookScalarFieldEnum)[keyof typeof CookbookScalarFieldEnum];

	export const Cookbook_LikesScalarFieldEnum: {
		id: 'id';
		cookbook_id: 'cookbook_id';
		user_id: 'user_id';
		createdAt: 'createdAt';
		updatedAt: 'updatedAt';
	};

	export type Cookbook_LikesScalarFieldEnum =
		(typeof Cookbook_LikesScalarFieldEnum)[keyof typeof Cookbook_LikesScalarFieldEnum];

	export const CommentCookbookScalarFieldEnum: {
		id: 'id';
		description: 'description';
		createdAt: 'createdAt';
		updatedAt: 'updatedAt';
		cookbook_id: 'cookbook_id';
	};

	export type CommentCookbookScalarFieldEnum =
		(typeof CommentCookbookScalarFieldEnum)[keyof typeof CommentCookbookScalarFieldEnum];

	export const SortOrder: {
		asc: 'asc';
		desc: 'desc';
	};

	export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

	export const QueryMode: {
		default: 'default';
		insensitive: 'insensitive';
	};

	export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

	export const NullsOrder: {
		first: 'first';
		last: 'last';
	};

	export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

	/**
	 * Field references
	 */

	/**
	 * Reference to a field of type 'String'
	 */
	export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

	/**
	 * Reference to a field of type 'String[]'
	 */
	export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

	/**
	 * Reference to a field of type 'DateTime'
	 */
	export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

	/**
	 * Reference to a field of type 'DateTime[]'
	 */
	export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		'DateTime[]'
	>;

	/**
	 * Reference to a field of type 'Int'
	 */
	export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

	/**
	 * Reference to a field of type 'Int[]'
	 */
	export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

	/**
	 * Reference to a field of type 'Float'
	 */
	export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

	/**
	 * Reference to a field of type 'Float[]'
	 */
	export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

	/**
	 * Deep Input Types
	 */

	export type UserWhereInput = {
		AND?: UserWhereInput | UserWhereInput[];
		OR?: UserWhereInput[];
		NOT?: UserWhereInput | UserWhereInput[];
		id?: StringFilter<'User'> | string;
		email?: StringFilter<'User'> | string;
		name?: StringNullableFilter<'User'> | string | null;
		password?: StringFilter<'User'> | string;
		image?: StringNullableFilter<'User'> | string | null;
		createdAt?: DateTimeFilter<'User'> | Date | string;
		updatedAt?: DateTimeFilter<'User'> | Date | string;
		recipe?: RecipeListRelationFilter;
		cookbook?: CookbookListRelationFilter;
		likes?: Recipe_LikesListRelationFilter;
		Cookbook_Likes?: Cookbook_LikesListRelationFilter;
	};

	export type UserOrderByWithRelationInput = {
		id?: SortOrder;
		email?: SortOrder;
		name?: SortOrderInput | SortOrder;
		password?: SortOrder;
		image?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		recipe?: RecipeOrderByRelationAggregateInput;
		cookbook?: CookbookOrderByRelationAggregateInput;
		likes?: Recipe_LikesOrderByRelationAggregateInput;
		Cookbook_Likes?: Cookbook_LikesOrderByRelationAggregateInput;
	};

	export type UserWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			email?: string;
			AND?: UserWhereInput | UserWhereInput[];
			OR?: UserWhereInput[];
			NOT?: UserWhereInput | UserWhereInput[];
			name?: StringNullableFilter<'User'> | string | null;
			password?: StringFilter<'User'> | string;
			image?: StringNullableFilter<'User'> | string | null;
			createdAt?: DateTimeFilter<'User'> | Date | string;
			updatedAt?: DateTimeFilter<'User'> | Date | string;
			recipe?: RecipeListRelationFilter;
			cookbook?: CookbookListRelationFilter;
			likes?: Recipe_LikesListRelationFilter;
			Cookbook_Likes?: Cookbook_LikesListRelationFilter;
		},
		'id' | 'email'
	>;

	export type UserOrderByWithAggregationInput = {
		id?: SortOrder;
		email?: SortOrder;
		name?: SortOrderInput | SortOrder;
		password?: SortOrder;
		image?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		_count?: UserCountOrderByAggregateInput;
		_max?: UserMaxOrderByAggregateInput;
		_min?: UserMinOrderByAggregateInput;
	};

	export type UserScalarWhereWithAggregatesInput = {
		AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
		OR?: UserScalarWhereWithAggregatesInput[];
		NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<'User'> | string;
		email?: StringWithAggregatesFilter<'User'> | string;
		name?: StringNullableWithAggregatesFilter<'User'> | string | null;
		password?: StringWithAggregatesFilter<'User'> | string;
		image?: StringNullableWithAggregatesFilter<'User'> | string | null;
		createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
	};

	export type RecipeWhereInput = {
		AND?: RecipeWhereInput | RecipeWhereInput[];
		OR?: RecipeWhereInput[];
		NOT?: RecipeWhereInput | RecipeWhereInput[];
		id?: StringFilter<'Recipe'> | string;
		title?: StringFilter<'Recipe'> | string;
		description?: StringNullableFilter<'Recipe'> | string | null;
		ingredients?: StringNullableListFilter<'Recipe'>;
		direction?: StringNullableListFilter<'Recipe'>;
		views?: IntFilter<'Recipe'> | number;
		estimated_time?: DateTimeFilter<'Recipe'> | Date | string;
		image?: StringFilter<'Recipe'> | string;
		createdAt?: DateTimeFilter<'Recipe'> | Date | string;
		updatedAt?: DateTimeFilter<'Recipe'> | Date | string;
		user_id?: StringNullableFilter<'Recipe'> | string | null;
		user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
		comment?: CommentRecipeListRelationFilter;
		cookbook?: CookbookListRelationFilter;
		likes?: Recipe_LikesListRelationFilter;
	};

	export type RecipeOrderByWithRelationInput = {
		id?: SortOrder;
		title?: SortOrder;
		description?: SortOrderInput | SortOrder;
		ingredients?: SortOrder;
		direction?: SortOrder;
		views?: SortOrder;
		estimated_time?: SortOrder;
		image?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		user_id?: SortOrderInput | SortOrder;
		user?: UserOrderByWithRelationInput;
		comment?: CommentRecipeOrderByRelationAggregateInput;
		cookbook?: CookbookOrderByRelationAggregateInput;
		likes?: Recipe_LikesOrderByRelationAggregateInput;
	};

	export type RecipeWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: RecipeWhereInput | RecipeWhereInput[];
			OR?: RecipeWhereInput[];
			NOT?: RecipeWhereInput | RecipeWhereInput[];
			title?: StringFilter<'Recipe'> | string;
			description?: StringNullableFilter<'Recipe'> | string | null;
			ingredients?: StringNullableListFilter<'Recipe'>;
			direction?: StringNullableListFilter<'Recipe'>;
			views?: IntFilter<'Recipe'> | number;
			estimated_time?: DateTimeFilter<'Recipe'> | Date | string;
			image?: StringFilter<'Recipe'> | string;
			createdAt?: DateTimeFilter<'Recipe'> | Date | string;
			updatedAt?: DateTimeFilter<'Recipe'> | Date | string;
			user_id?: StringNullableFilter<'Recipe'> | string | null;
			user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
			comment?: CommentRecipeListRelationFilter;
			cookbook?: CookbookListRelationFilter;
			likes?: Recipe_LikesListRelationFilter;
		},
		'id'
	>;

	export type RecipeOrderByWithAggregationInput = {
		id?: SortOrder;
		title?: SortOrder;
		description?: SortOrderInput | SortOrder;
		ingredients?: SortOrder;
		direction?: SortOrder;
		views?: SortOrder;
		estimated_time?: SortOrder;
		image?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		user_id?: SortOrderInput | SortOrder;
		_count?: RecipeCountOrderByAggregateInput;
		_avg?: RecipeAvgOrderByAggregateInput;
		_max?: RecipeMaxOrderByAggregateInput;
		_min?: RecipeMinOrderByAggregateInput;
		_sum?: RecipeSumOrderByAggregateInput;
	};

	export type RecipeScalarWhereWithAggregatesInput = {
		AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[];
		OR?: RecipeScalarWhereWithAggregatesInput[];
		NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<'Recipe'> | string;
		title?: StringWithAggregatesFilter<'Recipe'> | string;
		description?: StringNullableWithAggregatesFilter<'Recipe'> | string | null;
		ingredients?: StringNullableListFilter<'Recipe'>;
		direction?: StringNullableListFilter<'Recipe'>;
		views?: IntWithAggregatesFilter<'Recipe'> | number;
		estimated_time?: DateTimeWithAggregatesFilter<'Recipe'> | Date | string;
		image?: StringWithAggregatesFilter<'Recipe'> | string;
		createdAt?: DateTimeWithAggregatesFilter<'Recipe'> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<'Recipe'> | Date | string;
		user_id?: StringNullableWithAggregatesFilter<'Recipe'> | string | null;
	};

	export type Recipe_LikesWhereInput = {
		AND?: Recipe_LikesWhereInput | Recipe_LikesWhereInput[];
		OR?: Recipe_LikesWhereInput[];
		NOT?: Recipe_LikesWhereInput | Recipe_LikesWhereInput[];
		id?: StringFilter<'Recipe_Likes'> | string;
		recipe_id?: StringNullableFilter<'Recipe_Likes'> | string | null;
		user_id?: StringNullableFilter<'Recipe_Likes'> | string | null;
		createdAt?: DateTimeFilter<'Recipe_Likes'> | Date | string;
		updatedAt?: DateTimeFilter<'Recipe_Likes'> | Date | string;
		recipe?: XOR<RecipeNullableScalarRelationFilter, RecipeWhereInput> | null;
		user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
	};

	export type Recipe_LikesOrderByWithRelationInput = {
		id?: SortOrder;
		recipe_id?: SortOrderInput | SortOrder;
		user_id?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		recipe?: RecipeOrderByWithRelationInput;
		user?: UserOrderByWithRelationInput;
	};

	export type Recipe_LikesWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: Recipe_LikesWhereInput | Recipe_LikesWhereInput[];
			OR?: Recipe_LikesWhereInput[];
			NOT?: Recipe_LikesWhereInput | Recipe_LikesWhereInput[];
			recipe_id?: StringNullableFilter<'Recipe_Likes'> | string | null;
			user_id?: StringNullableFilter<'Recipe_Likes'> | string | null;
			createdAt?: DateTimeFilter<'Recipe_Likes'> | Date | string;
			updatedAt?: DateTimeFilter<'Recipe_Likes'> | Date | string;
			recipe?: XOR<RecipeNullableScalarRelationFilter, RecipeWhereInput> | null;
			user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
		},
		'id'
	>;

	export type Recipe_LikesOrderByWithAggregationInput = {
		id?: SortOrder;
		recipe_id?: SortOrderInput | SortOrder;
		user_id?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		_count?: Recipe_LikesCountOrderByAggregateInput;
		_max?: Recipe_LikesMaxOrderByAggregateInput;
		_min?: Recipe_LikesMinOrderByAggregateInput;
	};

	export type Recipe_LikesScalarWhereWithAggregatesInput = {
		AND?: Recipe_LikesScalarWhereWithAggregatesInput | Recipe_LikesScalarWhereWithAggregatesInput[];
		OR?: Recipe_LikesScalarWhereWithAggregatesInput[];
		NOT?: Recipe_LikesScalarWhereWithAggregatesInput | Recipe_LikesScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<'Recipe_Likes'> | string;
		recipe_id?: StringNullableWithAggregatesFilter<'Recipe_Likes'> | string | null;
		user_id?: StringNullableWithAggregatesFilter<'Recipe_Likes'> | string | null;
		createdAt?: DateTimeWithAggregatesFilter<'Recipe_Likes'> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<'Recipe_Likes'> | Date | string;
	};

	export type CommentRecipeWhereInput = {
		AND?: CommentRecipeWhereInput | CommentRecipeWhereInput[];
		OR?: CommentRecipeWhereInput[];
		NOT?: CommentRecipeWhereInput | CommentRecipeWhereInput[];
		id?: StringFilter<'CommentRecipe'> | string;
		description?: StringFilter<'CommentRecipe'> | string;
		createdAt?: DateTimeFilter<'CommentRecipe'> | Date | string;
		updatedAt?: DateTimeFilter<'CommentRecipe'> | Date | string;
		recipe_id?: StringNullableFilter<'CommentRecipe'> | string | null;
		recipe?: XOR<RecipeNullableScalarRelationFilter, RecipeWhereInput> | null;
	};

	export type CommentRecipeOrderByWithRelationInput = {
		id?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		recipe_id?: SortOrderInput | SortOrder;
		recipe?: RecipeOrderByWithRelationInput;
	};

	export type CommentRecipeWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: CommentRecipeWhereInput | CommentRecipeWhereInput[];
			OR?: CommentRecipeWhereInput[];
			NOT?: CommentRecipeWhereInput | CommentRecipeWhereInput[];
			description?: StringFilter<'CommentRecipe'> | string;
			createdAt?: DateTimeFilter<'CommentRecipe'> | Date | string;
			updatedAt?: DateTimeFilter<'CommentRecipe'> | Date | string;
			recipe_id?: StringNullableFilter<'CommentRecipe'> | string | null;
			recipe?: XOR<RecipeNullableScalarRelationFilter, RecipeWhereInput> | null;
		},
		'id'
	>;

	export type CommentRecipeOrderByWithAggregationInput = {
		id?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		recipe_id?: SortOrderInput | SortOrder;
		_count?: CommentRecipeCountOrderByAggregateInput;
		_max?: CommentRecipeMaxOrderByAggregateInput;
		_min?: CommentRecipeMinOrderByAggregateInput;
	};

	export type CommentRecipeScalarWhereWithAggregatesInput = {
		AND?:
			| CommentRecipeScalarWhereWithAggregatesInput
			| CommentRecipeScalarWhereWithAggregatesInput[];
		OR?: CommentRecipeScalarWhereWithAggregatesInput[];
		NOT?:
			| CommentRecipeScalarWhereWithAggregatesInput
			| CommentRecipeScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<'CommentRecipe'> | string;
		description?: StringWithAggregatesFilter<'CommentRecipe'> | string;
		createdAt?: DateTimeWithAggregatesFilter<'CommentRecipe'> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<'CommentRecipe'> | Date | string;
		recipe_id?: StringNullableWithAggregatesFilter<'CommentRecipe'> | string | null;
	};

	export type CookbookWhereInput = {
		AND?: CookbookWhereInput | CookbookWhereInput[];
		OR?: CookbookWhereInput[];
		NOT?: CookbookWhereInput | CookbookWhereInput[];
		id?: StringFilter<'Cookbook'> | string;
		title?: StringFilter<'Cookbook'> | string;
		description?: StringNullableFilter<'Cookbook'> | string | null;
		likes?: IntFilter<'Cookbook'> | number;
		image?: StringFilter<'Cookbook'> | string;
		createdAt?: DateTimeFilter<'Cookbook'> | Date | string;
		updatedAt?: DateTimeFilter<'Cookbook'> | Date | string;
		user_id?: StringNullableFilter<'Cookbook'> | string | null;
		recipe_id?: StringNullableFilter<'Cookbook'> | string | null;
		user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
		recipe?: XOR<RecipeNullableScalarRelationFilter, RecipeWhereInput> | null;
		commentCookbook?: CommentCookbookListRelationFilter;
		Cookbook_Likes?: Cookbook_LikesListRelationFilter;
	};

	export type CookbookOrderByWithRelationInput = {
		id?: SortOrder;
		title?: SortOrder;
		description?: SortOrderInput | SortOrder;
		likes?: SortOrder;
		image?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		user_id?: SortOrderInput | SortOrder;
		recipe_id?: SortOrderInput | SortOrder;
		user?: UserOrderByWithRelationInput;
		recipe?: RecipeOrderByWithRelationInput;
		commentCookbook?: CommentCookbookOrderByRelationAggregateInput;
		Cookbook_Likes?: Cookbook_LikesOrderByRelationAggregateInput;
	};

	export type CookbookWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: CookbookWhereInput | CookbookWhereInput[];
			OR?: CookbookWhereInput[];
			NOT?: CookbookWhereInput | CookbookWhereInput[];
			title?: StringFilter<'Cookbook'> | string;
			description?: StringNullableFilter<'Cookbook'> | string | null;
			likes?: IntFilter<'Cookbook'> | number;
			image?: StringFilter<'Cookbook'> | string;
			createdAt?: DateTimeFilter<'Cookbook'> | Date | string;
			updatedAt?: DateTimeFilter<'Cookbook'> | Date | string;
			user_id?: StringNullableFilter<'Cookbook'> | string | null;
			recipe_id?: StringNullableFilter<'Cookbook'> | string | null;
			user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
			recipe?: XOR<RecipeNullableScalarRelationFilter, RecipeWhereInput> | null;
			commentCookbook?: CommentCookbookListRelationFilter;
			Cookbook_Likes?: Cookbook_LikesListRelationFilter;
		},
		'id'
	>;

	export type CookbookOrderByWithAggregationInput = {
		id?: SortOrder;
		title?: SortOrder;
		description?: SortOrderInput | SortOrder;
		likes?: SortOrder;
		image?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		user_id?: SortOrderInput | SortOrder;
		recipe_id?: SortOrderInput | SortOrder;
		_count?: CookbookCountOrderByAggregateInput;
		_avg?: CookbookAvgOrderByAggregateInput;
		_max?: CookbookMaxOrderByAggregateInput;
		_min?: CookbookMinOrderByAggregateInput;
		_sum?: CookbookSumOrderByAggregateInput;
	};

	export type CookbookScalarWhereWithAggregatesInput = {
		AND?: CookbookScalarWhereWithAggregatesInput | CookbookScalarWhereWithAggregatesInput[];
		OR?: CookbookScalarWhereWithAggregatesInput[];
		NOT?: CookbookScalarWhereWithAggregatesInput | CookbookScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<'Cookbook'> | string;
		title?: StringWithAggregatesFilter<'Cookbook'> | string;
		description?: StringNullableWithAggregatesFilter<'Cookbook'> | string | null;
		likes?: IntWithAggregatesFilter<'Cookbook'> | number;
		image?: StringWithAggregatesFilter<'Cookbook'> | string;
		createdAt?: DateTimeWithAggregatesFilter<'Cookbook'> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<'Cookbook'> | Date | string;
		user_id?: StringNullableWithAggregatesFilter<'Cookbook'> | string | null;
		recipe_id?: StringNullableWithAggregatesFilter<'Cookbook'> | string | null;
	};

	export type Cookbook_LikesWhereInput = {
		AND?: Cookbook_LikesWhereInput | Cookbook_LikesWhereInput[];
		OR?: Cookbook_LikesWhereInput[];
		NOT?: Cookbook_LikesWhereInput | Cookbook_LikesWhereInput[];
		id?: StringFilter<'Cookbook_Likes'> | string;
		cookbook_id?: StringNullableFilter<'Cookbook_Likes'> | string | null;
		user_id?: StringNullableFilter<'Cookbook_Likes'> | string | null;
		createdAt?: DateTimeFilter<'Cookbook_Likes'> | Date | string;
		updatedAt?: DateTimeFilter<'Cookbook_Likes'> | Date | string;
		cookbook?: XOR<CookbookNullableScalarRelationFilter, CookbookWhereInput> | null;
		user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
	};

	export type Cookbook_LikesOrderByWithRelationInput = {
		id?: SortOrder;
		cookbook_id?: SortOrderInput | SortOrder;
		user_id?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		cookbook?: CookbookOrderByWithRelationInput;
		user?: UserOrderByWithRelationInput;
	};

	export type Cookbook_LikesWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: Cookbook_LikesWhereInput | Cookbook_LikesWhereInput[];
			OR?: Cookbook_LikesWhereInput[];
			NOT?: Cookbook_LikesWhereInput | Cookbook_LikesWhereInput[];
			cookbook_id?: StringNullableFilter<'Cookbook_Likes'> | string | null;
			user_id?: StringNullableFilter<'Cookbook_Likes'> | string | null;
			createdAt?: DateTimeFilter<'Cookbook_Likes'> | Date | string;
			updatedAt?: DateTimeFilter<'Cookbook_Likes'> | Date | string;
			cookbook?: XOR<CookbookNullableScalarRelationFilter, CookbookWhereInput> | null;
			user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null;
		},
		'id'
	>;

	export type Cookbook_LikesOrderByWithAggregationInput = {
		id?: SortOrder;
		cookbook_id?: SortOrderInput | SortOrder;
		user_id?: SortOrderInput | SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		_count?: Cookbook_LikesCountOrderByAggregateInput;
		_max?: Cookbook_LikesMaxOrderByAggregateInput;
		_min?: Cookbook_LikesMinOrderByAggregateInput;
	};

	export type Cookbook_LikesScalarWhereWithAggregatesInput = {
		AND?:
			| Cookbook_LikesScalarWhereWithAggregatesInput
			| Cookbook_LikesScalarWhereWithAggregatesInput[];
		OR?: Cookbook_LikesScalarWhereWithAggregatesInput[];
		NOT?:
			| Cookbook_LikesScalarWhereWithAggregatesInput
			| Cookbook_LikesScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<'Cookbook_Likes'> | string;
		cookbook_id?: StringNullableWithAggregatesFilter<'Cookbook_Likes'> | string | null;
		user_id?: StringNullableWithAggregatesFilter<'Cookbook_Likes'> | string | null;
		createdAt?: DateTimeWithAggregatesFilter<'Cookbook_Likes'> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<'Cookbook_Likes'> | Date | string;
	};

	export type CommentCookbookWhereInput = {
		AND?: CommentCookbookWhereInput | CommentCookbookWhereInput[];
		OR?: CommentCookbookWhereInput[];
		NOT?: CommentCookbookWhereInput | CommentCookbookWhereInput[];
		id?: StringFilter<'CommentCookbook'> | string;
		description?: StringFilter<'CommentCookbook'> | string;
		createdAt?: DateTimeFilter<'CommentCookbook'> | Date | string;
		updatedAt?: DateTimeFilter<'CommentCookbook'> | Date | string;
		cookbook_id?: StringNullableFilter<'CommentCookbook'> | string | null;
		cookbook?: XOR<CookbookNullableScalarRelationFilter, CookbookWhereInput> | null;
	};

	export type CommentCookbookOrderByWithRelationInput = {
		id?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		cookbook_id?: SortOrderInput | SortOrder;
		cookbook?: CookbookOrderByWithRelationInput;
	};

	export type CommentCookbookWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string;
			AND?: CommentCookbookWhereInput | CommentCookbookWhereInput[];
			OR?: CommentCookbookWhereInput[];
			NOT?: CommentCookbookWhereInput | CommentCookbookWhereInput[];
			description?: StringFilter<'CommentCookbook'> | string;
			createdAt?: DateTimeFilter<'CommentCookbook'> | Date | string;
			updatedAt?: DateTimeFilter<'CommentCookbook'> | Date | string;
			cookbook_id?: StringNullableFilter<'CommentCookbook'> | string | null;
			cookbook?: XOR<CookbookNullableScalarRelationFilter, CookbookWhereInput> | null;
		},
		'id'
	>;

	export type CommentCookbookOrderByWithAggregationInput = {
		id?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		cookbook_id?: SortOrderInput | SortOrder;
		_count?: CommentCookbookCountOrderByAggregateInput;
		_max?: CommentCookbookMaxOrderByAggregateInput;
		_min?: CommentCookbookMinOrderByAggregateInput;
	};

	export type CommentCookbookScalarWhereWithAggregatesInput = {
		AND?:
			| CommentCookbookScalarWhereWithAggregatesInput
			| CommentCookbookScalarWhereWithAggregatesInput[];
		OR?: CommentCookbookScalarWhereWithAggregatesInput[];
		NOT?:
			| CommentCookbookScalarWhereWithAggregatesInput
			| CommentCookbookScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<'CommentCookbook'> | string;
		description?: StringWithAggregatesFilter<'CommentCookbook'> | string;
		createdAt?: DateTimeWithAggregatesFilter<'CommentCookbook'> | Date | string;
		updatedAt?: DateTimeWithAggregatesFilter<'CommentCookbook'> | Date | string;
		cookbook_id?: StringNullableWithAggregatesFilter<'CommentCookbook'> | string | null;
	};

	export type UserCreateInput = {
		id?: string;
		email: string;
		name?: string | null;
		password: string;
		image?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		recipe?: RecipeCreateNestedManyWithoutUserInput;
		cookbook?: CookbookCreateNestedManyWithoutUserInput;
		likes?: Recipe_LikesCreateNestedManyWithoutUserInput;
		Cookbook_Likes?: Cookbook_LikesCreateNestedManyWithoutUserInput;
	};

	export type UserUncheckedCreateInput = {
		id?: string;
		email: string;
		name?: string | null;
		password: string;
		image?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		recipe?: RecipeUncheckedCreateNestedManyWithoutUserInput;
		cookbook?: CookbookUncheckedCreateNestedManyWithoutUserInput;
		likes?: Recipe_LikesUncheckedCreateNestedManyWithoutUserInput;
		Cookbook_Likes?: Cookbook_LikesUncheckedCreateNestedManyWithoutUserInput;
	};

	export type UserUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		name?: NullableStringFieldUpdateOperationsInput | string | null;
		password?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		recipe?: RecipeUpdateManyWithoutUserNestedInput;
		cookbook?: CookbookUpdateManyWithoutUserNestedInput;
		likes?: Recipe_LikesUpdateManyWithoutUserNestedInput;
		Cookbook_Likes?: Cookbook_LikesUpdateManyWithoutUserNestedInput;
	};

	export type UserUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		name?: NullableStringFieldUpdateOperationsInput | string | null;
		password?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		recipe?: RecipeUncheckedUpdateManyWithoutUserNestedInput;
		cookbook?: CookbookUncheckedUpdateManyWithoutUserNestedInput;
		likes?: Recipe_LikesUncheckedUpdateManyWithoutUserNestedInput;
		Cookbook_Likes?: Cookbook_LikesUncheckedUpdateManyWithoutUserNestedInput;
	};

	export type UserCreateManyInput = {
		id?: string;
		email: string;
		name?: string | null;
		password: string;
		image?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type UserUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		name?: NullableStringFieldUpdateOperationsInput | string | null;
		password?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type UserUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		name?: NullableStringFieldUpdateOperationsInput | string | null;
		password?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type RecipeCreateInput = {
		id?: string;
		title: string;
		description?: string | null;
		ingredients?: RecipeCreateingredientsInput | string[];
		direction?: RecipeCreatedirectionInput | string[];
		views?: number;
		estimated_time: Date | string;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user?: UserCreateNestedOneWithoutRecipeInput;
		comment?: CommentRecipeCreateNestedManyWithoutRecipeInput;
		cookbook?: CookbookCreateNestedManyWithoutRecipeInput;
		likes?: Recipe_LikesCreateNestedManyWithoutRecipeInput;
	};

	export type RecipeUncheckedCreateInput = {
		id?: string;
		title: string;
		description?: string | null;
		ingredients?: RecipeCreateingredientsInput | string[];
		direction?: RecipeCreatedirectionInput | string[];
		views?: number;
		estimated_time: Date | string;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user_id?: string | null;
		comment?: CommentRecipeUncheckedCreateNestedManyWithoutRecipeInput;
		cookbook?: CookbookUncheckedCreateNestedManyWithoutRecipeInput;
		likes?: Recipe_LikesUncheckedCreateNestedManyWithoutRecipeInput;
	};

	export type RecipeUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		ingredients?: RecipeUpdateingredientsInput | string[];
		direction?: RecipeUpdatedirectionInput | string[];
		views?: IntFieldUpdateOperationsInput | number;
		estimated_time?: DateTimeFieldUpdateOperationsInput | Date | string;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneWithoutRecipeNestedInput;
		comment?: CommentRecipeUpdateManyWithoutRecipeNestedInput;
		cookbook?: CookbookUpdateManyWithoutRecipeNestedInput;
		likes?: Recipe_LikesUpdateManyWithoutRecipeNestedInput;
	};

	export type RecipeUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		ingredients?: RecipeUpdateingredientsInput | string[];
		direction?: RecipeUpdatedirectionInput | string[];
		views?: IntFieldUpdateOperationsInput | number;
		estimated_time?: DateTimeFieldUpdateOperationsInput | Date | string;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		comment?: CommentRecipeUncheckedUpdateManyWithoutRecipeNestedInput;
		cookbook?: CookbookUncheckedUpdateManyWithoutRecipeNestedInput;
		likes?: Recipe_LikesUncheckedUpdateManyWithoutRecipeNestedInput;
	};

	export type RecipeCreateManyInput = {
		id?: string;
		title: string;
		description?: string | null;
		ingredients?: RecipeCreateingredientsInput | string[];
		direction?: RecipeCreatedirectionInput | string[];
		views?: number;
		estimated_time: Date | string;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user_id?: string | null;
	};

	export type RecipeUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		ingredients?: RecipeUpdateingredientsInput | string[];
		direction?: RecipeUpdatedirectionInput | string[];
		views?: IntFieldUpdateOperationsInput | number;
		estimated_time?: DateTimeFieldUpdateOperationsInput | Date | string;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type RecipeUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		ingredients?: RecipeUpdateingredientsInput | string[];
		direction?: RecipeUpdatedirectionInput | string[];
		views?: IntFieldUpdateOperationsInput | number;
		estimated_time?: DateTimeFieldUpdateOperationsInput | Date | string;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
	};

	export type Recipe_LikesCreateInput = {
		id?: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		recipe?: RecipeCreateNestedOneWithoutLikesInput;
		user?: UserCreateNestedOneWithoutLikesInput;
	};

	export type Recipe_LikesUncheckedCreateInput = {
		id?: string;
		recipe_id?: string | null;
		user_id?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type Recipe_LikesUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		recipe?: RecipeUpdateOneWithoutLikesNestedInput;
		user?: UserUpdateOneWithoutLikesNestedInput;
	};

	export type Recipe_LikesUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		recipe_id?: NullableStringFieldUpdateOperationsInput | string | null;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type Recipe_LikesCreateManyInput = {
		id?: string;
		recipe_id?: string | null;
		user_id?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type Recipe_LikesUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type Recipe_LikesUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		recipe_id?: NullableStringFieldUpdateOperationsInput | string | null;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type CommentRecipeCreateInput = {
		id?: string;
		description: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		recipe?: RecipeCreateNestedOneWithoutCommentInput;
	};

	export type CommentRecipeUncheckedCreateInput = {
		id?: string;
		description: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		recipe_id?: string | null;
	};

	export type CommentRecipeUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		recipe?: RecipeUpdateOneWithoutCommentNestedInput;
	};

	export type CommentRecipeUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		recipe_id?: NullableStringFieldUpdateOperationsInput | string | null;
	};

	export type CommentRecipeCreateManyInput = {
		id?: string;
		description: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		recipe_id?: string | null;
	};

	export type CommentRecipeUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type CommentRecipeUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		recipe_id?: NullableStringFieldUpdateOperationsInput | string | null;
	};

	export type CookbookCreateInput = {
		id?: string;
		title: string;
		description?: string | null;
		likes?: number;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user?: UserCreateNestedOneWithoutCookbookInput;
		recipe?: RecipeCreateNestedOneWithoutCookbookInput;
		commentCookbook?: CommentCookbookCreateNestedManyWithoutCookbookInput;
		Cookbook_Likes?: Cookbook_LikesCreateNestedManyWithoutCookbookInput;
	};

	export type CookbookUncheckedCreateInput = {
		id?: string;
		title: string;
		description?: string | null;
		likes?: number;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user_id?: string | null;
		recipe_id?: string | null;
		commentCookbook?: CommentCookbookUncheckedCreateNestedManyWithoutCookbookInput;
		Cookbook_Likes?: Cookbook_LikesUncheckedCreateNestedManyWithoutCookbookInput;
	};

	export type CookbookUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		likes?: IntFieldUpdateOperationsInput | number;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneWithoutCookbookNestedInput;
		recipe?: RecipeUpdateOneWithoutCookbookNestedInput;
		commentCookbook?: CommentCookbookUpdateManyWithoutCookbookNestedInput;
		Cookbook_Likes?: Cookbook_LikesUpdateManyWithoutCookbookNestedInput;
	};

	export type CookbookUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		likes?: IntFieldUpdateOperationsInput | number;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		recipe_id?: NullableStringFieldUpdateOperationsInput | string | null;
		commentCookbook?: CommentCookbookUncheckedUpdateManyWithoutCookbookNestedInput;
		Cookbook_Likes?: Cookbook_LikesUncheckedUpdateManyWithoutCookbookNestedInput;
	};

	export type CookbookCreateManyInput = {
		id?: string;
		title: string;
		description?: string | null;
		likes?: number;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user_id?: string | null;
		recipe_id?: string | null;
	};

	export type CookbookUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		likes?: IntFieldUpdateOperationsInput | number;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type CookbookUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		likes?: IntFieldUpdateOperationsInput | number;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		recipe_id?: NullableStringFieldUpdateOperationsInput | string | null;
	};

	export type Cookbook_LikesCreateInput = {
		id?: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		cookbook?: CookbookCreateNestedOneWithoutCookbook_LikesInput;
		user?: UserCreateNestedOneWithoutCookbook_LikesInput;
	};

	export type Cookbook_LikesUncheckedCreateInput = {
		id?: string;
		cookbook_id?: string | null;
		user_id?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type Cookbook_LikesUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		cookbook?: CookbookUpdateOneWithoutCookbook_LikesNestedInput;
		user?: UserUpdateOneWithoutCookbook_LikesNestedInput;
	};

	export type Cookbook_LikesUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		cookbook_id?: NullableStringFieldUpdateOperationsInput | string | null;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type Cookbook_LikesCreateManyInput = {
		id?: string;
		cookbook_id?: string | null;
		user_id?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type Cookbook_LikesUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type Cookbook_LikesUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		cookbook_id?: NullableStringFieldUpdateOperationsInput | string | null;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type CommentCookbookCreateInput = {
		id?: string;
		description: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		cookbook?: CookbookCreateNestedOneWithoutCommentCookbookInput;
	};

	export type CommentCookbookUncheckedCreateInput = {
		id?: string;
		description: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		cookbook_id?: string | null;
	};

	export type CommentCookbookUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		cookbook?: CookbookUpdateOneWithoutCommentCookbookNestedInput;
	};

	export type CommentCookbookUncheckedUpdateInput = {
		id?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		cookbook_id?: NullableStringFieldUpdateOperationsInput | string | null;
	};

	export type CommentCookbookCreateManyInput = {
		id?: string;
		description: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		cookbook_id?: string | null;
	};

	export type CommentCookbookUpdateManyMutationInput = {
		id?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type CommentCookbookUncheckedUpdateManyInput = {
		id?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		cookbook_id?: NullableStringFieldUpdateOperationsInput | string | null;
	};

	export type StringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringFilter<$PrismaModel> | string;
	};

	export type StringNullableFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringNullableFilter<$PrismaModel> | string | null;
	};

	export type DateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
	};

	export type RecipeListRelationFilter = {
		every?: RecipeWhereInput;
		some?: RecipeWhereInput;
		none?: RecipeWhereInput;
	};

	export type CookbookListRelationFilter = {
		every?: CookbookWhereInput;
		some?: CookbookWhereInput;
		none?: CookbookWhereInput;
	};

	export type Recipe_LikesListRelationFilter = {
		every?: Recipe_LikesWhereInput;
		some?: Recipe_LikesWhereInput;
		none?: Recipe_LikesWhereInput;
	};

	export type Cookbook_LikesListRelationFilter = {
		every?: Cookbook_LikesWhereInput;
		some?: Cookbook_LikesWhereInput;
		none?: Cookbook_LikesWhereInput;
	};

	export type SortOrderInput = {
		sort: SortOrder;
		nulls?: NullsOrder;
	};

	export type RecipeOrderByRelationAggregateInput = {
		_count?: SortOrder;
	};

	export type CookbookOrderByRelationAggregateInput = {
		_count?: SortOrder;
	};

	export type Recipe_LikesOrderByRelationAggregateInput = {
		_count?: SortOrder;
	};

	export type Cookbook_LikesOrderByRelationAggregateInput = {
		_count?: SortOrder;
	};

	export type UserCountOrderByAggregateInput = {
		id?: SortOrder;
		email?: SortOrder;
		name?: SortOrder;
		password?: SortOrder;
		image?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type UserMaxOrderByAggregateInput = {
		id?: SortOrder;
		email?: SortOrder;
		name?: SortOrder;
		password?: SortOrder;
		image?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type UserMinOrderByAggregateInput = {
		id?: SortOrder;
		email?: SortOrder;
		name?: SortOrder;
		password?: SortOrder;
		image?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type StringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedStringFilter<$PrismaModel>;
		_max?: NestedStringFilter<$PrismaModel>;
	};

	export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
		_count?: NestedIntNullableFilter<$PrismaModel>;
		_min?: NestedStringNullableFilter<$PrismaModel>;
		_max?: NestedStringNullableFilter<$PrismaModel>;
	};

	export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedDateTimeFilter<$PrismaModel>;
		_max?: NestedDateTimeFilter<$PrismaModel>;
	};

	export type StringNullableListFilter<$PrismaModel = never> = {
		equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		has?: string | StringFieldRefInput<$PrismaModel> | null;
		hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
		hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
		isEmpty?: boolean;
	};

	export type IntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntFilter<$PrismaModel> | number;
	};

	export type UserNullableScalarRelationFilter = {
		is?: UserWhereInput | null;
		isNot?: UserWhereInput | null;
	};

	export type CommentRecipeListRelationFilter = {
		every?: CommentRecipeWhereInput;
		some?: CommentRecipeWhereInput;
		none?: CommentRecipeWhereInput;
	};

	export type CommentRecipeOrderByRelationAggregateInput = {
		_count?: SortOrder;
	};

	export type RecipeCountOrderByAggregateInput = {
		id?: SortOrder;
		title?: SortOrder;
		description?: SortOrder;
		ingredients?: SortOrder;
		direction?: SortOrder;
		views?: SortOrder;
		estimated_time?: SortOrder;
		image?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		user_id?: SortOrder;
	};

	export type RecipeAvgOrderByAggregateInput = {
		views?: SortOrder;
	};

	export type RecipeMaxOrderByAggregateInput = {
		id?: SortOrder;
		title?: SortOrder;
		description?: SortOrder;
		views?: SortOrder;
		estimated_time?: SortOrder;
		image?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		user_id?: SortOrder;
	};

	export type RecipeMinOrderByAggregateInput = {
		id?: SortOrder;
		title?: SortOrder;
		description?: SortOrder;
		views?: SortOrder;
		estimated_time?: SortOrder;
		image?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		user_id?: SortOrder;
	};

	export type RecipeSumOrderByAggregateInput = {
		views?: SortOrder;
	};

	export type IntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedIntFilter<$PrismaModel>;
		_min?: NestedIntFilter<$PrismaModel>;
		_max?: NestedIntFilter<$PrismaModel>;
	};

	export type RecipeNullableScalarRelationFilter = {
		is?: RecipeWhereInput | null;
		isNot?: RecipeWhereInput | null;
	};

	export type Recipe_LikesCountOrderByAggregateInput = {
		id?: SortOrder;
		recipe_id?: SortOrder;
		user_id?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type Recipe_LikesMaxOrderByAggregateInput = {
		id?: SortOrder;
		recipe_id?: SortOrder;
		user_id?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type Recipe_LikesMinOrderByAggregateInput = {
		id?: SortOrder;
		recipe_id?: SortOrder;
		user_id?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type CommentRecipeCountOrderByAggregateInput = {
		id?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		recipe_id?: SortOrder;
	};

	export type CommentRecipeMaxOrderByAggregateInput = {
		id?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		recipe_id?: SortOrder;
	};

	export type CommentRecipeMinOrderByAggregateInput = {
		id?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		recipe_id?: SortOrder;
	};

	export type CommentCookbookListRelationFilter = {
		every?: CommentCookbookWhereInput;
		some?: CommentCookbookWhereInput;
		none?: CommentCookbookWhereInput;
	};

	export type CommentCookbookOrderByRelationAggregateInput = {
		_count?: SortOrder;
	};

	export type CookbookCountOrderByAggregateInput = {
		id?: SortOrder;
		title?: SortOrder;
		description?: SortOrder;
		likes?: SortOrder;
		image?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		user_id?: SortOrder;
		recipe_id?: SortOrder;
	};

	export type CookbookAvgOrderByAggregateInput = {
		likes?: SortOrder;
	};

	export type CookbookMaxOrderByAggregateInput = {
		id?: SortOrder;
		title?: SortOrder;
		description?: SortOrder;
		likes?: SortOrder;
		image?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		user_id?: SortOrder;
		recipe_id?: SortOrder;
	};

	export type CookbookMinOrderByAggregateInput = {
		id?: SortOrder;
		title?: SortOrder;
		description?: SortOrder;
		likes?: SortOrder;
		image?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		user_id?: SortOrder;
		recipe_id?: SortOrder;
	};

	export type CookbookSumOrderByAggregateInput = {
		likes?: SortOrder;
	};

	export type CookbookNullableScalarRelationFilter = {
		is?: CookbookWhereInput | null;
		isNot?: CookbookWhereInput | null;
	};

	export type Cookbook_LikesCountOrderByAggregateInput = {
		id?: SortOrder;
		cookbook_id?: SortOrder;
		user_id?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type Cookbook_LikesMaxOrderByAggregateInput = {
		id?: SortOrder;
		cookbook_id?: SortOrder;
		user_id?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type Cookbook_LikesMinOrderByAggregateInput = {
		id?: SortOrder;
		cookbook_id?: SortOrder;
		user_id?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
	};

	export type CommentCookbookCountOrderByAggregateInput = {
		id?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		cookbook_id?: SortOrder;
	};

	export type CommentCookbookMaxOrderByAggregateInput = {
		id?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		cookbook_id?: SortOrder;
	};

	export type CommentCookbookMinOrderByAggregateInput = {
		id?: SortOrder;
		description?: SortOrder;
		createdAt?: SortOrder;
		updatedAt?: SortOrder;
		cookbook_id?: SortOrder;
	};

	export type RecipeCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput>
			| RecipeCreateWithoutUserInput[]
			| RecipeUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| RecipeCreateOrConnectWithoutUserInput
			| RecipeCreateOrConnectWithoutUserInput[];
		createMany?: RecipeCreateManyUserInputEnvelope;
		connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[];
	};

	export type CookbookCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<CookbookCreateWithoutUserInput, CookbookUncheckedCreateWithoutUserInput>
			| CookbookCreateWithoutUserInput[]
			| CookbookUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| CookbookCreateOrConnectWithoutUserInput
			| CookbookCreateOrConnectWithoutUserInput[];
		createMany?: CookbookCreateManyUserInputEnvelope;
		connect?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
	};

	export type Recipe_LikesCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<Recipe_LikesCreateWithoutUserInput, Recipe_LikesUncheckedCreateWithoutUserInput>
			| Recipe_LikesCreateWithoutUserInput[]
			| Recipe_LikesUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| Recipe_LikesCreateOrConnectWithoutUserInput
			| Recipe_LikesCreateOrConnectWithoutUserInput[];
		createMany?: Recipe_LikesCreateManyUserInputEnvelope;
		connect?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
	};

	export type Cookbook_LikesCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<Cookbook_LikesCreateWithoutUserInput, Cookbook_LikesUncheckedCreateWithoutUserInput>
			| Cookbook_LikesCreateWithoutUserInput[]
			| Cookbook_LikesUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| Cookbook_LikesCreateOrConnectWithoutUserInput
			| Cookbook_LikesCreateOrConnectWithoutUserInput[];
		createMany?: Cookbook_LikesCreateManyUserInputEnvelope;
		connect?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
	};

	export type RecipeUncheckedCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput>
			| RecipeCreateWithoutUserInput[]
			| RecipeUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| RecipeCreateOrConnectWithoutUserInput
			| RecipeCreateOrConnectWithoutUserInput[];
		createMany?: RecipeCreateManyUserInputEnvelope;
		connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[];
	};

	export type CookbookUncheckedCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<CookbookCreateWithoutUserInput, CookbookUncheckedCreateWithoutUserInput>
			| CookbookCreateWithoutUserInput[]
			| CookbookUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| CookbookCreateOrConnectWithoutUserInput
			| CookbookCreateOrConnectWithoutUserInput[];
		createMany?: CookbookCreateManyUserInputEnvelope;
		connect?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
	};

	export type Recipe_LikesUncheckedCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<Recipe_LikesCreateWithoutUserInput, Recipe_LikesUncheckedCreateWithoutUserInput>
			| Recipe_LikesCreateWithoutUserInput[]
			| Recipe_LikesUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| Recipe_LikesCreateOrConnectWithoutUserInput
			| Recipe_LikesCreateOrConnectWithoutUserInput[];
		createMany?: Recipe_LikesCreateManyUserInputEnvelope;
		connect?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
	};

	export type Cookbook_LikesUncheckedCreateNestedManyWithoutUserInput = {
		create?:
			| XOR<Cookbook_LikesCreateWithoutUserInput, Cookbook_LikesUncheckedCreateWithoutUserInput>
			| Cookbook_LikesCreateWithoutUserInput[]
			| Cookbook_LikesUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| Cookbook_LikesCreateOrConnectWithoutUserInput
			| Cookbook_LikesCreateOrConnectWithoutUserInput[];
		createMany?: Cookbook_LikesCreateManyUserInputEnvelope;
		connect?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
	};

	export type StringFieldUpdateOperationsInput = {
		set?: string;
	};

	export type NullableStringFieldUpdateOperationsInput = {
		set?: string | null;
	};

	export type DateTimeFieldUpdateOperationsInput = {
		set?: Date | string;
	};

	export type RecipeUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput>
			| RecipeCreateWithoutUserInput[]
			| RecipeUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| RecipeCreateOrConnectWithoutUserInput
			| RecipeCreateOrConnectWithoutUserInput[];
		upsert?:
			| RecipeUpsertWithWhereUniqueWithoutUserInput
			| RecipeUpsertWithWhereUniqueWithoutUserInput[];
		createMany?: RecipeCreateManyUserInputEnvelope;
		set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[];
		disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[];
		delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[];
		connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[];
		update?:
			| RecipeUpdateWithWhereUniqueWithoutUserInput
			| RecipeUpdateWithWhereUniqueWithoutUserInput[];
		updateMany?:
			| RecipeUpdateManyWithWhereWithoutUserInput
			| RecipeUpdateManyWithWhereWithoutUserInput[];
		deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[];
	};

	export type CookbookUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<CookbookCreateWithoutUserInput, CookbookUncheckedCreateWithoutUserInput>
			| CookbookCreateWithoutUserInput[]
			| CookbookUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| CookbookCreateOrConnectWithoutUserInput
			| CookbookCreateOrConnectWithoutUserInput[];
		upsert?:
			| CookbookUpsertWithWhereUniqueWithoutUserInput
			| CookbookUpsertWithWhereUniqueWithoutUserInput[];
		createMany?: CookbookCreateManyUserInputEnvelope;
		set?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
		disconnect?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
		delete?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
		connect?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
		update?:
			| CookbookUpdateWithWhereUniqueWithoutUserInput
			| CookbookUpdateWithWhereUniqueWithoutUserInput[];
		updateMany?:
			| CookbookUpdateManyWithWhereWithoutUserInput
			| CookbookUpdateManyWithWhereWithoutUserInput[];
		deleteMany?: CookbookScalarWhereInput | CookbookScalarWhereInput[];
	};

	export type Recipe_LikesUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<Recipe_LikesCreateWithoutUserInput, Recipe_LikesUncheckedCreateWithoutUserInput>
			| Recipe_LikesCreateWithoutUserInput[]
			| Recipe_LikesUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| Recipe_LikesCreateOrConnectWithoutUserInput
			| Recipe_LikesCreateOrConnectWithoutUserInput[];
		upsert?:
			| Recipe_LikesUpsertWithWhereUniqueWithoutUserInput
			| Recipe_LikesUpsertWithWhereUniqueWithoutUserInput[];
		createMany?: Recipe_LikesCreateManyUserInputEnvelope;
		set?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
		disconnect?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
		delete?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
		connect?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
		update?:
			| Recipe_LikesUpdateWithWhereUniqueWithoutUserInput
			| Recipe_LikesUpdateWithWhereUniqueWithoutUserInput[];
		updateMany?:
			| Recipe_LikesUpdateManyWithWhereWithoutUserInput
			| Recipe_LikesUpdateManyWithWhereWithoutUserInput[];
		deleteMany?: Recipe_LikesScalarWhereInput | Recipe_LikesScalarWhereInput[];
	};

	export type Cookbook_LikesUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<Cookbook_LikesCreateWithoutUserInput, Cookbook_LikesUncheckedCreateWithoutUserInput>
			| Cookbook_LikesCreateWithoutUserInput[]
			| Cookbook_LikesUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| Cookbook_LikesCreateOrConnectWithoutUserInput
			| Cookbook_LikesCreateOrConnectWithoutUserInput[];
		upsert?:
			| Cookbook_LikesUpsertWithWhereUniqueWithoutUserInput
			| Cookbook_LikesUpsertWithWhereUniqueWithoutUserInput[];
		createMany?: Cookbook_LikesCreateManyUserInputEnvelope;
		set?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
		disconnect?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
		delete?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
		connect?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
		update?:
			| Cookbook_LikesUpdateWithWhereUniqueWithoutUserInput
			| Cookbook_LikesUpdateWithWhereUniqueWithoutUserInput[];
		updateMany?:
			| Cookbook_LikesUpdateManyWithWhereWithoutUserInput
			| Cookbook_LikesUpdateManyWithWhereWithoutUserInput[];
		deleteMany?: Cookbook_LikesScalarWhereInput | Cookbook_LikesScalarWhereInput[];
	};

	export type RecipeUncheckedUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput>
			| RecipeCreateWithoutUserInput[]
			| RecipeUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| RecipeCreateOrConnectWithoutUserInput
			| RecipeCreateOrConnectWithoutUserInput[];
		upsert?:
			| RecipeUpsertWithWhereUniqueWithoutUserInput
			| RecipeUpsertWithWhereUniqueWithoutUserInput[];
		createMany?: RecipeCreateManyUserInputEnvelope;
		set?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[];
		disconnect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[];
		delete?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[];
		connect?: RecipeWhereUniqueInput | RecipeWhereUniqueInput[];
		update?:
			| RecipeUpdateWithWhereUniqueWithoutUserInput
			| RecipeUpdateWithWhereUniqueWithoutUserInput[];
		updateMany?:
			| RecipeUpdateManyWithWhereWithoutUserInput
			| RecipeUpdateManyWithWhereWithoutUserInput[];
		deleteMany?: RecipeScalarWhereInput | RecipeScalarWhereInput[];
	};

	export type CookbookUncheckedUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<CookbookCreateWithoutUserInput, CookbookUncheckedCreateWithoutUserInput>
			| CookbookCreateWithoutUserInput[]
			| CookbookUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| CookbookCreateOrConnectWithoutUserInput
			| CookbookCreateOrConnectWithoutUserInput[];
		upsert?:
			| CookbookUpsertWithWhereUniqueWithoutUserInput
			| CookbookUpsertWithWhereUniqueWithoutUserInput[];
		createMany?: CookbookCreateManyUserInputEnvelope;
		set?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
		disconnect?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
		delete?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
		connect?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
		update?:
			| CookbookUpdateWithWhereUniqueWithoutUserInput
			| CookbookUpdateWithWhereUniqueWithoutUserInput[];
		updateMany?:
			| CookbookUpdateManyWithWhereWithoutUserInput
			| CookbookUpdateManyWithWhereWithoutUserInput[];
		deleteMany?: CookbookScalarWhereInput | CookbookScalarWhereInput[];
	};

	export type Recipe_LikesUncheckedUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<Recipe_LikesCreateWithoutUserInput, Recipe_LikesUncheckedCreateWithoutUserInput>
			| Recipe_LikesCreateWithoutUserInput[]
			| Recipe_LikesUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| Recipe_LikesCreateOrConnectWithoutUserInput
			| Recipe_LikesCreateOrConnectWithoutUserInput[];
		upsert?:
			| Recipe_LikesUpsertWithWhereUniqueWithoutUserInput
			| Recipe_LikesUpsertWithWhereUniqueWithoutUserInput[];
		createMany?: Recipe_LikesCreateManyUserInputEnvelope;
		set?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
		disconnect?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
		delete?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
		connect?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
		update?:
			| Recipe_LikesUpdateWithWhereUniqueWithoutUserInput
			| Recipe_LikesUpdateWithWhereUniqueWithoutUserInput[];
		updateMany?:
			| Recipe_LikesUpdateManyWithWhereWithoutUserInput
			| Recipe_LikesUpdateManyWithWhereWithoutUserInput[];
		deleteMany?: Recipe_LikesScalarWhereInput | Recipe_LikesScalarWhereInput[];
	};

	export type Cookbook_LikesUncheckedUpdateManyWithoutUserNestedInput = {
		create?:
			| XOR<Cookbook_LikesCreateWithoutUserInput, Cookbook_LikesUncheckedCreateWithoutUserInput>
			| Cookbook_LikesCreateWithoutUserInput[]
			| Cookbook_LikesUncheckedCreateWithoutUserInput[];
		connectOrCreate?:
			| Cookbook_LikesCreateOrConnectWithoutUserInput
			| Cookbook_LikesCreateOrConnectWithoutUserInput[];
		upsert?:
			| Cookbook_LikesUpsertWithWhereUniqueWithoutUserInput
			| Cookbook_LikesUpsertWithWhereUniqueWithoutUserInput[];
		createMany?: Cookbook_LikesCreateManyUserInputEnvelope;
		set?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
		disconnect?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
		delete?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
		connect?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
		update?:
			| Cookbook_LikesUpdateWithWhereUniqueWithoutUserInput
			| Cookbook_LikesUpdateWithWhereUniqueWithoutUserInput[];
		updateMany?:
			| Cookbook_LikesUpdateManyWithWhereWithoutUserInput
			| Cookbook_LikesUpdateManyWithWhereWithoutUserInput[];
		deleteMany?: Cookbook_LikesScalarWhereInput | Cookbook_LikesScalarWhereInput[];
	};

	export type RecipeCreateingredientsInput = {
		set: string[];
	};

	export type RecipeCreatedirectionInput = {
		set: string[];
	};

	export type UserCreateNestedOneWithoutRecipeInput = {
		create?: XOR<UserCreateWithoutRecipeInput, UserUncheckedCreateWithoutRecipeInput>;
		connectOrCreate?: UserCreateOrConnectWithoutRecipeInput;
		connect?: UserWhereUniqueInput;
	};

	export type CommentRecipeCreateNestedManyWithoutRecipeInput = {
		create?:
			| XOR<CommentRecipeCreateWithoutRecipeInput, CommentRecipeUncheckedCreateWithoutRecipeInput>
			| CommentRecipeCreateWithoutRecipeInput[]
			| CommentRecipeUncheckedCreateWithoutRecipeInput[];
		connectOrCreate?:
			| CommentRecipeCreateOrConnectWithoutRecipeInput
			| CommentRecipeCreateOrConnectWithoutRecipeInput[];
		createMany?: CommentRecipeCreateManyRecipeInputEnvelope;
		connect?: CommentRecipeWhereUniqueInput | CommentRecipeWhereUniqueInput[];
	};

	export type CookbookCreateNestedManyWithoutRecipeInput = {
		create?:
			| XOR<CookbookCreateWithoutRecipeInput, CookbookUncheckedCreateWithoutRecipeInput>
			| CookbookCreateWithoutRecipeInput[]
			| CookbookUncheckedCreateWithoutRecipeInput[];
		connectOrCreate?:
			| CookbookCreateOrConnectWithoutRecipeInput
			| CookbookCreateOrConnectWithoutRecipeInput[];
		createMany?: CookbookCreateManyRecipeInputEnvelope;
		connect?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
	};

	export type Recipe_LikesCreateNestedManyWithoutRecipeInput = {
		create?:
			| XOR<Recipe_LikesCreateWithoutRecipeInput, Recipe_LikesUncheckedCreateWithoutRecipeInput>
			| Recipe_LikesCreateWithoutRecipeInput[]
			| Recipe_LikesUncheckedCreateWithoutRecipeInput[];
		connectOrCreate?:
			| Recipe_LikesCreateOrConnectWithoutRecipeInput
			| Recipe_LikesCreateOrConnectWithoutRecipeInput[];
		createMany?: Recipe_LikesCreateManyRecipeInputEnvelope;
		connect?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
	};

	export type CommentRecipeUncheckedCreateNestedManyWithoutRecipeInput = {
		create?:
			| XOR<CommentRecipeCreateWithoutRecipeInput, CommentRecipeUncheckedCreateWithoutRecipeInput>
			| CommentRecipeCreateWithoutRecipeInput[]
			| CommentRecipeUncheckedCreateWithoutRecipeInput[];
		connectOrCreate?:
			| CommentRecipeCreateOrConnectWithoutRecipeInput
			| CommentRecipeCreateOrConnectWithoutRecipeInput[];
		createMany?: CommentRecipeCreateManyRecipeInputEnvelope;
		connect?: CommentRecipeWhereUniqueInput | CommentRecipeWhereUniqueInput[];
	};

	export type CookbookUncheckedCreateNestedManyWithoutRecipeInput = {
		create?:
			| XOR<CookbookCreateWithoutRecipeInput, CookbookUncheckedCreateWithoutRecipeInput>
			| CookbookCreateWithoutRecipeInput[]
			| CookbookUncheckedCreateWithoutRecipeInput[];
		connectOrCreate?:
			| CookbookCreateOrConnectWithoutRecipeInput
			| CookbookCreateOrConnectWithoutRecipeInput[];
		createMany?: CookbookCreateManyRecipeInputEnvelope;
		connect?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
	};

	export type Recipe_LikesUncheckedCreateNestedManyWithoutRecipeInput = {
		create?:
			| XOR<Recipe_LikesCreateWithoutRecipeInput, Recipe_LikesUncheckedCreateWithoutRecipeInput>
			| Recipe_LikesCreateWithoutRecipeInput[]
			| Recipe_LikesUncheckedCreateWithoutRecipeInput[];
		connectOrCreate?:
			| Recipe_LikesCreateOrConnectWithoutRecipeInput
			| Recipe_LikesCreateOrConnectWithoutRecipeInput[];
		createMany?: Recipe_LikesCreateManyRecipeInputEnvelope;
		connect?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
	};

	export type RecipeUpdateingredientsInput = {
		set?: string[];
		push?: string | string[];
	};

	export type RecipeUpdatedirectionInput = {
		set?: string[];
		push?: string | string[];
	};

	export type IntFieldUpdateOperationsInput = {
		set?: number;
		increment?: number;
		decrement?: number;
		multiply?: number;
		divide?: number;
	};

	export type UserUpdateOneWithoutRecipeNestedInput = {
		create?: XOR<UserCreateWithoutRecipeInput, UserUncheckedCreateWithoutRecipeInput>;
		connectOrCreate?: UserCreateOrConnectWithoutRecipeInput;
		upsert?: UserUpsertWithoutRecipeInput;
		disconnect?: UserWhereInput | boolean;
		delete?: UserWhereInput | boolean;
		connect?: UserWhereUniqueInput;
		update?: XOR<
			XOR<UserUpdateToOneWithWhereWithoutRecipeInput, UserUpdateWithoutRecipeInput>,
			UserUncheckedUpdateWithoutRecipeInput
		>;
	};

	export type CommentRecipeUpdateManyWithoutRecipeNestedInput = {
		create?:
			| XOR<CommentRecipeCreateWithoutRecipeInput, CommentRecipeUncheckedCreateWithoutRecipeInput>
			| CommentRecipeCreateWithoutRecipeInput[]
			| CommentRecipeUncheckedCreateWithoutRecipeInput[];
		connectOrCreate?:
			| CommentRecipeCreateOrConnectWithoutRecipeInput
			| CommentRecipeCreateOrConnectWithoutRecipeInput[];
		upsert?:
			| CommentRecipeUpsertWithWhereUniqueWithoutRecipeInput
			| CommentRecipeUpsertWithWhereUniqueWithoutRecipeInput[];
		createMany?: CommentRecipeCreateManyRecipeInputEnvelope;
		set?: CommentRecipeWhereUniqueInput | CommentRecipeWhereUniqueInput[];
		disconnect?: CommentRecipeWhereUniqueInput | CommentRecipeWhereUniqueInput[];
		delete?: CommentRecipeWhereUniqueInput | CommentRecipeWhereUniqueInput[];
		connect?: CommentRecipeWhereUniqueInput | CommentRecipeWhereUniqueInput[];
		update?:
			| CommentRecipeUpdateWithWhereUniqueWithoutRecipeInput
			| CommentRecipeUpdateWithWhereUniqueWithoutRecipeInput[];
		updateMany?:
			| CommentRecipeUpdateManyWithWhereWithoutRecipeInput
			| CommentRecipeUpdateManyWithWhereWithoutRecipeInput[];
		deleteMany?: CommentRecipeScalarWhereInput | CommentRecipeScalarWhereInput[];
	};

	export type CookbookUpdateManyWithoutRecipeNestedInput = {
		create?:
			| XOR<CookbookCreateWithoutRecipeInput, CookbookUncheckedCreateWithoutRecipeInput>
			| CookbookCreateWithoutRecipeInput[]
			| CookbookUncheckedCreateWithoutRecipeInput[];
		connectOrCreate?:
			| CookbookCreateOrConnectWithoutRecipeInput
			| CookbookCreateOrConnectWithoutRecipeInput[];
		upsert?:
			| CookbookUpsertWithWhereUniqueWithoutRecipeInput
			| CookbookUpsertWithWhereUniqueWithoutRecipeInput[];
		createMany?: CookbookCreateManyRecipeInputEnvelope;
		set?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
		disconnect?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
		delete?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
		connect?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
		update?:
			| CookbookUpdateWithWhereUniqueWithoutRecipeInput
			| CookbookUpdateWithWhereUniqueWithoutRecipeInput[];
		updateMany?:
			| CookbookUpdateManyWithWhereWithoutRecipeInput
			| CookbookUpdateManyWithWhereWithoutRecipeInput[];
		deleteMany?: CookbookScalarWhereInput | CookbookScalarWhereInput[];
	};

	export type Recipe_LikesUpdateManyWithoutRecipeNestedInput = {
		create?:
			| XOR<Recipe_LikesCreateWithoutRecipeInput, Recipe_LikesUncheckedCreateWithoutRecipeInput>
			| Recipe_LikesCreateWithoutRecipeInput[]
			| Recipe_LikesUncheckedCreateWithoutRecipeInput[];
		connectOrCreate?:
			| Recipe_LikesCreateOrConnectWithoutRecipeInput
			| Recipe_LikesCreateOrConnectWithoutRecipeInput[];
		upsert?:
			| Recipe_LikesUpsertWithWhereUniqueWithoutRecipeInput
			| Recipe_LikesUpsertWithWhereUniqueWithoutRecipeInput[];
		createMany?: Recipe_LikesCreateManyRecipeInputEnvelope;
		set?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
		disconnect?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
		delete?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
		connect?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
		update?:
			| Recipe_LikesUpdateWithWhereUniqueWithoutRecipeInput
			| Recipe_LikesUpdateWithWhereUniqueWithoutRecipeInput[];
		updateMany?:
			| Recipe_LikesUpdateManyWithWhereWithoutRecipeInput
			| Recipe_LikesUpdateManyWithWhereWithoutRecipeInput[];
		deleteMany?: Recipe_LikesScalarWhereInput | Recipe_LikesScalarWhereInput[];
	};

	export type CommentRecipeUncheckedUpdateManyWithoutRecipeNestedInput = {
		create?:
			| XOR<CommentRecipeCreateWithoutRecipeInput, CommentRecipeUncheckedCreateWithoutRecipeInput>
			| CommentRecipeCreateWithoutRecipeInput[]
			| CommentRecipeUncheckedCreateWithoutRecipeInput[];
		connectOrCreate?:
			| CommentRecipeCreateOrConnectWithoutRecipeInput
			| CommentRecipeCreateOrConnectWithoutRecipeInput[];
		upsert?:
			| CommentRecipeUpsertWithWhereUniqueWithoutRecipeInput
			| CommentRecipeUpsertWithWhereUniqueWithoutRecipeInput[];
		createMany?: CommentRecipeCreateManyRecipeInputEnvelope;
		set?: CommentRecipeWhereUniqueInput | CommentRecipeWhereUniqueInput[];
		disconnect?: CommentRecipeWhereUniqueInput | CommentRecipeWhereUniqueInput[];
		delete?: CommentRecipeWhereUniqueInput | CommentRecipeWhereUniqueInput[];
		connect?: CommentRecipeWhereUniqueInput | CommentRecipeWhereUniqueInput[];
		update?:
			| CommentRecipeUpdateWithWhereUniqueWithoutRecipeInput
			| CommentRecipeUpdateWithWhereUniqueWithoutRecipeInput[];
		updateMany?:
			| CommentRecipeUpdateManyWithWhereWithoutRecipeInput
			| CommentRecipeUpdateManyWithWhereWithoutRecipeInput[];
		deleteMany?: CommentRecipeScalarWhereInput | CommentRecipeScalarWhereInput[];
	};

	export type CookbookUncheckedUpdateManyWithoutRecipeNestedInput = {
		create?:
			| XOR<CookbookCreateWithoutRecipeInput, CookbookUncheckedCreateWithoutRecipeInput>
			| CookbookCreateWithoutRecipeInput[]
			| CookbookUncheckedCreateWithoutRecipeInput[];
		connectOrCreate?:
			| CookbookCreateOrConnectWithoutRecipeInput
			| CookbookCreateOrConnectWithoutRecipeInput[];
		upsert?:
			| CookbookUpsertWithWhereUniqueWithoutRecipeInput
			| CookbookUpsertWithWhereUniqueWithoutRecipeInput[];
		createMany?: CookbookCreateManyRecipeInputEnvelope;
		set?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
		disconnect?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
		delete?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
		connect?: CookbookWhereUniqueInput | CookbookWhereUniqueInput[];
		update?:
			| CookbookUpdateWithWhereUniqueWithoutRecipeInput
			| CookbookUpdateWithWhereUniqueWithoutRecipeInput[];
		updateMany?:
			| CookbookUpdateManyWithWhereWithoutRecipeInput
			| CookbookUpdateManyWithWhereWithoutRecipeInput[];
		deleteMany?: CookbookScalarWhereInput | CookbookScalarWhereInput[];
	};

	export type Recipe_LikesUncheckedUpdateManyWithoutRecipeNestedInput = {
		create?:
			| XOR<Recipe_LikesCreateWithoutRecipeInput, Recipe_LikesUncheckedCreateWithoutRecipeInput>
			| Recipe_LikesCreateWithoutRecipeInput[]
			| Recipe_LikesUncheckedCreateWithoutRecipeInput[];
		connectOrCreate?:
			| Recipe_LikesCreateOrConnectWithoutRecipeInput
			| Recipe_LikesCreateOrConnectWithoutRecipeInput[];
		upsert?:
			| Recipe_LikesUpsertWithWhereUniqueWithoutRecipeInput
			| Recipe_LikesUpsertWithWhereUniqueWithoutRecipeInput[];
		createMany?: Recipe_LikesCreateManyRecipeInputEnvelope;
		set?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
		disconnect?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
		delete?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
		connect?: Recipe_LikesWhereUniqueInput | Recipe_LikesWhereUniqueInput[];
		update?:
			| Recipe_LikesUpdateWithWhereUniqueWithoutRecipeInput
			| Recipe_LikesUpdateWithWhereUniqueWithoutRecipeInput[];
		updateMany?:
			| Recipe_LikesUpdateManyWithWhereWithoutRecipeInput
			| Recipe_LikesUpdateManyWithWhereWithoutRecipeInput[];
		deleteMany?: Recipe_LikesScalarWhereInput | Recipe_LikesScalarWhereInput[];
	};

	export type RecipeCreateNestedOneWithoutLikesInput = {
		create?: XOR<RecipeCreateWithoutLikesInput, RecipeUncheckedCreateWithoutLikesInput>;
		connectOrCreate?: RecipeCreateOrConnectWithoutLikesInput;
		connect?: RecipeWhereUniqueInput;
	};

	export type UserCreateNestedOneWithoutLikesInput = {
		create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>;
		connectOrCreate?: UserCreateOrConnectWithoutLikesInput;
		connect?: UserWhereUniqueInput;
	};

	export type RecipeUpdateOneWithoutLikesNestedInput = {
		create?: XOR<RecipeCreateWithoutLikesInput, RecipeUncheckedCreateWithoutLikesInput>;
		connectOrCreate?: RecipeCreateOrConnectWithoutLikesInput;
		upsert?: RecipeUpsertWithoutLikesInput;
		disconnect?: RecipeWhereInput | boolean;
		delete?: RecipeWhereInput | boolean;
		connect?: RecipeWhereUniqueInput;
		update?: XOR<
			XOR<RecipeUpdateToOneWithWhereWithoutLikesInput, RecipeUpdateWithoutLikesInput>,
			RecipeUncheckedUpdateWithoutLikesInput
		>;
	};

	export type UserUpdateOneWithoutLikesNestedInput = {
		create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>;
		connectOrCreate?: UserCreateOrConnectWithoutLikesInput;
		upsert?: UserUpsertWithoutLikesInput;
		disconnect?: UserWhereInput | boolean;
		delete?: UserWhereInput | boolean;
		connect?: UserWhereUniqueInput;
		update?: XOR<
			XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>,
			UserUncheckedUpdateWithoutLikesInput
		>;
	};

	export type RecipeCreateNestedOneWithoutCommentInput = {
		create?: XOR<RecipeCreateWithoutCommentInput, RecipeUncheckedCreateWithoutCommentInput>;
		connectOrCreate?: RecipeCreateOrConnectWithoutCommentInput;
		connect?: RecipeWhereUniqueInput;
	};

	export type RecipeUpdateOneWithoutCommentNestedInput = {
		create?: XOR<RecipeCreateWithoutCommentInput, RecipeUncheckedCreateWithoutCommentInput>;
		connectOrCreate?: RecipeCreateOrConnectWithoutCommentInput;
		upsert?: RecipeUpsertWithoutCommentInput;
		disconnect?: RecipeWhereInput | boolean;
		delete?: RecipeWhereInput | boolean;
		connect?: RecipeWhereUniqueInput;
		update?: XOR<
			XOR<RecipeUpdateToOneWithWhereWithoutCommentInput, RecipeUpdateWithoutCommentInput>,
			RecipeUncheckedUpdateWithoutCommentInput
		>;
	};

	export type UserCreateNestedOneWithoutCookbookInput = {
		create?: XOR<UserCreateWithoutCookbookInput, UserUncheckedCreateWithoutCookbookInput>;
		connectOrCreate?: UserCreateOrConnectWithoutCookbookInput;
		connect?: UserWhereUniqueInput;
	};

	export type RecipeCreateNestedOneWithoutCookbookInput = {
		create?: XOR<RecipeCreateWithoutCookbookInput, RecipeUncheckedCreateWithoutCookbookInput>;
		connectOrCreate?: RecipeCreateOrConnectWithoutCookbookInput;
		connect?: RecipeWhereUniqueInput;
	};

	export type CommentCookbookCreateNestedManyWithoutCookbookInput = {
		create?:
			| XOR<
					CommentCookbookCreateWithoutCookbookInput,
					CommentCookbookUncheckedCreateWithoutCookbookInput
			  >
			| CommentCookbookCreateWithoutCookbookInput[]
			| CommentCookbookUncheckedCreateWithoutCookbookInput[];
		connectOrCreate?:
			| CommentCookbookCreateOrConnectWithoutCookbookInput
			| CommentCookbookCreateOrConnectWithoutCookbookInput[];
		createMany?: CommentCookbookCreateManyCookbookInputEnvelope;
		connect?: CommentCookbookWhereUniqueInput | CommentCookbookWhereUniqueInput[];
	};

	export type Cookbook_LikesCreateNestedManyWithoutCookbookInput = {
		create?:
			| XOR<
					Cookbook_LikesCreateWithoutCookbookInput,
					Cookbook_LikesUncheckedCreateWithoutCookbookInput
			  >
			| Cookbook_LikesCreateWithoutCookbookInput[]
			| Cookbook_LikesUncheckedCreateWithoutCookbookInput[];
		connectOrCreate?:
			| Cookbook_LikesCreateOrConnectWithoutCookbookInput
			| Cookbook_LikesCreateOrConnectWithoutCookbookInput[];
		createMany?: Cookbook_LikesCreateManyCookbookInputEnvelope;
		connect?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
	};

	export type CommentCookbookUncheckedCreateNestedManyWithoutCookbookInput = {
		create?:
			| XOR<
					CommentCookbookCreateWithoutCookbookInput,
					CommentCookbookUncheckedCreateWithoutCookbookInput
			  >
			| CommentCookbookCreateWithoutCookbookInput[]
			| CommentCookbookUncheckedCreateWithoutCookbookInput[];
		connectOrCreate?:
			| CommentCookbookCreateOrConnectWithoutCookbookInput
			| CommentCookbookCreateOrConnectWithoutCookbookInput[];
		createMany?: CommentCookbookCreateManyCookbookInputEnvelope;
		connect?: CommentCookbookWhereUniqueInput | CommentCookbookWhereUniqueInput[];
	};

	export type Cookbook_LikesUncheckedCreateNestedManyWithoutCookbookInput = {
		create?:
			| XOR<
					Cookbook_LikesCreateWithoutCookbookInput,
					Cookbook_LikesUncheckedCreateWithoutCookbookInput
			  >
			| Cookbook_LikesCreateWithoutCookbookInput[]
			| Cookbook_LikesUncheckedCreateWithoutCookbookInput[];
		connectOrCreate?:
			| Cookbook_LikesCreateOrConnectWithoutCookbookInput
			| Cookbook_LikesCreateOrConnectWithoutCookbookInput[];
		createMany?: Cookbook_LikesCreateManyCookbookInputEnvelope;
		connect?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
	};

	export type UserUpdateOneWithoutCookbookNestedInput = {
		create?: XOR<UserCreateWithoutCookbookInput, UserUncheckedCreateWithoutCookbookInput>;
		connectOrCreate?: UserCreateOrConnectWithoutCookbookInput;
		upsert?: UserUpsertWithoutCookbookInput;
		disconnect?: UserWhereInput | boolean;
		delete?: UserWhereInput | boolean;
		connect?: UserWhereUniqueInput;
		update?: XOR<
			XOR<UserUpdateToOneWithWhereWithoutCookbookInput, UserUpdateWithoutCookbookInput>,
			UserUncheckedUpdateWithoutCookbookInput
		>;
	};

	export type RecipeUpdateOneWithoutCookbookNestedInput = {
		create?: XOR<RecipeCreateWithoutCookbookInput, RecipeUncheckedCreateWithoutCookbookInput>;
		connectOrCreate?: RecipeCreateOrConnectWithoutCookbookInput;
		upsert?: RecipeUpsertWithoutCookbookInput;
		disconnect?: RecipeWhereInput | boolean;
		delete?: RecipeWhereInput | boolean;
		connect?: RecipeWhereUniqueInput;
		update?: XOR<
			XOR<RecipeUpdateToOneWithWhereWithoutCookbookInput, RecipeUpdateWithoutCookbookInput>,
			RecipeUncheckedUpdateWithoutCookbookInput
		>;
	};

	export type CommentCookbookUpdateManyWithoutCookbookNestedInput = {
		create?:
			| XOR<
					CommentCookbookCreateWithoutCookbookInput,
					CommentCookbookUncheckedCreateWithoutCookbookInput
			  >
			| CommentCookbookCreateWithoutCookbookInput[]
			| CommentCookbookUncheckedCreateWithoutCookbookInput[];
		connectOrCreate?:
			| CommentCookbookCreateOrConnectWithoutCookbookInput
			| CommentCookbookCreateOrConnectWithoutCookbookInput[];
		upsert?:
			| CommentCookbookUpsertWithWhereUniqueWithoutCookbookInput
			| CommentCookbookUpsertWithWhereUniqueWithoutCookbookInput[];
		createMany?: CommentCookbookCreateManyCookbookInputEnvelope;
		set?: CommentCookbookWhereUniqueInput | CommentCookbookWhereUniqueInput[];
		disconnect?: CommentCookbookWhereUniqueInput | CommentCookbookWhereUniqueInput[];
		delete?: CommentCookbookWhereUniqueInput | CommentCookbookWhereUniqueInput[];
		connect?: CommentCookbookWhereUniqueInput | CommentCookbookWhereUniqueInput[];
		update?:
			| CommentCookbookUpdateWithWhereUniqueWithoutCookbookInput
			| CommentCookbookUpdateWithWhereUniqueWithoutCookbookInput[];
		updateMany?:
			| CommentCookbookUpdateManyWithWhereWithoutCookbookInput
			| CommentCookbookUpdateManyWithWhereWithoutCookbookInput[];
		deleteMany?: CommentCookbookScalarWhereInput | CommentCookbookScalarWhereInput[];
	};

	export type Cookbook_LikesUpdateManyWithoutCookbookNestedInput = {
		create?:
			| XOR<
					Cookbook_LikesCreateWithoutCookbookInput,
					Cookbook_LikesUncheckedCreateWithoutCookbookInput
			  >
			| Cookbook_LikesCreateWithoutCookbookInput[]
			| Cookbook_LikesUncheckedCreateWithoutCookbookInput[];
		connectOrCreate?:
			| Cookbook_LikesCreateOrConnectWithoutCookbookInput
			| Cookbook_LikesCreateOrConnectWithoutCookbookInput[];
		upsert?:
			| Cookbook_LikesUpsertWithWhereUniqueWithoutCookbookInput
			| Cookbook_LikesUpsertWithWhereUniqueWithoutCookbookInput[];
		createMany?: Cookbook_LikesCreateManyCookbookInputEnvelope;
		set?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
		disconnect?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
		delete?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
		connect?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
		update?:
			| Cookbook_LikesUpdateWithWhereUniqueWithoutCookbookInput
			| Cookbook_LikesUpdateWithWhereUniqueWithoutCookbookInput[];
		updateMany?:
			| Cookbook_LikesUpdateManyWithWhereWithoutCookbookInput
			| Cookbook_LikesUpdateManyWithWhereWithoutCookbookInput[];
		deleteMany?: Cookbook_LikesScalarWhereInput | Cookbook_LikesScalarWhereInput[];
	};

	export type CommentCookbookUncheckedUpdateManyWithoutCookbookNestedInput = {
		create?:
			| XOR<
					CommentCookbookCreateWithoutCookbookInput,
					CommentCookbookUncheckedCreateWithoutCookbookInput
			  >
			| CommentCookbookCreateWithoutCookbookInput[]
			| CommentCookbookUncheckedCreateWithoutCookbookInput[];
		connectOrCreate?:
			| CommentCookbookCreateOrConnectWithoutCookbookInput
			| CommentCookbookCreateOrConnectWithoutCookbookInput[];
		upsert?:
			| CommentCookbookUpsertWithWhereUniqueWithoutCookbookInput
			| CommentCookbookUpsertWithWhereUniqueWithoutCookbookInput[];
		createMany?: CommentCookbookCreateManyCookbookInputEnvelope;
		set?: CommentCookbookWhereUniqueInput | CommentCookbookWhereUniqueInput[];
		disconnect?: CommentCookbookWhereUniqueInput | CommentCookbookWhereUniqueInput[];
		delete?: CommentCookbookWhereUniqueInput | CommentCookbookWhereUniqueInput[];
		connect?: CommentCookbookWhereUniqueInput | CommentCookbookWhereUniqueInput[];
		update?:
			| CommentCookbookUpdateWithWhereUniqueWithoutCookbookInput
			| CommentCookbookUpdateWithWhereUniqueWithoutCookbookInput[];
		updateMany?:
			| CommentCookbookUpdateManyWithWhereWithoutCookbookInput
			| CommentCookbookUpdateManyWithWhereWithoutCookbookInput[];
		deleteMany?: CommentCookbookScalarWhereInput | CommentCookbookScalarWhereInput[];
	};

	export type Cookbook_LikesUncheckedUpdateManyWithoutCookbookNestedInput = {
		create?:
			| XOR<
					Cookbook_LikesCreateWithoutCookbookInput,
					Cookbook_LikesUncheckedCreateWithoutCookbookInput
			  >
			| Cookbook_LikesCreateWithoutCookbookInput[]
			| Cookbook_LikesUncheckedCreateWithoutCookbookInput[];
		connectOrCreate?:
			| Cookbook_LikesCreateOrConnectWithoutCookbookInput
			| Cookbook_LikesCreateOrConnectWithoutCookbookInput[];
		upsert?:
			| Cookbook_LikesUpsertWithWhereUniqueWithoutCookbookInput
			| Cookbook_LikesUpsertWithWhereUniqueWithoutCookbookInput[];
		createMany?: Cookbook_LikesCreateManyCookbookInputEnvelope;
		set?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
		disconnect?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
		delete?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
		connect?: Cookbook_LikesWhereUniqueInput | Cookbook_LikesWhereUniqueInput[];
		update?:
			| Cookbook_LikesUpdateWithWhereUniqueWithoutCookbookInput
			| Cookbook_LikesUpdateWithWhereUniqueWithoutCookbookInput[];
		updateMany?:
			| Cookbook_LikesUpdateManyWithWhereWithoutCookbookInput
			| Cookbook_LikesUpdateManyWithWhereWithoutCookbookInput[];
		deleteMany?: Cookbook_LikesScalarWhereInput | Cookbook_LikesScalarWhereInput[];
	};

	export type CookbookCreateNestedOneWithoutCookbook_LikesInput = {
		create?: XOR<
			CookbookCreateWithoutCookbook_LikesInput,
			CookbookUncheckedCreateWithoutCookbook_LikesInput
		>;
		connectOrCreate?: CookbookCreateOrConnectWithoutCookbook_LikesInput;
		connect?: CookbookWhereUniqueInput;
	};

	export type UserCreateNestedOneWithoutCookbook_LikesInput = {
		create?: XOR<
			UserCreateWithoutCookbook_LikesInput,
			UserUncheckedCreateWithoutCookbook_LikesInput
		>;
		connectOrCreate?: UserCreateOrConnectWithoutCookbook_LikesInput;
		connect?: UserWhereUniqueInput;
	};

	export type CookbookUpdateOneWithoutCookbook_LikesNestedInput = {
		create?: XOR<
			CookbookCreateWithoutCookbook_LikesInput,
			CookbookUncheckedCreateWithoutCookbook_LikesInput
		>;
		connectOrCreate?: CookbookCreateOrConnectWithoutCookbook_LikesInput;
		upsert?: CookbookUpsertWithoutCookbook_LikesInput;
		disconnect?: CookbookWhereInput | boolean;
		delete?: CookbookWhereInput | boolean;
		connect?: CookbookWhereUniqueInput;
		update?: XOR<
			XOR<
				CookbookUpdateToOneWithWhereWithoutCookbook_LikesInput,
				CookbookUpdateWithoutCookbook_LikesInput
			>,
			CookbookUncheckedUpdateWithoutCookbook_LikesInput
		>;
	};

	export type UserUpdateOneWithoutCookbook_LikesNestedInput = {
		create?: XOR<
			UserCreateWithoutCookbook_LikesInput,
			UserUncheckedCreateWithoutCookbook_LikesInput
		>;
		connectOrCreate?: UserCreateOrConnectWithoutCookbook_LikesInput;
		upsert?: UserUpsertWithoutCookbook_LikesInput;
		disconnect?: UserWhereInput | boolean;
		delete?: UserWhereInput | boolean;
		connect?: UserWhereUniqueInput;
		update?: XOR<
			XOR<UserUpdateToOneWithWhereWithoutCookbook_LikesInput, UserUpdateWithoutCookbook_LikesInput>,
			UserUncheckedUpdateWithoutCookbook_LikesInput
		>;
	};

	export type CookbookCreateNestedOneWithoutCommentCookbookInput = {
		create?: XOR<
			CookbookCreateWithoutCommentCookbookInput,
			CookbookUncheckedCreateWithoutCommentCookbookInput
		>;
		connectOrCreate?: CookbookCreateOrConnectWithoutCommentCookbookInput;
		connect?: CookbookWhereUniqueInput;
	};

	export type CookbookUpdateOneWithoutCommentCookbookNestedInput = {
		create?: XOR<
			CookbookCreateWithoutCommentCookbookInput,
			CookbookUncheckedCreateWithoutCommentCookbookInput
		>;
		connectOrCreate?: CookbookCreateOrConnectWithoutCommentCookbookInput;
		upsert?: CookbookUpsertWithoutCommentCookbookInput;
		disconnect?: CookbookWhereInput | boolean;
		delete?: CookbookWhereInput | boolean;
		connect?: CookbookWhereUniqueInput;
		update?: XOR<
			XOR<
				CookbookUpdateToOneWithWhereWithoutCommentCookbookInput,
				CookbookUpdateWithoutCommentCookbookInput
			>,
			CookbookUncheckedUpdateWithoutCommentCookbookInput
		>;
	};

	export type NestedStringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringFilter<$PrismaModel> | string;
	};

	export type NestedStringNullableFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringNullableFilter<$PrismaModel> | string | null;
	};

	export type NestedDateTimeFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
	};

	export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedStringFilter<$PrismaModel>;
		_max?: NestedStringFilter<$PrismaModel>;
	};

	export type NestedIntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntFilter<$PrismaModel> | number;
	};

	export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel> | null;
		in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
		_count?: NestedIntNullableFilter<$PrismaModel>;
		_min?: NestedStringNullableFilter<$PrismaModel>;
		_max?: NestedStringNullableFilter<$PrismaModel>;
	};

	export type NestedIntNullableFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel> | null;
		in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntNullableFilter<$PrismaModel> | number | null;
	};

	export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
		equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
		lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
		not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedDateTimeFilter<$PrismaModel>;
		_max?: NestedDateTimeFilter<$PrismaModel>;
	};

	export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedIntFilter<$PrismaModel>;
		_min?: NestedIntFilter<$PrismaModel>;
		_max?: NestedIntFilter<$PrismaModel>;
	};

	export type NestedFloatFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel>;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatFilter<$PrismaModel> | number;
	};

	export type RecipeCreateWithoutUserInput = {
		id?: string;
		title: string;
		description?: string | null;
		ingredients?: RecipeCreateingredientsInput | string[];
		direction?: RecipeCreatedirectionInput | string[];
		views?: number;
		estimated_time: Date | string;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		comment?: CommentRecipeCreateNestedManyWithoutRecipeInput;
		cookbook?: CookbookCreateNestedManyWithoutRecipeInput;
		likes?: Recipe_LikesCreateNestedManyWithoutRecipeInput;
	};

	export type RecipeUncheckedCreateWithoutUserInput = {
		id?: string;
		title: string;
		description?: string | null;
		ingredients?: RecipeCreateingredientsInput | string[];
		direction?: RecipeCreatedirectionInput | string[];
		views?: number;
		estimated_time: Date | string;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		comment?: CommentRecipeUncheckedCreateNestedManyWithoutRecipeInput;
		cookbook?: CookbookUncheckedCreateNestedManyWithoutRecipeInput;
		likes?: Recipe_LikesUncheckedCreateNestedManyWithoutRecipeInput;
	};

	export type RecipeCreateOrConnectWithoutUserInput = {
		where: RecipeWhereUniqueInput;
		create: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput>;
	};

	export type RecipeCreateManyUserInputEnvelope = {
		data: RecipeCreateManyUserInput | RecipeCreateManyUserInput[];
		skipDuplicates?: boolean;
	};

	export type CookbookCreateWithoutUserInput = {
		id?: string;
		title: string;
		description?: string | null;
		likes?: number;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		recipe?: RecipeCreateNestedOneWithoutCookbookInput;
		commentCookbook?: CommentCookbookCreateNestedManyWithoutCookbookInput;
		Cookbook_Likes?: Cookbook_LikesCreateNestedManyWithoutCookbookInput;
	};

	export type CookbookUncheckedCreateWithoutUserInput = {
		id?: string;
		title: string;
		description?: string | null;
		likes?: number;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		recipe_id?: string | null;
		commentCookbook?: CommentCookbookUncheckedCreateNestedManyWithoutCookbookInput;
		Cookbook_Likes?: Cookbook_LikesUncheckedCreateNestedManyWithoutCookbookInput;
	};

	export type CookbookCreateOrConnectWithoutUserInput = {
		where: CookbookWhereUniqueInput;
		create: XOR<CookbookCreateWithoutUserInput, CookbookUncheckedCreateWithoutUserInput>;
	};

	export type CookbookCreateManyUserInputEnvelope = {
		data: CookbookCreateManyUserInput | CookbookCreateManyUserInput[];
		skipDuplicates?: boolean;
	};

	export type Recipe_LikesCreateWithoutUserInput = {
		id?: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		recipe?: RecipeCreateNestedOneWithoutLikesInput;
	};

	export type Recipe_LikesUncheckedCreateWithoutUserInput = {
		id?: string;
		recipe_id?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type Recipe_LikesCreateOrConnectWithoutUserInput = {
		where: Recipe_LikesWhereUniqueInput;
		create: XOR<Recipe_LikesCreateWithoutUserInput, Recipe_LikesUncheckedCreateWithoutUserInput>;
	};

	export type Recipe_LikesCreateManyUserInputEnvelope = {
		data: Recipe_LikesCreateManyUserInput | Recipe_LikesCreateManyUserInput[];
		skipDuplicates?: boolean;
	};

	export type Cookbook_LikesCreateWithoutUserInput = {
		id?: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		cookbook?: CookbookCreateNestedOneWithoutCookbook_LikesInput;
	};

	export type Cookbook_LikesUncheckedCreateWithoutUserInput = {
		id?: string;
		cookbook_id?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type Cookbook_LikesCreateOrConnectWithoutUserInput = {
		where: Cookbook_LikesWhereUniqueInput;
		create: XOR<
			Cookbook_LikesCreateWithoutUserInput,
			Cookbook_LikesUncheckedCreateWithoutUserInput
		>;
	};

	export type Cookbook_LikesCreateManyUserInputEnvelope = {
		data: Cookbook_LikesCreateManyUserInput | Cookbook_LikesCreateManyUserInput[];
		skipDuplicates?: boolean;
	};

	export type RecipeUpsertWithWhereUniqueWithoutUserInput = {
		where: RecipeWhereUniqueInput;
		update: XOR<RecipeUpdateWithoutUserInput, RecipeUncheckedUpdateWithoutUserInput>;
		create: XOR<RecipeCreateWithoutUserInput, RecipeUncheckedCreateWithoutUserInput>;
	};

	export type RecipeUpdateWithWhereUniqueWithoutUserInput = {
		where: RecipeWhereUniqueInput;
		data: XOR<RecipeUpdateWithoutUserInput, RecipeUncheckedUpdateWithoutUserInput>;
	};

	export type RecipeUpdateManyWithWhereWithoutUserInput = {
		where: RecipeScalarWhereInput;
		data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyWithoutUserInput>;
	};

	export type RecipeScalarWhereInput = {
		AND?: RecipeScalarWhereInput | RecipeScalarWhereInput[];
		OR?: RecipeScalarWhereInput[];
		NOT?: RecipeScalarWhereInput | RecipeScalarWhereInput[];
		id?: StringFilter<'Recipe'> | string;
		title?: StringFilter<'Recipe'> | string;
		description?: StringNullableFilter<'Recipe'> | string | null;
		ingredients?: StringNullableListFilter<'Recipe'>;
		direction?: StringNullableListFilter<'Recipe'>;
		views?: IntFilter<'Recipe'> | number;
		estimated_time?: DateTimeFilter<'Recipe'> | Date | string;
		image?: StringFilter<'Recipe'> | string;
		createdAt?: DateTimeFilter<'Recipe'> | Date | string;
		updatedAt?: DateTimeFilter<'Recipe'> | Date | string;
		user_id?: StringNullableFilter<'Recipe'> | string | null;
	};

	export type CookbookUpsertWithWhereUniqueWithoutUserInput = {
		where: CookbookWhereUniqueInput;
		update: XOR<CookbookUpdateWithoutUserInput, CookbookUncheckedUpdateWithoutUserInput>;
		create: XOR<CookbookCreateWithoutUserInput, CookbookUncheckedCreateWithoutUserInput>;
	};

	export type CookbookUpdateWithWhereUniqueWithoutUserInput = {
		where: CookbookWhereUniqueInput;
		data: XOR<CookbookUpdateWithoutUserInput, CookbookUncheckedUpdateWithoutUserInput>;
	};

	export type CookbookUpdateManyWithWhereWithoutUserInput = {
		where: CookbookScalarWhereInput;
		data: XOR<CookbookUpdateManyMutationInput, CookbookUncheckedUpdateManyWithoutUserInput>;
	};

	export type CookbookScalarWhereInput = {
		AND?: CookbookScalarWhereInput | CookbookScalarWhereInput[];
		OR?: CookbookScalarWhereInput[];
		NOT?: CookbookScalarWhereInput | CookbookScalarWhereInput[];
		id?: StringFilter<'Cookbook'> | string;
		title?: StringFilter<'Cookbook'> | string;
		description?: StringNullableFilter<'Cookbook'> | string | null;
		likes?: IntFilter<'Cookbook'> | number;
		image?: StringFilter<'Cookbook'> | string;
		createdAt?: DateTimeFilter<'Cookbook'> | Date | string;
		updatedAt?: DateTimeFilter<'Cookbook'> | Date | string;
		user_id?: StringNullableFilter<'Cookbook'> | string | null;
		recipe_id?: StringNullableFilter<'Cookbook'> | string | null;
	};

	export type Recipe_LikesUpsertWithWhereUniqueWithoutUserInput = {
		where: Recipe_LikesWhereUniqueInput;
		update: XOR<Recipe_LikesUpdateWithoutUserInput, Recipe_LikesUncheckedUpdateWithoutUserInput>;
		create: XOR<Recipe_LikesCreateWithoutUserInput, Recipe_LikesUncheckedCreateWithoutUserInput>;
	};

	export type Recipe_LikesUpdateWithWhereUniqueWithoutUserInput = {
		where: Recipe_LikesWhereUniqueInput;
		data: XOR<Recipe_LikesUpdateWithoutUserInput, Recipe_LikesUncheckedUpdateWithoutUserInput>;
	};

	export type Recipe_LikesUpdateManyWithWhereWithoutUserInput = {
		where: Recipe_LikesScalarWhereInput;
		data: XOR<Recipe_LikesUpdateManyMutationInput, Recipe_LikesUncheckedUpdateManyWithoutUserInput>;
	};

	export type Recipe_LikesScalarWhereInput = {
		AND?: Recipe_LikesScalarWhereInput | Recipe_LikesScalarWhereInput[];
		OR?: Recipe_LikesScalarWhereInput[];
		NOT?: Recipe_LikesScalarWhereInput | Recipe_LikesScalarWhereInput[];
		id?: StringFilter<'Recipe_Likes'> | string;
		recipe_id?: StringNullableFilter<'Recipe_Likes'> | string | null;
		user_id?: StringNullableFilter<'Recipe_Likes'> | string | null;
		createdAt?: DateTimeFilter<'Recipe_Likes'> | Date | string;
		updatedAt?: DateTimeFilter<'Recipe_Likes'> | Date | string;
	};

	export type Cookbook_LikesUpsertWithWhereUniqueWithoutUserInput = {
		where: Cookbook_LikesWhereUniqueInput;
		update: XOR<
			Cookbook_LikesUpdateWithoutUserInput,
			Cookbook_LikesUncheckedUpdateWithoutUserInput
		>;
		create: XOR<
			Cookbook_LikesCreateWithoutUserInput,
			Cookbook_LikesUncheckedCreateWithoutUserInput
		>;
	};

	export type Cookbook_LikesUpdateWithWhereUniqueWithoutUserInput = {
		where: Cookbook_LikesWhereUniqueInput;
		data: XOR<Cookbook_LikesUpdateWithoutUserInput, Cookbook_LikesUncheckedUpdateWithoutUserInput>;
	};

	export type Cookbook_LikesUpdateManyWithWhereWithoutUserInput = {
		where: Cookbook_LikesScalarWhereInput;
		data: XOR<
			Cookbook_LikesUpdateManyMutationInput,
			Cookbook_LikesUncheckedUpdateManyWithoutUserInput
		>;
	};

	export type Cookbook_LikesScalarWhereInput = {
		AND?: Cookbook_LikesScalarWhereInput | Cookbook_LikesScalarWhereInput[];
		OR?: Cookbook_LikesScalarWhereInput[];
		NOT?: Cookbook_LikesScalarWhereInput | Cookbook_LikesScalarWhereInput[];
		id?: StringFilter<'Cookbook_Likes'> | string;
		cookbook_id?: StringNullableFilter<'Cookbook_Likes'> | string | null;
		user_id?: StringNullableFilter<'Cookbook_Likes'> | string | null;
		createdAt?: DateTimeFilter<'Cookbook_Likes'> | Date | string;
		updatedAt?: DateTimeFilter<'Cookbook_Likes'> | Date | string;
	};

	export type UserCreateWithoutRecipeInput = {
		id?: string;
		email: string;
		name?: string | null;
		password: string;
		image?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		cookbook?: CookbookCreateNestedManyWithoutUserInput;
		likes?: Recipe_LikesCreateNestedManyWithoutUserInput;
		Cookbook_Likes?: Cookbook_LikesCreateNestedManyWithoutUserInput;
	};

	export type UserUncheckedCreateWithoutRecipeInput = {
		id?: string;
		email: string;
		name?: string | null;
		password: string;
		image?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		cookbook?: CookbookUncheckedCreateNestedManyWithoutUserInput;
		likes?: Recipe_LikesUncheckedCreateNestedManyWithoutUserInput;
		Cookbook_Likes?: Cookbook_LikesUncheckedCreateNestedManyWithoutUserInput;
	};

	export type UserCreateOrConnectWithoutRecipeInput = {
		where: UserWhereUniqueInput;
		create: XOR<UserCreateWithoutRecipeInput, UserUncheckedCreateWithoutRecipeInput>;
	};

	export type CommentRecipeCreateWithoutRecipeInput = {
		id?: string;
		description: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type CommentRecipeUncheckedCreateWithoutRecipeInput = {
		id?: string;
		description: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type CommentRecipeCreateOrConnectWithoutRecipeInput = {
		where: CommentRecipeWhereUniqueInput;
		create: XOR<
			CommentRecipeCreateWithoutRecipeInput,
			CommentRecipeUncheckedCreateWithoutRecipeInput
		>;
	};

	export type CommentRecipeCreateManyRecipeInputEnvelope = {
		data: CommentRecipeCreateManyRecipeInput | CommentRecipeCreateManyRecipeInput[];
		skipDuplicates?: boolean;
	};

	export type CookbookCreateWithoutRecipeInput = {
		id?: string;
		title: string;
		description?: string | null;
		likes?: number;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user?: UserCreateNestedOneWithoutCookbookInput;
		commentCookbook?: CommentCookbookCreateNestedManyWithoutCookbookInput;
		Cookbook_Likes?: Cookbook_LikesCreateNestedManyWithoutCookbookInput;
	};

	export type CookbookUncheckedCreateWithoutRecipeInput = {
		id?: string;
		title: string;
		description?: string | null;
		likes?: number;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user_id?: string | null;
		commentCookbook?: CommentCookbookUncheckedCreateNestedManyWithoutCookbookInput;
		Cookbook_Likes?: Cookbook_LikesUncheckedCreateNestedManyWithoutCookbookInput;
	};

	export type CookbookCreateOrConnectWithoutRecipeInput = {
		where: CookbookWhereUniqueInput;
		create: XOR<CookbookCreateWithoutRecipeInput, CookbookUncheckedCreateWithoutRecipeInput>;
	};

	export type CookbookCreateManyRecipeInputEnvelope = {
		data: CookbookCreateManyRecipeInput | CookbookCreateManyRecipeInput[];
		skipDuplicates?: boolean;
	};

	export type Recipe_LikesCreateWithoutRecipeInput = {
		id?: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user?: UserCreateNestedOneWithoutLikesInput;
	};

	export type Recipe_LikesUncheckedCreateWithoutRecipeInput = {
		id?: string;
		user_id?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type Recipe_LikesCreateOrConnectWithoutRecipeInput = {
		where: Recipe_LikesWhereUniqueInput;
		create: XOR<
			Recipe_LikesCreateWithoutRecipeInput,
			Recipe_LikesUncheckedCreateWithoutRecipeInput
		>;
	};

	export type Recipe_LikesCreateManyRecipeInputEnvelope = {
		data: Recipe_LikesCreateManyRecipeInput | Recipe_LikesCreateManyRecipeInput[];
		skipDuplicates?: boolean;
	};

	export type UserUpsertWithoutRecipeInput = {
		update: XOR<UserUpdateWithoutRecipeInput, UserUncheckedUpdateWithoutRecipeInput>;
		create: XOR<UserCreateWithoutRecipeInput, UserUncheckedCreateWithoutRecipeInput>;
		where?: UserWhereInput;
	};

	export type UserUpdateToOneWithWhereWithoutRecipeInput = {
		where?: UserWhereInput;
		data: XOR<UserUpdateWithoutRecipeInput, UserUncheckedUpdateWithoutRecipeInput>;
	};

	export type UserUpdateWithoutRecipeInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		name?: NullableStringFieldUpdateOperationsInput | string | null;
		password?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		cookbook?: CookbookUpdateManyWithoutUserNestedInput;
		likes?: Recipe_LikesUpdateManyWithoutUserNestedInput;
		Cookbook_Likes?: Cookbook_LikesUpdateManyWithoutUserNestedInput;
	};

	export type UserUncheckedUpdateWithoutRecipeInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		name?: NullableStringFieldUpdateOperationsInput | string | null;
		password?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		cookbook?: CookbookUncheckedUpdateManyWithoutUserNestedInput;
		likes?: Recipe_LikesUncheckedUpdateManyWithoutUserNestedInput;
		Cookbook_Likes?: Cookbook_LikesUncheckedUpdateManyWithoutUserNestedInput;
	};

	export type CommentRecipeUpsertWithWhereUniqueWithoutRecipeInput = {
		where: CommentRecipeWhereUniqueInput;
		update: XOR<
			CommentRecipeUpdateWithoutRecipeInput,
			CommentRecipeUncheckedUpdateWithoutRecipeInput
		>;
		create: XOR<
			CommentRecipeCreateWithoutRecipeInput,
			CommentRecipeUncheckedCreateWithoutRecipeInput
		>;
	};

	export type CommentRecipeUpdateWithWhereUniqueWithoutRecipeInput = {
		where: CommentRecipeWhereUniqueInput;
		data: XOR<
			CommentRecipeUpdateWithoutRecipeInput,
			CommentRecipeUncheckedUpdateWithoutRecipeInput
		>;
	};

	export type CommentRecipeUpdateManyWithWhereWithoutRecipeInput = {
		where: CommentRecipeScalarWhereInput;
		data: XOR<
			CommentRecipeUpdateManyMutationInput,
			CommentRecipeUncheckedUpdateManyWithoutRecipeInput
		>;
	};

	export type CommentRecipeScalarWhereInput = {
		AND?: CommentRecipeScalarWhereInput | CommentRecipeScalarWhereInput[];
		OR?: CommentRecipeScalarWhereInput[];
		NOT?: CommentRecipeScalarWhereInput | CommentRecipeScalarWhereInput[];
		id?: StringFilter<'CommentRecipe'> | string;
		description?: StringFilter<'CommentRecipe'> | string;
		createdAt?: DateTimeFilter<'CommentRecipe'> | Date | string;
		updatedAt?: DateTimeFilter<'CommentRecipe'> | Date | string;
		recipe_id?: StringNullableFilter<'CommentRecipe'> | string | null;
	};

	export type CookbookUpsertWithWhereUniqueWithoutRecipeInput = {
		where: CookbookWhereUniqueInput;
		update: XOR<CookbookUpdateWithoutRecipeInput, CookbookUncheckedUpdateWithoutRecipeInput>;
		create: XOR<CookbookCreateWithoutRecipeInput, CookbookUncheckedCreateWithoutRecipeInput>;
	};

	export type CookbookUpdateWithWhereUniqueWithoutRecipeInput = {
		where: CookbookWhereUniqueInput;
		data: XOR<CookbookUpdateWithoutRecipeInput, CookbookUncheckedUpdateWithoutRecipeInput>;
	};

	export type CookbookUpdateManyWithWhereWithoutRecipeInput = {
		where: CookbookScalarWhereInput;
		data: XOR<CookbookUpdateManyMutationInput, CookbookUncheckedUpdateManyWithoutRecipeInput>;
	};

	export type Recipe_LikesUpsertWithWhereUniqueWithoutRecipeInput = {
		where: Recipe_LikesWhereUniqueInput;
		update: XOR<
			Recipe_LikesUpdateWithoutRecipeInput,
			Recipe_LikesUncheckedUpdateWithoutRecipeInput
		>;
		create: XOR<
			Recipe_LikesCreateWithoutRecipeInput,
			Recipe_LikesUncheckedCreateWithoutRecipeInput
		>;
	};

	export type Recipe_LikesUpdateWithWhereUniqueWithoutRecipeInput = {
		where: Recipe_LikesWhereUniqueInput;
		data: XOR<Recipe_LikesUpdateWithoutRecipeInput, Recipe_LikesUncheckedUpdateWithoutRecipeInput>;
	};

	export type Recipe_LikesUpdateManyWithWhereWithoutRecipeInput = {
		where: Recipe_LikesScalarWhereInput;
		data: XOR<
			Recipe_LikesUpdateManyMutationInput,
			Recipe_LikesUncheckedUpdateManyWithoutRecipeInput
		>;
	};

	export type RecipeCreateWithoutLikesInput = {
		id?: string;
		title: string;
		description?: string | null;
		ingredients?: RecipeCreateingredientsInput | string[];
		direction?: RecipeCreatedirectionInput | string[];
		views?: number;
		estimated_time: Date | string;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user?: UserCreateNestedOneWithoutRecipeInput;
		comment?: CommentRecipeCreateNestedManyWithoutRecipeInput;
		cookbook?: CookbookCreateNestedManyWithoutRecipeInput;
	};

	export type RecipeUncheckedCreateWithoutLikesInput = {
		id?: string;
		title: string;
		description?: string | null;
		ingredients?: RecipeCreateingredientsInput | string[];
		direction?: RecipeCreatedirectionInput | string[];
		views?: number;
		estimated_time: Date | string;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user_id?: string | null;
		comment?: CommentRecipeUncheckedCreateNestedManyWithoutRecipeInput;
		cookbook?: CookbookUncheckedCreateNestedManyWithoutRecipeInput;
	};

	export type RecipeCreateOrConnectWithoutLikesInput = {
		where: RecipeWhereUniqueInput;
		create: XOR<RecipeCreateWithoutLikesInput, RecipeUncheckedCreateWithoutLikesInput>;
	};

	export type UserCreateWithoutLikesInput = {
		id?: string;
		email: string;
		name?: string | null;
		password: string;
		image?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		recipe?: RecipeCreateNestedManyWithoutUserInput;
		cookbook?: CookbookCreateNestedManyWithoutUserInput;
		Cookbook_Likes?: Cookbook_LikesCreateNestedManyWithoutUserInput;
	};

	export type UserUncheckedCreateWithoutLikesInput = {
		id?: string;
		email: string;
		name?: string | null;
		password: string;
		image?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		recipe?: RecipeUncheckedCreateNestedManyWithoutUserInput;
		cookbook?: CookbookUncheckedCreateNestedManyWithoutUserInput;
		Cookbook_Likes?: Cookbook_LikesUncheckedCreateNestedManyWithoutUserInput;
	};

	export type UserCreateOrConnectWithoutLikesInput = {
		where: UserWhereUniqueInput;
		create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>;
	};

	export type RecipeUpsertWithoutLikesInput = {
		update: XOR<RecipeUpdateWithoutLikesInput, RecipeUncheckedUpdateWithoutLikesInput>;
		create: XOR<RecipeCreateWithoutLikesInput, RecipeUncheckedCreateWithoutLikesInput>;
		where?: RecipeWhereInput;
	};

	export type RecipeUpdateToOneWithWhereWithoutLikesInput = {
		where?: RecipeWhereInput;
		data: XOR<RecipeUpdateWithoutLikesInput, RecipeUncheckedUpdateWithoutLikesInput>;
	};

	export type RecipeUpdateWithoutLikesInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		ingredients?: RecipeUpdateingredientsInput | string[];
		direction?: RecipeUpdatedirectionInput | string[];
		views?: IntFieldUpdateOperationsInput | number;
		estimated_time?: DateTimeFieldUpdateOperationsInput | Date | string;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneWithoutRecipeNestedInput;
		comment?: CommentRecipeUpdateManyWithoutRecipeNestedInput;
		cookbook?: CookbookUpdateManyWithoutRecipeNestedInput;
	};

	export type RecipeUncheckedUpdateWithoutLikesInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		ingredients?: RecipeUpdateingredientsInput | string[];
		direction?: RecipeUpdatedirectionInput | string[];
		views?: IntFieldUpdateOperationsInput | number;
		estimated_time?: DateTimeFieldUpdateOperationsInput | Date | string;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		comment?: CommentRecipeUncheckedUpdateManyWithoutRecipeNestedInput;
		cookbook?: CookbookUncheckedUpdateManyWithoutRecipeNestedInput;
	};

	export type UserUpsertWithoutLikesInput = {
		update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>;
		create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>;
		where?: UserWhereInput;
	};

	export type UserUpdateToOneWithWhereWithoutLikesInput = {
		where?: UserWhereInput;
		data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>;
	};

	export type UserUpdateWithoutLikesInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		name?: NullableStringFieldUpdateOperationsInput | string | null;
		password?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		recipe?: RecipeUpdateManyWithoutUserNestedInput;
		cookbook?: CookbookUpdateManyWithoutUserNestedInput;
		Cookbook_Likes?: Cookbook_LikesUpdateManyWithoutUserNestedInput;
	};

	export type UserUncheckedUpdateWithoutLikesInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		name?: NullableStringFieldUpdateOperationsInput | string | null;
		password?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		recipe?: RecipeUncheckedUpdateManyWithoutUserNestedInput;
		cookbook?: CookbookUncheckedUpdateManyWithoutUserNestedInput;
		Cookbook_Likes?: Cookbook_LikesUncheckedUpdateManyWithoutUserNestedInput;
	};

	export type RecipeCreateWithoutCommentInput = {
		id?: string;
		title: string;
		description?: string | null;
		ingredients?: RecipeCreateingredientsInput | string[];
		direction?: RecipeCreatedirectionInput | string[];
		views?: number;
		estimated_time: Date | string;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user?: UserCreateNestedOneWithoutRecipeInput;
		cookbook?: CookbookCreateNestedManyWithoutRecipeInput;
		likes?: Recipe_LikesCreateNestedManyWithoutRecipeInput;
	};

	export type RecipeUncheckedCreateWithoutCommentInput = {
		id?: string;
		title: string;
		description?: string | null;
		ingredients?: RecipeCreateingredientsInput | string[];
		direction?: RecipeCreatedirectionInput | string[];
		views?: number;
		estimated_time: Date | string;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user_id?: string | null;
		cookbook?: CookbookUncheckedCreateNestedManyWithoutRecipeInput;
		likes?: Recipe_LikesUncheckedCreateNestedManyWithoutRecipeInput;
	};

	export type RecipeCreateOrConnectWithoutCommentInput = {
		where: RecipeWhereUniqueInput;
		create: XOR<RecipeCreateWithoutCommentInput, RecipeUncheckedCreateWithoutCommentInput>;
	};

	export type RecipeUpsertWithoutCommentInput = {
		update: XOR<RecipeUpdateWithoutCommentInput, RecipeUncheckedUpdateWithoutCommentInput>;
		create: XOR<RecipeCreateWithoutCommentInput, RecipeUncheckedCreateWithoutCommentInput>;
		where?: RecipeWhereInput;
	};

	export type RecipeUpdateToOneWithWhereWithoutCommentInput = {
		where?: RecipeWhereInput;
		data: XOR<RecipeUpdateWithoutCommentInput, RecipeUncheckedUpdateWithoutCommentInput>;
	};

	export type RecipeUpdateWithoutCommentInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		ingredients?: RecipeUpdateingredientsInput | string[];
		direction?: RecipeUpdatedirectionInput | string[];
		views?: IntFieldUpdateOperationsInput | number;
		estimated_time?: DateTimeFieldUpdateOperationsInput | Date | string;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneWithoutRecipeNestedInput;
		cookbook?: CookbookUpdateManyWithoutRecipeNestedInput;
		likes?: Recipe_LikesUpdateManyWithoutRecipeNestedInput;
	};

	export type RecipeUncheckedUpdateWithoutCommentInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		ingredients?: RecipeUpdateingredientsInput | string[];
		direction?: RecipeUpdatedirectionInput | string[];
		views?: IntFieldUpdateOperationsInput | number;
		estimated_time?: DateTimeFieldUpdateOperationsInput | Date | string;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		cookbook?: CookbookUncheckedUpdateManyWithoutRecipeNestedInput;
		likes?: Recipe_LikesUncheckedUpdateManyWithoutRecipeNestedInput;
	};

	export type UserCreateWithoutCookbookInput = {
		id?: string;
		email: string;
		name?: string | null;
		password: string;
		image?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		recipe?: RecipeCreateNestedManyWithoutUserInput;
		likes?: Recipe_LikesCreateNestedManyWithoutUserInput;
		Cookbook_Likes?: Cookbook_LikesCreateNestedManyWithoutUserInput;
	};

	export type UserUncheckedCreateWithoutCookbookInput = {
		id?: string;
		email: string;
		name?: string | null;
		password: string;
		image?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		recipe?: RecipeUncheckedCreateNestedManyWithoutUserInput;
		likes?: Recipe_LikesUncheckedCreateNestedManyWithoutUserInput;
		Cookbook_Likes?: Cookbook_LikesUncheckedCreateNestedManyWithoutUserInput;
	};

	export type UserCreateOrConnectWithoutCookbookInput = {
		where: UserWhereUniqueInput;
		create: XOR<UserCreateWithoutCookbookInput, UserUncheckedCreateWithoutCookbookInput>;
	};

	export type RecipeCreateWithoutCookbookInput = {
		id?: string;
		title: string;
		description?: string | null;
		ingredients?: RecipeCreateingredientsInput | string[];
		direction?: RecipeCreatedirectionInput | string[];
		views?: number;
		estimated_time: Date | string;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user?: UserCreateNestedOneWithoutRecipeInput;
		comment?: CommentRecipeCreateNestedManyWithoutRecipeInput;
		likes?: Recipe_LikesCreateNestedManyWithoutRecipeInput;
	};

	export type RecipeUncheckedCreateWithoutCookbookInput = {
		id?: string;
		title: string;
		description?: string | null;
		ingredients?: RecipeCreateingredientsInput | string[];
		direction?: RecipeCreatedirectionInput | string[];
		views?: number;
		estimated_time: Date | string;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user_id?: string | null;
		comment?: CommentRecipeUncheckedCreateNestedManyWithoutRecipeInput;
		likes?: Recipe_LikesUncheckedCreateNestedManyWithoutRecipeInput;
	};

	export type RecipeCreateOrConnectWithoutCookbookInput = {
		where: RecipeWhereUniqueInput;
		create: XOR<RecipeCreateWithoutCookbookInput, RecipeUncheckedCreateWithoutCookbookInput>;
	};

	export type CommentCookbookCreateWithoutCookbookInput = {
		id?: string;
		description: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type CommentCookbookUncheckedCreateWithoutCookbookInput = {
		id?: string;
		description: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type CommentCookbookCreateOrConnectWithoutCookbookInput = {
		where: CommentCookbookWhereUniqueInput;
		create: XOR<
			CommentCookbookCreateWithoutCookbookInput,
			CommentCookbookUncheckedCreateWithoutCookbookInput
		>;
	};

	export type CommentCookbookCreateManyCookbookInputEnvelope = {
		data: CommentCookbookCreateManyCookbookInput | CommentCookbookCreateManyCookbookInput[];
		skipDuplicates?: boolean;
	};

	export type Cookbook_LikesCreateWithoutCookbookInput = {
		id?: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user?: UserCreateNestedOneWithoutCookbook_LikesInput;
	};

	export type Cookbook_LikesUncheckedCreateWithoutCookbookInput = {
		id?: string;
		user_id?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type Cookbook_LikesCreateOrConnectWithoutCookbookInput = {
		where: Cookbook_LikesWhereUniqueInput;
		create: XOR<
			Cookbook_LikesCreateWithoutCookbookInput,
			Cookbook_LikesUncheckedCreateWithoutCookbookInput
		>;
	};

	export type Cookbook_LikesCreateManyCookbookInputEnvelope = {
		data: Cookbook_LikesCreateManyCookbookInput | Cookbook_LikesCreateManyCookbookInput[];
		skipDuplicates?: boolean;
	};

	export type UserUpsertWithoutCookbookInput = {
		update: XOR<UserUpdateWithoutCookbookInput, UserUncheckedUpdateWithoutCookbookInput>;
		create: XOR<UserCreateWithoutCookbookInput, UserUncheckedCreateWithoutCookbookInput>;
		where?: UserWhereInput;
	};

	export type UserUpdateToOneWithWhereWithoutCookbookInput = {
		where?: UserWhereInput;
		data: XOR<UserUpdateWithoutCookbookInput, UserUncheckedUpdateWithoutCookbookInput>;
	};

	export type UserUpdateWithoutCookbookInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		name?: NullableStringFieldUpdateOperationsInput | string | null;
		password?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		recipe?: RecipeUpdateManyWithoutUserNestedInput;
		likes?: Recipe_LikesUpdateManyWithoutUserNestedInput;
		Cookbook_Likes?: Cookbook_LikesUpdateManyWithoutUserNestedInput;
	};

	export type UserUncheckedUpdateWithoutCookbookInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		name?: NullableStringFieldUpdateOperationsInput | string | null;
		password?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		recipe?: RecipeUncheckedUpdateManyWithoutUserNestedInput;
		likes?: Recipe_LikesUncheckedUpdateManyWithoutUserNestedInput;
		Cookbook_Likes?: Cookbook_LikesUncheckedUpdateManyWithoutUserNestedInput;
	};

	export type RecipeUpsertWithoutCookbookInput = {
		update: XOR<RecipeUpdateWithoutCookbookInput, RecipeUncheckedUpdateWithoutCookbookInput>;
		create: XOR<RecipeCreateWithoutCookbookInput, RecipeUncheckedCreateWithoutCookbookInput>;
		where?: RecipeWhereInput;
	};

	export type RecipeUpdateToOneWithWhereWithoutCookbookInput = {
		where?: RecipeWhereInput;
		data: XOR<RecipeUpdateWithoutCookbookInput, RecipeUncheckedUpdateWithoutCookbookInput>;
	};

	export type RecipeUpdateWithoutCookbookInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		ingredients?: RecipeUpdateingredientsInput | string[];
		direction?: RecipeUpdatedirectionInput | string[];
		views?: IntFieldUpdateOperationsInput | number;
		estimated_time?: DateTimeFieldUpdateOperationsInput | Date | string;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneWithoutRecipeNestedInput;
		comment?: CommentRecipeUpdateManyWithoutRecipeNestedInput;
		likes?: Recipe_LikesUpdateManyWithoutRecipeNestedInput;
	};

	export type RecipeUncheckedUpdateWithoutCookbookInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		ingredients?: RecipeUpdateingredientsInput | string[];
		direction?: RecipeUpdatedirectionInput | string[];
		views?: IntFieldUpdateOperationsInput | number;
		estimated_time?: DateTimeFieldUpdateOperationsInput | Date | string;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		comment?: CommentRecipeUncheckedUpdateManyWithoutRecipeNestedInput;
		likes?: Recipe_LikesUncheckedUpdateManyWithoutRecipeNestedInput;
	};

	export type CommentCookbookUpsertWithWhereUniqueWithoutCookbookInput = {
		where: CommentCookbookWhereUniqueInput;
		update: XOR<
			CommentCookbookUpdateWithoutCookbookInput,
			CommentCookbookUncheckedUpdateWithoutCookbookInput
		>;
		create: XOR<
			CommentCookbookCreateWithoutCookbookInput,
			CommentCookbookUncheckedCreateWithoutCookbookInput
		>;
	};

	export type CommentCookbookUpdateWithWhereUniqueWithoutCookbookInput = {
		where: CommentCookbookWhereUniqueInput;
		data: XOR<
			CommentCookbookUpdateWithoutCookbookInput,
			CommentCookbookUncheckedUpdateWithoutCookbookInput
		>;
	};

	export type CommentCookbookUpdateManyWithWhereWithoutCookbookInput = {
		where: CommentCookbookScalarWhereInput;
		data: XOR<
			CommentCookbookUpdateManyMutationInput,
			CommentCookbookUncheckedUpdateManyWithoutCookbookInput
		>;
	};

	export type CommentCookbookScalarWhereInput = {
		AND?: CommentCookbookScalarWhereInput | CommentCookbookScalarWhereInput[];
		OR?: CommentCookbookScalarWhereInput[];
		NOT?: CommentCookbookScalarWhereInput | CommentCookbookScalarWhereInput[];
		id?: StringFilter<'CommentCookbook'> | string;
		description?: StringFilter<'CommentCookbook'> | string;
		createdAt?: DateTimeFilter<'CommentCookbook'> | Date | string;
		updatedAt?: DateTimeFilter<'CommentCookbook'> | Date | string;
		cookbook_id?: StringNullableFilter<'CommentCookbook'> | string | null;
	};

	export type Cookbook_LikesUpsertWithWhereUniqueWithoutCookbookInput = {
		where: Cookbook_LikesWhereUniqueInput;
		update: XOR<
			Cookbook_LikesUpdateWithoutCookbookInput,
			Cookbook_LikesUncheckedUpdateWithoutCookbookInput
		>;
		create: XOR<
			Cookbook_LikesCreateWithoutCookbookInput,
			Cookbook_LikesUncheckedCreateWithoutCookbookInput
		>;
	};

	export type Cookbook_LikesUpdateWithWhereUniqueWithoutCookbookInput = {
		where: Cookbook_LikesWhereUniqueInput;
		data: XOR<
			Cookbook_LikesUpdateWithoutCookbookInput,
			Cookbook_LikesUncheckedUpdateWithoutCookbookInput
		>;
	};

	export type Cookbook_LikesUpdateManyWithWhereWithoutCookbookInput = {
		where: Cookbook_LikesScalarWhereInput;
		data: XOR<
			Cookbook_LikesUpdateManyMutationInput,
			Cookbook_LikesUncheckedUpdateManyWithoutCookbookInput
		>;
	};

	export type CookbookCreateWithoutCookbook_LikesInput = {
		id?: string;
		title: string;
		description?: string | null;
		likes?: number;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user?: UserCreateNestedOneWithoutCookbookInput;
		recipe?: RecipeCreateNestedOneWithoutCookbookInput;
		commentCookbook?: CommentCookbookCreateNestedManyWithoutCookbookInput;
	};

	export type CookbookUncheckedCreateWithoutCookbook_LikesInput = {
		id?: string;
		title: string;
		description?: string | null;
		likes?: number;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user_id?: string | null;
		recipe_id?: string | null;
		commentCookbook?: CommentCookbookUncheckedCreateNestedManyWithoutCookbookInput;
	};

	export type CookbookCreateOrConnectWithoutCookbook_LikesInput = {
		where: CookbookWhereUniqueInput;
		create: XOR<
			CookbookCreateWithoutCookbook_LikesInput,
			CookbookUncheckedCreateWithoutCookbook_LikesInput
		>;
	};

	export type UserCreateWithoutCookbook_LikesInput = {
		id?: string;
		email: string;
		name?: string | null;
		password: string;
		image?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		recipe?: RecipeCreateNestedManyWithoutUserInput;
		cookbook?: CookbookCreateNestedManyWithoutUserInput;
		likes?: Recipe_LikesCreateNestedManyWithoutUserInput;
	};

	export type UserUncheckedCreateWithoutCookbook_LikesInput = {
		id?: string;
		email: string;
		name?: string | null;
		password: string;
		image?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		recipe?: RecipeUncheckedCreateNestedManyWithoutUserInput;
		cookbook?: CookbookUncheckedCreateNestedManyWithoutUserInput;
		likes?: Recipe_LikesUncheckedCreateNestedManyWithoutUserInput;
	};

	export type UserCreateOrConnectWithoutCookbook_LikesInput = {
		where: UserWhereUniqueInput;
		create: XOR<
			UserCreateWithoutCookbook_LikesInput,
			UserUncheckedCreateWithoutCookbook_LikesInput
		>;
	};

	export type CookbookUpsertWithoutCookbook_LikesInput = {
		update: XOR<
			CookbookUpdateWithoutCookbook_LikesInput,
			CookbookUncheckedUpdateWithoutCookbook_LikesInput
		>;
		create: XOR<
			CookbookCreateWithoutCookbook_LikesInput,
			CookbookUncheckedCreateWithoutCookbook_LikesInput
		>;
		where?: CookbookWhereInput;
	};

	export type CookbookUpdateToOneWithWhereWithoutCookbook_LikesInput = {
		where?: CookbookWhereInput;
		data: XOR<
			CookbookUpdateWithoutCookbook_LikesInput,
			CookbookUncheckedUpdateWithoutCookbook_LikesInput
		>;
	};

	export type CookbookUpdateWithoutCookbook_LikesInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		likes?: IntFieldUpdateOperationsInput | number;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneWithoutCookbookNestedInput;
		recipe?: RecipeUpdateOneWithoutCookbookNestedInput;
		commentCookbook?: CommentCookbookUpdateManyWithoutCookbookNestedInput;
	};

	export type CookbookUncheckedUpdateWithoutCookbook_LikesInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		likes?: IntFieldUpdateOperationsInput | number;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		recipe_id?: NullableStringFieldUpdateOperationsInput | string | null;
		commentCookbook?: CommentCookbookUncheckedUpdateManyWithoutCookbookNestedInput;
	};

	export type UserUpsertWithoutCookbook_LikesInput = {
		update: XOR<
			UserUpdateWithoutCookbook_LikesInput,
			UserUncheckedUpdateWithoutCookbook_LikesInput
		>;
		create: XOR<
			UserCreateWithoutCookbook_LikesInput,
			UserUncheckedCreateWithoutCookbook_LikesInput
		>;
		where?: UserWhereInput;
	};

	export type UserUpdateToOneWithWhereWithoutCookbook_LikesInput = {
		where?: UserWhereInput;
		data: XOR<UserUpdateWithoutCookbook_LikesInput, UserUncheckedUpdateWithoutCookbook_LikesInput>;
	};

	export type UserUpdateWithoutCookbook_LikesInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		name?: NullableStringFieldUpdateOperationsInput | string | null;
		password?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		recipe?: RecipeUpdateManyWithoutUserNestedInput;
		cookbook?: CookbookUpdateManyWithoutUserNestedInput;
		likes?: Recipe_LikesUpdateManyWithoutUserNestedInput;
	};

	export type UserUncheckedUpdateWithoutCookbook_LikesInput = {
		id?: StringFieldUpdateOperationsInput | string;
		email?: StringFieldUpdateOperationsInput | string;
		name?: NullableStringFieldUpdateOperationsInput | string | null;
		password?: StringFieldUpdateOperationsInput | string;
		image?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		recipe?: RecipeUncheckedUpdateManyWithoutUserNestedInput;
		cookbook?: CookbookUncheckedUpdateManyWithoutUserNestedInput;
		likes?: Recipe_LikesUncheckedUpdateManyWithoutUserNestedInput;
	};

	export type CookbookCreateWithoutCommentCookbookInput = {
		id?: string;
		title: string;
		description?: string | null;
		likes?: number;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user?: UserCreateNestedOneWithoutCookbookInput;
		recipe?: RecipeCreateNestedOneWithoutCookbookInput;
		Cookbook_Likes?: Cookbook_LikesCreateNestedManyWithoutCookbookInput;
	};

	export type CookbookUncheckedCreateWithoutCommentCookbookInput = {
		id?: string;
		title: string;
		description?: string | null;
		likes?: number;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user_id?: string | null;
		recipe_id?: string | null;
		Cookbook_Likes?: Cookbook_LikesUncheckedCreateNestedManyWithoutCookbookInput;
	};

	export type CookbookCreateOrConnectWithoutCommentCookbookInput = {
		where: CookbookWhereUniqueInput;
		create: XOR<
			CookbookCreateWithoutCommentCookbookInput,
			CookbookUncheckedCreateWithoutCommentCookbookInput
		>;
	};

	export type CookbookUpsertWithoutCommentCookbookInput = {
		update: XOR<
			CookbookUpdateWithoutCommentCookbookInput,
			CookbookUncheckedUpdateWithoutCommentCookbookInput
		>;
		create: XOR<
			CookbookCreateWithoutCommentCookbookInput,
			CookbookUncheckedCreateWithoutCommentCookbookInput
		>;
		where?: CookbookWhereInput;
	};

	export type CookbookUpdateToOneWithWhereWithoutCommentCookbookInput = {
		where?: CookbookWhereInput;
		data: XOR<
			CookbookUpdateWithoutCommentCookbookInput,
			CookbookUncheckedUpdateWithoutCommentCookbookInput
		>;
	};

	export type CookbookUpdateWithoutCommentCookbookInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		likes?: IntFieldUpdateOperationsInput | number;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneWithoutCookbookNestedInput;
		recipe?: RecipeUpdateOneWithoutCookbookNestedInput;
		Cookbook_Likes?: Cookbook_LikesUpdateManyWithoutCookbookNestedInput;
	};

	export type CookbookUncheckedUpdateWithoutCommentCookbookInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		likes?: IntFieldUpdateOperationsInput | number;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		recipe_id?: NullableStringFieldUpdateOperationsInput | string | null;
		Cookbook_Likes?: Cookbook_LikesUncheckedUpdateManyWithoutCookbookNestedInput;
	};

	export type RecipeCreateManyUserInput = {
		id?: string;
		title: string;
		description?: string | null;
		ingredients?: RecipeCreateingredientsInput | string[];
		direction?: RecipeCreatedirectionInput | string[];
		views?: number;
		estimated_time: Date | string;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type CookbookCreateManyUserInput = {
		id?: string;
		title: string;
		description?: string | null;
		likes?: number;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		recipe_id?: string | null;
	};

	export type Recipe_LikesCreateManyUserInput = {
		id?: string;
		recipe_id?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type Cookbook_LikesCreateManyUserInput = {
		id?: string;
		cookbook_id?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type RecipeUpdateWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		ingredients?: RecipeUpdateingredientsInput | string[];
		direction?: RecipeUpdatedirectionInput | string[];
		views?: IntFieldUpdateOperationsInput | number;
		estimated_time?: DateTimeFieldUpdateOperationsInput | Date | string;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		comment?: CommentRecipeUpdateManyWithoutRecipeNestedInput;
		cookbook?: CookbookUpdateManyWithoutRecipeNestedInput;
		likes?: Recipe_LikesUpdateManyWithoutRecipeNestedInput;
	};

	export type RecipeUncheckedUpdateWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		ingredients?: RecipeUpdateingredientsInput | string[];
		direction?: RecipeUpdatedirectionInput | string[];
		views?: IntFieldUpdateOperationsInput | number;
		estimated_time?: DateTimeFieldUpdateOperationsInput | Date | string;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		comment?: CommentRecipeUncheckedUpdateManyWithoutRecipeNestedInput;
		cookbook?: CookbookUncheckedUpdateManyWithoutRecipeNestedInput;
		likes?: Recipe_LikesUncheckedUpdateManyWithoutRecipeNestedInput;
	};

	export type RecipeUncheckedUpdateManyWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		ingredients?: RecipeUpdateingredientsInput | string[];
		direction?: RecipeUpdatedirectionInput | string[];
		views?: IntFieldUpdateOperationsInput | number;
		estimated_time?: DateTimeFieldUpdateOperationsInput | Date | string;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type CookbookUpdateWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		likes?: IntFieldUpdateOperationsInput | number;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		recipe?: RecipeUpdateOneWithoutCookbookNestedInput;
		commentCookbook?: CommentCookbookUpdateManyWithoutCookbookNestedInput;
		Cookbook_Likes?: Cookbook_LikesUpdateManyWithoutCookbookNestedInput;
	};

	export type CookbookUncheckedUpdateWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		likes?: IntFieldUpdateOperationsInput | number;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		recipe_id?: NullableStringFieldUpdateOperationsInput | string | null;
		commentCookbook?: CommentCookbookUncheckedUpdateManyWithoutCookbookNestedInput;
		Cookbook_Likes?: Cookbook_LikesUncheckedUpdateManyWithoutCookbookNestedInput;
	};

	export type CookbookUncheckedUpdateManyWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		likes?: IntFieldUpdateOperationsInput | number;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		recipe_id?: NullableStringFieldUpdateOperationsInput | string | null;
	};

	export type Recipe_LikesUpdateWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		recipe?: RecipeUpdateOneWithoutLikesNestedInput;
	};

	export type Recipe_LikesUncheckedUpdateWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		recipe_id?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type Recipe_LikesUncheckedUpdateManyWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		recipe_id?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type Cookbook_LikesUpdateWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		cookbook?: CookbookUpdateOneWithoutCookbook_LikesNestedInput;
	};

	export type Cookbook_LikesUncheckedUpdateWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		cookbook_id?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type Cookbook_LikesUncheckedUpdateManyWithoutUserInput = {
		id?: StringFieldUpdateOperationsInput | string;
		cookbook_id?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type CommentRecipeCreateManyRecipeInput = {
		id?: string;
		description: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type CookbookCreateManyRecipeInput = {
		id?: string;
		title: string;
		description?: string | null;
		likes?: number;
		image: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
		user_id?: string | null;
	};

	export type Recipe_LikesCreateManyRecipeInput = {
		id?: string;
		user_id?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type CommentRecipeUpdateWithoutRecipeInput = {
		id?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type CommentRecipeUncheckedUpdateWithoutRecipeInput = {
		id?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type CommentRecipeUncheckedUpdateManyWithoutRecipeInput = {
		id?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type CookbookUpdateWithoutRecipeInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		likes?: IntFieldUpdateOperationsInput | number;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneWithoutCookbookNestedInput;
		commentCookbook?: CommentCookbookUpdateManyWithoutCookbookNestedInput;
		Cookbook_Likes?: Cookbook_LikesUpdateManyWithoutCookbookNestedInput;
	};

	export type CookbookUncheckedUpdateWithoutRecipeInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		likes?: IntFieldUpdateOperationsInput | number;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		commentCookbook?: CommentCookbookUncheckedUpdateManyWithoutCookbookNestedInput;
		Cookbook_Likes?: Cookbook_LikesUncheckedUpdateManyWithoutCookbookNestedInput;
	};

	export type CookbookUncheckedUpdateManyWithoutRecipeInput = {
		id?: StringFieldUpdateOperationsInput | string;
		title?: StringFieldUpdateOperationsInput | string;
		description?: NullableStringFieldUpdateOperationsInput | string | null;
		likes?: IntFieldUpdateOperationsInput | number;
		image?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
	};

	export type Recipe_LikesUpdateWithoutRecipeInput = {
		id?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneWithoutLikesNestedInput;
	};

	export type Recipe_LikesUncheckedUpdateWithoutRecipeInput = {
		id?: StringFieldUpdateOperationsInput | string;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type Recipe_LikesUncheckedUpdateManyWithoutRecipeInput = {
		id?: StringFieldUpdateOperationsInput | string;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type CommentCookbookCreateManyCookbookInput = {
		id?: string;
		description: string;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type Cookbook_LikesCreateManyCookbookInput = {
		id?: string;
		user_id?: string | null;
		createdAt?: Date | string;
		updatedAt?: Date | string;
	};

	export type CommentCookbookUpdateWithoutCookbookInput = {
		id?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type CommentCookbookUncheckedUpdateWithoutCookbookInput = {
		id?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type CommentCookbookUncheckedUpdateManyWithoutCookbookInput = {
		id?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type Cookbook_LikesUpdateWithoutCookbookInput = {
		id?: StringFieldUpdateOperationsInput | string;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		user?: UserUpdateOneWithoutCookbook_LikesNestedInput;
	};

	export type Cookbook_LikesUncheckedUpdateWithoutCookbookInput = {
		id?: StringFieldUpdateOperationsInput | string;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	export type Cookbook_LikesUncheckedUpdateManyWithoutCookbookInput = {
		id?: StringFieldUpdateOperationsInput | string;
		user_id?: NullableStringFieldUpdateOperationsInput | string | null;
		createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
		updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
	};

	/**
	 * Batch Payload for updateMany & deleteMany & createMany
	 */

	export type BatchPayload = {
		count: number;
	};

	/**
	 * DMMF
	 */
	export const dmmf: runtime.BaseDMMF;
}
