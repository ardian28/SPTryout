export interface IRoutesAlias {
  home: string;
  login: string;
  register: string;
}

const routesAlias: Readonly<IRoutesAlias> = {
  home: 'home',
  login: 'login',
  register: 'register',
};

declare module 'vue' {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  interface Vue {
    $routesAlias: IRoutesAlias;
  }
}

export default routesAlias;
