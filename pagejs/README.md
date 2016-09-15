# webapp-template
Template for Web application. This template uses Ractive.js + Backbone.js(Router) and written in TypeScript. 

# How to compile .ts files

    $ cd pagejs/js
    $ make app
    or
    $ tsc app.ts -out app.js

`make` command just executes `tsc app.ts -out app.js`

# How to add page 

In this section, we introduce the way to add `MyPage` to your app. 

Add HTML to `index.html`. In ractive.js, each page should be placed in `<script id="xxxx" type="text/ractive">`. 

    <section id="container"></section>
      <script id="topTemplate" type="text/ractive">
        <h1>Top page</h1>
      </script>
      
      <script id="myPageTemplate" type="text/ractive">
          <h1>My page</h1>
      </script>

Copy `TopPage.ts`, rename class, and update the argument of `new Ractive` as follows

    class MyPage implements Page {
        app : Application;
        ractive : Ractive;
        
        constructor(app : Application) {
            this.app = app;
        }
        
        onCreate() {
            this.ractive = new Ractive({
                el : '#container',
                template : '#myPageTemplate',
            });
        }
    }

Add this class to `app.ts`

    /// <reference path="./ractive.d.ts"/>
    /// <reference path="./Page.ts"/>
    /// <reference path="./TopPage.ts"/>
    // ---- Add reference ----
    /// <reference path="./MyPage.ts"/> 
    /// <reference path="./Application.ts"/>
    declare var page;
    
    class Router {
        private app : Application;
    
        constructor(app : Application) {
            this.app = app;
            page('/', () => {
                this.showPage(new TopPage(app));
            });
            // ---- add routing pattern -----
            page("my", () => {
                this.showPage(new MyPage(app));
            });
        }
        private showPage(page : Page) {
            this.app.page = page;
            this.app.page.onCreate();
        }
    }

    window.addEventListener('load', () => {
        var app = new Application();
        app.start();
        app.router = new Router(app);
        page();
    });


Compile `.ts` file

    $ cd pagejs/js
    $ make app

Start node server

    $ cd ..
    $ node server.js

Open `http://localhost:8080/my` !
    
