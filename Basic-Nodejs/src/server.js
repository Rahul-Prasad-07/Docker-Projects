const express = require('express');
const app = express();

// Make the public directory accessible to the client
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
  <div class="container" style="border: 2px dotted; background-color: aliceblue;">
  <h1 align="center" style="
  background: -webkit-linear-gradient(#ff1301, #2982f9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: #25212100;
">Welcome to <span style="color:#000"> my Docker Node.js </span> application</h1>
   
    <img align="center" src="/hii.jpeg" alt="My Image" style="
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    /* margin: 0px 10px 0 61px; */
">
<h3 align="center" style="
    font-size: 18px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    background: #80808078;
">Docker is an open-source containerization platform that allows developers to create, deploy, and run applications in a container environment. Containers are lightweight and portable, making it easy to move applications across different environments without the need for any changes in the code.</h3> 
<h3 align="center" style="
font-size: 18px;
width: 60%;
margin-left: auto;
margin-right: auto;
background: #80808078;
">Docker allows developers to package applications along with all their dependencies, libraries, and configurations into a container image. These images can then be deployed on any machine running the Docker platform. Docker images can be easily shared and distributed, making it a popular tool in the software development industry. </h3>
  
<p align="left" style="
font-size: 18px;
margin-left:20px;

">In this project, we have created a Node.js application using various modules and dependencies. After developing the application, we proceeded to create a Docker image by writing a Dockerfile, which included the necessary steps to build the image. We built the image using the 'docker build' command and tagged it with a relevant name and version. 
<br>
Next, we ran the container from the built image using the 'docker run' command. The container runs the application inside it, providing an isolated and consistent environment for the application to run in. We also exposed the required port to communicate with the container from the host machine.
<br>
Finally, we deployed the built Docker image to a Docker repository. The repository allows other users to access and use the image on their respective environments, ensuring consistency across all systems. This simplifies the deployment process, as users can easily access and deploy the required application without worrying about the environment setup.

</p>
</div>`);
});

app.get('/hii.jpeg', (req, res) => {
  res.sendFile(__dirname + '/hii.jpeg');
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
