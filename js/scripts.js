$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#dog").prepend("<li>Woof</li>");
    $("ul#cat").prepend("<li>Meowza</li>");
  });

  $("button#goodbye").click(function() {
    $("ul#dog").prepend("<li>Hisss!</li>");
    $("ul#cat").prepend("<li>Arf Arf!</li>");
  });

  $("button#stop").click(function() {
    $("ul#dog").prepend("<li>Puking hairball sound</li>");
    $("ul#cat").prepend("<li>howls at the moon</li>");
  });

  $(".peekaboo").click(function() {
    $(".peekaboo").toggle();
  });

});
