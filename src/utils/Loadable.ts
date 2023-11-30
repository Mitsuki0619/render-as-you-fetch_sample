type LoadableState<T> =
  | {
      status: "pending";
      promise: Promise<T>;
    }
  | {
      status: "success";
      data: T;
    }
  | {
      status: "error";
      error: unknown;
    };

export class Loadable<T> {
  #state: LoadableState<T>;
  constructor(promise: Promise<T>) {
    this.#state = {
      status: "pending",
      promise: promise
        .then((data) => {
          this.#state = {
            status: "success",
            data: data,
          };
          return data;
        })
        .catch((error) => {
          this.#state = {
            status: "error",
            error: error,
          };
          throw error;
        }),
    };
  }
  read(): T {
    switch (this.#state.status) {
      case "pending":
        throw this.#state.promise;
      case "success":
        return this.#state.data;
      case "error":
        throw this.#state.error;
    }
  }
}
