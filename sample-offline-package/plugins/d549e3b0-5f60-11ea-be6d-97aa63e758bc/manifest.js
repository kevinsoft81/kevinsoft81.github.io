manifest = {
  "name": "Input Table Component",
  "description": "",
  "version": "0.5.0",
  "author": "Pearson",
  "email": "support@phx-spr.com",
  "type": "component",
  "configurationSchema": "schemas/config.schema.json",
  "views": {
    "LEARNER": {
      "contentType": "text/html",
      "publicDir": "dist/prod/component-input-table/0.4.0",
      "entryPoint": "index.html"
    }
  },
  "searchable": [
    {
      "contentType": "text",
      "summary": ["accessibility.title"],
      "body": ["accessibility.summary", "data"]
    }
  ]
}