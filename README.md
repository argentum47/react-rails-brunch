#Product List

###Pre-requisties:
-------------------
* Ruby version
 - ruby 2.1 or higher

* System dependencies
 - debian
 - mysql 5.5 or above

* Nodejs
 - node 4.2 or above (prefered with nvm)

###Setup:
--------------------
Copy the .env.sample to .env and add the database password

Tab 1:
  - `bundle`
  - `rake db:setup`

Tab 2:
  - `npm i`
  - `npm start` (for development `npm run watch`)

Tab 1: `rails s`
