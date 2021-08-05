const projects = [
    {
        "name": "Mini Forum", 
        "description": "Mini Forum created with React",
        "link": "https://mini-forum1.herokuapp.com/",
        "image": "images/forum.png",
        "tools": ['react', 'node-js'],
    },
    {
        "name": "To Do App", 
        "description": "ToDo app created with REACT.....",
        "link": "https://anaalamed-todo.herokuapp.com/",
        "image": "images/todo.png",
        "tools": ["react", 'node-js'],
    },
    {
        "name": "Massager Portfolio", 
        "description": "The website I created for my brother Gatsby Template",
        "link": "https://victorportfolio.gatsbyjs.io/",
        "image": "images/victor.png",
        "tools": ["react"],
    },
    {
        "name": "Space Invaders", 
        "description": "...",
        "link": "https://ixcyl.csb.app/",
        "image": "images/space_invaders.png",
        "tools": ["html", 'css', 'js'],
    },
    {
        "name": "Memory Game", 
        "description": "...",
        "link": "https://bsd26.csb.app/",
        "image": "images/cards.png",
        "tools": ["html", 'css', 'js'],
    },
    {
        "name": "TVmaze Clone", 
        "description": "...",
        "link": "https://anaalamed-tvmaze-clone.herokuapp.com/",
        "image": "images/tvmaze.png",
        "tools": ["html", 'css', 'sass', 'js'],
    },
    {
        "name": "My Digital CV", 
        "description": "...",
        "link": "https://anaalamed.github.io/",
        "image": "images/cv.png",
        "tools": ["html", 'css', 'sass', 'js'],
    },

    {
        "name": "Tic Tac Toe", 
        "description": "...",
        "link": "",
        "image": "",
        "tools": ['react'],
    },
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

