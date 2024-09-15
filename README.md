#Fruit.ai - Health Manager Product
Fruit.ai is a mobile-friendly health management application that provides the following functionalities:

Chatbot with fruit details
->Translator for regional language
->FAQ section with CRUD operations
->About page
->User authentication through a dummy login system

##Features
->Login Page: Simple user interface with dummy login credentials.
->Home Page: Links to various services like Chatbot, Translator, FAQ, and About page.
->Chatbot Page: Displays a list of fruits and their detailed information.
->Translator Page: A form that translates text input into a regional language.
->FAQ Page: Allows users to create, read, update, and delete FAQs about fruits.
->About Page: Provides information about the Fruit.ai app.


##Table of Contents
->Installation
->Available Scripts
->API Endpoints
->FAQ CRUD


##Technologies Used
->Design and UX
->Deployment
->Installation

##Clone the repository:
bash
Copy code
git clone https://github.com/your-username/Fruit.ai.git


##Navigate to the project directory:
bash
Copy code
cd Fruit.ai


##Install dependencies:
bash
Copy code
npm install

##In the project directory, you can run:
npm start
Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

npm run build
Builds the app for production in the build folder.

##API Endpoints
GET	/api/faqs	
Retrieves all FAQs
POST	/api/faqs	
Adds a new FAQ
PUT	/api/faqs/
Updates a specific FAQ
DELETE	/api/faqs/
Deletes a specific FAQ


##FAQ CRUD
->Create: You can add a new FAQ entry by filling out the form on the FAQ page.
->Read: FAQs are displayed in a list, and clicking on an item shows its details.
->Update: An existing FAQ can be edited by clicking the "Edit" button next to it.
->Delete: You can remove an FAQ using the "Delete" button.


##Technologies Used
Frontend:
React.js
HTML5 & CSS3

Backend:
Node.js with Express

### Deployment
#Frontend
This section has moved here: https://fruit-ai-health-manager1.netlify.app
#Backend
https://fruit-ai-health-manager-1.onrender.com

