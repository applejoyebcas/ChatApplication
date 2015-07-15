Template.appChat.helpers({
	messages: function () {
		return Messages.find({}, {sort:{createdAt: -1}, limit: 10})
	}
}); 

Template.appChat.events({
	"click .btnDelete": function (event) {
		Messages.remove(this._id);
		return false;
	},
	"keyup .txtText": function (event) {
		if(event.keyCode == 13){
			Messages.insert({
				name: $(".txtname").val(),
				mname: $(".txtmname").val(),
				lname: $(".txtlname").val(),
				id: $(".txtsid").val(),
				course: $(".txtcourse").val(),
				db: $(".txtdb").val(),
				cv: $(".txtcv").val(),
				age: $(".txtage").val(),
				gender: $(".txtgender").val(),
				add: $(".txtadd").val(),
				height: $(".txtheight").val(),
				address: $(".txtText").val(),
				


				createdAt: new Date()
			});

			$(".txtText").val();
			$(".txtText").focus();


		}
		return false;

	}
});