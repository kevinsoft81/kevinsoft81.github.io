manifest = {
    "id": "72fe4cb0-a38f-11e9-ad04-d957dff0408d",
    "name": "Simple Unit",
    "description": "A unit plugin to be used in conjunction with the Simple Course plugin",
    "version": "1.0.5",
    "author": "Smart Sparrow",
    "email": "",
    "type": "unit",
    "configurationSchema": "schemas/aeroProperties.schema.json",
    "views": {
        "LEARNER": {
            "contentType": "text/html",
            "publicDir": "dist",
            "entryPoint": "index.html"
        }
    },
    "searchable": []
}