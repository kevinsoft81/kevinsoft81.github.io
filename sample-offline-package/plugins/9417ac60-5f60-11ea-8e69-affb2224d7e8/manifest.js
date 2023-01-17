manifest = {
  "name": "Screen",
  "description": "A screen of a lesson",
  "version": "0.15.209",
  "author": "Sparrow.Phoenix",
  "email": "",
  "type": "screen",
  "configurationSchema": "schemas/config.schema.json",
  "views": {
    "EDITOR": {
      "contentType": "text/html",
      "publicDir": "dist",
      "entryPoint": "index.html",
      "editorMode": "FULL_SCREEN"
    }
  },
  "searchable": [
    {
      "contentType": "text",
      "summary": [
        "title"
      ],
      "body": [
        "stage.text"
      ]
    }
  ]
}
