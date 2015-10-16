'use strict';

$(function() {

  $("button").click(function() { //note these events do not happen in any particular order it is asyncronus
    $.get('adjective', function(response) { //hits the adjective endpoint (/adjective) in our server
      var adjective = response.word;
      $("#adjective").text(adjective);
    });

    $.get('verb', function(response) {
      var verb = response.word;
      $("#verb").text(verb);
    });

    $.get('noun', function(response) {
      var noun = response.word;
      $("#noun").text(noun);
    });

$.get('year', function(response) {
      var myyear = response.year;
      $("#year").text('born in ' + myyear + ' CE.');
    });


  });

  $("#submitWords").on("submit", function(e) {
    e.preventDefault(); //prevents a page reload, we dont want that.

    //Adjective Submit Event
    var adjective = $("input[name=adjective]").val(); //grab the value of the field
    var adjPost;

    if (adjective) {
      adjPost = {word: adjective};
      $.post("adjective", adjPost, function(response) { //hits the adjective endpoint
        var adjectiveRes = response.msg;
        $("#adjectiveRes").text(adjectiveRes);
      });
    }

    //Verb Submit Event
    var verb = $("input[name=verb]").val(); //grab the value of the field
    var verbPost;

    if (verb) {
      verbPost = {word: verb};
      $.post("verb", verbPost, function(response) { //hits the verb endpoint
        var verbRes = response.msg;
        $("#verbRes").text(verbRes);
      });
    }

    //Noun Submit Event
    var noun = $("input[name=noun]").val(); //grab the value of the field
    var nounPost;

    if (noun) {
      nounPost = {word: noun};
      $.post("noun", nounPost, function(response) { //hits the verb endpoint
        var nounRes = response.msg;
        $("#nounRes").text(nounRes);
      });
    }


  });

});
