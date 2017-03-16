// Import global stylesheet
import './styles/main.css';
// platformBrowserDynamic is for development. Using platformBrowser will create a smaller JS file.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);