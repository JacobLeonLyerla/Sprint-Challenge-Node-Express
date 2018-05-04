import React from 'react';
import Project from './project'
const PostList = (props) =>{

console.log(props.projects)
return (<React.Fragment>
<div><h1>My Projects</h1></div>
<div>
 {props.projects.map(project=>{   
return(


<div>
<Project id={project.title} name={project.name} description={project.description} completed={project.completed}/>
</div>


 
); 
 })}
 </div>
 </React.Fragment>)
}

export default PostList;