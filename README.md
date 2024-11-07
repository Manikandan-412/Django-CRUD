
# Django REST API CRUD with PostgreSQL

This project is a Django REST API application that provides Create, Read, Update, and Delete (CRUD) operations using a PostgreSQL database. The API is built using Django's REST framework and is designed to handle requests from a frontend client.

## Table of Contents

- [Requirements](#requirements)
- [Setup](#setup)
- [Database Configuration](#database-configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Frontend Integration](#frontend-integration)

## Requirements

- Python 3.8+
- Django 4.0+
- Django REST Framework
- PostgreSQL

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Manikandan-412/Django-CRUD.git
   cd Django-CRUD
   ```

2. **Create and activate a virtual environment:**

   ```bash
   python -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```

3. **Install dependencies:**

```bash
pip install django djangorestframework psycopg2
```

4. **Configure the database in `settings.py`:** (see the [Database Configuration](#database-configuration) section below)

5. **Run migrations:**

   ```bash
   python manage.py migrate
   ```

6. **Start the development server:**

   ```bash
   python manage.py runserver
   ```

## Database Configuration

To use PostgreSQL with Django, make sure to update the database configuration in `settings.py` as follows:

1. Open `settings.py` in your Django project.
2. Locate the `DATABASES` section and update it as follows:

   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.postgresql',
           'NAME': 'your_database_name',
           'USER': 'your_database_user',
           'PASSWORD': 'your_password',
           'HOST': 'localhost',  # Use your PostgreSQL host if different
           'PORT': '5432',       # Default PostgreSQL port
       }
   }
   ```

3. Replace `'your_database_name'`, `'your_database_user'`, and `'your_password'` with your actual PostgreSQL database name, user, and password.

## Running the Application

After completing the setup steps, you can start the Django development server:

```bash
python manage.py runserver
```

The application will run at `http://127.0.0.1:8000/`.

## API Endpoints

Here are the CRUD endpoints available in this application:

- **GET** `/api/person/`  
  Retrieve a list of all people in the database.

- **POST** `/api/person/`  
  Create a new person by sending data in the request body (name, age, email).

- **GET** `/api/person/<id>/`  
  Retrieve details of a single person by their ID.

- **PUT** `/api/person/<id>/`  
  Update an existing person by sending data in the request body.

- **DELETE** `/api/person/<id>/`  
  Delete a person by their ID.

### Sample JSON Data

When making POST or PUT requests, the following JSON structure should be used:

```json
{
    "name": "John Doe",
    "age": 30,
    "email": "johndoe@example.com"
}
```

## Frontend Integration

To integrate with the frontend, the CRUD API can be accessed via JavaScript `fetch` or any other HTTP client (e.g., `axios`).

Example usage in JavaScript:

```javascript
fetch('http://127.0.0.1:8000/api/person/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Jane Doe', age: 25, email: 'janedoe@example.com' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

## Contributing

If you wish to contribute to this project, please follow the standard GitHub workflow:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add a feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
