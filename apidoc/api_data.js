define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "Login",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of this user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token of this user</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "admin",
            "description": "<p>The value to check if this user is an administrator</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 23,\n    \"token\": \"rgewoubngkjgsdbfkhgb\"\n    \"admin\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "USER_NOT_FOUND",
            "description": "<p>Can not find a user with email</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INCORRECT_PASSWORD",
            "description": "<p>Can not find a user with email and password</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MAIL_AUTHENTICATION_FAILED",
            "description": "<p>This account is not activated by email authentication</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "INCORRECT_PASSWORD:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"code\": \"INCORRECT_PASSWORD\",\n    \"message\": \"Can not find a user with email and password\"\n}",
          "type": "json"
        },
        {
          "title": "MAIL_AUTHENTICATION_FAILED:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"code\": \"MAIL_AUTHENTICATION_FAILED\",\n    \"message\": \"This account is not activated by email authentication\"\n}",
          "type": "json"
        },
        {
          "title": "USER_NOT_FOUND:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"code\": \"USER_NOT_FOUND\",\n    \"message\": \"Can not find a user with email\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/auth.js",
    "groupTitle": "Auth"
  }
] });
