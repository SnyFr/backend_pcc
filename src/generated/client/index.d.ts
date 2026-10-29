
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Channel
 * 
 */
export type Channel = $Result.DefaultSelection<Prisma.$ChannelPayload>
/**
 * Model Content
 * 
 */
export type Content = $Result.DefaultSelection<Prisma.$ContentPayload>
/**
 * Model ContentChecklist
 * 
 */
export type ContentChecklist = $Result.DefaultSelection<Prisma.$ContentChecklistPayload>
/**
 * Model ContentMetric
 * 
 */
export type ContentMetric = $Result.DefaultSelection<Prisma.$ContentMetricPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  creator: 'creator',
  editor: 'editor',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const FormatType: {
  short_video: 'short_video',
  long_video: 'long_video',
  carousel: 'carousel',
  single_post: 'single_post'
};

export type FormatType = (typeof FormatType)[keyof typeof FormatType]


export const Status: {
  idea: 'idea',
  scripting: 'scripting',
  recording: 'recording',
  editing: 'editing',
  review: 'review',
  ready: 'ready',
  published: 'published'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Priority: {
  low: 'low',
  medium: 'medium',
  high: 'high'
};

export type Priority = (typeof Priority)[keyof typeof Priority]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type FormatType = $Enums.FormatType

export const FormatType: typeof $Enums.FormatType

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.channel`: Exposes CRUD operations for the **Channel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channel.findMany()
    * ```
    */
  get channel(): Prisma.ChannelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **Content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents
    * const contents = await prisma.content.findMany()
    * ```
    */
  get content(): Prisma.ContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentChecklist`: Exposes CRUD operations for the **ContentChecklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentChecklists
    * const contentChecklists = await prisma.contentChecklist.findMany()
    * ```
    */
  get contentChecklist(): Prisma.ContentChecklistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentMetric`: Exposes CRUD operations for the **ContentMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentMetrics
    * const contentMetrics = await prisma.contentMetric.findMany()
    * ```
    */
  get contentMetric(): Prisma.ContentMetricDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Channel: 'Channel',
    Content: 'Content',
    ContentChecklist: 'ContentChecklist',
    ContentMetric: 'ContentMetric'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "channel" | "content" | "contentChecklist" | "contentMetric"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Channel: {
        payload: Prisma.$ChannelPayload<ExtArgs>
        fields: Prisma.ChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findFirst: {
            args: Prisma.ChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          findMany: {
            args: Prisma.ChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>[]
          }
          create: {
            args: Prisma.ChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          createMany: {
            args: Prisma.ChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          update: {
            args: Prisma.ChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          deleteMany: {
            args: Prisma.ChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChannelPayload>
          }
          aggregate: {
            args: Prisma.ChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannel>
          }
          groupBy: {
            args: Prisma.ChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChannelCountArgs<ExtArgs>
            result: $Utils.Optional<ChannelCountAggregateOutputType> | number
          }
        }
      }
      Content: {
        payload: Prisma.$ContentPayload<ExtArgs>
        fields: Prisma.ContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findFirst: {
            args: Prisma.ContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findMany: {
            args: Prisma.ContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          create: {
            args: Prisma.ContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          createMany: {
            args: Prisma.ContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          update: {
            args: Prisma.ContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          deleteMany: {
            args: Prisma.ContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContent>
          }
          groupBy: {
            args: Prisma.ContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentCountArgs<ExtArgs>
            result: $Utils.Optional<ContentCountAggregateOutputType> | number
          }
        }
      }
      ContentChecklist: {
        payload: Prisma.$ContentChecklistPayload<ExtArgs>
        fields: Prisma.ContentChecklistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentChecklistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChecklistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentChecklistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChecklistPayload>
          }
          findFirst: {
            args: Prisma.ContentChecklistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChecklistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentChecklistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChecklistPayload>
          }
          findMany: {
            args: Prisma.ContentChecklistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChecklistPayload>[]
          }
          create: {
            args: Prisma.ContentChecklistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChecklistPayload>
          }
          createMany: {
            args: Prisma.ContentChecklistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContentChecklistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChecklistPayload>
          }
          update: {
            args: Prisma.ContentChecklistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChecklistPayload>
          }
          deleteMany: {
            args: Prisma.ContentChecklistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentChecklistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContentChecklistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentChecklistPayload>
          }
          aggregate: {
            args: Prisma.ContentChecklistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentChecklist>
          }
          groupBy: {
            args: Prisma.ContentChecklistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentChecklistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentChecklistCountArgs<ExtArgs>
            result: $Utils.Optional<ContentChecklistCountAggregateOutputType> | number
          }
        }
      }
      ContentMetric: {
        payload: Prisma.$ContentMetricPayload<ExtArgs>
        fields: Prisma.ContentMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentMetricPayload>
          }
          findFirst: {
            args: Prisma.ContentMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentMetricPayload>
          }
          findMany: {
            args: Prisma.ContentMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentMetricPayload>[]
          }
          create: {
            args: Prisma.ContentMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentMetricPayload>
          }
          createMany: {
            args: Prisma.ContentMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContentMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentMetricPayload>
          }
          update: {
            args: Prisma.ContentMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentMetricPayload>
          }
          deleteMany: {
            args: Prisma.ContentMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContentMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentMetricPayload>
          }
          aggregate: {
            args: Prisma.ContentMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentMetric>
          }
          groupBy: {
            args: Prisma.ContentMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentMetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentMetricCountArgs<ExtArgs>
            result: $Utils.Optional<ContentMetricCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    channel?: ChannelOmit
    content?: ContentOmit
    contentChecklist?: ContentChecklistOmit
    contentMetric?: ContentMetricOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    channels: number
    contents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channels?: boolean | UserCountOutputTypeCountChannelsArgs
    contents?: boolean | UserCountOutputTypeCountContentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
  }


  /**
   * Count Type ChannelCountOutputType
   */

  export type ChannelCountOutputType = {
    contents: number
  }

  export type ChannelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | ChannelCountOutputTypeCountContentsArgs
  }

  // Custom InputTypes
  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChannelCountOutputType
     */
    select?: ChannelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
  }


  /**
   * Count Type ContentCountOutputType
   */

  export type ContentCountOutputType = {
    checklists: number
    metrics: number
  }

  export type ContentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklists?: boolean | ContentCountOutputTypeCountChecklistsArgs
    metrics?: boolean | ContentCountOutputTypeCountMetricsArgs
  }

  // Custom InputTypes
  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentCountOutputType
     */
    select?: ContentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountChecklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentChecklistWhereInput
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentMetricWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.Role | null
    refresh_token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    password_hash: string | null
    role: $Enums.Role | null
    refresh_token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password_hash: number
    role: number
    refresh_token: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    refresh_token?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    refresh_token?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password_hash?: true
    role?: true
    refresh_token?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    name: string
    email: string
    password_hash: string
    role: $Enums.Role
    refresh_token: string | null
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    refresh_token?: boolean
    created_at?: boolean
    updated_at?: boolean
    channels?: boolean | User$channelsArgs<ExtArgs>
    contents?: boolean | User$contentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password_hash?: boolean
    role?: boolean
    refresh_token?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password_hash" | "role" | "refresh_token" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    channels?: boolean | User$channelsArgs<ExtArgs>
    contents?: boolean | User$contentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      channels: Prisma.$ChannelPayload<ExtArgs>[]
      contents: Prisma.$ContentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      email: string
      password_hash: string
      role: $Enums.Role
      refresh_token: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    channels<T extends User$channelsArgs<ExtArgs> = {}>(args?: Subset<T, User$channelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contents<T extends User$contentsArgs<ExtArgs> = {}>(args?: Subset<T, User$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly refresh_token: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.channels
   */
  export type User$channelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    cursor?: ChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * User.contents
   */
  export type User$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    cursor?: ContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Channel
   */

  export type AggregateChannel = {
    _count: ChannelCountAggregateOutputType | null
    _avg: ChannelAvgAggregateOutputType | null
    _sum: ChannelSumAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  export type ChannelAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ChannelSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
  }

  export type ChannelMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    platform: string | null
    handle_name: string | null
    created_at: Date | null
  }

  export type ChannelMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    platform: string | null
    handle_name: string | null
    created_at: Date | null
  }

  export type ChannelCountAggregateOutputType = {
    id: number
    user_id: number
    platform: number
    handle_name: number
    created_at: number
    _all: number
  }


  export type ChannelAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ChannelSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ChannelMinAggregateInputType = {
    id?: true
    user_id?: true
    platform?: true
    handle_name?: true
    created_at?: true
  }

  export type ChannelMaxAggregateInputType = {
    id?: true
    user_id?: true
    platform?: true
    handle_name?: true
    created_at?: true
  }

  export type ChannelCountAggregateInputType = {
    id?: true
    user_id?: true
    platform?: true
    handle_name?: true
    created_at?: true
    _all?: true
  }

  export type ChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channel to aggregate.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Channels
    **/
    _count?: true | ChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelMaxAggregateInputType
  }

  export type GetChannelAggregateType<T extends ChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannel[P]>
      : GetScalarType<T[P], AggregateChannel[P]>
  }




  export type ChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChannelWhereInput
    orderBy?: ChannelOrderByWithAggregationInput | ChannelOrderByWithAggregationInput[]
    by: ChannelScalarFieldEnum[] | ChannelScalarFieldEnum
    having?: ChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelCountAggregateInputType | true
    _avg?: ChannelAvgAggregateInputType
    _sum?: ChannelSumAggregateInputType
    _min?: ChannelMinAggregateInputType
    _max?: ChannelMaxAggregateInputType
  }

  export type ChannelGroupByOutputType = {
    id: bigint
    user_id: bigint
    platform: string
    handle_name: string
    created_at: Date
    _count: ChannelCountAggregateOutputType | null
    _avg: ChannelAvgAggregateOutputType | null
    _sum: ChannelSumAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  type GetChannelGroupByPayload<T extends ChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelGroupByOutputType[P]>
        }
      >
    >


  export type ChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    platform?: boolean
    handle_name?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    contents?: boolean | Channel$contentsArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>



  export type ChannelSelectScalar = {
    id?: boolean
    user_id?: boolean
    platform?: boolean
    handle_name?: boolean
    created_at?: boolean
  }

  export type ChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "platform" | "handle_name" | "created_at", ExtArgs["result"]["channel"]>
  export type ChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    contents?: boolean | Channel$contentsArgs<ExtArgs>
    _count?: boolean | ChannelCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Channel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      contents: Prisma.$ContentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      platform: string
      handle_name: string
      created_at: Date
    }, ExtArgs["result"]["channel"]>
    composites: {}
  }

  type ChannelGetPayload<S extends boolean | null | undefined | ChannelDefaultArgs> = $Result.GetResult<Prisma.$ChannelPayload, S>

  type ChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChannelCountAggregateInputType | true
    }

  export interface ChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Channel'], meta: { name: 'Channel' } }
    /**
     * Find zero or one Channel that matches the filter.
     * @param {ChannelFindUniqueArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChannelFindUniqueArgs>(args: SelectSubset<T, ChannelFindUniqueArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Channel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChannelFindUniqueOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, ChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChannelFindFirstArgs>(args?: SelectSubset<T, ChannelFindFirstArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Channel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, ChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channel.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelWithIdOnly = await prisma.channel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChannelFindManyArgs>(args?: SelectSubset<T, ChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Channel.
     * @param {ChannelCreateArgs} args - Arguments to create a Channel.
     * @example
     * // Create one Channel
     * const Channel = await prisma.channel.create({
     *   data: {
     *     // ... data to create a Channel
     *   }
     * })
     * 
     */
    create<T extends ChannelCreateArgs>(args: SelectSubset<T, ChannelCreateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Channels.
     * @param {ChannelCreateManyArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChannelCreateManyArgs>(args?: SelectSubset<T, ChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Channel.
     * @param {ChannelDeleteArgs} args - Arguments to delete one Channel.
     * @example
     * // Delete one Channel
     * const Channel = await prisma.channel.delete({
     *   where: {
     *     // ... filter to delete one Channel
     *   }
     * })
     * 
     */
    delete<T extends ChannelDeleteArgs>(args: SelectSubset<T, ChannelDeleteArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Channel.
     * @param {ChannelUpdateArgs} args - Arguments to update one Channel.
     * @example
     * // Update one Channel
     * const channel = await prisma.channel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChannelUpdateArgs>(args: SelectSubset<T, ChannelUpdateArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Channels.
     * @param {ChannelDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChannelDeleteManyArgs>(args?: SelectSubset<T, ChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChannelUpdateManyArgs>(args: SelectSubset<T, ChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Channel.
     * @param {ChannelUpsertArgs} args - Arguments to update or create a Channel.
     * @example
     * // Update or create a Channel
     * const channel = await prisma.channel.upsert({
     *   create: {
     *     // ... data to create a Channel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channel we want to update
     *   }
     * })
     */
    upsert<T extends ChannelUpsertArgs>(args: SelectSubset<T, ChannelUpsertArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channel.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends ChannelCountArgs>(
      args?: Subset<T, ChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChannelAggregateArgs>(args: Subset<T, ChannelAggregateArgs>): Prisma.PrismaPromise<GetChannelAggregateType<T>>

    /**
     * Group by Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelGroupByArgs} args - Group by arguments.
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
      T extends ChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelGroupByArgs['orderBy'] }
        : { orderBy?: ChannelGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Channel model
   */
  readonly fields: ChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Channel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contents<T extends Channel$contentsArgs<ExtArgs> = {}>(args?: Subset<T, Channel$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Channel model
   */
  interface ChannelFieldRefs {
    readonly id: FieldRef<"Channel", 'BigInt'>
    readonly user_id: FieldRef<"Channel", 'BigInt'>
    readonly platform: FieldRef<"Channel", 'String'>
    readonly handle_name: FieldRef<"Channel", 'String'>
    readonly created_at: FieldRef<"Channel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Channel findUnique
   */
  export type ChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findUniqueOrThrow
   */
  export type ChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findFirst
   */
  export type ChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findFirstOrThrow
   */
  export type ChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel findMany
   */
  export type ChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: ChannelOrderByWithRelationInput | ChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * Channel create
   */
  export type ChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a Channel.
     */
    data: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
  }

  /**
   * Channel createMany
   */
  export type ChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Channels.
     */
    data: ChannelCreateManyInput | ChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Channel update
   */
  export type ChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a Channel.
     */
    data: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
    /**
     * Choose, which Channel to update.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel updateMany
   */
  export type ChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to update.
     */
    limit?: number
  }

  /**
   * Channel upsert
   */
  export type ChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the Channel to update in case it exists.
     */
    where: ChannelWhereUniqueInput
    /**
     * In case the Channel found by the `where` argument doesn't exist, create a new Channel with this data.
     */
    create: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
    /**
     * In case the Channel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
  }

  /**
   * Channel delete
   */
  export type ChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
    /**
     * Filter which Channel to delete.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel deleteMany
   */
  export type ChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Channels to delete
     */
    where?: ChannelWhereInput
    /**
     * Limit how many Channels to delete.
     */
    limit?: number
  }

  /**
   * Channel.contents
   */
  export type Channel$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    cursor?: ContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Channel without action
   */
  export type ChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Channel
     */
    omit?: ChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChannelInclude<ExtArgs> | null
  }


  /**
   * Model Content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  export type ContentAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    channel_id: number | null
  }

  export type ContentSumAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    channel_id: bigint | null
  }

  export type ContentMinAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    channel_id: bigint | null
    title: string | null
    description: string | null
    script_draft: string | null
    format_type: $Enums.FormatType | null
    status: $Enums.Status | null
    priority: $Enums.Priority | null
    scheduled_date: Date | null
    published_date: Date | null
    published_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ContentMaxAggregateOutputType = {
    id: bigint | null
    user_id: bigint | null
    channel_id: bigint | null
    title: string | null
    description: string | null
    script_draft: string | null
    format_type: $Enums.FormatType | null
    status: $Enums.Status | null
    priority: $Enums.Priority | null
    scheduled_date: Date | null
    published_date: Date | null
    published_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ContentCountAggregateOutputType = {
    id: number
    user_id: number
    channel_id: number
    title: number
    description: number
    script_draft: number
    format_type: number
    status: number
    priority: number
    scheduled_date: number
    published_date: number
    published_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ContentAvgAggregateInputType = {
    id?: true
    user_id?: true
    channel_id?: true
  }

  export type ContentSumAggregateInputType = {
    id?: true
    user_id?: true
    channel_id?: true
  }

  export type ContentMinAggregateInputType = {
    id?: true
    user_id?: true
    channel_id?: true
    title?: true
    description?: true
    script_draft?: true
    format_type?: true
    status?: true
    priority?: true
    scheduled_date?: true
    published_date?: true
    published_url?: true
    created_at?: true
    updated_at?: true
  }

  export type ContentMaxAggregateInputType = {
    id?: true
    user_id?: true
    channel_id?: true
    title?: true
    description?: true
    script_draft?: true
    format_type?: true
    status?: true
    priority?: true
    scheduled_date?: true
    published_date?: true
    published_url?: true
    created_at?: true
    updated_at?: true
  }

  export type ContentCountAggregateInputType = {
    id?: true
    user_id?: true
    channel_id?: true
    title?: true
    description?: true
    script_draft?: true
    format_type?: true
    status?: true
    priority?: true
    scheduled_date?: true
    published_date?: true
    published_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Content to aggregate.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contents
    **/
    _count?: true | ContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentMaxAggregateInputType
  }

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
        [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>
  }




  export type ContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithAggregationInput | ContentOrderByWithAggregationInput[]
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum
    having?: ContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentCountAggregateInputType | true
    _avg?: ContentAvgAggregateInputType
    _sum?: ContentSumAggregateInputType
    _min?: ContentMinAggregateInputType
    _max?: ContentMaxAggregateInputType
  }

  export type ContentGroupByOutputType = {
    id: bigint
    user_id: bigint
    channel_id: bigint
    title: string
    description: string | null
    script_draft: string | null
    format_type: $Enums.FormatType
    status: $Enums.Status
    priority: $Enums.Priority
    scheduled_date: Date | null
    published_date: Date | null
    published_url: string | null
    created_at: Date
    updated_at: Date
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  type GetContentGroupByPayload<T extends ContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentGroupByOutputType[P]>
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
        }
      >
    >


  export type ContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    channel_id?: boolean
    title?: boolean
    description?: boolean
    script_draft?: boolean
    format_type?: boolean
    status?: boolean
    priority?: boolean
    scheduled_date?: boolean
    published_date?: boolean
    published_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    checklists?: boolean | Content$checklistsArgs<ExtArgs>
    metrics?: boolean | Content$metricsArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>



  export type ContentSelectScalar = {
    id?: boolean
    user_id?: boolean
    channel_id?: boolean
    title?: boolean
    description?: boolean
    script_draft?: boolean
    format_type?: boolean
    status?: boolean
    priority?: boolean
    scheduled_date?: boolean
    published_date?: boolean
    published_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "channel_id" | "title" | "description" | "script_draft" | "format_type" | "status" | "priority" | "scheduled_date" | "published_date" | "published_url" | "created_at" | "updated_at", ExtArgs["result"]["content"]>
  export type ContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    channel?: boolean | ChannelDefaultArgs<ExtArgs>
    checklists?: boolean | Content$checklistsArgs<ExtArgs>
    metrics?: boolean | Content$metricsArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Content"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      channel: Prisma.$ChannelPayload<ExtArgs>
      checklists: Prisma.$ContentChecklistPayload<ExtArgs>[]
      metrics: Prisma.$ContentMetricPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      user_id: bigint
      channel_id: bigint
      title: string
      description: string | null
      script_draft: string | null
      format_type: $Enums.FormatType
      status: $Enums.Status
      priority: $Enums.Priority
      scheduled_date: Date | null
      published_date: Date | null
      published_url: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["content"]>
    composites: {}
  }

  type ContentGetPayload<S extends boolean | null | undefined | ContentDefaultArgs> = $Result.GetResult<Prisma.$ContentPayload, S>

  type ContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentCountAggregateInputType | true
    }

  export interface ContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Content'], meta: { name: 'Content' } }
    /**
     * Find zero or one Content that matches the filter.
     * @param {ContentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentFindUniqueArgs>(args: SelectSubset<T, ContentFindUniqueArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Content that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentFindFirstArgs>(args?: SelectSubset<T, ContentFindFirstArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     * 
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentFindManyArgs>(args?: SelectSubset<T, ContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Content.
     * @param {ContentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     * 
     */
    create<T extends ContentCreateArgs>(args: SelectSubset<T, ContentCreateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contents.
     * @param {ContentCreateManyArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentCreateManyArgs>(args?: SelectSubset<T, ContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Content.
     * @param {ContentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     * 
     */
    delete<T extends ContentDeleteArgs>(args: SelectSubset<T, ContentDeleteArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Content.
     * @param {ContentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentUpdateArgs>(args: SelectSubset<T, ContentUpdateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contents.
     * @param {ContentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentDeleteManyArgs>(args?: SelectSubset<T, ContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentUpdateManyArgs>(args: SelectSubset<T, ContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Content.
     * @param {ContentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     */
    upsert<T extends ContentUpsertArgs>(args: SelectSubset<T, ContentUpsertArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentCountArgs>(
      args?: Subset<T, ContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentAggregateArgs>(args: Subset<T, ContentAggregateArgs>): Prisma.PrismaPromise<GetContentAggregateType<T>>

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentGroupByArgs} args - Group by arguments.
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
      T extends ContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentGroupByArgs['orderBy'] }
        : { orderBy?: ContentGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Content model
   */
  readonly fields: ContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    channel<T extends ChannelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChannelDefaultArgs<ExtArgs>>): Prisma__ChannelClient<$Result.GetResult<Prisma.$ChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    checklists<T extends Content$checklistsArgs<ExtArgs> = {}>(args?: Subset<T, Content$checklistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metrics<T extends Content$metricsArgs<ExtArgs> = {}>(args?: Subset<T, Content$metricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Content model
   */
  interface ContentFieldRefs {
    readonly id: FieldRef<"Content", 'BigInt'>
    readonly user_id: FieldRef<"Content", 'BigInt'>
    readonly channel_id: FieldRef<"Content", 'BigInt'>
    readonly title: FieldRef<"Content", 'String'>
    readonly description: FieldRef<"Content", 'String'>
    readonly script_draft: FieldRef<"Content", 'String'>
    readonly format_type: FieldRef<"Content", 'FormatType'>
    readonly status: FieldRef<"Content", 'Status'>
    readonly priority: FieldRef<"Content", 'Priority'>
    readonly scheduled_date: FieldRef<"Content", 'DateTime'>
    readonly published_date: FieldRef<"Content", 'DateTime'>
    readonly published_url: FieldRef<"Content", 'String'>
    readonly created_at: FieldRef<"Content", 'DateTime'>
    readonly updated_at: FieldRef<"Content", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Content findUnique
   */
  export type ContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findUniqueOrThrow
   */
  export type ContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findFirst
   */
  export type ContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findFirstOrThrow
   */
  export type ContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findMany
   */
  export type ContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content create
   */
  export type ContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to create a Content.
     */
    data: XOR<ContentCreateInput, ContentUncheckedCreateInput>
  }

  /**
   * Content createMany
   */
  export type ContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Content update
   */
  export type ContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to update a Content.
     */
    data: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
    /**
     * Choose, which Content to update.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content updateMany
   */
  export type ContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
  }

  /**
   * Content upsert
   */
  export type ContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The filter to search for the Content to update in case it exists.
     */
    where: ContentWhereUniqueInput
    /**
     * In case the Content found by the `where` argument doesn't exist, create a new Content with this data.
     */
    create: XOR<ContentCreateInput, ContentUncheckedCreateInput>
    /**
     * In case the Content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
  }

  /**
   * Content delete
   */
  export type ContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter which Content to delete.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content deleteMany
   */
  export type ContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to delete
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to delete.
     */
    limit?: number
  }

  /**
   * Content.checklists
   */
  export type Content$checklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChecklist
     */
    select?: ContentChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChecklist
     */
    omit?: ContentChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChecklistInclude<ExtArgs> | null
    where?: ContentChecklistWhereInput
    orderBy?: ContentChecklistOrderByWithRelationInput | ContentChecklistOrderByWithRelationInput[]
    cursor?: ContentChecklistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentChecklistScalarFieldEnum | ContentChecklistScalarFieldEnum[]
  }

  /**
   * Content.metrics
   */
  export type Content$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentMetric
     */
    select?: ContentMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentMetric
     */
    omit?: ContentMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentMetricInclude<ExtArgs> | null
    where?: ContentMetricWhereInput
    orderBy?: ContentMetricOrderByWithRelationInput | ContentMetricOrderByWithRelationInput[]
    cursor?: ContentMetricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentMetricScalarFieldEnum | ContentMetricScalarFieldEnum[]
  }

  /**
   * Content without action
   */
  export type ContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
  }


  /**
   * Model ContentChecklist
   */

  export type AggregateContentChecklist = {
    _count: ContentChecklistCountAggregateOutputType | null
    _avg: ContentChecklistAvgAggregateOutputType | null
    _sum: ContentChecklistSumAggregateOutputType | null
    _min: ContentChecklistMinAggregateOutputType | null
    _max: ContentChecklistMaxAggregateOutputType | null
  }

  export type ContentChecklistAvgAggregateOutputType = {
    id: number | null
    content_id: number | null
  }

  export type ContentChecklistSumAggregateOutputType = {
    id: bigint | null
    content_id: bigint | null
  }

  export type ContentChecklistMinAggregateOutputType = {
    id: bigint | null
    content_id: bigint | null
    task_name: string | null
    is_completed: boolean | null
    created_at: Date | null
  }

  export type ContentChecklistMaxAggregateOutputType = {
    id: bigint | null
    content_id: bigint | null
    task_name: string | null
    is_completed: boolean | null
    created_at: Date | null
  }

  export type ContentChecklistCountAggregateOutputType = {
    id: number
    content_id: number
    task_name: number
    is_completed: number
    created_at: number
    _all: number
  }


  export type ContentChecklistAvgAggregateInputType = {
    id?: true
    content_id?: true
  }

  export type ContentChecklistSumAggregateInputType = {
    id?: true
    content_id?: true
  }

  export type ContentChecklistMinAggregateInputType = {
    id?: true
    content_id?: true
    task_name?: true
    is_completed?: true
    created_at?: true
  }

  export type ContentChecklistMaxAggregateInputType = {
    id?: true
    content_id?: true
    task_name?: true
    is_completed?: true
    created_at?: true
  }

  export type ContentChecklistCountAggregateInputType = {
    id?: true
    content_id?: true
    task_name?: true
    is_completed?: true
    created_at?: true
    _all?: true
  }

  export type ContentChecklistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentChecklist to aggregate.
     */
    where?: ContentChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentChecklists to fetch.
     */
    orderBy?: ContentChecklistOrderByWithRelationInput | ContentChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentChecklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentChecklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentChecklists
    **/
    _count?: true | ContentChecklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentChecklistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentChecklistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentChecklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentChecklistMaxAggregateInputType
  }

  export type GetContentChecklistAggregateType<T extends ContentChecklistAggregateArgs> = {
        [P in keyof T & keyof AggregateContentChecklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentChecklist[P]>
      : GetScalarType<T[P], AggregateContentChecklist[P]>
  }




  export type ContentChecklistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentChecklistWhereInput
    orderBy?: ContentChecklistOrderByWithAggregationInput | ContentChecklistOrderByWithAggregationInput[]
    by: ContentChecklistScalarFieldEnum[] | ContentChecklistScalarFieldEnum
    having?: ContentChecklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentChecklistCountAggregateInputType | true
    _avg?: ContentChecklistAvgAggregateInputType
    _sum?: ContentChecklistSumAggregateInputType
    _min?: ContentChecklistMinAggregateInputType
    _max?: ContentChecklistMaxAggregateInputType
  }

  export type ContentChecklistGroupByOutputType = {
    id: bigint
    content_id: bigint
    task_name: string
    is_completed: boolean
    created_at: Date
    _count: ContentChecklistCountAggregateOutputType | null
    _avg: ContentChecklistAvgAggregateOutputType | null
    _sum: ContentChecklistSumAggregateOutputType | null
    _min: ContentChecklistMinAggregateOutputType | null
    _max: ContentChecklistMaxAggregateOutputType | null
  }

  type GetContentChecklistGroupByPayload<T extends ContentChecklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentChecklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentChecklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentChecklistGroupByOutputType[P]>
            : GetScalarType<T[P], ContentChecklistGroupByOutputType[P]>
        }
      >
    >


  export type ContentChecklistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content_id?: boolean
    task_name?: boolean
    is_completed?: boolean
    created_at?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentChecklist"]>



  export type ContentChecklistSelectScalar = {
    id?: boolean
    content_id?: boolean
    task_name?: boolean
    is_completed?: boolean
    created_at?: boolean
  }

  export type ContentChecklistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content_id" | "task_name" | "is_completed" | "created_at", ExtArgs["result"]["contentChecklist"]>
  export type ContentChecklistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }

  export type $ContentChecklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentChecklist"
    objects: {
      content: Prisma.$ContentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      content_id: bigint
      task_name: string
      is_completed: boolean
      created_at: Date
    }, ExtArgs["result"]["contentChecklist"]>
    composites: {}
  }

  type ContentChecklistGetPayload<S extends boolean | null | undefined | ContentChecklistDefaultArgs> = $Result.GetResult<Prisma.$ContentChecklistPayload, S>

  type ContentChecklistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentChecklistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentChecklistCountAggregateInputType | true
    }

  export interface ContentChecklistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentChecklist'], meta: { name: 'ContentChecklist' } }
    /**
     * Find zero or one ContentChecklist that matches the filter.
     * @param {ContentChecklistFindUniqueArgs} args - Arguments to find a ContentChecklist
     * @example
     * // Get one ContentChecklist
     * const contentChecklist = await prisma.contentChecklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentChecklistFindUniqueArgs>(args: SelectSubset<T, ContentChecklistFindUniqueArgs<ExtArgs>>): Prisma__ContentChecklistClient<$Result.GetResult<Prisma.$ContentChecklistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentChecklist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentChecklistFindUniqueOrThrowArgs} args - Arguments to find a ContentChecklist
     * @example
     * // Get one ContentChecklist
     * const contentChecklist = await prisma.contentChecklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentChecklistFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentChecklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentChecklistClient<$Result.GetResult<Prisma.$ContentChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentChecklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentChecklistFindFirstArgs} args - Arguments to find a ContentChecklist
     * @example
     * // Get one ContentChecklist
     * const contentChecklist = await prisma.contentChecklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentChecklistFindFirstArgs>(args?: SelectSubset<T, ContentChecklistFindFirstArgs<ExtArgs>>): Prisma__ContentChecklistClient<$Result.GetResult<Prisma.$ContentChecklistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentChecklist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentChecklistFindFirstOrThrowArgs} args - Arguments to find a ContentChecklist
     * @example
     * // Get one ContentChecklist
     * const contentChecklist = await prisma.contentChecklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentChecklistFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentChecklistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentChecklistClient<$Result.GetResult<Prisma.$ContentChecklistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentChecklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentChecklistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentChecklists
     * const contentChecklists = await prisma.contentChecklist.findMany()
     * 
     * // Get first 10 ContentChecklists
     * const contentChecklists = await prisma.contentChecklist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentChecklistWithIdOnly = await prisma.contentChecklist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentChecklistFindManyArgs>(args?: SelectSubset<T, ContentChecklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentChecklist.
     * @param {ContentChecklistCreateArgs} args - Arguments to create a ContentChecklist.
     * @example
     * // Create one ContentChecklist
     * const ContentChecklist = await prisma.contentChecklist.create({
     *   data: {
     *     // ... data to create a ContentChecklist
     *   }
     * })
     * 
     */
    create<T extends ContentChecklistCreateArgs>(args: SelectSubset<T, ContentChecklistCreateArgs<ExtArgs>>): Prisma__ContentChecklistClient<$Result.GetResult<Prisma.$ContentChecklistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentChecklists.
     * @param {ContentChecklistCreateManyArgs} args - Arguments to create many ContentChecklists.
     * @example
     * // Create many ContentChecklists
     * const contentChecklist = await prisma.contentChecklist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentChecklistCreateManyArgs>(args?: SelectSubset<T, ContentChecklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContentChecklist.
     * @param {ContentChecklistDeleteArgs} args - Arguments to delete one ContentChecklist.
     * @example
     * // Delete one ContentChecklist
     * const ContentChecklist = await prisma.contentChecklist.delete({
     *   where: {
     *     // ... filter to delete one ContentChecklist
     *   }
     * })
     * 
     */
    delete<T extends ContentChecklistDeleteArgs>(args: SelectSubset<T, ContentChecklistDeleteArgs<ExtArgs>>): Prisma__ContentChecklistClient<$Result.GetResult<Prisma.$ContentChecklistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentChecklist.
     * @param {ContentChecklistUpdateArgs} args - Arguments to update one ContentChecklist.
     * @example
     * // Update one ContentChecklist
     * const contentChecklist = await prisma.contentChecklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentChecklistUpdateArgs>(args: SelectSubset<T, ContentChecklistUpdateArgs<ExtArgs>>): Prisma__ContentChecklistClient<$Result.GetResult<Prisma.$ContentChecklistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentChecklists.
     * @param {ContentChecklistDeleteManyArgs} args - Arguments to filter ContentChecklists to delete.
     * @example
     * // Delete a few ContentChecklists
     * const { count } = await prisma.contentChecklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentChecklistDeleteManyArgs>(args?: SelectSubset<T, ContentChecklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentChecklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentChecklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentChecklists
     * const contentChecklist = await prisma.contentChecklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentChecklistUpdateManyArgs>(args: SelectSubset<T, ContentChecklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContentChecklist.
     * @param {ContentChecklistUpsertArgs} args - Arguments to update or create a ContentChecklist.
     * @example
     * // Update or create a ContentChecklist
     * const contentChecklist = await prisma.contentChecklist.upsert({
     *   create: {
     *     // ... data to create a ContentChecklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentChecklist we want to update
     *   }
     * })
     */
    upsert<T extends ContentChecklistUpsertArgs>(args: SelectSubset<T, ContentChecklistUpsertArgs<ExtArgs>>): Prisma__ContentChecklistClient<$Result.GetResult<Prisma.$ContentChecklistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentChecklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentChecklistCountArgs} args - Arguments to filter ContentChecklists to count.
     * @example
     * // Count the number of ContentChecklists
     * const count = await prisma.contentChecklist.count({
     *   where: {
     *     // ... the filter for the ContentChecklists we want to count
     *   }
     * })
    **/
    count<T extends ContentChecklistCountArgs>(
      args?: Subset<T, ContentChecklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentChecklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentChecklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentChecklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentChecklistAggregateArgs>(args: Subset<T, ContentChecklistAggregateArgs>): Prisma.PrismaPromise<GetContentChecklistAggregateType<T>>

    /**
     * Group by ContentChecklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentChecklistGroupByArgs} args - Group by arguments.
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
      T extends ContentChecklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentChecklistGroupByArgs['orderBy'] }
        : { orderBy?: ContentChecklistGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentChecklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentChecklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentChecklist model
   */
  readonly fields: ContentChecklistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentChecklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentChecklistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentChecklist model
   */
  interface ContentChecklistFieldRefs {
    readonly id: FieldRef<"ContentChecklist", 'BigInt'>
    readonly content_id: FieldRef<"ContentChecklist", 'BigInt'>
    readonly task_name: FieldRef<"ContentChecklist", 'String'>
    readonly is_completed: FieldRef<"ContentChecklist", 'Boolean'>
    readonly created_at: FieldRef<"ContentChecklist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentChecklist findUnique
   */
  export type ContentChecklistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChecklist
     */
    select?: ContentChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChecklist
     */
    omit?: ContentChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChecklistInclude<ExtArgs> | null
    /**
     * Filter, which ContentChecklist to fetch.
     */
    where: ContentChecklistWhereUniqueInput
  }

  /**
   * ContentChecklist findUniqueOrThrow
   */
  export type ContentChecklistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChecklist
     */
    select?: ContentChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChecklist
     */
    omit?: ContentChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChecklistInclude<ExtArgs> | null
    /**
     * Filter, which ContentChecklist to fetch.
     */
    where: ContentChecklistWhereUniqueInput
  }

  /**
   * ContentChecklist findFirst
   */
  export type ContentChecklistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChecklist
     */
    select?: ContentChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChecklist
     */
    omit?: ContentChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChecklistInclude<ExtArgs> | null
    /**
     * Filter, which ContentChecklist to fetch.
     */
    where?: ContentChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentChecklists to fetch.
     */
    orderBy?: ContentChecklistOrderByWithRelationInput | ContentChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentChecklists.
     */
    cursor?: ContentChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentChecklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentChecklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentChecklists.
     */
    distinct?: ContentChecklistScalarFieldEnum | ContentChecklistScalarFieldEnum[]
  }

  /**
   * ContentChecklist findFirstOrThrow
   */
  export type ContentChecklistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChecklist
     */
    select?: ContentChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChecklist
     */
    omit?: ContentChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChecklistInclude<ExtArgs> | null
    /**
     * Filter, which ContentChecklist to fetch.
     */
    where?: ContentChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentChecklists to fetch.
     */
    orderBy?: ContentChecklistOrderByWithRelationInput | ContentChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentChecklists.
     */
    cursor?: ContentChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentChecklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentChecklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentChecklists.
     */
    distinct?: ContentChecklistScalarFieldEnum | ContentChecklistScalarFieldEnum[]
  }

  /**
   * ContentChecklist findMany
   */
  export type ContentChecklistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChecklist
     */
    select?: ContentChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChecklist
     */
    omit?: ContentChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChecklistInclude<ExtArgs> | null
    /**
     * Filter, which ContentChecklists to fetch.
     */
    where?: ContentChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentChecklists to fetch.
     */
    orderBy?: ContentChecklistOrderByWithRelationInput | ContentChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentChecklists.
     */
    cursor?: ContentChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentChecklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentChecklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentChecklists.
     */
    distinct?: ContentChecklistScalarFieldEnum | ContentChecklistScalarFieldEnum[]
  }

  /**
   * ContentChecklist create
   */
  export type ContentChecklistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChecklist
     */
    select?: ContentChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChecklist
     */
    omit?: ContentChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChecklistInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentChecklist.
     */
    data: XOR<ContentChecklistCreateInput, ContentChecklistUncheckedCreateInput>
  }

  /**
   * ContentChecklist createMany
   */
  export type ContentChecklistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentChecklists.
     */
    data: ContentChecklistCreateManyInput | ContentChecklistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentChecklist update
   */
  export type ContentChecklistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChecklist
     */
    select?: ContentChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChecklist
     */
    omit?: ContentChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChecklistInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentChecklist.
     */
    data: XOR<ContentChecklistUpdateInput, ContentChecklistUncheckedUpdateInput>
    /**
     * Choose, which ContentChecklist to update.
     */
    where: ContentChecklistWhereUniqueInput
  }

  /**
   * ContentChecklist updateMany
   */
  export type ContentChecklistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentChecklists.
     */
    data: XOR<ContentChecklistUpdateManyMutationInput, ContentChecklistUncheckedUpdateManyInput>
    /**
     * Filter which ContentChecklists to update
     */
    where?: ContentChecklistWhereInput
    /**
     * Limit how many ContentChecklists to update.
     */
    limit?: number
  }

  /**
   * ContentChecklist upsert
   */
  export type ContentChecklistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChecklist
     */
    select?: ContentChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChecklist
     */
    omit?: ContentChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChecklistInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentChecklist to update in case it exists.
     */
    where: ContentChecklistWhereUniqueInput
    /**
     * In case the ContentChecklist found by the `where` argument doesn't exist, create a new ContentChecklist with this data.
     */
    create: XOR<ContentChecklistCreateInput, ContentChecklistUncheckedCreateInput>
    /**
     * In case the ContentChecklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentChecklistUpdateInput, ContentChecklistUncheckedUpdateInput>
  }

  /**
   * ContentChecklist delete
   */
  export type ContentChecklistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChecklist
     */
    select?: ContentChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChecklist
     */
    omit?: ContentChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChecklistInclude<ExtArgs> | null
    /**
     * Filter which ContentChecklist to delete.
     */
    where: ContentChecklistWhereUniqueInput
  }

  /**
   * ContentChecklist deleteMany
   */
  export type ContentChecklistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentChecklists to delete
     */
    where?: ContentChecklistWhereInput
    /**
     * Limit how many ContentChecklists to delete.
     */
    limit?: number
  }

  /**
   * ContentChecklist without action
   */
  export type ContentChecklistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentChecklist
     */
    select?: ContentChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentChecklist
     */
    omit?: ContentChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentChecklistInclude<ExtArgs> | null
  }


  /**
   * Model ContentMetric
   */

  export type AggregateContentMetric = {
    _count: ContentMetricCountAggregateOutputType | null
    _avg: ContentMetricAvgAggregateOutputType | null
    _sum: ContentMetricSumAggregateOutputType | null
    _min: ContentMetricMinAggregateOutputType | null
    _max: ContentMetricMaxAggregateOutputType | null
  }

  export type ContentMetricAvgAggregateOutputType = {
    id: number | null
    content_id: number | null
    views_count: number | null
    likes_count: number | null
    comments_count: number | null
    shares_count: number | null
  }

  export type ContentMetricSumAggregateOutputType = {
    id: bigint | null
    content_id: bigint | null
    views_count: number | null
    likes_count: number | null
    comments_count: number | null
    shares_count: number | null
  }

  export type ContentMetricMinAggregateOutputType = {
    id: bigint | null
    content_id: bigint | null
    recorded_at: Date | null
    views_count: number | null
    likes_count: number | null
    comments_count: number | null
    shares_count: number | null
    created_at: Date | null
  }

  export type ContentMetricMaxAggregateOutputType = {
    id: bigint | null
    content_id: bigint | null
    recorded_at: Date | null
    views_count: number | null
    likes_count: number | null
    comments_count: number | null
    shares_count: number | null
    created_at: Date | null
  }

  export type ContentMetricCountAggregateOutputType = {
    id: number
    content_id: number
    recorded_at: number
    views_count: number
    likes_count: number
    comments_count: number
    shares_count: number
    created_at: number
    _all: number
  }


  export type ContentMetricAvgAggregateInputType = {
    id?: true
    content_id?: true
    views_count?: true
    likes_count?: true
    comments_count?: true
    shares_count?: true
  }

  export type ContentMetricSumAggregateInputType = {
    id?: true
    content_id?: true
    views_count?: true
    likes_count?: true
    comments_count?: true
    shares_count?: true
  }

  export type ContentMetricMinAggregateInputType = {
    id?: true
    content_id?: true
    recorded_at?: true
    views_count?: true
    likes_count?: true
    comments_count?: true
    shares_count?: true
    created_at?: true
  }

  export type ContentMetricMaxAggregateInputType = {
    id?: true
    content_id?: true
    recorded_at?: true
    views_count?: true
    likes_count?: true
    comments_count?: true
    shares_count?: true
    created_at?: true
  }

  export type ContentMetricCountAggregateInputType = {
    id?: true
    content_id?: true
    recorded_at?: true
    views_count?: true
    likes_count?: true
    comments_count?: true
    shares_count?: true
    created_at?: true
    _all?: true
  }

  export type ContentMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentMetric to aggregate.
     */
    where?: ContentMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentMetrics to fetch.
     */
    orderBy?: ContentMetricOrderByWithRelationInput | ContentMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentMetrics
    **/
    _count?: true | ContentMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentMetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentMetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentMetricMaxAggregateInputType
  }

  export type GetContentMetricAggregateType<T extends ContentMetricAggregateArgs> = {
        [P in keyof T & keyof AggregateContentMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentMetric[P]>
      : GetScalarType<T[P], AggregateContentMetric[P]>
  }




  export type ContentMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentMetricWhereInput
    orderBy?: ContentMetricOrderByWithAggregationInput | ContentMetricOrderByWithAggregationInput[]
    by: ContentMetricScalarFieldEnum[] | ContentMetricScalarFieldEnum
    having?: ContentMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentMetricCountAggregateInputType | true
    _avg?: ContentMetricAvgAggregateInputType
    _sum?: ContentMetricSumAggregateInputType
    _min?: ContentMetricMinAggregateInputType
    _max?: ContentMetricMaxAggregateInputType
  }

  export type ContentMetricGroupByOutputType = {
    id: bigint
    content_id: bigint
    recorded_at: Date
    views_count: number
    likes_count: number
    comments_count: number
    shares_count: number
    created_at: Date
    _count: ContentMetricCountAggregateOutputType | null
    _avg: ContentMetricAvgAggregateOutputType | null
    _sum: ContentMetricSumAggregateOutputType | null
    _min: ContentMetricMinAggregateOutputType | null
    _max: ContentMetricMaxAggregateOutputType | null
  }

  type GetContentMetricGroupByPayload<T extends ContentMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentMetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentMetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentMetricGroupByOutputType[P]>
            : GetScalarType<T[P], ContentMetricGroupByOutputType[P]>
        }
      >
    >


  export type ContentMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content_id?: boolean
    recorded_at?: boolean
    views_count?: boolean
    likes_count?: boolean
    comments_count?: boolean
    shares_count?: boolean
    created_at?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentMetric"]>



  export type ContentMetricSelectScalar = {
    id?: boolean
    content_id?: boolean
    recorded_at?: boolean
    views_count?: boolean
    likes_count?: boolean
    comments_count?: boolean
    shares_count?: boolean
    created_at?: boolean
  }

  export type ContentMetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content_id" | "recorded_at" | "views_count" | "likes_count" | "comments_count" | "shares_count" | "created_at", ExtArgs["result"]["contentMetric"]>
  export type ContentMetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }

  export type $ContentMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentMetric"
    objects: {
      content: Prisma.$ContentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      content_id: bigint
      recorded_at: Date
      views_count: number
      likes_count: number
      comments_count: number
      shares_count: number
      created_at: Date
    }, ExtArgs["result"]["contentMetric"]>
    composites: {}
  }

  type ContentMetricGetPayload<S extends boolean | null | undefined | ContentMetricDefaultArgs> = $Result.GetResult<Prisma.$ContentMetricPayload, S>

  type ContentMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentMetricCountAggregateInputType | true
    }

  export interface ContentMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentMetric'], meta: { name: 'ContentMetric' } }
    /**
     * Find zero or one ContentMetric that matches the filter.
     * @param {ContentMetricFindUniqueArgs} args - Arguments to find a ContentMetric
     * @example
     * // Get one ContentMetric
     * const contentMetric = await prisma.contentMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentMetricFindUniqueArgs>(args: SelectSubset<T, ContentMetricFindUniqueArgs<ExtArgs>>): Prisma__ContentMetricClient<$Result.GetResult<Prisma.$ContentMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentMetric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentMetricFindUniqueOrThrowArgs} args - Arguments to find a ContentMetric
     * @example
     * // Get one ContentMetric
     * const contentMetric = await prisma.contentMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentMetricClient<$Result.GetResult<Prisma.$ContentMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentMetricFindFirstArgs} args - Arguments to find a ContentMetric
     * @example
     * // Get one ContentMetric
     * const contentMetric = await prisma.contentMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentMetricFindFirstArgs>(args?: SelectSubset<T, ContentMetricFindFirstArgs<ExtArgs>>): Prisma__ContentMetricClient<$Result.GetResult<Prisma.$ContentMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentMetricFindFirstOrThrowArgs} args - Arguments to find a ContentMetric
     * @example
     * // Get one ContentMetric
     * const contentMetric = await prisma.contentMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentMetricClient<$Result.GetResult<Prisma.$ContentMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentMetrics
     * const contentMetrics = await prisma.contentMetric.findMany()
     * 
     * // Get first 10 ContentMetrics
     * const contentMetrics = await prisma.contentMetric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentMetricWithIdOnly = await prisma.contentMetric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentMetricFindManyArgs>(args?: SelectSubset<T, ContentMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentMetric.
     * @param {ContentMetricCreateArgs} args - Arguments to create a ContentMetric.
     * @example
     * // Create one ContentMetric
     * const ContentMetric = await prisma.contentMetric.create({
     *   data: {
     *     // ... data to create a ContentMetric
     *   }
     * })
     * 
     */
    create<T extends ContentMetricCreateArgs>(args: SelectSubset<T, ContentMetricCreateArgs<ExtArgs>>): Prisma__ContentMetricClient<$Result.GetResult<Prisma.$ContentMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentMetrics.
     * @param {ContentMetricCreateManyArgs} args - Arguments to create many ContentMetrics.
     * @example
     * // Create many ContentMetrics
     * const contentMetric = await prisma.contentMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentMetricCreateManyArgs>(args?: SelectSubset<T, ContentMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContentMetric.
     * @param {ContentMetricDeleteArgs} args - Arguments to delete one ContentMetric.
     * @example
     * // Delete one ContentMetric
     * const ContentMetric = await prisma.contentMetric.delete({
     *   where: {
     *     // ... filter to delete one ContentMetric
     *   }
     * })
     * 
     */
    delete<T extends ContentMetricDeleteArgs>(args: SelectSubset<T, ContentMetricDeleteArgs<ExtArgs>>): Prisma__ContentMetricClient<$Result.GetResult<Prisma.$ContentMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentMetric.
     * @param {ContentMetricUpdateArgs} args - Arguments to update one ContentMetric.
     * @example
     * // Update one ContentMetric
     * const contentMetric = await prisma.contentMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentMetricUpdateArgs>(args: SelectSubset<T, ContentMetricUpdateArgs<ExtArgs>>): Prisma__ContentMetricClient<$Result.GetResult<Prisma.$ContentMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentMetrics.
     * @param {ContentMetricDeleteManyArgs} args - Arguments to filter ContentMetrics to delete.
     * @example
     * // Delete a few ContentMetrics
     * const { count } = await prisma.contentMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentMetricDeleteManyArgs>(args?: SelectSubset<T, ContentMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentMetrics
     * const contentMetric = await prisma.contentMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentMetricUpdateManyArgs>(args: SelectSubset<T, ContentMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContentMetric.
     * @param {ContentMetricUpsertArgs} args - Arguments to update or create a ContentMetric.
     * @example
     * // Update or create a ContentMetric
     * const contentMetric = await prisma.contentMetric.upsert({
     *   create: {
     *     // ... data to create a ContentMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentMetric we want to update
     *   }
     * })
     */
    upsert<T extends ContentMetricUpsertArgs>(args: SelectSubset<T, ContentMetricUpsertArgs<ExtArgs>>): Prisma__ContentMetricClient<$Result.GetResult<Prisma.$ContentMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentMetricCountArgs} args - Arguments to filter ContentMetrics to count.
     * @example
     * // Count the number of ContentMetrics
     * const count = await prisma.contentMetric.count({
     *   where: {
     *     // ... the filter for the ContentMetrics we want to count
     *   }
     * })
    **/
    count<T extends ContentMetricCountArgs>(
      args?: Subset<T, ContentMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentMetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentMetricAggregateArgs>(args: Subset<T, ContentMetricAggregateArgs>): Prisma.PrismaPromise<GetContentMetricAggregateType<T>>

    /**
     * Group by ContentMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentMetricGroupByArgs} args - Group by arguments.
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
      T extends ContentMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentMetricGroupByArgs['orderBy'] }
        : { orderBy?: ContentMetricGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentMetric model
   */
  readonly fields: ContentMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentMetric model
   */
  interface ContentMetricFieldRefs {
    readonly id: FieldRef<"ContentMetric", 'BigInt'>
    readonly content_id: FieldRef<"ContentMetric", 'BigInt'>
    readonly recorded_at: FieldRef<"ContentMetric", 'DateTime'>
    readonly views_count: FieldRef<"ContentMetric", 'Int'>
    readonly likes_count: FieldRef<"ContentMetric", 'Int'>
    readonly comments_count: FieldRef<"ContentMetric", 'Int'>
    readonly shares_count: FieldRef<"ContentMetric", 'Int'>
    readonly created_at: FieldRef<"ContentMetric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentMetric findUnique
   */
  export type ContentMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentMetric
     */
    select?: ContentMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentMetric
     */
    omit?: ContentMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentMetricInclude<ExtArgs> | null
    /**
     * Filter, which ContentMetric to fetch.
     */
    where: ContentMetricWhereUniqueInput
  }

  /**
   * ContentMetric findUniqueOrThrow
   */
  export type ContentMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentMetric
     */
    select?: ContentMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentMetric
     */
    omit?: ContentMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentMetricInclude<ExtArgs> | null
    /**
     * Filter, which ContentMetric to fetch.
     */
    where: ContentMetricWhereUniqueInput
  }

  /**
   * ContentMetric findFirst
   */
  export type ContentMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentMetric
     */
    select?: ContentMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentMetric
     */
    omit?: ContentMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentMetricInclude<ExtArgs> | null
    /**
     * Filter, which ContentMetric to fetch.
     */
    where?: ContentMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentMetrics to fetch.
     */
    orderBy?: ContentMetricOrderByWithRelationInput | ContentMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentMetrics.
     */
    cursor?: ContentMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentMetrics.
     */
    distinct?: ContentMetricScalarFieldEnum | ContentMetricScalarFieldEnum[]
  }

  /**
   * ContentMetric findFirstOrThrow
   */
  export type ContentMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentMetric
     */
    select?: ContentMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentMetric
     */
    omit?: ContentMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentMetricInclude<ExtArgs> | null
    /**
     * Filter, which ContentMetric to fetch.
     */
    where?: ContentMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentMetrics to fetch.
     */
    orderBy?: ContentMetricOrderByWithRelationInput | ContentMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentMetrics.
     */
    cursor?: ContentMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentMetrics.
     */
    distinct?: ContentMetricScalarFieldEnum | ContentMetricScalarFieldEnum[]
  }

  /**
   * ContentMetric findMany
   */
  export type ContentMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentMetric
     */
    select?: ContentMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentMetric
     */
    omit?: ContentMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentMetricInclude<ExtArgs> | null
    /**
     * Filter, which ContentMetrics to fetch.
     */
    where?: ContentMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentMetrics to fetch.
     */
    orderBy?: ContentMetricOrderByWithRelationInput | ContentMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentMetrics.
     */
    cursor?: ContentMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentMetrics.
     */
    distinct?: ContentMetricScalarFieldEnum | ContentMetricScalarFieldEnum[]
  }

  /**
   * ContentMetric create
   */
  export type ContentMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentMetric
     */
    select?: ContentMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentMetric
     */
    omit?: ContentMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentMetricInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentMetric.
     */
    data: XOR<ContentMetricCreateInput, ContentMetricUncheckedCreateInput>
  }

  /**
   * ContentMetric createMany
   */
  export type ContentMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentMetrics.
     */
    data: ContentMetricCreateManyInput | ContentMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentMetric update
   */
  export type ContentMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentMetric
     */
    select?: ContentMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentMetric
     */
    omit?: ContentMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentMetricInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentMetric.
     */
    data: XOR<ContentMetricUpdateInput, ContentMetricUncheckedUpdateInput>
    /**
     * Choose, which ContentMetric to update.
     */
    where: ContentMetricWhereUniqueInput
  }

  /**
   * ContentMetric updateMany
   */
  export type ContentMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentMetrics.
     */
    data: XOR<ContentMetricUpdateManyMutationInput, ContentMetricUncheckedUpdateManyInput>
    /**
     * Filter which ContentMetrics to update
     */
    where?: ContentMetricWhereInput
    /**
     * Limit how many ContentMetrics to update.
     */
    limit?: number
  }

  /**
   * ContentMetric upsert
   */
  export type ContentMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentMetric
     */
    select?: ContentMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentMetric
     */
    omit?: ContentMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentMetricInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentMetric to update in case it exists.
     */
    where: ContentMetricWhereUniqueInput
    /**
     * In case the ContentMetric found by the `where` argument doesn't exist, create a new ContentMetric with this data.
     */
    create: XOR<ContentMetricCreateInput, ContentMetricUncheckedCreateInput>
    /**
     * In case the ContentMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentMetricUpdateInput, ContentMetricUncheckedUpdateInput>
  }

  /**
   * ContentMetric delete
   */
  export type ContentMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentMetric
     */
    select?: ContentMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentMetric
     */
    omit?: ContentMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentMetricInclude<ExtArgs> | null
    /**
     * Filter which ContentMetric to delete.
     */
    where: ContentMetricWhereUniqueInput
  }

  /**
   * ContentMetric deleteMany
   */
  export type ContentMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentMetrics to delete
     */
    where?: ContentMetricWhereInput
    /**
     * Limit how many ContentMetrics to delete.
     */
    limit?: number
  }

  /**
   * ContentMetric without action
   */
  export type ContentMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentMetric
     */
    select?: ContentMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentMetric
     */
    omit?: ContentMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentMetricInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    role: 'role',
    refresh_token: 'refresh_token',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChannelScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    platform: 'platform',
    handle_name: 'handle_name',
    created_at: 'created_at'
  };

  export type ChannelScalarFieldEnum = (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum]


  export const ContentScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    channel_id: 'channel_id',
    title: 'title',
    description: 'description',
    script_draft: 'script_draft',
    format_type: 'format_type',
    status: 'status',
    priority: 'priority',
    scheduled_date: 'scheduled_date',
    published_date: 'published_date',
    published_url: 'published_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum]


  export const ContentChecklistScalarFieldEnum: {
    id: 'id',
    content_id: 'content_id',
    task_name: 'task_name',
    is_completed: 'is_completed',
    created_at: 'created_at'
  };

  export type ContentChecklistScalarFieldEnum = (typeof ContentChecklistScalarFieldEnum)[keyof typeof ContentChecklistScalarFieldEnum]


  export const ContentMetricScalarFieldEnum: {
    id: 'id',
    content_id: 'content_id',
    recorded_at: 'recorded_at',
    views_count: 'views_count',
    likes_count: 'likes_count',
    comments_count: 'comments_count',
    shares_count: 'shares_count',
    created_at: 'created_at'
  };

  export type ContentMetricScalarFieldEnum = (typeof ContentMetricScalarFieldEnum)[keyof typeof ContentMetricScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password_hash: 'password_hash',
    refresh_token: 'refresh_token'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ChannelOrderByRelevanceFieldEnum: {
    platform: 'platform',
    handle_name: 'handle_name'
  };

  export type ChannelOrderByRelevanceFieldEnum = (typeof ChannelOrderByRelevanceFieldEnum)[keyof typeof ChannelOrderByRelevanceFieldEnum]


  export const ContentOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    script_draft: 'script_draft',
    published_url: 'published_url'
  };

  export type ContentOrderByRelevanceFieldEnum = (typeof ContentOrderByRelevanceFieldEnum)[keyof typeof ContentOrderByRelevanceFieldEnum]


  export const ContentChecklistOrderByRelevanceFieldEnum: {
    task_name: 'task_name'
  };

  export type ContentChecklistOrderByRelevanceFieldEnum = (typeof ContentChecklistOrderByRelevanceFieldEnum)[keyof typeof ContentChecklistOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'FormatType'
   */
  export type EnumFormatTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormatType'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    refresh_token?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    channels?: ChannelListRelationFilter
    contents?: ContentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    channels?: ChannelOrderByRelationAggregateInput
    contents?: ContentOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    refresh_token?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    channels?: ChannelListRelationFilter
    contents?: ContentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    refresh_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChannelWhereInput = {
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    id?: BigIntFilter<"Channel"> | bigint | number
    user_id?: BigIntFilter<"Channel"> | bigint | number
    platform?: StringFilter<"Channel"> | string
    handle_name?: StringFilter<"Channel"> | string
    created_at?: DateTimeFilter<"Channel"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contents?: ContentListRelationFilter
  }

  export type ChannelOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    platform?: SortOrder
    handle_name?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    contents?: ContentOrderByRelationAggregateInput
    _relevance?: ChannelOrderByRelevanceInput
  }

  export type ChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ChannelWhereInput | ChannelWhereInput[]
    OR?: ChannelWhereInput[]
    NOT?: ChannelWhereInput | ChannelWhereInput[]
    user_id?: BigIntFilter<"Channel"> | bigint | number
    platform?: StringFilter<"Channel"> | string
    handle_name?: StringFilter<"Channel"> | string
    created_at?: DateTimeFilter<"Channel"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    contents?: ContentListRelationFilter
  }, "id">

  export type ChannelOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    platform?: SortOrder
    handle_name?: SortOrder
    created_at?: SortOrder
    _count?: ChannelCountOrderByAggregateInput
    _avg?: ChannelAvgOrderByAggregateInput
    _max?: ChannelMaxOrderByAggregateInput
    _min?: ChannelMinOrderByAggregateInput
    _sum?: ChannelSumOrderByAggregateInput
  }

  export type ChannelScalarWhereWithAggregatesInput = {
    AND?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    OR?: ChannelScalarWhereWithAggregatesInput[]
    NOT?: ChannelScalarWhereWithAggregatesInput | ChannelScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Channel"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"Channel"> | bigint | number
    platform?: StringWithAggregatesFilter<"Channel"> | string
    handle_name?: StringWithAggregatesFilter<"Channel"> | string
    created_at?: DateTimeWithAggregatesFilter<"Channel"> | Date | string
  }

  export type ContentWhereInput = {
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    id?: BigIntFilter<"Content"> | bigint | number
    user_id?: BigIntFilter<"Content"> | bigint | number
    channel_id?: BigIntFilter<"Content"> | bigint | number
    title?: StringFilter<"Content"> | string
    description?: StringNullableFilter<"Content"> | string | null
    script_draft?: StringNullableFilter<"Content"> | string | null
    format_type?: EnumFormatTypeFilter<"Content"> | $Enums.FormatType
    status?: EnumStatusFilter<"Content"> | $Enums.Status
    priority?: EnumPriorityFilter<"Content"> | $Enums.Priority
    scheduled_date?: DateTimeNullableFilter<"Content"> | Date | string | null
    published_date?: DateTimeNullableFilter<"Content"> | Date | string | null
    published_url?: StringNullableFilter<"Content"> | string | null
    created_at?: DateTimeFilter<"Content"> | Date | string
    updated_at?: DateTimeFilter<"Content"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
    checklists?: ContentChecklistListRelationFilter
    metrics?: ContentMetricListRelationFilter
  }

  export type ContentOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    channel_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    script_draft?: SortOrderInput | SortOrder
    format_type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    scheduled_date?: SortOrderInput | SortOrder
    published_date?: SortOrderInput | SortOrder
    published_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    channel?: ChannelOrderByWithRelationInput
    checklists?: ContentChecklistOrderByRelationAggregateInput
    metrics?: ContentMetricOrderByRelationAggregateInput
    _relevance?: ContentOrderByRelevanceInput
  }

  export type ContentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    user_id?: BigIntFilter<"Content"> | bigint | number
    channel_id?: BigIntFilter<"Content"> | bigint | number
    title?: StringFilter<"Content"> | string
    description?: StringNullableFilter<"Content"> | string | null
    script_draft?: StringNullableFilter<"Content"> | string | null
    format_type?: EnumFormatTypeFilter<"Content"> | $Enums.FormatType
    status?: EnumStatusFilter<"Content"> | $Enums.Status
    priority?: EnumPriorityFilter<"Content"> | $Enums.Priority
    scheduled_date?: DateTimeNullableFilter<"Content"> | Date | string | null
    published_date?: DateTimeNullableFilter<"Content"> | Date | string | null
    published_url?: StringNullableFilter<"Content"> | string | null
    created_at?: DateTimeFilter<"Content"> | Date | string
    updated_at?: DateTimeFilter<"Content"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    channel?: XOR<ChannelScalarRelationFilter, ChannelWhereInput>
    checklists?: ContentChecklistListRelationFilter
    metrics?: ContentMetricListRelationFilter
  }, "id">

  export type ContentOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    channel_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    script_draft?: SortOrderInput | SortOrder
    format_type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    scheduled_date?: SortOrderInput | SortOrder
    published_date?: SortOrderInput | SortOrder
    published_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ContentCountOrderByAggregateInput
    _avg?: ContentAvgOrderByAggregateInput
    _max?: ContentMaxOrderByAggregateInput
    _min?: ContentMinOrderByAggregateInput
    _sum?: ContentSumOrderByAggregateInput
  }

  export type ContentScalarWhereWithAggregatesInput = {
    AND?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    OR?: ContentScalarWhereWithAggregatesInput[]
    NOT?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Content"> | bigint | number
    user_id?: BigIntWithAggregatesFilter<"Content"> | bigint | number
    channel_id?: BigIntWithAggregatesFilter<"Content"> | bigint | number
    title?: StringWithAggregatesFilter<"Content"> | string
    description?: StringNullableWithAggregatesFilter<"Content"> | string | null
    script_draft?: StringNullableWithAggregatesFilter<"Content"> | string | null
    format_type?: EnumFormatTypeWithAggregatesFilter<"Content"> | $Enums.FormatType
    status?: EnumStatusWithAggregatesFilter<"Content"> | $Enums.Status
    priority?: EnumPriorityWithAggregatesFilter<"Content"> | $Enums.Priority
    scheduled_date?: DateTimeNullableWithAggregatesFilter<"Content"> | Date | string | null
    published_date?: DateTimeNullableWithAggregatesFilter<"Content"> | Date | string | null
    published_url?: StringNullableWithAggregatesFilter<"Content"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Content"> | Date | string
  }

  export type ContentChecklistWhereInput = {
    AND?: ContentChecklistWhereInput | ContentChecklistWhereInput[]
    OR?: ContentChecklistWhereInput[]
    NOT?: ContentChecklistWhereInput | ContentChecklistWhereInput[]
    id?: BigIntFilter<"ContentChecklist"> | bigint | number
    content_id?: BigIntFilter<"ContentChecklist"> | bigint | number
    task_name?: StringFilter<"ContentChecklist"> | string
    is_completed?: BoolFilter<"ContentChecklist"> | boolean
    created_at?: DateTimeFilter<"ContentChecklist"> | Date | string
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }

  export type ContentChecklistOrderByWithRelationInput = {
    id?: SortOrder
    content_id?: SortOrder
    task_name?: SortOrder
    is_completed?: SortOrder
    created_at?: SortOrder
    content?: ContentOrderByWithRelationInput
    _relevance?: ContentChecklistOrderByRelevanceInput
  }

  export type ContentChecklistWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ContentChecklistWhereInput | ContentChecklistWhereInput[]
    OR?: ContentChecklistWhereInput[]
    NOT?: ContentChecklistWhereInput | ContentChecklistWhereInput[]
    content_id?: BigIntFilter<"ContentChecklist"> | bigint | number
    task_name?: StringFilter<"ContentChecklist"> | string
    is_completed?: BoolFilter<"ContentChecklist"> | boolean
    created_at?: DateTimeFilter<"ContentChecklist"> | Date | string
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }, "id">

  export type ContentChecklistOrderByWithAggregationInput = {
    id?: SortOrder
    content_id?: SortOrder
    task_name?: SortOrder
    is_completed?: SortOrder
    created_at?: SortOrder
    _count?: ContentChecklistCountOrderByAggregateInput
    _avg?: ContentChecklistAvgOrderByAggregateInput
    _max?: ContentChecklistMaxOrderByAggregateInput
    _min?: ContentChecklistMinOrderByAggregateInput
    _sum?: ContentChecklistSumOrderByAggregateInput
  }

  export type ContentChecklistScalarWhereWithAggregatesInput = {
    AND?: ContentChecklistScalarWhereWithAggregatesInput | ContentChecklistScalarWhereWithAggregatesInput[]
    OR?: ContentChecklistScalarWhereWithAggregatesInput[]
    NOT?: ContentChecklistScalarWhereWithAggregatesInput | ContentChecklistScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ContentChecklist"> | bigint | number
    content_id?: BigIntWithAggregatesFilter<"ContentChecklist"> | bigint | number
    task_name?: StringWithAggregatesFilter<"ContentChecklist"> | string
    is_completed?: BoolWithAggregatesFilter<"ContentChecklist"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"ContentChecklist"> | Date | string
  }

  export type ContentMetricWhereInput = {
    AND?: ContentMetricWhereInput | ContentMetricWhereInput[]
    OR?: ContentMetricWhereInput[]
    NOT?: ContentMetricWhereInput | ContentMetricWhereInput[]
    id?: BigIntFilter<"ContentMetric"> | bigint | number
    content_id?: BigIntFilter<"ContentMetric"> | bigint | number
    recorded_at?: DateTimeFilter<"ContentMetric"> | Date | string
    views_count?: IntFilter<"ContentMetric"> | number
    likes_count?: IntFilter<"ContentMetric"> | number
    comments_count?: IntFilter<"ContentMetric"> | number
    shares_count?: IntFilter<"ContentMetric"> | number
    created_at?: DateTimeFilter<"ContentMetric"> | Date | string
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }

  export type ContentMetricOrderByWithRelationInput = {
    id?: SortOrder
    content_id?: SortOrder
    recorded_at?: SortOrder
    views_count?: SortOrder
    likes_count?: SortOrder
    comments_count?: SortOrder
    shares_count?: SortOrder
    created_at?: SortOrder
    content?: ContentOrderByWithRelationInput
  }

  export type ContentMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ContentMetricWhereInput | ContentMetricWhereInput[]
    OR?: ContentMetricWhereInput[]
    NOT?: ContentMetricWhereInput | ContentMetricWhereInput[]
    content_id?: BigIntFilter<"ContentMetric"> | bigint | number
    recorded_at?: DateTimeFilter<"ContentMetric"> | Date | string
    views_count?: IntFilter<"ContentMetric"> | number
    likes_count?: IntFilter<"ContentMetric"> | number
    comments_count?: IntFilter<"ContentMetric"> | number
    shares_count?: IntFilter<"ContentMetric"> | number
    created_at?: DateTimeFilter<"ContentMetric"> | Date | string
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }, "id">

  export type ContentMetricOrderByWithAggregationInput = {
    id?: SortOrder
    content_id?: SortOrder
    recorded_at?: SortOrder
    views_count?: SortOrder
    likes_count?: SortOrder
    comments_count?: SortOrder
    shares_count?: SortOrder
    created_at?: SortOrder
    _count?: ContentMetricCountOrderByAggregateInput
    _avg?: ContentMetricAvgOrderByAggregateInput
    _max?: ContentMetricMaxOrderByAggregateInput
    _min?: ContentMetricMinOrderByAggregateInput
    _sum?: ContentMetricSumOrderByAggregateInput
  }

  export type ContentMetricScalarWhereWithAggregatesInput = {
    AND?: ContentMetricScalarWhereWithAggregatesInput | ContentMetricScalarWhereWithAggregatesInput[]
    OR?: ContentMetricScalarWhereWithAggregatesInput[]
    NOT?: ContentMetricScalarWhereWithAggregatesInput | ContentMetricScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ContentMetric"> | bigint | number
    content_id?: BigIntWithAggregatesFilter<"ContentMetric"> | bigint | number
    recorded_at?: DateTimeWithAggregatesFilter<"ContentMetric"> | Date | string
    views_count?: IntWithAggregatesFilter<"ContentMetric"> | number
    likes_count?: IntWithAggregatesFilter<"ContentMetric"> | number
    comments_count?: IntWithAggregatesFilter<"ContentMetric"> | number
    shares_count?: IntWithAggregatesFilter<"ContentMetric"> | number
    created_at?: DateTimeWithAggregatesFilter<"ContentMetric"> | Date | string
  }

  export type UserCreateInput = {
    id?: bigint | number
    name: string
    email: string
    password_hash: string
    role?: $Enums.Role
    refresh_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    channels?: ChannelCreateNestedManyWithoutUserInput
    contents?: ContentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    name: string
    email: string
    password_hash: string
    role?: $Enums.Role
    refresh_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    channels?: ChannelUncheckedCreateNestedManyWithoutUserInput
    contents?: ContentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUpdateManyWithoutUserNestedInput
    contents?: ContentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUncheckedUpdateManyWithoutUserNestedInput
    contents?: ContentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    name: string
    email: string
    password_hash: string
    role?: $Enums.Role
    refresh_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelCreateInput = {
    id?: bigint | number
    platform: string
    handle_name: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutChannelsInput
    contents?: ContentCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    platform: string
    handle_name: string
    created_at?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    platform?: StringFieldUpdateOperationsInput | string
    handle_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChannelsNestedInput
    contents?: ContentUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    platform?: StringFieldUpdateOperationsInput | string
    handle_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    platform: string
    handle_name: string
    created_at?: Date | string
  }

  export type ChannelUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    platform?: StringFieldUpdateOperationsInput | string
    handle_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChannelUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    platform?: StringFieldUpdateOperationsInput | string
    handle_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateInput = {
    id?: bigint | number
    title: string
    description?: string | null
    script_draft?: string | null
    format_type: $Enums.FormatType
    status?: $Enums.Status
    priority?: $Enums.Priority
    scheduled_date?: Date | string | null
    published_date?: Date | string | null
    published_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutContentsInput
    channel: ChannelCreateNestedOneWithoutContentsInput
    checklists?: ContentChecklistCreateNestedManyWithoutContentInput
    metrics?: ContentMetricCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateInput = {
    id?: bigint | number
    user_id: bigint | number
    channel_id: bigint | number
    title: string
    description?: string | null
    script_draft?: string | null
    format_type: $Enums.FormatType
    status?: $Enums.Status
    priority?: $Enums.Priority
    scheduled_date?: Date | string | null
    published_date?: Date | string | null
    published_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    checklists?: ContentChecklistUncheckedCreateNestedManyWithoutContentInput
    metrics?: ContentMetricUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    script_draft?: NullableStringFieldUpdateOperationsInput | string | null
    format_type?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    scheduled_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContentsNestedInput
    channel?: ChannelUpdateOneRequiredWithoutContentsNestedInput
    checklists?: ContentChecklistUpdateManyWithoutContentNestedInput
    metrics?: ContentMetricUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    channel_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    script_draft?: NullableStringFieldUpdateOperationsInput | string | null
    format_type?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    scheduled_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: ContentChecklistUncheckedUpdateManyWithoutContentNestedInput
    metrics?: ContentMetricUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentCreateManyInput = {
    id?: bigint | number
    user_id: bigint | number
    channel_id: bigint | number
    title: string
    description?: string | null
    script_draft?: string | null
    format_type: $Enums.FormatType
    status?: $Enums.Status
    priority?: $Enums.Priority
    scheduled_date?: Date | string | null
    published_date?: Date | string | null
    published_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    script_draft?: NullableStringFieldUpdateOperationsInput | string | null
    format_type?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    scheduled_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    channel_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    script_draft?: NullableStringFieldUpdateOperationsInput | string | null
    format_type?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    scheduled_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentChecklistCreateInput = {
    id?: bigint | number
    task_name: string
    is_completed?: boolean
    created_at?: Date | string
    content: ContentCreateNestedOneWithoutChecklistsInput
  }

  export type ContentChecklistUncheckedCreateInput = {
    id?: bigint | number
    content_id: bigint | number
    task_name: string
    is_completed?: boolean
    created_at?: Date | string
  }

  export type ContentChecklistUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_name?: StringFieldUpdateOperationsInput | string
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutChecklistsNestedInput
  }

  export type ContentChecklistUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_name?: StringFieldUpdateOperationsInput | string
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentChecklistCreateManyInput = {
    id?: bigint | number
    content_id: bigint | number
    task_name: string
    is_completed?: boolean
    created_at?: Date | string
  }

  export type ContentChecklistUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_name?: StringFieldUpdateOperationsInput | string
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentChecklistUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content_id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_name?: StringFieldUpdateOperationsInput | string
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentMetricCreateInput = {
    id?: bigint | number
    recorded_at: Date | string
    views_count?: number
    likes_count?: number
    comments_count?: number
    shares_count?: number
    created_at?: Date | string
    content: ContentCreateNestedOneWithoutMetricsInput
  }

  export type ContentMetricUncheckedCreateInput = {
    id?: bigint | number
    content_id: bigint | number
    recorded_at: Date | string
    views_count?: number
    likes_count?: number
    comments_count?: number
    shares_count?: number
    created_at?: Date | string
  }

  export type ContentMetricUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    views_count?: IntFieldUpdateOperationsInput | number
    likes_count?: IntFieldUpdateOperationsInput | number
    comments_count?: IntFieldUpdateOperationsInput | number
    shares_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutMetricsNestedInput
  }

  export type ContentMetricUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content_id?: BigIntFieldUpdateOperationsInput | bigint | number
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    views_count?: IntFieldUpdateOperationsInput | number
    likes_count?: IntFieldUpdateOperationsInput | number
    comments_count?: IntFieldUpdateOperationsInput | number
    shares_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentMetricCreateManyInput = {
    id?: bigint | number
    content_id: bigint | number
    recorded_at: Date | string
    views_count?: number
    likes_count?: number
    comments_count?: number
    shares_count?: number
    created_at?: Date | string
  }

  export type ContentMetricUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    views_count?: IntFieldUpdateOperationsInput | number
    likes_count?: IntFieldUpdateOperationsInput | number
    comments_count?: IntFieldUpdateOperationsInput | number
    shares_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentMetricUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    content_id?: BigIntFieldUpdateOperationsInput | bigint | number
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    views_count?: IntFieldUpdateOperationsInput | number
    likes_count?: IntFieldUpdateOperationsInput | number
    comments_count?: IntFieldUpdateOperationsInput | number
    shares_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChannelListRelationFilter = {
    every?: ChannelWhereInput
    some?: ChannelWhereInput
    none?: ChannelWhereInput
  }

  export type ContentListRelationFilter = {
    every?: ContentWhereInput
    some?: ContentWhereInput
    none?: ContentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    refresh_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChannelOrderByRelevanceInput = {
    fields: ChannelOrderByRelevanceFieldEnum | ChannelOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChannelCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    platform?: SortOrder
    handle_name?: SortOrder
    created_at?: SortOrder
  }

  export type ChannelAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type ChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    platform?: SortOrder
    handle_name?: SortOrder
    created_at?: SortOrder
  }

  export type ChannelMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    platform?: SortOrder
    handle_name?: SortOrder
    created_at?: SortOrder
  }

  export type ChannelSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumFormatTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FormatType | EnumFormatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FormatType[]
    notIn?: $Enums.FormatType[]
    not?: NestedEnumFormatTypeFilter<$PrismaModel> | $Enums.FormatType
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[]
    notIn?: $Enums.Priority[]
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ChannelScalarRelationFilter = {
    is?: ChannelWhereInput
    isNot?: ChannelWhereInput
  }

  export type ContentChecklistListRelationFilter = {
    every?: ContentChecklistWhereInput
    some?: ContentChecklistWhereInput
    none?: ContentChecklistWhereInput
  }

  export type ContentMetricListRelationFilter = {
    every?: ContentMetricWhereInput
    some?: ContentMetricWhereInput
    none?: ContentMetricWhereInput
  }

  export type ContentChecklistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentMetricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentOrderByRelevanceInput = {
    fields: ContentOrderByRelevanceFieldEnum | ContentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContentCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    channel_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    script_draft?: SortOrder
    format_type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    scheduled_date?: SortOrder
    published_date?: SortOrder
    published_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ContentAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    channel_id?: SortOrder
  }

  export type ContentMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    channel_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    script_draft?: SortOrder
    format_type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    scheduled_date?: SortOrder
    published_date?: SortOrder
    published_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ContentMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    channel_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    script_draft?: SortOrder
    format_type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    scheduled_date?: SortOrder
    published_date?: SortOrder
    published_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ContentSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    channel_id?: SortOrder
  }

  export type EnumFormatTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormatType | EnumFormatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FormatType[]
    notIn?: $Enums.FormatType[]
    not?: NestedEnumFormatTypeWithAggregatesFilter<$PrismaModel> | $Enums.FormatType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormatTypeFilter<$PrismaModel>
    _max?: NestedEnumFormatTypeFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[]
    notIn?: $Enums.Priority[]
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ContentScalarRelationFilter = {
    is?: ContentWhereInput
    isNot?: ContentWhereInput
  }

  export type ContentChecklistOrderByRelevanceInput = {
    fields: ContentChecklistOrderByRelevanceFieldEnum | ContentChecklistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContentChecklistCountOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    task_name?: SortOrder
    is_completed?: SortOrder
    created_at?: SortOrder
  }

  export type ContentChecklistAvgOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
  }

  export type ContentChecklistMaxOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    task_name?: SortOrder
    is_completed?: SortOrder
    created_at?: SortOrder
  }

  export type ContentChecklistMinOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    task_name?: SortOrder
    is_completed?: SortOrder
    created_at?: SortOrder
  }

  export type ContentChecklistSumOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ContentMetricCountOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    recorded_at?: SortOrder
    views_count?: SortOrder
    likes_count?: SortOrder
    comments_count?: SortOrder
    shares_count?: SortOrder
    created_at?: SortOrder
  }

  export type ContentMetricAvgOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    views_count?: SortOrder
    likes_count?: SortOrder
    comments_count?: SortOrder
    shares_count?: SortOrder
  }

  export type ContentMetricMaxOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    recorded_at?: SortOrder
    views_count?: SortOrder
    likes_count?: SortOrder
    comments_count?: SortOrder
    shares_count?: SortOrder
    created_at?: SortOrder
  }

  export type ContentMetricMinOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    recorded_at?: SortOrder
    views_count?: SortOrder
    likes_count?: SortOrder
    comments_count?: SortOrder
    shares_count?: SortOrder
    created_at?: SortOrder
  }

  export type ContentMetricSumOrderByAggregateInput = {
    id?: SortOrder
    content_id?: SortOrder
    views_count?: SortOrder
    likes_count?: SortOrder
    comments_count?: SortOrder
    shares_count?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ChannelCreateNestedManyWithoutUserInput = {
    create?: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput> | ChannelCreateWithoutUserInput[] | ChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutUserInput | ChannelCreateOrConnectWithoutUserInput[]
    createMany?: ChannelCreateManyUserInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type ContentCreateNestedManyWithoutUserInput = {
    create?: XOR<ContentCreateWithoutUserInput, ContentUncheckedCreateWithoutUserInput> | ContentCreateWithoutUserInput[] | ContentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutUserInput | ContentCreateOrConnectWithoutUserInput[]
    createMany?: ContentCreateManyUserInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type ChannelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput> | ChannelCreateWithoutUserInput[] | ChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutUserInput | ChannelCreateOrConnectWithoutUserInput[]
    createMany?: ChannelCreateManyUserInputEnvelope
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
  }

  export type ContentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContentCreateWithoutUserInput, ContentUncheckedCreateWithoutUserInput> | ContentCreateWithoutUserInput[] | ContentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutUserInput | ContentCreateOrConnectWithoutUserInput[]
    createMany?: ContentCreateManyUserInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChannelUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput> | ChannelCreateWithoutUserInput[] | ChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutUserInput | ChannelCreateOrConnectWithoutUserInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutUserInput | ChannelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChannelCreateManyUserInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutUserInput | ChannelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutUserInput | ChannelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type ContentUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContentCreateWithoutUserInput, ContentUncheckedCreateWithoutUserInput> | ContentCreateWithoutUserInput[] | ContentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutUserInput | ContentCreateOrConnectWithoutUserInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutUserInput | ContentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContentCreateManyUserInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutUserInput | ContentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutUserInput | ContentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type ChannelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput> | ChannelCreateWithoutUserInput[] | ChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChannelCreateOrConnectWithoutUserInput | ChannelCreateOrConnectWithoutUserInput[]
    upsert?: ChannelUpsertWithWhereUniqueWithoutUserInput | ChannelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChannelCreateManyUserInputEnvelope
    set?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    disconnect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    delete?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    connect?: ChannelWhereUniqueInput | ChannelWhereUniqueInput[]
    update?: ChannelUpdateWithWhereUniqueWithoutUserInput | ChannelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChannelUpdateManyWithWhereWithoutUserInput | ChannelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
  }

  export type ContentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContentCreateWithoutUserInput, ContentUncheckedCreateWithoutUserInput> | ContentCreateWithoutUserInput[] | ContentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutUserInput | ContentCreateOrConnectWithoutUserInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutUserInput | ContentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContentCreateManyUserInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutUserInput | ContentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutUserInput | ContentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChannelsInput = {
    create?: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelsInput
    connect?: UserWhereUniqueInput
  }

  export type ContentCreateNestedManyWithoutChannelInput = {
    create?: XOR<ContentCreateWithoutChannelInput, ContentUncheckedCreateWithoutChannelInput> | ContentCreateWithoutChannelInput[] | ContentUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutChannelInput | ContentCreateOrConnectWithoutChannelInput[]
    createMany?: ContentCreateManyChannelInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type ContentUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<ContentCreateWithoutChannelInput, ContentUncheckedCreateWithoutChannelInput> | ContentCreateWithoutChannelInput[] | ContentUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutChannelInput | ContentCreateOrConnectWithoutChannelInput[]
    createMany?: ContentCreateManyChannelInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutChannelsNestedInput = {
    create?: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChannelsInput
    upsert?: UserUpsertWithoutChannelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChannelsInput, UserUpdateWithoutChannelsInput>, UserUncheckedUpdateWithoutChannelsInput>
  }

  export type ContentUpdateManyWithoutChannelNestedInput = {
    create?: XOR<ContentCreateWithoutChannelInput, ContentUncheckedCreateWithoutChannelInput> | ContentCreateWithoutChannelInput[] | ContentUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutChannelInput | ContentCreateOrConnectWithoutChannelInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutChannelInput | ContentUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: ContentCreateManyChannelInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutChannelInput | ContentUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutChannelInput | ContentUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type ContentUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<ContentCreateWithoutChannelInput, ContentUncheckedCreateWithoutChannelInput> | ContentCreateWithoutChannelInput[] | ContentUncheckedCreateWithoutChannelInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutChannelInput | ContentCreateOrConnectWithoutChannelInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutChannelInput | ContentUpsertWithWhereUniqueWithoutChannelInput[]
    createMany?: ContentCreateManyChannelInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutChannelInput | ContentUpdateWithWhereUniqueWithoutChannelInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutChannelInput | ContentUpdateManyWithWhereWithoutChannelInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContentsInput = {
    create?: XOR<UserCreateWithoutContentsInput, UserUncheckedCreateWithoutContentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentsInput
    connect?: UserWhereUniqueInput
  }

  export type ChannelCreateNestedOneWithoutContentsInput = {
    create?: XOR<ChannelCreateWithoutContentsInput, ChannelUncheckedCreateWithoutContentsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutContentsInput
    connect?: ChannelWhereUniqueInput
  }

  export type ContentChecklistCreateNestedManyWithoutContentInput = {
    create?: XOR<ContentChecklistCreateWithoutContentInput, ContentChecklistUncheckedCreateWithoutContentInput> | ContentChecklistCreateWithoutContentInput[] | ContentChecklistUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ContentChecklistCreateOrConnectWithoutContentInput | ContentChecklistCreateOrConnectWithoutContentInput[]
    createMany?: ContentChecklistCreateManyContentInputEnvelope
    connect?: ContentChecklistWhereUniqueInput | ContentChecklistWhereUniqueInput[]
  }

  export type ContentMetricCreateNestedManyWithoutContentInput = {
    create?: XOR<ContentMetricCreateWithoutContentInput, ContentMetricUncheckedCreateWithoutContentInput> | ContentMetricCreateWithoutContentInput[] | ContentMetricUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ContentMetricCreateOrConnectWithoutContentInput | ContentMetricCreateOrConnectWithoutContentInput[]
    createMany?: ContentMetricCreateManyContentInputEnvelope
    connect?: ContentMetricWhereUniqueInput | ContentMetricWhereUniqueInput[]
  }

  export type ContentChecklistUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<ContentChecklistCreateWithoutContentInput, ContentChecklistUncheckedCreateWithoutContentInput> | ContentChecklistCreateWithoutContentInput[] | ContentChecklistUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ContentChecklistCreateOrConnectWithoutContentInput | ContentChecklistCreateOrConnectWithoutContentInput[]
    createMany?: ContentChecklistCreateManyContentInputEnvelope
    connect?: ContentChecklistWhereUniqueInput | ContentChecklistWhereUniqueInput[]
  }

  export type ContentMetricUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<ContentMetricCreateWithoutContentInput, ContentMetricUncheckedCreateWithoutContentInput> | ContentMetricCreateWithoutContentInput[] | ContentMetricUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ContentMetricCreateOrConnectWithoutContentInput | ContentMetricCreateOrConnectWithoutContentInput[]
    createMany?: ContentMetricCreateManyContentInputEnvelope
    connect?: ContentMetricWhereUniqueInput | ContentMetricWhereUniqueInput[]
  }

  export type EnumFormatTypeFieldUpdateOperationsInput = {
    set?: $Enums.FormatType
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<UserCreateWithoutContentsInput, UserUncheckedCreateWithoutContentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentsInput
    upsert?: UserUpsertWithoutContentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContentsInput, UserUpdateWithoutContentsInput>, UserUncheckedUpdateWithoutContentsInput>
  }

  export type ChannelUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<ChannelCreateWithoutContentsInput, ChannelUncheckedCreateWithoutContentsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutContentsInput
    upsert?: ChannelUpsertWithoutContentsInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<XOR<ChannelUpdateToOneWithWhereWithoutContentsInput, ChannelUpdateWithoutContentsInput>, ChannelUncheckedUpdateWithoutContentsInput>
  }

  export type ContentChecklistUpdateManyWithoutContentNestedInput = {
    create?: XOR<ContentChecklistCreateWithoutContentInput, ContentChecklistUncheckedCreateWithoutContentInput> | ContentChecklistCreateWithoutContentInput[] | ContentChecklistUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ContentChecklistCreateOrConnectWithoutContentInput | ContentChecklistCreateOrConnectWithoutContentInput[]
    upsert?: ContentChecklistUpsertWithWhereUniqueWithoutContentInput | ContentChecklistUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: ContentChecklistCreateManyContentInputEnvelope
    set?: ContentChecklistWhereUniqueInput | ContentChecklistWhereUniqueInput[]
    disconnect?: ContentChecklistWhereUniqueInput | ContentChecklistWhereUniqueInput[]
    delete?: ContentChecklistWhereUniqueInput | ContentChecklistWhereUniqueInput[]
    connect?: ContentChecklistWhereUniqueInput | ContentChecklistWhereUniqueInput[]
    update?: ContentChecklistUpdateWithWhereUniqueWithoutContentInput | ContentChecklistUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: ContentChecklistUpdateManyWithWhereWithoutContentInput | ContentChecklistUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: ContentChecklistScalarWhereInput | ContentChecklistScalarWhereInput[]
  }

  export type ContentMetricUpdateManyWithoutContentNestedInput = {
    create?: XOR<ContentMetricCreateWithoutContentInput, ContentMetricUncheckedCreateWithoutContentInput> | ContentMetricCreateWithoutContentInput[] | ContentMetricUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ContentMetricCreateOrConnectWithoutContentInput | ContentMetricCreateOrConnectWithoutContentInput[]
    upsert?: ContentMetricUpsertWithWhereUniqueWithoutContentInput | ContentMetricUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: ContentMetricCreateManyContentInputEnvelope
    set?: ContentMetricWhereUniqueInput | ContentMetricWhereUniqueInput[]
    disconnect?: ContentMetricWhereUniqueInput | ContentMetricWhereUniqueInput[]
    delete?: ContentMetricWhereUniqueInput | ContentMetricWhereUniqueInput[]
    connect?: ContentMetricWhereUniqueInput | ContentMetricWhereUniqueInput[]
    update?: ContentMetricUpdateWithWhereUniqueWithoutContentInput | ContentMetricUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: ContentMetricUpdateManyWithWhereWithoutContentInput | ContentMetricUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: ContentMetricScalarWhereInput | ContentMetricScalarWhereInput[]
  }

  export type ContentChecklistUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<ContentChecklistCreateWithoutContentInput, ContentChecklistUncheckedCreateWithoutContentInput> | ContentChecklistCreateWithoutContentInput[] | ContentChecklistUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ContentChecklistCreateOrConnectWithoutContentInput | ContentChecklistCreateOrConnectWithoutContentInput[]
    upsert?: ContentChecklistUpsertWithWhereUniqueWithoutContentInput | ContentChecklistUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: ContentChecklistCreateManyContentInputEnvelope
    set?: ContentChecklistWhereUniqueInput | ContentChecklistWhereUniqueInput[]
    disconnect?: ContentChecklistWhereUniqueInput | ContentChecklistWhereUniqueInput[]
    delete?: ContentChecklistWhereUniqueInput | ContentChecklistWhereUniqueInput[]
    connect?: ContentChecklistWhereUniqueInput | ContentChecklistWhereUniqueInput[]
    update?: ContentChecklistUpdateWithWhereUniqueWithoutContentInput | ContentChecklistUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: ContentChecklistUpdateManyWithWhereWithoutContentInput | ContentChecklistUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: ContentChecklistScalarWhereInput | ContentChecklistScalarWhereInput[]
  }

  export type ContentMetricUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<ContentMetricCreateWithoutContentInput, ContentMetricUncheckedCreateWithoutContentInput> | ContentMetricCreateWithoutContentInput[] | ContentMetricUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ContentMetricCreateOrConnectWithoutContentInput | ContentMetricCreateOrConnectWithoutContentInput[]
    upsert?: ContentMetricUpsertWithWhereUniqueWithoutContentInput | ContentMetricUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: ContentMetricCreateManyContentInputEnvelope
    set?: ContentMetricWhereUniqueInput | ContentMetricWhereUniqueInput[]
    disconnect?: ContentMetricWhereUniqueInput | ContentMetricWhereUniqueInput[]
    delete?: ContentMetricWhereUniqueInput | ContentMetricWhereUniqueInput[]
    connect?: ContentMetricWhereUniqueInput | ContentMetricWhereUniqueInput[]
    update?: ContentMetricUpdateWithWhereUniqueWithoutContentInput | ContentMetricUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: ContentMetricUpdateManyWithWhereWithoutContentInput | ContentMetricUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: ContentMetricScalarWhereInput | ContentMetricScalarWhereInput[]
  }

  export type ContentCreateNestedOneWithoutChecklistsInput = {
    create?: XOR<ContentCreateWithoutChecklistsInput, ContentUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutChecklistsInput
    connect?: ContentWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ContentUpdateOneRequiredWithoutChecklistsNestedInput = {
    create?: XOR<ContentCreateWithoutChecklistsInput, ContentUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutChecklistsInput
    upsert?: ContentUpsertWithoutChecklistsInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutChecklistsInput, ContentUpdateWithoutChecklistsInput>, ContentUncheckedUpdateWithoutChecklistsInput>
  }

  export type ContentCreateNestedOneWithoutMetricsInput = {
    create?: XOR<ContentCreateWithoutMetricsInput, ContentUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutMetricsInput
    connect?: ContentWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContentUpdateOneRequiredWithoutMetricsNestedInput = {
    create?: XOR<ContentCreateWithoutMetricsInput, ContentUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutMetricsInput
    upsert?: ContentUpsertWithoutMetricsInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutMetricsInput, ContentUpdateWithoutMetricsInput>, ContentUncheckedUpdateWithoutMetricsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumFormatTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FormatType | EnumFormatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FormatType[]
    notIn?: $Enums.FormatType[]
    not?: NestedEnumFormatTypeFilter<$PrismaModel> | $Enums.FormatType
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[]
    notIn?: $Enums.Priority[]
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumFormatTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormatType | EnumFormatTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FormatType[]
    notIn?: $Enums.FormatType[]
    not?: NestedEnumFormatTypeWithAggregatesFilter<$PrismaModel> | $Enums.FormatType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormatTypeFilter<$PrismaModel>
    _max?: NestedEnumFormatTypeFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[]
    notIn?: $Enums.Status[]
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[]
    notIn?: $Enums.Priority[]
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ChannelCreateWithoutUserInput = {
    id?: bigint | number
    platform: string
    handle_name: string
    created_at?: Date | string
    contents?: ContentCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    platform: string
    handle_name: string
    created_at?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutUserInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput>
  }

  export type ChannelCreateManyUserInputEnvelope = {
    data: ChannelCreateManyUserInput | ChannelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContentCreateWithoutUserInput = {
    id?: bigint | number
    title: string
    description?: string | null
    script_draft?: string | null
    format_type: $Enums.FormatType
    status?: $Enums.Status
    priority?: $Enums.Priority
    scheduled_date?: Date | string | null
    published_date?: Date | string | null
    published_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    channel: ChannelCreateNestedOneWithoutContentsInput
    checklists?: ContentChecklistCreateNestedManyWithoutContentInput
    metrics?: ContentMetricCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    channel_id: bigint | number
    title: string
    description?: string | null
    script_draft?: string | null
    format_type: $Enums.FormatType
    status?: $Enums.Status
    priority?: $Enums.Priority
    scheduled_date?: Date | string | null
    published_date?: Date | string | null
    published_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    checklists?: ContentChecklistUncheckedCreateNestedManyWithoutContentInput
    metrics?: ContentMetricUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutUserInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutUserInput, ContentUncheckedCreateWithoutUserInput>
  }

  export type ContentCreateManyUserInputEnvelope = {
    data: ContentCreateManyUserInput | ContentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChannelUpsertWithWhereUniqueWithoutUserInput = {
    where: ChannelWhereUniqueInput
    update: XOR<ChannelUpdateWithoutUserInput, ChannelUncheckedUpdateWithoutUserInput>
    create: XOR<ChannelCreateWithoutUserInput, ChannelUncheckedCreateWithoutUserInput>
  }

  export type ChannelUpdateWithWhereUniqueWithoutUserInput = {
    where: ChannelWhereUniqueInput
    data: XOR<ChannelUpdateWithoutUserInput, ChannelUncheckedUpdateWithoutUserInput>
  }

  export type ChannelUpdateManyWithWhereWithoutUserInput = {
    where: ChannelScalarWhereInput
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyWithoutUserInput>
  }

  export type ChannelScalarWhereInput = {
    AND?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
    OR?: ChannelScalarWhereInput[]
    NOT?: ChannelScalarWhereInput | ChannelScalarWhereInput[]
    id?: BigIntFilter<"Channel"> | bigint | number
    user_id?: BigIntFilter<"Channel"> | bigint | number
    platform?: StringFilter<"Channel"> | string
    handle_name?: StringFilter<"Channel"> | string
    created_at?: DateTimeFilter<"Channel"> | Date | string
  }

  export type ContentUpsertWithWhereUniqueWithoutUserInput = {
    where: ContentWhereUniqueInput
    update: XOR<ContentUpdateWithoutUserInput, ContentUncheckedUpdateWithoutUserInput>
    create: XOR<ContentCreateWithoutUserInput, ContentUncheckedCreateWithoutUserInput>
  }

  export type ContentUpdateWithWhereUniqueWithoutUserInput = {
    where: ContentWhereUniqueInput
    data: XOR<ContentUpdateWithoutUserInput, ContentUncheckedUpdateWithoutUserInput>
  }

  export type ContentUpdateManyWithWhereWithoutUserInput = {
    where: ContentScalarWhereInput
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyWithoutUserInput>
  }

  export type ContentScalarWhereInput = {
    AND?: ContentScalarWhereInput | ContentScalarWhereInput[]
    OR?: ContentScalarWhereInput[]
    NOT?: ContentScalarWhereInput | ContentScalarWhereInput[]
    id?: BigIntFilter<"Content"> | bigint | number
    user_id?: BigIntFilter<"Content"> | bigint | number
    channel_id?: BigIntFilter<"Content"> | bigint | number
    title?: StringFilter<"Content"> | string
    description?: StringNullableFilter<"Content"> | string | null
    script_draft?: StringNullableFilter<"Content"> | string | null
    format_type?: EnumFormatTypeFilter<"Content"> | $Enums.FormatType
    status?: EnumStatusFilter<"Content"> | $Enums.Status
    priority?: EnumPriorityFilter<"Content"> | $Enums.Priority
    scheduled_date?: DateTimeNullableFilter<"Content"> | Date | string | null
    published_date?: DateTimeNullableFilter<"Content"> | Date | string | null
    published_url?: StringNullableFilter<"Content"> | string | null
    created_at?: DateTimeFilter<"Content"> | Date | string
    updated_at?: DateTimeFilter<"Content"> | Date | string
  }

  export type UserCreateWithoutChannelsInput = {
    id?: bigint | number
    name: string
    email: string
    password_hash: string
    role?: $Enums.Role
    refresh_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    contents?: ContentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChannelsInput = {
    id?: bigint | number
    name: string
    email: string
    password_hash: string
    role?: $Enums.Role
    refresh_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    contents?: ContentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChannelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
  }

  export type ContentCreateWithoutChannelInput = {
    id?: bigint | number
    title: string
    description?: string | null
    script_draft?: string | null
    format_type: $Enums.FormatType
    status?: $Enums.Status
    priority?: $Enums.Priority
    scheduled_date?: Date | string | null
    published_date?: Date | string | null
    published_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutContentsInput
    checklists?: ContentChecklistCreateNestedManyWithoutContentInput
    metrics?: ContentMetricCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutChannelInput = {
    id?: bigint | number
    user_id: bigint | number
    title: string
    description?: string | null
    script_draft?: string | null
    format_type: $Enums.FormatType
    status?: $Enums.Status
    priority?: $Enums.Priority
    scheduled_date?: Date | string | null
    published_date?: Date | string | null
    published_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    checklists?: ContentChecklistUncheckedCreateNestedManyWithoutContentInput
    metrics?: ContentMetricUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutChannelInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutChannelInput, ContentUncheckedCreateWithoutChannelInput>
  }

  export type ContentCreateManyChannelInputEnvelope = {
    data: ContentCreateManyChannelInput | ContentCreateManyChannelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChannelsInput = {
    update: XOR<UserUpdateWithoutChannelsInput, UserUncheckedUpdateWithoutChannelsInput>
    create: XOR<UserCreateWithoutChannelsInput, UserUncheckedCreateWithoutChannelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChannelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChannelsInput, UserUncheckedUpdateWithoutChannelsInput>
  }

  export type UserUpdateWithoutChannelsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChannelsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ContentUpsertWithWhereUniqueWithoutChannelInput = {
    where: ContentWhereUniqueInput
    update: XOR<ContentUpdateWithoutChannelInput, ContentUncheckedUpdateWithoutChannelInput>
    create: XOR<ContentCreateWithoutChannelInput, ContentUncheckedCreateWithoutChannelInput>
  }

  export type ContentUpdateWithWhereUniqueWithoutChannelInput = {
    where: ContentWhereUniqueInput
    data: XOR<ContentUpdateWithoutChannelInput, ContentUncheckedUpdateWithoutChannelInput>
  }

  export type ContentUpdateManyWithWhereWithoutChannelInput = {
    where: ContentScalarWhereInput
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyWithoutChannelInput>
  }

  export type UserCreateWithoutContentsInput = {
    id?: bigint | number
    name: string
    email: string
    password_hash: string
    role?: $Enums.Role
    refresh_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    channels?: ChannelCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContentsInput = {
    id?: bigint | number
    name: string
    email: string
    password_hash: string
    role?: $Enums.Role
    refresh_token?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    channels?: ChannelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContentsInput, UserUncheckedCreateWithoutContentsInput>
  }

  export type ChannelCreateWithoutContentsInput = {
    id?: bigint | number
    platform: string
    handle_name: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutChannelsInput
  }

  export type ChannelUncheckedCreateWithoutContentsInput = {
    id?: bigint | number
    user_id: bigint | number
    platform: string
    handle_name: string
    created_at?: Date | string
  }

  export type ChannelCreateOrConnectWithoutContentsInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutContentsInput, ChannelUncheckedCreateWithoutContentsInput>
  }

  export type ContentChecklistCreateWithoutContentInput = {
    id?: bigint | number
    task_name: string
    is_completed?: boolean
    created_at?: Date | string
  }

  export type ContentChecklistUncheckedCreateWithoutContentInput = {
    id?: bigint | number
    task_name: string
    is_completed?: boolean
    created_at?: Date | string
  }

  export type ContentChecklistCreateOrConnectWithoutContentInput = {
    where: ContentChecklistWhereUniqueInput
    create: XOR<ContentChecklistCreateWithoutContentInput, ContentChecklistUncheckedCreateWithoutContentInput>
  }

  export type ContentChecklistCreateManyContentInputEnvelope = {
    data: ContentChecklistCreateManyContentInput | ContentChecklistCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type ContentMetricCreateWithoutContentInput = {
    id?: bigint | number
    recorded_at: Date | string
    views_count?: number
    likes_count?: number
    comments_count?: number
    shares_count?: number
    created_at?: Date | string
  }

  export type ContentMetricUncheckedCreateWithoutContentInput = {
    id?: bigint | number
    recorded_at: Date | string
    views_count?: number
    likes_count?: number
    comments_count?: number
    shares_count?: number
    created_at?: Date | string
  }

  export type ContentMetricCreateOrConnectWithoutContentInput = {
    where: ContentMetricWhereUniqueInput
    create: XOR<ContentMetricCreateWithoutContentInput, ContentMetricUncheckedCreateWithoutContentInput>
  }

  export type ContentMetricCreateManyContentInputEnvelope = {
    data: ContentMetricCreateManyContentInput | ContentMetricCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutContentsInput = {
    update: XOR<UserUpdateWithoutContentsInput, UserUncheckedUpdateWithoutContentsInput>
    create: XOR<UserCreateWithoutContentsInput, UserUncheckedCreateWithoutContentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContentsInput, UserUncheckedUpdateWithoutContentsInput>
  }

  export type UserUpdateWithoutContentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channels?: ChannelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChannelUpsertWithoutContentsInput = {
    update: XOR<ChannelUpdateWithoutContentsInput, ChannelUncheckedUpdateWithoutContentsInput>
    create: XOR<ChannelCreateWithoutContentsInput, ChannelUncheckedCreateWithoutContentsInput>
    where?: ChannelWhereInput
  }

  export type ChannelUpdateToOneWithWhereWithoutContentsInput = {
    where?: ChannelWhereInput
    data: XOR<ChannelUpdateWithoutContentsInput, ChannelUncheckedUpdateWithoutContentsInput>
  }

  export type ChannelUpdateWithoutContentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    platform?: StringFieldUpdateOperationsInput | string
    handle_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChannelsNestedInput
  }

  export type ChannelUncheckedUpdateWithoutContentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    platform?: StringFieldUpdateOperationsInput | string
    handle_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentChecklistUpsertWithWhereUniqueWithoutContentInput = {
    where: ContentChecklistWhereUniqueInput
    update: XOR<ContentChecklistUpdateWithoutContentInput, ContentChecklistUncheckedUpdateWithoutContentInput>
    create: XOR<ContentChecklistCreateWithoutContentInput, ContentChecklistUncheckedCreateWithoutContentInput>
  }

  export type ContentChecklistUpdateWithWhereUniqueWithoutContentInput = {
    where: ContentChecklistWhereUniqueInput
    data: XOR<ContentChecklistUpdateWithoutContentInput, ContentChecklistUncheckedUpdateWithoutContentInput>
  }

  export type ContentChecklistUpdateManyWithWhereWithoutContentInput = {
    where: ContentChecklistScalarWhereInput
    data: XOR<ContentChecklistUpdateManyMutationInput, ContentChecklistUncheckedUpdateManyWithoutContentInput>
  }

  export type ContentChecklistScalarWhereInput = {
    AND?: ContentChecklistScalarWhereInput | ContentChecklistScalarWhereInput[]
    OR?: ContentChecklistScalarWhereInput[]
    NOT?: ContentChecklistScalarWhereInput | ContentChecklistScalarWhereInput[]
    id?: BigIntFilter<"ContentChecklist"> | bigint | number
    content_id?: BigIntFilter<"ContentChecklist"> | bigint | number
    task_name?: StringFilter<"ContentChecklist"> | string
    is_completed?: BoolFilter<"ContentChecklist"> | boolean
    created_at?: DateTimeFilter<"ContentChecklist"> | Date | string
  }

  export type ContentMetricUpsertWithWhereUniqueWithoutContentInput = {
    where: ContentMetricWhereUniqueInput
    update: XOR<ContentMetricUpdateWithoutContentInput, ContentMetricUncheckedUpdateWithoutContentInput>
    create: XOR<ContentMetricCreateWithoutContentInput, ContentMetricUncheckedCreateWithoutContentInput>
  }

  export type ContentMetricUpdateWithWhereUniqueWithoutContentInput = {
    where: ContentMetricWhereUniqueInput
    data: XOR<ContentMetricUpdateWithoutContentInput, ContentMetricUncheckedUpdateWithoutContentInput>
  }

  export type ContentMetricUpdateManyWithWhereWithoutContentInput = {
    where: ContentMetricScalarWhereInput
    data: XOR<ContentMetricUpdateManyMutationInput, ContentMetricUncheckedUpdateManyWithoutContentInput>
  }

  export type ContentMetricScalarWhereInput = {
    AND?: ContentMetricScalarWhereInput | ContentMetricScalarWhereInput[]
    OR?: ContentMetricScalarWhereInput[]
    NOT?: ContentMetricScalarWhereInput | ContentMetricScalarWhereInput[]
    id?: BigIntFilter<"ContentMetric"> | bigint | number
    content_id?: BigIntFilter<"ContentMetric"> | bigint | number
    recorded_at?: DateTimeFilter<"ContentMetric"> | Date | string
    views_count?: IntFilter<"ContentMetric"> | number
    likes_count?: IntFilter<"ContentMetric"> | number
    comments_count?: IntFilter<"ContentMetric"> | number
    shares_count?: IntFilter<"ContentMetric"> | number
    created_at?: DateTimeFilter<"ContentMetric"> | Date | string
  }

  export type ContentCreateWithoutChecklistsInput = {
    id?: bigint | number
    title: string
    description?: string | null
    script_draft?: string | null
    format_type: $Enums.FormatType
    status?: $Enums.Status
    priority?: $Enums.Priority
    scheduled_date?: Date | string | null
    published_date?: Date | string | null
    published_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutContentsInput
    channel: ChannelCreateNestedOneWithoutContentsInput
    metrics?: ContentMetricCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutChecklistsInput = {
    id?: bigint | number
    user_id: bigint | number
    channel_id: bigint | number
    title: string
    description?: string | null
    script_draft?: string | null
    format_type: $Enums.FormatType
    status?: $Enums.Status
    priority?: $Enums.Priority
    scheduled_date?: Date | string | null
    published_date?: Date | string | null
    published_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    metrics?: ContentMetricUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutChecklistsInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutChecklistsInput, ContentUncheckedCreateWithoutChecklistsInput>
  }

  export type ContentUpsertWithoutChecklistsInput = {
    update: XOR<ContentUpdateWithoutChecklistsInput, ContentUncheckedUpdateWithoutChecklistsInput>
    create: XOR<ContentCreateWithoutChecklistsInput, ContentUncheckedCreateWithoutChecklistsInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutChecklistsInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutChecklistsInput, ContentUncheckedUpdateWithoutChecklistsInput>
  }

  export type ContentUpdateWithoutChecklistsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    script_draft?: NullableStringFieldUpdateOperationsInput | string | null
    format_type?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    scheduled_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContentsNestedInput
    channel?: ChannelUpdateOneRequiredWithoutContentsNestedInput
    metrics?: ContentMetricUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutChecklistsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    channel_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    script_draft?: NullableStringFieldUpdateOperationsInput | string | null
    format_type?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    scheduled_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: ContentMetricUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentCreateWithoutMetricsInput = {
    id?: bigint | number
    title: string
    description?: string | null
    script_draft?: string | null
    format_type: $Enums.FormatType
    status?: $Enums.Status
    priority?: $Enums.Priority
    scheduled_date?: Date | string | null
    published_date?: Date | string | null
    published_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutContentsInput
    channel: ChannelCreateNestedOneWithoutContentsInput
    checklists?: ContentChecklistCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutMetricsInput = {
    id?: bigint | number
    user_id: bigint | number
    channel_id: bigint | number
    title: string
    description?: string | null
    script_draft?: string | null
    format_type: $Enums.FormatType
    status?: $Enums.Status
    priority?: $Enums.Priority
    scheduled_date?: Date | string | null
    published_date?: Date | string | null
    published_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    checklists?: ContentChecklistUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutMetricsInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutMetricsInput, ContentUncheckedCreateWithoutMetricsInput>
  }

  export type ContentUpsertWithoutMetricsInput = {
    update: XOR<ContentUpdateWithoutMetricsInput, ContentUncheckedUpdateWithoutMetricsInput>
    create: XOR<ContentCreateWithoutMetricsInput, ContentUncheckedCreateWithoutMetricsInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutMetricsInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutMetricsInput, ContentUncheckedUpdateWithoutMetricsInput>
  }

  export type ContentUpdateWithoutMetricsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    script_draft?: NullableStringFieldUpdateOperationsInput | string | null
    format_type?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    scheduled_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContentsNestedInput
    channel?: ChannelUpdateOneRequiredWithoutContentsNestedInput
    checklists?: ContentChecklistUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutMetricsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    channel_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    script_draft?: NullableStringFieldUpdateOperationsInput | string | null
    format_type?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    scheduled_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: ContentChecklistUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ChannelCreateManyUserInput = {
    id?: bigint | number
    platform: string
    handle_name: string
    created_at?: Date | string
  }

  export type ContentCreateManyUserInput = {
    id?: bigint | number
    channel_id: bigint | number
    title: string
    description?: string | null
    script_draft?: string | null
    format_type: $Enums.FormatType
    status?: $Enums.Status
    priority?: $Enums.Priority
    scheduled_date?: Date | string | null
    published_date?: Date | string | null
    published_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ChannelUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    platform?: StringFieldUpdateOperationsInput | string
    handle_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    platform?: StringFieldUpdateOperationsInput | string
    handle_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    contents?: ContentUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    platform?: StringFieldUpdateOperationsInput | string
    handle_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    script_draft?: NullableStringFieldUpdateOperationsInput | string | null
    format_type?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    scheduled_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    channel?: ChannelUpdateOneRequiredWithoutContentsNestedInput
    checklists?: ContentChecklistUpdateManyWithoutContentNestedInput
    metrics?: ContentMetricUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    channel_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    script_draft?: NullableStringFieldUpdateOperationsInput | string | null
    format_type?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    scheduled_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: ContentChecklistUncheckedUpdateManyWithoutContentNestedInput
    metrics?: ContentMetricUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    channel_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    script_draft?: NullableStringFieldUpdateOperationsInput | string | null
    format_type?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    scheduled_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateManyChannelInput = {
    id?: bigint | number
    user_id: bigint | number
    title: string
    description?: string | null
    script_draft?: string | null
    format_type: $Enums.FormatType
    status?: $Enums.Status
    priority?: $Enums.Priority
    scheduled_date?: Date | string | null
    published_date?: Date | string | null
    published_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ContentUpdateWithoutChannelInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    script_draft?: NullableStringFieldUpdateOperationsInput | string | null
    format_type?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    scheduled_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutContentsNestedInput
    checklists?: ContentChecklistUpdateManyWithoutContentNestedInput
    metrics?: ContentMetricUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutChannelInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    script_draft?: NullableStringFieldUpdateOperationsInput | string | null
    format_type?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    scheduled_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: ContentChecklistUncheckedUpdateManyWithoutContentNestedInput
    metrics?: ContentMetricUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateManyWithoutChannelInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    script_draft?: NullableStringFieldUpdateOperationsInput | string | null
    format_type?: EnumFormatTypeFieldUpdateOperationsInput | $Enums.FormatType
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    scheduled_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentChecklistCreateManyContentInput = {
    id?: bigint | number
    task_name: string
    is_completed?: boolean
    created_at?: Date | string
  }

  export type ContentMetricCreateManyContentInput = {
    id?: bigint | number
    recorded_at: Date | string
    views_count?: number
    likes_count?: number
    comments_count?: number
    shares_count?: number
    created_at?: Date | string
  }

  export type ContentChecklistUpdateWithoutContentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_name?: StringFieldUpdateOperationsInput | string
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentChecklistUncheckedUpdateWithoutContentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_name?: StringFieldUpdateOperationsInput | string
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentChecklistUncheckedUpdateManyWithoutContentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    task_name?: StringFieldUpdateOperationsInput | string
    is_completed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentMetricUpdateWithoutContentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    views_count?: IntFieldUpdateOperationsInput | number
    likes_count?: IntFieldUpdateOperationsInput | number
    comments_count?: IntFieldUpdateOperationsInput | number
    shares_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentMetricUncheckedUpdateWithoutContentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    views_count?: IntFieldUpdateOperationsInput | number
    likes_count?: IntFieldUpdateOperationsInput | number
    comments_count?: IntFieldUpdateOperationsInput | number
    shares_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentMetricUncheckedUpdateManyWithoutContentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    views_count?: IntFieldUpdateOperationsInput | number
    likes_count?: IntFieldUpdateOperationsInput | number
    comments_count?: IntFieldUpdateOperationsInput | number
    shares_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}