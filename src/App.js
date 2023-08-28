import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      csrf: "",
      username: "",
      password: "",
      error: "",
      isAuthenticated: false,
    };
  }


   tiger = () => {
    fetch("http://zoo.com:8000/auth_app/csrf/", {
      //credentials: "include",
    })
    .then(this.isResponseOk)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  render() {
    return (
      <div className="container mt-3">
        <h1>React Cookie CSRF Hack </h1>
        <button className="btn btn-primary mr-3"  onClick={this.tiger}>GET_CSRF_8000</button>
        <form action="http://zoo.com:8000/api/tigernoscrf/test_tiger_post_nocsrf/" method="post">
        <input type="submit" name="btnSubmit" value="Go_WT_CSRF" />
        </form>
        <form action="http://zoo.com:8000/api/tiger/test_tiger_post/" method="post">
        <input type="submit" name="btnSubmit" value="Go_W_CSRF" />
        </form>
      </div>
    )
  }
}

export default App;