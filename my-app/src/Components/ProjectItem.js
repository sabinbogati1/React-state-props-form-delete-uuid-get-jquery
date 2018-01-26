import React, { Component } from 'react';


class ProjectItem extends Component {

  deleteProject(id){
     // console.log("Delete");
     this.props.onDelete(id);

  }
  render() {
    return (
             <li className="Project">
                 <strong> {this.props.project.title} </strong> : {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}> X </a>
              </li>
    );
  }
}

//Only Gives Warning
// ProjectItem.prototype={
//   project: React.PropTypes.object,
//   onDelete: React.PropTypes.func
// }

export default ProjectItem;
