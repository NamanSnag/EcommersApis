
# 🛒 Ecommerce Product Inventory Manager
This project allows the admin to manage the product inventory of an ecommerce platform. The admin can add products to the database, update the product quantity and delete the products as per the requirement.


## Tech Stack

- Node.js
- MongoDB


## Installation

Clone this repository
```bash
  git clone https://github.com/NamanSnag/csv-file-Reader
```

Install the required packages

```bash
  npm install
```
Connect to the MongoDB database
```bash
  mongodb+srv://naman-123:Ynag123@cluster0.ewv2nsm.mongodb.net/eommers
```

Start the server

```bash
  npm start
```

Open your web browser and navigate to http://localhost:8000

## API Endpoints

The following API endpoints are available in this project:

- Add products to the database
```bash
  Method: POST
  URL: /products/create
```
- Get products list
```bash
  Method: GET
  URL: /products
```
- Update product quantity
```bash
    Method: GET
    URL: /products/:id/update_quantity/?number=10
```
- Delete product
```bash
  Method: GET
  URL: /products/:id
```
## Directory Structure and flow of The Code
This code follows MVC pattern and hence everything is differentiated and well managed:

        ECOMMERS
        |------ config
        |         |---mongoose.js
        |------ controllers
        |         └--- admin_Controller.js
        |------ models
        |         └--- admin.js
        |------ routes
        |         └--- index.js
        |------ .gitignore
        |------ index.js
        |------ package.json
        |------ package-lock.json
        └------ README.md


## Authors

- [@Naman Nag](https://github.com/NamanSnag/EcommersApis)

