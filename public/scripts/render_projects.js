const projects = [
    {
        "name": "Mini Forum", 
        "description": 'Social media website, where you can create your own profile, share posts, comment to posts, "like" posts and view other users and their profile and their posts.',
        "link": "https://mini-forum1.herokuapp.com/",
        "image": "images/forum.png",
        "tools": ['react', 'node-js'],
    },
    {
        "name": "To Do", 
        "description": `Website where you can create your own account and a "to-do" list. You can mark certain things off your list as "done", which will then be shown on a second list as things you've accomplished. Two more features of this website enables you to delete things you wrote or update them.`,
        "link": "https://anaalamed-todo.herokuapp.com/",
        "image": "images/todo.png",
        "tools": ["react", 'node-js'],
    },
    {
        "name": "Advertisement", 
        "description": `Website created for a massage therapist for advertisement purposes and in order to pursue new clientele. On the website one can see a list of the various services given at a massage session and see pictures of the treatment process, as well as the massage therapist's experience and contact info.
        The website was created using Gatsby Template.`,
        "link": "https://victorportfolio.gatsbyjs.io/",
        "image": "images/victor.png",
        "tools": ["react"],
    },
    {
        "name": "Game - Space Invaders", 
        "description": `A game where the player plays as a tank. In the game the player moves the tank to the sides and shoots at the monsters above him, while trying to avoid the monsters' shots aimed at the tank's direction. The player has three "lives", and can also hide behind defences of long beams, that gets weaker each time a monster shoots them. The game ends once the player "kills" all the monsters or when the player lost all his "lives".`,
        "link": "https://ixcyl.csb.app/",
        "image": "images/space_invaders.png",
        "tools": ["html", 'css', 'js'],
    },
    {
        "name": "Memory Game", 
        "description": "A memory game. The game starts with showing the player all the cards for a few short seconds. Then the cards are flipped upside down. The player then needs to find matching pairs of the same picture by memory.",
        "link": "https://bsd26.csb.app/",
        "image": "images/cards.png",
        "tools": ["html", 'css', 'js'],
    },
    {
        "name": "TVmaze Shows Clone", 
        "description": `This website is a replica of another existing website. The replica has some of the same features as the original website, such as the ability to search a certain movie or t.v. series the watcher is looking for. The information was taken from the original website's API.`,
        "link": "https://anaalamed-tvmaze-clone.herokuapp.com/",
        "image": "images/tvmaze.png",
        "tools": ["html", 'css', 'sass', 'js'],
    },
    {
        "name": "My Digital CV", 
        "description": "",
        "link": "https://anaalamed.github.io/",
        "image": "images/cv.png",
        "tools": ["html", 'css', 'sass', 'js'],
    },

    // {
    //     "name": "Tic Tac Toe", 
    //     "description": "...",
    //     "link": "",
    //     "image": "",
    //     "tools": ['react'],
    // },
]

var num = 1;
function render_project(project = {}) {
    let code;
    if (num %2 === 0) {
        code =  `
     <div class="row projects-row">
        <div class="small-12 medium-6 medium-push-6 columns">
            <img src=${project.image} alt="">
        </div>
        <div class="small-12 medium-5 medium-pull-7 columns">
            <div class="details details-ftm">
                <h3>${project.name}</h3>
                <div>
                    ${project.tools?.includes('react') ? `<i class="fab fa-react fa-2x"></i>` : ``}
                    ${project.tools?.includes('html') ? `<i class="fab fa-html5 fa-2x"></i>` : ``}
                    ${project.tools?.includes('css') ? `<i class="fab fa-css3 fa-2x"></i>` : ``}
                    ${project.tools?.includes('sass') ? `<i class="fab fa-sass fa-2x"></i>` : ``}
                    ${project.tools?.includes('js') ? `<i class="fab fa-js fa-2x"></i>` : ``}
                    ${project.tools?.includes('node-js') ? `<i class="fab fa-node-js fa-2x"></i>` : ``}                
                </div>
                <p>${project.description}</p>

                <a class="my-button" target="_blank" href=${project.link}>Visit
                    Website</a>
                </div>
        </div>
    </div>
    `
}  else code = `
    <div class="row projects-row">
        <div class="small-12 medium-6 columns">
            <img src=${project.image} alt="">
        </div>
        <div class="small-12 medium-5 medium-offset-1 columns">
            <div class="details details-ftm">
                <h3>${project.name}</h3>
                <div>
                ${project.tools?.includes('react') ? `<i class="fab fa-react fa-2x"></i>` : ``}
                ${project.tools?.includes('html') ? `<i class="fab fa-html5 fa-2x"></i>` : ``}
                ${project.tools?.includes('css') ? `<i class="fab fa-css3 fa-2x"></i>` : ``}
                ${project.tools?.includes('sass') ? `<i class="fab fa-sass fa-2x"></i>` : ``}
                ${project.tools?.includes('js') ? `<i class="fab fa-js fa-2x"></i>` : ``}
                ${project.tools?.includes('node-js') ? `<i class="fab fa-node-js fa-2x"></i>` : ``}                
            </div>
                <p>${project.description}</p>
                <a class="my-button" target="_blank" href=${project.link}>Visit
                    Website</a>
            </div>
        </div>
    </div>
    `
    num++;
    return code;
}

function render_projects(project = {}) {
    document.querySelector('#myProjects').innerHTML = projects.map(render_project).join(""); 
}
render_projects(projects);

