const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };


  const fullUser = {
      ...user,
      ...jobInfos,
  }

  console.log(`Hi,my name is ${user.name}, I'm ${user.age} years old and I'm ${user.nationality}. I work as a ${jobInfos.profession} and my squad is ${jobInfos.squadInitials}-${jobInfos.squad}`);