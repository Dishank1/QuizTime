(function(){

  angular.module("starter")




  .controller("listCtrl",['services', 'DataStuff',function(services,DataStuff){
    this.services = services;
    this.startQuiz = startQuiz;

    function startQuiz(){
      services.changeState(true);
    };
  }])

//   .controller('popCtrl', function($scope, $ionicPopup) {
//
//    $scope.showAlert = function() {
//
//       var alertPopup = $ionicPopup.alert({
//          title: 'Title',
//          template: 'Alert message'
//       });
//
//       alertPopup.then(function(res) {
//          // Custom functionality....
//       });
//    };
//
// })


  .controller("quizCtrl",['services','DataStuff',function(services,DataStuff){
    this.services = services;
    this.DataStuff = DataStuff;
    this.currQuestion = 0;
    this.points = 0;
    this.questionAnswered = questionAnswered;
    // this.buttonStyle="";
    this.tryAgain = tryAgain;

    //  this.quizOver = false;
    // this.popCtrl = popCtrl;

    function tryAgain(){
      console.log("HEEReeee");
      this.quizOver = false;
      services.changeState(true);
      this.currQuestion = 0;
      this.points = 0;
    }

    function questionAnswered(answer){
      this.answer = answer;
      // console.log(this.currQuestion <= this.DataStuff.quizQuestions.length);
      // console.log(this.currQuestion);
      // console.log(this.DataStuff.quizQuestions.length);
      if(this.currQuestion != this.DataStuff.quizQuestions.length-1)
      {
        var correctIndex = this.DataStuff.quizQuestions[this.currQuestion].correctAnswer;
        if(this.answer == this.DataStuff.quizQuestions[this.currQuestion].choices[correctIndex].answer)
        {
          // popCtrl.showAlert.alertPopup;
          alert("Correct Answer");
          // this.buttonStyle="";
          this.points += 10;
          this.currQuestion++;
        }
        else{
          alert("Incorrect Answer");
          this.currQuestion++;
        }
      }
      else{
        this.quizOver = true;
        // console.log("HEER");
        // services.changeState(false);
      }
    };



  }]);



})();
