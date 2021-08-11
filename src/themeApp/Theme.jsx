import { Component } from "react";
import './theme.scss';

class Theme extends Component {

    state= {
        theme : "white"
    }

    handleSwitchTheme = () => {
        if (this.state.theme === 'white'){
            this.setState({theme : "black"});
            document.documentElement.classList.remove("themeapp__button--whitetheme");
            document.documentElement.classList.add("themeapp__button--blacktheme");
        }
        else {
            this.setState({theme: "white"});
            document.documentElement.classList.remove("themeapp__button--blacktheme");
            document.documentElement.classList.add("themeapp__button--whitetheme");
        }

    }

    render () {
        return (
            <div className='content___child-app'>
                <h1>Theme App</h1>
                <button onClick={this.handleSwitchTheme}>Switch Theme</button>
            </div>
        );
    }
}

export default Theme;