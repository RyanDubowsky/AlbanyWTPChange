module.exports = {

	'Wtp_data_issues': function(req,res){


		var params = req.param('params');
		console.log("params: ",params);
		var queryAttr = "";
		//console.log(params.attr);


		if(params.attr.length == 0){
			queryAttr += "*";
		}
		else{
			params.attr.forEach(function(attr){
				queryAttr += attr + ",";
			})
			//Remove last , since it is unnecessary
			queryAttr = queryAttr.substring(0, queryAttr.length - 1);
		}

		console.log("Query Params",queryAttr);

		var newQuery = "Select " + queryAttr + " from wtp_data_issues LIMIT 100";





		console.log("In the controller local_wtp_data_issues");

		//finalQuery = "Select * from wtp_data_issues LIMIT 100";

		//res.json({data:"NOTHING"});
		//console.log(finalQuery);
		//console.log(newQuery);
		Local_wtp.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},

	'Wtp_data_petition_issues': function(req,res){
		console.log(req.param('params'));

		var params = req.param('params');
		console.log("params: ",params);
		var queryAttr = "";
		//console.log(params.attr);


		if(params.attr.length == 0){
			queryAttr += "*";
		}
		else{
			params.attr.forEach(function(attr){
				queryAttr += attr + ",";
			})
			queryAttr = queryAttr.substring(0, queryAttr.length - 1);
		}

		console.log("Query Params",queryAttr);


		var newQuery = "Select " + queryAttr + " from wtp_data_petition_issues LIMIT 100";

		//var finalQuery = 'Select * from wtp_data_petition_issues LIMIT 100';

		console.log("In the controller local_data_petition_issues");


		//res.json({data:"NOTHING"});

		Local_wtp.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},

	'Wtp_data_petition_responses': function(req,res){
		console.log(req.param('params'));

		var params = req.param('params');
		console.log("params: ",params);
		var queryAttr = "";
		//console.log(params.attr);


		if(params.attr.length == 0){
			queryAttr += "*";
		}
		else{
			params.attr.forEach(function(attr){
				queryAttr += attr + ",";
			})
			queryAttr = queryAttr.substring(0, queryAttr.length - 1);
		}

		console.log("Query Params",queryAttr);


		var newQuery = "Select " + queryAttr + " from wtp_data_petition_responses LIMIT 100";

		//var finalQuery = 'Select * from wtp_data_petition_responses LIMIT 100';

		console.log("In the controller local_wtp_data_petition_responses");


		//res.json({data:"NOTHING"});

		Local_wtp.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},

	'Wtp_data_petitions': function(req,res){
		console.log(req.param('params'));

		var params = req.param('params');
		console.log("params: ",params);
		var queryAttr = "";
		//console.log(params.attr);


		if(params.attr.length == 0){
			queryAttr += "*";
		}
		else{
			params.attr.forEach(function(attr){
				queryAttr += attr + ",";
			})
			queryAttr = queryAttr.substring(0, queryAttr.length - 1);
		}

		console.log("Query Params",queryAttr);


		var newQuery = "Select " + queryAttr + " from wtp_data_petitions LIMIT 100";

		//var finalQuery = 'Select * from wtp_data_petitions LIMIT 100';

		console.log("In the controller local_ Wtp_data_petitions");
		console.log(newQuery);

		//res.json({data:"NOTHING"});

		Local_wtp.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})
	},

	'Wtp_data_responses': function(req,res){
		console.log(req.param('params'));

		var params = req.param('params');
		console.log("params: ",params);
		var queryAttr = "";
		//console.log(params.attr);


		if(params.attr.length == 0){
			queryAttr += "*";
		}
		else{
			params.attr.forEach(function(attr){
				queryAttr += attr + ",";
			})
			queryAttr = queryAttr.substring(0, queryAttr.length - 1);
		}

		console.log("Query Params",queryAttr);


		var newQuery = "Select " + queryAttr + " from wtp_data_responses LIMIT 100";

		//var finalQuery = 'Select * from wtp_data_responses LIMIT 100';

		console.log("In the controller local_Wtp_data_responses");


		//res.json({data:"NOTHING"});

		Local_wtp.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	},

	'Wtp_data_signatures': function(req,res){
		console.log(req.param('params'));

		var params = req.param('params');
		console.log("params: ",params);
		var queryAttr = "";
		//console.log(params.attr);


		if(params.attr.length == 0){
			queryAttr += "*";
		}
		else{
			params.attr.forEach(function(attr){
				queryAttr += attr + ",";
			})
			queryAttr = queryAttr.substring(0, queryAttr.length - 1);
		}

		console.log("Query Params",queryAttr);


		var newQuery = "Select " + queryAttr + " from wtp_data_signatures LIMIT 100";

		//var finalQuery = 'Select * from wtp_data_signatures LIMIT 100';

		console.log("In the controller local_wtp_data_signatures");


		//res.json({data:"NOTHING"});

		Local_wtp.query(newQuery,null,function(err,data){
			console.log("Error",err);
			res.json(data);
		})


	}



};
