(function(){

  angular.module("starter")

  .factory("services",function(){
    var obj = {
      quizActive: false,
      changeState: changeState
    };
    return obj;

    function changeState(state){
      obj.quizActive = state;
    }
  })

  .factory("DataStuff",function(){
      var dataObj = {
        quizQuestions: quizQuestions
      };

      return dataObj;
    })

  var quizQuestions = [
    {
      questionLogo: "img/arsenal.png",
      choices: [
        {
          answer:"Arsenal"
        },
        {
          answer: "Liverpool"
        },
        {
          answer: "Stoke City"
        },
        {
          answer: "Norwich City"
        }
      ],
      selected: null,
      correctAnswer : 0
    },
    {
      questionLogo: "img/chelsea.png",
      choices: [
        {
          answer:"Sunderland"
        },
        {
          answer: "Chelsea"
        },
        {
          answer: "Stoke City"
        },
        {
          answer: "Norwich City"
        }
      ],
      selected: null,
      correctAnswer : 1
    },
    {
      questionLogo: "img/norwich-city.png",
      choices: [
        {
          answer:"Sunderland"
        },
        {
          answer: "Aston Villa"
        },
        {
          answer: "Stoke City"
        },
        {
          answer: "Norwich City"
        }
      ],
      selected: null,
      correctAnswer : 3
    },
    {
      questionLogo: "img/everton-fc.png",
      choices: [
        {
          answer:"Sunderland"
        },
        {
          answer: "Newcastle United"
        },
        {
          answer: "Stoke City"
        },
        {
          answer: "Everton FC"
        }
      ],
      selected: null,
      correctAnswer : 3
    },
    {
      questionLogo: "img/crystal-palace-fc.png",
      choices: [
        {
          answer:"Sunderland"
        },
        {
          answer: "Newcastle United"
        },
        {
          answer: "Stoke City"
        },
        {
          answer: "Crystal Palace FC"
        }
      ],
      selected: null,
      correctAnswer : 3
    }
  ];


})();
