/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * Hackathon DH API
 * WIP
 * OpenAPI spec version: 1.0
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import type {
  AuthControllerGetProfile200,
  SigninDto,
  SignupCreateDto,
  Users,
} from '.././model';
import { customInstance } from '.././mutator/custom-instance';
import type { ErrorType, BodyType } from '.././mutator/custom-instance';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary Register
 */
export const authControllerSignUp = (
  signupCreateDto: BodyType<SignupCreateDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<Users>(
    {
      url: `/auth/register`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: signupCreateDto,
    },
    options,
  );
};

export const getAuthControllerSignUpMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof authControllerSignUp>>,
    TError,
    { data: BodyType<SignupCreateDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof authControllerSignUp>>,
  TError,
  { data: BodyType<SignupCreateDto> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof authControllerSignUp>>,
    { data: BodyType<SignupCreateDto> }
  > = (props) => {
    const { data } = props ?? {};

    return authControllerSignUp(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type AuthControllerSignUpMutationResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignUp>>
>;
export type AuthControllerSignUpMutationBody = BodyType<SignupCreateDto>;
export type AuthControllerSignUpMutationError = ErrorType<unknown>;

/**
 * @summary Register
 */
export const useAuthControllerSignUp = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof authControllerSignUp>>,
    TError,
    { data: BodyType<SignupCreateDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof authControllerSignUp>>,
  TError,
  { data: BodyType<SignupCreateDto> },
  TContext
> => {
  const mutationOptions = getAuthControllerSignUpMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Login
 */
export const authControllerSignIn = (
  signinDto: BodyType<SigninDto>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    {
      url: `/auth/login`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: signinDto,
    },
    options,
  );
};

export const getAuthControllerSignInMutationOptions = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof authControllerSignIn>>,
    TError,
    { data: BodyType<SigninDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof authControllerSignIn>>,
  TError,
  { data: BodyType<SigninDto> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof authControllerSignIn>>,
    { data: BodyType<SigninDto> }
  > = (props) => {
    const { data } = props ?? {};

    return authControllerSignIn(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type AuthControllerSignInMutationResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignIn>>
>;
export type AuthControllerSignInMutationBody = BodyType<SigninDto>;
export type AuthControllerSignInMutationError = ErrorType<unknown>;

/**
 * @summary Login
 */
export const useAuthControllerSignIn = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof authControllerSignIn>>,
    TError,
    { data: BodyType<SigninDto> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof authControllerSignIn>>,
  TError,
  { data: BodyType<SigninDto> },
  TContext
> => {
  const mutationOptions = getAuthControllerSignInMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Get user profile
 */
export const authControllerGetProfile = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<AuthControllerGetProfile200>(
    { url: `/auth/profile`, method: 'GET', signal },
    options,
  );
};

export const getAuthControllerGetProfileQueryKey = () => {
  return [`/auth/profile`] as const;
};

export const getAuthControllerGetProfileQueryOptions = <
  TData = Awaited<ReturnType<typeof authControllerGetProfile>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof authControllerGetProfile>>,
      TError,
      TData
    >
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getAuthControllerGetProfileQueryKey();

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof authControllerGetProfile>>
  > = ({ signal }) => authControllerGetProfile(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof authControllerGetProfile>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type AuthControllerGetProfileQueryResult = NonNullable<
  Awaited<ReturnType<typeof authControllerGetProfile>>
>;
export type AuthControllerGetProfileQueryError = ErrorType<unknown>;

/**
 * @summary Get user profile
 */
export const useAuthControllerGetProfile = <
  TData = Awaited<ReturnType<typeof authControllerGetProfile>>,
  TError = ErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<typeof authControllerGetProfile>>,
      TError,
      TData
    >
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getAuthControllerGetProfileQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};
