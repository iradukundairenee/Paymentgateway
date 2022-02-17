import namor from "namor"

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()
  return {
    service: namor.generate({ words: 1, numbers: 0 }),
    amount: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 10),
    progress: Math.floor(Math.random() * 10),
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33
        ? "complicated"
        : "single"
  }
}

export function makeData(len = 100) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    }
  })
}

export const nestedData = [
  {
    service: "Mockus",
    amount: 2600
  },
  {
    service: "Mockus",
    amount: 2600
  },
  {
    service: "Mockus",
    amount: 2600
  }, {
    service: "Mockus",
    amount: 2600
  }, {
    service: "Mockus",
    amount: 2600
  }, {
    service: "Mockus",
    amount: 2600
  }, {
    service: "Mockus",
    amount: 2600
  }, {
    service: "Mockus",
    amount: 2600
  }, {
    service: "Mockus",
    amount: 2600
  }, {
    service: "Mockus",
    amount: 2600
  }, {
    service: "Mockus",
    amount: 2600
  }, {
    service: "Mockus",
    amount: 2600
  },
   {
    service: "Mockus",
    amount: 2600
  },
  {
    service: "Mockus",
    amount: 2600
  },
  {
    service: "Mockus",
    amount: 2600
  },
  {
    service: "Mockus",
    amount: 2600
  },
  {
    service: "Mockus",
    amount: 2600
  }, {
    service: "Mockus",
    amount: 2600
  }, {
    service: "Mockus",
    amount: 2600
  }, {
    service: "Mockus",
    amount: 2600
  },
  {
    first_name: "Fidelia",
    last_name: "Dampier",
    company_name: "Signs Now",
    address: "947 W Harrison St #640",
    state: "NSW",
    post: 2083,
    city: "Dangar Island",
    phone1: "02-8035-9997",
    phone2: "0478-179-538",
    email: "fidelia_dampier@gmail.com",
    web: "http://www.signsnow.com.au"
  },
  {
    first_name: "Oren",
    last_name: "Lobosco",
    company_name: "Vei Inc",
    address: "1585 Salem Church Rd #59",
    state: "NSW",
    post: 2083,
    city: "Dangar Island",
    phone1: "02-5046-1307",
    phone2: "0495-838-492",
    email: "olobosco@hotmail.com",
    web: "http://www.veiinc.com.au"
  },
  {
    first_name: "Lou",
    last_name: "Kriner",
    company_name: "Joondeph, Jerome J Esq",
    address: "39 Broad St",
    state: "NSW",
    post: 2092,
    city: "Seaforth",
    phone1: "02-7328-3350",
    phone2: "0496-387-592",
    email: "lou.kriner@hotmail.com",
    web: "http://www.joondephjeromejesq.com.au"
  },
  {
    first_name: "Lachelle",
    last_name: "Andrzejewski",
    company_name: "Lucas Cntrl Systems Prod Deeco",
    address: "262 Montauk Blvd",
    state: "NSW",
    post: 2126,
    city: "Cherrybrook",
    phone1: "02-3416-9617",
    phone2: "0453-493-910",
    email: "lachelle.andrzejewski@andrzejewski.com.au",
    web: "http://www.lucascntrlsystemsproddeeco.com.au"
  },
  {
    first_name: "Tommy",
    last_name: "Gennusa",
    company_name: "Cooper And Raley",
    address: "2 New Brooklyn Rd",
    state: "NSW",
    post: 2138,
    city: "Concord West",
    phone1: "02-5444-1961",
    phone2: "0498-290-826",
    email: "tommy@hotmail.com",
    web: "http://www.cooperandraley.com.au"
  },
  {
    first_name: "Aide",
    last_name: "Ghera",
    company_name: "Nathaniel Electronics",
    address: "22 Livingston Ave",
    state: "NSW",
    post: 2138,
    city: "Rhodes",
    phone1: "02-3738-7508",
    phone2: "0443-448-467",
    email: "aide.ghera@ghera.com.au",
    web: "http://www.nathanielelectronics.com.au"
  },
  {
    first_name: "Novella",
    last_name: "Fritch",
    company_name: "Voils, Otis V",
    address: "5 Ellestad Dr",
    state: "NSW",
    post: 2145,
    city: "Girraween",
    phone1: "02-2612-1455",
    phone2: "0458-731-791",
    email: "nfritch@fritch.com.au",
    web: "http://www.voilsotisv.com.au"
  },
  {
    first_name: "Sherman",
    last_name: "Mahmud",
    company_name: "Gencheff, Nelson E Do",
    address: "9 Memorial Pky Nw",
    state: "NSW",
    post: 2150,
    city: "Harris Park",
    phone1: "02-2621-3361",
    phone2: "0468-488-918",
    email: "sherman@mahmud.com.au",
    web: "http://www.gencheffnelsonedo.com.au"
  },
  {
    first_name: "Madelyn",
    last_name: "Maestri",
    company_name: "Mervis Steel Co",
    address: "60 S 4th St",
    state: "NSW",
    post: 2155,
    city: "Rouse Hill",
    phone1: "02-2129-8131",
    phone2: "0413-115-438",
    email: "madelyn.maestri@yahoo.com",
    web: "http://www.mervissteelco.com.au"
  },
  {
    first_name: "Ben",
    last_name: "Kellman",
    company_name: "Anderson, Julie A Esq",
    address: "30024 Whipple Ave Nw",
    state: "NSW",
    post: 2159,
    city: "Berrilee",
    phone1: "02-7968-9243",
    phone2: "0441-733-809",
    email: "ben_kellman@kellman.net.au",
    web: "http://www.andersonjulieaesq.com.au"
  },
  {
    first_name: "Sharita",
    last_name: "Kruk",
    company_name: "Long, Robert B Jr",
    address: "8808 Northern Blvd",
    state: "NSW",
    post: 2160,
    city: "Merrylands",
    phone1: "02-7386-4544",
    phone2: "0442-976-132",
    email: "sharita_kruk@gmail.com",
    web: "http://www.longrobertbjr.com.au"
  },
  {
    first_name: "Maryrose",
    last_name: "Cove",
    company_name: "Brown Bear Bait Company",
    address: "1 Vogel Rd",
    state: "NSW",
    post: 2166,
    city: "Cabramatta",
    phone1: "02-8010-8344",
    phone2: "0440-811-454",
    email: "mcove@hotmail.com",
    web: "http://www.brownbearbaitcompany.com.au"
  },
  {
    first_name: "Johanna",
    last_name: "Saffer",
    company_name: "Springer Industrial Equip Inc",
    address: "750 Lancaster Ave",
    state: "NSW",
    post: 2194,
    city: "Campsie",
    phone1: "02-5970-1748",
    phone2: "0477-424-229",
    email: "johanna@yahoo.com",
    web: "http://www.springerindustrialequipinc.com.au"
  },
  {
    first_name: "Kimberely",
    last_name: "Weyman",
    company_name: "Scientific Agrcltl Svc Inc",
    address: "7721 Harrison St",
    state: "NSW",
    post: 2208,
    city: "Kingsway West",
    phone1: "02-7091-8948",
    phone2: "0441-151-810",
    email: "kweyman@weyman.com.au",
    web: "http://www.scientificagrcltlsvcinc.com.au"
  }
]
