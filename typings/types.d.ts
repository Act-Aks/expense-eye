// types.d.ts

type Dictionary<T> = { [key: string]: T };
type PropsWithChildren<P = unknown> = P & {
  children?: ReactNode | undefined;
};
