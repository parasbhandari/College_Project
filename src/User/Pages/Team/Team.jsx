import React from 'react';

function Teams() {
  const teams = [
    {
      name: "Manchester United",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Manchester_United_Logo.svg",
      description: "Manchester United Football Club is a professional football club based in Old Trafford, Greater Manchester, England. The club is one of the most successful and popular football clubs in the world."
    },
    {
      name: "FC Barcelona",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/FC_Barcelona_logo.svg/1200px-FC_Barcelona_logo.svg.png",
      description: "Futbol Club Barcelona is a professional football club based in Barcelona, Catalonia, Spain. The club is one of the most successful and decorated teams in the world, with a rich history and passionate fanbase."
    },
    {
      name: "Real Madrid",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Real_Madrid_CF_logo.svg",
      description: "Real Madrid Club de Fútbol is a professional football club based in Madrid, Spain. The club has a rich history of success, with numerous domestic and international titles."
    },
    {
      name: "Liverpool FC",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Liverpool_FC_logo.png",
      description: "Liverpool Football Club is a professional football club based in Liverpool, England. The club has been successful in both domestic and international football, and is known for its passionate fanbase and history of winning."
    },
    {
      name: "Juventus",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Juventus_FC_Logo_2017.svg",
      description: "Juventus Football Club is a professional football club based in Turin, Italy. The club is one of the most successful in Italy and has a strong history of both domestic and international achievements."
    }
  ];

  return (
    <div className="teams">
      {teams.map((team, index) => (
        <div key={index} className="team-item">
          <img src={team.image} alt={team.name} className="team-image" />
          <h2>{team.name}</h2>
          <p>{team.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Teams;
