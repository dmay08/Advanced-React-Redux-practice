// 1) went to 'https://jsonschema.net/' and typed in our expected data structure
// 2) typed in '{ [ "comment 1", "comment 2" ], "auth": true }' and hit 'INFER SCHEMA'
// 3) copied and pasted 'Inferred schema' below here:
// 4) npm i tv4 and use it to compare 'stateSchema' to 'getState()' of redux store (line 2 above)

export default {
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "title": "The Root Schema",
    "required": [
        "comments",
        "auth"
    ],
    "properties": {
        "comments": {
            "$id": "#/properties/comments",
            "type": "array",
            "title": "The Comments Schema",
            "items": {
                "$id": "#/properties/comments/items",
                "type": "string",
                "title": "The Items Schema",
                "default": "",
                "examples": [
                    "Comment #1",
                    "Comment #2"
                ],
                "pattern": "^(.*)$"
            }
        },
        "auth": {
            "$id": "#/properties/auth",
            "type": "boolean",
            "title": "The Auth Schema",
            "default": false,
            "examples": [
                true
            ]
        }
    }
}
