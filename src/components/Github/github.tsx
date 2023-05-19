import  "../Github/github.css"
import  GitHubCalendar from "react-github-calendar";

 function Github(){

    return(
        <div className="main" id="github">
          <h2>Github Contribution</h2>
         
          <GitHubCalendar style={{margin:"auto",width:"100%"}}
           username="Anuradhagupta28"
            blockSize={20}
            blockMargin={5}
           
            fontSize={16}
          />
        </div>
    )
}
export default Github
