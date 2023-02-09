
export function Form(props){

    const  {task, handleSubmit, handleChange} = props
    
    return(
        <form >
            <input
            
                type="text"
                placeholder="Escribe la tarea" 
                onChange={handleChange}
                value = {task}
                />
                
            <input 
                type="submit"
                className="btn"
                value = "🡲"
                onClick={handleSubmit} />
        </form>
    )
}