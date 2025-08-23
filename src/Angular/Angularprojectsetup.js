export default function Angularprojectsetup() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2>📘 Angular Project Setup</h2>

      <section>
        <b>1. ✅ Project Initialization</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`npm install -g @angular/cli
ng new myapp
cd myapp
ng serve --open

# Install common packages
npm install bootstrap
npm install bootstrap-icons
npm install sweetalert2
npm install axios`}
          </code>
        </pre>
      </section>

      <section>
        <b>2. 📁 Folder Structure</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`myapp/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   │   └── home.component.ts
│   │   │   └── about/
│   │   │       └── about.component.ts
│   │   ├── components/
│   │   │   ├── header/
│   │   │   │   └── header.component.ts
│   │   │   ├── footer/
│   │   │   │   └── footer.component.ts
│   │   │   └── layout/
│   │   │       └── layout.component.ts
│   │   ├── app-routing.module.ts
│   │   └── app.component.ts
│   └── index.html`}
          </code>
        </pre>
      </section>

      <section>
        <b>🔹 HomeComponent</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: \`
    <main>
      <h1>Welcome to Home Page</h1>
    </main>
  \`
})
export class HomeComponent { }`}
          </code>
        </pre>

        <b>🔹 AboutComponent</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: \`
    <b>About Page</b>
    <p>This is the about page of the Angular app.</p>
  \`
})
export class AboutComponent { }`}
          </code>
        </pre>

        <b>🧩 HeaderComponent</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: \`
    <header>
      <h1>My Angular App</h1>
      <nav>
        <a routerLink="/">Home</a>
        <a routerLink="/about">About</a>
      </nav>
    </header>
  \`
})
export class HeaderComponent { }`}
          </code>
        </pre>

        <b>🧩 FooterComponent</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: \`
    <footer>
      <p>&copy; {{year}} My Angular Site</p>
    </footer>
  \`
})
export class FooterComponent {
  year = new Date().getFullYear();
}`}
          </code>
        </pre>

        <b>🧩 LayoutComponent</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: \`
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  \`
})
export class LayoutComponent { }`}
          </code>
        </pre>

        <b>🔹 AppRoutingModule</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }`}
          </code>
        </pre>

        <b>🔹 AppComponent</b>
        <pre style={{ background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
          <code>
{`import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-layout></app-layout>'
})
export class AppComponent { }`}
          </code>
        </pre>
      </section>

      <section>
        <b>✅ Summary</b>
        <ul>
          <li>⚡ Angular project created with <code>@angular/cli</code></li>
          <li>🧩 Modular component structure (pages + layout)</li>
          <li>📄 Routing with <code>RouterModule</code></li>
          <li>✅ Shared Header and Footer with Layout component</li>
        </ul>
      </section>
    </div>
  );
}
