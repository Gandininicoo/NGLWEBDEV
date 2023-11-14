document.addEventListener("DOMContentLoaded", (event) => {
    getProjects()
  });

function getProjects(){
    let project = document.querySelectorAll(".project")
    project.forEach((projectind) => (projectind.addEventListener("mouseover", onMouseAdd),projectind.addEventListener("mouseout", onMouseRemove)))
  }
function onMouseAdd(event){
    let projectMO = event.target
    let projectsadd = projectMO.closest('.project')
    let barraAdd = projectsadd.querySelector('.barraProjectos')
    barraAdd.classList.add("barraProjectosDespelgada")
}
function onMouseRemove(event){
    let projectMOut = event.target
    let projectsremove = projectMOut.closest('.project')
    let barraRemove = projectsremove.querySelector('.barraProjectos')
    barraRemove.classList.remove("barraProjectosDespelgada")
}