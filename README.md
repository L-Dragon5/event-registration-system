# Event Registration System
Registration System for Events and Conventions.
Built for Online and In-Person sales and check-in.

Built on Laravel REST API backend with a ReactJS frontend.
Styled using Google's Material Design via MaterializeCSS.

## Requirements
* MySQL/MariaDB Server
* PHP >= 7.2.0
* PHP Extensions: BCMath, Ctype, JSON, Mbstring, OpenSSL, PDO, XML
* Composer
* NodeJS

## To-Do
- Interfaces
  - Admin Terminal
  - Client Terminal
  - Linking 1 Admin and 1 Client together properly
    - Possibly have Admin terminal generate passcode on startup
    - Client terminal enters passcode and connects with admin terminal
    - They communicate via websockets
- Payment
  - Stripe Integration
- QR Code Barcode
  - Generator
  - Scanner/Check-In
- Printer
  - Printing labels upon Check-In
  - Connecting Printer with all Admin Terminals
- Models
  - Attendee
  - Ticket
  - Payment
- Actions
  - Online Registration
  - In-Person Registration
  - Check-In Attendee
  - View Checked-In Attendees

Reference & Inspiration: watch?v=WGDl9Q3rORo

## Installation
1. Go into folder
2. Install composer modules
   * Development: `composer install`
   * Production: `composer install --no-dev --optimize-autoloader`
3. Install node modules
   * `npm install`
   * Development: `npm run dev` or `npm run watch`
   * Production: `npm run prod`
4. Change `.env.example` file into `.env`
5. Update entries within the `.env` file to match database and other information
   * If in production, be sure to set `APP_ENV=production` and `APP_DEBUG=false`
6. Generate a new key
   * `php artisan key:generate`
7. Create database tables
   * `php artisan migrate`
   * If you want it seeded, then `php artisan migrate --seed`
   * You can wipe and seed again by doing `php artisan migrate:fresh --seed`
8. Generate encryption keys for API Auth
   * `php artisan passport:install`
9. Setup public symbolic link to storage folder
   * `php artisan storage:link`