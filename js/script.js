$(document).ready(function() {
	var list = $('#listItems');
	var newItem = $('#textBox');
	var doneButton = $('.fa fa-check');
	var deleteButton = $('.fa fa-trash');

	list.sortable();

	newItem.keydown(function(enter) {
	if (enter.keyCode == 13) {
		addItem();
	}
	});

	list.on('click', '.fa-check', doneItem);
	list.on('click', '.fa-trash', deleteItem);

});

function addItem() {
	var inputItem = $('#textBox').val();
	var list = $('#listItems');
	var listItem = $('<li><span><i class="fa fa-check"></i>' + inputItem + '<i class="fa fa-trash"></i></span></li>');
	var newItem = $('#textBox');

	if (inputItem.length === 0 || inputItem.length > 41) {
		return false;
	}
	
	list.append(listItem);
	$(newItem).val('');
}

function doneItem () {
	$(this).toggleClass('.done');
}

function deleteItem() {
	$(this).parent().remove();
}
