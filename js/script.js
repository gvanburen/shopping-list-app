$(document).ready(function() {
	var list = $('#listItems');
	var newItem = $('#textBox');
	var clear = $('.clearButton');
	var doneButton = $('.fa fa-check');
	var deleteButton = $('.fa fa-trash');

	list.sortable();

	clear.click(clearList);

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
	var listItem = $('<li><i class="fa fa-check"></i>' + inputItem + '<i class="fa fa-trash"></i></li>');
	var newItem = $('#textBox');

	if (inputItem.length === 0 || inputItem.length > 41) {
		return false;
	}
	
	list.append(listItem);
	$(newItem).val('');
}

function doneItem () {
	if ($(this).parent().css('opacity') == '0.5') {
		$(this).parent().css('opacity','1');
	} else {
		$(this).parent().css('opacity','0.5');
	}
}

function deleteItem() {
	$(this).parent().remove();
}

function clearList() {
	var list = $('#listItems');
	
	list.html('');
}
