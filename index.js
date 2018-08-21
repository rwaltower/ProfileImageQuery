
/*Profile Image Query - index.js -by: Radasia Waltower */
class ProfileImageQuery extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if (!this.state.value) {
        alert('Must enter an email address to search');
        return;
    }  
    var url = 'index.html?q=' + this.state.value;
    window.location.replace(url);
    event.preventDefault();
  }

  render() {
    return React.createElement(
            "form",
            { onSubmit: this.handleSubmit, className: "myForm"},
            React.createElement("ul", {className: "title"}, 
                React.createElement("li", {className: "words"}, "Get"),
                React.createElement("li", {className: "words"}, "That"),
                React.createElement("li", {className: "words"}, "Pic")
            ),
            React.createElement(
              "p",
              {className: "lbl"},
              "Enter email address to search for profile image: "),
            React.createElement("input", {
                type: "email",
                ref: this.input,
                onChange: this.handleChange,
                className: "inpt"
              }),
            
            React.createElement("br"),
            React.createElement("input", { type: "submit", value: "Search", className: "btn" })
    );
  }
}

ReactDOM.render(
  React.createElement(ProfileImageQuery, null),
  document.getElementById('app')
);