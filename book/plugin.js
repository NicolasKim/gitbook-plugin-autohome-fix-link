require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
      var links = document.querySelectorAll(".page-inner a");
      for(var i = 0; i < links.length; i++){
        var path = links[i].href;
        if(path.startsWith(gitbook.state.config.pluginsConfig["link-fixer"].link)){
          links[i].href = path;
        }
      }
    });
});
