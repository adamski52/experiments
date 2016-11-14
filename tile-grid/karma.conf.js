module.exports = function(config) {
    config.set({

        basePath: "",

        frameworks: ["jasmine"],

        files: [
            {pattern: "node_modules/createjs-easeljs/lib/easeljs-0.8.2.combined.js", included: true, watched: false},
            {pattern: "node_modules/core-js/client/shim.min.js", included: true, watched: false},
            {pattern: "node_modules/zone.js/dist/zone.js", included: true, watched: false},
            {pattern: "node_modules/reflect-metadata/Reflect.js", included: true, watched: false},
            {pattern: "node_modules/systemjs/dist/system.src.js", included: true, watched: false},

            {pattern: "systemjs.conf.js", included: false, watched: false},

            {pattern: "dist/**/*.js", included: false, watched: true},
            {pattern: "dist/**/*.js.map", included: false, watched: false},

            {pattern: "test/**/*.js", included: true, watched: true},
            {pattern: "test/**/*.js.map", included: false, watched: false}
        ],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["PhantomJS"],
        singleRun: false
    })
}
