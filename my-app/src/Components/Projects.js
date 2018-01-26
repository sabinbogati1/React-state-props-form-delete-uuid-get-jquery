import React, { Component } from 'react';
import ProjectItem from './ProjectItem';


class Projects extends Component {


  deleteProject(id){
        this.props.onDelete(id);
  }

   render() {

    let projectItems;
    if(this.props.projects){
      projectItems= this.props.projects.map(project =>{
            // console.log("This is inside project");
            // console.log(project);

            return(
                  <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.t} project={project} />
            );
      })
    }

    return (
             <div className="Projects">
                    <h3> Latest Projects </h3>
                    {this.props.test}
                    {projectItems}

            </div>
    );
  }
}

//Props validation

// Projects.prototype={
//   projects: React.PropTypes.array,
//   //if we want it to be String then
//   // projects: React.PropTypes.array,
//   onDelete: React.PropTypes.func
// }

export default Projects;
