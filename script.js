// JavaScript Document

// topに戻るボタン //
$(function(){
  $('h1, footer img').click(function(){
      $('html, body').animate({ 
        'scrollTop': 0 
      }, 1000);
    });
// topに戻るボタン //

// 特定の場所にゆっくり移動 //
$("nav a").click(function() {
  var id = $(this).attr("href");
  var position = $(id).offset().top;
  $('html, body').animate({ 
    'scrollTop': position 
  }, 500);
});
// 特定の場所にゆっくり移動 //
}
)
