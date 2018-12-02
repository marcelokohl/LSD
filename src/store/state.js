export default {
  logged: false,
  countries: [],
  total_levels: 12,
  // current_game: "labrinth",

  rankings: {
    labrinth: [],
    sia: [],
    diplo: [],
  },

  user: {
    // name: "Kohl",
    // email: "marcelokohl@gmail.com",
    // provider: "email",
    // token: "LfFWBmAdaNqVD5sWY9RPmyUG3SbYYIYKcsHk7jT2",
    // image: null,
    // country: {
    //     id: 1,
    //     code: "BR",
    //     name: "Brazil"
    // },
    // game: {
    //   campaign: {
    //     process: 5
    //   }
    // },
    // arcade: {
    //   sia: 1001,
    //   labrinth: 0,
    //   diplo: 0
    // },
  },

  user_old: {
    lang: "en",
    nickname: "Marcelo Kohl",
    country: "Brazil",
    email: "marcelokohl@gmail.com",
    games: {
      open_arcade_mode: false,
      campaing: {
        level: 1,
        labrinth: {
          progress: 100
        },
        sia: {
          progress: 33
        },
        diplo: {
          progress: -1
        }
      },
      arcade: {
        labrinth: {
          rank: 432,
          score: 35781
        },
        sia: {
          rank: 432,
          score: 35781
        },
        diplo: {
          rank: 432,
          score: 35781
        }
      }
    }
  },
    
    // lang: "en",
    // nickname: "Marcelo Kohl",
    // country: "Brazil",
    // email: "marcelokohl@gmail.com",
    // games: {
    //   open_arcade_mode: false,
    //   campaing: {
    //     level: 1,
    //     labrinth: {
    //       progress: 100
    //     },
    //     sia: {
    //       progress: 33
    //     },
    //     diplo: {
    //       progress: -1
    //     }
    //   },
    //   arcade: {
    //     labrinth: {
    //       rank: 432,
    //       score: 35781
    //     },
    //     sia: {
    //       rank: 432,
    //       score: 35781
    //     },
    //     diplo: {
    //       rank: 432,
    //       score: 35781
    //     }
    //   }
    // }
  ranking: {
    sia: [
      {
        pos: 1,
        name: "Sawyer T. Kent",
        score: 1000
      },
      {
        pos: 2,
        name: "Audrey Macdonald",
        score: 999
      },
      {
        pos: 3,
        user: true,
        name: "Hayfa Meyers",
        score: 998
      },
      {
        pos: 4,
        name: "Tarik Hawkins",
        score: 997
      },
      {
        pos: 5,
        name: "Ralph C. Horn",
        score: 1000
      },
    ],
    labrinth: [
      {
        pos: 1,
        user: true,
        name: "Ralph C. Horn",
        score: 1000
      },
      {
        pos: 2,
        name: "Erica C. Head",
        score: 999
      },
      {
        pos: 3,
        name: "Channing Mcleod",
        score: 998
      },
      {
        pos: 4,
        name: "Jeremy W. Warren",
        score: 997
      },
      {
        pos: 5,
        name: "Ralph C. Horn",
        score: 1000
      },
    ],
    diplo: []
  }
};
