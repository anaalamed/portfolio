const projects = [
    {
        "id": 1,
        "name": "Massager Portfolio", 
        "description": "The website I created for my brother",
        "link": "https://victorportfolio.gatsbyjs.io/",
        "image": "images/victor.png",
        "react": true
    },
    {
        "id": 2,
        "name": "To Do App", 
        "description": "ToDo app created with REACT.....",
        "link": "https://anaalamed-todo.herokuapp.com/",
        "image": "images/todo.png"
    },
    {
        "id": 3,
        "name": "Mini Forum", 
        "description": "Mini Forum created with React",
        "link": "",
        "image": "images/.png"
    },
    {
        "id": 4,
        "name": "Space Invaders", 
        "description": "...",
        "link": "https://ixcyl.csb.app/",
        "image": "images/space_invaders.png"
    },
    {
        "id": 5,
        "name": "Memory Game", 
        "description": "...",
        "link": "https://bsd26.csb.app/",
        "image": "images/cards.png"
    },
    {
        "id": 6,
        "name": "TVmaze Clone", 
        "description": "...",
        "link": "https://anaalamed-tvmaze-clone.herokuapp.com/",
        "image": "images/tvmaze.png"
    },
    {
        "id": 7,
        "name": "My Digital CV", 
        "description": "...",
        "link": "https://anaalamed.github.io/",
        "image": "images/projectCV.png"
    },
    {
        "id": 8,
        "name": "Tic Tac Toe", 
        "description": "...",
        "link": "",
        "image": ""
    },
]

function render_project(project = {}) {
    if (project.id %2 === 0) {
        return `
        <div class="row projects-row">
        <!-- even -->
        <div class="small-12 medium-6 medium-push-6 columns">
            <img src=${project.image} alt="">
        </div>
        <div class="small-12 medium-5 medium-pull-7 columns">
            <div class="details details-ftm">
            <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a class="my-button" target="_blank" href=${project.link}>Visit
                    Website</a>
            </div>
        </div>
    </div>
    }`
}  else return `
    <div class="row projects-row">
        <!-- odd -->
        <div class="small-12 medium-6 columns">
            <img src=${project.image} alt="">
        </div>
        <div class="small-12 medium-5 medium-offset-1 columns">
            <div class="details details-ftm">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a class="my-button" target="_blank" href=${project.link}>Visit
                    Website</a>
            </div>
        </div>
    </div>
    `;
}

function render_projects(project = {}) {
    document.querySelector('#projects').innerHTML = projects.map(render_project).join("") 
}
render_projects(projects);

