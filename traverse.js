$(function(){
  $(document).ready(function() {
    $("#radio1").click(function(event) {
      loadJson("day", 1, 2);
      initPagenation();
    });
    $("#radio2").click(function(event) {
      loadJson("week", 1, 2);
      initPagenation();
    });

    loadJson("day", 1, 2);
    initPagenation();
  });

  function loadJson(mode, page, numberOfItems) {
    $.ajax({
      url: './api.php',
      data: {m: mode, p: page, i: numberOfItems}
    })
    .done(function(res) {
      res = $.parseJSON(res);
      console.log(res);
      var html = "";
      $("#table tr").remove();

      // Render the table
      $.each(res.data, function(i, r) {
        html += "<tr><td>" + r.name + "</td><td>" + r.col1 + "</td><td>" + r.col2 + "</td></tr>";
      });
      $("#table").append(html);

      // TODO: Render the pagination
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  };

  function initPagenation() {
    $("#prev").addClass('disabled');
    $("#next").removeClass('disabled');
    $(".pagination li").removeClass('active');
    $(".pagination li:eq(1)").addClass('active');
  };
}());
