(function (window, undefined) {
  window.Asc.plugin.init = function () {
    this.callCommand(function () {
      var oDocument = Api.GetDocument();
      var oParagraph = Api.CreateParagraph();
      oParagraph.AddText("Hello world!");
      oDocument.InsertContent([oParagraph]);
    }, true);
  };
  window.Asc.plugin.button = function (id) {};
})(window, undefined);

// try and see if you can detect fullscreen mode and not do idle timeouts
// see if user events are being captured in presentation mode

// trying to get two interns
// one starting in may-june
