# Project Support

### GameLister

## Summary

### Team:
Julio, Theshia and Yeray.

### Project Idea:
- Our project involves creating a platform that serves as a comprehensive video game database, similar to IMDb, but centered around games. Users can explore detailed game profiles, which include information, reviews, and multimedia content. What sets us apart is the ability for users to create personal profiles. These profiles allow them to keep a record of the games they have played, are currently playing, or wish to play in the future. Users can also provide ratings and reviews for games. In essence, we are building a community where gamers can share their gaming stories, maintain a personalized catalog, and connect with other players. Our goal is to be the ultimate source of game information and a space where the community can share experiences and discover new titles. Welcome to the evolution of the online gaming world.

Roles: There will be 2 main roles:
- Admin: This role has full permissions. It can view, create, update and delete information from all tables.

- User.

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
- Ref: collection.catalogue_id < catalogue.catalogue_id
- Ref: users.user_id < comments.user_id

#### Many to many:
- Ref: platform.platform_id <> platform_catalogue.platform_id
- Ref: catalogue.catalogue_id <> platform_catalogue.catalogue_id
- Ref: users.user_id <> user_catalogue.user_id
- Ref: catalogue.catalogue_id <> user_catalogue.catalogue_id

## Endpoints

###  Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | user/admin | User Signup              | `name`, `username`, `email`, `password` | { token: `token` }
POST   | /auth/login      | YES     | user/admin | User Login               | `email`, `password`                             | { token: `token` }


### User Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /api/user/:id  | YES   | user/admin | Get my user       |  `query params`                                        | {user}
GET    | /api/user      | YES   | admin | Get all users       |                                     | [{users}]
GET    | /api/user/:id   | YES   | admin | Get user by id     |  `query params`                                        | {user}
GET    | /api/user/:ownerid/comments    | YES   | user |  See all my comments    | `query params`           | [{comment}] //revisar
DELETE | /api/user/:id   | YES           | user | Delete my user       |     `query params`                                         | { message: 'User deleted' }
DELETE | /api/user/:id   | YES           | admin | Delete user by id       |                                              | { message: 'Profile deleted', user: user } ##crear función
PUT    | /api/user/:id   | YES   | user/admin | Edit my profile      |       `name`, `username`, `email`, `password`           | {message: 'User updated'}
PUT    | /api/user/:id   | YES   | admin | Edit user id profile      |       `name`, `username`, `email`, `password`           | {message: 'User updated', user: user} ##crear función


### My_catalogue Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /api/my_catalogue/all   | YES   | admin |  Get all user catalogue     |                              | [{my_catalogue}]
GET    | /api/my_catalogue   | YES   | user/admin |  Get my catalogue     |                             | [{my_catalogue}]
GET    | /api/my_catalogue/:id    | YES   | user/admin |  Get user game by id     | ``query params`                      | {my_catalogue}
POST    | /api/my_catalogue    | YES   | admin |  Add game to user catalogue     |  `userId`, `catalogueId`, `favorite`, `status`, `owned`                      | {my_catalogue}
POST    | /api/my_catalogue/:id    | YES   | user |  Add game to my catalogue     | ``query params`, `favorite`, `status`, `owned`                    | {my_catalogue}
PUT    | /api/my_catalogue/:id    | YES   | user/admin | Edit my catalogue by id (game status and ownership)      |     `Status`, `Owned`   | {message: 'My catalogue updated'} ##crear funcion
DELETE | /api/my_catalogue/:id   | YES   | user/admin  | Delete my catalogue by id (game)          |                        | { message: 'Game deleted' } 


### Catalogue Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /api/catalogue	    | NO   | user/admin | Get All Catalogue       |                                  | [{catalogue}]
GET    | /api/catalogue/:id    | NO   | user/admin | Get catalogue by ID	 |           ``query params`             | {catalogue}
GET    | /api/catalogue/:id/comments	  | YES   | user/admin | Get comments for a specific catalogue entry      |  `query params`     | [{comments}] ##revisar
GET    | /api/catalogue/genre	  | NO   | user/admin | Get all catalogues of a specific genre      |  `query params`     | [{catalogue}]
GET    | /api/catalogue/year	    | NO   | user | Get all catalogues released in a specific year       |  `query params`         | [{catalogue}]
POST   | /api/catalogue  | YES   | admin | Create videogame data      |       `title`, `description`, `genre`, `year`, `company`, `rate`          | {message: 'Game created' catalogue: catalogue}
POST   | /api/catalogue/:id/comments	  | YES   | user/admin | Post a new comment for a specific catalogue entry      |  `text`     | [{comments}] ##revisar
PUT    | /api/catalogue/:id    | YES   | user |  Update a catalogue entry by ID      | `title`, `description`, `genre`, `year`, `company`, `rate`    | {message: 'Catalogue updated'}
DELETE | /api/catalogue/:id    | YES   | user | Delete a catalogue entry by ID       |                      | { message: 'Catalogue deleted' }
DELETE | /api/catalogue/:id/comment/:id      | YES   | user | Delete a comment on a specific catalogue entry     |    | {message: 'Comment deleted'}


### Platforms Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /api/platform            | NO   | user/admin | Get All Platforms       |                                  | [{platform}]
GET    | /api/platform/:id      | NO   | user/admin | Get One Platform       |                               | {platform}
GET    | /api/platform/:id/catalogue     | NO   | user/admin | Get the catalogue of an specific platform       |                  | {platform}
GET    | /api/platform/year/	            | NO   | user/admin | Get Platforms by Year       |  `year`                                 | [{platform}] ##revisar
POST   | /api/platform            | YES   | admin |  Create a new platform        | `name`,`version`, `year` | {platform}  | {message: 'Console created' platform: platform}
POST   | /api/platform/:id/catalogue/:id    | YES   | admin | Create the catalogue of an specific platform       |                  | [{catalogue}]
PUT    | /api/platform/:id     | YES   | admin |  Update an specific platform     | `name`,`version`, `year` | {platform}  | {message: 'Platfom updated'}
DELETE | /api/platform/:id    | YES   | admin | Delete one platform         |                                                   | {message: 'Platform deleted'}

### Collections Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /collection            | NO   | user/admin | Get All Collections       |  `query params`                                 | [{collection}]
GET    | /collection/:id      | NO   | user/admin | Get One Collections       |                               | {collection}
POST   | /collection            | YES   | admin |  Create a new collection        | `title_collection` | { message: 'Collections Create', collection: collection }
PUT    | /collection/:id     | YES   | admin |  Update an specific collection     | `title_collection` | { message: 'Collections updated', collection: collection }
DELETE | /collection/:id    | YES   | admin | Delete one collection         |                                       | { message: 'Collections deleted' }


### Contact_info Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /contact_info    | YES   | admin | Get All Contact_info       |  `query params`                                 | [{contact_info}]
GET    | /contact_info/:id    | YES   | admin | Get One Contact_info |                        | {contact_info}
GET    | /contact_info/:ownerid    | YES   | user | Get Own Profile          |                                                 |  {contact_info}
POST   | /contact_info             | YES   | admin | Create one Contact_info    | `phone`, `address`       | {contact_info}
PUT    | /contact_info/:ownerid    | YES   | user/admin |  Update my contact_info      | `phone`, `address`    | {message: 'Contact information updated'}
PUT    | /contact_info/:id    | YES   | admin |  Update one contact_info      | `phone`, `address`    | {message: 'Contact information updated'}
DELETE | /contact_info/:ownerid    | YES   | user | Delete own contact_info       |                                               | { message: 'Contact information deleted' }
DELETE | /contact_info/:id      | YES   | admin | Delete one contact_info     |                                  | {message: 'Contact information deleted'}
