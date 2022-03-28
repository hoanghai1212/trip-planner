import PathnameConst from './PathnameConst';

interface Navigation {
  key: string;
  title: string;
  url: string;
}

const NavigationConst: Navigation[] = [
  {
    key: 'home',
    title: 'Home',
    url: PathnameConst.home,
  },
  {
    key: 'my-plans',
    title: 'My Plans',
    url: PathnameConst.myPlans,
  },
];

export const defaultKey = NavigationConst[0].key;

export default NavigationConst;
