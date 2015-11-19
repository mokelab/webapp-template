# webapp-template
Template for Web application. This template uses Ractive.js + Backbone.js(Router) and written in TypeScript. 

# How to compile .ts files

    $ cd js
    $ make app
    or
    $ tsc app.ts -out app.js

`make` command just executes `tsc app.ts -out app.js`

# How to add page 

Add the following `<script>` to body.

    <script id="myPageTemplate" type="text/ractive">
        <h1>Top page</h1>
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
    declare var $;
    declare var _;
    declare var Backbone;
    
    var app = new Application();
    
    var AppRouter = Backbone.Router.extend({
        routes : {
            "" : "top",
            // ---- add routing pattern -----
            "my" : "mypage",
        },
        top : () => {
            app.page = new TopPage(app);
            app.page.onCreate();
        },
        // ---- Add function to create MyPage class ----
        mypage : () => {
            app.page = new MyPage(app);
            app.page.onCreate();
        }
    });
    
    $(() => {
        app.start();
        app.router = new AppRouter();
        Backbone.history.start();
    });

Compile `.ts` file

    $ cd js
    $ make app

Open `index.html#my` !
    
