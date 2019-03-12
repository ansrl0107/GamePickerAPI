define({ "api": [
  {
    "type": "post",
    "url": "/admin/questions",
    "title": "Ask to admin",
    "name": "CreateQuestions",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body.title",
            "description": "<p>Title of the question</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body.email",
            "description": "<p>An email to get a response</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body.value",
            "description": "<p>Content of the question</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS:",
          "content": "HTTP/1.1 204 No Content\n{\n    \n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/admin/questions",
    "title": "Get questions from users",
    "name": "GetQuestions",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query.sort",
            "description": "<p>Sorting options (answered)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json[]",
            "optional": false,
            "field": "questions",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the question</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the question</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Content of the question</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reply",
            "description": "<p>Answer of the question</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success:",
          "content": "HTTP/1.1 200 OK\n{\n    \"questions\": [\n           {\n               \"id\": 1,\n               \"title\": \"How to get authentication token?\",\n               \"email\": \"ansrl0107@gmail.com\",\n               \"value\": \"I want to use Gamepicker API\",\n               \"reply\": null\n           },\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body.email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body.password",
            "description": "<p>Password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_id",
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
          "title": "SUCCESS:",
          "content": "HTTP/1.1 200 OK\n{\n    \"user_id\": 23,\n    \"token\": \"rgewoubngkjgsdbfkhgb\"\n    \"admin\": true\n}",
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
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "Register",
    "name": "Register",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "query.auth",
            "description": "<p>Type of social login</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body.name",
            "description": "<p>Name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body.email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body.password",
            "description": "<p>Password of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body.birthday",
            "description": "<p>Birthday of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body.Gender",
            "description": "<p>of the user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth.js",
    "groupTitle": "Auth",
    "success": {
      "examples": [
        {
          "title": "SUCCESS:",
          "content": "HTTP/1.1 204 No Content\n{\n    \n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/auth/forgot",
    "title": "Reset password",
    "name": "ResetPassword",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body.email",
            "description": "<p>Email of the user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth.js",
    "groupTitle": "Auth",
    "success": {
      "examples": [
        {
          "title": "SUCCESS:",
          "content": "HTTP/1.1 204 No Content\n{\n    \n}",
          "type": "json"
        }
      ]
    }
  }
] });