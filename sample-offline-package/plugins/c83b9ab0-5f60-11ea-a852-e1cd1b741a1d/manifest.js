manifest = {
  "id": "c83b9ab0-5f60-11ea-a852-e1cd1b741a1d",
  "name": "Flashcard Widget",
  "description": "A flashcard widget for aero.",
  "version": "2.1.11",
  "author": "Pearson",
  "email": "mark.wybrow<@>pearson.com",
  "type": "component",
  "configurationSchema": "schemas/config.schema.json",
  "views": {
    "LEARNER": {
        "contentType": "text/html",
        "publicDir": "dist",
        "entryPoint": "index.html"
      }
  },
  "searchable": [
    {
      "contentType": "image",
      "body": [
        "cards.front-text",
        "cards.back-text"
      ],
      "source": [
        "cards.front-image", 
        "cards.back-image"
      ]
    }
  ]
}
