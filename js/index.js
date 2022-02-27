const allPlayers = () =>{
    const searchValue = document.getElementById('search-box').value;
     const url= `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
     fetch(url)
     .then((response) => response.json())
     .then((data)=> showPlayerDetails(data.player));
}

const showPlayerDetails =(players)=>{
        for (const player of players) {
            const parent = document.getElementById('payer-container')
            const div = document.createElement('div');
            div.innerHTML=`
                             <div class="card border">
                                        <div class="pro-pic">
                                            <img class="w-25" src="${player.strThumb}" alt="">
                                        </div>
                                        <h2>name:${player.strPlayer}</h2>
                                        <h5>Nationality:${player.strNationality}</h5>
                                        <h5>Date of Birth:${player.dateBorn}</h5>
                                        <h5>Jersy Number:${player.strNumber}</h5>
                                        <h5>Club Name:${player.strTeam}</h5>
                                        <h5>National Team:${player.strTeam2}</h5>
                                        <p></p>
                                        <div class="allButton">
                                            <button class="btn btn-danger">delet</button>
                                            <button class="btn btn-success">Ddetails</button>
                                        </div>
                                    </div>
            `;
            parent.appendChild(div)
                
        }
       
    
};