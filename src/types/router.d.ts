interface routerData {
  name: string;
  path: string;
  component: string;
  title: string;
  icon?: string;
  children?: Array<routerData>;
}

interface menuType {
  path: string;
  title: string;
  icon?: string;
  component?: string;
  children?: Array<menuType>;
}
