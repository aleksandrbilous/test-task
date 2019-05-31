import RootLayout from '../layout/RootLayout';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';

export default () => [
  {
    component: RootLayout,
    routes: [ Task1(), Task2(), Task3(), Task4() ],
  },
];
