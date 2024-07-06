# Face Recognition Login with Django and Teachable Machine By SANDJIO WAGNE EMMANUEL of software engineering

This project uses a Teachable Machines model to perform face recognition for login authentication. Users authenticate with their camera to log in, and if the face is recognized, they are redirected to a success page.

## Prerequisites

- Python 3.x
- pip (Python package installer)
- virtualenv (optional but recommended)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Sandjio/face_recognition_login.git
cd face_recognition_login

2.  Set Up a Virtual Environment (optional but recommended)
- On Windows:
python -m venv venv
venv\Scripts\activate

- On Linux:
python3 -m venv venv
source venv/bin/activate

3. Install Required Packages
pip install django

4. Apply Migrations and Run the Server
python manage.py migrate
python manage.py runserver

5. Access the Application
Go to http://127.0.0.1:8000
```
