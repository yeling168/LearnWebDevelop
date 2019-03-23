const Button=React.createClass({
  getDefaultProps(){
    return {
      color:'blue',
      text:'confirm'
    };
  },
  render(){
    const {color,text}=this.props;
    return (
      <button className={`btn btn-$(color)`}>
        <em>{text}</em>
      </button>
    )
  }
})