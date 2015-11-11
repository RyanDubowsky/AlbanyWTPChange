var curDB;
var curTable;
var curAttr = [];

//Creates buttons for every DB
Object.keys(dbs).forEach(function(db){

	var curId = db;
	console.log(dbs[db]);

	//Each DB button has an on-click function, and it passes its own ID to it.
	var radioBtn = $('<button onClick="db_function(this.id)" class = "btn btn-primary:active" name="db" id='+curId+' value='+db+' ><b>'+dbs[db].name+"</b><br>"+db+'</button>');
	    radioBtn.appendTo('#db_list');


})

//Function responsible for what happens when a DB button is clicked
function db_function(db){
	curDB = db;
	console.log(curDB);


	var dbButtons = $("#db_list :button");

	//Only 1 db  button can be active at a time
	//de-select every db button
	Object.keys(dbButtons).forEach(function(button){
		//dbButtons[button].removeClass('btn-primary:active').addClass('btn-primary');
		$("#"+dbButtons[button].id).removeClass('btn-primary').addClass('btn-primary:active');
	})	

	//Then, selecct the current DB
	$("#"+curDB).removeClass('btn-primary:active').addClass('btn-primary');

	//Empty the tables and attribute sections, since they are DB specific
	$("#table_list").empty();
	$("#attribute_list").empty();

	//Create the list of table buttons for this DB
	Object.keys(dbs[curDB].tables).forEach(function(table){
		var radioBtn = $('<button  class = "btn btn-primary:active" onClick="table_function(this.id)" name="table" id='+table+' value='+table+' ><b>'+dbs[curDB].tables[table].name+"</b><br>"+table+'</button>');
		    radioBtn.appendTo('#table_list');
	})
}

//Function responsible for what happens when a table button is clicked
function table_function(table){
 	curTable = table;
	console.log(curTable);
	$("#attribute_list").empty();
	curAttr = [];

	var tableButtons = $("#table_list :button");


	//Only 1 table  button can be active at a time
	//de-select every table button
	Object.keys(tableButtons).forEach(function(button){
		//dbButtons[button].removeClass('btn-primary:active').addClass('btn-primary');
		$("#"+tableButtons[button].id).removeClass('btn-primary').addClass('btn-primary:active');
	})	

	$("#"+curTable).removeClass('btn-primary:active').addClass('btn-primary');



	Object.keys(dbs[curDB]['tables'][curTable]['fields']).forEach(function(attribute){

		var attrDiv = $('<div style="display:inline-block;vertical-align:text-top;" id='+attribute+'_div></div>');

		attrDiv.appendTo('#attribute_list');

		var checkboxBtn = $('<button style="margin-bottom:5px;" class = "btn btn-primary:active" onClick="attr_function(this.id)" name="attribute" id='+attribute+' value='+attribute+' >'+attribute+'</button>');
		    checkboxBtn.appendTo('#'+attribute+'_div');
 
	})
}

//Function responsible ffor what happens when a attribute button is clicked
function attr_function(attr){

	var attrIndex = curAttr.indexOf(attr);

	//If the attribute was not already selected
	//Add it to the curAttr array (for querying)
	//Call function to generate where_clause input field
	if(attrIndex == -1){
		curAttr.push(attr);	
		where_attr(attr);
	}
	else{
		//If it was already selected, remove it from the array and remove the input field
		curAttr.splice(attrIndex,1);
		$('#'+attr+'_where').remove();
	}

	//Toggles the color of the button
	if($("#"+attr).hasClass('btn-primary:active')){
		$("#"+attr).removeClass('btn-primary:active').addClass('btn-primary');
	}
	else{
		$("#"+attr).removeClass('btn-primary').addClass('btn-primary:active');
	}

	console.log(curAttr);
}

//Creates the appropriate where_clause input box for the given (selected) attribute
function where_attr(attr){
		if(dbs[curDB]['tables'][curTable]['fields'][attr].type == "key"){
			var keyBox = $('<input style="margin:0 auto;display:block;border:2px solid black;"type=text class="input" id='+attr+'_where placeholder="  One (or more) id numbers"> </input>');
			keyBox.appendTo('#'+attr+'_div');
		}
		if(dbs[curDB]['tables'][curTable]['fields'][attr].type == "value"){
			var keyBox = $('<input size=8 style="margin:0 auto; display:block;border:2px solid black;"type=text class="input" id='+attr+'_where placeholder="Number"> </input>');
			keyBox.appendTo('#'+attr+'_div');
		}
}



//Jquery to execute query. Gets all selected attributes
$("#csv").on('click', function(){

	console.log("in CSV button",curAttr);

	var params = {db:curDB,table:curTable,attr:curAttr};


	if(params.attr == null){
		params.attr = "all";
	}

	//Run function to error-check parameters based on the DB and Table
	if(checkParams(params)){
		dbQuery(params,"csv",processData);		
	}
})

//Jquery to execute query. Gets all selected attributes
$("#tsv").on('click', function(){
	console.log("In TSV button",curAttr);

	var params = {db:curDB,table:curTable,attr:curAttr};

	if(params.attr == null){
		params.attr = "all";
	}

	//Run function to error-check parameters based on the DB and Table
	if(checkParams(params)){
		dbQuery(params,"tsv",processData);		
	}
})