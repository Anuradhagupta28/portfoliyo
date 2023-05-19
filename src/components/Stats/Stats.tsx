import  "../Stats/StatsCss.css"
 function Stats(){

    return(
        <div className="hey">
          <h2>My Statistics</h2>
          <div className="imggit">

          <img className='static__statc-img' width= "45%"src="https://github-readme-stats.vercel.app/api?username=Anuradhagupta28&show_icons=true&theme=prussian&hide_border=true&text_color=b49d0e" alt="" />

                <img className='static__statc-img'width= "48%"src="https://github-readme-streak-stats.herokuapp.com/?user=Anuradhagupta28 &theme=prussian&show_icons=true&hide_border=true&currStreakLabel=b49d0e&currStreakNum=b49d0e&sideNums=b49d0e&sideLabels=b49d0e&fire=b49d0e" alt="" />
                </div>
        </div>
    )
}
export default Stats