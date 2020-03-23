console.log("Connected!");

var to_do_list = new Array();

main();

function main() {
	var command = prompt("What would you like to do?");
	if (command == "new") {
		new_func();
	}
	else if (command == "list") {
		list_func();
	}
	else if (command == "quit") {
		
	}
	else if (command == "remove") {
		remove_func();
	}
	else if (command == "close") {
		close_func();
	}
	else {
		invalid_command_func();
	}
}

function new_func() {
	var todo = prompt("Add a new TODO");

	if (to_do_list.indexOf(todo) == -1) {
		to_do_list.push(todo);
		main();
	}
	else {
		alert("This TODO is already in your list! Add a new one.")
		new_func();
	}
}

function list_func() {
	to_do_list.forEach(function(todo) {
		console.log(todo);
	});
	main();
}

function invalid_command_func() {
	alert("Invalid command!");
	main();
}

function close_func() {
	close();
}

function remove_func() {
	var remove_todo = prompt("Remove a TODO");

	var remove_index = to_do_list.indexOf(remove_todo);

	if (remove_index == -1) {
		alert("This TODO is not in your list!");
		remove_func();
	}

	else {
		to_do_list = to_do_list.slice(0,remove_index).concat(to_do_list.slice(remove_index+1,to_do_list.length));
		main();
	}
}