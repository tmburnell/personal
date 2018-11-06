import {AppHeaderComponent} from './app-header';
import {AppNavComponent} from './app-nav';
import {CapitalizePipe, KeysPipe} from './untils';

export const CommonComponents = [
  AppHeaderComponent,
  AppNavComponent,
  KeysPipe,
  CapitalizePipe
];

export * from './untils';
