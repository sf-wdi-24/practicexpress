$(function() {
	$.get("/api/wdi24", function (data) {
		console.log(data.students);
	});
});