# 🌐 Personal Portfolio Website

Hi I am a 6th semester student majoring in information technology focusing on artificial intelligence and Frontend development. 
which here explains about myself and what projects I have worked on during college until now. 
 This website displays About Me, Skills, Education, Projects, and Contact me
 This website is containerized using *Docker* for easy deployment.

🛠️ Tech Stack
- HTML5  
- CSS3  
- JavaScript (Vanilla)  
- Docker

 ⚙️ Tools & Libraries
- Font Awesome / Simple Icons for tech logos  
- VS Code for development  
- Docker CLI for building and running the app
  
🚀 Features
- Clean, modern, and responsive design
- Interactive navigation and smooth scroll effects
- Modal previews for projects
- Mobile-first approach
- Docker-ready for deployment anywhere

Step-by-Step : RUN Portfolio Website with Docker  
# 1. Clone or extract this repo
https://github.com/nava-win/Website.git
# 2. Open Terminal and go to project folder
cd path/to/static-website
# 3. Run the container
docker compose up -d
# 4. visit Website 
http://localhost:8080
# To Stop the Container
docker-compose down

Notes : 
-EXPOSE 80 tells Docker to make port 80 available inside the container (Nginx default).
-The COPY . /usr/share/nginx/html line makes sure all your HTML, CSS, JS, and images are served by Nginx.
-You can push your code to GitHub and use this Docker setup to deploy to any cloud provider that supports Docker.

Feel free to open an issue or submit a pull request if you have suggestions, improvements, or want to collaborate!
