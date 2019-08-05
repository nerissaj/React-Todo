import React from 'react';

const TodoData =
[
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];

class Todo extends React.Component{
    constructor(){
        super();
        this.state={
           
            task: TodoData
        };
    }
    return (
    
             )
}

export default Todo;