{"filter":false,"title":"script.js","tooltip":"/assets/js/script.js","undoManager":{"mark":9,"position":9,"stack":[[{"start":{"row":64,"column":2},"end":{"row":65,"column":0},"action":"insert","lines":["",""],"id":930}],[{"start":{"row":65,"column":0},"end":{"row":66,"column":0},"action":"insert","lines":["",""],"id":931}],[{"start":{"row":66,"column":0},"end":{"row":76,"column":3},"action":"insert","lines":["$('.count').each(function () {","    $(this).prop('Counter',0).animate({","        Counter: $(this).text()","    }, {","        duration: 4000,","        easing: 'swing',","        step: function (now) {","            $(this).text(Math.ceil(now));","        }","    });","});"],"id":932}],[{"start":{"row":66,"column":4},"end":{"row":66,"column":9},"action":"remove","lines":["count"],"id":933}],[{"start":{"row":66,"column":4},"end":{"row":66,"column":15},"action":"insert","lines":["navbarTotal"],"id":934}],[{"start":{"row":66,"column":3},"end":{"row":66,"column":4},"action":"remove","lines":["."],"id":935}],[{"start":{"row":66,"column":3},"end":{"row":66,"column":4},"action":"insert","lines":["#"],"id":936}],[{"start":{"row":66,"column":0},"end":{"row":76,"column":3},"action":"remove","lines":["$('#navbarTotal').each(function () {","    $(this).prop('Counter',0).animate({","        Counter: $(this).text()","    }, {","        duration: 4000,","        easing: 'swing',","        step: function (now) {","            $(this).text(Math.ceil(now));","        }","    });","});"],"id":937}],[{"start":{"row":65,"column":0},"end":{"row":66,"column":0},"action":"remove","lines":["",""],"id":938}],[{"start":{"row":64,"column":2},"end":{"row":65,"column":0},"action":"remove","lines":["",""],"id":939}]]},"ace":{"folds":[],"scrolltop":775,"scrollleft":0,"selection":{"start":{"row":64,"column":2},"end":{"row":64,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":47,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1474200465117,"hash":"1dae2fe429894b0f2cc79502340d7bdbd9b0610d"}