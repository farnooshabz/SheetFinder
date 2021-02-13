# SheetFinder
Summary :
You can search for your favorite song and find the sheet corresponding your instrument

## Requirments:

 - [mongodb]
 - Node 6.13.0
## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
</br>

### SheetFinder

</br>

### Find the song

-GET `/api/songs/:songId`

**Returns:** a single row
```json
    {
      "id":1,
      "title": "Für Elis",
      "composer": "Ludwig van Beethoven",
      "form": "Bagatelle",
      "Average Duration":"3min",
      "Instruments": [
        {"piano": "image.pdf"},
        {"violon":"image.pdf"}
      ]
    }

```

### Get the user's favorite list:
-GET `/api/users/:userId/list`

**Returns** an array
```json
   [
     {
       "id":1,
       "listName":"playLater",
       "count": 3,
       "songs": [
             {
              "id":1,
              "title": "Für Elis",
              "composer": "Ludwig van Beethoven",
              "form": "Bagatelle",
              "Average Duration":"3min",
              "Instruments": [
                {"piano": "image.pdf"},
                {"violon":"image.pdf"}
              ]
            }
          ]
     }
   ]

```

