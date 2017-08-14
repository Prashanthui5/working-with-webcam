sap.ui.controller("zbuttonslike_dislike.view", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zbuttonslike_dislike.view
*/
	onInit: function() {
			this.getView().byId("button").attachPress(doSome);
			var that=this;
			function doSome()
			{
				that.getView().byId("idLike").setValue(parseInt(that.getView().byId("idLike").getValue())+1);
				that.getView().byId("button").setText("DisLike");
				that.getView().byId("button").detachPress(doSome);
				that.getView().byId("button").attachPress(onDisLike);
					
			}
			function onDisLike()
			{
				that.getView().byId("idLike").setValue(parseInt(that.getView().byId("idLike").getValue())+1);
				that.getView().byId("button").setText("Like");
				that.getView().byId("button").detachPress(onDisLike);
				that.getView().byId("button").attachPress(doSome);
				
			}
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zbuttonslike_dislike.view
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zbuttonslike_dislike.view
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zbuttonslike_dislike.view
*/
//	onExit: function() {
//
//	}
/*	doSome: function()
	{
	/*	var like, dislike;
		like=this.getView().byId("idLike").value();
		dislike=this.getView().byId("idDisLike").value();
		if(this.getView().byId("button").text=="Like")
			{
				like++;
				this.getView().byId("button").text="dislike";
			
			}
		else{
			dislike++;
			this.getView().byId("button").text="like";
		} 
		
		this.getView().byId("idLike").setValue(parseInt(this.getView().byId("idLike").getValue())+1);
		this.getView().byId("button").setText("")
		
		
	} */

});