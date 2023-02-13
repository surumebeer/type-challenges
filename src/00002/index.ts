const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : T;

type b = MyReturnType<String>;

type a = MyReturnType<typeof fn>;
