# Project Support

### GameLister

## Summary

### Team:
Julio, Theshia and Yeray.

### Project Idea:
- Our project involves creating a platform that serves as a comprehensive video game database, similar to IMDb, but centered around games. Users can explore detailed game profiles, which include information, reviews, and multimedia content. What sets us apart is the ability for users to create personal profiles. These profiles allow them to keep a record of the games they have played, are currently playing, or wish to play in the future. Users can also provide ratings and reviews for games. In essence, we are building a community where gamers can share their gaming stories, maintain a personalized catalog, and connect with other players. Our goal is to be the ultimate source of game information and a space where the community can share experiences and discover new titles. Welcome to the evolution of the online gaming world.

Roles: There will be 2 main roles:
- Admin: This role has full permissions. It can view, create, update and delete information from all tables.

- User (pet owner): This role can view all vet and treatment information. But you can only see your own appointments, pets and contact information (not other users). Likewise, you can only create, update and delete your own data. You have access to the information of all available appointments and the possibility to update the "status" field of the appointments when you select one to book for your pet, so that its status changes to "not available".

### Tables:
![image](https://github.com/Dokh0/GameLister/assets/139643932/fa9a3b21-093d-48fb-a322-be9fd16c7102)


### GameLister Features
- Platform catalogue.
- A vast collection of games with detailed information on each title.
- User profile.
- OWNED: History of owned games or willing to buy.
- STATUS: The ability to create profiles to track games they've played, are playing, or want to play in the future.
- Ability to provide ratings and write reviews to share opinions.
- Offer a news section that delivers updates about the gaming industry.
- Filters by game, genre, year, etc.
- Website
- DataBase
- Gamification: gamification elements like badges, achievements, and rewards for users who actively engage with the platform, such as writing insightful reviews or contributing valuable content.
- Games recommendations by AI based on your profile.

### Relationships between tables:

#### One to one:
- Ref: users.user_id - contactInfo.user_id
#### One to many:
- Ref: catalogue.catalogue_id < comments.catalogue_id
- Ref: collections.catalogue_id < catalogue.catalogue_id
- Ref: users.user_id < comments.user_id

#### Many to many:
- Ref: platforms.platform_id <> platform_catalogue.platform_id
- Ref: catalogue.catalogue_id <> platform_catalogue.catalogue_id
- Ref: users.user_id <> user_catalogue.user_id
- Ref: catalogue.catalogue_id <> user_catalogue.catalogue_id

### Authentication Endpoints
The Authentication flow for the application is:
![image](https://github.com/VeronicaRamirezMoreno/Project-2-API-Rest/assets/122170615/c4cb04e0-a87f-4aaf-b399-c74427c46ed8)


## Endpoints

### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | user | User Signup              | `name`, `username`, `email`, `password` | { token: `token` }
POST   | /auth/login      | -     | user | User Login               | `email`, `password`                             | { token: `token` }


### User Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    |  /api/profile  | YES   | user | Get my user       |  `query params`                                        | {user}
GET    | /api/platform    | NO   | user | Get platform       |         `query params`                                 | [{platform}]
GET    | /api/platform/:id  | NO   | user | Get platform by id      |  `query params`                                 | {platform}
GET    | /api/catalogue     | NO   | user | Get catalogue          |          `query params`                          |  [{catalogue}]
GET    | /api/catalogue/:id  | NO   | user |  Get catalogue by id | `query params`                                    | {catalogue}
GET    | /api/my_catalogue   | YES   | user |  Get all my catalogue     | `query params`                              | [{my_catalogue}]
GET    | /api/my_catalogue/:id    | YES   | user |  Get my catalogue by id     | `query params`                      | {my_catalogue}
GET    | /api/catalogue/:id/comments    | YES   | user |  Get all videogame's comments    | `query params`           | [{comments}]
DELETE | /api/my_catalogue/:id   | YES   | user  | Delete my catalogue by id (game)          |                        | { message: 'User deleted }
DELETE | /api/user/:id   | YES           | user | Delete my user       |                                              | { message: 'Profile deleted' }
DELETE | /api/catalogue/:id/comment/:id  | YES           | user | Delete my comment       |                                              | { message: 'comment deleted' }
PUT | /api/my_catalogue/:id    | YES   | user | Edit my catalogue by id (game status and ownership)      |     `Status`, `Owned`   | {message: 'My catalogue updated'}
PUT | /api/user/:id   | YES   | user | Edit my profile      |       `name`, `username`, `email`, `password`           | {message: 'User updated'}
POST    | /api/catalogue/:id/comments    | YES   | user |  Post a comment    | `query params`           | {comment}

### Admin Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    |  /api/profile   | YES   | admin | Get own user     |  `query params`                                        | {user}
GET    |  /api/users      | YES   | admin | Get my all users       |  `query params`                                   | [{users}]
GET    |  /api/user/:id   | YES   | admin | Get user id     |  `query params`                                        | {user}
GET    | /api/platform    | NO   | admin | Get platform       |         `query params`                                 | [{platform}]
GET    | /api/platform/:id  | NO   | admin | Get platform by id      |  `query params`                                 | {platform}
GET    | /api/catalogue     | NO   | admin | Get catalogue          |          `query params`                          |  [{catalogue}]
GET    | /api/catalogue/:id  | NO   | admin |  Get catalogue by id | `query params`                                    | {catalogue}
GET    | /api/catalogue/:id/comments    | YES   | admin |  Get all videogame's comments    | `query params`           | [{comments}]
GET    | /api/my_catalogue   | YES   | admin |  Get all my catalogue     | `query params`                              | [{my_catalogue}]
GET    | /api/my_catalogue/:id    | YES   | admin |  Get my catalogue by id     | ``query params`                      | {my_catalogue}
DELETE | /api/my_catalogue/:id   | YES   | admin  | Delete my catalogue by id (game)          |                        | { message: 'User deleted }
DELETE | /api/user/:id   | YES           | admin | Delete my user       |                                              | { message: 'Profile deleted' }
DELETE | /api/catalogue/:id/comments/:id  | YES           | admin | Delete comments by id      |                                              | { message: 'Comment deleted' }
PUT | /api/platform/:id    | YES   | admin | Edit consoles by id      |     `name`, `version`, `year`   | [{message: 'Console updated', catalogue: catalogue}]
PUT | /api/catalogue/:id    | YES   | admin | Edit catalogue by id      |     `title`, `description`, `genre`, `year`, `company`   | [{message: 'Catalogue updated', catalogue: catalogue}]
PUT | /api/my_catalogue/:id    | YES   | admin | Edit my catalogue by id (game status and ownership)      |     `Status`, `Owned`   | {message: 'My catalogue updated'}
PUT | /api/user/:id   | YES   | admin | Edit my profile      |       `name`, `username`, `email`, `password`           | {message: 'User updated'}
POST | /api/platform  | YES   | admin | Create console      |       `name`, `version`, `year`          | {message: 'Console created' platform: platform}
POST | /api/catalogue  | YES   | admin | Create videogame data      |       `title`, `description`, `genre`, `year`, `company`, `rate`          | {message: 'Game created' catalogue: catalogue}
POST    | /api/catalogue/:id/comments    | YES   | admin |  Post a comment    | `query params`           | {comment}


### Catalogue Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /api/catalogue	    | NO   | user | Get All Catalogue       |  `query params`                                 | [{catalogue}]
GET    | /api/catalogue/:id    | NO   | user | Get catalogue by ID	query params |                        | {catalogue}
GET    | /api/catalogue/:id/comments	  | YES   | user | Get comments for a specific catalogue entry      |  `query params`     | [{comments}]
GET    | /api/catalogue/:genre	  | NO   | user | Get all catalogues of a specific genre      |  `query params`     | [{catalogue}]
GET    | /api/catalogue/:year	    | NO   | user | Get all catalogues released in a specific year       |  `query params`         | [{catalogue}]
GET    | /api/catalogue/owned	  | YES   | user | Get all catalogues owned by the user      |  `query params`     | [{catalogue}]
POST   | /api/catalogue             | YES   | user | Create a new catalogue entry    | `title`, `description`, `genre`, `year`, `company`, `rate`       | {catalogue}
POST   | /api/catalogue/:id/comments	  | YES   | user | Post a new comment for a specific catalogue entry      |  `text`     | [{comments}]
PUT    | /api/catalogue/:id    | YES   | user |  Update a catalogue entry by ID      | `title`, `description`, `genre`, `year`, `company`, `rate`    | {message: 'Catalogue updated'}
DELETE | /api/catalogue/:id    | YES   | user | Delete a catalogue entry by ID       |                      | { message: 'Catalogue deleted' }
DELETE | /api/catalogue/:id/comment/:id      | YES   | user | Delete a comment on a specific catalogue entry     |    | {message: 'Comment deleted'}


### Platforms Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /platforms            | NO   | user/admin | Get All Platforms       |  `query params`                                 | [{platforms}]
GET    | /platforms/:id      | NO   | user/admin | Get One Platform       |                               | {platform}
GET    | /platforms/:id/catalogue     | NO   | user/admin | Get the catalogue of an specific platform       |                  | [{catalogue}]
GET    | /platforms/platform_id/catalogue/catalogue_id     | NO   | user | Get the specific catalogue of an specific platform       |                  | {catalogue}
GET    | /platforms/year/:year	            | NO   | user/admin | Get Platforms by Year       |  `year`                                 | [{platforms}]
GET    | /platforms/:platform_id/year/:year/catalogue	            | NO   | user/admin | Get Catalogue by Platform and Year       |                                  | [{catalogue}]
GET    | /platforms/:platform_id/genre/:genre/catalogue	            | NO   | user/admin | Get Catalogue by Platform and genre       |                                  | [{catalogue}]
POST   | /platforms            | YES   | admin |  Create a new platform        | `name`,`version`, `year` | {platform}  | {message: 'Platfom Create'}
POST   | /platforms/:platform_id/catalogue/:catalogue_id            | YES   | admin |  Add Game to Platform        | `title`, `description`, `genre`, `year`, `company`, `rate` | {message: 'Game added to Platform'}
PUT   |  /platforms/:id     | YES   | admin |  Update an specific platform     | `name`,`version`, `year` | {platform}  | {message: 'Platfom updated'}
DELETE | /platforms/:id    | YES   | admin | Delete one platform         |                                                   | {message: 'Platform deleted'}

### Collection Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /collections            | NO   | user/admin | Get All Collections       |  `query params`                                 | [{collections}]
GET    | /collections/:id      | NO   | user/admin | Get One Collections       |                               | {collections}
GET    | /collections/:collection_id/catalogue      | NO   | user/admin | Get Catalogue by Collection       |                               | {catalogue}
POST   | /collections            | YES   | admin |  Create a new collections        | `title_collection` | {collections}  | {message: 'Collections Create'}
PUT   |  /collections/:id     | YES   | admin |  Update an specific collections     | `title_collection` | {collections}  | {message: 'Collections updated'}
DELETE | /collections/:id    | YES   | admin | Delete one collections         |                                                   | {message: 'Collections deleted'}


### Pet Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /pet            | YES   | personnel | Get All Pets       |  `query params`                                 | [{pet}]
GET    | /pet/:petId     | YES   | personnel | Get One Pets       |                                | {pet}
GET    | /pet/profile    | YES   | user | Get own Pet          |                                                 |  [{pet}]
GET    | /pet/profile/:petId    | YES   | user | Get One own Pet        |                                                 |  {pet}
POST   | /pet/profile   | YES   | user |  Create own Pet        | `name`, `birth_date`, `chip_num`, `species`, `breed`, `sex`, `profile_picture`, `comments` | {pet}
POST   | /pet            | YES   | personnel |  Create one Pet   | `name`, `birth_date`, `chip_num`, `species`, `breed`, `sex`, `profile_picture`, `comments` | {pet}
PUT  | /pet/profile  | YES   | user |  Update own Pet | `name`, `birth_date`, `chip_num`, `species`, `breed`, `sex`, `profile_picture`, `comments`| {message: 'Pet updated'}
PUT    | /pet/:petId     | YES   | personnel |  Update one Pet     | `name`, `birth_date`, `chip_num`, `species`, `breed`, `sex`, `profile_picture`, `comments`| {message: 'Pet updated'}
DELETE | /pet/profile/:petId   | YES   | user | Delete own Pet       |                                                    | { message: 'Pet deleted' }
DELETE | /pet/:petId    | YES   | personnel | Delete one Pet      |                                                   | {message: 'Pet deleted'}


### Appointments Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /appointment            | YES   | personnel |Get All Appointments     |  `query params`                                 | [{appointment}]
GET    | /appointment/:appointmentId    | YES   | personnel |Get One Appointments     |                                   | {appointment}
GET    | /appointment/profile    | YES   | user | Get own Appointments        |                                                 |  {appointment}
GET    | /appointment/available    | YES   | user | Get available Appointments   |                                                |  {appointment}
POST   | /appointment   | YES   | personnel |  Create one Appointment | `appointment_date`, `appointment_time`, `description`, `duration`, `status` | {appointment}
PUT    | /appointment/available  | YES   | user |  Update own Appointment |   `status`   | {message: 'Appointment updated'}
PUT    | /appointment/:appointmentId     | YES   | personnel |  Update one Appointment     | `appointment_date`, `appointment_time`, `description`, `duration`, `status`| {message: 'Appointment updated'}
DELETE | /appointment/profile    | YES   | user | Delete own Appointment       |                                               | { message: 'Appointment deleted' }
DELETE | /appointment/:appointmentId    | YES   | personnel | Delete one Appointment      |                                            | {message: 'Appointment deleted'}


### Treatments Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /treatment            | YES   | user | Get All Treatments       |  `query params`                                 | [{treatment}]
GET    | /treatment/:treatmentId      | YES   | user | Get One Treatment       |                               | [{treatment}]
POST   | /treatment            | YES   | admin |  Create one Treatment        | `name`,`description`, `price` | {treatment}
PUT   |  /treatment/:treatmentId     | YES   | admin |  Update one Treatment        | `name`,`description`, `price` | {message: 'Treatment updated'}
DELETE | /treatment/:treatmentId     | YES   | admin | Delete one Treatment         |                                                   | {message: 'Treatment deleted'}
