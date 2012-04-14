var paper = Raphael("svg_present", 800, 300);

var paper_top_border = paper.path("M0 0L800 0");
var paper_right_border = paper.path("M800 0L800 300");
var paper_bottom_border = paper.path("M0 300L800 300");
var paper_left_border = paper.path("M0 0L0 300");

paper.image("public/img/car.jpg", 1, 1, 300, 263);

var text = paper.text(500, 50, "Dynamicznie generowane suwaki");
text.attr('font', '20px Myriad Pro');

var MAX_WIDTH_OF_HORIZONAL_BAR = 350;

var horizontal_first_bar = paper.rect(MAX_WIDTH_OF_HORIZONAL_BAR, 150, 400, 20, 5);
var horizontal_second_bar = paper.rect(MAX_WIDTH_OF_HORIZONAL_BAR, 200, 400, 20, 5);

for (var i = 50; i < 420; i = i + 20) {
    paper.path("M" + (320 + i) + " 150L" + (i + 320) + " 170");
}

for (var i = 50; i < 420; i = i + 20) {
    paper.path("M" + (320 + i) + " 200L" + (i + 320) + " 220");
}


// ----- FIRST BAR ------
var DEFAULT_LEFT_POSITION_FIRST = 360;
var DEFAULT_TOP_POSITION_FIRST = 140;
var vertical_first_bar = paper.rect(DEFAULT_LEFT_POSITION_FIRST, DEFAULT_TOP_POSITION_FIRST, 20, 40, 5);
vertical_first_bar.attr({
    fill: "#fc9c1f",
    cursor: "pointer",
    title: "Pierwszy suwak"
});

vertical_first_bar.node.onclick = function(){
    var field_1 = document.getElementById('field_1');
    var parseValue = parseInt(field_1.value, 10);
    var realValue = isNaN(parseValue) ? 0 : parseValue;
    field_1.value = realValue + 1;
}

var start_vertical_first_bar = function(){
    //log('--- start: start_vertical_first_bar ---');
    this.ox = this.attr("x");
}, move_vertical_first_bar = function(dx, dy){
    if (this.ox + dx > DEFAULT_LEFT_POSITION_FIRST && this.ox + dx <= MAX_WIDTH_OF_HORIZONAL_BAR + DEFAULT_LEFT_POSITION_FIRST) {
        this.attr({
            x: this.ox + dx
        });
    }
    
    var field_1 = document.getElementById('field_1');
    field_1.value = this.attr("x");
}, up_vertical_first_bar = function(){
    //when up
};
vertical_first_bar.drag(move_vertical_first_bar, start_vertical_first_bar, up_vertical_first_bar);




// ---- SECOND BAR -----
var DEFAULT_LEFT_POSITION_SECOND = 360;
var DEFAULT_TOP_POSITION_SECOND = 190;
var vertical_second_bar = paper.rect(DEFAULT_LEFT_POSITION_SECOND, DEFAULT_TOP_POSITION_SECOND, 20, 40, 5);
vertical_second_bar.attr({
    fill: "#fc9c1f",
    cursor: "pointer",
    title: "Pierwszy suwak"
});

vertical_second_bar.node.onclick = function(){
    var field_2 = document.getElementById('field_2');
    var parseValue = parseInt(field_2.value, 10);
    var realValue = isNaN(parseValue) ? 0 : parseValue;
    field_2.value = realValue + 1;
}

var start_vertical_second_bar = function(){
    //log('--- start: start_vertical_second_bar ---');
    this.ox = this.attr("x");
}, move_vertical_second_bar = function(dx, dy){
    if (this.ox + dx > DEFAULT_LEFT_POSITION_FIRST && this.ox + dx <= MAX_WIDTH_OF_HORIZONAL_BAR + DEFAULT_LEFT_POSITION_FIRST) {
        this.attr({
            x: this.ox + dx
        });
    }
    
    var field_2 = document.getElementById('field_2');
    field_2.value = this.attr("x");
}, up_vertical_second_bar = function(){
    //when up
};
vertical_second_bar.drag(move_vertical_second_bar, start_vertical_second_bar, up_vertical_second_bar);
