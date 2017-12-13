$(document).ready(function(){
    if(window.location.pathname == '/dashboard.html'){
      demo.initChartist();

      $.notify({
          icon: 'pe-7s-gift',
          message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."

        },{
            type: 'info',
            timer: 4000
      });
    }

});
