String.prototype.escape = function() {
    var tagsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;'
    };
    return this.replace(/[&<>]/g, function(tag) {
        return tagsToReplace[tag] || tag;
    });
};

(function(){
  var $spans = $(".block").find("span");

  $.each($spans, function()
  {
    var $this       = $(this),
        $spanParent = $this.closest(".col"),
        className   = $spanParent.attr("class");

    $(this).text(className);
  });

}());

(function(){

  $("pre code").not(".lang-css").each(function()
  {
    var $pre = $(this),
        $text = $pre.html();

    $pre.html($text.escape());
  })

}());