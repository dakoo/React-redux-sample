var React = require('react');

var LoadingView = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Remote</h1>	
				<h1>Reality</h1>	
				<span onClick={this.props.whenClicked}>Loading</span>
			</div>	
		)
	}
})

var ListView = React.createClass({
	render: function(){
		return (
			<div>
				<span onClick={this.props.whenClicked}>Item1</span> 
				<br />
				<span onClick={this.props.whenClicked}>Item2</span> 
				<br />
				<span onClick={this.props.whenClicked}>Item3</span> 
			</div>		
		)
	}
})

var ItemView = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Image</h1>
				<h2>Date</h2>
				<h2>Drone #3</h2>
				<h3>Description</h3>
				<h3>GoGo Button</h3>
			</div>
		)
	}
})

var main = React.createClass({
	getInitialState:function(){
		return (
				{ viewId : 1}
			)
	},
	render: function() {
			if(this.state.viewId === 1){
				return <div> {this.renderLoadingView()}</div>
			} else if(this.state.viewId === 2){
				return <div> {this.renderListView()}</div>
			} else {
				return <div> {this.renderItemView()} </div>
			} 
	}, 
	renderLoadingView:function(){
		return <LoadingView whenClicked={this.view1Click} />
	},
	renderListView: function(){
		return <ListView whenClicked={this.view2Click} />
	}, 
	renderItemView: function(){
		return <ItemView />
	},
	view1Click:function(){
		this.setState({viewId: 2})
	},
	view2Click:function(){
		this.setState({viewId: 3})
	}
})

module.exports = main;