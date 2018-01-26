import React, { Component } from 'react';
import uuid from "uuid";


class AddProject extends Component {
    constructor(){
        super();
        this.state={
            newProject:{}
        }
    }

    static defaultProps={
        categories:["WEB DEVELOPMENT", "WEB DESIGN","MOBILE DEVELOPMENT"]
    }

    handleSubmit(e){
        e.preventDefault();

        if(this.refs.title.value===""){
            alert("Title is required");
        }
        else{
            this.setState({
                newProject:{
                    id:uuid.v4(),
                    title:this.refs.title.value,
                    category:this.refs.category.value
                }
            }, ()=>{
                //console.log(this.state)

                this.props.addProject(this.state.newProject);
            })
        }


    }

  render() {
      let categoryOptions = this.props.categories.map(category =>{
          return <option key={category} value={category} > {category} </option>
      });
    return (
            <div>
                    <h3> Add Project </h3>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div>
                             <label> Title </label> <br/>
                             <input type="text" ref="title"   />
                        </div>
                        <div>
                             <label> Category </label> <br/>
                             <select  ref="category">
                                    {categoryOptions}
                             </select>
                        </div>

                        <input type="submit" value="Submit" />
                        <br/>
                     </form>
            </div>
    );
  }
}

// AddProject.prototype={
//     categories: React.PropTypes.array,
//     addProject: React.PropTypes.func
//   }

export default AddProject;
