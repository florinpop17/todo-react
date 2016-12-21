var $ = require('jQuery');

module.exports = {
    setTodos: function(todos) {
        if($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    
    getTodos: function() {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            
        }
        
        if($.isArray(todos))
            return todos;
        else
            return [];
    },
    
    filterTodos: function(todos, show, search) {
        var filteredTodos = todos;
        
        //Filter by show
        filteredTodos = filteredTodos.filter((todo) => {
             return !todo.completed || show;
        });
        
        //Filter by search
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();
            
            return search.length === 0 || todo.text.indexOf(search) > -1;
        })
        
        //Sort todos with non-completed first
        filteredTodos.sort((a,b) => {
            if(!a.completed && b.completed) 
                return -1;
            if(a.completed && !b.completed)
                return 1;
            
            return 0;
        });
        
        return filteredTodos;
    }
};