// After loading the DOM, execute the processing in function().
$ (document).ready( function (){
   // Logic to get the input value of [National language score, English score, Mathematics score, Science score, Social score] and calculate total score and average score Create
  function  score_indicate (){
     //
    Substitute the array of [national score, English score, math score, science score, social score] into the variable "subject_points"
    let subject_points = [Number ( $ ( ' #national_language ' ).val()),
                          Number( $ ( ' #english ' ).val()),
                          Number( $ ( ' #mathematics ' ).val()),
                          Number( $ ( ' #science ' ).val()),
                          Number( $ ( ' #society ' ).val())
                          ]; // in the variable "sum" // [National score, English score, math [Score, Science score, Social score] respectively. // Hint! Take out the arrays one by one and add them.
    let sum = subject_points[ 0 ];
    sum = sum + subject_points[ 1 ];
    sum = sum + subject_points[ 2 ];
    sum = sum + subject_points[ 3 ];
    sum = sum + subject_points[ 4 ];



    // Output the variable "sum" (total points) to "Total points:" (class="sum_indicate").
    $ ( " #sum_indicate " ).text(sum);
    let average = sum / subject_points.length;
    $ ("#average_indicate").text(average);
     //
    Assign the average value to the
    variable "average" . (Total number of points you want to average (sum) / total number) // Hint! Use the length method to find the total number. (length method: a method to get the length of the string and the number of elements in the array)
  }; // Get the average score and rank from the obtained average scores ("A", "B", "C", " Create the logic to do D"). function get_achievement (){
     //Get the average score from the class="average_indicate" on HTML and assign it to the variable "averageIndicate" .
    let averageIndicate = $ ( " #average_indicate " ).text();
    console.


    if (averageIndicate >= 80 ){
       return  " A " ;
       // If "averageIndicate" is 60 or more, return "B".
    } else  if (averageIndicate >= 60 ) {
       return  " B " ;
       // If "averageIndicate" is 40 or more, return "C".
    } else if (averageIndicate >= 40) {
        return "C" ;
    }
      // Returns "D" if "averageIndicate" is any other score.
    } else {
       return  " D " ;
    }
  }; // Get the average value and rank it from the acquired average points ("A", "B", "C", "D" ) Create the logic to do. function get_pass_or_failure (){


    let subject_points = [Number( $ ( ' #national_language ' ).val()),
                          Number( $ ( ' #english ' ).val()),
                          Number( $ ( ' #mathematics ' ).val()),
                          Number ( $ ( ' #science ' ).val()),
                          Number( $ ( ' #society ' ).val())
                          ]; // Substitute the number of subjects you have entered in the variable "number".

    let number = subject_points.length; // Assign "pass" to the variable "judge".
    let judge = " pass " ;
    for (var i = 0; i < number; i++) {
      if (subject_points [i] < 60) {
        judge = "fail" ;
        break;
      }
  };
  return judge
      }
     // If the score of each entered subject is lower than 60 points, "fail" is reassigned to the variable "judge" and "judge" is returned. // Hint! Try searching with "javascript score pass fail logic". return pass_or_failure;
  }; // Create the final judge logic. function judgment (){
     //Assign the "return value of get_achievement()" to the variable "achievement".
    let achievement = get_achievement(); // Substitute the return value of get_pass_or_failure() into the variable "pass_or_failure".
    let pass_or_failure = get_pass_or_failure(); // When the "final judge" (id="alert-indicate) button is pressed, "Your grade is ${achievement} is ${pass_or_failure}" is output. $


  $('#declaration').append(`<label id="alert-indicate" class="alert alert-info"> Your grade is ${achievement} and ${pass_or_failure}</label>`);
  } ;
  $('#national_language, #english, #mathematics, #science, #society').change(function()
  {
    score_indicate();
  }); // "rank" (class="evaluation"


  $ ( ' #btn-evaluation ' ).click( function () {
     $ ( " #evaluation " ).text(get_achievement());
  }); // "Judge" (class="btn-judge") button It is a process that outputs "function et_pass_or_failure()" when pressed. $ ( ' #btn-judge ' ).click( function () {
     $ ( " #judge " ).text(get_pass_or_failure());
  }); // "final judge" (class="btn-declaration") button It is the process that "function judgment()" is output when is pressed. $ ( ' #btn-declaration ' ).
  $('#btn-declaration').click(function() {
      $("#declaration").text(judgement());
    };

}); 

// The description of js written here is a template provided only as a hint, so if you want to implement it without following the written description, please do it yourself. You can implement it. Any implementation will pass if it is determined that the task requirements are satisfied and the code quality is at a certain level. // In the example, both JavaScript and jQuery are used, but you may unify them.
