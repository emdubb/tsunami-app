# Southern California Tsunami Evacuation Resource API

## Overview

This API provides access to materials for emergency planning for tsunami evacuation
in Southern California.

## Technologies Used

* Ruby/Rails
* [PostgreSQL](http://www.postgresql.org/docs/)

## Getting Started

Run `bundle install`

### Routes

Rails Route | HTTP Verb | Path/Resource      | Response Content           | Access  | Errors
:----------:|:---------:|--------------------|----------------------------|:-------:|---------
**INDEX**   | `GET`     | `/api`             | A list of all available API routes (JSON)| -       |
**INDEX**   | `GET`     | `/api/maps/index`  | A lis of all maps (JSON)   | -       |
**SHOW**    | `GET`     | `/api/maps/:id`    | A map's information (JSON) | -       |
**CREATE**  | `POST`    | `/api/maps`        | Post a new map             | Admin   |
**UPDATE**  | `PUT`     | `/api/maps/:id`    | Edit a map's information   | Admin   |
**DESTROY** | `DELETE`  | `/api/maps/:id`    | Delete a map               | Admin   |
**INDEX**   | `GET`     | `/api/users/index` | A list of all users (JSON) | Admin   |
**SHOW**    | `GET`     | `/api/users/:id`   | A user's information (JSON)| User    |
**CREATE**  | `POST`    | `/api/users`       | Create a new user          | User    |
**UPDATE**  | `PUT`     | `/api/users/:id`   | Edit a user's information (JSON) | User    |
**DESTROY** | `DELETE`  | `/api/users/:id`   | Delete a user              | User    |
**CREATE**  | `POST`    | `/api/token`       | A new token                | User    |
**SHOW**    | `GET`     | `/me`              | The current user's authenticated information        | User    |

*Admin has access to all routes that users have access to*

### Error Codes

Code      | Title                | Reasons for Error
----------|----------------------|----------------------------------
`400`     | Bad Request          | Not sending JSON as the body; malformed JSON (parse errors).
`401`     | Unauthorized         | Failed to send authorization credentials (token); malformed credentials.
`403`     | Forbidden		   	 | Authentication credentials were given, but failed to authorize for this resources.
`404`     | Not Found            |	Route does not exist; used in place of a `403 Forbidden` for many routes so that unique ids are not "leaked".
`422`     | Unprocessable Entity | Sending invalid fields or failing validation on those fields.

###Data Models

*Users*

Key       | Value Type       | Description 
----------|------------------|----------------------------------


---
© 2015 EM DUBB
