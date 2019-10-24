import React, { Component } from 'react';
import {connect} from "react-redux";

let auth = {
    email: '',
    password: ''
};

class Login extends Component {
    state = {
        auth
    };

    handleChange = ({target: {name, value}}) => {
        let auth = {
            ...this.state.auth, [name]: value
        };
        this.setState({
            auth
        })
    };

    //handleChange = ({target: {name, value}}) => this.setState(({auth}) => ({...auth, [name]: value}));

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card mt-5">
                        <div className="card-body">
                            <div className={"row"}>
                                <div className={"col-6"}>
                                    <img src="../../../../logo.png"  style={{'width':'60px'}} alt="..."/>
                                </div>
                                <div className={"col-6 py-2"}>
                                    <h2>CARMOCAL</h2>
                                </div>
                            </div>

                            <form onSubmit={()=> null}>
                                <div className="form-group">
                                    <label>User:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        required
                                        value={this.state.auth.email}
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Password:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        required
                                        value={this.state.auth.password}
                                        onChange={(e) => this.handleChange(e)}
                                    />
                                </div>
                                <input
                                    type="submit"
                                    className="btn btn-success btn-block"
                                    value="Inicar Sesión"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    null
)(Login);